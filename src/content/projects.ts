// Sample project data — clearly marked as illustrative placeholder figures.

export type ProjectStatus = 'Completed' | 'Ongoing';

export type Project = {
  id: string;
  title: string;
  sectorSlug: string;
  sector: string;
  status: ProjectStatus;
  location: string;
  country: string;
  summary: string;
  description: string;
  investmentSize: string;
  roi: string;
  timeline: string;
  partners: string[];
  strategicImportance: string;
  image: string; // unsplash mood image
  imageAlt: string;
};

// NOTE: All figures below are illustrative SAMPLE DATA for demonstration only.
export const SAMPLE_NOTICE =
  'Figures shown are illustrative sample data for demonstration purposes.';

export const projects: Project[] = [
  {
    id: 'jebel-ali-commodities-hub',
    title: 'Jebel Ali Commodities Distribution Hub',
    sectorSlug: 'trading-commodities',
    sector: 'Trading & Commodities',
    status: 'Ongoing',
    location: 'Jebel Ali, Dubai',
    country: 'UAE',
    summary:
      'A consolidated sourcing and re-export hub linking Chinese and Turkish supply to regional construction markets.',
    description:
      'A bonded distribution facility consolidating bulk construction materials and industrial equipment for efficient re-export across MENA. The hub centralises procurement, warehousing and last-mile logistics to compress lead times and improve pricing for underserved markets.',
    investmentSize: 'USD 42M',
    roi: '17.5%',
    timeline: '2024 – 2026',
    partners: ['Regional logistics operator', 'Industrial suppliers (CN/TR)'],
    strategicImportance:
      'Anchors the Group’s sourcing-to-market value chain and demonstrates the integrated logistics model.',
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Container logistics yard at a major port at dusk',
  },
  {
    id: 'nile-delta-processing',
    title: 'Nile Delta Agri-Processing Facility',
    sectorSlug: 'food-agriculture',
    sector: 'Food & Agriculture',
    status: 'Ongoing',
    location: 'New Cairo, Egypt',
    country: 'Egypt',
    summary:
      'Scalable processing capacity converting origin produce into GCC-compliant export goods.',
    description:
      'An integrated processing and cold-storage facility designed for export-grade output under GCC food-safety standards. The plant secures provenance and consistent supply by partnering directly with producer communities upstream.',
    investmentSize: 'USD 28M',
    roi: '15.2%',
    timeline: '2023 – 2025',
    partners: ['Producer cooperatives', 'Cold-chain logistics provider'],
    strategicImportance:
      'Positions Egypt as the Group’s processing and logistics anchor between origin and market.',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Aerial view of cultivated agricultural fields',
  },
  {
    id: 'aden-coastal-fisheries',
    title: 'Aden Coastal Fisheries & Cold-Chain',
    sectorSlug: 'fishing-aquaculture',
    sector: 'Fishing & Aquaculture',
    status: 'Ongoing',
    location: 'Khormaksar, Aden',
    country: 'Yemen',
    summary:
      'Responsible fishing with export-ready processing and cold-chain to GCC markets.',
    description:
      'A coastal processing and cold-chain operation built on sustainable sourcing and community employment. The project channels origin-based marine resources into export-ready supply for GCC and MENA buyers.',
    investmentSize: 'USD 16M',
    roi: '18.9%',
    timeline: '2024 – 2027',
    partners: ['Local fishing cooperatives', 'Regional distributors'],
    strategicImportance:
      'Activates origin-based resources in a high-growth frontier market with measurable community impact.',
    image:
      'https://images.unsplash.com/photo-1504672281656-e4981d70414b?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Fishing vessels moored at a coastal harbour',
  },
  {
    id: 'anatolia-solar-epc',
    title: 'Anatolia Solar EPC Portfolio',
    sectorSlug: 'telecom-energy',
    sector: 'Telecom & Energy',
    status: 'Completed',
    location: 'Central Anatolia',
    country: 'Turkey',
    summary:
      'Utility-scale solar EPC delivering predictable PPA-backed revenue.',
    description:
      'A portfolio of utility-scale solar installations delivered under EPC contracts, generating recurring revenue through long-term power purchase agreements aligned with national energy strategy.',
    investmentSize: 'USD 54M',
    roi: '13.8%',
    timeline: '2021 – 2024',
    partners: ['National grid operator', 'Renewable technology providers'],
    strategicImportance:
      'Validates the recurring-revenue energy model and the Turkey industrial-sourcing bridge.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Rows of solar panels under a clear sky',
  },
  {
    id: 'abu-dhabi-mixed-use',
    title: 'Al Danah Mixed-Use Development',
    sectorSlug: 'real-estate-infrastructure',
    sector: 'Real Estate & Infrastructure',
    status: 'Ongoing',
    location: 'Al Danah, Abu Dhabi',
    country: 'UAE',
    summary:
      'A mixed-use development blending leasing income with integrated energy and telecom.',
    description:
      'A mixed-use asset combining commercial and residential space with integrated energy and telecom infrastructure, producing diversified income from development profit, leasing and management fees.',
    investmentSize: 'USD 86M',
    roi: '12.6%',
    timeline: '2023 – 2027',
    partners: ['Local developer', 'Facilities management operator'],
    strategicImportance:
      'Showcases the hybrid real-estate model and the UAE governance-and-capital anchor.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Modern high-rise architecture against the sky',
  },
  {
    id: 'regional-tower-network',
    title: 'Regional Telecom Tower Network',
    sectorSlug: 'telecom-energy',
    sector: 'Telecom & Energy',
    status: 'Completed',
    location: 'Multi-country',
    country: 'Egypt',
    summary:
      'Shared telecom towers leased to operators for stable recurring revenue.',
    description:
      'A network of telecom towers deployed and leased to multiple operators, expanding connectivity and digital inclusion while producing predictable lease-based revenue.',
    investmentSize: 'USD 31M',
    roi: '14.4%',
    timeline: '2020 – 2023',
    partners: ['Mobile network operators', 'Infrastructure contractors'],
    strategicImportance:
      'Demonstrates infrastructure-as-a-service economics and digital-inclusion impact.',
    image:
      'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=1600&q=70',
    imageAlt: 'Telecommunications tower against a dusk sky',
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
