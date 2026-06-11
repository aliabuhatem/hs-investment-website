import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tone?: 'accent' | 'neutral' | 'success' | 'muted';
  className?: string;
};

const tones: Record<string, string> = {
  accent: 'bg-accent/12 text-accent border-accent/30',
  neutral: 'bg-sand/8 text-sand border-sand/20',
  success: 'bg-emerald-400/12 text-emerald-300 border-emerald-400/30',
  muted: 'bg-sand/5 text-sand-400 border-sand/15',
};

export function Tag({ children, tone = 'neutral', className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wide2 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
