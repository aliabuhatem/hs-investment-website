'use client';

import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';

type Props = {
  items: string[];
  separatorIcon?: ReactNode;
  speed?: number; // seconds per loop
  reverse?: boolean;
  className?: string;
};

/**
 * Always-moving connective ticker. Pure CSS transform animation (GPU) so it
 * stays smooth and off the main thread. Reduced-motion shows a static,
 * wrapped row instead.
 */
export function Marquee({
  items,
  separatorIcon,
  speed = 38,
  reverse = false,
  className = '',
}: Props) {
  const reduced = usePrefersReducedMotion();

  const Row = ({ aria }: { aria?: boolean }) => (
    <div
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={aria ? undefined : true}
    >
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-display text-2xl font-medium uppercase tracking-wide2 text-sand/80 sm:text-3xl">
            {it}
          </span>
          <span className="text-accent">{separatorIcon ?? '—'}</span>
        </span>
      ))}
    </div>
  );

  if (reduced) {
    return (
      <div className={`flex flex-wrap gap-x-10 gap-y-3 ${className}`}>
        <Row aria />
      </div>
    );
  }

  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="flex min-w-full shrink-0 animate-[marquee_var(--mq)_linear_infinite] items-center group-hover:[animation-play-state:paused]"
        style={
          {
            '--mq': `${speed}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          } as React.CSSProperties
        }
      >
        <Row aria />
        <Row />
      </div>
    </div>
  );
}
