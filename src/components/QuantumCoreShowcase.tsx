import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { 
  RefreshCw, 
  Play, 
  Pause, 
  Orbit, 
  Sliders, 
  CheckCircle2,
  Eye,
  Compass,
  Layers,
  BarChart3,
  Binary,
  RotateCcw,
  Trash2,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface Props {
  lang: Language;
  onOpenWaitlist: (appName: string) => void;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface CircuitStep {
  id: string;
  gate: string;
  label: string;
  thetaAfter: number;
  phiAfter: number;
  axis: Point3D;
  rotAngleDeg: number;
}

interface GateDefinition {
  id: string;
  symbol: string;
  nameJa: string;
  nameEn: string;
  descJa: string;
  descEn: string;
  axis: Point3D; // Rotation axis on Bloch sphere (nx, ny, nz)
  angle: number; // Rotation angle in radians around axis
  matrixStr: [[string, string], [string, string]];
}

const STANDARD_GATES: GateDefinition[] = [
  {
    id: 'H',
    symbol: 'H',
    nameJa: 'アダマール (Hadamard)',
    nameEn: 'Hadamard Gate',
    descJa: 'X+Z対角軸の周りに180°回転。|0⟩ を |+⟩（50:50重ね合わせ）へ変換します。',
    descEn: 'Rotates 180° around the (X+Z)/√2 axis. Maps |0⟩ to |+⟩ and |1⟩ to |-⟩.',
    axis: { x: Math.SQRT1_2, y: 0, z: Math.SQRT1_2 },
    angle: Math.PI,
    matrixStr: [
      ['1/√2', '1/√2'],
      ['1/√2', '-1/√2']
    ]
  },
  {
    id: 'X',
    symbol: 'X',
    nameJa: 'パウリX (ビット反転 / NOT)',
    nameEn: 'Pauli-X (Bit Flip)',
    descJa: 'X軸の周りに180°回転。|0⟩ と |1⟩ の振幅を入れ替えます。',
    descEn: 'Rotates 180° around the X-axis. Quantum equivalent of a classical NOT gate.',
    axis: { x: 1, y: 0, z: 0 },
    angle: Math.PI,
    matrixStr: [
      ['0', '1'],
      ['1', '0']
    ]
  },
  {
    id: 'Y',
    symbol: 'Y',
    nameJa: 'パウリY (ビット＆位相反転)',
    nameEn: 'Pauli-Y Gate',
    descJa: 'Y軸の周りに180°回転。振幅と位相を同時に反転させます。',
    descEn: 'Rotates 180° around the Y-axis, mapping |0⟩ → i|1⟩ and |1⟩ → -i|0⟩.',
    axis: { x: 0, y: 1, z: 0 },
    angle: Math.PI,
    matrixStr: [
      ['0', '-i'],
      ['i', '0']
    ]
  },
  {
    id: 'Z',
    symbol: 'Z',
    nameJa: 'パウリZ (位相反転)',
    nameEn: 'Pauli-Z (Phase Flip)',
    descJa: 'Z軸の周りに180°回転。|1⟩ の位相符号を反転（φ → φ + π）します。',
    descEn: 'Rotates 180° around the Z-axis. Leaves |0⟩ unchanged and flips phase of |1⟩.',
    axis: { x: 0, y: 0, z: 1 },
    angle: Math.PI,
    matrixStr: [
      ['1', '0'],
      ['0', '-1']
    ]
  },
  {
    id: 'S',
    symbol: 'S',
    nameJa: 'Sゲート (√Z · +90°位相)',
    nameEn: 'S Gate (π/2 Phase)',
    descJa: 'Z軸の周りに +90° (π/2) 回転。|+⟩ を |+i⟩ へと移します。',
    descEn: 'Rotates +90° (π/2) around the Z-axis. Adds a factor of i to |1⟩.',
    axis: { x: 0, y: 0, z: 1 },
    angle: Math.PI / 2,
    matrixStr: [
      ['1', '0'],
      ['0', 'i']
    ]
  },
  {
    id: 'Sdg',
    symbol: 'S†',
    nameJa: 'S†ゲート (-90°位相)',
    nameEn: 'S† Gate (-π/2 Phase)',
    descJa: 'Z軸の周りに -90° (-π/2) 回転。Sゲートの逆演算です。',
    descEn: 'Rotates -90° (-π/2) around the Z-axis. Inverse of the S gate.',
    axis: { x: 0, y: 0, z: 1 },
    angle: -Math.PI / 2,
    matrixStr: [
      ['1', '0'],
      ['0', '-i']
    ]
  },
  {
    id: 'T',
    symbol: 'T',
    nameJa: 'Tゲート (π/8 · +45°位相)',
    nameEn: 'T Gate (π/4 Phase)',
    descJa: 'Z軸の周りに +45° (π/4) 回転。万能量子計算に不可欠な非クリフォードゲート。',
    descEn: 'Rotates +45° (π/4) around the Z-axis. Essential for universal quantum computation.',
    axis: { x: 0, y: 0, z: 1 },
    angle: Math.PI / 4,
    matrixStr: [
      ['1', '0'],
      ['0', 'e^(iπ/4)']
    ]
  },
  {
    id: 'SX',
    symbol: '√X',
    nameJa: '√Xゲート (√NOT · X軸+90°)',
    nameEn: '√X Gate (√NOT)',
    descJa: 'X軸の周りに +90° (π/2) 回転。2回連続で適用するとX（NOT）ゲートになります。',
    descEn: 'Rotates +90° (π/2) around the X-axis. Applying √X twice equals a Pauli-X gate.',
    axis: { x: 1, y: 0, z: 0 },
    angle: Math.PI / 2,
    matrixStr: [
      ['(1+i)/2', '(1-i)/2'],
      ['(1-i)/2', '(1+i)/2']
    ]
  }
];

// Rodrigues' rotation formula in 3D for rotating Bloch vector v around unit axis k by angle alpha
function rotateVector3D(v: Point3D, k: Point3D, alpha: number): Point3D {
  const cosA = Math.cos(alpha);
  const sinA = Math.sin(alpha);
  const dot = k.x * v.x + k.y * v.y + k.z * v.z;
  const crossX = k.y * v.z - k.z * v.y;
  const crossY = k.z * v.x - k.x * v.z;
  const crossZ = k.x * v.y - k.y * v.x;

  return {
    x: v.x * cosA + crossX * sinA + k.x * dot * (1 - cosA),
    y: v.y * cosA + crossY * sinA + k.y * dot * (1 - cosA),
    z: v.z * cosA + crossZ * sinA + k.z * dot * (1 - cosA),
  };
}

function sphericalToCartesian(theta: number, phi: number): Point3D {
  return {
    x: Math.sin(theta) * Math.cos(phi),
    y: Math.sin(theta) * Math.sin(phi),
    z: Math.cos(theta),
  };
}

function cartesianToSpherical(p: Point3D): { theta: number; phi: number } {
  const clampedZ = Math.max(-1, Math.min(1, p.z));
  const theta = Math.acos(clampedZ);
  let phi = Math.atan2(p.y, p.x);
  if (phi < 0) phi += 2 * Math.PI;
  // When at poles (sin(theta) ~ 0), preserve clean phi = 0
  if (Math.sin(theta) < 1e-5) {
    phi = 0;
  }
  return { theta, phi };
}

function formatComplex(re: number, im: number): string {
  const r = Math.abs(re) < 1e-4 ? 0 : re;
  const i = Math.abs(im) < 1e-4 ? 0 : im;
  if (i === 0) return r.toFixed(3);
  if (r === 0) return `${i >= 0 ? '' : '-'}${Math.abs(i).toFixed(3)}i`;
  return `${r.toFixed(3)} ${i >= 0 ? '+' : '-'} ${Math.abs(i).toFixed(3)}i`;
}

export const QuantumCoreShowcase: React.FC<Props> = ({ lang }) => {
  // Spherical state coordinates: theta in [0, PI], phi in [0, 2*PI]
  const [theta, setTheta] = useState<number>(Math.PI / 3); // 60 deg
  const [phi, setPhi] = useState<number>(Math.PI / 4);     // 45 deg

  // 3D Camera Orbit Angles (Interactive Dragging like GeoGebra 3D)
  const [camAzimuth, setCamAzimuth] = useState<number>(0.62); // ~35.5 deg
  const [camElevation, setCamElevation] = useState<number>(0.38); // ~21.8 deg
  const [isDraggingSphere, setIsDraggingSphere] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number; az: number; el: number } | null>(null);

  // Visual Overlays (GeoGebra-style layer toggles)
  const [showCoordCage, setShowCoordCage] = useState<boolean>(true);
  const [showAngleArcs, setShowAngleArcs] = useState<boolean>(true);
  const [showWireframeGrid, setShowWireframeGrid] = useState<boolean>(true);
  const [showRotationAxis, setShowRotationAxis] = useState<boolean>(true);

  // Trajectory Trail on Bloch Sphere Surface
  const [trailPoints, setTrailPoints] = useState<Point3D[]>([
    sphericalToCartesian(0, 0),
    sphericalToCartesian(Math.PI / 6, Math.PI / 4),
    sphericalToCartesian(Math.PI / 3, Math.PI / 4),
  ]);

  // Active Rotation Axis Display
  const [activeAxis, setActiveAxis] = useState<Point3D | null>({ x: Math.SQRT1_2, y: 0, z: Math.SQRT1_2 });
  const [selectedGateInfo, setSelectedGateInfo] = useState<GateDefinition>(STANDARD_GATES[0]);

  // Parametric Continuous Rotation Angle (Rx, Ry, Rz)
  const [customRotDeg, setCustomRotDeg] = useState<number>(45);

  // Quantum Circuit History Tape
  const [circuitSteps, setCircuitSteps] = useState<CircuitStep[]>([]);

  // Inspector Tabs: 'algebra' | 'matrix' | 'measure'
  const [activeInspectorTab, setActiveInspectorTab] = useState<'algebra' | 'matrix' | 'measure'>('algebra');

  // Multi-Shot Measurement Lab State
  const [measureBasis, setMeasureBasis] = useState<'Z' | 'X' | 'Y'>('Z');
  const [shotCount, setShotCount] = useState<number>(1024);
  const [shotResults, setShotResults] = useState<{ count0: number; count1: number; total: number } | null>(null);

  // Auto-precession (Larmor precession simulation)
  const [isAutoPrecessing, setIsAutoPrecessing] = useState<boolean>(false);

  // Status banner text
  const [lastOperationText, setLastOperationText] = useState<string>(
    lang === 'ja'
      ? 'ブロッホ球をマウス・指でドラッグして3D視点を自由に回転できます。量子ゲートや連続回転 R(γ) を適用すると、球面上の状態遷移軌跡がリアルタイムに描画されます。'
      : 'Drag the Bloch sphere to orbit in 3D. Apply quantum gates or parametric rotations R(γ) to trace geodesic state trajectories on the sphere.'
  );

  // Animation reference for smooth geodesic gate transitions
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isAutoPrecessing) return;
    const interval = setInterval(() => {
      setPhi((prev) => {
        const next = (prev + 0.03) % (2 * Math.PI);
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isAutoPrecessing]);

  // Smoothly animate rotation along the Bloch sphere surface around unit axis `axis` by `angleRad`
  const animateBlochRotation = (
    axis: Point3D,
    angleRad: number,
    gateSymbol: string,
    gateLabel: string,
    description: string
  ) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsAutoPrecessing(false);
    setActiveAxis(axis);
    setLastOperationText(description);

    const startVec = sphericalToCartesian(theta, phi);
    const totalFrames = 18;
    let frame = 0;
    const newTrailSegment: Point3D[] = [];

    const stepAnim = () => {
      frame++;
      const progress = frame / totalFrames;
      // Smooth ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVec = rotateVector3D(startVec, axis, angleRad * eased);
      const { theta: nextT, phi: nextP } = cartesianToSpherical(currentVec);

      setTheta(nextT);
      setPhi(nextP);
      newTrailSegment.push(currentVec);

      if (frame < totalFrames) {
        animRef.current = requestAnimationFrame(stepAnim);
      } else {
        const finalVec = rotateVector3D(startVec, axis, angleRad);
        const finalSph = cartesianToSpherical(finalVec);
        setTheta(finalSph.theta);
        setPhi(finalSph.phi);
        setTrailPoints((prev) => [...prev.slice(-60), ...newTrailSegment]);
        setCircuitSteps((prev) => [
          ...prev.slice(-11),
          {
            id: `step-${Date.now()}-${Math.random()}`,
            gate: gateSymbol,
            label: gateLabel,
            thetaAfter: finalSph.theta,
            phiAfter: finalSph.phi,
            axis,
            rotAngleDeg: Math.round((angleRad * 180) / Math.PI),
          },
        ]);
      }
    };

    animRef.current = requestAnimationFrame(stepAnim);
  };

  // Apply standard discrete gate
  const handleApplyStandardGate = (gate: GateDefinition) => {
    setSelectedGateInfo(gate);
    animateBlochRotation(
      gate.axis,
      gate.angle,
      gate.symbol,
      gate.nameEn,
      lang === 'ja' ? `【${gate.symbol} ゲート適用】${gate.descJa}` : `[Applied ${gate.symbol} Gate] ${gate.descEn}`
    );
  };

  // Apply continuous parametric rotation gate Rx(gamma), Ry(gamma), Rz(gamma)
  const handleApplyParametricRotation = (axisName: 'X' | 'Y' | 'Z') => {
    const rad = (customRotDeg * Math.PI) / 180;
    const axis: Point3D =
      axisName === 'X' ? { x: 1, y: 0, z: 0 } : axisName === 'Y' ? { x: 0, y: 1, z: 0 } : { x: 0, y: 0, z: 1 };
    const gateSym = `R${axisName.toLowerCase()}(${customRotDeg}°)`;
    animateBlochRotation(
      axis,
      rad,
      gateSym,
      `Rotation ${axisName} (${customRotDeg}°)`,
      lang === 'ja'
        ? `【連続回転ゲート ${gateSym}】${axisName}軸の周りに ${customRotDeg}° 回転しました。`
        : `[Parametric Gate ${gateSym}] Rotated state vector by ${customRotDeg}° around the ${axisName}-axis.`
    );
  };

  // Set exact basis state
  const handleSetBasisState = (label: string, targetTheta: number, targetPhi: number) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsAutoPrecessing(false);
    const vec = sphericalToCartesian(targetTheta, targetPhi);
    setTheta(targetTheta);
    setPhi(targetPhi);
    setTrailPoints([vec]);
    setCircuitSteps([
      {
        id: `init-${Date.now()}`,
        gate: label,
        label: `Initialize ${label}`,
        thetaAfter: targetTheta,
        phiAfter: targetPhi,
        axis: { x: 0, y: 0, z: 1 },
        rotAngleDeg: 0,
      },
    ]);
    setLastOperationText(
      lang === 'ja'
        ? `量子ビットを基底状態 ${label} にセットしました（軌跡と回路テープを初期化）。`
        : `Initialized qubit to basis state ${label} and reset circuit tape.`
    );
  };

  // Load Preset Quantum Algorithm / Sequence
  const handleRunPresetCircuit = (preset: 'superposition' | 'interference' | 'sqrt_not' | 'phase_walk') => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsAutoPrecessing(false);

    let sequence: { sym: string; axis: Point3D; angle: number }[] = [];
    let descJa = '';
    let descEn = '';

    if (preset === 'superposition') {
      sequence = [{ sym: 'H', axis: { x: Math.SQRT1_2, y: 0, z: Math.SQRT1_2 }, angle: Math.PI }];
      descJa = '【プリセット：アダマール重ね合わせ】|0⟩ に Hゲートを適用し、|+⟩ = (|0⟩+|1⟩)/√2 を生成しました。';
      descEn = '[Preset: Hadamard Superposition] Applied H to |0⟩ to create equal superposition |+⟩.';
    } else if (preset === 'interference') {
      sequence = [
        { sym: 'H', axis: { x: Math.SQRT1_2, y: 0, z: Math.SQRT1_2 }, angle: Math.PI },
        { sym: 'Z', axis: { x: 0, y: 0, z: 1 }, angle: Math.PI },
        { sym: 'H', axis: { x: Math.SQRT1_2, y: 0, z: Math.SQRT1_2 }, angle: Math.PI },
      ];
      descJa = '【プリセット：量子干渉 (H → Z → H)】|0⟩ → |+⟩ → |-⟩ → |1⟩。2つのHゲートの間で位相を反転(Z)させると、量子干渉により確定的に |1⟩ へ遷移します（HZH = X）。';
      descEn = '[Preset: Quantum Interference (H → Z → H)] Phase flip Z sandwiched between two H gates deterministically transforms |0⟩ into |1⟩ (HZH = X).';
    } else if (preset === 'sqrt_not') {
      sequence = [
        { sym: '√X', axis: { x: 1, y: 0, z: 0 }, angle: Math.PI / 2 },
        { sym: '√X', axis: { x: 1, y: 0, z: 0 }, angle: Math.PI / 2 },
      ];
      descJa = '【プリセット：√NOT 2回適用 (√X → √X)】X軸周りに90°ずつ2回回転することで、|0⟩ から赤道 |-i⟩ を経由して |1⟩ へ反転します。';
      descEn = '[Preset: Double √NOT (√X → √X)] Two 90° X-rotations carry |0⟩ through |-i⟩ on the equator to |1⟩.';
    } else {
      sequence = [
        { sym: 'H', axis: { x: Math.SQRT1_2, y: 0, z: Math.SQRT1_2 }, angle: Math.PI },
        { sym: 'T', axis: { x: 0, y: 0, z: 1 }, angle: Math.PI / 4 },
        { sym: 'T', axis: { x: 0, y: 0, z: 1 }, angle: Math.PI / 4 },
      ];
      descJa = '【プリセット：Tゲート位相ウォーク (H → T → T)】|0⟩ を赤道 |+⟩ に倒した後、Tゲート(+45°)を2回適用して |+i⟩ (+90°) へ移動しました。';
      descEn = '[Preset: T-Gate Phase Walk (H → T → T)] Moves |0⟩ to equator |+⟩, then steps +45° twice around Z to reach |+i⟩.';
    }

    // Compute full trail and steps from |0>
    let currVec: Point3D = { x: 0, y: 0, z: 1 };
    const fullTrail: Point3D[] = [currVec];
    const newSteps: CircuitStep[] = [];

    sequence.forEach((op, idx) => {
      for (let s = 1; s <= 12; s++) {
        fullTrail.push(rotateVector3D(currVec, op.axis, (op.angle * s) / 12));
      }
      currVec = rotateVector3D(currVec, op.axis, op.angle);
      const sph = cartesianToSpherical(currVec);
      newSteps.push({
        id: `preset-${Date.now()}-${idx}`,
        gate: op.sym,
        label: op.sym,
        thetaAfter: sph.theta,
        phiAfter: sph.phi,
        axis: op.axis,
        rotAngleDeg: Math.round((op.angle * 180) / Math.PI),
      });
    });

    const finalSph = cartesianToSpherical(currVec);
    setTheta(finalSph.theta);
    setPhi(finalSph.phi);
    setTrailPoints(fullTrail);
    setCircuitSteps(newSteps);
    setActiveAxis(sequence[sequence.length - 1].axis);
    setLastOperationText(lang === 'ja' ? descJa : descEn);
  };

  // Single-shot projective collapse measurement in Z-basis
  const handleProjectiveCollapse = () => {
    const p0 = Math.cos(theta / 2) ** 2;
    const rand = Math.random();
    if (rand < p0) {
      setTheta(0);
      setPhi(0);
      setTrailPoints((prev) => [...prev, { x: 0, y: 0, z: 1 }]);
      setCircuitSteps((prev) => [
        ...prev.slice(-11),
        {
          id: `meas-${Date.now()}`,
          gate: 'M(|0⟩)',
          label: 'Measured |0⟩',
          thetaAfter: 0,
          phiAfter: 0,
          axis: { x: 0, y: 0, z: 1 },
          rotAngleDeg: 0,
        },
      ]);
      setLastOperationText(
        lang === 'ja'
          ? `【射影観測 (Measurement)】理論確率 P(|0⟩) = ${(p0 * 100).toFixed(1)}% に従い、波動関数が北極 |0⟩ に収束しました。`
          : `[Projective Measurement] Wavefunction collapsed to North Pole |0⟩ (prior probability: ${(p0 * 100).toFixed(1)}%).`
      );
    } else {
      setTheta(Math.PI);
      setPhi(0);
      setTrailPoints((prev) => [...prev, { x: 0, y: 0, z: -1 }]);
      setCircuitSteps((prev) => [
        ...prev.slice(-11),
        {
          id: `meas-${Date.now()}`,
          gate: 'M(|1⟩)',
          label: 'Measured |1⟩',
          thetaAfter: Math.PI,
          phiAfter: 0,
          axis: { x: 0, y: 0, z: 1 },
          rotAngleDeg: 0,
        },
      ]);
      setLastOperationText(
        lang === 'ja'
          ? `【射影観測 (Measurement)】理論確率 P(|1⟩) = ${((1 - p0) * 100).toFixed(1)}% に従い、波動関数が南極 |1⟩ に収束しました。`
          : `[Projective Measurement] Wavefunction collapsed to South Pole |1⟩ (prior probability: ${((1 - p0) * 100).toFixed(1)}%).`
      );
    }
  };

  // Run N-Shot Statistical Monte Carlo Experiment in chosen basis (Z, X, or Y)
  const runMultiShotExperiment = (basis: 'Z' | 'X' | 'Y' = measureBasis, shots: number = shotCount) => {
    const bloch = sphericalToCartesian(theta, phi);
    const expVal = basis === 'Z' ? bloch.z : basis === 'X' ? bloch.x : bloch.y;
    const probPlus = (1 + expVal) / 2;
    let c0 = 0;
    for (let i = 0; i < shots; i++) {
      if (Math.random() < probPlus) c0++;
    }
    setShotResults({ count0: c0, count1: shots - c0, total: shots });
  };

  // Automatically update multi-shot simulation when theta/phi/basis/shotCount changes
  useEffect(() => {
    runMultiShotExperiment(measureBasis, shotCount);
  }, [theta, phi, measureBasis, shotCount]);

  // ================= MATHEMATICAL QUANTITIES =================
  const blochVec = sphericalToCartesian(theta, phi);
  const probZero = Math.cos(theta / 2) ** 2;
  const probOne = Math.sin(theta / 2) ** 2;

  // Complex amplitudes alpha = cos(theta/2), beta = e^(i*phi) sin(theta/2)
  const alphaRe = Math.cos(theta / 2);
  const alphaIm = 0;
  const betaMag = Math.sin(theta / 2);
  const betaRe = betaMag * Math.cos(phi);
  const betaIm = betaMag * Math.sin(phi);

  // Density Matrix rho = |psi><psi|
  // rho_00 = |alpha|^2, rho_11 = |beta|^2, rho_01 = alpha * beta^* = alphaRe * (betaRe - i betaIm)
  const rho00 = probZero;
  const rho11 = probOne;
  const rho01Re = alphaRe * betaRe;
  const rho01Im = -alphaRe * betaIm;
  const rho10Re = alphaRe * betaRe;
  const rho10Im = alphaRe * betaIm;

  const degTheta = Math.round((theta * 180) / Math.PI);
  const degPhi = Math.round((phi * 180) / Math.PI) % 360;

  // ================= 3D PROJECTION ENGINE (GeoGebra 3D style) =================
  const sphereRadius = 112;

  // Project a 3D unit point (x, y, z) to 2D SVG coordinates (u, v) + depth w
  // Standard physics convention: +Z is Up (svgY negative), +X comes forward-left, +Y goes right
  const project3D = (p: Point3D, scale: number = sphereRadius): { u: number; v: number; depth: number } => {
    // Rotate around Z by camAzimuth
    const cosAz = Math.cos(camAzimuth);
    const sinAz = Math.sin(camAzimuth);
    const x1 = p.x * cosAz - p.y * sinAz;
    const y1 = p.x * sinAz + p.y * cosAz;
    const z1 = p.z;

    // Rotate elevation around camera right axis
    const cosEl = Math.cos(camElevation);
    const sinEl = Math.sin(camElevation);
    const depth = x1 * cosEl + z1 * sinEl;
    const screenY = -z1 * cosEl + x1 * sinEl;
    const screenX = y1;

    return {
      u: screenX * scale,
      v: screenY * scale,
      depth,
    };
  };

  // Build SVG path from a polyline of 3D points
  const buildProjectedPath = (points: Point3D[], scale: number = sphereRadius): string => {
    if (points.length === 0) return '';
    return points
      .map((pt, i) => {
        const { u, v } = project3D(pt, scale);
        return `${i === 0 ? 'M' : 'L'} ${u.toFixed(2)} ${v.toFixed(2)}`;
      })
      .join(' ');
  };

  // Generate 3D circle points for latitude / longitude wireframe
  const generateCirclePoints = (type: 'lat' | 'lon', fixedAngle: number, segments: number = 48): Point3D[] => {
    const pts: Point3D[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * 2 * Math.PI;
      if (type === 'lat') {
        // fixedAngle is theta in [0, PI]
        pts.push({
          x: Math.sin(fixedAngle) * Math.cos(t),
          y: Math.sin(fixedAngle) * Math.sin(t),
          z: Math.cos(fixedAngle),
        });
      } else {
        // fixedAngle is phi
        pts.push({
          x: Math.sin(t) * Math.cos(fixedAngle),
          y: Math.sin(t) * Math.sin(fixedAngle),
          z: Math.cos(t),
        });
      }
    }
    return pts;
  };

  // Generate 3D arc for polar angle theta (from +Z pole down to state vector in the meridian plane phi)
  const generateThetaArc = (): Point3D[] => {
    const pts: Point3D[] = [];
    const steps = 20;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * theta;
      pts.push(sphericalToCartesian(t, phi));
    }
    return pts;
  };

  // Generate 3D arc for azimuthal angle phi (on XY equator from +X to phi)
  const generatePhiArc = (): Point3D[] => {
    const pts: Point3D[] = [];
    const steps = 24;
    for (let i = 0; i <= steps; i++) {
      const p = (i / steps) * phi;
      pts.push({ x: Math.cos(p), y: Math.sin(p), z: 0 });
    }
    return pts;
  };

  // Mouse / Touch handlers for 3D Orbit Camera
  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDraggingSphere(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      az: camAzimuth,
      el: camElevation,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDraggingSphere || !dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    const nextAz = dragStartRef.current.az - dx * 0.012;
    const nextEl = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, dragStartRef.current.el + dy * 0.012));
    setCamAzimuth(nextAz);
    setCamElevation(nextEl);
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isDraggingSphere) {
      e.currentTarget.releasePointerCapture(e.pointerId);
      setIsDraggingSphere(false);
      dragStartRef.current = null;
    }
  };

  // Projected key points
  const projOrigin = project3D({ x: 0, y: 0, z: 0 });
  const projState = project3D(blochVec);
  const projEqShadow = project3D({ x: blochVec.x, y: blochVec.y, z: 0 });
  const projXShadow = project3D({ x: blochVec.x, y: 0, z: 0 });
  const projYShadow = project3D({ x: 0, y: blochVec.y, z: 0 });
  const projZShadow = project3D({ x: 0, y: 0, z: blochVec.z });

  const poleLabels: { label: string; sub: string; pos: Point3D; color: string }[] = [
    { label: '|0⟩', sub: '+Z', pos: { x: 0, y: 0, z: 1.18 }, color: '#38bdf8' },
    { label: '|1⟩', sub: '-Z', pos: { x: 0, y: 0, z: -1.18 }, color: '#818cf8' },
    { label: '|+⟩', sub: '+X', pos: { x: 1.2, y: 0, z: 0 }, color: '#34d399' },
    { label: '|-⟩', sub: '-X', pos: { x: -1.2, y: 0, z: 0 }, color: '#64748b' },
    { label: '|+i⟩', sub: '+Y', pos: { x: 0, y: 1.2, z: 0 }, color: '#fbbf24' },
    { label: '|-i⟩', sub: '-Y', pos: { x: 0, y: -1.2, z: 0 }, color: '#64748b' },
  ];

  return (
    <div id="qua-core-matrix" className="relative rounded-2xl p-5 sm:p-8 bg-[#0b1120] border border-slate-800 shadow-2xl">
      
      {/* ================= TOP HEADER & BASIS PRESETS ================= */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono-tech text-sky-400 mb-1.5">
            <Orbit className="w-4 h-4" />
            <span>INTERACTIVE 3D QUANTUM GEOMETRY &amp; STATE WORKBENCH</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {lang === 'ja' ? '量子ビット（Qubit）モデル オンラインUI' : 'Online Qubit Model & 3D Bloch Sphere Workbench'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-3xl font-sans leading-relaxed">
            {lang === 'ja'
              ? '3Dブロッホ球の自由視点回転、測地線（状態遷移軌跡）トレース、ユニタリ行列・密度行列 ρ のリアルタイム計算、量子回路テープ、およびマルチショット統計観測を備えた高機能オンライン量子ビットシミュレーターです。'
              : 'High-precision 3D Bloch sphere workbench featuring interactive 3D camera orbit, geodesic trajectory tracing, real-time unitary & density matrix calculation, quantum circuit tape, and multi-shot statistical measurement.'}
          </p>
        </div>

        {/* Quick 6-Pole Basis State Initializers */}
        <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
          <span className="text-[11px] font-mono-tech text-slate-400">
            {lang === 'ja' ? '基底状態へワンクリック初期化 (Basis States):' : 'Initialize to Basis State:'}
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { label: '|0⟩', t: 0, p: 0, desc: '+Z' },
              { label: '|1⟩', t: Math.PI, p: 0, desc: '-Z' },
              { label: '|+⟩', t: Math.PI / 2, p: 0, desc: '+X' },
              { label: '|-⟩', t: Math.PI / 2, p: Math.PI, desc: '-X' },
              { label: '|+i⟩', t: Math.PI / 2, p: Math.PI / 2, desc: '+Y' },
              { label: '|-i⟩', t: Math.PI / 2, p: (3 * Math.PI) / 2, desc: '-Y' },
            ].map((b) => (
              <button
                key={b.label}
                onClick={() => handleSetBasisState(b.label, b.t, b.p)}
                className="px-2.5 py-1.5 rounded-lg bg-[#070b14] hover:bg-blue-950/80 border border-slate-700/80 hover:border-sky-500/60 text-xs font-mono-tech text-white transition-colors cursor-pointer whitespace-nowrap"
                title={`Set state to ${b.label} (${b.desc} pole)`}
              >
                <span className="font-bold text-sky-400">{b.label}</span>
                <span className="text-[10px] text-slate-400 ml-1">({b.desc})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= QUANTUM CIRCUIT TAPE & PRESET ALGORITHMS ================= */}
      <div className="my-5 p-4 rounded-xl bg-[#070b14] border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <Binary className="w-4 h-4 text-sky-400" />
            <span>{lang === 'ja' ? '量子回路テープ (1-Qubit Quantum Circuit Wire)' : '1-Qubit Quantum Circuit Tape'}</span>
            <span className="text-[11px] font-normal text-slate-400">
              {lang === 'ja' ? '— ゲートをクリックすると回路に追加・アニメーション再生されます' : '— Gates applied are recorded along the wire'}
            </span>
          </div>

          {/* Preset Circuit Demos */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-slate-400 mr-1">{lang === 'ja' ? '回路プリセット:' : 'Presets:'}</span>
            <button
              onClick={() => handleRunPresetCircuit('interference')}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-sky-300 cursor-pointer whitespace-nowrap"
            >
              H → Z → H ({lang === 'ja' ? '量子干渉' : 'Interference'})
            </button>
            <button
              onClick={() => handleRunPresetCircuit('sqrt_not')}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-indigo-300 cursor-pointer whitespace-nowrap"
            >
              √X → √X (√NOT×2)
            </button>
            <button
              onClick={() => handleRunPresetCircuit('phase_walk')}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-emerald-300 cursor-pointer whitespace-nowrap"
            >
              H → T → T ({lang === 'ja' ? '位相ウォーク' : 'Phase Walk'})
            </button>
            {circuitSteps.length > 0 && (
              <button
                onClick={() => handleSetBasisState('|0⟩', 0, 0)}
                className="px-2 py-1 rounded bg-slate-900 hover:bg-rose-950/60 border border-slate-800 text-[11px] text-slate-400 hover:text-rose-300 cursor-pointer inline-flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>{lang === 'ja' ? 'クリア' : 'Clear'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Visual Quantum Wire */}
        <div className="relative flex items-center gap-1.5 overflow-x-auto py-2 px-3 rounded-lg bg-[#0b1120] border border-slate-800/90 min-h-[52px]">
          <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 font-mono-tech text-xs font-bold text-sky-400 shrink-0">
            q[0] : |0⟩
          </div>
          <div className="w-4 h-[2px] bg-slate-700 shrink-0" />

          {circuitSteps.length === 0 ? (
            <span className="text-xs text-slate-500 font-mono-tech">
              {lang === 'ja'
                ? '── [ ゲートを選択するとここに量子回路が構築されます ] ──'
                : '── [ Click any quantum gate below to append to circuit ] ──'}
            </span>
          ) : (
            circuitSteps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => {
                    setTheta(step.thetaAfter);
                    setPhi(step.phiAfter);
                    setActiveAxis(step.axis);
                    setLastOperationText(
                      lang === 'ja'
                        ? `回路ステップ #${idx + 1} [${step.gate}] 適用直後の状態（θ=${Math.round((step.thetaAfter * 180) / Math.PI)}°, φ=${Math.round((step.phiAfter * 180) / Math.PI)}°）を表示しています。`
                        : `Inspecting state after circuit step #${idx + 1} [${step.gate}].`
                    );
                  }}
                  className="px-2.5 py-1 rounded-md bg-blue-950/90 hover:bg-blue-900 border border-sky-500/50 text-xs font-mono-tech font-bold text-white shadow-sm shrink-0 cursor-pointer transition-colors"
                  title="Click to inspect state at this step"
                >
                  {step.gate}
                </button>
                <div className="w-3 h-[2px] bg-slate-700 shrink-0" />
              </React.Fragment>
            ))
          )}

          <div className="ml-auto pl-3 flex items-center gap-2 shrink-0 text-xs font-mono-tech tabular-nums text-slate-300">
            <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
            <span>
              |ψ⟩ = {alphaRe.toFixed(2)}|0⟩ + ({formatComplex(betaRe, betaIm)})|1⟩
            </span>
          </div>
        </div>
      </div>

      {/* ================= MAIN WORKBENCH GRID (LEFT: 3D BLOCH SPHERE, RIGHT: CONTROLS & CAS) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        
        {/* ================= LEFT COLUMN (6 COLS): INTERACTIVE 3D BLOCH SPHERE VIEWPORT ================= */}
        <div className="lg:col-span-6 flex flex-col rounded-xl bg-[#070b14] border border-slate-800 overflow-hidden">
          
          {/* Top Camera & Layer Toolbar */}
          <div className="p-3.5 bg-slate-900/70 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-mono-tech text-slate-400 mr-1">
                {lang === 'ja' ? '視点:' : 'View:'}
              </span>
              <button
                onClick={() => { setCamAzimuth(0.62); setCamElevation(0.38); }}
                className="px-2 py-1 rounded bg-[#0b1120] hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-slate-200 cursor-pointer"
              >
                3D Iso
              </button>
              <button
                onClick={() => { setCamAzimuth(0); setCamElevation(0); }}
                className="px-2 py-1 rounded bg-[#0b1120] hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-slate-200 cursor-pointer"
              >
                Y-Z
              </button>
              <button
                onClick={() => { setCamAzimuth(Math.PI / 2); setCamElevation(0); }}
                className="px-2 py-1 rounded bg-[#0b1120] hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-slate-200 cursor-pointer"
              >
                X-Z
              </button>
              <button
                onClick={() => { setCamAzimuth(0); setCamElevation(Math.PI / 2); }}
                className="px-2 py-1 rounded bg-[#0b1120] hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-slate-200 cursor-pointer"
              >
                X-Y (Top)
              </button>
            </div>

            {/* Layer Toggles */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setShowCoordCage(!showCoordCage)}
                className={`px-2 py-1 rounded text-[11px] font-mono-tech border cursor-pointer transition-colors ${
                  showCoordCage ? 'bg-sky-950/80 border-sky-500/50 text-sky-300' : 'bg-[#0b1120] border-slate-800 text-slate-500'
                }`}
              >
                {lang === 'ja' ? '座標投影' : 'Projections'}
              </button>
              <button
                onClick={() => setShowAngleArcs(!showAngleArcs)}
                className={`px-2 py-1 rounded text-[11px] font-mono-tech border cursor-pointer transition-colors ${
                  showAngleArcs ? 'bg-sky-950/80 border-sky-500/50 text-sky-300' : 'bg-[#0b1120] border-slate-800 text-slate-500'
                }`}
              >
                {lang === 'ja' ? '角度扇形(θ,φ)' : 'Angles (θ,φ)'}
              </button>
              <button
                onClick={() => setShowRotationAxis(!showRotationAxis)}
                className={`px-2 py-1 rounded text-[11px] font-mono-tech border cursor-pointer transition-colors ${
                  showRotationAxis ? 'bg-amber-950/80 border-amber-500/50 text-amber-300' : 'bg-[#0b1120] border-slate-800 text-slate-500'
                }`}
              >
                {lang === 'ja' ? '回転軸 n̂' : 'Axis n̂'}
              </button>
              <button
                onClick={() => setTrailPoints([blochVec])}
                className="px-2 py-1 rounded bg-[#0b1120] hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-slate-300 cursor-pointer"
                title="Clear trajectory trail"
              >
                {lang === 'ja' ? '軌跡消去' : 'Clear Trail'}
              </button>
            </div>
          </div>

          {/* 3D Interactive Bloch Sphere Canvas */}
          <div className="relative flex items-center justify-center p-4 select-none">
            <div className="absolute top-3 left-4 text-[11px] font-mono-tech text-slate-400 pointer-events-none">
              <div>{lang === 'ja' ? 'ドラッグで3D視点回転' : 'Drag to Orbit 3D Camera'}</div>
              <div className="text-sky-400 tabular-nums mt-0.5">
                θ = {degTheta}° ({(theta / Math.PI).toFixed(2)}π), φ = {degPhi}° ({(phi / Math.PI).toFixed(2)}π)
              </div>
            </div>

            <div className="absolute top-3 right-4 flex items-center gap-1.5">
              <button
                id="btn-toggle-core-rotation"
                onClick={() => setIsAutoPrecessing(!isAutoPrecessing)}
                className="px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-[11px] font-mono-tech text-slate-200 flex items-center gap-1 cursor-pointer"
              >
                {isAutoPrecessing ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-sky-400" />}
                <span>{isAutoPrecessing ? (lang === 'ja' ? '歳差停止' : 'Stop') : (lang === 'ja' ? 'ラーモア歳差' : 'Precess')}</span>
              </button>
            </div>

            <svg
              viewBox="-165 -160 330 320"
              className={`w-full max-w-[380px] h-[340px] sm:h-[370px] ${
                isDraggingSphere ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              <defs>
                <radialGradient id="bloch3DSphere" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#1e293b" stopOpacity="0.45" />
                  <stop offset="65%" stopColor="#0f172a" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0.92" />
                </radialGradient>
                <filter id="vectorGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer Sphere Silhouette */}
              <circle
                cx="0"
                cy="0"
                r={sphereRadius}
                fill="url(#bloch3DSphere)"
                stroke="rgba(148, 163, 184, 0.35)"
                strokeWidth="1.5"
              />

              {/* Latitude & Longitude Wireframe Grid */}
              {showWireframeGrid && (
                <g>
                  {/* Parallels of Latitude: 45 deg, 90 deg (Equator), 135 deg */}
                  {[Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].map((lat, idx) => (
                    <path
                      key={`lat-${idx}`}
                      d={buildProjectedPath(generateCirclePoints('lat', lat, 56))}
                      fill="none"
                      stroke={idx === 1 ? 'rgba(56, 189, 248, 0.42)' : 'rgba(148, 163, 184, 0.14)'}
                      strokeWidth={idx === 1 ? '1.3' : '0.9'}
                      strokeDasharray={idx === 1 ? 'none' : '3 3'}
                    />
                  ))}
                  {/* Meridians of Longitude: 0, 45, 90, 135 deg */}
                  {[0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].map((lon, idx) => (
                    <path
                      key={`lon-${idx}`}
                      d={buildProjectedPath(generateCirclePoints('lon', lon, 56))}
                      fill="none"
                      stroke={idx === 0 || idx === 2 ? 'rgba(148, 163, 184, 0.25)' : 'rgba(148, 163, 184, 0.12)'}
                      strokeWidth="0.9"
                      strokeDasharray="3 3"
                    />
                  ))}
                </g>
              )}

              {/* 3D Coordinate Axes: X, Y, Z */}
              <g>
                {/* X-Axis (-1 to +1) */}
                <path
                  d={buildProjectedPath([{ x: -1.08, y: 0, z: 0 }, { x: 1.08, y: 0, z: 0 }])}
                  stroke="rgba(52, 211, 153, 0.45)"
                  strokeWidth="1.2"
                />
                {/* Y-Axis (-1 to +1) */}
                <path
                  d={buildProjectedPath([{ x: 0, y: -1.08, z: 0 }, { x: 0, y: 1.08, z: 0 }])}
                  stroke="rgba(251, 191, 36, 0.45)"
                  strokeWidth="1.2"
                />
                {/* Z-Axis (-1 to +1) */}
                <path
                  d={buildProjectedPath([{ x: 0, y: 0, z: -1.08 }, { x: 0, y: 0, z: 1.08 }])}
                  stroke="rgba(56, 189, 248, 0.55)"
                  strokeWidth="1.4"
                />
              </g>

              {/* Active Quantum Gate Rotation Axis n̂ */}
              {showRotationAxis && activeAxis && (
                <g>
                  <path
                    d={buildProjectedPath([
                      { x: -activeAxis.x * 1.15, y: -activeAxis.y * 1.15, z: -activeAxis.z * 1.15 },
                      { x: activeAxis.x * 1.15, y: activeAxis.y * 1.15, z: activeAxis.z * 1.15 },
                    ])}
                    stroke="#f59e0b"
                    strokeWidth="1.8"
                    strokeDasharray="4 3"
                  />
                  {(() => {
                    const tip = project3D({
                      x: activeAxis.x * 1.22,
                      y: activeAxis.y * 1.22,
                      z: activeAxis.z * 1.22,
                    });
                    return (
                      <text
                        x={tip.u}
                        y={tip.v}
                        fill="#fbbf24"
                        fontSize="9"
                        textAnchor="middle"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        n̂ ({selectedGateInfo.symbol})
                      </text>
                    );
                  })()}
                </g>
              )}

              {/* Angle Sectors (θ polar arc & φ azimuthal arc) */}
              {showAngleArcs && (
                <g>
                  {/* Theta arc from +Z to state vector */}
                  {theta > 0.05 && (
                    <path
                      d={`${buildProjectedPath(generateThetaArc(), sphereRadius * 0.34)} L ${projOrigin.u} ${projOrigin.v} Z`}
                      fill="rgba(56, 189, 248, 0.16)"
                      stroke="#38bdf8"
                      strokeWidth="1.2"
                    />
                  )}
                  {/* Phi arc on XY plane from +X to equatorial shadow */}
                  {Math.sin(theta) > 0.05 && phi > 0.05 && (
                    <path
                      d={`${buildProjectedPath(generatePhiArc(), sphereRadius * 0.32 * Math.sin(theta))} L ${projOrigin.u} ${projOrigin.v} Z`}
                      fill="rgba(129, 140, 248, 0.16)"
                      stroke="#818cf8"
                      strokeWidth="1.2"
                    />
                  )}
                </g>
              )}

              {/* Coordinate Projection Cage (x, y, z drop lines) */}
              {showCoordCage && (
                <g>
                  {/* State tip to equatorial plane shadow (x, y, 0) */}
                  <line
                    x1={projState.u}
                    y1={projState.v}
                    x2={projEqShadow.u}
                    y2={projEqShadow.v}
                    stroke="rgba(56, 189, 248, 0.55)"
                    strokeWidth="1.1"
                    strokeDasharray="3 2"
                  />
                  {/* Origin to equatorial shadow */}
                  <line
                    x1={projOrigin.u}
                    y1={projOrigin.v}
                    x2={projEqShadow.u}
                    y2={projEqShadow.v}
                    stroke="rgba(129, 140, 248, 0.6)"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  {/* Equatorial shadow to X and Y axes */}
                  <line
                    x1={projEqShadow.u}
                    y1={projEqShadow.v}
                    x2={projXShadow.u}
                    y2={projXShadow.v}
                    stroke="rgba(52, 211, 153, 0.4)"
                    strokeWidth="0.9"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1={projEqShadow.u}
                    y1={projEqShadow.v}
                    x2={projYShadow.u}
                    y2={projYShadow.v}
                    stroke="rgba(251, 191, 36, 0.4)"
                    strokeWidth="0.9"
                    strokeDasharray="2 2"
                  />
                  {/* State tip to Z-axis */}
                  <line
                    x1={projState.u}
                    y1={projState.v}
                    x2={projZShadow.u}
                    y2={projZShadow.v}
                    stroke="rgba(56, 189, 248, 0.4)"
                    strokeWidth="0.9"
                    strokeDasharray="2 2"
                  />
                  <circle cx={projEqShadow.u} cy={projEqShadow.v} r="3" fill="#818cf8" />
                </g>
              )}

              {/* Geodesic State Evolution Trajectory Trail */}
              {trailPoints.length > 1 && (
                <path
                  d={buildProjectedPath(trailPoints)}
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.85"
                />
              )}

              {/* 6 Basis State Labels in 3D */}
              {poleLabels.map((pole) => {
                const pt = project3D(pole.pos);
                return (
                  <g key={pole.label} transform={`translate(${pt.u}, ${pt.v})`}>
                    <text
                      x="0"
                      y="0"
                      fill={pole.color}
                      fontSize="11"
                      textAnchor="middle"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {pole.label}
                    </text>
                    <text
                      x="0"
                      y="10"
                      fill="#64748b"
                      fontSize="8.5"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {pole.sub}
                    </text>
                  </g>
                );
              })}

              {/* Main Qubit State Vector |ψ⟩ */}
              <line
                x1={projOrigin.u}
                y1={projOrigin.v}
                x2={projState.u}
                y2={projState.v}
                stroke="#38bdf8"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#vectorGlow)"
              />

              {/* Origin Node */}
              <circle cx={projOrigin.u} cy={projOrigin.v} r="3.5" fill="#e2e8f0" />

              {/* Qubit State Tip Node */}
              <circle
                cx={projState.u}
                cy={projState.v}
                r="6.5"
                fill="#ffffff"
                stroke="#0284c7"
                strokeWidth="2.5"
                filter="url(#vectorGlow)"
              />
            </svg>
          </div>

          {/* Bottom Bloch Cartesian Coordinates Bar (x, y, z) */}
          <div className="px-4 py-3 bg-slate-900/80 border-t border-slate-800 grid grid-cols-3 gap-2 text-center font-mono-tech tabular-nums text-xs">
            <div className="p-1.5 rounded bg-[#070b14] border border-slate-800">
              <span className="text-emerald-400 font-bold">x = ⟨X⟩</span>
              <div className="text-white mt-0.5">{blochVec.x >= 0 ? `+${blochVec.x.toFixed(3)}` : blochVec.x.toFixed(3)}</div>
            </div>
            <div className="p-1.5 rounded bg-[#070b14] border border-slate-800">
              <span className="text-amber-400 font-bold">y = ⟨Y⟩</span>
              <div className="text-white mt-0.5">{blochVec.y >= 0 ? `+${blochVec.y.toFixed(3)}` : blochVec.y.toFixed(3)}</div>
            </div>
            <div className="p-1.5 rounded bg-[#070b14] border border-slate-800">
              <span className="text-sky-400 font-bold">z = ⟨Z⟩</span>
              <div className="text-white mt-0.5">{blochVec.z >= 0 ? `+${blochVec.z.toFixed(3)}` : blochVec.z.toFixed(3)}</div>
            </div>
          </div>

          {/* Direct Spherical Angle Sliders (θ, φ) */}
          <div className="p-4 bg-[#070b14] border-t border-slate-800 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-mono-tech tabular-nums text-slate-300 mb-1">
                <span>{lang === 'ja' ? '極角 θ (Polar Angle: 0°〜180°)' : 'Polar Angle θ (0°–180°)'}</span>
                <span className="text-sky-400 font-bold">{degTheta}° ({(theta / Math.PI).toFixed(3)}π rad)</span>
              </div>
              <input
                type="range"
                min={0}
                max={180}
                value={degTheta}
                onChange={(e) => {
                  const nextT = (Number(e.target.value) * Math.PI) / 180;
                  setTheta(nextT);
                  setTrailPoints((prev) => [...prev.slice(-60), sphericalToCartesian(nextT, phi)]);
                }}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-tech tabular-nums text-slate-300 mb-1">
                <span>{lang === 'ja' ? '方位角・位相 φ (Azimuthal Phase: 0°〜360°)' : 'Azimuthal Phase φ (0°–360°)'}</span>
                <span className="text-indigo-400 font-bold">{degPhi}° ({(phi / Math.PI).toFixed(3)}π rad)</span>
              </div>
              <input
                type="range"
                min={0}
                max={360}
                value={degPhi}
                onChange={(e) => {
                  const nextP = (Number(e.target.value) * Math.PI) / 180;
                  setPhi(nextP);
                  setTrailPoints((prev) => [...prev.slice(-60), sphericalToCartesian(theta, nextP)]);
                }}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (6 COLS): QUANTUM GATES & GEOGEBRA-STYLE CAS INSPECTOR ================= */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          
          {/* Live Feedback Banner */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">{lastOperationText}</div>
          </div>

          {/* 1. Standard Unitary Gates + Continuous Parametric Rotations Rx, Ry, Rz */}
          <div className="p-4 rounded-xl bg-[#070b14] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white">
                {lang === 'ja' ? '1. 標準ユニタリ量子ゲート (Standard Unitary Gates)' : '1. Standard Unitary Quantum Gates'}
              </span>
              <span className="text-[11px] font-mono-tech text-slate-400">
                U†U = I
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {STANDARD_GATES.map((gate) => (
                <button
                  key={gate.id}
                  id={
                    gate.id === 'H'
                      ? 'btn-op-superposition'
                      : gate.id === 'X'
                      ? 'btn-op-inversion'
                      : gate.id === 'S'
                      ? 'btn-op-phase'
                      : undefined
                  }
                  onClick={() => handleApplyStandardGate(gate)}
                  className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                    selectedGateInfo.id === gate.id
                      ? 'bg-blue-950/80 border-sky-500/60'
                      : 'bg-slate-900 hover:bg-slate-800 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-mono-tech text-sky-400">{gate.symbol}</span>
                    <span className="text-[10px] font-mono-tech text-slate-400">
                      {Math.round((gate.angle * 180) / Math.PI)}°
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-200 font-medium truncate mt-0.5">
                    {lang === 'ja' ? gate.nameJa.split(' ')[0] : gate.nameEn}
                  </div>
                </button>
              ))}
            </div>

            {/* Parametric Continuous Rotation Gates Rx(γ), Ry(γ), Rz(γ) */}
            <div className="pt-3 border-t border-slate-800/90 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-slate-200">
                  {lang === 'ja' ? '連続回転ゲート R_n(γ) = exp(-i γ σ_n / 2):' : 'Parametric Rotation Gates R_n(γ):'}
                </span>
                <div className="flex items-center gap-1 font-mono-tech text-[11px]">
                  {[-90, 30, 45, 60, 90, 180].map((deg) => (
                    <button
                      key={deg}
                      onClick={() => setCustomRotDeg(deg)}
                      className={`px-1.5 py-0.5 rounded border cursor-pointer ${
                        customRotDeg === deg
                          ? 'bg-sky-600 text-white border-sky-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {deg > 0 ? `+${deg}°` : `${deg}°`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleApplyParametricRotation('X')}
                  className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/50 text-xs font-mono-tech text-emerald-300 font-semibold cursor-pointer transition-colors"
                >
                  Rx({customRotDeg}°)
                </button>
                <button
                  onClick={() => handleApplyParametricRotation('Y')}
                  className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-amber-950/60 border border-slate-800 hover:border-amber-500/50 text-xs font-mono-tech text-amber-300 font-semibold cursor-pointer transition-colors"
                >
                  Ry({customRotDeg}°)
                </button>
                <button
                  onClick={() => handleApplyParametricRotation('Z')}
                  className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-sky-950/60 border border-slate-800 hover:border-sky-500/50 text-xs font-mono-tech text-sky-300 font-semibold cursor-pointer transition-colors"
                >
                  Rz({customRotDeg}°)
                </button>
              </div>
            </div>
          </div>

          {/* 2. GeoGebra-Style Multi-Tab Mathematical & Quantum Inspector */}
          <div className="rounded-xl bg-[#070b14] border border-slate-800 overflow-hidden">
            {/* Segmented Tab Bar */}
            <div className="grid grid-cols-3 p-1 bg-slate-900 border-b border-slate-800 gap-1">
              <button
                onClick={() => setActiveInspectorTab('algebra')}
                className={`py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap truncate ${
                  activeInspectorTab === 'algebra'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'ja' ? '状態振幅・期待値' : 'Amplitudes & ⟨σ⟩'}
              </button>
              <button
                onClick={() => setActiveInspectorTab('matrix')}
                className={`py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap truncate ${
                  activeInspectorTab === 'matrix'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'ja' ? '密度行列 ρ・行列 U' : 'Density ρ & Matrix U'}
              </button>
              <button
                onClick={() => setActiveInspectorTab('measure')}
                className={`py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap truncate ${
                  activeInspectorTab === 'measure'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'ja' ? '統計観測ヒストグラム' : 'Multi-Shot Lab'}
              </button>
            </div>

            {/* TAB 1: COMPLEX AMPLITUDES, ARGAND PHASE DISKS & PAULI EXPECTATION VALUES */}
            {activeInspectorTab === 'algebra' && (
              <div className="p-4 space-y-4">
                {/* Complex Amplitude Cards with Visual Phase Disks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Alpha |0> */}
                  <div className="p-3 rounded-lg bg-[#0b1120] border border-slate-800 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-sky-400 font-mono-tech">
                        α (|0⟩ 複素振幅)
                      </div>
                      <div className="text-xs font-mono-tech tabular-nums text-white mt-1">
                        {formatComplex(alphaRe, alphaIm)}
                      </div>
                      <div className="text-[11px] font-mono-tech tabular-nums text-slate-400 mt-0.5">
                        |α| = {alphaRe.toFixed(3)}, arg(α) = 0°
                      </div>
                      <div className="text-[11px] font-mono-tech tabular-nums text-sky-300 mt-0.5">
                        P(|0⟩) = {(probZero * 100).toFixed(2)}%
                      </div>
                    </div>
                    {/* Argand Phase Wheel for Alpha */}
                    <svg viewBox="-26 -26 52 52" className="w-12 h-12 shrink-0">
                      <circle cx="0" cy="0" r="22" fill="#070b14" stroke="#334155" strokeWidth="1.5" />
                      <line x1="-22" y1="0" x2="22" y2="0" stroke="#1e293b" strokeWidth="1" />
                      <line x1="0" y1="-22" x2="0" y2="22" stroke="#1e293b" strokeWidth="1" />
                      <circle cx="0" cy="0" r={alphaRe * 20} fill="rgba(56, 189, 248, 0.2)" />
                      <line x1="0" y1="0" x2={alphaRe * 20} y2="0" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx={alphaRe * 20} cy="0" r="2.5" fill="#ffffff" />
                    </svg>
                  </div>

                  {/* Beta |1> */}
                  <div className="p-3 rounded-lg bg-[#0b1120] border border-slate-800 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-indigo-400 font-mono-tech">
                        β (|1⟩ 複素振幅)
                      </div>
                      <div className="text-xs font-mono-tech tabular-nums text-white mt-1">
                        {formatComplex(betaRe, betaIm)}
                      </div>
                      <div className="text-[11px] font-mono-tech tabular-nums text-slate-400 mt-0.5">
                        |β| = {betaMag.toFixed(3)}, arg(β) = {degPhi}°
                      </div>
                      <div className="text-[11px] font-mono-tech tabular-nums text-indigo-300 mt-0.5">
                        P(|1⟩) = {(probOne * 100).toFixed(2)}%
                      </div>
                    </div>
                    {/* Argand Phase Wheel for Beta */}
                    <svg viewBox="-26 -26 52 52" className="w-12 h-12 shrink-0">
                      <circle cx="0" cy="0" r="22" fill="#070b14" stroke="#334155" strokeWidth="1.5" />
                      <line x1="-22" y1="0" x2="22" y2="0" stroke="#1e293b" strokeWidth="1" />
                      <line x1="0" y1="-22" x2="0" y2="22" stroke="#1e293b" strokeWidth="1" />
                      <circle cx="0" cy="0" r={betaMag * 20} fill="rgba(129, 140, 248, 0.2)" />
                      <line
                        x1="0"
                        y1="0"
                        x2={betaRe * 20}
                        y2={-betaIm * 20}
                        stroke="#818cf8"
                        strokeWidth="2"
                      />
                      <circle cx={betaRe * 20} cy={-betaIm * 20} r="2.5" fill="#ffffff" />
                    </svg>
                  </div>
                </div>

                {/* Pauli Expectation Values ⟨X⟩, ⟨Y⟩, ⟨Z⟩ Bi-Directional Bars */}
                <div className="p-3.5 rounded-lg bg-[#0b1120] border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">
                      {lang === 'ja' ? 'パウリ演算子の期待値 (Pauli Expectation Values)' : 'Pauli Operator Expectation Values'}
                    </span>
                    <span className="font-mono-tech text-[11px] text-slate-400">
                      ⟨X⟩² + ⟨Y⟩² + ⟨Z⟩² = 1.000
                    </span>
                  </div>

                  {[
                    { label: '⟨σ_x⟩ = sinθ cosφ', val: blochVec.x, color: 'bg-emerald-500', textColor: 'text-emerald-400' },
                    { label: '⟨σ_y⟩ = sinθ sinφ', val: blochVec.y, color: 'bg-amber-500', textColor: 'text-amber-400' },
                    { label: '⟨σ_z⟩ = cosθ', val: blochVec.z, color: 'bg-sky-500', textColor: 'text-sky-400' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[11px] font-mono-tech tabular-nums mb-1">
                        <span className="text-slate-300">{item.label}</span>
                        <span className={`font-bold ${item.textColor}`}>
                          {item.val >= 0 ? `+${item.val.toFixed(4)}` : item.val.toFixed(4)}
                        </span>
                      </div>
                      <div className="relative w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-600 z-10" />
                        <div
                          className={`absolute top-0 bottom-0 ${item.color} transition-all duration-150`}
                          style={{
                            left: item.val >= 0 ? '50%' : `${50 + item.val * 50}%`,
                            width: `${Math.abs(item.val) * 50}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Single-Shot Collapse Button */}
                <button
                  id="btn-op-entangle"
                  onClick={handleProjectiveCollapse}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{lang === 'ja' ? '単発の射影観測を実行（|0⟩ または |1⟩ へ波動関数を収束）' : 'Perform Projective Measurement (Collapse to |0⟩ or |1⟩)'}</span>
                </button>
              </div>
            )}

            {/* TAB 2: DENSITY MATRIX ρ = |ψ⟩⟨ψ| & UNITARY GATE MATRIX U */}
            {activeInspectorTab === 'matrix' && (
              <div className="p-4 space-y-4">
                {/* Density Matrix rho */}
                <div className="p-3.5 rounded-lg bg-[#0b1120] border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white">
                      {lang === 'ja' ? '密度行列 ρ = |ψ⟩⟨ψ| = ½(I + r⃗·σ⃗)' : 'Density Matrix ρ = |ψ⟩⟨ψ|'}
                    </span>
                    <span className="text-[11px] font-mono-tech text-emerald-400">
                      Tr(ρ) = 1.000 · Tr(ρ²) = 1.000 (Pure)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-[#070b14] border border-slate-800 font-mono-tech tabular-nums text-xs text-center">
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                      <div className="text-[10px] text-slate-400">ρ₀₀ = |α|²</div>
                      <div className="text-sky-300 font-bold mt-0.5">{rho00.toFixed(4)}</div>
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                      <div className="text-[10px] text-slate-400">ρ₀₁ = αβ*</div>
                      <div className="text-slate-200 font-bold mt-0.5">{formatComplex(rho01Re, rho01Im)}</div>
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                      <div className="text-[10px] text-slate-400">ρ₁₀ = α*β</div>
                      <div className="text-slate-200 font-bold mt-0.5">{formatComplex(rho10Re, rho10Im)}</div>
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800">
                      <div className="text-[10px] text-slate-400">ρ₁₁ = |β|²</div>
                      <div className="text-indigo-300 font-bold mt-0.5">{rho11.toFixed(4)}</div>
                    </div>
                  </div>
                </div>

                {/* Selected Gate Matrix U */}
                <div className="p-3.5 rounded-lg bg-[#0b1120] border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white">
                      {lang === 'ja'
                        ? `選択中の量子ゲート行列: ${selectedGateInfo.symbol} (${selectedGateInfo.nameJa})`
                        : `Selected Unitary Matrix: ${selectedGateInfo.symbol} (${selectedGateInfo.nameEn})`}
                    </span>
                    <span className="text-[11px] font-mono-tech text-amber-400">
                      n̂ = ({selectedGateInfo.axis.x.toFixed(2)}, {selectedGateInfo.axis.y.toFixed(2)}, {selectedGateInfo.axis.z.toFixed(2)})
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-[#070b14] border border-slate-800 font-mono-tech text-xs text-center">
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-sky-300 font-bold">
                      {selectedGateInfo.matrixStr[0][0]}
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-sky-300 font-bold">
                      {selectedGateInfo.matrixStr[0][1]}
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-sky-300 font-bold">
                      {selectedGateInfo.matrixStr[1][0]}
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-sky-300 font-bold">
                      {selectedGateInfo.matrixStr[1][1]}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                    {lang === 'ja' ? selectedGateInfo.descJa : selectedGateInfo.descEn}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: MULTI-SHOT STATISTICAL MEASUREMENT LAB */}
            {activeInspectorTab === 'measure' && (
              <div className="p-4 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  {/* Measurement Basis Selector */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-300 font-semibold">
                      {lang === 'ja' ? '観測基底:' : 'Basis:'}
                    </span>
                    {(['Z', 'X', 'Y'] as const).map((b) => (
                      <button
                        key={b}
                        onClick={() => setMeasureBasis(b)}
                        className={`px-2.5 py-1 rounded text-xs font-mono-tech font-bold border cursor-pointer ${
                          measureBasis === b
                            ? 'bg-blue-600 text-white border-blue-500'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {b}-Basis
                      </button>
                    ))}
                  </div>

                  {/* Shot Count Selector */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-300 font-semibold">Shots:</span>
                    {[100, 1024, 10000].map((n) => (
                      <button
                        key={n}
                        onClick={() => setShotCount(n)}
                        className={`px-2 py-1 rounded text-xs font-mono-tech border cursor-pointer ${
                          shotCount === n
                            ? 'bg-sky-600 text-white border-sky-500'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {n.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Histogram Results */}
                {shotResults && (() => {
                  const expVal = measureBasis === 'Z' ? blochVec.z : measureBasis === 'X' ? blochVec.x : blochVec.y;
                  const theo0 = ((1 + expVal) / 2) * 100;
                  const theo1 = ((1 - expVal) / 2) * 100;
                  const emp0 = (shotResults.count0 / shotResults.total) * 100;
                  const emp1 = (shotResults.count1 / shotResults.total) * 100;
                  const label0 = measureBasis === 'Z' ? '|0⟩' : measureBasis === 'X' ? '|+⟩' : '|+i⟩';
                  const label1 = measureBasis === 'Z' ? '|1⟩' : measureBasis === 'X' ? '|-⟩' : '|-i⟩';

                  return (
                    <div className="p-3.5 rounded-lg bg-[#0b1120] border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="font-semibold text-white">
                          {lang === 'ja'
                            ? `${measureBasis}基底・${shotResults.total.toLocaleString()}回 観測シミュレーション結果`
                            : `${measureBasis}-Basis Statistical Histogram (${shotResults.total.toLocaleString()} shots)`}
                        </span>
                        <button
                          onClick={() => runMultiShotExperiment(measureBasis, shotCount)}
                          className="text-xs text-sky-400 hover:text-sky-300 font-mono-tech inline-flex items-center gap-1 cursor-pointer"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>{lang === 'ja' ? '再サンプリング' : 'Resample'}</span>
                        </button>
                      </div>

                      {/* Outcome 0 */}
                      <div>
                        <div className="flex justify-between text-xs font-mono-tech tabular-nums mb-1">
                          <span className="text-sky-400 font-bold">
                            {label0} : {shotResults.count0.toLocaleString()} shots ({emp0.toFixed(1)}%)
                          </span>
                          <span className="text-slate-400">
                            {lang === 'ja' ? '理論値:' : 'Theory:'} {theo0.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                          <div className="h-full bg-sky-500 transition-all duration-200" style={{ width: `${emp0}%` }} />
                        </div>
                      </div>

                      {/* Outcome 1 */}
                      <div>
                        <div className="flex justify-between text-xs font-mono-tech tabular-nums mb-1">
                          <span className="text-indigo-400 font-bold">
                            {label1} : {shotResults.count1.toLocaleString()} shots ({emp1.toFixed(1)}%)
                          </span>
                          <span className="text-slate-400">
                            {lang === 'ja' ? '理論値:' : 'Theory:'} {theo1.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                          <div className="h-full bg-indigo-500 transition-all duration-200" style={{ width: `${emp1}%` }} />
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
