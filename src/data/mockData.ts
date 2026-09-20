export interface Property {
  id: string;
  title: string;
  slug: string;
  category: 'house' | 'apartment' | 'condo' | 'commercial' | 'villa' | 'land';
  type: 'sale' | 'rent';
  price: number;
  currency: string;
  priceFormatted: string;
  pricePeriod?: string;
  address: string;
  city: string;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  featured?: boolean;
  statusTag: 'For Sale' | 'For Rent' | 'Hot Deal' | 'New Listing' | 'Exclusive';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  agent: Agent;
}

export interface LandParcel {
  id: string;
  title: string;
  slug: string;
  zoning: 'Residential' | 'Commercial' | 'Mixed-Use' | 'Industrial' | 'Agricultural';
  type: 'sale' | 'lease';
  price: number;
  priceFormatted: string;
  acreage: string;
  dimensions: string;
  location: string;
  city: string;
  topography: 'Flat / Level' | 'Gentle Slope' | 'Elevated View' | 'Cleared';
  utilities: string[];
  titleStatus: 'Titled / Registered Deed' | 'Freehold Available' | 'Master Leasehold' | 'Gazetted Survey';
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  propertiesSold: number;
  image: string;
  phone: string;
  email: string;
  bio: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  deliverables: string[];
  workflow: { step: string; title: string; desc: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential Estate' | 'Commercial Complex' | 'Infrastructure' | 'Master Development';
  status: 'Completed' | 'Under Construction' | 'Planning & Design';
  location: string;
  completionYear: string;
  scope: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  imagePreview?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  location: string;
  rating: number;
  avatar: string;
}

// ----------------------------------------------------
// Mock Data Collections
// ----------------------------------------------------

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Amelia Stephenson',
    role: 'Principal Property Consultant',
    specialty: 'Luxury Residential & Estates',
    rating: 5.0,
    propertiesSold: 453,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    phone: '+233 (0) 30 200 4581',
    email: 'a.stephenson@jclroyalgroup.com',
    bio: 'Over 12 years of specialized real estate advisory delivering exceptional results for private clients and institutional investors.'
  },
  {
    id: 'agent-2',
    name: 'Kacie Velasquez',
    role: 'Senior Land & Commercial Advisor',
    specialty: 'Commercial Parcels & Master Planning',
    rating: 5.0,
    propertiesSold: 325,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    phone: '+233 (0) 30 200 4582',
    email: 'k.velasquez@jclroyalgroup.com',
    bio: 'Expert in zoning compliance, acreage acquisition, and multi-acre land subdivision projects.'
  },
  {
    id: 'agent-3',
    name: 'Fletcher Morse',
    role: 'Civil Engineering & Development Lead',
    specialty: 'Turnkey Construction & Project Management',
    rating: 5.0,
    propertiesSold: 289,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    phone: '+233 (0) 30 200 4583',
    email: 'f.morse@jclroyalgroup.com',
    bio: 'Leads structural planning and engineering oversight across high-density residential and commercial developments.'
  },
  {
    id: 'agent-4',
    name: 'Bibi Shelton',
    role: 'Head of Quantity Surveying & Valuation',
    specialty: 'Cost Advisory & Feasibility Studies',
    rating: 5.0,
    propertiesSold: 230,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    phone: '+233 (0) 30 200 4584',
    email: 'b.shelton@jclroyalgroup.com',
    bio: 'Certified quantity surveyor ensuring financial precision and risk mitigation throughout asset lifecycles.'
  }
];

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Modernist Pavilion Residence',
    slug: 'modernist-pavilion-residence',
    category: 'villa',
    type: 'sale',
    price: 1650000,
    currency: '$',
    priceFormatted: '$1,650,000',
    address: '201 Prague Dr, San Jose, CA 95119',
    city: 'San Jose',
    neighborhood: 'South Valley Hills',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1868,
    featured: true,
    statusTag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An architectural masterpiece featuring clean contemporary lines, floor-to-ceiling glass pavilions, integrated landscaped stone courtyards, and smart energy infrastructure.',
    features: ['Double-height ceilings', 'Private courtyard garden', 'Smart climate integration', 'Designer Italian kitchen', '3-car garage', 'Photovoltaic solar array'],
    agent: MOCK_AGENTS[0]
  },
  {
    id: 'prop-2',
    title: 'The Pinnacle at Highland Park',
    slug: 'pinnacle-highland-park',
    category: 'house',
    type: 'sale',
    price: 3567980,
    currency: '$',
    priceFormatted: '$3,567,980',
    address: '123 Maple Street, New York, NY 10001',
    city: 'New York',
    neighborhood: 'Highland Park Reserve',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3420,
    featured: true,
    statusTag: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Elevated luxury dwelling blending natural timber facades with monolithic stone masonry, expansive entertainment deck, and panoramic forest vistas.',
    features: ['Custom stone fireplace', 'Sub-Zero & Wolf chef suite', 'Heated infinity plunge pool', 'Wine cellar', 'Guest annex', 'Security automation'],
    agent: MOCK_AGENTS[1]
  },
  {
    id: 'prop-3',
    title: 'Stonegate Contemporary Villa',
    slug: 'stonegate-contemporary-villa',
    category: 'house',
    type: 'sale',
    price: 1950000,
    currency: '$',
    priceFormatted: '$1,950,000',
    address: '201 Prague Dr, San Jose, CA 95119',
    city: 'San Jose',
    neighborhood: 'Stonegate Enclave',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1868,
    featured: true,
    statusTag: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Immaculately restored mid-century inspired contemporary residence with expansive lawn, outdoor dining pergola, and designer lighting schemes.',
    features: ['Open-concept layout', 'Gourmet kitchen island', 'Primary retreat with soaking tub', 'Lush manicured lawn', 'EV charging station'],
    agent: MOCK_AGENTS[0]
  },
  {
    id: 'prop-4',
    title: 'Executive City Suite at Snow Ridge',
    slug: 'executive-city-suite-snow-ridge',
    category: 'apartment',
    type: 'sale',
    price: 1120000,
    currency: '$',
    priceFormatted: '$1,120,000',
    address: '4774 Snow Dr, San Jose, CA 95111',
    city: 'San Jose',
    neighborhood: 'Central Ridge',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1430,
    featured: false,
    statusTag: 'New Listing',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Sleek multi-level luxury suite offering expansive city views, private terrace with fire pit lounge, and concierge security services.',
    features: ['Private outdoor terrace', 'Floor-to-ceiling glazing', 'Building concierge', 'Fitness center access', 'Underground secure parking'],
    agent: MOCK_AGENTS[2]
  },
  {
    id: 'prop-5',
    title: 'Stonegate Garden Studio Loft',
    slug: 'stonegate-garden-studio-loft',
    category: 'apartment',
    type: 'sale',
    price: 479000,
    currency: '$',
    priceFormatted: '$479,000',
    address: '244 Stonegate Cir, San Jose, CA 95110',
    city: 'San Jose',
    neighborhood: 'Stonegate Central',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 560,
    featured: false,
    statusTag: 'For Sale',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Bright, turnkey designer loft tailored for modern professionals or prime rental yield, featuring custom cabinetry and tranquil garden views.',
    features: ['Minimalist Scandinavian finishes', 'In-unit laundry', 'Custom wardrobe', 'Bicycle storage', 'Low HOA fees'],
    agent: MOCK_AGENTS[3]
  },
  {
    id: 'prop-6',
    title: 'The Seaside Horizon Residence',
    slug: 'seaside-horizon-residence',
    category: 'villa',
    type: 'sale',
    price: 1780000,
    currency: '$',
    priceFormatted: '$1,780,000',
    address: '201 Prague Dr, San Jose, CA 95119',
    city: 'San Jose',
    neighborhood: 'Coastal Heights',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1868,
    featured: false,
    statusTag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Spectacular hillside coastal villa featuring an infinity edge pool overlooking rolling valleys, expansive sun terraces, and seamless indoor-outdoor living.',
    features: ['Infinity swimming pool', 'Sun deck terrace', 'Panoramic ocean & hill views', 'Master suite with private balcony', 'Integrated audio system'],
    agent: MOCK_AGENTS[0]
  },
  {
    id: 'prop-7',
    title: 'Metropolitan Commercial Office Hub',
    slug: 'metropolitan-commercial-office-hub',
    category: 'commercial',
    type: 'rent',
    price: 8500,
    currency: '$',
    priceFormatted: '$8,500/mo',
    pricePeriod: 'per month',
    address: '88 Financial Square, Airport Residential Area',
    city: 'Accra',
    neighborhood: 'Airport Commercial District',
    bedrooms: 0,
    bathrooms: 4,
    sqft: 4200,
    featured: false,
    statusTag: 'For Rent',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Grade-A corporate floor with modular executive boardrooms, dedicated high-speed fiber backbone, backup power generators, and secure card access.',
    features: ['Full backup power generator', 'Dedicated server room', 'Executive conference suite', 'High-speed elevator', '24/7 guarded security'],
    agent: MOCK_AGENTS[1]
  },
  {
    id: 'prop-8',
    title: 'The Glasshouse Oasis Residence',
    slug: 'glasshouse-oasis-residence',
    category: 'house',
    type: 'sale',
    price: 2450000,
    currency: '$',
    priceFormatted: '$2,450,000',
    address: '502 Royal Palm Way, East Legon',
    city: 'Accra',
    neighborhood: 'East Legon Hills',
    bedrooms: 5,
    bathrooms: 5,
    sqft: 3800,
    featured: true,
    statusTag: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Exquisite modern luxury property with private gated entry, perimeter security, swimming pool, staff quarters, and manicured tropical gardens.',
    features: ['Private gated compound', 'Swimming pool & cabana', 'Ensuite bedrooms with balconies', 'Staff quarters', 'Solar water heating'],
    agent: MOCK_AGENTS[0]
  }
];

