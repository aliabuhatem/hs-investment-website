'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';

type Props = {
  children: ReactNode;
  className?: string;
  /** Total travel in px across the element's scroll pass. +down, -up. */
  amount?: number;
  axis?: 'y' | 'x';
};

/**
 * Subtle scroll parallax to give the page depth. Translates a layer faster or
 * slower than the scroll (5–15% feel). Disabled under reduced-motion.
 */
export function Parallax({
  children,
  className = '',
  amount = 60,
  axis = 'y',
}: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const t = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { [axis]: t }}>
        {children}
      </motion.div>
    </div>
  );
}
