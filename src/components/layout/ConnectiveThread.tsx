'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';

/**
 * A single thin orange thread that runs the length of the page in the left
 * gutter, drawn as you scroll — connective tissue that threads every section
 * into one continuous narrative. Hidden on small screens; reduced-motion shows
 * a static faint rail with no comet.
 */
export function ConnectiveThread() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const dotTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-1/2 z-0 hidden w-full max-w-7xl -translate-x-1/2 lg:block lg:pl-4"
    >
      <div className="relative h-full">
        {/* faint full-height rail */}
        <div className="absolute left-0 top-0 h-full w-px bg-sand/10" />
        {/* drawn orange thread */}
        {reduced ? (
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent/60 to-transparent" />
        ) : (
          <>
            <motion.div
              style={{ scaleY }}
              className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accent/70 to-accent/30"
            />
            {/* travelling comet node */}
            <motion.div
              style={{ top: dotTop }}
              className="absolute left-0 -translate-x-1/2"
            >
              <span className="block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_3px_rgba(237,82,37,0.6)]" />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