export const MOCK_LAND: LandParcel[] = [
  {
    id: 'land-1',
    title: 'Prime 12-Acre Master-Planned Development Site',
    slug: 'prime-12-acre-development-site',
    zoning: 'Mixed-Use',
    type: 'sale',
    price: 1850000,
    priceFormatted: '$1,850,000',
    acreage: '12.4 Acres (50,180 m²)',
    dimensions: '320m x 156m perimeter',
    location: 'Prampram Coastal Corridor, Greater Accra',
    city: 'Prampram',
    topography: 'Flat / Level',
    utilities: ['Electricity Grid Access', 'Municipal Water Main', 'Asphalt Access Road', 'Fiber Optic Ready'],
    titleStatus: 'Titled / Registered Deed',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Premier large-scale parcel surveyed and demarcated for mixed-use residential gated community or institutional campus development. Zero litigation risk with fully certified registry search.',
    highlights: ['Direct highway frontage', 'Clear cadastral plan', 'Soil load-bearing tests certified', 'Approved subdivision schema available']
  },
  {
    id: 'land-2',
    title: 'Executive Residential Hilltop Parcels (Plots 14–22)',
    slug: 'executive-residential-hilltop-parcels',
    zoning: 'Residential',
    type: 'sale',
    price: 85000,
    priceFormatted: '$85,000 / plot',
    acreage: '70ft x 100ft per plot (0.16 Acre)',
    dimensions: '21.3m x 30.5m',
    location: 'Aburi Scenic Ridge, Eastern Region',
    city: 'Aburi',
    topography: 'Elevated View',
    utilities: ['Underground Power Lines', 'Borehole Water Supply', 'Gated Security Access'],
    titleStatus: 'Freehold Available',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Elevated residential plots offering breathtaking vistas of the valley below, cooler micro-climate, and premium paved road network.',
    highlights: ['Panoramic views', 'Fresh mountain climate', 'Perimeter fencing installed', 'Survey pillars established']
  },
  {
    id: 'land-3',
    title: 'Light Industrial & Logistics Park Parcel',
    slug: 'light-industrial-logistics-parcel',
    zoning: 'Industrial',
    type: 'sale',
    price: 920000,
    priceFormatted: '$920,000',
    acreage: '5.8 Acres',
    dimensions: '240m x 98m',
    location: 'Tema Motorway Industrial Strip',
    city: 'Tema',
    topography: 'Cleared',
    utilities: ['3-Phase Industrial Power', 'Heavy Commercial Drainage', 'High-capacity Water Line'],
    titleStatus: 'Master Leasehold',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Strategically located along key transport arteries, perfectly suited for warehousing, logistics depot, or assembly manufacturing facility.',
    highlights: ['Heavy vehicle turn radius access', 'Near Port of Tema', 'Immediate building permit readiness']
  }
];

