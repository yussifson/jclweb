export interface PropertyTypePortfolio {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Villas' | 'Penthouses' | 'Townhouses' | 'Mixed-Use';
  type: 'Turnkey Construction & Development' | 'Off-Plan & Custom Build' | 'Executive Residential';
  tagline: string;
  image: string;
  gallery: string[];
  description: string;
  specifications: string[];
  deliverables: string[];
  suitableFor: string;
}

export interface LandCategoryPortfolio {
  id: string;
  title: string;
  zoning: 'Residential' | 'Commercial' | 'Mixed-Use' | 'Industrial' | 'Gated Community' | 'Beachfront & Leisure' | 'Agricultural' | 'Institutional';
  tagline: string;
  titleStatus: string;
  image: string;
  gallery: string[];
  description: string;
  keyFeatures: string[];
  infrastructureReady: string[];
  allocationSizes: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  projectsSupervised: number;
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
  badge?: string;
  image: string;
  description: string;
  deliverables: string[];
  workflow: { step: string; title: string; desc: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential Estate' | 'Commercial Complex' | 'Infrastructure' | 'Master Development';
  status: 'Completed' | 'Under Construction' | 'Planning & Design';
  scope: string;
  completionPeriod: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
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
// Authentic Company & Leadership Data (from jclroyalgh.com)
// ----------------------------------------------------

export const COMPANY_INFO = {
  name: 'JCL Royal Group Ltd',
  shortName: 'JCL Group',
  ceo: {
    name: 'Mr. Eric Kwaw',
    title: 'CEO & Founder',
    tagline: 'A hands-on builder of brands, deals, and customer trust, with a sharp eye for the details.',
    bio: 'Mr. Eric Kwaw, the visionary CEO and founder of JCL Group, has built an enterprise founded on dependable property solutions, litigation-free land development, civil construction excellence, and trusted Tonefo electrical gadget supply. His leadership guarantees transparency, prompt delivery, and lifelong client satisfaction.',
    image: 'https://res.cloudinary.com/dqidnnssq/image/upload/v1771239782/ceo_ukjbgd.jpg',
  },
  logo: '/images/jcl-royal-group.jpg',
  motto: 'Get us your land and we will pre-finance your building',
  phones: [
    { label: 'Primary / WhatsApp', number: '055 266 6222', clean: '0552666222' },
    { label: 'Office Line 1', number: '055 262 2226', clean: '0552622226' },
    { label: 'Office Line 2', number: '055 266 6266', clean: '0552666266' },
  ],
  email: 'info@jclroyalgh.com',
  address: 'New Bortiano, West Hills Mall - GCB, Adjacent GRA, Greater Accra, Ghana',
  locationDetails: {
    town: 'New Bortiano',
    landmark: 'West Hills Mall - GCB, Adjacent GRA',
    building: 'GCB Bank Building (Ground Floor), StarLife (1st Floor), JCL Royal Group (Top Floor)',
    directions: 'Located at New Bortiano near West Hills Mall, in the GCB Bank building directly adjacent to the Ghana Revenue Authority (GRA) office.',
  },
  officeImages: [
    {
      src: '/images/office/office-building-1.jpg',
      alt: 'JCL Royal Group Corporate Headquarters - Street View at New Bortiano',
      title: 'Headquarters Building - New Bortiano',
      caption: 'Main roadside view showing JCL sign, GCB Bank on ground floor, adjacent GRA & near West Hills Mall'
    },
    {
      src: '/images/office/office-building-2.jpg',
      alt: 'JCL Real Estate Facade with Contact Billboards',
      title: 'Office Facade & Service Directory',
      caption: 'Official facade with billboard displaying 0552 666 222, 0552 622 226, 0552 666 266'
    },
    {
      src: '/images/office/office-building-4.jpg',
      alt: 'JCL Corporate Entrance - Ground Floor GCB & StarLife',
      title: 'Entrance & Customer Reception Floor',
      caption: 'Direct entrance floor with parking and customer reception at New Bortiano'
    },
    {
      src: '/images/office/office-building-3.jpg',
      alt: 'JCL Office Enclave & Surrounding Neighbourhood',
      title: 'Elevated View of Office Premises',
      caption: 'Spacious visitor parking and commercial neighbourhood at New Bortiano'
    }
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/jclroyalgh',
    tiktok: 'https://www.tiktok.com/@jclrealestate',
    whatsapp: 'https://wa.me/233552666222?text=Hello%20JCL%20Royal%20Group%20Team',
  }
};

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'agent-ceo',
    name: 'Mr. Eric Kwaw',
    role: 'CEO & Founder',
    specialty: 'Executive Property & Strategic Land Acquisitions',
    rating: 5.0,
    projectsSupervised: 520,
    image: 'https://res.cloudinary.com/dqidnnssq/image/upload/v1771239782/ceo_ukjbgd.jpg',
    phone: '055 266 6222',
    email: 'info@jclroyalgh.com',
    bio: 'Visionary leadership spearheading nationwide real estate master-developments, litigation-free land allocation, and pre-financed turnkey building.'
  },
  {
    id: 'agent-account-manager',
    name: 'Account Manager',
    role: 'Account Manager & Client Relations',
    specialty: 'Client Portfolios, Corporate Accounts & Indenture Verification',
    rating: 5.0,
    projectsSupervised: 380,
    image: '/images/team/account-manager.jpg',
    phone: '055 262 2226',
    email: 'info@jclroyalgh.com',
    bio: 'Oversees client portfolio management, escrow facilitation, indenture documentation, and dedicated advisory for diaspora and resident investors.'
  },
  {
    id: 'agent-1',
    name: 'Amelia Stephenson',
    role: 'Principal Property Consultant',
    specialty: 'Luxury Residential & Gated Estates',
    rating: 5.0,
    projectsSupervised: 453,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    phone: '055 266 6266',
    email: 'info@jclroyalgh.com',
    bio: 'Over 12 years of specialized real estate advisory delivering exceptional architectural results for homeowners and institutional investors.'
  },
  {
    id: 'agent-2',
    name: 'Kacie Velasquez',
    role: 'Senior Land & Cadastral Advisor',
    specialty: 'Commercial Parcels & Cadastral Planning',
    rating: 5.0,
    projectsSupervised: 325,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    phone: '055 262 2226',
    email: 'info@jclroyalgh.com',
    bio: 'Expert in Lands Commission title verification, zoning compliance, and multi-acre land subdivision projects.'
  },
  {
    id: 'agent-3',
    name: 'Fletcher Morse',
    role: 'Civil Engineering & Construction Lead',
    specialty: 'Turnkey Construction & Project Management',
    rating: 5.0,
    projectsSupervised: 289,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    phone: '055 266 6266',
    email: 'info@jclroyalgh.com',
    bio: 'Leads structural planning and engineering oversight across high-density residential and commercial developments.'
  }
];

