import React from 'react';
import { Language } from '../types';
import { Sparkles, Atom, Cpu, Zap, Orbit } from 'lucide-react';

interface QuantumChandelierVisualProps {
  lang: Language;
}

export const QuantumChandelierVisual: React.FC<QuantumChandelierVisualProps> = ({ lang }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center select-none pointer-events-none">
      {/* Outer Golden Aura */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-b from-amber-500/20 via-yellow-600/10 to-cyan-500/10 blur-3xl golden-quantum-breath" />

      {/* Cryogenic Concentric Gold Flanges / Rings (Spinning in opposing rhythms) */}
      <div className="absolute w-[92%] h-[92%] rounded-full border border-amber-500/20 cryo-ring-spin border-dashed" />
      <div className="absolute w-[80%] h-[80%] rounded-full border border-amber-400/30 cryo-ring-reverse" />
      <div className="absolute w-[68%] h-[68%] rounded-full border border-cyan-400/20 cryo-ring-spin border-dotted" />
      <div className="absolute w-[56%] h-[56%] rounded-full border border-amber-300/40" />
      <div className="absolute w-[42%] h-[42%] rounded-full border border-yellow-200/50 cryo-ring-reverse" />

      {/* SVG Chandelier Golden Wiring / Cryo-Filaments */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gildedWire" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Chandelier Tier 1: Top Cryogenic Flange */}
        <ellipse cx="200" cy="80" rx="140" ry="18" stroke="url(#goldGradient)" strokeWidth="2.5" />
        <ellipse cx="200" cy="82" rx="138" ry="16" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" />

        {/* Chandelier Tier 2: Mid Resonator Stage */}
        <ellipse cx="200" cy="160" rx="105" ry="14" stroke="url(#goldGradient)" strokeWidth="2.5" />

        {/* Chandelier Tier 3: Lower Mixing Chamber Stage */}
        <ellipse cx="200" cy="240" rx="75" ry="10" stroke="url(#goldGradient)" strokeWidth="2" />

        {/* Chandelier Tier 4: Quantum Core Base Target */}
        <ellipse cx="200" cy="310" rx="45" ry="7" stroke="#fbbf24" strokeWidth="2" />

        {/* Golden Coaxial Filaments / Wiring Bus (Cascading Curves) */}
        {[-110, -75, -40, 0, 40, 75, 110].map((offset, i) => (
          <path
            key={`wire-t1-${i}`}
            d={`M ${200 + offset} 80 Q ${200 + offset * 0.8} 120, ${200 + offset * 0.75} 160`}
            stroke="url(#gildedWire)"
            strokeWidth="1.6"
            strokeDasharray={i % 2 === 0 ? "none" : "3,2"}
          />
        ))}

        {[-75, -45, -15, 15, 45, 75].map((offset, i) => (
          <path
            key={`wire-t2-${i}`}
            d={`M ${200 + offset} 160 Q ${200 + offset * 0.8} 200, ${200 + offset * 0.7} 240`}
            stroke="url(#gildedWire)"
            strokeWidth="1.8"
          />
        ))}

        {[-45, -20, 0, 20, 45].map((offset, i) => (
          <path
            key={`wire-t3-${i}`}
            d={`M ${200 + offset} 240 Q ${200 + offset * 0.7} 275, ${200 + offset * 0.55} 310`}
            stroke="url(#goldGradient)"
            strokeWidth="2"
          />
        ))}

        {/* Vertical Center Axis / Quantum Flux Tube */}
        <line x1="200" y1="40" x2="200" y2="340" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="4,3" />

        {/* Glowing Quantum Qubit Core at Bottom (15 mK stage) */}
        <circle cx="200" cy="335" r="14" fill="#fbbf24" fillOpacity="0.3" stroke="#fef08a" strokeWidth="2" />
        <circle cx="200" cy="335" r="6" fill="#ffffff" />
      </svg>

      {/* Floating Holographic Telemetry Badges */}
      <div className="absolute top-8 left-0 px-3 py-1 rounded-full bg-black/70 border border-amber-400/40 text-[10px] font-mono-tech text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
        <span>CRYO_GILDED_CHANDELIER_BREATH</span>
      </div>

      <div className="absolute bottom-12 right-2 px-3 py-1 rounded-full bg-black/70 border border-cyan-400/40 text-[10px] font-mono-tech text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center gap-1.5">
        <Atom className="w-3 h-3 text-cyan-400" />
        <span>15 mK // COHERENCE_HARMONY</span>
      </div>

      <div className="absolute -bottom-2 left-12 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-white/10 text-center">
        <div className="text-[9px] font-mono-tech text-slate-400 uppercase">
          {lang === 'ja' ? '黄金の量子シャンデリア設計思想' : 'Golden Quantum Chandelier Ethos'}
        </div>
        <div className="text-[11px] font-display font-bold text-amber-200">
          {lang === 'ja' ? '静寂なる極限計算と多次元共鳴' : 'Cryogenic Serenity & Extreme Concurrency'}
        </div>
      </div>
    </div>
  );
};
