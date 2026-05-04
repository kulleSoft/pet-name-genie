import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function Chip({ active, className, children, ...rest }: ChipProps) {
  return (
    <button
      type="button"
      {...rest}
      className={cn(
        'shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition-all whitespace-nowrap',
        active
          ? 'gradient-primary text-primary-foreground border-transparent shadow-fun scale-105'
          : 'bg-card text-foreground border-border hover:border-primary/50',
        className,
      )}
    >
      {children}
    </button>
  );
}
