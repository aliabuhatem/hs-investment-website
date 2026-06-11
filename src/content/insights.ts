// Insights / news — sample editorial content (illustrative).

export type Insight = {
  slug: string;
  title: string;
  category: 'News' | 'Article' | 'Market Report';
  date: string; // ISO
  readMins: number;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
};

export const insights: Insight[] = [
  {
    slug: 'connecting-sourcing-to-markets',
    title: 'Connecting Sourcing to Markets: The Integrated Platform Thesis',
    category: 'Article',
    date: '2026-04-18',
    readMins: 6,
    excerpt:
      'Why an active-ownership holding that controls the value chain end-to-end outperforms passive portfolios in frontier markets.',
    body: [
      'Traditional holding companies behave as passive portfolio owners — allocating capital and waiting. HS Investment Group takes the opposite stance: control, accountability and long-term commitment, expressed through active operational involvement with each subsidiary.',
      'The platform connects sourcing markets in China and Turkey, processing and logistics hubs in Egypt, and origin-based high-growth markets in Yemen — all governed and financed through the UAE. The result is a value chain that compresses lead times and captures margin at every stage.',
      'For investors, this means exposure to high-growth markets through a disciplined, execution-led structure rather than fragmented bets.',
    ],
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Port logistics operation at dusk',
  },
  {
    slug: 'food-security-regional-outlook',
    title: 'Food Security: A Regional Outlook for Integrated Operators',
    category: 'Market Report',
    date: '2026-03-02',
    readMins: 8,
    excerpt:
      'GCC food-security agendas reward operators that can guarantee provenance, safety and consistent supply at scale.',
    body: [
      'Regional food-security strategies continue to prioritise supply resilience. Integrated operators that control sourcing, processing and logistics are positioned to meet GCC-compliant safety standards while guaranteeing provenance.',
      'HS Food & Agriculture pairs origin-based products with scalable processing capacity, anchored by producer and community partnerships that secure long-term supply.',
    ],
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Agricultural fields seen from above',
  },
  {
    slug: 'renewables-recurring-revenue',
    title: 'Renewables & Recurring Revenue: The Energy Transition Runway',
    category: 'Article',
    date: '2026-01-21',
    readMins: 5,
    excerpt:
      'Solar EPC and tower leasing convert national transition mandates into predictable, de-risked cash flows.',
    body: [
      'Energy and digital transition mandates across the region create a long runway for connectivity and renewable infrastructure. Power purchase agreements and tower leases turn that demand into predictable recurring revenue.',
      'HS Telecom & Energy aligns its deployments with national strategies, building infrastructure that is both impactful and durably cash-generative.',
    ],
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Solar panel array under clear sky',
  },
  {
    slug: 'governance-investor-confidence',
    title: 'Governance as a Competitive Advantage in Frontier Markets',
    category: 'News',
    date: '2025-11-12',
    readMins: 4,
    excerpt:
      'How alignment with UAE and international standards underpins investor confidence across complex markets.',
    body: [
      'Operating in complex markets demands more governance, not less. HS Investment Group aligns compliance and oversight with UAE and international best practices — a discipline that translates directly into investor confidence.',
      'Centralised governance with decentralised execution lets the Group maintain control while subsidiaries move quickly in their markets.',
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Modern corporate architecture',
  },
];

export const getInsight = (slug: string) =>
  insights.find((i) => i.slug === slug);
