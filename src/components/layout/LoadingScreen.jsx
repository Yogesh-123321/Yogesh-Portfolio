import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = [
  'initializing portfolio...',
  'loading components...',
  'compiling react...',
  'installing dependencies...',
  'connecting creativity...',
  'portfolio ready.',
];

export function LoadingScreen({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => (i < LINES.length - 1 ? i + 1 : i));
    }, 380);

    const progTimer = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.random() * 9 + 3);
        if (next >= 100) {
          clearInterval(progTimer);
          setTimeout(() => setExiting(true), 350);
          setTimeout(() => onDone?.(), 950);
        }
        return next;
      });
    }, 160);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[200] bg-void flex items-center justify-center px-6"
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="w-full max-w-lg font-mono text-sm">
            <div className="glass rounded-xl p-6 border-line">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-mute text-xs">yogesh@portfolio: ~</span>
              </div>

              <div className="space-y-1.5 min-h-[168px]">
                {LINES.slice(0, lineIndex + 1).map((line, i) => (
                  <div key={line} className="text-mute">
                    <span className="text-signal">$</span>{' '}
                    <span className={i === LINES.length - 1 ? 'text-signal' : ''}>{line}</span>
                    {i === lineIndex && i !== LINES.length - 1 && (
                      <motion.span
                        className="inline-block w-2 h-3.5 bg-signal ml-1 align-middle"
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7 }}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan via-blue to-signal"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-xs text-mute">{Math.floor(progress)}%</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