export const MOCK_SERVICES: ServicePillar[] = [
  {
    id: 'service-1',
    title: 'Real Estate Brokerage & Property Advisory',
    tagline: 'Precision property acquisition, sales, and portfolio management',
    iconName: 'Building2',
    description: 'We connect institutional and private clients with premium residential, commercial, and investment assets, backed by rigorous valuation and market analytics.',
    deliverables: [
      'Commercial & Residential Acquisition Advisory',
      'Exclusive Listing & Premium Marketing Campaigns',
      'Asset Valuation & Comparative Market Analysis (CMA)',
      'Tenancy & Facility Management Services'
    ],
    workflow: [
      { step: '01', title: 'Needs Assessment', desc: 'Detailed portfolio audit, yield requirements, and timeline alignment.' },
      { step: '02', title: 'Curated Sourcing', desc: 'Direct access to off-market and vetted prime properties.' },
      { step: '03', title: 'Legal & Title Diligence', desc: 'Comprehensive land commission and registry searches.' },
      { step: '04', title: 'Closing & Handover', desc: 'Seamless title transfer, deed execution, and facility onboarding.' }
    ]
  },
  {
    id: 'service-2',
    title: 'Land Allocation, Subdivision & Titling',
    tagline: 'Litigation-free land development and cadastral accuracy',
    iconName: 'Compass',
    description: 'JCL Royal Group specializes in end-to-end land acquisition, precision cadastral surveying, master-planned parcel subdivision, and legal title registration.',
    deliverables: [
      'Cadastral Boundary Surveying & Pillar Demarcation',
      'Master Subdivision Planning & Zoning Approvals',
      'Lands Commission Title Registration & Search Processing',
      'Large-Acreage Acquisition & Family Land Due Diligence'
    ],
    workflow: [
      { step: '01', title: 'Boundary Demarcation', desc: 'GNSS/RTK high-precision topographic mapping.' },
      { step: '02', title: 'Title & Search Verification', desc: 'Rigorous 3-tier statutory registry verification.' },
      { step: '03', title: 'Master Plan Zoning', desc: 'Civil zoning layouts for roads, utilities, and green spaces.' },
      { step: '04', title: 'Indenture & Titling', desc: 'Execution of stamped deeds and issuance of land certificates.' }
    ]
  },
  {
    id: 'service-3',
    title: 'Civil Engineering & Construction Management',
    tagline: 'Engineering excellence from foundation to turnkey delivery',
    iconName: 'HardHat',
    description: 'From earthworks and road network infrastructure to multi-story structural execution, our civil engineering team delivers on time, on budget, and to international codes.',
    deliverables: [
      'Turnkey Residential & Commercial Construction',
      'Site Earthworks, Road Grading & Asphalt Paving',
      'Reinforced Concrete & Steel Structural Engineering',
      'MEP (Mechanical, Electrical, Plumbing) System Integration'
    ],
    workflow: [
      { step: '01', title: 'Engineering Design', desc: 'Structural calculations and architectural coordinate models.' },
      { step: '02', title: 'Permits & Approvals', desc: 'Statutory municipal building permits and EPA clearance.' },
      { step: '03', title: 'Site Execution', desc: 'Rigorous milestone-based construction with QA/QC logs.' },
      { step: '04', title: 'Commissioning', desc: 'Testing, inspection sign-off, and warranty documentation.' }
    ]
  },
  {
    id: 'service-4',
    title: 'Quantity Surveying & Cost Advisory',
    tagline: 'Financial predictability and disciplined cost management',
    iconName: 'Calculator',
    description: 'Eliminate budget overruns with our certified quantity surveyors, providing precise Bills of Quantities (BOQs), cost planning, and contract administration.',
    deliverables: [
      'Detailed Bills of Quantities (BOQ) Preparation',
      'Pre-Construction Cost Planning & Feasibility Models',
      'Contractor Tender Documentation & Bid Evaluation',
      'Interim Valuation & Final Account Settlement'
    ],
    workflow: [
      { step: '01', title: 'Feasibility Modeling', desc: 'Initial financial viability and cost benchmarks.' },
      { step: '02', title: 'BOQ Measurement', desc: 'Precise material take-offs from architectural drawings.' },
      { step: '03', title: 'Tender Management', desc: 'Competitive contractor procurement and negotiations.' },
      { step: '04', title: 'Cost Control', desc: 'Monthly site valuation audits and variation control.' }
    ]
  }
];

