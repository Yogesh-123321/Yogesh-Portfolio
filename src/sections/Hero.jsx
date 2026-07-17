import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { GithubIcon } from '../components/ui/BrandIcons';
import { PROFILE, RESUME_FILE } from '../data/resumeData';
import { Button } from '../components/ui/Button';

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(PROFILE.roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-24"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-mute border border-line rounded-full px-3 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            available for opportunities · {PROFILE.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]"
          >
            {PROFILE.name.split(' ')[0]}
            <br />
            <span className="text-gradient">{PROFILE.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 h-8 font-mono text-lg md:text-xl text-cyan"
          >
            <span className="text-mute">$</span> {typed}
            <span className="inline-block w-2.5 h-5 bg-cyan ml-1 align-middle animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-xl text-mute leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              as="a"
              href={RESUME_FILE || '#contact'}
              download={Boolean(RESUME_FILE)}
              onClick={(e) => {
                if (!RESUME_FILE) {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Download size={16} /> Download Resume
            </Button>
            <Button as="a" href={PROFILE.github} target="_blank" rel="noreferrer" variant="outline">
              <GithubIcon size={16} /> GitHub
            </Button>
            <Button as="a" href={`mailto:${PROFILE.email}`} variant="ghost">
              <Mail size={16} /> Email
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative mx-auto"
        >
          <ProfileFrame />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mute flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}

function ProfileFrame() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <motion.div
        className="absolute -inset-3 rounded-[2.5rem] opacity-70"
        style={{
          background: 'conic-gradient(from 0deg, var(--color-cyan), var(--color-blue), var(--color-violet), var(--color-signal), var(--color-cyan))',
          filter: 'blur(18px)',
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      />
      <motion.div
        className="relative w-full h-full rounded-[2.25rem] glass overflow-hidden flex items-center justify-center"
        whileHover={{ rotateX: -6, rotateY: 6 }}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { repeat: Infinity, duration: 4, ease: 'easeInOut' } }}
      >
        {PROFILE.photo ? (
          <img src={PROFILE.photo} alt={PROFILE.name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-3 text-mute">
            <div className="w-28 h-28 rounded-full border-2 border-dashed border-line flex items-center justify-center font-display text-3xl text-signal">
              YM
            </div>
            <span className="font-mono text-[11px]">// add photo to src/assets</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
