import { GraduationCap, Cloud, Braces, Code2 } from 'lucide-react';
import { SectionHeading } from '../components/layout/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card, CardContent } from '../components/ui/Card';
import { EDUCATION } from '../data/resumeData';

const PILLARS = [
  {
    icon: Code2,
    title: 'Full stack by trade',
    text: 'MERN is home base — building interfaces in React/Next.js and backends in Node/Express, with MongoDB holding it all together.',
    tone: 'text-cyan',
  },
  {
    icon: Cloud,
    title: 'Ships to production',
    text: 'Comfortable owning deployment too — AWS EC2, Nginx, PM2, SSL, and Linux server administration, not just code on a laptop.',
    tone: 'text-violet',
  },
  {
    icon: Braces,
    title: 'Fundamentals-first',
    text: '400+ problems solved across LeetCode, GeeksforGeeks, and Codeforces — DSA and CS fundamentals behind every feature shipped.',
    tone: 'text-signal',
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 lg:px-24 py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          designator="U2"
          label="About"
          title="Building software end to end, then shipping it."
          description="Electronics & Computer Engineering student who builds full-stack products — from the React interface to the API to the server it runs on."
        />

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {PILLARS.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <Card className="h-full hover:border-signal/30 transition-colors duration-300">
                <CardContent className="pt-6">
                  <p.icon className={`${p.tone} mb-4`} size={26} />
                  <h3 className="font-display text-lg text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-mute leading-relaxed">{p.text}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6">
            <div className="w-12 h-12 rounded-xl bg-signal/10 border border-signal/30 flex items-center justify-center shrink-0">
              <GraduationCap className="text-signal" size={22} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg text-ink">{EDUCATION.degree}</h3>
              <p className="text-mute text-sm mt-1">
                {EDUCATION.school} · {EDUCATION.location}
              </p>
            </div>
            <div className="font-mono text-sm text-mute flex gap-6">
              <span>{EDUCATION.period}</span>
              <span className="text-signal">CGPA {EDUCATION.cgpa}</span>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