// ----------------------------------------------------
// Property Portfolio Types (No prices, No individual house listings)
// ----------------------------------------------------

export const PROPERTY_TYPES_PORTFOLIO: PropertyTypePortfolio[] = [
  {
    id: 'prop-penthouse',
    title: 'Luxury Penthouses & Sky Residences',
    category: 'Penthouses',
    type: 'Executive Residential',
    tagline: 'Panoramic urban views, private rooftop terraces, and custom bespoke interiors.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Bespoke high-altitude residences designed for discerning homeowners who value privacy, floor-to-ceiling panoramic glass, and high-end acoustic insulation. Built with integrated Tonefo smart home automation.',
    specifications: [
      'Double-height open living concepts',
      'Private elevator foyer access',
      'Sub-Zero & Italian designer kitchens',
      'Infinity plunge pool & entertainment terrace',
      'Tonefo smart climate & lighting control'
    ],
    deliverables: [
      'Custom architectural layout consultation',
      'Turnkey interior fit-out execution',
      'Full legal freehold & deed documentation'
    ],
    suitableFor: 'High-net-worth individuals, executives, and luxury lifestyle seekers.'
  },
  {
    id: 'prop-villas',
    title: 'Contemporary Luxury Family Villas',
    category: 'Villas',
    type: 'Turnkey Construction & Development',
    tagline: 'Grand standalone residences featuring expansive landscaped grounds and private pools.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Masterfully engineered villas combining modern tropical architecture with durable reinforced masonry. Each villa is tailored to multi-generational family living with private garden courtyards and dedicated staff quarters.',
    specifications: [
      '4 to 6 ensuite master suites',
      'Spacious indoor & outdoor entertaining pavilions',
      'Solar energy backup with battery storage',
      'Multi-vehicle secured garage & compound',
      'Dedicated domestic staff quarters'
    ],
    deliverables: [
      'Complete structural and MEP engineering blueprints',
      'Turnkey civil construction with 10-year warranty',
      'Full perimeter security & CCTV setup'
    ],
    suitableFor: 'Families, diaspora investors, and permanent luxury residential living.'
  },
  {
    id: 'prop-townhouses',
    title: 'Executive Gated Townhouses',
    category: 'Townhouses',
    type: 'Turnkey Construction & Development',
    tagline: 'Secure, modern multi-level townhomes within private master-planned communities.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Optimized modern living built within prestigious gated enclaves. Offers 24/7 security, paved roads, shared clubhouse amenities, and low-maintenance landscaped outdoor spaces.',
    specifications: [
      '3 to 4 bedroom duplex & triplex layouts',
      'Custom stone countertops & imported tiles',
      'Private rooftop lounge with pergola',
      'Covered dual car parking bays',
      'Underground drainage and paved walkways'
    ],
    deliverables: [
      'Ready-to-move-in turnkey handover',
      'Community management framework',
      'Registered leasehold title certificates'
    ],
    suitableFor: 'Young professionals, growing families, and high-yield rental investors.'
  },
  {
    id: 'prop-commercial',
    title: 'Commercial Complexes & Mixed-Use Plazas',
    category: 'Commercial',
    type: 'Off-Plan & Custom Build',
    tagline: 'High-visibility corporate headquarters, retail plazas, and serviced office spaces.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Purpose-built commercial properties engineered for institutional durability, high pedestrian traffic, and flexible corporate office partitioning. Full fiber-optic and commercial backup power ready.',
    specifications: [
      'Flexible open-plan floor plates',
      'Heavy-duty commercial elevators & escalators',
      'High-capacity standby industrial generators',
      'Underground & surface commercial parking',
      'Automated fire suppression & safety systems'
    ],
    deliverables: [
      'Zoning and EPA regulatory clearances',
      'Commercial lease structuring support',
      'Turnkey MEP & HVAC engineering'
    ],
    suitableFor: 'Corporate headquarters, retail banking, medical clinics, and enterprise offices.'
  },
  {
    id: 'prop-apartments',
    title: 'Modern Urban Apartments & Condominiums',
    category: 'Residential',
    type: 'Turnkey Construction & Development',
    tagline: 'Sophisticated city center apartments with premium resident leisure amenities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Refined 1, 2, and 3-bedroom apartment complexes designed with efficient space planning, acoustic dampening, fitness centers, and rooftop pools for vibrant modern living.',
    specifications: [
      '1, 2 & 3 bedroom contemporary layouts',
      'Floor-to-ceiling insulated double-glazed windows',
      'Resident gymnasium & swimming pool',
      'Concierge desk and controlled biometric access',
      'Tonefo smart security integration'
    ],
    deliverables: [
      'Off-plan milestone construction updates',
      'Full sectional title registration',
      'Dedicated property management support'
    ],
    suitableFor: 'First-time buyers, diaspora returnees, and short-let Airbnb investors.'
  },
  {
    id: 'prop-eco-residences',
    title: 'Smart Tonefo Eco-Residences',
    category: 'Villas',
    type: 'Off-Plan & Custom Build',
    tagline: 'Sustainable architectural residences featuring full solar microgrids and smart gadgets.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Next-generation green homes engineered to operate with ultra-low utility overheads. Powered by high-efficiency solar arrays, rainwater harvesting, and smart Tonefo electronics for automated climate and energy management.',
    specifications: [
      'Hybrid rooftop solar with lithium storage',
      'Rainwater filtration & greywater recycling',
      'Passive ventilation architectural orientation',
      'Tonefo smart energy metering & sensors',
      'Thermal insulation roofing and wall envelopes'
    ],
    deliverables: [
      'Zero-grid dependency engineering certification',
      'Tonefo 3-year warranty on all smart systems',
      'Complete cadastral title handover'
    ],
    suitableFor: 'Eco-conscious homeowners, off-grid enthusiasts, and long-term cost optimizers.'
  }
];

