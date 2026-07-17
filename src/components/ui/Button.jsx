import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-signal text-void font-semibold hover:shadow-[0_0_24px_rgba(0,255,136,0.45)] border border-signal',
  outline:
    'border border-line text-ink hover:border-signal hover:text-signal bg-transparent',
  ghost: 'text-mute hover:text-ink bg-transparent',
};

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', as: Comp = 'button', magnetic = true, ...props }, ref) => {
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <Comp
        ref={ref}
        data-magnetic={magnetic ? 'true' : undefined}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-display tracking-wide transition-all duration-300 whitespace-nowrap',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
