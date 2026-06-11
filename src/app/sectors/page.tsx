import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectorsBento } from '@/components/sectors/SectorsBento';
import { FootprintMap } from '@/components/sectors/FootprintMap';
import { CTABand } from '@/components/ui/CTABand';

export const metadata: Metadata = {
  title: 'Investment Sectors',
  description:
    'Eight sectors forming the backbone of economic development — trading, food & agriculture, real estate, telecom & energy, fishing, mining and more.',
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Sectors"
        title="Eight sectors, one integrated platform"
        intro="From global sourcing to regional delivery — HS Investment Group operates across the sectors that underpin trade, food security, infrastructure, connectivity and energy."
      />

      <Section tone="ink">
        <SectorsBento />
      </Section>

      <Section tone="black">
        <SectionHeading
          eyebrow="Geographic Footprint"
          title="Connecting sourcing, processing & markets"
          intro="Hover or tap a location to see its role in the value chain — governed and financed through the UAE."
          className="mb-12"
        />
        <FootprintMap />
      </Section>

      <CTABand
        eyebrow="Investment Opportunities"
        title="Explore opportunities across our sectors"
        primary={{ label: 'Request Investment Brief', href: '/contact?intent=brief' }}
        secondary={{ label: 'View Projects', href: '/projects' }}
      />
    </>
  );
}
