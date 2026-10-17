import React, { useId } from 'react';

interface QuaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
  layout?: 'horizontal' | 'vertical';
  subtitle?: string;
  className?: string;
  animated?: boolean;
}

export const QuaLogo: React.FC<QuaLogoProps> = ({
  size = 'md',
  showText = true,
  layout = 'horizontal',
  subtitle,
  className = '',
}) => {
  const uid = useId().replace(/:/g, '');

  const dimensionMap = {
    sm: { icon: 38, text: 'text-xl', sub: 'text-[10px]', gap: 'gap-2.5' },
    md: { icon: 48, text: 'text-2xl', sub: 'text-[11px]', gap: 'gap-3' },
    lg: { icon: 84, text: 'text-3xl', sub: 'text-xs', gap: 'gap-3' },
    xl: { icon: 120, text: 'text-4xl', sub: 'text-sm', gap: 'gap-3.5' },
    hero: { icon: 168, text: 'text-5xl', sub: 'text-sm', gap: 'gap-2' },
  };

  const currentSize = dimensionMap[size];

  return (
    <div
      className={`inline-flex ${
        layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center'
      } ${currentSize.gap} select-none ${className}`}
    >
      {/* Faithful 3D Layered Cyan-Blue-Violet "Q" Orbital Emblem */}
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 240 230"
          className="w-full h-full relative z-10 overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outer Q Ring Gradient: Bright Aqua Top-Left -> Royal Blue -> Deep Indigo-Violet Bottom-Right */}
            <linearGradient id={`qOuterGrad-${uid}`} x1="45" y1="35" x2="185" y2="185" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="22%" stopColor="#00C8FF" />
              <stop offset="55%" stopColor="#1D4ED8" />
              <stop offset="82%" stopColor="#312E81" />
              <stop offset="100%" stopColor="#581C87" />
            </linearGradient>

            {/* Middle Concentric bevel gradient */}
            <linearGradient id={`qMidGrad-${uid}`} x1="55" y1="45" x2="175" y2="175" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A5F3FC" />
              <stop offset="25%" stopColor="#0284C7" />
              <stop offset="65%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>

            {/* Inner Ring Rim Gradient */}
            <linearGradient id={`qInnerGrad-${uid}`} x1="70" y1="55" x2="165" y2="165" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="50%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>

            {/* Q Diagonal Tail / Blade Gradient: Cyan Tip -> Blue Mid -> Deep Violet-Purple Base */}
            <linearGradient id={`qTailGrad-${uid}`} x1="115" y1="110" x2="205" y2="195" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="28%" stopColor="#0EA5E9" />
              <stop offset="55%" stopColor="#4F46E5" />
              <stop offset="80%" stopColor="#6D28D9" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>

            {/* Q Tail Bottom Bevel */}
            <linearGradient id={`qTailBevel-${uid}`} x1="115" y1="120" x2="195" y2="198" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#3730A3" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>

            {/* Main Orbital Ring Gradient */}
            <linearGradient id={`orbitMainGrad-${uid}`} x1="15" y1="165" x2="225" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="25%" stopColor="#7DD3FC" />
              <stop offset="55%" stopColor="#E0F2FE" />
              <stop offset="80%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#4338CA" />
            </linearGradient>

            {/* Secondary Thin Outer Orbit Gradient */}
            <linearGradient id={`orbitThinGrad-${uid}`} x1="25" y1="130" x2="205" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#7DD3FC" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.8" />
            </linearGradient>

            {/* 3D Sphere Node Radial Fill */}
            <radialGradient id={`planetNode-${uid}`} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="45%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </radialGradient>

            {/* Soft Underneath Pedestal Shadow */}
            <radialGradient id={`dropShadow-${uid}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
              <stop offset="55%" stopColor="#1E3A8A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
            </radialGradient>

            {/* Star Glint Glow Filter */}
            <filter id={`glintGlow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Underneath Soft Elliptical Shadow */}
          <ellipse cx="120" cy="206" rx="68" ry="8" fill={`url(#dropShadow-${uid})`} />

          {/* Back Half of Thin Secondary Orbital Arc (Top-Left to Top-Right) */}
          <path
            d="M 32 132 A 98 46 0 0 1 198 66"
            transform="rotate(-24 120 105)"
            stroke={`url(#orbitThinGrad-${uid})`}
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Back Half of Primary Orbital Ring (Behind the Q Torus) */}
          <path
            d="M 135 50 A 104 44 0 0 1 222 104"
            transform="rotate(-26 120 108)"
            stroke={`url(#orbitMainGrad-${uid})`}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* ================= MAIN 3D CONCENTRIC "Q" TORUS ================= */}
          {/* Outer Base Torus Ring */}
          <circle
            cx="118"
            cy="108"
            r="64"
            stroke={`url(#qOuterGrad-${uid})`}
            strokeWidth="28"
            fill="none"
          />

          {/* Middle Layered Bevel Ring */}
          <circle
            cx="118"
            cy="108"
            r="64"
            stroke={`url(#qMidGrad-${uid})`}
            strokeWidth="16"
            fill="none"
            opacity="0.9"
          />

          {/* Inner Dark Cyan-Blue Depth Rim */}
          <circle
            cx="118"
            cy="108"
            r="50"
            stroke={`url(#qInnerGrad-${uid})`}
            strokeWidth="4.5"
            fill="none"
          />

          {/* Top-Left Specular Gloss Highlight on Q Torus */}
          <path
            d="M 62 78 A 64 64 0 0 1 132 45"
            stroke="#E0F2FE"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
            filter={`url(#glintGlow-${uid})`}
          />

          {/* Subtle Inner Cyan Reflection Arc */}
          <path
            d="M 74 146 A 58 58 0 0 1 60 92"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />

          {/* ================= CHARACTERISTIC 3D "Q" BLADE TAIL ================= */}
          {/* Lower 3D Bevel Edge of Q Tail */}
          <path
            d="M 116 116 L 138 116 L 204 188 L 168 188 C 160 188, 154 184, 148 177 L 116 140 Z"
            fill={`url(#qTailBevel-${uid})`}
          />

          {/* Top Main Facet of Q Tail (Aqua Cyan -> Royal Blue -> Purple) */}
          <path
            d="M 114 114 L 146 114 C 152 114, 157 117, 162 122 L 212 188 L 178 188 C 170 188, 164 184, 158 177 L 114 126 Z"
            fill={`url(#qTailGrad-${uid})`}
          />

          {/* Crisp Diagonal Edge Highlight on Q Tail */}
          <path
            d="M 115 115 L 146 115 L 210 187"
            stroke="#BAE6FD"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />

          {/* ================= FOREGROUND ORBITAL SWOOSH & NODES ================= */}
          {/* Front Half of Primary Orbital Ring Sweeping Across Q and Tail */}
          <path
            d="M 16 106 A 104 44 0 0 0 222 104"
            transform="rotate(-26 120 108)"
            stroke={`url(#orbitMainGrad-${uid})`}
            strokeWidth="7.5"
            strokeLinecap="round"
            fill="none"
            filter={`url(#glintGlow-${uid})`}
          />

          {/* Inner White Core Line on Front Orbital Ring */}
          <path
            d="M 22 112 A 104 44 0 0 0 215 108"
            transform="rotate(-26 120 108)"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          {/* Orbiting Planet Spheres on Upper-Left & Upper-Right Tracks */}
          <circle cx="67" cy="64" r="6.5" fill={`url(#planetNode-${uid})`} />
          <circle cx="44" cy="99" r="4" fill={`url(#planetNode-${uid})`} />
          <circle cx="176" cy="59" r="5" fill={`url(#planetNode-${uid})`} />
          <circle cx="192" cy="84" r="3.5" fill="#7DD3FC" />

          {/* Bright Starburst Specular Glint Where Orbit Crosses Q Tail */}
          <circle
            cx="152"
            cy="134"
            r="6"
            fill="#FFFFFF"
            filter={`url(#glintGlow-${uid})`}
          />
          <path
            d="M 140 134 L 164 134 M 152 122 L 152 146"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Second Specular Glint on Top-Left Cyan Rim */}
          <circle
            cx="84"
            cy="58"
            r="4.5"
            fill="#FFFFFF"
            filter={`url(#glintGlow-${uid})`}
          />
          {/* Third Specular Glint on Bottom-Left Orbit */}
          <circle
            cx="75"
            cy="152"
            r="3.5"
            fill="#E0F2FE"
            filter={`url(#glintGlow-${uid})`}
          />
        </svg>
      </div>

      {/* "Qua" Wordmark Matching the Uploaded Image */}
      {showText && (
        <div className={`flex flex-col ${layout === 'vertical' ? 'items-center' : 'justify-center'}`}>
          <div className="relative inline-flex items-baseline">
            {/* Subtle top-left curved accent line on the 'Q' */}
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 -mr-1.5 self-start opacity-60 text-sky-400"
              fill="none"
            >
              <path
                d="M 20 4 C 10 6, 4 12, 4 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              className={`font-display font-extrabold tracking-wide bg-gradient-to-b from-cyan-300 via-sky-400 to-blue-600 bg-clip-text text-transparent ${currentSize.text}`}
            >
              Qua
            </span>
            {subtitle && layout === 'horizontal' && (
              <span className={`ml-2.5 font-sans text-slate-400 font-medium ${currentSize.sub}`}>
                {subtitle}
              </span>
            )}
          </div>
          {subtitle && layout === 'vertical' && (
            <span className={`mt-1 font-sans text-slate-400 font-medium ${currentSize.sub}`}>
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
