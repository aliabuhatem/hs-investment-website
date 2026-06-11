import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  /**
   * ink/black/charcoal are transparent so the continuous site canvas shows
   * through (no sealed blocks). `sand` is an opaque light break in the dark
   * journey. `panel` is a faint raised translucent surface.
   */
  tone?: 'ink' | 'black' | 'charcoal' | 'sand' | 'panel';
  /** Vertical rhythm — vary this per section, never uniform. */
  density?: 'flush' | 'tight' | 'normal' | 'open';
  /** Pull the section up to interlock with the previous one. */
  overlap?: boolean;
  containerClassName?: string;
};

const tones: Record<string, string> = {
  ink: 'text-sand',
  black: 'text-sand',
  charcoal: 'text-sand',
  panel: 'text-sand bg-charcoal/25 backdrop-blur-[2px]',
  sand: 'bg-sand-100 text-ink',
};

const densities: Record<string, string> = {
  flush: 'py-0',
  tight: 'py-12 sm:py-14',
  normal: 'py-16 sm:py-20 lg:py-24',
  open: 'py-24 sm:py-32 lg:py-40',
};

// Full-bleed section with a max-w-7xl inner container. Transparent by default
// so it flows over the continuous SiteBackground.
export function Section({
  children,
  id,
  className = '',
  tone = 'ink',
  density = 'normal',
  overlap = false,
  containerClassName = '',
}: Props) {
  return (
    <section
      id={id}
      className={`relative ${densities[density]} ${tones[tone]} ${
        overlap ? '-mt-16 sm:-mt-24' : ''
      } ${className}`}
    >
      <div className={`container-7xl ${containerClassName}`}>{children}</div>
    </section>
  );
}
