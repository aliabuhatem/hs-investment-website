# HS Investment Group — Corporate Website

A premium, animated, 3D corporate website for **HS Investment Group**, a multi-sector
holding company. Dark-mode architectural minimalism with cinematic motion, an interactive
3D globe, bento sector layouts, and a full set of institutional-finance pages.

> _Connecting Capital, Capability & Opportunity._

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with semantic design tokens (no raw hex in components)
- **Framer Motion** — UI motion, scroll reveals, stagger, page transitions
- **React Three Fiber / drei / three.js** — the hero 3D globe with capital-flow arcs
- **Lenis** — smooth scrolling
- **GSAP** — available for scroll-driven sequences
- **Lucide React** — icons (SVG only)
- `next/font` self-hosted fonts (Space Grotesk + Inter), `next/image` optimised images

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

Deploy-ready for **Vercel** (zero config).

## Project structure

```
src/
  app/                 # App Router pages (Home, About, Sectors, Projects, Insights,
                       # Investors, Careers, Contact + dynamic [slug]/[id] routes)
  components/
    layout/            # Nav, Footer, SmoothScroll (Lenis), ScrollProgress, PageTransition
    ui/                # Design primitives: Button, Section, SectionHeading, KPICounter,
                       # TiltCard, Tag, CTABand, PageHero, Field, Icon, AnimatedReveal, Logo
    three/             # HeroGlobe (lazy Canvas), Globe (R3F scene), StaticGlobe (fallback)
    home/ about/ sectors/ projects/ careers/ contact/   # section components
  content/             # ★ All editable copy lives here (site, sectors, projects,
                       #   insights, careers) as typed TS objects
  lib/                 # motion tokens + usePrefersReducedMotion
```

## Editing content

All copy is centralised in `src/content/*.ts`. Update text, sectors, projects, insights,
offices and KPIs there — no JSX edits required.

## Design tokens

Brand palette is defined as Tailwind tokens in `tailwind.config.ts`:

| Token        | Hex       | Use                                        |
| ------------ | --------- | ------------------------------------------ |
| `ink`        | `#15222B` | Primary dark backgrounds                   |
| `charcoal`   | `#2B2C2C` | Secondary surfaces, cards                  |
| `black`      | `#0A0A0A` | Deep backgrounds, 3D voids, footer         |
| `sand`       | `#DCD5CD` | Light surfaces, text on dark               |
| `accent`     | `#ED5225` | CTAs, highlights, active states, 3D glow   |

Motion durations and easings are unified in `src/lib/motion.ts`.

## Accessibility & performance

- `prefers-reduced-motion` honoured everywhere — every animation has a static fallback
  (the 3D globe degrades to an SVG; Lenis & page transitions disable).
- Brand-coloured visible focus rings, skip-link, sequential headings, aria-labels,
  44×44px touch targets, `aria-live` on filter results and form status.
- 3D scene is `dynamic()` code-split and only mounts when in view (IntersectionObserver).
- All routes are statically prerendered (SSG) with `next/image` (AVIF/WebP).

## Notes

Project figures (investment size, ROI, timelines) are **illustrative sample data** for
demonstration and are labelled as such throughout the UI.
