import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase } from 'lucide-react';
import { SectionHeading } from '../components/layout/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { EXPERIENCE } from '../data/resumeData';

export function Experience() {
  const [openId, setOpenId] = useState(EXPERIENCE[0]?.id);

  return (
    <section id="experience" className="relative px-6 lg:px-24 py-28">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          designator="U4"
          label="Experience"
          title="Time on the job."
          description="Two stints at the same company, six months apart, each one going deeper into the stack."
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, index) => {
              const open = openId === exp.id;
              return (
                <ScrollReveal key={exp.id} delay={index * 0.1} className="relative">
                  <span
                    className={`absolute -left-8 md:-left-10 top-6 w-4 h-4 rounded-full border-2 ${
                      exp.current ? 'border-signal bg-signal shadow-[0_0_14px_rgba(0,255,136,0.8)]' : 'border-mute bg-panel'
                    }`}
                  />
                  <Card className="overflow-hidden">
                    <button
                      onClick={() => setOpenId(open ? null : exp.id)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={15} className="text-signal" />
                          <h3 className="font-display text-lg text-ink">{exp.role}</h3>
                          {exp.current && (
                            <Badge tone="signal" className="ml-1">current</Badge>
                          )}
                        </div>
                        <p className="text-mute text-sm">{exp.company}</p>
                        <p className="font-mono text-xs text-dim mt-1">{exp.period}</p>
                      </div>
                      <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-mute shrink-0 mt-1">
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-sm text-mute leading-relaxed mb-4">{exp.summary}</p>
                            <ul className="space-y-2 mb-5">
                              {exp.points.map((point) => (
                                <li key={point} className="flex gap-2.5 text-sm text-ink/90 leading-relaxed">
                                  <span className="text-signal mt-1.5 shrink-0">▸</span>
                                  {point}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.stack.map((tech) => (
                                <Badge key={tech} tone="cyan">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
