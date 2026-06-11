import { ReactNode } from 'react';

type Props = {
  index?: string; // "01"
  children: ReactNode;
  light?: boolean;
  className?: string;
};

/**
 * Editorial kicker label: "01 — SECTORS" with a hairline. The detailing that
 * separates art-directed from templated.
 */
export function Kicker({ index, children, light = false, className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-brand ${
        light ? 'text-accent-deep' : 'text-accent'
      } ${className}`}
    >
      {index && (
        <span className="tnum font-display text-sm tabular-nums">{index}</span>
      )}
      <span
        aria-hidden
        className={`h-px w-8 ${light ? 'bg-ink/30' : 'bg-sand/30'}`}
      />
      <span className={light ? 'text-ink/70' : 'text-sand/80'}>{children}</span>
    </span>
  );
}
