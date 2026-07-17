import { cn } from '../../utils/cn';

export function Card({ className, children, as: Comp = 'div', ...props }) {
  return (
    <Comp
      className={cn(
        'glass rounded-2xl relative overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('p-6 pb-3', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}
