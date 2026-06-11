'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { duration, ease } from '@/lib/motion';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scaleFrom?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span' | 'p';
  once?: boolean;
};

/**
 * Scroll-into-view reveal with the house easing — directional movement plus a
 * slight scale clearing (never plain opacity). Honors reduced-motion by
 * rendering content immediately with no transform.
 */
export function AnimatedReveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  scaleFrom = 0.985,
  as = 'div',
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: '-12% 0px -12% 0px' });
  const reduced = usePrefersReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : y,
      x: reduced ? 0 : x,
      scale: reduced ? 1 : scaleFrom,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: duration.slow, ease: ease.signature, delay },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView || reduced ? 'show' : 'hidden'}
    >
      {children}
    </MotionTag>
  );
}
