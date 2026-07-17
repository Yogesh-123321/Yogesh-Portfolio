import { Code, Braces, Swords } from 'lucide-react';
import { GithubIcon } from '../components/ui/BrandIcons';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../components/ui/Card';
import { CODING_PROFILES } from '../data/resumeData';

const ICONS = { GitHub: GithubIcon, LeetCode: Code, GeeksforGeeks: Braces, Codeforces: Swords };

// Deterministic pseudo-random contribution intensities per profile —
// decorative texture only, not claiming real activity data.
function grid(seed) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: 56 }, () => rand());
}

export function CodingProfiles() {
  const count = CODING_PROFILES.length;
  const gridClass =
    count <= 2
      ? 'sm:grid-cols-2 max-w-2xl mx-auto'
      : count === 3
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : 'sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div className="mt-16">
      <p className="font-mono text-xs text-mute uppercase tracking-[0.2em] mb-5">Coding profiles</p>
      <div className={`grid gap-5 ${gridClass}`}>
        {CODING_PROFILES.map((profile, i) => {
          const Icon = ICONS[profile.name] || Code;
          const cells = grid(i + 7);
          return (
            <ScrollReveal key={profile.name} delay={i * 0.06}>
              <Card
                as={profile.url ? 'a' : 'div'}
                href={profile.url || undefined}
                target={profile.url ? '_blank' : undefined}
                rel={profile.url ? 'noreferrer' : undefined}
                className="p-6 h-full block hover:border-signal/30 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <Icon size={20} className="text-signal" />
                  <span className="font-display text-base text-ink">{profile.name}</span>
                </div>
                <div className="grid grid-cols-8 gap-1.5 mb-4">
                  {cells.map((v, idx) => (
                    <span
                      key={idx}
                      className="w-3 h-3 rounded-sm"
                      style={{
                        background:
                          v > 0.8
                            ? 'var(--color-signal)'
                            : v > 0.55
                            ? 'rgba(0,255,136,0.5)'
                            : v > 0.3
                            ? 'rgba(0,255,136,0.22)'
                            : 'var(--color-line)',
                      }}
                    />
                  ))}
                </div>
                <p className="font-mono text-xs text-mute truncate">@{profile.handle}</p>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}