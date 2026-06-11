'use client';

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { StaticGlobe } from './StaticGlobe';

// Code-split the heavy scene; only loads when this component mounts.
const Globe = dynamic(() => import('./Globe'), { ssr: false });

export function HeroGlobe() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Only mount WebGL when the hero is actually visible (lazy below/at fold).
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: '120px' },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const showStatic = reduced;

  return (
    <div ref={ref} className="relative h-full w-full">
      {showStatic ? (
        <StaticGlobe className="h-full w-full" />
      ) : (
        <>
          {/* Static globe paints instantly; Canvas fades in over it. */}
          <StaticGlobe className="absolute inset-0 h-full w-full opacity-40" />
          {inView && (
            <Suspense fallback={null}>
              <Canvas
                camera={{ position: [0, 0, 4.2], fov: 42 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Globe interactive />
              </Canvas>
            </Suspense>
          )}
        </>
      )}
    </div>
  );
}
