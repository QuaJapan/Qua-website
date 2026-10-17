import React, { useEffect, useRef } from 'react';

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface FloatingOrb {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      phase: number;
    }

    interface LightParticle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      isAccent?: boolean;
    }

    // Liquid ambient energy orbs (Soft Neon Pink, Cyan, Deep Violet)
    const orbs: FloatingOrb[] = [
      { x: width * 0.25, y: height * 0.2, radius: Math.min(width, height) * 0.45, vx: 0.15, vy: 0.1, color: '#f43f5e', alpha: 0.11, phase: 0 },
      { x: width * 0.75, y: height * 0.35, radius: Math.min(width, height) * 0.48, vx: -0.12, vy: 0.14, color: '#00f0ff', alpha: 0.09, phase: Math.PI / 2 },
      { x: width * 0.5, y: height * 0.7, radius: Math.min(width, height) * 0.52, vx: 0.08, vy: -0.12, color: '#ec4899', alpha: 0.09, phase: Math.PI },
      { x: width * 0.85, y: height * 0.85, radius: Math.min(width, height) * 0.4, vx: -0.1, vy: -0.09, color: '#8b5cf6', alpha: 0.08, phase: Math.PI * 1.5 }
    ];

    // Sharp sparkling particles
    const particleCount = Math.min(Math.floor((width * height) / 14000), 90);
    const particles: LightParticle[] = [];
    const particleColors = ['#ffffff', '#38bdf8', '#f472b6', '#c084fc', '#00f0ff'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        isAccent: i % 10 === 0
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseActive = true;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.006;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Liquid Neon Indirect Ambient Lighting (Multi-color soft radial blooms)
      for (const orb of orbs) {
        orb.x += orb.vx + Math.sin(time + orb.phase) * 0.4;
        orb.y += orb.vy + Math.cos(time * 0.8 + orb.phase) * 0.4;

        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        const currentRadius = orb.radius * (1 + Math.sin(time * 0.8 + orb.phase) * 0.08);
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, currentRadius);
        
        grad.addColorStop(0, orb.color === '#f43f5e' ? 'rgba(244, 63, 94, 0.12)' :
                            orb.color === '#00f0ff' ? 'rgba(0, 240, 255, 0.10)' :
                            orb.color === '#ec4899' ? 'rgba(236, 72, 153, 0.11)' :
                            'rgba(139, 92, 246, 0.08)');
        grad.addColorStop(0.5, orb.color === '#f43f5e' ? 'rgba(244, 63, 94, 0.04)' :
                              orb.color === '#00f0ff' ? 'rgba(0, 240, 255, 0.03)' :
                              orb.color === '#ec4899' ? 'rgba(236, 72, 153, 0.03)' :
                              'rgba(139, 92, 246, 0.02)');
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Center-top Ambient Pink Halo (Indirect backlighting effect)
      const topPinkGlow = ctx.createRadialGradient(width * 0.5, 0, 0, width * 0.5, 0, width * 0.65);
      topPinkGlow.addColorStop(0, 'rgba(244, 114, 182, 0.15)');
      topPinkGlow.addColorStop(0.4, 'rgba(236, 72, 153, 0.06)');
      topPinkGlow.addColorStop(0.8, 'rgba(56, 189, 248, 0.02)');
      topPinkGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = topPinkGlow;
      ctx.fillRect(0, 0, width, height * 0.8);

      // 3. Subtle Rotating Orbital Rings (Qua Logo Resonance)
      const cx = width * 0.5;
      const cy = height * 0.36;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.03);

      for (let r = 1; r <= 3; r++) {
        const ringX = width * (0.18 * r);
        const ringY = width * (0.075 * r);
        ctx.beginPath();
        ctx.ellipse(0, 0, ringX, ringY, (r * 0.52), 0, Math.PI * 2);
        ctx.strokeStyle = r === 1 ? 'rgba(244, 114, 182, 0.07)' :
                          r === 2 ? 'rgba(0, 240, 255, 0.05)' :
                          'rgba(168, 85, 247, 0.04)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      ctx.restore();

      // 4. Interactive Mouse Liquid Ripple
      if (mouseActive) {
        ctx.save();
        ctx.beginPath();
        const rippleR = 50 + (Math.sin(time * 5) * 20 + 20);
        ctx.arc(mouseX, mouseY, rippleR, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(244, 114, 182, 0.09)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // 5. Light particles & delicate connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse avoidance
        if (mouseActive) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 0.4;
            p.y -= (dy / dist) * force * 0.4;
          }
        }

        const pulseAlpha = p.alpha * (0.8 + Math.sin(time * 3 + i) * 0.2);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, pulseAlpha));
        ctx.fill();

        if (p.isAccent) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        ctx.globalAlpha = 1.0;

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 100) * 0.1;
            ctx.strokeStyle = `rgba(244, 114, 182, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1.0 }}
    />
  );
};