// ----------------------------------------------------
// Titled Land Categories (No prices, Focus on verified title & zoning)
// ----------------------------------------------------

export const LAND_CATEGORIES_PORTFOLIO: LandCategoryPortfolio[] = [
  {
    id: 'land-residential',
    title: 'Titled Residential Estate Plots',
    zoning: 'Residential',
    tagline: '100% litigation-free surveyed land parcels ready for immediate residential construction.',
    titleStatus: 'Litigation-Free Registered Deed',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Authentically acquired and fully registered land parcels in prime residential growth corridors (Prampram, Appolonia, East Legon Hills & Tsopoli). Each parcel has certified cadastral GPS beacons, graded access roads, and immediate proximity to the national electrical grid.',
    keyFeatures: [
      'Verified Lands Commission cadastral search certificate',
      'Demarcated with permanent concrete boundary beacons',
      'Zero chieftaincy or family ownership disputes',
      'Immediate site clearance and excavation clearance'
    ],
    infrastructureReady: [
      'Access road grading completed',
      'Electricity poles and distribution lines',
      'Pipe-borne water connectivity'
    ],
    allocationSizes: 'Available in Half-Plots (35x100ft), Full Standard Plots (70x100ft), and Multi-Plot Compounds (1 to 5 Acres).'
  },
  {
    id: 'land-commercial',
    title: 'Commercial & Mixed-Use Land Parcels',
    zoning: 'Commercial',
    tagline: 'Strategic highway and arterial frontage land zoned for commercial enterprise and retail.',
    titleStatus: 'Lands Commission Verified',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'High-visibility commercial parcels along major growth corridors. Ideal for retail shopping centers, bank branches, corporate headquarters, medical clinics, fueling stations, and hospitality complexes.',
    keyFeatures: [
      'Commercial zoning certificate granted',
      'High vehicle & pedestrian traffic visibility',
      'Wide arterial road frontage with curb cuts',
      'Unencumbered master commercial title'
    ],
    infrastructureReady: [
      'Heavy-duty commercial access roads',
      'High-voltage three-phase power line access',
      'Stormwater management corridors'
    ],
    allocationSizes: 'Available in 1-Acre to 20-Acre contiguous commercial parcels.'
  },
  {
    id: 'land-gated',
    title: 'Master-Planned Gated Community Parcels',
    zoning: 'Gated Community',
    tagline: 'Secured enclave plots with unified architectural guidelines, paved roads, and security.',
    titleStatus: 'Litigation-Free Registered Deed',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Exclusive parcels situated inside fully planned residential enclaves with perimeter boundary walls, 24/7 security checkpoints, underground drainage, and dedicated community recreational parks.',
    keyFeatures: [
      'Enclosed perimeter walling with security post',
      'Planned green parks and communal sports facilities',
      'Standardized civil development covenants',
      'Prompt title deed transfer upon allocation'
    ],
    infrastructureReady: [
      'Interlocking paver access roads',
      'Underground electrical cabling conduits',
      'Dedicated central water reservoir'
    ],
    allocationSizes: 'Standard 70x100ft and 100x100ft prime residential plots.'
  },
  {
    id: 'land-beachfront',
    title: 'Beachfront & Coastal Leisure Land',
    zoning: 'Beachfront & Leisure',
    tagline: 'Pristine oceanfront parcels for luxury vacation villas, boutique beach resorts, and hospitality.',
    titleStatus: 'Certified Coastal Registry Deed',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Prime ocean-facing parcels along the vibrant coastline of Prampram and Greater Accra. Unobstructed sea views, clean sandy shores, and exceptional potential for diaspora holiday retreats, private beach villas, and resort investments.',
    keyFeatures: [
      'Direct unobstructed ocean frontage',
      'Environmental Protection Agency (EPA) compliance clearance',
      'High-yield hospitality and rental return potential',
      'Secure stool indenture with cadastral beacon mapping'
    ],
    infrastructureReady: [
      'Coastal arterial road access',
      'Grid electricity nearby and solar-ready orientation',
      'Perimeter boundary markers'
    ],
    allocationSizes: 'Available from 1 Plot (70x100ft) up to 10-Acre Coastal Waterfront Parcels.'
  },
  {
    id: 'land-industrial',
    title: 'Industrial & Logistics Heavy Acreage',
    zoning: 'Industrial',
    tagline: 'Expansive flat land zoned for light manufacturing, warehousing, and transport hubs.',
    titleStatus: 'Cadastral Survey Certified',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Level, heavy-bearing land parcels tailored for logistics distribution hubs, factory warehouses, processing plants, and equipment yards with direct arterial road links to Tema port and national highways.',
    keyFeatures: [
      'Heavy industrial zoning endorsement',
      'High soil load-bearing capacity surveyed',
      'Wide turning radius for articulated trucks',
      'Long-term leasehold covenants with renewal rights'
    ],
    infrastructureReady: [
      'Industrial grade road foundation',
      'Proximity to major national highways',
      'Dedicated industrial power substation proximity'
    ],
    allocationSizes: 'Available in 5 to 50+ Acres bulk blocks.'
  },
  {
    id: 'land-agricultural',
    title: 'Farmland & Commercial Agribusiness Acreage',
    zoning: 'Agricultural',
    tagline: 'Fertile, expansive contiguous titled tracts for commercial crop cultivation, livestock, and greenhouse farming.',
    titleStatus: 'Ministry of Food & Agriculture Verified',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Rich, fertile agricultural acreage situated in high-yield farming zones with natural water sources and perennial streams. Perfect for commercial greenhouse ventures, poultry, livestock, cash crops, and agro-processing facilities.',
    keyFeatures: [
      'Soil nutrient and drainage survey certified',
      'Perennial water table & irrigation access',
      'Large contiguous boundary documentation',
      'Tax incentives for registered agribusiness operations'
    ],
    infrastructureReady: [
      'Farm-to-market graded feeder roads',
      'Natural stream & borehole water access',
      'Rural electrification connectivity nearby'
    ],
    allocationSizes: 'Available in 5-Acre to 200+ Acre expansive blocks.'
  },
  {
    id: 'land-institutional',
    title: 'Institutional & Civic Development Parcels',
    zoning: 'Institutional',
    tagline: 'Designated zoning for private universities, secondary schools, medical hospitals, and civic foundations.',
    titleStatus: 'Institutional Zoning Certified',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Expansive land parcels planned specifically for institutional use including international schools, university campuses, medical health facilities, sports complexes, and corporate training centers.',
    keyFeatures: [
      'Approved civic and educational zoning permit',
      'Large buffer zones and expansive parking accommodation',
      'Clear title with statutory Lands Commission endorsement',
      'Multilateral institutional compliance ready'
    ],
    infrastructureReady: [
      'Dual-carriage arterial road links',
      'High-capacity power and municipal water connection points',
      'Comprehensive drainage integration'
    ],
    allocationSizes: 'Available in 3-Acre to 30-Acre institutional campuses.'
  }
];

