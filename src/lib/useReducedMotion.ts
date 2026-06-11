'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true when the user prefers reduced motion.
 * SSR-safe: defaults to false until mounted, then syncs to the media query.
 * Every animated component must branch on this to provide a static fallback.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
