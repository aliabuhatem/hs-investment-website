// Investment sectors — drives the sectors index and dynamic /sectors/[slug].

export type Sector = {
  slug: string;
  name: string;
  short: string; // nav / card title without "HS"
  tagline: string;
  icon: string; // lucide-react icon name
  geo: 'coin' | 'building' | 'tower' | 'solar' | 'ship' | 'fish' | 'cement' | 'grain';
  overview: string;
  strategy: string;
  strengths: string[];
  opportunities: string;
  span?: 'wide' | 'tall' | 'normal'; // bento layout hint
};

export const sectors: Sector[] = [
  {
    slug: 'trading-commodities',
    name: 'HS Trading & Commodities',
    short: 'Trading & Commodities',
    tagline: 'Essential Supply. Global Sourcing. Reliable Delivery.',
    icon: 'Boxes',
    geo: 'coin',
    span: 'wide',
    overview:
      'Sourcing, trading and distribution of construction materials, industrial commodities and equipment — connecting global suppliers to complex and underserved markets.',
    strategy:
      'We leverage bulk procurement and competitive pricing through established supplier networks in China and Turkey, routed through UAE and Egypt logistics hubs for reliable last-mile delivery.',
    strengths: [
      'Bulk procurement & competitive pricing',
      'Supplier networks in China & Turkey',
      'UAE / Egypt logistics hubs',
      'Supply to complex & underserved markets',
    ],
    opportunities:
      'Rising regional construction and industrial demand creates durable volume for a sourcing platform with proven logistics reach.',
  },
  {
    slug: 'food-agriculture',
    name: 'HS Food & Agriculture',
    short: 'Food & Agriculture',
    tagline: 'From Origin to Regional & Global Markets.',
    icon: 'Wheat',
    geo: 'grain',
    span: 'tall',
    overview:
      'Integrated food and agri value chains built on origin-based products and scalable processing for export.',
    strategy:
      'End-to-end supply chain control with GCC-compliant food safety and scalable processing capacity, anchored by strong producer and community partnerships.',
    strengths: [
      'End-to-end supply chain control',
      'GCC-compliant food safety',
      'Scalable processing capacity',
      'Strong producer & community partnerships',
    ],
    opportunities:
      'Regional food security agendas reward integrated operators who can guarantee provenance, safety and consistent supply.',
  },
  {
    slug: 'real-estate-infrastructure',
    name: 'HS Real Estate & Infrastructure',
    short: 'Real Estate & Infrastructure',
    tagline: 'Developing Assets That Endure.',
    icon: 'Building2',
    geo: 'building',
    overview:
      'Development, investment and asset management across emerging markets, with integrated energy and telecom.',
    strategy:
      'A hybrid model spanning development, investment and asset management generates diversified income — development profit, leasing and management fees.',
    strengths: [
      'Emerging-market development experience',
      'Hybrid development / investment / asset management',
      'Diversified income streams',
      'Integrated energy & telecom',
    ],
    opportunities:
      'Urbanisation and infrastructure gaps across frontier markets support long-duration, income-producing assets.',
  },
  {
    slug: 'telecom-energy',
    name: 'HS Telecom & Energy',
    short: 'Telecom & Energy',
    tagline: 'Powering Connectivity & Sustainable Growth.',
    icon: 'Zap',
    geo: 'solar',
    span: 'wide',
    overview:
      'Telecom tower deployment and leasing alongside solar EPC and renewables — infrastructure with predictable recurring revenue.',
    strategy:
      'Recurring revenue from PPAs and tower leases, aligned with national energy and sustainability strategies for de-risked, long-term cash flows.',
    strengths: [
      'Telecom tower deployment & leasing',
      'Solar EPC & renewables',
      'Predictable recurring revenue (PPAs & leases)',
      'Aligned with national energy strategies',
    ],
    opportunities:
      'Digital and energy transition mandates create a long runway for connectivity and renewable infrastructure.',
  },
  {
    slug: 'agricultural-trading',
    name: 'HS Agricultural Trading',
    short: 'Agricultural Trading',
    tagline: 'Connecting Producers to Markets.',
    icon: 'Sprout',
    geo: 'grain',
    overview:
      'Bulk agricultural trading that links local producers to GCC and regional markets with efficient logistics.',
    strategy:
      'Long-term local-producer partnerships, bulk trading and risk management with market-driven pricing for resilient margins.',
    strengths: [
      'Long-term local-producer partnerships',
      'Bulk trading & efficient logistics',
      'Export to GCC & regional markets',
      'Risk management & market-driven pricing',
    ],
    opportunities:
      'Persistent regional import demand rewards traders with direct producer relationships and logistics control.',
  },
  {
    slug: 'general-trading-distribution',
    name: 'HS General Trading & Dealership/Distribution',
    short: 'General Trading & Distribution',
    tagline: 'Diverse Products, Reliable Supply.',
    icon: 'Truck',
    geo: 'ship',
    overview:
      'Distribution of industrial, consumer and technology products across multiple countries — B2B and B2C.',
    strategy:
      'Vendor partnerships and authorized dealerships supported by multi-country logistics for dependable, diversified supply.',
    strengths: [
      'Industrial, consumer & technology distribution',
      'Multi-country logistics',
      'Vendor partnerships & authorized dealerships',
      'B2B + B2C reach',
    ],
    opportunities:
      'Fragmented distribution markets favour a multi-country operator with vendor depth and authorized dealerships.',
  },
  {
    slug: 'fishing-aquaculture',
    name: 'HS Fishing & Aquaculture',
    short: 'Fishing & Aquaculture',
    tagline: 'From Sea to Market.',
    icon: 'Fish',
    geo: 'fish',
    overview:
      'Responsible, sustainable fishing with processing, cold-chain and export-ready supply to GCC and MENA.',
    strategy:
      'Sustainable sourcing paired with processing, cold-chain and community engagement that supports local employment and reliable export supply.',
    strengths: [
      'Responsible & sustainable fishing',
      'Processing, cold-chain & export-ready',
      'Community engagement & local employment',
      'Supply to GCC & MENA',
    ],
    opportunities:
      'Growing protein demand and provenance requirements reward sustainable, cold-chain-enabled operators.',
  },
  {
    slug: 'mining-cement',
    name: 'HS Mining & Cement',
    short: 'Mining & Cement',
    tagline: 'Building Foundations for Growth.',
    icon: 'Mountain',
    geo: 'cement',
    overview:
      'Vertically integrated mining and cement aligned with construction and infrastructure demand.',
    strategy:
      'Vertical integration from mining to cement with local and regional distribution, scalable across emerging markets.',
    strengths: [
      'Vertical integration (mining + cement)',
      'Local & regional distribution',
      'Aligned with construction & infrastructure',
      'Scalable in emerging markets',
    ],
    opportunities:
      'Infrastructure pipelines across the region underpin sustained demand for integrated cement supply.',
  },
];

