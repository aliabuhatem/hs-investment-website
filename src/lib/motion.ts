// Unified motion tokens — one house easing, one rhythm, used everywhere.
// Durations in seconds (Framer Motion native). Animate transform/opacity only.

export const duration = {
  micro: 0.18, // micro-interactions (hover, press)
  base: 0.34, // standard enter
  slow: 0.5, // larger / headline reveals
  exit: 0.22, // ~65% of base — exits quicker than enters
} as const;

// Easing curves as cubic-bezier arrays for Framer Motion.
export const ease = {
  // ── Signature house easing: confident, slightly overshooting. Use this for
  //    every meaningful enter so the whole site shares one motion personality.
  signature: [0.22, 1.12, 0.36, 1],
  out: [0.16, 1, 0.3, 1], // soft ease-out (subtle moves, non-overshoot)
  in: [0.7, 0, 0.84, 0], // ease-in — exits
  inOut: [0.65, 0, 0.35, 1],
} as const;

// House spring — the physical version of the signature easing.
export const spring = {
  house: { type: 'spring', stiffness: 360, damping: 26, mass: 0.9 },
  soft: { type: 'spring', stiffness: 260, damping: 30, mass: 0.8 },
  snappy: { type: 'spring', stiffness: 420, damping: 30, mass: 0.7 },
} as const;

// Stagger between list children (40–60ms — visible cascade, not all-at-once).
export const stagger = {
  list: 0.05,
  tight: 0.04,
  loose: 0.07,
} as const;

// ── Reusable variants ─────────────────────────────────────────────────────
// Directional reveal with slight scale clearing (not plain opacity).
export const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.signature },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: duration.base, ease: ease.out } },
};

// Directional variants for editorial left/right splits.
export const fadeDir = (dx = 0, dy = 28) => ({
  hidden: { opacity: 0, x: dx, y: dy },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: duration.slow, ease: ease.signature },
  },
});

export const staggerContainer = (delayChildren = 0, each: number = stagger.list) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: each, delayChildren },
  },
});

// Clip/mask wipe for headline lines (reveals upward from a clipped baseline).
export const lineClip = {
  hidden: { y: '110%' },
  show: {
    y: '0%',
    transition: { duration: duration.slow, ease: ease.signature },
  },
};
