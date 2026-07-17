import { useId, useState } from 'react';
import { cn } from '../../utils/cn';

export function FloatingField({ label, as = 'input', className, ...props }) {
  const id = useId();
  const [filled, setFilled] = useState(false);
  const Comp = as;

  return (
    <div className="relative pt-4">
      <Comp
        id={id}
        onChange={(e) => {
          setFilled(e.target.value.length > 0);
          props.onChange?.(e);
        }}
        placeholder=" "
        className={cn(
          'peer w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-ink font-body outline-none transition-colors duration-300 focus:border-signal placeholder-transparent',
          as === 'textarea' && 'min-h-[140px] resize-none',
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(
          'absolute left-4 top-7 text-mute font-mono text-sm transition-all duration-200 pointer-events-none',
          'peer-focus:-top-1 peer-focus:text-xs peer-focus:text-signal',
          filled && '-top-1 text-xs'
        )}
      >
        {label}
      </label>
    </div>
  );
}
