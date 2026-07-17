import { ScrollReveal } from '../../animations/ScrollReveal';

export function SectionHeading({ designator, label, title, description }) {
  return (
    <ScrollReveal className="max-w-2xl mb-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-signal border border-signal/30 rounded px-2 py-1">
          {designator}
        </span>
        <span className="font-mono text-xs text-mute uppercase tracking-[0.2em]">{label}</span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-mute leading-relaxed">{description}</p>}
    </ScrollReveal>
  );
}
