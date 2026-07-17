import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { NAV_LINKS, PROFILE, RESUME_FILE } from '../../data/resumeData';
import { Button } from '../ui/Button';

export function Navbar({ activeId }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 20);
    if (latest > prev && latest > 120) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`w-full max-w-5xl rounded-2xl glass transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : ''
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <button
            onClick={() => scrollTo('home')}
            data-magnetic
            className="font-display font-semibold text-ink tracking-tight flex items-center gap-2"
          >
            <span className="text-signal font-mono text-xs border border-signal/40 rounded px-1.5 py-0.5">YM</span>
            <span className="hidden sm:inline">{PROFILE.name}</span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  data-magnetic
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3 py-2 text-sm font-display transition-colors duration-200 ${
                    activeId === link.id ? 'text-signal' : 'text-mute hover:text-ink'
                  }`}
                >
                  {link.label}
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-2 right-2 -bottom-0.5 h-px bg-signal shadow-[0_0_8px_var(--color-signal)]"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              as="a"
              href={RESUME_FILE || '#contact'}
              onClick={(e) => {
                if (!RESUME_FILE) {
                  e.preventDefault();
                  scrollTo('contact');
                }
              }}
              download={Boolean(RESUME_FILE)}
              variant="outline"
              size="sm"
            >
              <Download size={14} /> Resume
            </Button>
          </div>

          <button
            className="lg:hidden text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 glass rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-3 py-3 rounded-lg font-display text-sm ${
                      activeId === link.id ? 'text-signal bg-signal/5' : 'text-mute'
                    }`}
                  >
                    <span className="font-mono text-xs text-dim mr-2">{link.designator}</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
