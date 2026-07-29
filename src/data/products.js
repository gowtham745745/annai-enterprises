export const PRODUCT_CATEGORIES = [
  {
    id: "mro-supplies",
    title: "MRO Supplies",
    tagline: "Maintenance, Repair & Operations",
    description: "Comprehensive factory consumables, industrial lubricants, maintenance tools, and operational essentials to keep plant lines running smoothly.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    itemCount: "450+ Products",
    popularItems: ["Industrial Lubricants & Greases", "Cleaning Consumables", "Pipe Sealants", "V-Belts & Chains", "Abrasives & Grinding Wheels"],
    brandsAvailable: ["Loctite", "3M", "CRC", "Shell", "WD-40"],
    specifications: [
      { label: "Grade", value: "Industrial & ISO Certified" },
      { label: "Delivery", value: "Same-Day Dispatch Available" },
      { label: "Compliance", value: "RoHS & REACH Compliant" }
    ]
  },
  {
    id: "electrical-equipment",
    title: "Electrical Products",
    tagline: "Power Distribution & Switchgear",
    description: "Heavy-duty industrial switchgear, circuit breakers, contactors, relays, control panels, transformers, and industrial wiring systems.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=800&q=80",
    itemCount: "620+ Products",
    popularItems: ["Air Circuit Breakers (ACB)", "Molded Case Circuit Breakers (MCCB)", "Contactors & Overload Relays", "Industrial Plug & Sockets", "Busbar Trunking Systems"],
    brandsAvailable: ["Siemens", "Schneider Electric", "ABB", "L&T", "Legrand"],
    specifications: [
      { label: "Voltage Rating", value: "Up to 33kV" },
      { label: "Standards", value: "IEC 60947 / IS 13947" },
      { label: "Protection", value: "IP65 / IP67 Enclosures" }
    ]
  },
  
  {
    id: "safety-products",
    title: "Safety Products",
    tagline: "Industrial PPE & Site Safety",
    description: "Certified Head-to-Toe Personnel Protective Equipment (PPE), fall arrest harnesses, safety boots, gas detectors, and site safety signage.",
    image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbae?auto=format&fit=crop&w=800&q=80",
    itemCount: "290+ Products",
    popularItems: ["Fall Protection Harnesses", "Industrial Safety Helmets (EN397)", "Cut-Resistant Safety Gloves", "Steel-Toe Work Boots", "Respiratory Protection Masks"],
    brandsAvailable: ["Karam", "Venus", "3M", "Honeywell", "Udyogi"],
    specifications: [
      { label: "Certifications", value: "IS 2925, EN 361, CE Approved" },
      { label: "Protection Level", value: "Heavy Industrial Grade" },
      { label: "Material", value: "High-Density Polyethylene & Steel" }
    ]
  },
  
  {
    id: "bearings",
    title: "Bearings & Units",
    tagline: "Precision Motion & Load Support",
    description: "World-class deep groove ball bearings, spherical roller bearings, pillow block units, linear motion guides, and specialized sleeve bearings.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    itemCount: "550+ Products",
    popularItems: ["Deep Groove Ball Bearings", "Spherical Roller Bearings", "Pillow Block Housing Units (UCP)", "Tapered Roller Bearings", "Linear Motion LM Guides"],
    brandsAvailable: ["SKF", "FAG", "NSK", "NTN", "TIMKEN"],
    specifications: [
      { label: "Precision", value: "ABEC 3 / P6 Rating" },
      { label: "Sealing", value: "Rubber Sealed (2RS) / Metal Shielded (ZZ)" },
      { label: "Origin", value: "100% Genuine Manufacturer Certified" }
    ]
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    tagline: "PLC, VFD, HMI & Sensors",
    description: "Cutting-edge Programmable Logic Controllers (PLC), Variable Frequency Drives (VFD), touch HMIs, proximity sensors, and encoders for Smart Industry 4.0.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    itemCount: "420+ Products",
    popularItems: ["Compact & Modular PLCs", "AC Variable Frequency Drives", "7\" & 10\" Industrial HMIs", "Inductive Proximity Sensors", "Incremental Rotary Encoders"],
    brandsAvailable: ["Siemens", "Omron", "Schneider Electric", "ABB", "Delta"],
    specifications: [
      { label: "Protocols", value: "PROFINET, Modbus TCP, EtherCAT" },
      { label: "IP Rating", value: "IP67 Sensor Protection" },
      { label: "Support", value: "Includes Programming Setup Assistance" }
    ]
  },
  {
    id: "hand-tools",
    title: "Hand & Power Tools",
    tagline: "Precision Tools for Mechanics",
    description: "Professional torque wrenches, socket sets, pliers, heavy-duty cordless power tools, magnetic drill machines, and insulated electrician kits.",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80",
    itemCount: "500+ Products",
    popularItems: ["Digital Torque Wrenches", "Chrome Vanadium Socket Sets", "VDE 1000V Insulated Screwdrivers", "Heavy Duty Angle Grinders", "Magnetic Core Drilling Machines"],
    brandsAvailable: ["Stanley", "Taparia", "Bosch", "DeWalt", "Groz"],
    specifications: [
      { label: "Material", value: "Chrome Vanadium & S2 Steel" },
      { label: "Insulation", value: "VDE Certified 1000V" },
      { label: "Warranty", value: "Lifetime Mechanical Guarantee" }
    ]
  },
  {
    id: "fasteners",
    title: "Fasteners & Hardware",
    tagline: "High-Tensile Industrial Bolting",
    description: "Grade 8.8 / 10.9 socket head cap screws, stainless steel SS316 bolts, wedge anchors, threaded rods, spring washers, and specialized hardware.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80",
    itemCount: "700+ Products",
    popularItems: ["High Tensile Grade 10.9 Bolts", "SS304 & SS316 Hex Fasteners", "Socket Head Allen Screws", "Heavy Duty Expansion Anchor Bolts", "Nyloc Lock Nuts"],
    brandsAvailable: ["Unbrako", "TVS Fasteners", "LPS", "Bollhoff", "Annai Hardware"],
    specifications: [
      { label: "Grade Standard", value: "ISO 898-1 / DIN 933 / DIN 912" },
      { label: "Coating", value: "Hot Dip Galvanized / Zinc Plated / Black Oxide" },
      { label: "Testing", value: "Mill Test Certificate (MTC) Provided" }
    ]
  },
  {
    id: "hydraulics",
    title: "Hydraulics",
    tagline: "High-Pressure Oil Power Systems",
    description: "High-pressure hydraulic pumps, direction control valves, hydraulic cylinders, wire-braided hoses, pressure gauges, and oil power packs.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80",
    itemCount: "260+ Products",
    popularItems: ["Vane & Gear Hydraulic Pumps", "Solenoid Operated Directional Valves", "Hydraulic Power Packs", "R2 2-Wire High Pressure Hoses", "Digital Hydraulic Pressure Gauges"],
    brandsAvailable: ["Rexroth Bosch", "Yuken", "Eaton", "Parker", "Hydac"],
    specifications: [
      { label: "Max Pressure", value: "Up to 350 Bar (5000 PSI)" },
      { label: "Flow Rate", value: "5 LPM to 200 LPM" },
      { label: "Viscosity", value: "ISO VG 32 / 46 / 68" }
    ]
  },
  
  
];