// ----------------------------------------------------
// Service Pillars
// ----------------------------------------------------

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'service-land',
    title: 'Litigation-Free Land Sales & Acquisition',
    tagline: 'Guaranteed legal certainty, registered title deeds, and cadastral survey accuracy.',
    iconName: 'ShieldCheck',
    badge: 'Legal Due Diligence',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    description: 'We eliminate land disputes completely. Every acre in our portfolio undergoes thorough Lands Commission validation, traditional stool authority sign-off, and judicial search before allocation.',
    deliverables: [
      'Lands Commission official search report & certification',
      'Barcoded site plan signed by licensed surveyor',
      'Indentures and registered title transfer documents',
      'Free guided on-site inspection and beacon identification'
    ],
    workflow: [
      { step: '01', title: 'Consultation & Site Tour', desc: 'Select your preferred location and inspect the land with our certified surveyor.' },
      { step: '02', title: 'Cadastral & Title Due Diligence', desc: 'Review Lands Commission records, barcoded plans, and verification filings.' },
      { step: '03', title: 'Documentation & Deed Transfer', desc: 'Sign indentures and receive your authentic registered deed and beacon coordinates.' }
    ]
  },
  {
    id: 'service-construction',
    title: 'Turnkey Building & Civil Construction',
    tagline: 'From architectural concept to full structural completion with uncompromised quality.',
    iconName: 'Building2',
    badge: '10-Yr Warranty',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'We provide end-to-end building construction for private villas, residential estates, and commercial structures with strict adherence to structural engineering standards.',
    deliverables: [
      'Architectural 3D renderings and structural engineering blueprints',
      'Bill of Quantities (BOQ) with transparent milestone costs',
      'Dedicated on-site project management and quality testing',
      'Final turnkey handover with 10-year structural guarantee'
    ],
    workflow: [
      { step: '01', title: 'Architectural Design & BOQ', desc: 'Custom structural design tailored to your lifestyle and land topography.' },
      { step: '02', title: 'Milestone-Based Construction', desc: 'Foundations, blockwork, lintels, and roofing with photo updates.' },
      { step: '03', title: 'Finishing & Key Handover', desc: 'Premium tiling, electricals, plumbing, and turnkey walk-through.' }
    ]
  },
  {
    id: 'service-interior-deco',
    title: 'Interior Decoration & Bespoke Fit-outs',
    tagline: 'High-end interior architecture, bespoke millwork, curated furnishings, and luxury spatial transformations.',
    iconName: 'Sparkles',
    badge: 'Luxury Styling',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'We transform residential villas, penthouses, executive offices, and hospitality spaces with bespoke interior styling. From custom lighting architecture, luxury acoustic wall paneling, Italian imported marble tiling to turnkey furnishings and art curation.',
    deliverables: [
      'Photorealistic 3D interior renders & bespoke mood boards',
      'Custom cabinetry, tailored millwork & acoustic paneling',
      'Imported Italian & Turkish luxury furniture curation',
      'Tonefo integrated ambient architectural lighting & motorized drapery',
      'Turnkey white-glove staging and reveal'
    ],
    workflow: [
      { step: '01', title: 'Spatial Concept & 3D Renderings', desc: 'Interior architecture consultation, material palette selection, and photorealistic 3D modeling.' },
      { step: '02', title: 'Bespoke Fabrication & Sourcing', desc: 'Precision millwork, marble fitting, and imported designer furniture procurement.' },
      { step: '03', title: 'White-Glove Staging & Handover', desc: 'On-site installation, ambient lighting calibration, and turnkey styling reveal.' }
    ]
  },
  {
    id: 'service-tonefo',
    title: 'Tonefo Gadgets & Smart Electricals',
    tagline: 'Direct sourcing of genuine electronics, smart home tech, and renewable energy gadgets.',
    iconName: 'Zap',
    badge: 'Tonefo Division',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'Our specialized retail and distribution arm delivers authentic electronics, solar power systems, and smart home appliances with direct manufacturer warranty.',
    deliverables: [
      'Authentic branded electronics and mobile devices',
      'Complete solar power and backup battery installation',
      'Smart home automation (CCTV, climate, remote lighting)',
      'Direct manufacturer warranty and local repair support'
    ],
    workflow: [
      { step: '01', title: 'Requirement Assessment', desc: 'Select gadget models or custom solar/smart-home system specs.' },
      { step: '02', title: 'Rapid Delivery & Setup', desc: 'Fast nationwide dispatch and professional on-site installation.' },
      { step: '03', title: 'Warranty & Support', desc: 'Ongoing technical assistance and warranty service directly by Tonefo.' }
    ]
  },
  {
    id: 'service-surveying',
    title: 'Cadastral Surveying & Land Regularization',
    tagline: 'Professional GPS boundary demarcation and Lands Commission title registration.',
    iconName: 'Target',
    badge: 'GPS Beacons',
    image: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80',
    description: 'Licensed surveyors and legal advisors assist private owners and corporate entities in mapping, resolving boundary questions, and securing official land title certificates.',
    deliverables: [
      'High-precision GPS cadastral survey with boundary beacons',
      'Approved barcoded survey plans from Survey & Mapping Division',
      'Lands Commission title application filing and follow-through',
      'Land dispute mediation and boundary rectification'
    ],
    workflow: [
      { step: '01', title: 'Site Coordinate Capture', desc: 'Precision survey using differential GPS equipment.' },
      { step: '02', title: 'Plan Drawing & Barcoding', desc: 'Production and certification of official barcoded site plan.' },
      { step: '03', title: 'Registry Filing', desc: 'Submission to Lands Commission for title deed generation.' }
    ]
  }
];

