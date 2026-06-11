'use client';

import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { MapPin } from 'lucide-react';
import { footprint } from '@/content/site';
import { Kicker } from '@/components/ui/Kicker';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';
import { ease } from '@/lib/motion';

// Story order: governance hub first, then sourcing → processing → origin → market.
const order = ['UAE', 'China', 'Turkey', 'Egypt', 'Yemen', 'Canada'];
const steps = order
  .map((c) => footprint.find((f) => f.country === c))
  .filter(Boolean) as (typeof footprint)[number][];

// Positions on a 100×62.5 (16:10) canvas.
const pos: Record<string, { x: number; y: number }> = {
  Canada: { x: 16, y: 30 },
  UAE: { x: 60, y: 52 },
  Turkey: { x: 54, y: 37 },
  Egypt: { x: 54, y: 50 },
  Yemen: { x: 62, y: 59 },
  China: { x: 80, y: 43 },
};

function MapStage({ active }: { active: number }) {
  const hub = pos['UAE'];
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-sand/12 bg-charcoal/30">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(rgba(220,213,205,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 62.5"
        preserveAspectRatio="none"
        aria-hidden
      >
        {steps.map((f, i) => {
          if (f.country === 'UAE') return null;
          const b = pos[f.country];
          const mx = (hub.x + b.x) / 2;
          const my = Math.min(hub.y, b.y) - 9;
          // Arcs accumulate as the story advances.
          const shown = i <= active;
          return (
            <path
              key={f.country}
              d={`M${hub.x} ${hub.y} Q${mx} ${my} ${b.x} ${b.y}`}
              fill="none"
              stroke="#ED5225"
              strokeWidth={0.5}
              strokeDasharray={1}
              pathLength={1}
              style={{
                strokeDashoffset: shown ? 0 : 1,
                opacity: shown ? 0.85 : 0,
                transition: 'stroke-dashoffset 0.6s ease, opacity 0.4s ease',
              }}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
      {steps.map((f, i) => {
        const p = pos[f.country];
        const isActive = i === active;
        const seen = i <= active;
        return (
          <div
            key={f.country}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? 16 : 10,
                height: isActive ? 16 : 10,
                background: seen ? '#ED5225' : '#5b6b74',
                boxShadow: isActive ? '0 0 0 6px rgba(237,82,37,0.22)' : 'none',
              }}
            />
            <span
              className={`absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wide2 transition-colors ${
                isActive ? 'text-sand' : 'text-sand-400/70'
              }`}
            >
              {f.country}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function FootprintStory() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    setActive(idx < 0 ? 0 : idx);
  });

  // ── Reduced-motion / no-pin fallback: a clean static editorial list. ──
  if (reduced) {
    return (
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <MapStage active={steps.length - 1} />
        <ol className="space-y-5">
          {steps.map((f, i) => (
            <li key={f.country} className="flex gap-4 border-t border-sand/10 pt-4">
              <span className="tnum font-display text-sm text-accent">
                0{i + 1}
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-sand">
                  {f.country}{' '}
                  <span className="text-sand-400">— {f.role}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-sand-400">
                  {f.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  const current = steps[active];

  return (
    <div ref={ref} style={{ height: `${steps.length * 78 + 40}vh` }}>
      <div className="sticky top-0 flex min-h-dvh items-center py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Narrative panel */}
          <div className="order-2 lg:order-1">
            {/* Step rail */}
            <div className="mb-8 flex gap-1.5">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-sand/12"
                >
                  <span
                    className="block h-full origin-left bg-accent transition-transform duration-500 ease-out-soft"
                    style={{
                      transform: `scaleX(${i <= active ? 1 : 0})`,
                    }}
                  />
                </span>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.country}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: ease.signature }}
              >
                <Kicker index={`0${active + 1}`}>{current.role}</Kicker>
                <h3 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-wide2 text-sand sm:text-5xl lg:text-6xl">
                  {current.country}
                </h3>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-sand-300">
                  {current.detail}
                </p>
              </motion.div>
            </AnimatePresence>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-sand-400">
              Sourcing in China &amp; Turkey, processing in Egypt, origin
              resources in Yemen — all governed and financed through the UAE.
            </p>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2">
            <MapStage active={active} />
          </div>
        </div>
      </div>
    </div>
  );
}
