import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Lightweight canvas particle field standing in for "floating dust" +
// faint neural connections. Kept cheap: capped particle count, no
// per-frame allocations, pauses when tab is hidden.
export function BackgroundField() {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let width, height;
    let particles = [];
    const COUNT = 46;
    const MAX_DIST = 130;

    function resize() {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    function init() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.4 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,255,136,0.35)';
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX_DIST * devicePixelRatio) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,229,255,${0.12 * (1 - dist / (MAX_DIST * devicePixelRatio))})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    init();
    tick();

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else tick();
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [reduced]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void noise">
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,140,166,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(124,140,166,0.25) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)',
        }}
      />
      {/* glow blobs */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-violet/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-[480px] h-[480px] rounded-full bg-signal/10 blur-[150px]" />

      {!reduced && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
      )}
    </div>
  );
}