// ----------------------------------------------------
// Project Milestones
// ----------------------------------------------------

export const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Royal Palms Master Residential Enclave',
    category: 'Residential Estate',
    status: 'Under Construction',
    scope: '45-Unit Modern Villa & Townhouse Community',
    completionPeriod: 'Phase 1 Q4 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'An executive gated community featuring contemporary architectural villas, paved internal streets, integrated underground drainage, and a central recreation clubhouse.',
    highlights: ['Paved dual-lane roads', '24/7 solar street lighting', 'Smart Tonefo security hub', 'Clubhouse & pool']
  },
  {
    id: 'proj-2',
    title: 'JCL Commercial Logistics Hub',
    category: 'Commercial Complex',
    status: 'Completed',
    scope: 'Multi-Tenant Commercial & Warehousing Facility',
    completionPeriod: 'Delivered 2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'A 60,000 sqft light industrial and logistics facility engineered for corporate warehousing, cold storage, and regional distribution with direct highway frontage.',
    highlights: ['Three-phase industrial power', 'Heavy vehicle turning yard', 'Automated fire suppression', 'CCTV monitoring']
  },
  {
    id: 'proj-3',
    title: 'Tonefo Smart Tech & Energy Centre',
    category: 'Commercial Complex',
    status: 'Completed',
    scope: 'Retail Showroom, Tech Lab & Solar Hub',
    completionPeriod: 'Delivered 2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'The flagship commercial showroom and customer experience center for Tonefo electricals, featuring solar microgrid demonstrations and device repair stations.',
    highlights: ['100% solar powered facility', 'Interactive gadget showroom', 'Certified technical repair wing', 'Diaspora pickup desk']
  }
];

