import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { SectionHeading } from '../components/layout/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../components/ui/Card';
import { ACHIEVEMENTS } from '../data/resumeData';
import { CodingProfiles } from './CodingProfiles';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl text-signal">
      {display}
      {suffix}
    </span>
  );
}

export function Achievements() {
  const counterItem = ACHIEVEMENTS.find((a) => a.stat);
  const trophies = ACHIEVEMENTS.filter((a) => !a.stat);

  return (
    <section id="achievements" className="relative px-6 lg:px-24 py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          designator="U6"
          label="Achievements"
          title="Wins along the way."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {counterItem && (
            <ScrollReveal className="md:col-span-1 md:row-span-2">
              <Card className="h-full p-8 flex flex-col justify-center items-start">
                <Trophy className="text-signal mb-4" size={28} />
                <Counter value={counterItem.stat} suffix={counterItem.suffix} />
                <p className="font-display text-lg text-ink mt-3">{counterItem.title}</p>
                <p className="text-sm text-mute mt-1 leading-relaxed">{counterItem.detail}</p>
              </Card>
            </ScrollReveal>
          )}

          {trophies.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <Card className="p-6 h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-violet/10 border border-violet/30 flex items-center justify-center">
                    <Award className="text-violet" size={18} />
                  </div>
                  {item.year && <span className="font-mono text-xs text-dim">{item.year}</span>}
                </div>
                <h3 className="font-display text-ink">{item.title}</h3>
                <p className="text-sm text-mute mt-1 leading-relaxed">{item.detail}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <CodingProfiles />
      </div>
    </section>
  );
}
