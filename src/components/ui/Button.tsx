'use client';

import Link from 'next/link';
import {
  forwardRef,
  MouseEvent,
  ReactNode,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/useReducedMotion';

type Variant = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  magnetic?: boolean;
  className?: string;
  icon?: ReactNode;
  'aria-label'?: string;
};

const base =
  'tap inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 min-h-[44px] text-sm font-medium tracking-wide2 uppercase transition-[transform,background-color,box-shadow,color] duration-150 ease-out-soft active:scale-[0.98] focus-visible:outline-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-soft hover:shadow-glow',
  secondary:
    'bg-transparent text-sand border border-sand/25 hover:border-sand/50 hover:bg-sand/5',
  ghost: 'bg-transparent text-sand hover:text-accent',
};

function useMagnet(enabled: boolean) {
  const ref = useRef<HTMLSpanElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();
  const on = enabled && !reduced;

  const onMove = (e: MouseEvent) => {
    if (!on || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setT({ x: x * 0.25, y: y * 0.25 });
  };
  const reset = () => setT({ x: 0, y: 0 });

  return { ref, t, onMove, reset, on };
}

type ButtonAsLink = CommonProps & { href: string; onClick?: never; type?: never };
type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export const Button = forwardRef<HTMLElement, ButtonAsLink | ButtonAsButton>(
  function Button(props, _ref) {
    const {
      children,
      variant = 'primary',
      magnetic = false,
      className = '',
      icon,
    } = props;
    const { ref, t, onMove, reset, on } = useMagnet(magnetic);
    const cls = `${base} ${variants[variant]} ${className}`;

    const inner = (
      <motion.span
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        animate={on ? { x: t.x, y: t.y } : { x: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, mass: 0.6 }}
        className="inline-flex items-center gap-2"
      >
        {children}
        {icon}
      </motion.span>
    );

    if ('href' in props && props.href) {
      return (
        <Link
          href={props.href}
          className={cls}
          aria-label={props['aria-label']}
        >
          {inner}
        </Link>
      );
    }

    return (
      <button
        type={(props as ButtonAsButton).type ?? 'button'}
        onClick={(props as ButtonAsButton).onClick}
        className={cls}
        aria-label={props['aria-label']}
      >
        {inner}
      </button>
    );
  },
);