// ----------------------------------------------------
// FAQs
// ----------------------------------------------------

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does JCL ensure that all land is 100% litigation-free?',
    answer: 'Before acquiring or listing any land parcel, our legal team conducts rigorous due diligence at the Lands Commission (Records, Survey and Mapping, and Land Title Registry divisions). We verify stool/family legitimacy, obtain certified cadastral plans, and guarantee in writing that the land has zero court injunctions or overlapping claims.',
    category: 'Land Acquisition'
  },
  {
    id: 'faq-2',
    question: 'Can diaspora clients purchase land or construct a home remotely?',
    answer: 'Yes! More than 45% of our clients reside in the UK, USA, Canada, and Europe. We provide virtual site tours, barcoded coordinates for independent verification, milestone-by-milestone HD video construction updates, and formal contract execution via secure electronic and notarized protocols.',
    category: 'Diaspora Services'
  },
  {
    id: 'faq-3',
    question: 'What is the process for scheduling a site inspection?',
    answer: 'Site inspections are conducted from Monday through Saturday. You can book an inspection directly via WhatsApp (055 266 6222) or our online inquiry form. We provide transport from our office in New Bortiano (West Hills Mall - GCB, Adjacent GRA) to the site with a certified surveyor on hand to confirm beacon boundaries.',
    category: 'Site Inspection'
  },
  {
    id: 'faq-4',
    question: 'What does Turnkey Construction cover with JCL Royal Group?',
    answer: 'Our turnkey service covers the full spectrum: architectural concept, structural engineering drawings, municipal building permits, excavation, structural masonry, roofing, plumbing, electrical installations (including Tonefo smart automation), and luxury interior finishes—delivering keys to a move-in ready home.',
    category: 'Construction'
  },
  {
    id: 'faq-5',
    question: 'What warranties are provided on Tonefo gadgets and electrical installations?',
    answer: 'All authentic Tonefo electrical products and solar installations come with a minimum 1 to 3-year manufacturer warranty, backed by local technical support and replacement guarantees across Ghana.',
    category: 'Tonefo Gadgets'
  }
];

