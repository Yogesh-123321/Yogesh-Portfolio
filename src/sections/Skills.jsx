import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/layout/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../components/ui/Card';
import { SKILLS } from '../data/resumeData';

const CATEGORY_TONE = {
  Languages: 'cyan',
  Frontend: 'blue',
  'Backend & APIs': 'signal',
  'Cloud & DevOps': 'violet',
  'Tools & Integrations': 'blue',
  'Computer Fundamentals': 'mute',
};

const toneDot = {
  cyan: 'bg-cyan',
  blue: 'bg-blue',
  signal: 'bg-signal',
  violet: 'bg-violet',
  mute: 'bg-mute',
};

export function Skills() {
  const categories = Object.keys(SKILLS);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="relative px-6 lg:px-24 py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          designator="U3"
          label="Skills"
          title="A stack, not a checklist."
          description="Grouped the way they're actually used together — pick a board to inspect the components on it."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors duration-200 ${
                active === cat
                  ? 'border-signal text-signal bg-signal/10'
                  : 'border-line text-mute hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <ScrollReveal>
          <Card className="p-8 md:p-10 min-h-[280px]">
            <div className="flex items-center gap-2 mb-8 font-mono text-xs text-mute">
              <span className={`w-2 h-2 rounded-full ${toneDot[CATEGORY_TONE[active]]}`} />
              {active}
              <span className="text-dim">/ {SKILLS[active].length} components</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {SKILLS[active].map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -4, borderColor: 'var(--color-signal)' }}
                    className="font-mono text-sm px-4 py-3 rounded-xl border border-line bg-white/[0.02] text-ink cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
