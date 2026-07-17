import { ExternalLink, Layers } from 'lucide-react';
import { GithubIcon } from '../components/ui/BrandIcons';
import { SectionHeading } from '../components/layout/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PROJECTS } from '../data/resumeData';

function DeviceMockup({ project }) {
  return (
    <div className="relative">
      <div className="rounded-t-xl bg-panel-2 border border-line px-4 py-2 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-[10px] text-mute truncate">
          {project.name.toLowerCase().replace(/\s+/g, '-')}.app
        </span>
      </div>
      <div className="aspect-video rounded-b-xl border border-t-0 border-line bg-gradient-to-br from-panel to-panel-2 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-dim">
            <Layers size={32} />
            <span className="font-mono text-[11px]">screenshot placeholder</span>
          </div>
        )}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,136,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 lg:px-24 py-28">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          designator="U5"
          label="Projects"
          title="Things I've shipped."
          description="Two builds that cover both ends of the stack — a developer tool suite and a full-stack service manager."
        />

        <div className="space-y-24">
          {PROJECTS.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <ScrollReveal key={project.id}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 items-center ${
                    reverse ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <DeviceMockup project={project} />

                  <div>
                    <span className="font-mono text-xs text-dim">0{index + 1}</span>
                    <h3 className="font-display text-2xl md:text-3xl text-ink mt-1 mb-1">{project.name}</h3>
                    <p className="text-signal font-mono text-sm mb-4">{project.tagline}</p>
                    <p className="text-mute text-sm leading-relaxed mb-5">{project.description}</p>

                    <ul className="space-y-2 mb-5">
                      {project.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm text-ink/90 leading-relaxed">
                          <span className="text-cyan mt-1.5 shrink-0">▸</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="grid sm:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="rounded-lg border border-line p-3">
                        <p className="font-mono text-[11px] text-dim mb-1 uppercase">Challenge</p>
                        <p className="text-mute leading-relaxed">{project.challenges}</p>
                      </div>
                      <div className="rounded-lg border border-line p-3">
                        <p className="font-mono text-[11px] text-dim mb-1 uppercase">Impact</p>
                        <p className="text-mute leading-relaxed">{project.impact}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <Badge key={tech} tone="mute">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        as="a"
                        href={project.github || '#'}
                        variant="outline"
                        size="sm"
                        className={!project.github ? 'opacity-50 pointer-events-none' : ''}
                      >
                        <GithubIcon size={14} /> Code
                      </Button>
                      <Button
                        as="a"
                        href={project.demo || '#'}
                        variant="ghost"
                        size="sm"
                        className={!project.demo ? 'opacity-50 pointer-events-none' : ''}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
