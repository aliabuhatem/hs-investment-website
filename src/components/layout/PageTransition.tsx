'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { duration, ease } from '@/lib/motion';

// Directional slide + ink curtain wipe between routes. Reduced-motion gets a
// plain crossfade.
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = usePrefersReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: duration.base, ease: ease.out }}
        className="relative"
      >
        {!reduced && (
          <motion.div
            aria-hidden
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: duration.slow, ease: ease.inOut }}
            style={{ transformOrigin: 'top' }}
            className="pointer-events-none fixed inset-0 z-[55] bg-ink"
          />
        )}
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
