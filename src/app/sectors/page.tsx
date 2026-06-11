import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectorsShowcase } from '@/components/sectors/SectorsShowcase';
import { FootprintStory } from '@/components/sectors/FootprintStory';
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

      <Section tone="ink" density="normal" overlap>
        <SectorsShowcase />
      </Section>

      <Section tone="ink" density="tight">
        <div className="mb-4 max-w-2xl">
          <SectionHeading
            eyebrow="Geographic Footprint"
            index="06"
            title="Connecting sourcing, processing & markets"
            intro="Scroll to trace the value chain — governed and financed through the UAE."
          />
        </div>
        <FootprintStory />
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
