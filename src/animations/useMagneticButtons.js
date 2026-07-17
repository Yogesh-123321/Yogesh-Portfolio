import { useEffect } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// Attaches a gentle magnetic pull to any element with data-magnetic,
// using event delegation so it keeps working as content mounts/unmounts.
export function useMagneticButtons() {
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (isMobile || reduced) return;

    const strength = 0.25;
    const active = new Map();

    const onMove = (e) => {
      const el = e.target.closest('[data-magnetic]');
      if (!el) return;
      if (!active.has(el)) active.set(el, true);
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
    };

    const onLeave = (e) => {
      const el = e.target.closest('[data-magnetic]');
      if (el) el.style.transform = '';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseout', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [isMobile, reduced]);
}
