/**
 * ADHIKARI GROUP - Central Data Store
 * Structured default data supporting live content updates via LocalStorage
 */

const DEFAULT_DATA = {
  utility: {
    telephone: "[INSERT OFFICE TELEPHONE]",
    headquarters: "Maharajgunj-3, Kathmandu",
    email: "[INSERT OFFICIAL EMAIL]",
    socials: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
      facebook: "https://facebook.com"
    }
  },

  tagline: "Adhikari Group",

  heroSlides: [
    {
      id: 1,
      type: "video",
      videoUrl: "images/mumbuds-production.mp4",
      imageUrl: "",
      headline: "Growing from Nepal, Building Beyond Border",
      subtitle: "From our own brand MUMBUDS USA to a growing network of retail stores NEOBUDS, we're building Nepal's most trusted baby care ecosystem.",
      primaryCtaText: "Explore Our Companies",
      primaryCtaTarget: "companies",
      secondaryCtaText: "About Adhikari Group",
      secondaryCtaTarget: "about"
    },
    {
      id: 2,
      type: "image",
      videoUrl: "",
      imageUrl: "",
      headline: "Growing from Nepal, Building Beyond Border",
      subtitle: "Connecting international quality brands to markets across Nepal through robust logistics and nationwide dealer networks.",
      primaryCtaText: "Our Companies",
      primaryCtaTarget: "companies",
      secondaryCtaText: "View Our Brands",
      secondaryCtaTarget: "brands"
    }
  ],

  about: {
    title: "About Adhikari Group",
    shortDescription: "Adhikari Group is a diversified business group based in Nepal, leading the country's baby care journey through import, distribution, retail, and trusted consumer brands. With 6 subsidiaries dedicated to baby and mother care products, we bring together international manufacturing standards and the most demanded essentials for babies and mothers across Nepal.",
    fullDescription: "Adhikari Group manages a growing ecosystem — from our own brand Mumbuds USA, to the authorized dealership of Bambo Nature and Popypapa, to our own clothing brand PUNTURO, a 3L Malmal producing essential wear for mothers and babies, and a nationwide retail network NEOBUDS — all working together to make quality baby care accessible to every Nepali family.",
    vision: "To be Nepal’s premier diversified business enterprise, recognized for commercial integrity, brand stewardship, and operational excellence.",
    mission: "To foster sustainable business growth by introducing world-class products, developing trusted dealer networks, and operating customer-focused retail and B2B platforms.",
    values: [
      { title: "Integrity & Trust", desc: "Open, honest relationships with all partners, suppliers, and customers." },
      { title: "Quality Standards", desc: "Delivering safe, certified, and essential products for every home." },
      { title: "Continuous Growth", desc: "Expanding distribution reach, digital B2B systems, and retail accessibility." },
      { title: "Customer Commitment", desc: "Providing reliable service and care through every brand we operate." }
    ]
  },

  statistics: [
    { id: "stat-1", number: "06", label: "Operating Companies", icon: "building" },
    { id: "stat-2", number: "05", label: "Retail Locations", icon: "store" },
    { id: "stat-3", number: "04+", label: "International Partners", icon: "globe" },
    { id: "stat-4", number: "05+", label: "Key Brands", icon: "award" },
    { id: "stat-5", number: "50+", label: "Dealer Network", icon: "network" }
  ],

  companies: [
    {
      id: "shreesha-inc",
      name: "Shreesha Incorporated Pvt. Ltd.",
      tagline: "Authorized International Diaper Distributor",
      category: "Distribution",
      filterCategory: "distribution",
      location: "Kathmandu, Nepal",
      shortDesc: "Shreesha Incorporated, under Adhikari Group, authorized distributor of Mumbuds USA and Bambo Nature, driving marketing and brand growth..",
      fullDesc: [
        "Shreesha Incorporated is a core subsidiary of Adhikari Group, established to lead the distribution, marketing, and branding of two of the most trusted diaper brands in Nepal — Mumbuds USA and Bambo Nature. As the authorized distributor, the firm is responsible for ensuring these products reach every corner of the country, from urban retail chains to local pharmacies, maintaining consistent quality, availability, and brand integrity at every touchpoint.",
        "Beyond distribution, Shreesha Incorporated takes on a strategic marketing role — shaping how these brands are perceived and adopted in the Nepali market. This includes designing targeted campaigns, building relationships with retailers and healthcare professionals, and running consumer awareness initiatives that educate parents on hygiene, comfort, and safety standards for their babies. The firm continuously studies market trends and consumer behavior to refine its approach, ensuring that both Mumbuds USA and Bambo Nature stay ahead in a competitive and growing baby care industry.",
        "Through this dual focus on distribution and brand-building, Shreesha Incorporated plays a vital role in Adhikari Group's larger mission — making internationally trusted baby care products accessible, affordable, and reliable for every Nepali family. Its work bridges the gap between global manufacturing standards and local market needs, reinforcing Adhikari Group's position as a dominant force in Nepal's baby care sector."
      ],
      functions: ["Authorized Import", "Nationwide Distribution", "Pharmacy & Hospital Supply", "Brand Representation"],
      brands: [
        {
          name: "MumBuds",
          role: "Authorized Distributor",
          desc: "Gentle baby diaper and skin hygiene essentials.",
          website: "https://www.mumbudsnepal.com",
          displayUrl: "www.mumbudsnepal.com",
          origin: "USA"
        },
        {
          name: "Bambo Nature",
          role: "Authorized Distributor",
          desc: "Certified eco-friendly baby diapers and hygiene from Denmark.",
          website: "https://www.bambonature.com",
          displayUrl: "www.bambonature.com",
          origin: "Denmark"
        }
      ],
      branches: [],
      website: "https://www.shreeshaincorporated.com",
      displayUrl: "www.shreeshaincorporated.com",
      image: "images/companies/shreesha-inc.jpeg"
    },
    {
      id: "wholesale-lobby",
      name: "Wholesale Lobby Pvt. Ltd.",
      tagline: "B2B Multivendor Marketplace",
      category: "B2B Commerce & Distribution",
      filterCategory: "b2b",
      location: "Kathmandu, Nepal",
      shortDesc: "Wholesale Lobby Pvt Ltd, under Adhikari Group, authorized distributor of PopyPapa and brand owner of Punturo, driving global expansion.",
      fullDesc: [
        "Wholesale Lobby Pvt Ltd is a key subsidiary of Adhikari Group, serving as the authorized distributor of PopyPapa, a trusted name in strollers and car seats for babies. The firm ensures these products are made available across Nepal through a reliable distribution network, maintaining international safety and quality standards while making essential baby travel gear accessible to families nationwide.",
        "In addition to distribution, Wholesale Lobby Pvt Ltd owns and manages Punturo, its in-house clothing brand. The firm oversees the strategic direction of Punturo — from product development and brand positioning to market expansion — with a clear vision of growing the label beyond Nepal's borders through strong manufacturing partnerships and international market exploration.",
        "Looking ahead, Wholesale Lobby Pvt Ltd also aims to establish itself as a B2B marketplace, connecting vendors and businesses through a dedicated multivendor platform. With effective implementation of related plans and policies, this initiative is set to streamline bulk trade, strengthen supplier-retailer relationships, and support the group's larger goal of building a more connected and scalable business ecosystem — combining distribution, brand ownership, and digital commerce under one strategic vision."
      ],
      functions: ["B2B Multivendor Commerce", "Wholesale Distribution", "Brand Acceleration", "Supply Chain Logistics"],
      brands: [
        {
          name: "Punturo",
          role: "Owned Brand",
          desc: "Nepalese mother and baby clothing brand specializing in 3-Layer Malmal cotton garments.",
          website: "https://www.punturonepal.com",
          displayUrl: "www.punturonepal.com",
          origin: "Nepal"
        },
        {
          name: "PopyPapa",
          role: "Authorized Distributor",
          desc: "Quality baby care and daily essentials.",
          website: "#",
          displayUrl: "Coming Soon"
        }
      ],
      branches: [],
      website: "https://www.wholesalelobby.com",
      displayUrl: "www.wholesalelobby.com",
      image: "images/companies/wholesale-lobby.webp"
    },
    {
      id: "neobuds",
      name: "NeoBuds Pvt. Ltd.",
      tagline: "Specialized Baby & Mother Care Retail Chain",
      category: "Retail",
      filterCategory: "retail",
      location: "5 Branches across Nepal",
      shortDesc: "Neobuds, under Adhikari Group, is Nepal's fastest-growing baby retail chain with 5 branches offering trusted brands and nationwide delivery.",
      fullDesc: [
        "Neobuds is a baby retail store chain under Adhikari Group, established with a vision to provide the best baby care products and shopping experience across Nepal. With 5 branches opened in order across Maharajgunj, Samakhusi, Chitwan, Tikathali, and Golfutar, Neobuds has grown to become one of the fastest expanding baby retail chains in the country, bringing quality and convenience closer to parents nationwide.",
        "The stores exclusively represent trusted brands under Adhikari Group's ecosystem, including Mumbuds USA and Bambo Nature for diapers, along with Punturo and PopyPapa for clothing and baby travel essentials. To maintain quality assurance and brand trust, Neobuds does not stock diaper brands other than Mumbuds USA and Bambo Nature, ensuring every product on its shelves meets the highest standards of safety and reliability for babies.",
        "Beyond its physical stores, Neobuds is committed to expanding accessibility through online delivery services, aiming to reach families across Nepal regardless of location. This combination of curated brand representation, quality assurance, and growing retail presence positions Neobuds as a leading destination for baby care shopping — reflecting Adhikari Group's broader mission of making trusted, globally-standard baby products accessible to every Nepali household."
      ],
      functions: ["Direct Retail Stores", "Customer Guidance", "In-Store Consultation", "Product Fulfillment"],
      branches: [
        { name: "Maharajgunj Branch", location: "Maharajgunj, Kathmandu", hours: "10:00 AM – 8:00 PM", phone: "[INSERT BRANCH PHONE]" },
        { name: "Samakhushi Branch", location: "Samakhushi, Kathmandu", hours: "7:00 AM – 9:00 PM", phone: "[INSERT BRANCH PHONE]" },
        { name: "Golfutar Branch", location: "Golfutar, Kathmandu", hours: "7:00 AM – 9:00 PM", phone: "[INSERT BRANCH PHONE]" },
        { name: "Tikathali Branch", location: "Tikathali, Lalitpur", hours: "7:00 AM – 9:00 PM", phone: "[INSERT BRANCH PHONE]" },
        { name: "Chitwan Branch", location: "Chitwan, Bagmati Province", hours: "7:00 AM – 9:00 PM", phone: "[INSERT BRANCH PHONE]" }
      ],
      website: "https://www.neobuds.com",
      displayUrl: "www.neobuds.com",
      image: "images/companies/neobuds.jpeg"
    },
    {
      id: "ag-hygiene",
      name: "AG Hygiene",
      tagline: "Kathmandu Valley Regional Hygiene Dealer",
      category: "Distribution & Dealership",
      filterCategory: "dealership",
      location: "Kathmandu, Nepal",
      shortDesc: "AG Hygiene, under Adhikari Group, is the authorized dealer of Mumbuds USA diapers within Kathmandu Valley.",
      fullDesc: [
        "AG Hygiene is a subsidiary of Adhikari Group, operating as the authorized dealer of Mumbuds USA within Kathmandu Valley. The firm plays a vital role in ensuring the brand's steady availability across the valley, working closely with retailers and local outlets to bring quality diapers closer to parents and caregivers throughout the region.",
        "By focusing specifically on the Kathmandu Valley market, AG Hygiene strengthens Mumbuds USA's local presence and accessibility, ensuring efficient supply, consistent stock availability, and reliable service to retail partners. This localized approach allows the firm to respond quickly to market demand while maintaining the quality standards that define the Mumbuds USA brand.",
        "Through its dedicated dealership operations, AG Hygiene supports Adhikari Group's broader mission of making trusted baby hygiene products accessible to every household — reinforcing the group's growing footprint in Nepal's baby care industry, one region at a time."
      ],
      functions: ["Valley Dealership", "Local Retail Supply", "Rapid Inventory Dispatch"],
      brands: [
        {
          name: "MumBuds",
          role: "Authorized Dealer",
          desc: "Baby hygiene products.",
          website: "https://www.mumbudsnepal.com",
          displayUrl: "www.mumbudsnepal.com"
        }
      ],
      branches: [],
      website: "#",
      displayUrl: "Kathmandu Hub",
      image: "images/companies/ag-hygiene.png"
    },
    {
      id: "adhik-brothers",
      name: "Adhik Brothers",
      tagline: "Chitwan & Regional Distribution Hub",
      category: "Distribution & Dealership",
      filterCategory: "dealership",
      location: "Chitwan, Nepal",
      shortDesc: "Adhik Brothers, under Adhikari Group, is the authorized dealer of Mumbuds USA diapers within Chitwan district.",
      fullDesc: [
        "Adhik Brothers is a subsidiary of Adhikari Group, operating as the authorized dealer of Mumbuds USA within Chitwan. The firm ensures the brand's consistent availability across the district, working closely with local retailers and outlets to bring quality diapers within easy reach of parents and caregivers in the region.",
        "By focusing specifically on the Chitwan market, Adhik Brothers strengthens Mumbuds USA's regional presence, ensuring reliable supply, timely restocking, and dependable service to retail partners across the district. This localized focus allows the firm to understand and respond to regional demand efficiently while upholding the quality standards that define the Mumbuds USA brand.",
        "Through its dedicated dealership operations, Adhik Brothers supports Adhikari Group's broader vision of making trusted baby hygiene products accessible across Nepal — extending the group's growing presence beyond the valley and into key regional markets like Chitwan."
      ],
      functions: ["Provincial Dealership", "Regional Supply Chain", "Sub-Dealer Management"],
      brands: [
        {
          name: "MumBuds",
          role: "Authorized Dealer",
          desc: "Baby hygiene products.",
          website: "https://www.mumbudsnepal.com",
          displayUrl: "www.mumbudsnepal.com"
        }
      ],
      branches: [],
      website: "#",
      displayUrl: "Chitwan Hub",
      image: "images/companies/adhik-brothers.png"
    },
    {
      id: "neobaby",
      name: "NeoBaby Pvt. Ltd.",
      tagline: "Specialized Baby & Mother Care Outlet",
      category: "Retail",
      filterCategory: "retail",
      location: "Nepal",
      shortDesc: "Neobaby Pvt Ltd, under Adhikari Group, operates as the baby ecommerce retail platform working alongside NeoBuds nationwide.",
      fullDesc: [
        "Neobaby Pvt Ltd is a subsidiary of Adhikari Group, dedicated to baby ecommerce retail in Nepal. Working in close coordination with Neobuds, the company extends the reach of trusted baby care products beyond physical stores, allowing parents and caregivers across the country to shop conveniently through an online platform.",
        "By operating alongside Neobuds, Neobaby Pvt Ltd bridges the gap between in-store and online shopping experiences, ensuring that the same trusted brands — including Mumbuds USA, Bambo Nature, Punturo, and PopyPapa — are accessible to customers regardless of their location. This integration allows for consistent product quality, streamlined logistics, and a unified brand experience across both retail and digital channels.",
        "Through its ecommerce operations, Neobaby Pvt Ltd supports Adhikari Group's larger vision of nationwide accessibility — making it easier for families in every corner of Nepal to access trusted baby care essentials, delivered right to their doorstep."
      ],
      functions: ["Neighborhood Retail", "Mother Care Essentials", "Infant Supplies"],
      brands: [
        { name: "MumBuds", role: "Product Stockist", desc: "Baby hygiene & diapers." }
      ],
      branches: [],
      website: "#",
      displayUrl: "Retail Outlets",
      image: "images/companies/neobaby.png"
    }
  ],

  brands: [
    {
      id: "mumbuds",
      name: "MumBuds USA",
      category: "Baby Diapers & Hygiene",
      origin: "USA / Nepal",
      relationship: "Owned & Distributed Brand",
      shortDesc: "MumBuds USA offers ultra-thin, highly absorbent diapers with bubble topsheet, Japan SAP paper, and wetness indicator for trusted baby comfort.",
      fullDesc: [
        "MumBuds USA is a premium baby care brand dedicated to providing safe, gentle, and high-quality products for babies. Its diapers are crafted with an ultra-thin design that offers superior comfort and absorbency without compromising on protection, allowing babies to move freely while staying dry and comfortable throughout the day.",
        "Each MumBuds diaper features a special bubble topsheet that quickly draws moisture away from the skin to reduce irritation, combined with premium Japan SAP paper that locks in wetness for long-lasting dryness. A smart wetness indicator makes diaper changes easier and more reliable for caregivers, while the breathable, hypoallergenic design ensures the diaper is gentle and safe for even the most sensitive skin.",
        "Beyond diapers, MumBuds USA is committed to supporting every stage of a baby's journey, with an expanding range of products including wipes and an upcoming line of feeding bottles and baby cosmetics. Built on the values of trust, comfort, and innovation, MumBuds USA aims to be a reliable partner for parents, making everyday care simple, safe, and comforting for both babies and their families."
      ],
      website: "https://www.mumbudsnepal.com",
      displayUrl: "www.mumbudsnepal.com",
      logo: "images/mumbuds.png",
      isPlaceholder: false,
      companies: ["Adhikari Group", "Shreesha Incorporated", "AG Hygiene", "Adhik Brothers", "NeoBuds"],
      letter: "M"
    },
    {
      id: "bambo-nature",
      name: "Bambo Nature",
      category: "Eco-Friendly Baby Care & Diapers",
      origin: "Denmark",
      relationship: "Authorized Distributor (Shreesha Inc.)",
      shortDesc: "Bambo Nature, a Danish diaper brand, offers eco-certified, skin-friendly diapers combining Nordic quality, high absorbency, and 40+ years of trusted care.",
      fullDesc: [
        "Bambo Nature is a Danish baby care brand rooted in the Nordic philosophy of balancing function, comfort, and environmental responsibility. Made with carefully selected, high-quality materials, every diaper is designed to be gentle on a baby's skin while offering a secure fit and dependable absorbency. The brand's commitment to safety and sustainability is reflected in its Nordic Swan Ecolabel and Asthma Allergy Nordic certifications, ensuring each diaper is free from added parabens, perfumes, dyes, and other harsh preservatives.",
        "Designed for newborns, toddlers, and active preschoolers alike, Bambo Nature diapers are soft, comfortable, and built to prevent leaks, giving parents peace of mind throughout the day. With over four decades of real-world testing with families, the brand has continuously refined its products to protect delicate skin while keeping up with a growing child's movement and comfort needs. This dedication extends to its diaper pants line as well, crafted with stretchy, breathable materials and a snug 360° fit ideal for crawling, walking, and early exploration — making them especially suited for potty training stages.",
        "At the core of every Bambo Nature product is a super-absorbent core with advanced channel technology that draws moisture away from the skin, keeping babies dry through multiple wettings. Every diaper and pant is dermatologically tested and certified under the Nordic Swan Ecolabel, Asthma Allergy Nordic, and FSC™ standards, reinforcing the brand's promise of safety, sustainability, and skin-friendliness. Packaged in 100% recyclable paper, Bambo Nature reflects a complete commitment — from material to manufacturing — to providing naturally better care for babies and a healthier planet."
      ],
      website: "https://www.bambonature.com",
      displayUrl: "www.bambonature.com",
      logo: "images/bambo-nature.png",
      isPlaceholder: false,
      companies: ["Shreesha Incorporated Pvt. Ltd.", "NeoBuds Pvt. Ltd."],
      letter: "B"
    },
    {
      id: "punturo",
      name: "Punturo",
      category: "Mother & Baby Malmal Clothing",
      origin: "Nepal",
      relationship: "Owned Brand (Wholesale Lobby)",
      shortDesc: "Punturo is a premium Nepali clothing brand crafting 3-layer Malmal essentials for babies and mothers, blending comfort, softness, and tradition.",
      fullDesc: [
        "Punturo is a homegrown Nepali clothing brand dedicated to crafting premium essentials for babies and mothers using 3L (3-layer) Malmal fabric — a soft, breathable material trusted for generations for its gentleness on delicate skin. Rooted in the values of comfort, quality, and care, Punturo brings together traditional fabric craftsmanship and modern design to create products that support both newborns and mothers through everyday life.",
        "The brand's product range includes baby essentials such as bhoto, swaddles, head wrappers, and handkerchiefs, alongside specialized mother-care items like breastfeeding gowns and cholo bhoto sets — each designed with functionality and comfort in mind. Every piece is made with the signature 3-layer Malmal construction, offering superior softness, breathability, and durability, making it ideal for a baby's sensitive skin as well as postpartum comfort for mothers.",
        "As a premium name in Nepal's baby and mom care category, Punturo is committed to preserving the timeless comfort of Malmal cloth while meeting the needs of modern parenting. With every product thoughtfully designed for gentle wear and everyday reliability, Punturo continues to build trust as a go-to clothing brand for families across Nepal."
      ],
      website: "https://www.punturonepal.com",
      displayUrl: "www.punturonepal.com",
      logo: "images/punturo.png",
      isPlaceholder: false,
      companies: ["Wholesale Lobby Pvt. Ltd.", "NeoBuds Pvt. Ltd."],
      letter: "P"
    },
    {
      id: "neobuds",
      name: "NeoBuds",
      category: "Retail Brand & Baby Store Chain",
      origin: "Nepal",
      relationship: "Retail Subsidiary Brand",
      shortDesc: "Neobuds, under Adhikari Group, is Nepal's fastest-growing baby retail chain with 5 branches offering trusted brands and nationwide delivery.",
      fullDesc: [
        "Neobuds is a baby retail store chain under Adhikari Group, established with a vision to provide the best baby care products and shopping experience across Nepal. With 5 branches opened in order across Maharajgunj, Samakhusi, Chitwan, Tikathali, and Golfutar, Neobuds has grown to become one of the fastest expanding baby retail chains in the country, bringing quality and convenience closer to parents nationwide.",
        "The stores exclusively represent trusted brands under Adhikari Group's ecosystem, including Mumbuds USA and Bambo Nature for diapers, along with Punturo and PopyPapa for clothing and baby travel essentials. To maintain quality assurance and brand trust, Neobuds does not stock diaper brands other than Mumbuds USA and Bambo Nature, ensuring every product on its shelves meets the highest standards of safety and reliability for babies.",
        "Beyond its physical stores, Neobuds is committed to expanding accessibility through online delivery services, aiming to reach families across Nepal regardless of location. This combination of curated brand representation, quality assurance, and growing retail presence positions Neobuds as a leading destination for baby care shopping — reflecting Adhikari Group's broader mission of making trusted, globally-standard baby products accessible to every Nepali household."
      ],
      website: "https://www.neobuds.com",
      displayUrl: "www.neobuds.com",
      logo: "images/neobuds.png",
      isPlaceholder: false,
      companies: ["NeoBuds Pvt. Ltd.", "Adhikari Group"],
      letter: "N"
    },
    {
      id: "popypapa",
      name: "PopyPapa",
      category: "Baby Care Essentials",
      origin: "International",
      relationship: "Authorized Distributor (Wholesale Lobby)",
      shortDesc: "PopyPapa offers durable, safety-focused strollers and car seats, giving parents reliable baby travel gear built for everyday comfort and security.",
      fullDesc: [
        "PopyPapa is a trusted brand specializing in baby travel essentials, offering a dependable range of strollers and car seats designed for growing families. Built with a focus on safety, durability, and everyday practicality, PopyPapa products help parents navigate daily life with their little ones — whether it's a walk around the neighborhood or a long car journey.",
        "Every PopyPapa stroller and car seat is engineered to meet international safety standards, combining sturdy construction with thoughtful design features that prioritize a child's comfort and security. From easy-to-fold strollers for everyday convenience to secure, cushioned car seats for safe travel, PopyPapa is built to support parents through every stage of early childhood mobility.",
        "Distributed in Nepal through Wholesale Lobby Pvt Ltd under Adhikari Group, PopyPapa reflects the group's broader commitment to bringing globally trusted, safety-compliant baby products to Nepali families — making secure and comfortable travel gear accessible nationwide."
      ],
      website: "#",
      displayUrl: "Official Brand Information",
      logo: "images/popypapa.png",
      isPlaceholder: false,
      companies: ["Wholesale Lobby Pvt. Ltd."],
      letter: "P"
    }
  ],

  // Dedicated bottom scrolling photo gallery (images stored in 'images/gallery/')
  galleryImages: [
    { id: "img-1", src: "images/gallery/gallery-1.jpg", alt: "NeoBuds Baby Care Retail Store" },
    { id: "img-2", src: "images/gallery/gallery-2.jpg", alt: "Shreesha Inc. Distribution Operations" },
    { id: "img-3", src: "images/gallery/gallery-3.jpg", alt: "Adhikari Group Corporate Headquarters" },
    { id: "img-4", src: "images/gallery/gallery-4.webp", alt: "Wholesale Lobby B2B Commerce & Distribution" },
    { id: "img-5", src: "images/gallery/gallery-5.jpg", alt: "Executive Leadership & Vision" }
  ],

  chairman: {
    name: "Mr. Ganesh Prasad Adhikari",
    title: "Chairman, Adhikari Group",
    portrait: "images/chairman.jpg",
    quote: "Building businesses that create lasting value through trust, commercial integrity, and dedicated partnerships.",
    fullMessage: "At Adhikari Group, we believe that a successful business is built not only through growth, but through trust, integrity, responsibility, and long-term relationships. What began as a commitment to serving the market with quality products and dependable business practices has grown into a group of companies operating across import, distribution, retail, B2B commerce, baby care, hygiene, and consumer products.\n\nEach business within the Adhikari Group has its own purpose, while sharing a common vision of creating sustainable value for our customers, partners, employees, and communities. Our journey has always been guided by the belief that strong businesses are built by understanding people and responding to their changing needs—shaping the brands we represent and the relationships we establish.\n\nAs we move forward, our ambition is not simply to become larger, but to become better, stronger, and more responsible. We are committed to the highest standards, continuous innovation, and building businesses that stand for quality, reliability, and lasting value. Together, we look forward to building a stronger future.",
    paragraphs: [
      "At Adhikari Group, we believe that a successful business is built not only through growth, but through trust, integrity, responsibility, and long-term relationships. What began as a commitment to serving the market with quality products and dependable business practices has grown into a group of companies operating across import, distribution, retail, B2B commerce, baby care, hygiene, and consumer products.",
      "Each business within the Adhikari Group has its own purpose, while sharing a common vision of creating sustainable value for our customers, partners, employees, and communities. Our journey has always been guided by the belief that strong businesses are built by understanding people and responding to their changing needs—shaping the brands we represent and the relationships we establish.",
      "As we move forward, our ambition is not simply to become larger, but to become better, stronger, and more responsible. We are committed to the highest standards, continuous innovation, and building businesses that stand for quality, reliability, and lasting value. Together, we look forward to building a stronger future."
    ]
  },

  stories: [
    {
      id: "story-1",
      title: "NeoBuds Expands Retail Footprint with 5th Branch in Golfutar",
      category: "Retail Expansion",
      date: "August 2026",
      featured: true,
      image: "images/companies/neobuds.jpeg",
      description: "NeoBuds Pvt. Ltd. officially opens its Golfutar branch, extending accessible mother and baby hygiene supplies to central Nepal.",
      content: "Adhikari Group's retail subsidiary NeoBuds has launched its newest location in Golfutar. Joining branches in Maharajgunj, Samakhushi, Golfutar, and Tikathali, the store provides a friendly in-person shopping experience featuring MumBuds, Bambo Nature, and Punturo Malmal apparel."
    },
    {
      id: "story-2",
      title: "Wholesale Lobby Launches B2B Commerce Portal for Nepalese Retailers",
      category: "B2B Trade",
      date: "July 2026",
      featured: false,
      image: "images/companies/wholesale-lobby.webp",
      description: "Connecting provincial wholesalers directly with top brands, accelerating digital order fulfillment nationwide.",
      content: "Wholesale Lobby Pvt. Ltd. announces the expansion of its digital B2B commerce marketplace, streamlining inventory acquisition for hundreds of small-to-medium retailers across Nepal."
    },
    {
      id: "story-3",
      title: "Shreesha Inc. Strengthens Partnership with Bambo Nature Denmark",
      category: "International Distribution",
      date: "June 2026",
      featured: false,
      image: "images/bambo-nature.png",
      description: "Delivering certified eco-friendly Danish baby hygiene lines to medical centers and specialty outlets.",
      content: "Shreesha Incorporated Pvt. Ltd. continues its authorized distribution partnership with Bambo Nature Denmark, delivering certified skin-friendly and eco-conscious baby care products across Nepal."
    },

    {
      id: "story-5",
      title: "Your New Headline Here",
      category: "Company News",
      date: "September 2026",
      featured: false,
      image: "images/stories/story-5.jpg",
      description: "A one to two sentence summary of the news that shows on the card.",
      content: "The full detailed story text that appears when someone clicks to read more."
    }
  ],

  contact: {
    headquarters: "Maharajgunj-3, Kathmandu, Nepal",
    telephone: "[INSERT OFFICE TELEPHONE]",
    email: "[INSERT OFFICIAL EMAIL]",
    mapCoordinates: { lat: 27.7172, lng: 85.3240 },
    inquiryTypes: ["General Business Inquiry", "Distributorship & Dealership", "Supplier & Vendor Partnership", "Retail Branch Inquiry", "Media & Corporate Press"]
  }
};