// ----------------------------------------------------
// Authentic Client Testimonials
// ----------------------------------------------------

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'We found a home that matched our budget and move-in timeline. The process was clear, fast, and handled professionally from the first call to the final paperwork.',
    author: 'Wilhelmina T. Lartey',
    title: 'Verified Property Buyer',
    location: 'Accra, Ghana',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dlhyawc5e/image/upload/v1779223266/WILHELMINA_T._LARTEY_sjzlr4.png'
  },
  {
    id: 'test-2',
    quote: 'JCL Group helped us secure the right property and gave practical advice every step of the way. The service felt personal and genuinely reliable.',
    author: 'Lydia Narh',
    title: 'Verified Homeowner',
    location: 'Prampram, Ghana',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dlhyawc5e/image/upload/v1779223261/LYDIA_NARH_xf8cll.jpg'
  },
  {
    id: 'test-3',
    quote: 'I ordered electrical gadgets for my home and the recommendations were spot on. Good value, great support, and delivery was handled without stress.',
    author: 'Abdul-Razak Mustapha',
    title: 'Tonefo Tech & Electricals Customer',
    location: 'Greater Accra, Ghana',
    rating: 5,
    avatar: 'https://res.cloudinary.com/dlhyawc5e/image/upload/v1779223265/ABDUL-RAZAK_MUSTAPHA_nzlqyn.png'
  }
];
