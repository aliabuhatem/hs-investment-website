import type { Metadata } from 'next';
import { MapPin, Briefcase } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { Tag } from '@/components/ui/Tag';
import { ApplicationForm } from '@/components/careers/ApplicationForm';
import { culture, positions } from '@/content/careers';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Build a career at HS Investment Group — active ownership, frontier-market exposure and disciplined execution across our sectors.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={culture.heading}
        intro={culture.body}
      />

      {/* Culture pillars — asymmetric split, staggered offset rows */}
      <Section tone="ink" density="open" overlap>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Work Culture"
            index="01"
            title="What it means to build with us"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {culture.pillars.map((p, i) => (
              <AnimatedReveal
                as="li"
                key={p.title}
                delay={i * 0.05}
                className={`group relative overflow-hidden rounded-3xl border border-sand/10 bg-charcoal/40 p-7 transition-colors hover:border-accent/40 ${
                  i % 2 === 1 ? 'sm:mt-10' : ''
                }`}
              >
                <span className="tnum font-display text-3xl font-semibold text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-sand">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-400">
                  {p.body}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 ease-out-soft group-hover:w-full"
                />
              </AnimatedReveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Open positions */}
      <Section tone="black" density="normal">
        <SectionHeading
          eyebrow="Open Positions"
          index="02"
          title="Where you fit in"
          className="mb-12"
        />
        <ul className="grid gap-4">
          {positions.map((p, i) => (
            <AnimatedReveal as="li" key={p.id} delay={i * 0.03}>
              <a
                href="#apply"
                className="group flex flex-col gap-4 rounded-3xl border border-sand/10 bg-ink p-6 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-lg font-semibold text-sand">
                      {p.title}
                    </h3>
                    <Tag tone="muted">{p.type}</Tag>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-sand-400">
                    {p.summary}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-2 text-sm text-sand-400 sm:items-end">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} aria-hidden /> {p.department}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden /> {p.location}
                  </span>
                </div>
              </a>
            </AnimatedReveal>
          ))}
        </ul>
      </Section>

      {/* Application form */}
      <Section tone="ink" id="apply" density="open">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Apply"
            index="03"
            title="Tell us about yourself"
            intro="Share your details and the role you're interested in. We review every application."
          />
          <ApplicationForm />
        </div>
      </Section>
    </>
  );
}
