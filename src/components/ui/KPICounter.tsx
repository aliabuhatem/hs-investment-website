'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  light?: boolean;
};

// Animated count-up triggered on scroll into view. Uses tabular figures.
export function KPICounter({
  value,
  suffix = '',
  prefix = '',
  label,
  decimals = 0,
  light = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const dur = 1100;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  const formatted = display.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref} className="flex flex-col">
      <span
        className={`tnum font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl ${
          light ? 'text-ink' : 'text-sand'
        }`}
      >
        {prefix}
        <span className="text-accent">{formatted}</span>
        {suffix}
      </span>
      <span
        className={`mt-3 text-xs font-medium uppercase tracking-wide2 ${
          light ? 'text-ink/60' : 'text-sand-400'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
