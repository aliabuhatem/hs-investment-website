import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { Phone, Printer, MapPin, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Tag } from '@/components/ui/Tag';
import { ContactForm } from '@/components/contact/ContactForm';
import { offices, ctaCluster } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact HS Investment Group. Headquarters in Abu Dhabi, UAE, with offices in Canada, China, Turkey, Egypt and Yemen.',
};

const HQ_MAP =
  'https://maps.google.com/maps?q=EREC%20Building%20Al%20Falah%20Street%20Abu%20Dhabi&t=&z=14&ie=UTF8&iwloc=&output=embed';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's connect capital with capability"
        intro="Reach our investor relations team, or visit one of our six global offices."
      />

      {/* CTA cluster */}
      <Section tone="ink" className="!pb-0">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ctaCluster.map((c, i) => (
            <AnimatedReveal key={c.href} delay={i * 0.04}>
              <Link
                href={c.href}
                className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-sand/10 bg-charcoal/50 p-5 transition-colors hover:border-accent/40"
              >
                <span className="text-sm font-medium text-sand">{c.label}</span>
                <ArrowRight
                  size={18}
                  className="text-sand-400 transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden
                />
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Form + map */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Send a Message"
              title="We'd love to hear from you"
              className="mb-8"
            />
            <Suspense fallback={<div className="h-96 rounded-3xl bg-charcoal/40" />}>
              <ContactForm />
            </Suspense>
          </div>
          <div>
            <SectionHeading
              eyebrow="Headquarters"
              title="Abu Dhabi, UAE"
              className="mb-8"
            />
            <div className="overflow-hidden rounded-3xl border border-sand/10">
              <iframe
                title="HS Investment Group headquarters location, Abu Dhabi"
                src={HQ_MAP}
                className="h-72 w-full grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <address className="mt-6 not-italic">
              <p className="text-sm leading-relaxed text-sand-300">
                606, EREC Building, Al Falah St., Zone 1, Al Danah, Abu Dhabi
                <br />
                P.O. Box 94840, Abu Dhabi, UAE
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a
                  href="tel:+97126507741"
                  className="flex items-center gap-2 text-sand-300 transition-colors hover:text-sand"
                >
                  <Phone size={15} aria-hidden /> +971 2 650 7741
                </a>
                <span className="flex items-center gap-2 text-sand-400">
                  <Printer size={15} aria-hidden /> +971 2 650 7742
                </span>
              </div>
            </address>
          </div>
        </div>
      </Section>

      {/* All offices */}
      <Section tone="black">
        <SectionHeading
          eyebrow="Global Offices"
          title="Where to find us"
          className="mb-12"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <AnimatedReveal
              as="li"
              key={o.country}
              className="rounded-3xl border border-sand/10 bg-ink p-7"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-sand">
                  {o.country}
                </h3>
                {o.tag && <Tag tone="accent">{o.tag}</Tag>}
              </div>
              <address className="mt-4 flex gap-2 not-italic text-sm leading-relaxed text-sand-400">
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden />
                <span>{o.lines.join(', ')}</span>
              </address>
              {o.tel && (
                <a
                  href={`tel:${o.tel.replace(/[^+\d]/g, '')}`}
                  className="mt-3 flex items-center gap-2 text-sm text-sand-300 transition-colors hover:text-sand"
                >
                  <Phone size={15} aria-hidden /> {o.tel}
                </a>
              )}
            </AnimatedReveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
