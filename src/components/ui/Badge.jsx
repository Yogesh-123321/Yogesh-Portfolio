import { cn } from '../../utils/cn';

const toneMap = {
  cyan: 'border-cyan/40 text-cyan bg-cyan/10',
  blue: 'border-blue/40 text-blue bg-blue/10',
  violet: 'border-violet/40 text-violet bg-violet/10',
  signal: 'border-signal/40 text-signal bg-signal/10',
  mute: 'border-line text-mute bg-white/[0.02]',
};

export function Badge({ className, tone = 'mute', children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono tracking-tight',
        toneMap[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