export const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Royal Haven Gated Enclave',
    category: 'Residential Estate',
    status: 'Completed',
    location: 'East Legon Hills, Accra',
    completionYear: '2025',
    scope: '24 Luxury Detached & Semi-Detached Residences',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A master-planned private residential sanctuary featuring asphalt roads, underground drainage, central solar lighting, and recreational clubhouse.',
    highlights: ['100% Sold Out', 'Underground utility network', '24/7 biometric security access']
  },
  {
    id: 'proj-2',
    title: 'Tonefo Horizon Commercial Tower',
    category: 'Commercial Complex',
    status: 'Under Construction',
    location: 'Airport City II, Accra',
    completionYear: '2026',
    scope: '7-Story Commercial Office & Retail Hub',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'An iconic glass and steel commercial development engineered for multinational corporate headquarters, banking halls, and executive rooftop lounges.',
    highlights: ['Targeting Green Star Building Certification', '3 levels of subterranean parking', 'High-speed smart elevators']
  },
  {
    id: 'proj-3',
    title: 'Palm Vista Oceanfront Subdivision',
    category: 'Master Development',
    status: 'Completed',
    location: 'Prampram Beach Road',
    completionYear: '2024',
    scope: '85 Fully Demarcated & Titled Residential Plots',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    description: 'Coastal master-planned parcel allocation project with completed cadastral survey pillars, graded road network, and dedicated water substation.',
    highlights: ['Clean registered title deeds', 'Direct ocean breeze corridor', '100% litigation-free certification']
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of properties do you sell and manage?',
    answer: 'We specialize in luxury detached residences, contemporary urban apartments, gated community villas, commercial office spaces, and surveyed land acreage. Each property undergoes strict structural and title due diligence before listing.',
    category: 'General',
    imagePreview: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'faq-2',
    question: 'How do I know if a property is a good investment?',
    answer: 'Our in-house valuation team conducts Comparative Market Analysis (CMA), rental yield projections, infrastructure growth trajectory reviews, and capital appreciation modeling to ensure strong, risk-adjusted returns.',
    category: 'Investment'
  },
  {
    id: 'faq-3',
    question: 'How does JCL ensure land parcels are litigation-free?',
    answer: 'Our certified surveyors and legal advisory conduct 3-tier Lands Commission statutory searches, barcoded cadastral plan verifications, traditional authority title validations, and topographic boundary surveys prior to client acquisition.',
    category: 'Land & Legal'
  },
  {
    id: 'faq-4',
    question: 'What is the standard process for purchasing a property or land?',
    answer: 'The process begins with an initial consultation and site inspection, followed by formal title search verification, issuance of the offer letter, signing of the sales agreement/indenture, payment milestones, and final registration at the Lands Commission.',
    category: 'Process'
  },
  {
    id: 'faq-5',
    question: 'Can I request custom architectural design and construction through JCL?',
    answer: 'Yes. Our integrated civil engineering and quantity surveying divisions provide end-to-end design-build services, including architectural blueprints, municipal permits, BOQ preparation, and full turnkey construction management.',
    category: 'Engineering'
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Working with the JCL team was an absolute pleasure. Their surveyor-led precision and transparent legal documentation gave us complete peace of mind when acquiring our 15-acre commercial parcel.',
    author: 'Kwame Mensah-Bonsu',
    title: 'Managing Director, Apex Logistics',
    location: 'Accra, Ghana',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-2',
    quote: 'The level of craftsmanship in their residential developments is second to none. From the initial inquiry to final key handover, everything was executed with utmost professionalism.',
    author: 'Dr. Sarah Jenkins',
    title: 'Private Investor & Homeowner',
    location: 'San Jose / Accra',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  }
];
