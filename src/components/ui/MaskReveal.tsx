'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { duration, ease, stagger } from '@/lib/motion';

type Props = {
  /** Each entry becomes its own clipped, upward-wiping line. */
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  /** Draw the orange accent bar that wipes in before the text. */
  bar?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  delay?: number;
};

/**
 * Headline reveal — each line sits in an overflow-clipped row and wipes up from
 * its baseline with the house easing. Optional orange bar wipes in first,
 * echoing the brand cover. Reduced-motion renders statically.
 */
export function MaskReveal({
  lines,
  className = '',
  lineClassName = '',
  bar = false,
  as = 'h2',
  delay = 0,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12%' }}
    >
      {bar && (
        <span className="mb-5 flex">
          <motion.span
            aria-hidden
            className="block h-[3px] w-14 origin-left bg-accent"
            variants={{
              hidden: { scaleX: reduced ? 1 : 0 },
              show: {
                scaleX: 1,
                transition: {
                  duration: duration.slow,
                  ease: ease.signature,
                  delay,
                },
              },
            }}
          />
        </span>
      )}
      {lines.map((line, i) => (
        <span
          key={i}
          className={`block overflow-hidden ${lineClassName}`}
          style={{ paddingBottom: '0.06em' }}
        >
          <motion.span
            className="block"
            variants={{
              hidden: { y: reduced ? '0%' : '115%' },
              show: {
                y: '0%',
                transition: {
                  duration: duration.slow,
                  ease: ease.signature,
                  delay: delay + (bar ? 0.12 : 0) + i * stagger.loose,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
