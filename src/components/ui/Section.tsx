import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: 'ink' | 'black' | 'sand' | 'charcoal';
  containerClassName?: string;
};

const tones: Record<string, string> = {
  ink: 'bg-ink text-sand',
  black: 'bg-black text-sand',
  charcoal: 'bg-charcoal text-sand',
  sand: 'bg-sand-100 text-ink',
};

// Standard full-bleed section with a max-w-7xl inner container.
export function Section({
  children,
  id,
  className = '',
  tone = 'ink',
  containerClassName = '',
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 lg:py-28 ${tones[tone]} ${className}`}
    >
      <div className={`container-7xl ${containerClassName}`}>{children}</div>
    </section>
  );
}
