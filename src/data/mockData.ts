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
// Authentic Company & Team Data (from jclroyalgh.com)
// ----------------------------------------------------

export const COMPANY_INFO = {
  name: 'JCL Royal Group Ltd',
  shortName: 'JCL Group',
  ceo: {
    name: 'Mr. Eric Kwaw',
    title: 'CEO & Founder',
    tagline: 'A hands-on builder of brands, deals, and customer trust, with a sharp eye for the details.',
    bio: 'Mr. Eric Kwaw, the visionary CEO and founder of JCL Group, has shaped a business built around dependable property solutions, litigation-free land development, and trusted Tonefo electrical gadget sales. His focus on quality, speed, and customer satisfaction guides the company across all divisions.',
    image: 'https://res.cloudinary.com/dqidnnssq/image/upload/v1771239782/ceo_ukjbgd.jpg',
  },
  logo: 'https://res.cloudinary.com/dlhyawc5e/image/upload/v1778869865/jcllogo_rj8hvw-removebg-preview_csqvsg.png',
  phones: [
    { label: 'Primary / WhatsApp', number: '+233 55 786 0299', clean: '233557860299' },
    { label: 'Office Line 1', number: '025 646 6565', clean: '0256466565' },
    { label: 'Office Line 2', number: '053 110 1123', clean: '0531101123' },
    { label: 'Office Line 3', number: '024 511 8310', clean: '0245118310' },
  ],
  email: 'jclroyals26@gmail.com',
  address: 'Accra, Greater Accra Region, Ghana',
  social: {
    linkedin: 'https://www.linkedin.com/in/jclroyalgh',
    tiktok: 'https://www.tiktok.com/@tonefo2',
    whatsapp: 'https://wa.me/233557860299?text=Hello%20JCL%20Royal%20Group',
  }
};

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'agent-ceo',
    name: 'Mr. Eric Kwaw',
    role: 'CEO & Founder',
    specialty: 'Executive Property & Strategic Land Acquisitions',
    rating: 5.0,
    propertiesSold: 520,
    image: 'https://res.cloudinary.com/dqidnnssq/image/upload/v1771239782/ceo_ukjbgd.jpg',
    phone: '+233 55 786 0299',
    email: 'jclroyals26@gmail.com',
    bio: 'Visionary leadership guiding nationwide real estate developments, litigation-free land allocation, and Tonefo gadget distribution.'
  },
  {
    id: 'agent-1',
    name: 'Amelia Stephenson',
    role: 'Principal Property Consultant',
    specialty: 'Luxury Residential & Gated Estates',
    rating: 5.0,
    propertiesSold: 453,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    phone: '025 646 6565',
    email: 'jclroyals26@gmail.com',
    bio: 'Over 12 years of specialized real estate advisory delivering exceptional results for home seekers and institutional investors.'
  },
  {
    id: 'agent-2',
    name: 'Kacie Velasquez',
    role: 'Senior Land & Commercial Advisor',
    specialty: 'Commercial Parcels & Cadastral Planning',
    rating: 5.0,
    propertiesSold: 325,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    phone: '053 110 1123',
    email: 'jclroyals26@gmail.com',
    bio: 'Expert in zoning compliance, acreage acquisition, and multi-acre land subdivision projects.'
  },
  {
    id: 'agent-3',
    name: 'Fletcher Morse',
    role: 'Civil Engineering & Construction Lead',
    specialty: 'Turnkey Construction & Project Management',
    rating: 5.0,
    propertiesSold: 289,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    phone: '024 511 8310',
    email: 'jclroyals26@gmail.com',
    bio: 'Leads structural planning and engineering oversight across high-density residential and commercial developments.'
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
    address: 'Airport Residential Area, Accra',
    city: 'Accra',
    neighborhood: 'Airport Residential',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1868,
    featured: true,
    statusTag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An architectural masterpiece featuring clean contemporary lines, floor-to-ceiling glass pavilions, integrated landscaped stone courtyards, and smart Tonefo energy infrastructure.',
    features: ['Double-height ceilings', 'Private courtyard garden', 'Smart Tonefo integration', 'Designer Italian kitchen', '3-car garage', 'Photovoltaic solar array'],
    agent: MOCK_AGENTS[0]
  },
  {
    id: 'prop-2',
    title: 'The Pinnacle at East Legon Hills',
    slug: 'pinnacle-east-legon-hills',
    category: 'house',
    type: 'sale',
    price: 3567980,
    currency: '$',
    priceFormatted: '$3,567,980',
    address: 'East Legon Hills, Accra',
    city: 'Accra',
    neighborhood: 'East Legon Hills Enclave',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3420,
    featured: true,
    statusTag: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Elevated luxury dwelling blending natural timber facades with monolithic stone masonry, expansive entertainment deck, and panoramic vistas.',
    features: ['Custom stone fireplace', 'Sub-Zero & Wolf chef suite', 'Heated infinity plunge pool', 'Wine cellar', 'Guest annex', 'Security automation'],
    agent: MOCK_AGENTS[1]
  },
  {
    id: 'prop-3',
    title: 'Cantonments Contemporary Villa',
    slug: 'cantonments-contemporary-villa',
    category: 'house',
    type: 'sale',
    price: 1950000,
    currency: '$',
    priceFormatted: '$1,950,000',
    address: 'Cantonments Diplomatic Zone, Accra',
    city: 'Accra',
    neighborhood: 'Cantonments',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1868,
    featured: true,
    statusTag: 'Hot Deal',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Immaculately restored mid-century inspired contemporary residence with expansive lawn, outdoor dining pergola, and designer lighting schemes.',
    features: ['Open-concept layout', 'Gourmet kitchen island', 'Primary retreat with soaking tub', 'Lush manicured lawn', 'EV charging station'],
    agent: MOCK_AGENTS[0]
  },
  {
    id: 'prop-4',
    title: 'Executive City Suite at Airport City',
    slug: 'executive-city-suite-airport-city',
    category: 'apartment',
    type: 'sale',
    price: 1120000,
    currency: '$',
    priceFormatted: '$1,120,000',
    address: 'Airport City Commercial Boulevard, Accra',
    city: 'Accra',
    neighborhood: 'Airport City',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1430,
    featured: false,
    statusTag: 'New Listing',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Sleek multi-level luxury suite offering expansive skyline views, private terrace with fire pit lounge, and concierge security services.',
    features: ['Private outdoor terrace', 'Floor-to-ceiling glazing', 'Building concierge', 'Fitness center access', 'Underground secure parking'],
    agent: MOCK_AGENTS[2]
  },
  {
    id: 'prop-5',
    title: 'Osu Urban Studio Loft',
    slug: 'osu-urban-studio-loft',
    category: 'apartment',
    type: 'sale',
    price: 479000,
    currency: '$',
    priceFormatted: '$479,000',
    address: 'Ringway Estate, Osu, Accra',
    city: 'Accra',
    neighborhood: 'Ringway',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 560,
    featured: false,
    statusTag: 'For Sale',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Bright, turnkey designer loft tailored for modern professionals or prime rental yield, featuring custom cabinetry and tranquil garden views.',
    features: ['Minimalist finishes', 'In-unit laundry', 'Custom wardrobe', 'Bicycle storage', 'Low HOA fees'],
    agent: MOCK_AGENTS[3]
  },
  {
    id: 'prop-6',
    title: 'The Prampram Horizon Seaside Villa',
    slug: 'prampram-horizon-seaside-villa',
    category: 'villa',
    type: 'sale',
    price: 1780000,
    currency: '$',
    priceFormatted: '$1,780,000',
    address: 'Coastal Beach Road, Prampram',
    city: 'Prampram',
    neighborhood: 'Coastal Beach Enclave',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1868,
    featured: false,
    statusTag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Spectacular coastal villa featuring an infinity edge pool overlooking the ocean, expansive sun terraces, and seamless indoor-outdoor living.',
    features: ['Infinity swimming pool', 'Sun deck terrace', 'Panoramic ocean views', 'Master suite with private balcony', 'Integrated audio system'],
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
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Premier large-scale parcel surveyed and demarcated for mixed-use residential gated community or institutional campus development. Zero litigation risk with fully certified Lands Commission registry search.',
    highlights: ['Direct highway frontage', 'Clear cadastral plan', 'Soil load-bearing tests certified', 'Approved subdivision schema available']
  },
  {
    id: 'land-2',
    title: 'Executive Residential Hilltop Plots (Plots 14–22)',
    slug: 'executive-residential-hilltop-plots',
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
    title: 'Tema Industrial & Logistics Park Parcel',
    slug: 'tema-industrial-logistics-parcel',
    zoning: 'Industrial',
    type: 'sale',
    price: 920000,
    priceFormatted: '$920,000',
    acreage: '5.8 Acres',
    dimensions: '240m x 98m',
    location: 'Tema Motorway Industrial Corridor',
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
    title: 'Real Estate Sales & Property Rentals',
    tagline: 'Precision property acquisition, sales, and verified rentals',
    iconName: 'Building2',
    description: 'Browse verified homes, luxury villas, rentals, and investment opportunities with a team that understands what matters in every neighborhood.',
    deliverables: [
      'Commercial & Residential Acquisition Advisory',
      'Exclusive Listing & Premium Marketing Campaigns',
      'Asset Valuation & Comparative Market Analysis (CMA)',
      'Tenancy & Facility Management Services'
    ],
    workflow: [
      { step: '01', title: 'Needs Assessment', desc: 'Detailed portfolio audit, yield requirements, and timeline alignment.' },
      { step: '02', title: 'Curated Sourcing', desc: 'Direct access to vetted prime properties in Accra and top growth regions.' },
      { step: '03', title: 'Title Diligence', desc: 'Comprehensive Lands Commission and statutory registry searches.' },
      { step: '04', title: 'Closing & Handover', desc: 'Seamless deed execution, indenture stamping, and property onboarding.' }
    ]
  },
  {
    id: 'service-2',
    title: 'Land Allocation & Cadastral Titling',
    tagline: '100% litigation-free land development and cadastral precision',
    iconName: 'Compass',
    description: 'JCL Royal Group specializes in end-to-end land acquisition, precision cadastral surveying, master-planned parcel subdivision, and legal title registration.',
    deliverables: [
      'Cadastral Boundary Surveying & Pillar Demarcation',
      'Master Subdivision Planning & Zoning Approvals',
      'Lands Commission Title Registration & Search Processing',
      'Large-Acreage Acquisition & Traditional Land Due Diligence'
    ],
    workflow: [
      { step: '01', title: 'Boundary Demarcation', desc: 'GNSS/RTK high-precision topographic mapping and pillar planting.' },
      { step: '02', title: 'Registry Search', desc: 'Rigorous 3-tier statutory registry verification across Lands Commission records.' },
      { step: '03', title: 'Master Plan Zoning', desc: 'Civil layouts designed for roads, utilities, and green corridors.' },
      { step: '04', title: 'Indenture & Titling', desc: 'Execution of stamped deeds and issuance of official land title certificates.' }
    ]
  },
  {
    id: 'service-3',
    title: 'Building & Civil Construction',
    tagline: 'Engineering excellence from earthworks to turnkey delivery',
    iconName: 'HardHat',
    description: 'From planning to completion, we manage construction projects with quality craftsmanship, clear timelines, compliance with local building standards, and attention to detail.',
    deliverables: [
      'Turnkey Residential & Commercial Construction',
      'Site Earthworks, Road Grading & Asphalt Paving',
      'Reinforced Concrete & Steel Structural Engineering',
      'MEP (Mechanical, Electrical, Plumbing) System Integration'
    ],
    workflow: [
      { step: '01', title: 'Engineering Design', desc: 'Structural calculations and architectural coordination blueprints.' },
      { step: '02', title: 'Permits & Approvals', desc: 'Municipal building permits and environmental clearance.' },
      { step: '03', title: 'Site Execution', desc: 'Milestone-based construction with rigorous QA/QC inspection logs.' },
      { step: '04', title: 'Commissioning', desc: 'System testing, inspection sign-off, and warranty documentation.' }
    ]
  },
  {
    id: 'service-4',
    title: 'Tonefo — Electrical Gadgets & Smart Sourcing',
    tagline: 'Supply, install, and technical support for modern homes and projects',
    iconName: 'Zap',
    description: 'We curate and supply trusted electronics, manage seamless procurement and installation, and provide warranty and technical support so your technology keeps working for you.',
    deliverables: [
      'Smart Home Automation & Lighting Controls',
      'Premium Home Appliances & Electrical Equipment',
      'Commercial Electrical Procurement & Bulk Sourcing',
      'Full Warranty, Technical Installation & After-Sales Support'
    ],
    workflow: [
      { step: '01', title: 'Tech Consultation', desc: 'Determining gadget and electrical needs for your property.' },
      { step: '02', title: 'Procurement', desc: 'Direct sourcing of certified appliances from trusted manufacturers.' },
      { step: '03', title: 'Professional Installation', desc: 'Setup and wiring by certified electrical technicians.' },
      { step: '04', title: 'Aftercare & Warranty', desc: 'Dedicated maintenance support and warranty protection.' }
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
    title: 'Tonefo Commercial Horizon Complex',
    category: 'Commercial Complex',
    status: 'Under Construction',
    location: 'Airport City II, Accra',
    completionYear: '2026',
    scope: '7-Story Commercial Office & Retail Hub',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'An iconic commercial development engineered for corporate headquarters, Tonefo electronics flagship showroom, and executive rooftop lounges.',
    highlights: ['Green Star Building standards', '3 levels of subterranean parking', 'High-speed smart elevators']
  },
  {
    id: 'proj-3',
    title: 'Palm Vista Oceanfront Land Subdivision',
    category: 'Master Development',
    status: 'Completed',
    location: 'Prampram Beach Road, Greater Accra',
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
    question: 'What core services does JCL Royal Group provide?',
    answer: 'JCL Royal Group provides integrated real estate solutions: property sales & rentals, litigation-free titled land parcels, civil construction & engineering, and electrical gadget supply & installation through our Tonefo division.',
    category: 'General',
    imagePreview: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'faq-2',
    question: 'How do you guarantee that land parcels are litigation-free?',
    answer: 'Under the leadership of Mr. Eric Kwaw and our licensed surveyors, we conduct 3-tier statutory registry searches at the Lands Commission, verify barcoded cadastral plans, and validate traditional authority roots before any parcel is allocated.',
    category: 'Land & Legal'
  },
  {
    id: 'faq-3',
    question: 'What is Tonefo and how does it integrate with real estate?',
    answer: 'Tonefo is JCL Group’s electrical gadgets and smart home division. We supply, install, and support quality home appliances, energy solutions, and electrical fixtures directly for your new home or renovation project.',
    category: 'Tonefo'
  },
  {
    id: 'faq-4',
    question: 'Can I book a physical site inspection or tour?',
    answer: 'Yes. You can contact us directly via WhatsApp (+233 55 786 0299) or fill out our online inspection form. We organize guided tours to residential properties and demarcated land sites in Accra, Prampram, and Aburi.',
    category: 'Process'
  },
  {
    id: 'faq-5',
    question: 'What payment options and split plans are available?',
    answer: 'We provide flexible, structured milestone payment terms for both land acquisitions and off-plan residential developments to make property ownership smooth and accessible.',
    category: 'Investment'
  }
];

// Authentic Client Testimonials directly from jclroyalgh.com
export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'We found a home that matched our budget and move-in timeline. The process was clear, fast, and handled professionally from the first call to the final paperwork.',
    author: 'Wilhelmina T. Lartey',
    title: 'Homeowner & Property Buyer',
    location: 'Accra, Ghana',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dlhyawc5e/image/upload/v1779223266/WILHELMINA_T._LARTEY_sjzlr4.png'
  },
  {
    id: 'test-2',
    quote: 'JCL Group helped us secure the right property and gave practical advice every step of the way. The service felt personal and genuinely reliable.',
    author: 'Lydia Narh',
    title: 'Real Estate Investor',
    location: 'Greater Accra',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dlhyawc5e/image/upload/v1779223261/LYDIA_NARH_xf8cll.jpg'
  },
  {
    id: 'test-3',
    quote: 'I ordered electrical gadgets for my home and the recommendations were spot on. Good value, great support, and delivery was handled without stress.',
    author: 'Abdul-Razak Mustapha',
    title: 'Tonefo Electronics Customer',
    location: 'Accra, Ghana',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dlhyawc5e/image/upload/v1779223265/ABDUL-RAZAK_MUSTAPHA_nzlqyn.png'
  }
];