export const getSector = (slug: string) =>
  sectors.find((s) => s.slug === slug);

// Representative imagery per sector (architectural / logistics / agriculture /
// energy / shipping mood). Used by the editorial sector index.
export const sectorImage: Record<string, { src: string; alt: string }> = {
  'trading-commodities': {
    src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=70',
    alt: 'Container logistics yard at a major port at dusk',
  },
  'food-agriculture': {
    src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=70',
    alt: 'Aerial view of cultivated agricultural fields',
  },
  'real-estate-infrastructure': {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=70',
    alt: 'Modern high-rise architecture against the sky',
  },
  'telecom-energy': {
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=70',
    alt: 'Rows of solar panels under a clear sky',
  },
  'agricultural-trading': {
    src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=70',
    alt: 'Cultivated farmland viewed from above',
  },
  'general-trading-distribution': {
    src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=70',
    alt: 'Distribution and logistics port operation',
  },
  'fishing-aquaculture': {
    src: 'https://images.unsplash.com/photo-1504672281656-e4981d70414b?auto=format&fit=crop&w=1400&q=70',
    alt: 'Fishing vessels moored at a coastal harbour',
  },
  'mining-cement': {
    src: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=1400&q=70',
    alt: 'Heavy industrial structure against a dusk sky',
  },
};
