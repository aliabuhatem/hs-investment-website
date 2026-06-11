import { ArrowRight, Plus } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { Section } from '@/components/ui/Section';
import { Kicker } from '@/components/ui/Kicker';
import { MaskReveal } from '@/components/ui/MaskReveal';
import { Marquee } from '@/components/ui/Marquee';
import { Parallax } from '@/components/ui/Parallax';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { SectorsIndex } from '@/components/sectors/SectorsIndex';
import { StatStrip } from '@/components/home/StatStrip';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { FootprintStory } from '@/components/sectors/FootprintStory';
import { KeyStrengths } from '@/components/home/KeyStrengths';
import { CTABand } from '@/components/ui/CTABand';
import { Button } from '@/components/ui/Button';
import { overview, company } from '@/content/site';

const tickerItems = [
  'Trading & Commodities',
  'Food & Agriculture',
  'Real Estate',
  'Telecom & Energy',
  'Fishing & Aquaculture',
  'Mining & Cement',
  'UAE',
  'China',
  'Turkey',
  'Egypt',
  'Yemen',
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Connective ticker: threads the hero into the narrative ── */}
      <div className="relative z-10 -mt-2 border-y border-sand/10 bg-black/40 py-5 backdrop-blur-sm">
        <Marquee
          items={tickerItems}
          separatorIcon={<Plus size={14} aria-hidden />}
          speed={44}
        />
      </div>

      {/* ── Overview — editorial 40/60 split, ghost numeral, mask headline ── */}
      <Section tone="ink" density="open" containerClassName="relative">
        <span
          aria-hidden
          className="ghost-num pointer-events-none absolute -top-16 right-0 hidden font-display text-[16rem] font-bold lg:block"
        >
          01
        </span>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Kicker index="01">Who We Are</Kicker>
            <MaskReveal
              as="h2"
              className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-wide2 text-sand sm:text-4xl lg:text-5xl"
              lines={['Connecting capital', 'with capability to', 'unlock opportunity']}
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Parallax amount={28}>
              <div className="space-y-5 text-base leading-relaxed text-sand-300 sm:text-lg">
                {overview.body.map((p, i) => (
                  <AnimatedReveal as="p" key={p} delay={i * 0.06}>
                    {p}
                  </AnimatedReveal>
                ))}
              </div>
            </Parallax>
            <AnimatedReveal delay={0.1} className="mt-8 flex items-center gap-6">
              <Button href="/about" variant="ghost" icon={<ArrowRight size={16} />}>
                Read our story
              </Button>
              <span className="hidden h-px flex-1 bg-sand/15 sm:block" />
            </AnimatedReveal>
          </div>
        </div>
      </Section>

      {/* ── Dense stat band, overlapping into the section above ── */}
      <Section tone="ink" density="tight" overlap>
        <StatStrip />
      </Section>

      {/* ── Sectors — asymmetric editorial showcase ── */}
      <Section tone="ink" density="open">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Kicker index="02">Investment Sectors</Kicker>
            <MaskReveal
              as="h2"
              className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-wide2 text-sand sm:text-4xl lg:text-5xl"
              lines={['Eight sectors,', 'one integrated platform']}
            />
            <p className="mt-5 max-w-md text-base leading-relaxed text-sand-400">
              The backbone of economic development — trade, food security,
              infrastructure, connectivity and energy.
            </p>
          </div>
          <Button href="/sectors" variant="secondary">
            All sectors
          </Button>
        </div>
        <SectorsIndex />
      </Section>

      {/* ── Featured projects — editorial feature + rows ── */}
      <Section tone="ink" density="normal">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Kicker index="03">Featured Projects</Kicker>
            <MaskReveal
              as="h2"
              className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-wide2 text-sand sm:text-4xl lg:text-5xl"
              lines={['Capital deployed', 'with control']}
            />
          </div>
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
        <FeaturedProjects />
      </Section>

      {/* ── Pinned geographic-footprint storytelling ── */}
      <Section tone="ink" density="tight">
        <div className="mb-4 max-w-2xl">
          <Kicker index="04">Geographic Footprint</Kicker>
          <MaskReveal
            as="h2"
            className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-wide2 text-sand sm:text-4xl lg:text-5xl"
            lines={['One value chain,', 'five connected markets']}
          />
        </div>
        <FootprintStory />
      </Section>

      {/* ── Key strengths — bento hierarchy ── */}
      <Section tone="ink" density="open">
        <div className="mb-12 max-w-2xl">
          <Kicker index="05">Six Key Strengths</Kicker>
          <MaskReveal
            as="h2"
            className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-wide2 text-sand sm:text-4xl lg:text-5xl"
            lines={['Why HS Investment', 'Group performs']}
          />
        </div>
        <KeyStrengths />
      </Section>

      <CTABand
        eyebrow="Partner With Us"
        title="Connect capital with capability to unlock opportunity"
        body={`${company.taglines[1]} We welcome partners seeking long-term exposure to high-growth markets through a disciplined, execution-led platform.`}
        primary={{ label: 'Invest With Us', href: '/investors' }}
        secondary={{ label: 'Request Investment Brief', href: '/contact?intent=brief' }}
      />
    </>
  );
}
