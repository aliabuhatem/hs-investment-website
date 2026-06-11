import Link from 'next/link';
import { Phone, Printer, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { company, nav, offices } from '@/content/site';
import { Tag } from '@/components/ui/Tag';

export function Footer() {
  return (
    <footer className="relative border-t border-sand/10 bg-black">
      <div className="container-7xl py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_2fr]">
          {/* Brand */}
          <div>
            <Logo withWordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand-400">
              {company.promise}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-400">
              {company.taglines[1]}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-brand text-accent">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="tap text-sm text-sand-400 transition-colors hover:text-sand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Offices */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-brand text-accent">
              Global Offices
            </h2>
            <ul className="mt-5 grid gap-6 sm:grid-cols-2">
              {offices.map((o) => (
                <li key={o.country} className="text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sand">{o.country}</span>
                    {o.tag && <Tag tone="accent">{o.tag}</Tag>}
                  </div>
                  <address className="mt-2 not-italic leading-relaxed text-sand-400">
                    <span className="flex gap-2">
                      <MapPin
                        size={14}
                        className="mt-0.5 shrink-0 text-sand-400"
                        aria-hidden
                      />
                      <span>{o.lines.join(', ')}</span>
                    </span>
                    {o.tel && (
                      <a
                        href={`tel:${o.tel.replace(/[^+\d]/g, '')}`}
                        className="mt-1.5 flex items-center gap-2 text-sand-400 transition-colors hover:text-sand"
                      >
                        <Phone size={14} aria-hidden />
                        {o.tel}
                      </a>
                    )}
                    {o.fax && (
                      <span className="mt-1.5 flex items-center gap-2 text-sand-400">
                        <Printer size={14} aria-hidden />
                        {o.fax}
                      </span>
                    )}
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-sand/10 pt-6 text-xs text-sand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="tracking-wide2">
            Headquartered in {company.hqCountry}
          </p>
        </div>
      </div>
    </footer>
  );
}
