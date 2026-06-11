'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { nav } from '@/content/site';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { duration, ease } from '@/lib/motion';

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out-soft ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-7xl">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between rounded-full border px-4 transition-all duration-300 ease-out-soft ${
            scrolled
              ? 'glass border-sand/10 py-2 shadow-e2'
              : 'border-transparent py-2.5'
          }`}
        >
          <Link
            href="/"
            aria-label="HS Investment Group — home"
            className="tap flex items-center rounded-full pl-1 text-sand"
          >
            <Logo withWordmark />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`tap relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors duration-150 ${
                      item.hot
                        ? 'text-accent hover:text-accent-soft'
                        : active
                          ? 'text-sand'
                          : 'text-sand-400 hover:text-sand'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.hot && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent"
                      />
                    )}
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                        transition={{
                          duration: duration.base,
                          ease: ease.out,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href="/investors" variant="primary" className="px-5 py-2.5">
              Invest With Us
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="tap flex h-11 w-11 items-center justify-center rounded-full text-sand lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.exit }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: duration.base, ease: ease.out }}
              className="glass relative mx-3 mt-20 rounded-3xl border border-sand/10 p-4 shadow-e3"
            >
              <ul className="flex flex-col">
                {nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`tap flex items-center justify-between rounded-2xl px-4 py-3.5 text-base ${
                          active ? 'bg-sand/5 text-sand' : 'text-sand-400'
                        } ${item.hot ? 'text-accent' : ''}`}
                        aria-current={active ? 'page' : undefined}
                      >
                        {item.label}
                        <ArrowUpRight size={18} className="opacity-50" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-3 px-1">
                <Button href="/investors" className="w-full">
                  Invest With Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
