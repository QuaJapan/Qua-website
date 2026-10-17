import React from 'react';

export const GalacticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#060a12]">
      {/* Subtle, Composed Corporate Navy & Slate Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080e1a] via-[#060a12] to-[#04070d]" />

      {/* Quiet Architectural Top Illumination */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] rounded-full bg-gradient-to-b from-blue-900/15 via-sky-900/8 to-transparent blur-[120px]" />

      {/* Subtle Structural Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundSize: '48px 48px',
          backgroundImage:
            'linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
        }}
      />
    </div>
  );
};
