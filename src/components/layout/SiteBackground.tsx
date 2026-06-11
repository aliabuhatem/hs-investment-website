'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';

/**
 * One continuous canvas behind the whole site — a long ink→black gradient with
 * fixed orange glows and a faint grain. Sections render mostly transparent over
 * this so the page reads as a single designed surface, not stacked slides.
 */
export function SiteBackground() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  // The glow field drifts very slightly with scroll for living depth.
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Base vertical journey */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #15222B 0%, #101b22 28%, #0c151b 55%, #0a1117 78%, #0A0A0A 100%)',
        }}
      />
      {/* Drifting orange glow field */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: reduced ? '0%' : glowY,
          background:
            'radial-gradient(38% 26% at 78% 8%, rgba(237,82,37,0.14), transparent 70%),' +
            'radial-gradient(30% 22% at 12% 42%, rgba(237,82,37,0.08), transparent 70%),' +
            'radial-gradient(34% 24% at 88% 70%, rgba(237,82,37,0.10), transparent 70%)',
        }}
      />
      {/* Faint architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #DCD5CD 1px, transparent 1px), linear-gradient(to bottom, #DCD5CD 1px, transparent 1px)',
          backgroundSize: '88px 88px',
        }}
      />
      {/* Grain */}
      <div className="absolute inset-0 bg-grain opacity-[0.5]" />
    </div>
  );
}
