// Unified motion tokens — shared durations & easings for a consistent rhythm.
// Durations in seconds (Framer Motion native).

export const duration = {
  micro: 0.18, // micro-interactions (hover, press)
  base: 0.3, // standard enter
  slow: 0.4, // larger transitions (cap)
  exit: 0.2, // ~65% of base — exits are quicker than enters
} as const;

// Easing curves as cubic-bezier arrays for Framer Motion.
export const ease = {
  out: [0.16, 1, 0.3, 1], // ease-out — enters
  in: [0.7, 0, 0.84, 0], // ease-in — exits
  inOut: [0.65, 0, 0.35, 1],
} as const;

export const spring = {
  soft: { type: 'spring', stiffness: 260, damping: 30, mass: 0.8 },
  snappy: { type: 'spring', stiffness: 420, damping: 32, mass: 0.7 },
} as const;

// Stagger between list children (30–50ms).
export const stagger = {
  list: 0.04,
  tight: 0.03,
} as const;

// Reusable Framer Motion variants.
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: duration.base, ease: ease.out } },
};

export const staggerContainer = (delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger.list, delayChildren },
  },
});
