import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, Send, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons';
import { SectionHeading } from '../components/layout/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FloatingField } from '../components/ui/Input';
import { PROFILE, RESUME_FILE } from '../data/resumeData';

const DETAILS = [
  { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
  { icon: GithubIcon, label: 'GitHub', value: 'Yogesh-123321', href: PROFILE.github },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Yogesh Madan', href: PROFILE.linkedin },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const subject = encodeURIComponent(`Portfolio contact from ${form.get('name') || 'a visitor'}`);
    const body = encodeURIComponent(form.get('message') || '');
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 lg:px-24 py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          designator="U7"
          label="Contact"
          title="Let's build something."
          description="Open to full-time software roles, internships, and interesting collaborations in web and full-stack development."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <ScrollReveal className="space-y-4">
            {DETAILS.map((d) => (
              <Card
                as="a"
                href={d.href}
                target={d.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                key={d.label}
                className="flex items-center gap-4 p-5 hover:border-signal/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-signal/10 border border-signal/25 flex items-center justify-center shrink-0">
                  <d.icon className="text-signal" size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-dim uppercase">{d.label}</p>
                  <p className="text-ink text-sm mt-0.5">{d.value}</p>
                </div>
              </Card>
            ))}

            <Button
              as="a"
              href={RESUME_FILE || `mailto:${PROFILE.email}`}
              download={Boolean(RESUME_FILE)}
              variant="outline"
              className="w-full mt-2"
            >
              <Download size={16} /> Download Resume
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Card className="p-6 md:p-8">
              {sent ? (
                <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-signal/10 border border-signal/30 flex items-center justify-center">
                    <Check className="text-signal" size={24} />
                  </div>
                  <h3 className="font-display text-xl text-ink">Message ready to send</h3>
                  <p className="text-mute text-sm max-w-xs">
                    Your email client should have opened with the message. Send it whenever you're ready.
                  </p>
                  <Button variant="ghost" onClick={() => setSent(false)}>
                    Write another
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-6">
                  <FloatingField label="Your name" name="name" required />
                  <FloatingField label="Your email" name="email" type="email" required />
                  <FloatingField label="Message" name="message" as="textarea" required />
                  <Button type="submit" className="w-full">
                    <Send size={16} /> Send Message
                  </Button>
                </form>
              )}
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
