import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function CustomCursor() {
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const trailX = useSpring(x, { stiffness: 120, damping: 22 });
  const trailY = useSpring(y, { stiffness: 120, damping: 22 });

  useEffect(() => {
    if (isMobile || reduced) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const el = e.target.closest('[data-magnetic], a, button');
      setHovering(Boolean(el));
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [isMobile, reduced, visible, x, y]);

  if (isMobile || reduced || !visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 64 : 36,
          height: hovering ? 64 : 36,
          background: 'radial-gradient(circle, rgba(0,255,136,0.35), transparent 70%)',
        }}
        transition={{ width: { duration: 0.25 }, height: { duration: 0.25 } }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[101] border"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: clicking ? 14 : hovering ? 44 : 18,
          height: clicking ? 14 : hovering ? 44 : 18,
          borderColor: hovering ? 'var(--color-signal)' : 'rgba(231,236,243,0.6)',
          background: hovering ? 'rgba(0,255,136,0.08)' : 'transparent',
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />
    </>
  );
}
