import { motion, useScroll, useSpring } from 'framer-motion';
import { NAV_LINKS } from '../../data/resumeData';

// The site's signature: a schematic trace running the height of the page.
// As the visitor scrolls, the trace "energizes" (stroke fills green) and
// each section is a numbered pad (U1, U2...) soldered onto it — a nod to
// PCB reference designators, grounded in the embedded-systems side of the
// resume. Hidden on small screens where there's no room for a side rail.
export function CircuitSpine({ activeId }) {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.3 });

  return (
    <div
      aria-hidden
      className="hidden lg:flex fixed left-8 top-0 h-screen w-10 z-30 flex-col items-center pointer-events-none"
    >
      <svg
        width="20"
        height="100%"
        viewBox="0 0 20 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-5"
      >
        <line x1="10" y1="0" x2="10" y2="100" stroke="var(--color-line)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <motion.line
          x1="10"
          y1="0"
          x2="10"
          y2="100"
          stroke="var(--color-signal)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength, filter: 'drop-shadow(0 0 3px rgba(0,255,136,0.9))' }}
        />
      </svg>

      <div className="relative h-full w-full flex flex-col justify-between py-2">
        {NAV_LINKS.map((link) => (
          <div key={link.id} className="relative flex items-center justify-center">
            <div className={`pad ${activeId === link.id ? 'live' : ''}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
