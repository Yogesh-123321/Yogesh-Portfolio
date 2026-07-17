import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/layout/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../components/ui/Card';
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE, RESUME_FILE } from '../data/resumeData';

const HELP = ['whoami', 'skills', 'projects', 'experience', 'resume', 'contact', 'clear', 'help'];

function runCommand(cmd) {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case 'whoami':
      return [`${PROFILE.name} — ${PROFILE.roles[0]}`, PROFILE.tagline];
    case 'skills':
      return Object.entries(SKILLS).map(([group, items]) => `${group}: ${items.join(', ')}`);
    case 'projects':
      return PROJECTS.map((p) => `${p.name} — ${p.tagline}`);
    case 'experience':
      return EXPERIENCE.map((e) => `${e.role} @ ${e.company} (${e.period})`);
    case 'resume':
      return [RESUME_FILE ? `opening ${RESUME_FILE} ...` : 'no resume file linked yet — see the Contact section to reach out directly.'];
    case 'contact':
      return [`email: ${PROFILE.email}`, `phone: ${PROFILE.phone}`, `github: ${PROFILE.github}`];
    case 'help':
      return [`available commands: ${HELP.join(', ')}`];
    case 'clear':
      return null;
    case '':
      return [];
    default:
      return [`command not found: ${c} — type 'help' to see available commands`];
  }
}

export function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', lines: ["type 'help' to see available commands"] },
  ]);
  const [value, setValue] = useState('');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  const submit = (e) => {
    e.preventDefault();
    const cmd = value;
    const result = runCommand(cmd);
    if (result === null) {
      setHistory([]);
    } else {
      setHistory((h) => [...h, { type: 'input', lines: [cmd] }, { type: 'output', lines: result }]);
    }
    setValue('');
  };

  return (
    <section className="relative px-6 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          designator="U4.1"
          label="Terminal"
          title="Or just ask the terminal."
          description="A tiny shell wired to the same data as the rest of the page — try whoami, skills, or projects."
        />

        <ScrollReveal>
          <Card
            className="p-0 overflow-hidden"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="flex items-center gap-1.5 px-5 py-3 border-b border-line">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-mute">yogesh@portfolio: ~</span>
            </div>

            <div ref={scrollRef} className="font-mono text-sm p-5 h-72 overflow-y-auto">
              {history.map((entry, i) => (
                <div key={i} className="mb-1.5">
                  {entry.lines.map((line, j) => (
                    <div key={j} className={entry.type === 'input' ? 'text-ink' : 'text-mute'}>
                      {entry.type === 'input' && <span className="text-signal">➜ ~ </span>}
                      {line}
                    </div>
                  ))}
                </div>
              ))}

              <form onSubmit={submit} className="flex items-center gap-2">
                <span className="text-signal">➜ ~</span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-ink"
                  autoComplete="off"
                  spellCheck="false"
                  aria-label="Terminal command input"
                />
                <motion.span
                  className="inline-block w-2 h-4 bg-signal"
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              </form>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
