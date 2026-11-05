export interface ProductItem {
  id: string;
  name: string;
  category: 'FRP' | 'SMC' | 'BMC' | 'Fiberglass' | 'Composite Moulded' | 'Custom';
  shortDesc: string;
  fullDesc: string;
  applications: string[];
  keyFeatures: string[];
  specs: { label: string; value: string }[];
  imageUrl: string;
  badge?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  keyComponents: string[];
  compositeAdvantages: string[];
  icon: string;
}

export interface ManufacturingStep {
  step: string;
  title: string;
  description: string;
  keyHighlights: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Compression Moulding' | 'Composite Components' | 'Tooling & Moulds' | 'Quality & Testing' | 'Facility & Machinery';
  description: string;
  imageUrl: string;
  tags: string[];
}

export const COMPANY_INFO = {
  name: "Polychemical Fibroplast Private Limited",
  shortName: "Polychemical Fibroplast",
  tagline: "Advanced Composite & Precision Moulding Solutions",
  establishmentNote: "Precision Composite Engineering & Manufacturing",
  address: "J-212, MIDC, Bhosari, Pune, Maharashtra 411026, India",
  email: "polychemicalfrp@gmail.com",
  altEmail: "polychemfrp@gmail.com",
  phone: "+91 88888 73236",
  landline: "+91 80478 10832",
  locationDistrict: "Pune Industrial Corridor, Maharashtra",
  overview: "Polychemical Fibroplast Private Limited is a specialized engineering enterprise located in Bhosari MIDC, Pune, focusing on precision FRP, SMC, BMC, and composite molded component manufacturing. We combine advanced compression moulding techniques with tailored material formulations to serve critical automotive, electrical, infrastructure, and heavy engineering applications.",
  mission: "To deliver high-reliability, lightweight, and corrosion-resistant composite engineering solutions that empower modern industrial, automotive, and infrastructure sectors through precision moulding and material excellence.",
  vision: "To be recognized as a premier Tier-1 composite solutions manufacturing partner in India, distinguished by engineering integrity, consistent mould accuracy, and customer-centric product innovation.",
  qualityCommitment: "Our operating philosophy prioritizes rigorous raw material evaluation, precise moulding temperature and pressure regulation, dimensional repeatability, and comprehensive mechanical testing. Every component undergoes multi-point inspection to ensure structural endurance under severe electrical, thermal, and mechanical stresses."
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "frp-industrial-products",
    name: "FRP (Fiber Reinforced Polymer) Products",
    category: "FRP",
    badge: "High Strength",
    shortDesc: "Engineered fiber-reinforced polymers offering exceptional strength-to-weight ratio, structural rigidity, and superior anti-corrosion performance.",
    fullDesc: "Our custom-engineered Fiber Reinforced Polymer (FRP) components are formulated using premium resin systems (isophthalic, vinyl ester, or general purpose) combined with continuous strand roving and woven mats. Engineered specifically for corrosive chemical atmospheres, outdoor weathering, and demanding industrial structural uses where metals suffer from corrosion or excessive weight.",
    applications: [
      "Chemical storage tank covers & structural grating",
      "Corrosion-resistant canopies & equipment guards",
      "Cooling tower casing components & ducting",
      "Industrial cable management trays & ladders",
      "Architectural facade and protective panels"
    ],
    keyFeatures: [
      "Superior anti-corrosive endurance in aggressive chemical environments",
      "High dielectric strength & non-conductive safety profile",
      "High strength-to-weight ratio lowering dead load",
      "UV-stabilized gel-coat finishes for extended exterior life",
      "Near-zero maintenance compared to structural steel"
    ],
    specs: [
      { label: "Matrix Systems", value: "Isophthalic / Vinyl Ester / Orthophthalic Resins" },
      { label: "Reinforcement", value: "E-Glass Chopped Strand / Woven Roving" },
      { label: "Operating Temp Range", value: "-40°C to +120°C (depending on formulation)" },
      { label: "Tensile Strength", value: "High specific tensile strength (120 - 250 MPa)" },
      { label: "Manufacturing Technique", value: "Hand Lay-up, Contact Moulding & Vacuum Infusion" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "smc-compression-products",
    name: "SMC (Sheet Moulding Compound) Products",
    category: "SMC",
    badge: "Precision Moulded",
    shortDesc: "High-volume compression moulded components characterized by smooth Class-A surface finish, high dimensional stability, and flame retardancy.",
    fullDesc: "Sheet Moulding Compound (SMC) is a ready-to-mould glass-fiber reinforced polyester material, ideal for high-tonnage hydraulic compression moulding. Our SMC parts provide high structural integrity, exceptional electrical insulation, and superior cosmetic surfaces. Suitable for complex geometric shapes with molded-in ribs, bosses, and metal inserts.",
    applications: [
      "Electrical distribution boxes, meter enclosures & pillar boxes",
      "Automotive structural bumpers, fenders & battery trays",
      "Railway passenger seat shells, partition panels & interior frames",
      "Telecom junction cabinets & terminal boxes",
      "Industrial lighting fixtures & reflector housings"
    ],
    keyFeatures: [
      "Outstanding dimensional repeatability for mass production runs",
      "Class-A smooth surface finish suitable for direct automotive painting",
      "Inherent flame-retardant (FR) formulation meeting high safety standards",
      "Exceptional tracking resistance and electrical insulation",
      "High heat deflection temperature under continuous mechanical loads"
    ],
    specs: [
      { label: "Compound Base", value: "Glass-filled thermoset unsaturated polyester resin" },
      { label: "Fiber Content", value: "25% - 30% by weight (customizable)" },
      { label: "Moulding Method", value: "Hydraulic Hot Compression Press" },
      { label: "Mould Temperature", value: "140°C - 160°C controlled cycle" },
      { label: "Surface Finish", value: "Glossy, semi-gloss, or textured Class-A" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "bmc-moulded-components",
    name: "BMC (Bulk Moulding Compound) Products",
    category: "BMC",
    badge: "Close Tolerance",
    shortDesc: "Thermoset compounds engineered for complex, tight-tolerance parts with superior thermal stability and electrical dielectric properties.",
    fullDesc: "Bulk Moulding Compound (BMC) incorporates short glass fibers uniformly dispersed in a vinyl ester or polyester resin putty. Perfect for intricate, thick-wall and thin-wall parts where tight geometric tolerances and fine surface details are mandatory. BMC components withstand high electrical arcing and elevated temperature environments without mechanical degradation.",
    applications: [
      "Circuit breaker housings, switchgear covers & insulators",
      "Automotive headlamp reflectors & under-the-hood engine parts",
      "Industrial electrical motor brush holders & terminal plates",
      "Appliance structural heating element mounts & handles",
      "Explosion-proof hazardous environment switch housings"
    ],
    keyFeatures: [
      "Tight dimensional tolerance management with virtually zero shrinkage",
      "High arc resistance and dielectric breakdown barrier",
      "High continuous thermal resistance up to 180°C+",
      "Vibration and acoustic dampening characteristics",
      "Ability to mould intricate cross-sections with metallic inserts"
    ],
    specs: [
      { label: "Material Composition", value: "Thermoset Resin + 15-20% Chopped Glass + Mineral Fillers" },
      { label: "Specific Gravity", value: "1.75 - 1.95 g/cm³" },
      { label: "Dielectric Strength", value: "12 - 16 kV/mm" },
      { label: "Thermal Rating", value: "UL-94 V0 rating capable formulations" },
      { label: "Moulding Cycle", value: "High-pressure compression and transfer moulding" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "fiberglass-components",
    name: "Industrial Fiberglass Components",
    category: "Fiberglass",
    badge: "Heavy Duty",
    shortDesc: "Custom-built fiberglass reinforced parts engineered for demanding chemical, water treatment, and infrastructure projects.",
    fullDesc: "Our heavy-duty industrial fiberglass components are manufactured using multi-axial fabrics and premium gelcoats. Designed to replace steel and aluminum parts prone to rapid oxidation, electrolytic corrosion, and heavy transport penalties. Ideal for corrosive fluid handling, structural covers, and exterior aerodynamic fairings.",
    applications: [
      "Water treatment weir plates, baffles & scum skimmers",
      "Fume extraction hoods, scrubbers & industrial ducting",
      "Architectural dome structures and rooftop skylight covers",
      "Heavy commercial vehicle wind deflectors and cabin roofs",
      "Marine dock bumpers and watercraft interior decking"
    ],
    keyFeatures: [
      "Immune to galvanic corrosion and acidic chemical fumes",
      "Seamless fabrication eliminating leakage and weld-joint failure",
      "High impact resistance with elastic recovery",
      "Thermal insulation properties preventing condensation",
      "Tailored resin selection for specific chemical immersion environments"
    ],
    specs: [
      { label: "Fabric Types", value: "Chopped strand mat (CSM), Woven roving (WR), Biaxial" },
      { label: "Gelcoat Finish", value: "ISO-NPG chemical and UV-resistant grade" },
      { label: "Resin Chemistry", value: "Vinyl Ester / Isophthalic / Epoxy" },
      { label: "Thickness Range", value: "3 mm up to 25 mm solid laminate" },
      { label: "Corrosion Resistance", value: "pH range 2 to 12 compatibility" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "composite-moulded-components",
    name: "Composite Moulded Components",
    category: "Composite Moulded",
    badge: "Structural",
    shortDesc: "Advanced composite structures utilizing matched metal die tooling for consistent density, wall thickness, and strength.",
    fullDesc: "Utilizing precision CNC-machined matched metal tooling and regulated hydraulic press cycles, our composite moulded components achieve strict uniformity across multi-thousand unit manufacturing programs. We engineer the internal fiber matrix to optimize load paths, eliminating internal air voids and ensuring consistent structural performance.",
    applications: [
      "Industrial pump housings and impellers",
      "Aerospace cabin brackets & interior duct connectors",
      "Robotic arm protective shells and end-effector housings",
      "High-voltage electrical busbar support insulators",
      "Railway HVAC protective covers and air management louvers"
    ],
    keyFeatures: [
      "Consistent wall thickness and uniform resin-to-fiber distribution",
      "Matched metal die precision ensuring exact hole and mount locations",
      "High fatigue resistance under cyclic dynamic mechanical loads",
      "Thermal expansion coefficient closely matched to surrounding metal structures",
      "Integrated bosses and threaded brass/steel inserts without secondary drilling"
    ],
    specs: [
      { label: "Tooling Type", value: "P20 / H13 Hardened Steel Matched Dies" },
      { label: "Clamping Force Range", value: "Industrial Hydraulic Compression Tonnage" },
      { label: "Tolerance Capability", value: "±0.15 mm to ±0.25 mm" },
      { label: "Core Reinforcements", value: "E-Glass, Structural mineral reinforcement" },
      { label: "Surface Texture", value: "Matte, Semi-Gloss or Custom Texture Moulding" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "custom-moulded-products",
    name: "Custom Engineered Moulded Products",
    category: "Custom",
    badge: "Bespoke Solutions",
    shortDesc: "End-to-end custom product development from CAD concept, prototype tooling, compound formulation to series production.",
    fullDesc: "Polychemical Fibroplast collaborates closely with OEM engineering teams to convert conventional metal, plastic, or cast-iron parts into high-performance composite solutions. Our engineering team assists with CAD design optimization, draft angle selection, compression flow analysis, prototype tooling, and tailored resin formulations for unique customer requirements.",
    applications: [
      "Custom OEM equipment enclosures & structural frames",
      "Specialty chemical processing reaction vessels and liners",
      "Custom defense & naval protective components",
      "Bespoke electric vehicle (EV) battery pack enclosures",
      "Industrial drone airframes and protective payload shells"
    ],
    keyFeatures: [
      "Collaborative DFM (Design for Manufacturing) review",
      "Rapid prototype sample development and structural validation",
      "Custom color compounding and fire-retardant tailoring",
      "In-house mould design and precision fabrication support",
      "Turnkey assembly including seals, fasteners, and hardware installation"
    ],
    specs: [
      { label: "Development Cycle", value: "CAD -> Mould Design -> Pilot Run -> Full Production" },
      { label: "Material Tailoring", value: "Custom resin/filler ratios for thermal/dielectric needs" },
      { label: "Insert Moulding", value: "Brass, Stainless Steel, Carbon Steel studs & bushings" },
      { label: "Quality Validation", value: "Dimensional CMM / Gauge inspection, load testing" },
      { label: "Confidentiality", value: "Strict OEM Non-Disclosure Agreement (NDA) compliance" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80"
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "automotive",
    title: "Automotive & Commercial Vehicles",
    shortDesc: "Lightweighting solutions, exterior Class-A body panels, structural bumpers, and heat-resistant engine compartment parts.",
    fullDesc: "As automotive and commercial vehicle manufacturers accelerate lightweighting to improve fuel economy and battery range, composite materials deliver the ideal balance of high rigidity, impact absorption, and weight reduction. Our SMC and BMC components replace cast aluminum and stamped steel with zero corrosion and lower tooling investments.",
    imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80",
    keyComponents: [
      "Commercial vehicle front bumpers & fascias",
      "Battery pack top covers & lower protection trays",
      "Under-the-hood engine covers & valve covers",
      "Cabin air deflector panels & sunshades",
      "Interior dashboard support brackets & flooring panels"
    ],
    compositeAdvantages: [
      "Up to 40% weight reduction compared to equivalent steel stampings",
      "High impact resistance with superior elastic rebound",
      "Part consolidation: integrates brackets, ribs, and mounts into one single mould",
      "Superior thermal barrier shielding EV battery packs from exterior heat"
    ],
    icon: "Car"
  },
  {
    id: "electrical",
    title: "Electrical & Power Transmission",
    shortDesc: "Arc-quenching, flame-retardant SMC/BMC enclosures, busbar supports, switchgear barriers, and outdoor metering boxes.",
    fullDesc: "The electrical transmission and distribution sector demands materials that combine high dielectric breakdown strength with non-conductive safety, arc resistance, and weathering resistance. Our SMC and BMC formulations provide high tracking resistance (CTI > 600V) and self-extinguishing flame retardancy for substations and municipal grids.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    keyComponents: [
      "Single-phase & three-phase electrical meter boxes",
      "Substation switchgear partition barriers & flashover shields",
      "High-voltage busbar support insulators",
      "Distribution feeder pillars & junction cabinets",
      "Explosion-proof terminal junction boxes"
    ],
    compositeAdvantages: [
      "Complete electrical shock protection for public and operator safety",
      "High comparative tracking index (CTI) preventing electrical arcing",
      "Corrosion-proof performance in coastal and industrial high-humidity zones",
      "Vandal-resistant high impact strength with theft-deterrent composite material"
    ],
    icon: "Zap"
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    shortDesc: "Heavy-duty trench covers, architectural facades, structural gratings, and drainage channels impervious to concrete corrosion.",
    fullDesc: "Modern urban infrastructure requires materials that endure heavy traffic, severe monsoon moisture, and chemical exposure without continuous rust maintenance. Our composite moulded gratings, manhole covers, and architectural panels offer an enduring alternative to cast iron and reinforced concrete.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18f15f9?auto=format&fit=crop&w=900&q=80",
    keyComponents: [
      "Composite trench & drainage channel covers",
      "Industrial anti-slip walkways and catwalk platforms",
      "Corrosion-free handrail systems and ladder cages",
      "Rooftop structural skylight & ventilation louvers",
      "Cable containment troughs along highways and bridges"
    ],
    compositeAdvantages: [
      "Zero scrap metal theft value compared to cast iron covers",
      "High load-bearing capacity certified for pedestrian and heavy vehicular traffic",
      "Zero corrosion from de-icing salts, acidic soil, and wastewater runoffs",
      "Lightweight modules enabling rapid, crane-free manual installation"
    ],
    icon: "Building2"
  },
  {
    id: "aerospace",
    title: "Aerospace & Defense Applications",
    shortDesc: "Engineered high-performance composite components offering weight reduction, flame resistance, and vibration dampening.",
    fullDesc: "In aerospace and defense engineering, every gram saved directly translates to payload capacity and efficiency. Our composite components utilize advanced reinforcements and flame-resistant resin formulations engineered to maintain structural stiffness across broad altitude and temperature shifts.",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80",
    keyComponents: [
      "Cabin interior duct connectors & airflow guides",
      "Lightweight avionic equipment mounting brackets",
      "Radome housings and electromagnetic transparent covers",
      "Vibration-dampening electronics enclosures",
      "Protective aerospace transport containers and cradles"
    ],
    compositeAdvantages: [
      "Exceptional strength-to-weight ratio maximizing fuel efficiency",
      "FST (Flame, Smoke & Toxicity) compliant resin compounds",
      "Electromagnetic transparency for antenna and radar housings",
      "Fatigue resistance under sustained acoustic and aerodynamic vibration"
    ],
    icon: "Plane"
  },
  {
    id: "industrial-equipment",
    title: "Industrial Equipment & Machinery",
    shortDesc: "Machine enclosures, chemical pump casings, protective guards, and structural panels with vibration dampening.",
    fullDesc: "Industrial manufacturing plants expose machinery to acidic washes, cutting fluids, abrasive dust, and constant mechanical vibration. Our custom FRP and composite machine covers protect sensitive internal electronics and mechanical drivetrains while improving operator ergonomics.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    keyComponents: [
      "CNC machine tool protective covers & splash guards",
      "Acid-resistant chemical pump & valve bodies",
      "Centrifugal blower housings and cooling impellers",
      "Acoustic noise enclosures for compressors and generators",
      "Industrial control console fascias and operator interfaces"
    ],
    compositeAdvantages: [
      "Dampens machine vibration and lowers ambient operational decibels",
      "Resistant to cutting oils, cooling lubricants, and cleaning solvents",
      "Moulded aesthetic curves without expensive sheet-metal stamping dies",
      "Long service life in demanding shop floor environments"
    ],
    icon: "Cog"
  },
  {
    id: "infrastructure",
    title: "Railways & Urban Transit",
    shortDesc: "Fire-safe passenger coach interior components, exterior nose cones, HVAC ducting, and trackside electrical boxes.",
    fullDesc: "India's rapid expansion of metro rail and high-speed rail networks calls for modern rolling stock components compliant with stringent fire safety regulations (such as EN 45545-2). Our SMC and FRP rail components provide lightweight durability and passenger comfort.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    keyComponents: [
      "Metro & railway passenger modular seating shells",
      "Coach interior window frames & side wall panels",
      "Driver cab console assemblies & exterior aerodynamic fairings",
      "Trackside signaling cabinets & cable troughs",
      "Air-conditioning duct manifolds and ceiling louvers"
    ],
    compositeAdvantages: [
      "Meets stringent passenger rail fire, smoke, and toxicity requirements",
      "Vandal-resistant smooth gelcoat surface easy to clean and sanitize",
      "Substantial weight reduction lowering train axle load and energy draw",
      "Long lifecycle with minimal maintenance across 20+ year service cycles"
    ],
    icon: "Train"
  }
];

export const MANUFACTURING_PROCESSES: ManufacturingStep[] = [
  {
    step: "01",
    title: "Product Engineering & Tooling Design",
    description: "Our product engineering process begins with client 3D CAD models. We evaluate draft angles, wall thickness consistency, parting lines, and shrinkage factors. Precision matched-metal dies and compression moulds are designed using high-grade tool steels.",
    keyHighlights: [
      "DFM (Design for Manufacturing) review with OEM engineers",
      "Mould flow and material distribution simulation",
      "High-precision CNC tooling and hardened core/cavity fabrication",
      "Incorporation of interchangeable cavity inserts for part variants"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80"
  },
  {
    step: "02",
    title: "Raw Material Formulation & Compounding",
    description: "Material quality defines component reliability. We control resin matrix blending, glass fiber chopping, mineral filler loading, and catalyst additions to achieve exact tensile, flexural, dielectric, and fire-retardant parameters.",
    keyHighlights: [
      "Rigorous incoming resin viscosity and reactivity testing",
      "Uniform fiber roving wet-out and dispersion",
      "Formulation of specialized SMC/BMC recipes for custom requirements",
      "Strict lot tracking and compound maturation monitoring"
    ],
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80"
  },
  {
    step: "03",
    title: "High-Tonnage Compression Moulding",
    description: "Using heavy hydraulic compression presses equipped with multi-zone electric heating platens, the pre-weighed charge of SMC/BMC or composite laminate is placed in the die. Under controlled temperature and tonnage, the compound cures into solid form.",
    keyHighlights: [
      "Hydraulic presses with precision tonnage and parallelism control",
      "Multi-zone platen temperature management (140°C - 160°C)",
      "Automated press cycle timers and controlled de-moulding pressure",
      "Clean parting lines minimizing flash and secondary trimming"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },
  {
    step: "04",
    title: "Post-Moulding Finishing & Assembly",
    description: "Demoulded parts proceed through automated and manual deflashing, CNC contour trimming, hardware insertion (brass studs, threaded fasteners, gaskets), and secondary finishing to meet drawing tolerances.",
    keyHighlights: [
      "Precision flash removal and edge deburring",
      "Ultrasonic and mechanical threaded insert installation",
      "Gasket dispensing and protective seal integration",
      "Surface preparation for Class-A paint or topcoat application"
    ],
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
  },
  {
    step: "05",
    title: "Quality Assurance & Mechanical Validation",
    description: "Every production batch is tested against defined dimensional, mechanical, and electrical criteria. Quality technicians verify dimensional accuracy with precision gauges, calipers, and testing fixtures before release.",
    keyHighlights: [
      "Dimensional verification against 2D/3D part drawings",
      "Barcol hardness testing to confirm complete resin cure",
      "Dielectric breakdown and insulation resistance testing for electrical items",
      "Drop impact and flexural load sample verification",
      "Batch inspection report and trace documentation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Hydraulic Compression Moulding Press",
    category: "Compression Moulding",
    description: "High-tonnage hydraulic compression moulding press with multi-zone heated platens for SMC/BMC component production.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    tags: ["Compression Press", "SMC Moulding", "Industrial Hydraulics"]
  },
  {
    id: "gal-2",
    title: "Precision Matched Metal Tooling",
    category: "Tooling & Moulds",
    description: "CNC-machined hardened steel matched dies for high-repeatability composite component compression moulding.",
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    tags: ["Tooling", "Steel Dies", "Mould Manufacturing"]
  },
  {
    id: "gal-3",
    title: "High-Precision Composite Components",
    category: "Composite Components",
    description: "Finished thermoset composite components displaying uniform wall thickness, smooth surface, and integrated mounting points.",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    tags: ["Moulded Parts", "Thermoset", "Electrical Grade"]
  },
  {
    id: "gal-4",
    title: "Fiberglass Material Roving & Weaving",
    category: "Composite Components",
    description: "High-strength E-glass continuous roving and woven fabric ready for resin wet-out and structural composite lamination.",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    tags: ["Fiberglass", "E-Glass Roving", "Reinforcement"]
  },
  {
    id: "gal-5",
    title: "Quality Verification & Metrology",
    category: "Quality & Testing",
    description: "Technician conducting dimensional metrology and cure verification on finished composite components.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    tags: ["Quality Inspection", "Metrology", "Barcol Hardness"]
  },
  {
    id: "gal-6",
    title: "Automotive Composite Body Structure",
    category: "Composite Components",
    description: "Lightweight automotive composite structural panel engineered for high impact energy absorption and rigidity.",
    imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    tags: ["Automotive", "Lightweighting", "SMC Panel"]
  },
  {
    id: "gal-7",
    title: "Chemical Analysis & Formulation Lab",
    category: "Quality & Testing",
    description: "Thermoset resin viscosity, catalyst gel-time testing, and material formulation quality control environment.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    tags: ["Formulation", "Resin Chemistry", "Lab Validation"]
  },
  {
    id: "gal-8",
    title: "Industrial Manufacturing Facility Floor",
    category: "Facility & Machinery",
    description: "Shopfloor layout optimized for compression press workflow, material staging, and post-mould trimming operations.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Manufacturing Plant", "Bhosari MIDC", "Facility Floor"]
  },
  {
    id: "gal-9",
    title: "Precision Insert Moulding Assembly",
    category: "Tooling & Moulds",
    description: "Brass and stainless steel threaded inserts integrally moulded into composite matrix for high torque retention.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["Inserts", "Hardware", "Moulded Bosses"]
  }
];

export const CAPABILITIES_DATA = [
  {
    title: "Compression Moulding",
    description: "Specialized hydraulic hot presses designed for consistent cycle times, controlled pressure gradients, and uniform curing of SMC & BMC compounds.",
    icon: "Layers"
  },
  {
    title: "Custom Mould Development",
    description: "Collaborative DFM engineering, CAD tool design, and matched-metal die tooling for complex structural geometries and tight tolerances.",
    icon: "Wrench"
  },
  {
    title: "Resin Formulation",
    description: "Tailored resin chemistry including isophthalic, vinyl ester, and flame-retardant additives for custom thermal, electrical, and chemical resistance.",
    icon: "FlaskConical"
  },
  {
    title: "Insert & Assembly Integration",
    description: "In-mould metallic inserts, post-mould precision tapping, CNC deflashing, and sub-assembly integration for turnkey OEM deliveries.",
    icon: "Cpu"
  },
  {
    title: "Dimensional Inspection",
    description: "Rigorous quality control utilizing dedicated checking fixtures, vernier calipers, Barcol hardness gauges, and electrical insulation tests.",
    icon: "ShieldCheck"
  },
  {
    title: "Batch Scalability",
    description: "Flexible manufacturing setup optimized to handle both specialized custom prototype batches and high-volume serial production runs.",
    icon: "TrendingUp"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Strategic Pune Industrial Hub",
    description: "Conveniently situated in Bhosari MIDC, Pune — placing us in direct proximity to leading automotive, electrical, and engineering OEM supply corridors.",
    stat: "Bhosari MIDC",
    subtext: "Premier Manufacturing Ecosystem"
  },
  {
    title: "Composite Material Expertise",
    description: "Deep proficiency in FRP, SMC, and BMC materials, ensuring optimal resin-to-reinforcement ratios and superior physical durability.",
    stat: "FRP • SMC • BMC",
    subtext: "Comprehensive Material Spectrum"
  },
  {
    title: "High Precision & Repeatability",
    description: "Matched metal die compression moulding guarantees consistent dimensions, clean parting lines, and Class-A surface aesthetics across every batch.",
    stat: "Close Tolerance",
    subtext: "Rigorous Dimensional Control"
  },
  {
    title: "Customer-Centric Engineering",
    description: "We work directly alongside OEM engineering teams to optimize component designs for manufacturability, reducing weight and overall part cost.",
    stat: "End-to-End",
    subtext: "From Concept to Serial Output"
  }
];

