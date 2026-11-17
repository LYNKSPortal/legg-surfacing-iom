export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  cardImage: string;
  cardImageAlt: string;
  summary: string;
  intro: string[];
  applications: string[];
  benefits: { title: string; description: string }[];
  propertyTypes: string[];
  process: ServiceProcessStep[];
  considerations?: string[];
  faqs: ServiceFaq[];
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "resin-bound-surfacing",
    name: "Resin Bound Surfacing",
    shortName: "Resin Bound",
    tagline: "Decorative, durable surfacing for driveways and pathways",
    heroImage: "/resin-bound-surfacing.png",
    heroImageAlt: "Resin bound driveway installed at a residential property",
    cardImage: "/resin-bound-surfacing.png",
    cardImageAlt: "Resin bound surfacing finish on a driveway",
    summary:
      "An attractive, smooth and durable surface made from a blend of natural aggregates and clear resin, trowelled to a high-quality finish.",
    intro: [
      "Resin bound surfacing combines natural aggregates with a clear resin binder to create a smooth, attractive, and hard-wearing surface. It is a popular choice for homeowners and businesses across the Isle of Man who want a modern, low-maintenance finish that stands apart from standard tarmac or block paving.",
      "Because the aggregate and resin are mixed before being laid and trowelled to a level finish, resin bound surfacing offers a consistent texture underfoot, a smart appearance, and — when specified and installed correctly over a suitable permeable sub-base — the potential for surface water to drain through the surface rather than pool on top.",
      "LEGG Surfacing is a VUBA accredited installer, giving us access to VUBA's full resin bound surfacing product range — including their extensive collection of exclusive aggregate blends — for projects on the Isle of Man.",
      "At LEGG Surfacing, every resin bound installation is assessed on-site so the build-up, edging and drainage detailing are matched to the specific property before any work begins.",
    ],
    applications: [
      "Domestic driveways",
      "Garden paths and patios",
      "Pool surrounds",
      "Commercial walkways and entrances",
      "Public realm and pedestrian areas",
    ],
    benefits: [
      {
        title: "Attractive, modern finish",
        description:
          "A smooth, seamless surface with a contemporary appearance that complements both period and modern properties.",
      },
      {
        title: "Wide range of colours and aggregates",
        description:
          "As a VUBA accredited installer, we offer access to VUBA's extensive collection of exclusive aggregate blends — including Kilimanjaro, Alhambra, Bellagio and St Kitts — so you can tailor the finish to your property's style.",
      },
      {
        title: "Permeable where correctly specified",
        description:
          "When installed over a suitable permeable sub-base, resin bound surfacing can allow water to drain through the surface rather than collect on top.",
      },
      {
        title: "Smooth, low-maintenance surface",
        description:
          "A seamless, trowelled finish with no loose stones, making it comfortable underfoot and straightforward to keep clean.",
      },
    ],
    propertyTypes: [
      "Detached and semi-detached homes",
      "Period properties seeking a sympathetic modern finish",
      "New-build driveways",
      "Commercial premises and office entrances",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We visit the property to assess the existing surface, substrate, levels and drainage requirements before recommending a suitable build-up.",
      },
      {
        title: "Preparation and edging",
        description:
          "The area is excavated or prepared as required, with edging installed to contain the resin bound surface and define clean boundaries.",
      },
      {
        title: "Sub-base and binder course",
        description:
          "A suitable sub-base is laid and compacted to provide a stable, durable foundation appropriate to the site conditions.",
      },
      {
        title: "Mixing and laying",
        description:
          "The aggregate and resin are carefully mixed to the specified blend, then laid and trowelled by hand to achieve a smooth, even finish.",
      },
      {
        title: "Curing and handover",
        description:
          "The surface is left to cure before being handed over, with guidance provided on care and maintenance.",
      },
    ],
    considerations: [
      "Colour and aggregate selection is agreed with you before installation, with samples available to view from the full VUBA range.",
      "Correct sub-base preparation and edge restraint are essential to the long-term performance of any resin bound surface.",
      "Periodic cleaning and keeping the surface free of organic debris will help maintain its appearance over time.",
      "Suitability for permeable drainage depends on ground conditions and the overall site build-up, which we assess before quoting. Independent testing commissioned by VUBA found their resin bound system to be around 19 times more permeable than block paving when correctly installed.",
    ],
    faqs: [
      {
        question: "What is resin bound surfacing made from?",
        answer:
          "It is a mixture of natural aggregate stones bound with a clear resin, which is laid and trowelled to form a smooth, durable surface.",
      },
      {
        question: "Can I choose the colour of my resin bound driveway?",
        answer:
          "Yes. We offer a range of aggregate blends and colours, and can talk you through the options that will best suit your property during your site visit.",
      },
      {
        question: "Is resin bound surfacing permeable?",
        answer:
          "Resin bound surfacing can allow water to drain through where it is correctly specified and installed over a suitable permeable sub-base. Ground conditions and site drainage are assessed as part of every quotation.",
      },
      {
        question: "How do I maintain a resin bound driveway?",
        answer:
          "Regular sweeping and occasional washing down will help keep the surface looking its best. We provide maintenance guidance after installation.",
      },
      {
        question: "Are you an accredited resin bound installer?",
        answer:
          "Yes. LEGG Surfacing Ltd is a VUBA accredited installer, giving us access to VUBA's full resin bound surfacing product range — including their extensive collection of exclusive aggregate blends — for projects on the Isle of Man.",
      },
    ],
    metaDescription:
      "VUBA accredited resin bound surfacing for driveways, paths and patios across the Isle of Man. Attractive, durable finishes with a choice of colours and aggregates from LEGG Surfacing Ltd.",
  },
  {
    slug: "tarmac-driveways",
    name: "Tarmac Driveways",
    shortName: "Tarmac Driveways",
    tagline: "Durable, practical driveway surfacing and resurfacing",
    heroImage: "/tarmac-driveways.png",
    heroImageAlt: "Freshly laid tarmac driveway at a residential property",
    cardImage: "/tarmac-driveways.png",
    cardImageAlt: "Tarmac driveway installation",
    summary:
      "Hard-wearing tarmac driveways and resurfacing for domestic and commercial properties, built to withstand everyday use and the Isle of Man climate.",
    intro: [
      "Tarmac remains one of the most practical and cost-effective surfacing options for driveways, offering a strong, durable finish that stands up well to vehicles, weather and daily wear.",
      "Whether you need a new driveway installed from scratch or an existing surface resurfaced, LEGG Surfacing prepares the ground properly and lays each driveway to a consistent, well-compacted finish designed to perform for years to come.",
      "We work on both domestic driveways and larger commercial surfacing projects, with every job assessed on-site to ensure the right sub-base, drainage falls and surface specification for the property.",
    ],
    applications: [
      "New driveway installations",
      "Driveway resurfacing and overlay",
      "Commercial car parks and forecourts",
      "Access roads to residential and commercial sites",
      "Pathways and side access areas",
    ],
    benefits: [
      {
        title: "Durable and practical",
        description:
          "A dense, well-compacted tarmac surface provides a strong, hard-wearing driveway able to cope with daily vehicle use.",
      },
      {
        title: "Quick to install",
        description:
          "Compared with many alternative surfaces, tarmac can be installed relatively quickly, minimising disruption to your property.",
      },
      {
        title: "Smart, consistent finish",
        description:
          "A properly laid and compacted tarmac surface gives a clean, uniform appearance that suits a wide range of properties.",
      },
      {
        title: "Resurfacing option for tired driveways",
        description:
          "Existing cracked, worn or uneven driveways can often be resurfaced, refreshing the look and performance of the area.",
      },
    ],
    propertyTypes: [
      "Residential driveways of all sizes",
      "Commercial premises and business forecourts",
      "Rental and multi-unit residential developments",
      "Properties requiring heavier-duty vehicle access",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We assess the existing surface or ground conditions, drainage and access requirements to plan the right specification.",
      },
      {
        title: "Excavation and groundwork",
        description:
          "Where required, the area is excavated to the correct depth and formation levels are set to allow for proper falls and drainage.",
      },
      {
        title: "Sub-base construction",
        description:
          "A suitable stone sub-base is laid and compacted to provide a stable foundation for the tarmac surface.",
      },
      {
        title: "Binder and surface course",
        description:
          "Tarmac layers are laid and compacted using appropriate plant and machinery to achieve a dense, even surface.",
      },
      {
        title: "Edging and finishing",
        description:
          "Edges are finished neatly, with kerbing or edge restraints installed where specified, and the site left clean and tidy.",
      },
    ],
    considerations: [
      "Correct drainage falls are essential to prevent standing water on the finished surface.",
      "Sub-base depth and construction should reflect the intended use, particularly for driveways taking heavier vehicles.",
      "Newly laid tarmac should be allowed to cure before heavy use.",
    ],
    faqs: [
      {
        question: "How long does a tarmac driveway take to install?",
        answer:
          "Timescales depend on the size of the driveway and the groundwork required, but tarmac is generally quicker to install than many alternative surfaces. We confirm an estimated timescale as part of your quotation.",
      },
      {
        question: "Can an existing driveway be resurfaced rather than replaced?",
        answer:
          "In many cases, yes. We assess the condition of the existing surface and sub-base on-site to advise whether resurfacing or a full reconstruction is the right approach.",
      },
      {
        question: "How soon can I use my new tarmac driveway?",
        answer:
          "We will advise on appropriate curing times for your specific installation before handing the driveway back for use.",
      },
    ],
    metaDescription:
      "Tarmac driveway installation and resurfacing across the Isle of Man for domestic and commercial properties. Durable, professionally finished surfacing from LEGG Surfacing Ltd.",
  },
  {
    slug: "road-lane-surfacing",
    name: "Road & Lane Surfacing",
    shortName: "Road & Lane Surfacing",
    tagline: "Private roads, access lanes and highway access surfacing",
    heroImage: "/road-lane-surfacing.png",
    heroImageAlt: "Newly surfaced private access lane leading to a property",
    cardImage: "/road-lane-surfacing.png",
    cardImageAlt: "Road and lane surfacing project",
    summary:
      "Surfacing and resurfacing for private roads, access lanes and highway access points, built to handle sustained vehicle traffic.",
    intro: [
      "Private roads, shared access lanes and highway access points demand a more robust approach to surfacing than a typical driveway, with greater emphasis on sub-base construction, drainage and long-term durability under sustained traffic.",
      "LEGG Surfacing undertakes road and lane surfacing projects across the Isle of Man, from resurfacing a worn access lane to larger-scale projects associated with new or upgraded highway access.",
      "Every project begins with a thorough site assessment, as the ground conditions, traffic loading and existing drainage arrangements all influence the right specification and installation approach.",
    ],
    applications: [
      "Private road resurfacing",
      "Shared access lanes to residential or agricultural properties",
      "Highway access surfacing for new or altered entrances",
      "Estate and development roads",
      "Long driveways and multi-property access routes",
    ],
    benefits: [
      {
        title: "Built for sustained vehicle use",
        description:
          "Road and lane surfacing is specified with the expected traffic in mind, from occasional access to regular daily use.",
      },
      {
        title: "Improved access and safety",
        description:
          "Resurfacing a worn or potholed lane improves the ride quality and safety of the route for vehicles and pedestrians alike.",
      },
      {
        title: "Long-term durability",
        description:
          "A properly constructed sub-base and surface course are key to a road or lane surface that performs well over the years ahead.",
      },
      {
        title: "Suited to larger-scale projects",
        description:
          "Our plant and approach are suited to larger areas of surfacing beyond a standard residential driveway.",
      },
    ],
    propertyTypes: [
      "Private roads serving multiple properties",
      "Agricultural and rural access lanes",
      "New or altered highway access points",
      "Housing developments and estate roads",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We review the existing road or lane, traffic use, drainage and access requirements to establish the right scope of works.",
      },
      {
        title: "Groundworks and preparation",
        description:
          "Excavation, levelling and drainage preparation are carried out as required ahead of surfacing.",
      },
      {
        title: "Sub-base construction",
        description:
          "A robust sub-base is constructed and compacted to suit the anticipated traffic loading for the road or lane.",
      },
      {
        title: "Surfacing",
        description:
          "The surface course is laid and compacted using appropriate machinery to achieve a consistent, durable finish.",
      },
      {
        title: "Finishing and handover",
        description:
          "Edges, verges and any associated details are finished before the completed road or lane is handed back for use.",
      },
    ],
    considerations: [
      "Larger surfacing projects should factor in traffic management and access during the works.",
      "Drainage and water run-off along the length of the road or lane are considered as part of every assessment.",
      "Where a project involves highway access, early assessment helps ensure the works meet the practical requirements of the site.",
    ],
    faqs: [
      {
        question: "Do you resurface private and shared access roads?",
        answer:
          "Yes, we carry out resurfacing for private roads and shared access lanes serving residential, agricultural and commercial properties.",
      },
      {
        question: "Can you handle highway access surfacing?",
        answer:
          "Yes, we undertake surfacing works associated with new or altered highway access points, assessed on a project-by-project basis.",
      },
      {
        question: "How do you price larger road and lane projects?",
        answer:
          "We visit the site to assess the length, condition, ground conditions and access before providing a detailed quotation.",
      },
    ],
    metaDescription:
      "Private road, access lane and highway access surfacing across the Isle of Man from LEGG Surfacing Ltd. Durable resurfacing built for sustained vehicle use.",
  },
  {
    slug: "micro-asphalt",
    name: "Micro Asphalt",
    shortName: "Micro Asphalt",
    tagline: "Specialist surface treatment for roads, lanes and car parks",
    heroImage: "/micro-asphalt.png",
    heroImageAlt: "Micro asphalt surface treatment applied to a private access road",
    cardImage: "/micro-asphalt.png",
    cardImageAlt: "Micro asphalt surface treatment",
    summary:
      "A specialist cold-applied surface treatment used to refresh and protect existing road, lane and car park surfaces.",
    intro: [
      "Micro asphalt is a specialist, thin surface treatment applied to existing road, lane or car park surfaces to refresh their condition and extend their service life. It is typically used as a preventative or restorative treatment rather than a full reconstruction.",
      "Because it is applied as a thinner surface treatment, micro asphalt is not suitable for every surface. A proper assessment of the existing surface condition, underlying structure and drainage is essential before deciding whether it is the right solution for a particular site.",
      "LEGG Surfacing carries out a suitability assessment for every potential micro asphalt project, ensuring the treatment is appropriate before any work is scheduled.",
    ],
    applications: [
      "Resurfacing existing roads and lanes in reasonable structural condition",
      "Car park surface refreshment",
      "Estate roads requiring a cost-effective surface renewal",
      "Preventative surface treatment programmes",
    ],
    benefits: [
      {
        title: "Refreshes existing surfaces",
        description:
          "Micro asphalt can restore the appearance and skid resistance of a worn surface without a full reconstruction.",
      },
      {
        title: "Targeted, specialist application",
        description:
          "As a specific surface treatment, it is applied where it is the right technical fit for the existing surface condition.",
      },
      {
        title: "Can extend surface service life",
        description:
          "Used appropriately, micro asphalt can help protect and extend the life of an existing surface.",
      },
    ],
    propertyTypes: [
      "Existing estate and access roads",
      "Car parks in reasonable structural condition",
      "Private roads suitable for a surface treatment rather than reconstruction",
    ],
    process: [
      {
        title: "Suitability assessment",
        description:
          "We inspect the existing surface and underlying structure to confirm whether micro asphalt is an appropriate treatment for the site.",
      },
      {
        title: "Surface preparation",
        description:
          "The existing surface is cleaned and prepared, with any necessary repairs carried out ahead of treatment.",
      },
      {
        title: "Application",
        description:
          "The micro asphalt treatment is applied using appropriate specialist equipment.",
      },
      {
        title: "Finishing and handover",
        description:
          "The treated surface is left to cure in line with guidance before being reopened to traffic.",
      },
    ],
    considerations: [
      "Not every surface is suitable for micro asphalt — a proper assessment is essential before proceeding.",
      "The treatment is best suited to surfaces in reasonable underlying structural condition.",
      "Curing times should be followed before the surface is reopened to traffic.",
    ],
    faqs: [
      {
        question: "What is micro asphalt used for?",
        answer:
          "It is a specialist surface treatment applied to existing roads, lanes or car parks to refresh their condition and help extend their service life.",
      },
      {
        question: "Is micro asphalt suitable for every surface?",
        answer:
          "No. Suitability depends on the condition of the existing surface and underlying structure, which is why we carry out an assessment before recommending this treatment.",
      },
      {
        question: "How is micro asphalt different from a full resurfacing?",
        answer:
          "Micro asphalt is a thinner surface treatment applied to an existing surface in reasonable condition, rather than a full reconstruction of the road or driveway.",
      },
    ],
    metaDescription:
      "Micro asphalt surface treatment for roads, lanes and car parks on the Isle of Man. Specialist assessment and application from LEGG Surfacing Ltd.",
  },
  {
    slug: "groundworks",
    name: "Drainage & Groundworks",
    shortName: "Drainage & Groundworks",
    tagline: "Drainage, excavation and site preparation for surfacing projects",
    heroImage: "/groundworks.png",
    heroImageAlt: "Excavation and groundwork in progress ahead of surfacing",
    cardImage: "/groundworks.png",
    cardImageAlt: "Groundwork and excavation ahead of surfacing",
    summary:
      "Excavation, drainage and site preparation that forms the foundation of every quality surfacing project.",
    intro: [
      "The quality and longevity of any surfacing project depends on the groundwork and drainage beneath it. Proper excavation, levelling, sub-base construction and drainage provision are essential steps that are often unseen once a project is complete, but are fundamental to its performance.",
      "LEGG Surfacing carries out drainage and groundwork associated with our surfacing projects, from excavating and preparing a driveway base to wider site preparation and drainage runs ahead of tarmac, resin bound or road surfacing works.",
      "Surface water drainage — including channel drains, soakaways and falls to existing drainage points — is assessed and prepared as part of the groundwork, in line with the specific requirements of the site.",
    ],
    applications: [
      "Excavation and site clearance ahead of surfacing",
      "Sub-base preparation for driveways, roads and lanes",
      "Levelling and formation of new surfacing areas",
      "Surface water drainage, channel drains and soakaways",
      "Drainage preparation associated with surfacing projects",
    ],
    benefits: [
      {
        title: "A solid foundation for every surface",
        description:
          "Correct groundwork is the foundation of a durable, long-lasting surfacing installation, whatever the finished surface type.",
      },
      {
        title: "Tailored to each site",
        description:
          "Ground conditions vary from property to property, so groundwork and drainage are assessed and specified individually for every project.",
      },
      {
        title: "Drainage considered from the outset",
        description:
          "Channel drains, soakaways and falls to existing drainage points are factored into the groundwork to help manage surface water appropriately.",
      },
    ],
    propertyTypes: [
      "Any property undertaking new driveway, road or lane surfacing",
      "Sites requiring excavation or level changes ahead of surfacing",
      "Properties with existing surface water or drainage issues",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We assess ground conditions, existing levels and drainage before planning the groundwork required for the project.",
      },
      {
        title: "Excavation",
        description:
          "The site is excavated to the required depth and formation levels using appropriate machinery.",
      },
      {
        title: "Drainage installation",
        description:
          "Where required, channel drains, soakaways or connections to existing drainage are installed as part of the groundwork.",
      },
      {
        title: "Sub-base construction",
        description:
          "A suitable sub-base is laid, graded and compacted to provide a stable foundation for the surfacing to follow.",
      },
      {
        title: "Handover to surfacing",
        description:
          "Once groundwork and drainage are complete and levels confirmed, the site is ready for the specified surfacing to be installed.",
      },
    ],
    faqs: [
      {
        question: "Is groundwork included in your surfacing quotations?",
        answer:
          "Groundwork and drainage requirements are assessed as part of every site visit and included in your quotation where necessary for the surfacing to be installed correctly.",
      },
      {
        question: "Can you carry out drainage and groundwork on its own?",
        answer:
          "Our drainage and groundwork is generally undertaken as part of an associated surfacing project. Please get in touch to discuss your specific requirements.",
      },
      {
        question: "Can you help with an existing drainage or standing water problem?",
        answer:
          "We assess drainage as part of every site visit, including sites with existing surface water issues, and can advise on a suitable solution as part of your project.",
      },
    ],
    metaDescription:
      "Drainage, excavation and groundwork associated with driveway, road and lane surfacing projects on the Isle of Man, from LEGG Surfacing Ltd.",
  },
  {
    slug: "line-marking",
    name: "Line Marking",
    shortName: "Line Marking",
    tagline: "Car park, road and sports surface line marking",
    heroImage: "/gallery/700096847_1559948936139518_4371628849745171777_n.jpg",
    heroImageAlt: "Resurfaced tarmac car park with court markings",
    cardImage: "/gallery/689015908_1558824119585333_3151281941379597831_n.jpg",
    cardImageAlt: "Resurfaced tarmac car park with parking bay lines",
    summary:
      "Clear, durable line marking for car parks, access roads and sports surfaces, often carried out alongside our tarmac and surfacing projects.",
    intro: [
      "Clear, well-maintained line marking helps car parks, access roads and sports surfaces operate safely and efficiently, from defining parking bays to marking out pedestrian routes and court lines.",
      "LEGG Surfacing carries out line marking as part of our tarmac and surfacing projects, as well as refreshing the markings on existing car parks and surfaces where the layout remains suitable.",
      "Every line marking project starts with confirming the required layout, line widths and any specific standards that apply to the site before work begins.",
    ],
    applications: [
      "Car park bay marking and numbering",
      "Disabled bay and accessibility markings",
      "Directional arrows and pedestrian crossing points",
      "Sports court and playground markings",
      "Warehouse and yard floor marking",
    ],
    benefits: [
      {
        title: "Clear, organised parking and access",
        description:
          "Well-defined bays and routes make car parks and access roads easier and safer to use.",
      },
      {
        title: "Durable line marking paint",
        description:
          "We use line marking paint suited to the surface and expected level of use, helping markings stay visible for longer.",
      },
      {
        title: "Carried out alongside resurfacing",
        description:
          "Line marking is often completed as part of a wider tarmac or car park resurfacing project, giving a complete, finished result.",
      },
    ],
    propertyTypes: [
      "Commercial and retail car parks",
      "Schools, playgrounds and sports courts",
      "Warehouses, yards and industrial sites",
      "Residential developments with shared parking",
    ],
    process: [
      {
        title: "Layout confirmation",
        description:
          "We confirm the required bay layout, line widths and any markings specific to the site before work begins.",
      },
      {
        title: "Surface preparation",
        description:
          "The surface is cleaned and, where new, allowed to cure so that markings adhere properly.",
      },
      {
        title: "Setting out",
        description:
          "Lines and markings are measured and set out accurately before painting.",
      },
      {
        title: "Application",
        description:
          "Line marking paint is applied using appropriate equipment for a clean, consistent finish.",
      },
      {
        title: "Drying and handover",
        description:
          "Markings are left to dry before the area is reopened for use.",
      },
    ],
    considerations: [
      "New tarmac surfaces are usually left to cure before line marking is applied.",
      "Line marking can often be combined with a resurfacing or car park refresh project.",
      "Any specific regulatory or accessibility requirements for the site should be confirmed before work begins.",
    ],
    faqs: [
      {
        question: "Can you refresh the line marking on an existing car park?",
        answer:
          "Yes, we can repaint existing line marking where the surface and layout remain suitable, or combine this with a wider resurfacing project.",
      },
      {
        question: "Do you mark out disabled parking bays?",
        answer:
          "Yes, we can mark out disabled bays and other accessibility markings as part of your car park layout.",
      },
      {
        question: "Can line marking be done after a new tarmac surface is laid?",
        answer:
          "Yes, new tarmac is typically left to cure for a period before line marking is applied, which we factor into your project timescale.",
      },
    ],
    metaDescription:
      "Car park, road and sports surface line marking from LEGG Surfacing Ltd, carried out on the Isle of Man alongside tarmac and surfacing projects.",
  },
  {
    slug: "pattern-imprinted-concrete",
    name: "Pattern Imprinted Concrete",
    shortName: "Pattern Imprinted Concrete",
    tagline: "Decorative, durable concrete surfacing for driveways and patios",
    heroImage: "/groundworks.png",
    heroImageAlt: "Site preparation and groundwork ahead of a surfacing project",
    cardImage: "/groundworks.png",
    cardImageAlt: "Site preparation ahead of a surfacing project",
    summary:
      "A decorative, textured concrete surface that replicates the look of block paving, stone or brick, laid as a durable single-piece surface.",
    intro: [
      "Pattern imprinted concrete is a decorative surfacing option that uses textured moulds and colour to give a poured concrete surface the appearance of block paving, natural stone or brick, while retaining the strength and durability of concrete.",
      "Because it is laid as a single, continuous surface rather than individual units, pattern imprinted concrete can offer a long-lasting, low-maintenance alternative to traditional block paving.",
      "LEGG Surfacing assesses every pattern imprinted concrete project on-site, as ground conditions, falls and the chosen pattern and colour all affect the specification and installation.",
    ],
    applications: [
      "Domestic driveways and patios",
      "Pathways and garden surfaces",
      "Commercial entrances and forecourts",
      "Pool surrounds and feature areas",
    ],
    benefits: [
      {
        title: "Decorative finish, durable surface",
        description:
          "Replicates the appearance of block paving, stone or brick while being laid as a strong, continuous concrete surface.",
      },
      {
        title: "Range of patterns and colours",
        description:
          "A variety of patterns and colour finishes are available to suit the style of your property.",
      },
      {
        title: "Low ongoing maintenance",
        description:
          "With no individual units to come loose or shift over time, pattern imprinted concrete can offer a low-maintenance surface when properly installed.",
      },
    ],
    propertyTypes: [
      "Detached and semi-detached homes",
      "New-build and period properties",
      "Commercial premises and entrances",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We assess the site, existing levels and drainage, and discuss pattern and colour options before recommending a specification.",
      },
      {
        title: "Excavation and preparation",
        description:
          "The area is excavated and a suitable sub-base is laid and compacted ahead of the concrete pour.",
      },
      {
        title: "Concrete laying",
        description:
          "Concrete is poured, levelled and colour is applied in line with the chosen specification.",
      },
      {
        title: "Texturing and patterning",
        description:
          "Textured moulds are used to imprint the chosen pattern into the surface while the concrete is workable.",
      },
      {
        title: "Sealing and handover",
        description:
          "The finished surface is sealed and left to cure before being handed over, with maintenance guidance provided.",
      },
    ],
    considerations: [
      "Pattern and colour selection is agreed with you before installation begins.",
      "Correct sub-base preparation and falls are essential to the long-term performance of the finished surface.",
      "Re-sealing the surface periodically helps maintain its appearance over time.",
    ],
    faqs: [
      {
        question: "How is pattern imprinted concrete different from block paving?",
        answer:
          "Pattern imprinted concrete is laid as a single, continuous surface that is textured and coloured to resemble block paving, stone or brick, rather than being made up of individual units.",
      },
      {
        question: "Can I choose the pattern and colour?",
        answer:
          "Yes, a range of patterns and colour finishes are available, and we'll talk you through the options during your site visit.",
      },
      {
        question: "Does pattern imprinted concrete need sealing?",
        answer:
          "Yes, the surface is sealed as part of installation, and periodic re-sealing helps maintain its appearance over time.",
      },
    ],
    metaDescription:
      "Pattern imprinted concrete driveways and patios on the Isle of Man from LEGG Surfacing Ltd. Decorative, durable concrete surfacing in a range of patterns and colours.",
  },
  {
    slug: "surface-dressing",
    name: "Surface Dressing",
    shortName: "Surface Dressing",
    tagline: "Surface treatment to restore skid resistance and weatherproof roads",
    heroImage: "/gallery/702800727_1563598929107852_1268388369450357139_n.jpg",
    heroImageAlt: "Resurfaced lane leading to a rural property",
    cardImage: "/gallery/702800727_1563598929107852_1268388369450357139_n.jpg",
    cardImageAlt: "Resurfaced lane following surface treatment",
    summary:
      "A surface treatment applied to existing roads and lanes to restore skid resistance and seal the surface against water ingress.",
    intro: [
      "Surface dressing is a surface treatment in which a layer of binder is applied to an existing road or lane, followed by a layer of stone chippings, which is then rolled in. It is commonly used to restore skid resistance and weatherproof a surface that is structurally sound but showing signs of wear.",
      "As a surface treatment rather than a full reconstruction, surface dressing is best suited to roads and lanes in reasonable underlying structural condition, so a proper assessment is carried out before recommending it.",
      "LEGG Surfacing carries out surface dressing on private roads, lanes and associated surfaces across the Isle of Man, assessing suitability on-site before any work is scheduled.",
    ],
    applications: [
      "Private road and lane surface treatment",
      "Estate roads requiring weatherproofing",
      "Restoring skid resistance on worn surfaces",
      "Preventative surface treatment programmes",
    ],
    benefits: [
      {
        title: "Restores skid resistance",
        description:
          "A fresh layer of chippings can improve grip on a road or lane surface that has become smooth or worn over time.",
      },
      {
        title: "Weatherproofs the existing surface",
        description:
          "Sealing the surface can help prevent water ingress, reducing the risk of further deterioration.",
      },
      {
        title: "Cost-effective compared to reconstruction",
        description:
          "Used appropriately, surface dressing can extend the life of an existing road or lane without a full rebuild.",
      },
    ],
    propertyTypes: [
      "Private roads and estate roads",
      "Agricultural and rural access lanes",
      "Existing surfaces in reasonable structural condition",
    ],
    process: [
      {
        title: "Suitability assessment",
        description:
          "We inspect the existing surface and underlying structure to confirm whether surface dressing is appropriate for the site.",
      },
      {
        title: "Surface preparation",
        description:
          "The existing surface is cleaned and any necessary localised repairs are carried out ahead of treatment.",
      },
      {
        title: "Binder application",
        description:
          "A layer of binder is applied evenly across the surface using appropriate specialist equipment.",
      },
      {
        title: "Chipping and rolling",
        description:
          "Stone chippings are spread over the binder and rolled in to achieve an even, bonded finish.",
      },
      {
        title: "Sweeping and handover",
        description:
          "Any loose chippings are swept from the surface before it is reopened to traffic, with guidance on initial care.",
      },
    ],
    considerations: [
      "Not every surface is suitable for surface dressing — a proper assessment is essential before proceeding.",
      "Some loose chippings are normal immediately after treatment and are swept up as part of the process.",
      "Weather conditions can affect the timing of surface dressing works.",
    ],
    faqs: [
      {
        question: "What does surface dressing involve?",
        answer:
          "A layer of binder is applied to the existing road or lane, followed by stone chippings which are rolled in, to restore skid resistance and weatherproof the surface.",
      },
      {
        question: "Is surface dressing suitable for every road or lane?",
        answer:
          "No. Suitability depends on the condition of the existing surface and underlying structure, which is why we assess every site before recommending this treatment.",
      },
      {
        question: "Will there be loose chippings after surface dressing?",
        answer:
          "Some loose chippings are normal immediately after treatment. These are swept from the surface as part of the process, though some residual chippings can be expected for a short period afterwards.",
      },
    ],
    metaDescription:
      "Surface dressing for private roads and lanes on the Isle of Man from LEGG Surfacing Ltd. Restores skid resistance and weatherproofs existing surfaces.",
  },
  {
    slug: "playground-safety-surfacing",
    name: "Playground Safety Rubber Surfacing",
    shortName: "Playground Safety Surfacing",
    tagline: "Impact-absorbing rubber surfacing for playgrounds and play areas",
    heroImage: "/gallery/833041063_1700787718722305_6934058720639579370_n.jpg",
    heroImageAlt: "Playground safety surfacing beneath a slide",
    cardImage: "/gallery/839032908_1700787762055634_5167709595136696303_n.jpg",
    cardImageAlt: "Playground safety surfacing with climbing frame",
    summary:
      "Impact-absorbing rubber safety surfacing for playgrounds and play areas, installed to suit the equipment and critical fall height of the site.",
    intro: [
      "Playground safety surfacing is a specialist impact-absorbing rubber surface designed to reduce the risk of injury from falls around playground and play equipment.",
      "The depth and specification of the surfacing is matched to the critical fall height of the equipment it surrounds, so a proper assessment of the play area and equipment is carried out before installation.",
      "LEGG Surfacing has installed playground safety surfacing for schools and play areas across the Isle of Man, working around existing equipment and site constraints.",
    ],
    applications: [
      "School playgrounds and play areas",
      "Public park play equipment",
      "Nursery and early years outdoor areas",
      "Residential and community play spaces",
    ],
    benefits: [
      {
        title: "Impact-absorbing safety surface",
        description:
          "Designed to help reduce the risk of injury from falls around playground and play equipment.",
      },
      {
        title: "Specified to the equipment on site",
        description:
          "Surfacing depth is matched to the critical fall height of the equipment it surrounds.",
      },
      {
        title: "Durable, low-maintenance finish",
        description:
          "A hard-wearing rubber surface designed to withstand regular play and weather exposure.",
      },
    ],
    propertyTypes: [
      "Schools and nurseries",
      "Public parks and play areas",
      "Community and residential play spaces",
    ],
    process: [
      {
        title: "Site and equipment assessment",
        description:
          "We assess the play area, existing equipment and critical fall heights to determine the required surfacing specification.",
      },
      {
        title: "Groundwork and preparation",
        description:
          "The area is excavated and prepared, with a suitable sub-base laid ahead of the safety surface.",
      },
      {
        title: "Base layer installation",
        description:
          "An impact-absorbing base layer is laid to the depth required for the equipment's critical fall height.",
      },
      {
        title: "Wearing course and finish",
        description:
          "A durable wearing course is applied on top, often in a chosen colour or pattern.",
      },
      {
        title: "Curing and handover",
        description:
          "The surface is left to cure before the play area is reopened for use.",
      },
    ],
    considerations: [
      "Safety surfacing depth is determined by the critical fall height of the equipment it surrounds.",
      "Existing equipment and site access are assessed before quoting.",
      "The surface should be left to cure fully before the play area is reopened.",
    ],
    faqs: [
      {
        question: "How is the depth of playground safety surfacing decided?",
        answer:
          "The required depth is based on the critical fall height of the play equipment it surrounds, which we assess as part of every site visit.",
      },
      {
        question: "Can you install safety surfacing around existing play equipment?",
        answer:
          "Yes, we regularly install playground safety surfacing around existing equipment, working carefully around the site constraints.",
      },
      {
        question: "Do you work with schools on playground surfacing projects?",
        answer:
          "Yes, we have carried out playground safety surfacing projects for schools and play areas across the Isle of Man.",
      },
    ],
    metaDescription:
      "Playground safety rubber surfacing for schools and play areas on the Isle of Man from LEGG Surfacing Ltd. Impact-absorbing surfacing specified to your equipment.",
  },
  {
    slug: "resin-bonded-high-friction-surfacing",
    name: "Resin-Bonded and High-Friction Surfacing",
    shortName: "Resin-Bonded & High-Friction",
    tagline: "Textured, skid-resistant surfacing for paths, roads and junctions",
    heroImage: "/gallery/833926071_1697029229098154_4475602817241088947_n.jpg",
    heroImageAlt: "Resurfaced residential road and footway",
    cardImage: "/gallery/833926071_1697029229098154_4475602817241088947_n.jpg",
    cardImageAlt: "Resurfaced road and footway",
    summary:
      "Textured resin-bonded and high-friction surfacing used to improve grip on paths, cycle routes, roads and junctions.",
    intro: [
      "Resin-bonded surfacing is created by scattering a loose aggregate onto a layer of resin, giving a textured, non-permeable surface — distinct from resin bound surfacing, where the aggregate and resin are mixed together before laying.",
      "High-friction surfacing uses a similar bonded-aggregate approach to significantly improve skid resistance at locations such as junctions, bends, pedestrian crossings and cycle routes.",
      "LEGG Surfacing assesses each resin-bonded and high-friction surfacing project on-site, as the application, aggregate and colour depend on the location and its specific skid-resistance requirements.",
    ],
    applications: [
      "Cycle paths and cycle lanes",
      "Pedestrian crossings and footways",
      "Road junctions and bends",
      "Bus stops and approach roads",
    ],
    benefits: [
      {
        title: "Improved skid resistance",
        description:
          "A textured, bonded-aggregate surface can significantly improve grip at junctions, bends and other higher-risk locations.",
      },
      {
        title: "Durable, bonded finish",
        description:
          "Aggregate is firmly bonded to the resin layer, creating a hard-wearing, textured surface.",
      },
      {
        title: "Colour options for visibility",
        description:
          "Coloured finishes can be used to highlight cycle routes, crossings or other areas where visibility is important.",
      },
    ],
    propertyTypes: [
      "Highways and junctions",
      "Cycle paths and cycle lanes",
      "Pedestrian crossings and footways",
      "Bus stops and approach roads",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We assess the location, existing surface and skid-resistance requirements before recommending a specification.",
      },
      {
        title: "Surface preparation",
        description:
          "The existing surface is cleaned and prepared to ensure good adhesion of the resin layer.",
      },
      {
        title: "Resin application",
        description:
          "A resin layer is applied to the prepared surface ahead of the aggregate being added.",
      },
      {
        title: "Aggregate application",
        description:
          "Aggregate is scattered onto the resin and bonded to form the textured, skid-resistant surface.",
      },
      {
        title: "Curing and handover",
        description:
          "The surface is left to cure before being reopened to traffic or pedestrian use.",
      },
    ],
    considerations: [
      "Resin-bonded surfacing is not permeable, unlike resin bound surfacing, due to the different application method.",
      "Suitable curing time should be allowed before the surface is reopened to traffic.",
      "The specific aggregate and colour used depend on the application and location.",
    ],
    faqs: [
      {
        question: "What's the difference between resin-bonded and resin bound surfacing?",
        answer:
          "Resin-bonded surfacing scatters loose aggregate onto a layer of resin, giving a textured, non-permeable finish, whereas resin bound surfacing mixes the aggregate and resin together before laying, giving a smooth, permeable finish.",
      },
      {
        question: "Where is high-friction surfacing typically used?",
        answer:
          "It is typically used at locations where improved skid resistance is important, such as junctions, bends, pedestrian crossings and cycle routes.",
      },
      {
        question: "Can high-friction surfacing be installed in a specific colour?",
        answer:
          "Yes, coloured finishes are available and are often used to highlight cycle routes or crossings where visibility is important.",
      },
    ],
    metaDescription:
      "Resin-bonded and high-friction surfacing on the Isle of Man from LEGG Surfacing Ltd, for paths, cycle routes, roads and junctions requiring improved skid resistance.",
  },
  {
    slug: "fencing",
    name: "Fencing",
    shortName: "Fencing",
    tagline: "Fencing installation as part of our dedicated landscaping team",
    heroImage: "/gallery/828811109_1701841621950248_1030150285131794722_n.jpg",
    heroImageAlt: "Tarmac driveway alongside a boundary fence",
    cardImage: "/gallery/828811109_1701841621950248_1030150285131794722_n.jpg",
    cardImageAlt: "Boundary fence alongside a driveway",
    summary:
      "Fencing installation from our dedicated landscaping team, often completed alongside a wider driveway, groundwork or surfacing project.",
    intro: [
      "A well-installed fence defines boundaries, improves privacy and security, and finishes off a property's outdoor space. Fencing is installed by our dedicated landscaping team, who work closely with our surfacing and groundwork teams on wider projects.",
      "Because fencing is often installed alongside a new driveway, patio or landscaping project, having one company co-ordinate both the surfacing and the fencing means boundaries, gates and finishing details are planned together from the outset.",
      "Every fencing project is assessed on-site to account for ground conditions, boundary lines and the style of fencing that best suits the property.",
    ],
    applications: [
      "Boundary and garden fencing",
      "Fencing alongside new driveways and landscaping projects",
      "Gates and access points",
      "Replacement of worn or damaged fencing",
    ],
    benefits: [
      {
        title: "Part of a dedicated landscaping team",
        description:
          "Fencing is carried out by our dedicated landscaping team, who work alongside our surfacing and groundwork teams on combined projects.",
      },
      {
        title: "One company, one project",
        description:
          "Co-ordinating fencing with your driveway or landscaping project means every aspect is planned and completed together.",
      },
      {
        title: "Suited to your boundary and property",
        description:
          "Fencing style and specification are assessed on-site to suit the ground conditions and the look of your property.",
      },
    ],
    propertyTypes: [
      "Residential gardens and boundaries",
      "Properties undertaking a wider driveway or landscaping project",
      "Commercial and site boundary fencing",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We assess the boundary line, ground conditions and your requirements before recommending a suitable fencing specification.",
      },
      {
        title: "Groundwork and post installation",
        description:
          "Posts are set into the ground to the appropriate depth, with concrete or post supports used as required.",
      },
      {
        title: "Panel or fencing installation",
        description:
          "Fencing panels or boards are fitted to the posts to complete the boundary.",
      },
      {
        title: "Gates and finishing details",
        description:
          "Gates and any finishing details are fitted and adjusted as required.",
      },
      {
        title: "Handover",
        description:
          "The completed fencing is checked and handed over, with guidance on care where relevant.",
      },
    ],
    faqs: [
      {
        question: "Can you install fencing alongside a new driveway project?",
        answer:
          "Yes, our dedicated landscaping team regularly installs fencing as part of a wider driveway, groundwork or landscaping project, so everything is planned together.",
      },
      {
        question: "Do you replace existing damaged fencing?",
        answer:
          "Yes, we can assess and replace worn or damaged fencing as a standalone project or alongside other works.",
      },
    ],
    metaDescription:
      "Fencing installation on the Isle of Man from LEGG Surfacing Ltd's dedicated landscaping team, often completed alongside driveway and groundwork projects.",
  },
  {
    slug: "artificial-grass-installation",
    name: "Artificial Grass Installation",
    shortName: "Artificial Grass",
    tagline: "Low-maintenance artificial grass from our landscaping team",
    heroImage: "/gallery/838219658_1699056828895394_7567123399171245414_n.jpg",
    heroImageAlt: "Artificial grass and gravel landscaping works",
    cardImage: "/gallery/838219658_1699056828895394_7567123399171245414_n.jpg",
    cardImageAlt: "Artificial grass installation alongside gravel landscaping",
    summary:
      "Low-maintenance artificial grass installed by our dedicated landscaping team, suited to gardens, play areas and low-traffic commercial spaces.",
    intro: [
      "Artificial grass offers a consistently green, low-maintenance alternative to natural lawn, installed over a properly prepared base to give a flat, durable and realistic finish.",
      "Our dedicated landscaping team installs artificial grass as a standalone project or as part of a wider garden or driveway landscaping scheme, allowing the whole outdoor space to be finished by one company.",
      "A proper base build-up and drainage are essential to a good artificial grass installation, so every site is assessed before work begins.",
    ],
    applications: [
      "Garden lawns and borders",
      "Play areas and family gardens",
      "Low-traffic commercial and communal areas",
      "Areas combined with resin bound, paving or decking",
    ],
    benefits: [
      {
        title: "Low-maintenance, year-round finish",
        description:
          "Artificial grass stays looking green and tidy without mowing, feeding or the usual upkeep of a natural lawn.",
      },
      {
        title: "Installed by our landscaping team",
        description:
          "As part of our dedicated landscaping offering, artificial grass can be installed alongside fencing, paving or other garden works.",
      },
      {
        title: "Properly prepared base",
        description:
          "A correctly prepared sub-base and drainage are key to a flat, long-lasting artificial grass installation.",
      },
    ],
    propertyTypes: [
      "Residential gardens of all sizes",
      "Family homes with play areas",
      "Commercial and communal outdoor spaces",
    ],
    process: [
      {
        title: "Site assessment",
        description:
          "We assess the area, existing ground conditions and drainage before recommending a suitable base specification.",
      },
      {
        title: "Excavation and base preparation",
        description:
          "The existing lawn or surface is removed and a suitable permeable sub-base is laid and compacted.",
      },
      {
        title: "Edging and preparation",
        description:
          "Edging is installed to contain the base and define the boundary of the artificial grass area.",
      },
      {
        title: "Laying the artificial grass",
        description:
          "Artificial grass is rolled out, joined where necessary and secured around the edges for a neat, flat finish.",
      },
      {
        title: "Finishing and handover",
        description:
          "Infill is applied where specified and the area is brushed and checked before handover.",
      },
    ],
    faqs: [
      {
        question: "Can artificial grass be installed alongside other landscaping works?",
        answer:
          "Yes, our landscaping team regularly installs artificial grass alongside fencing, paving and other garden works as part of a combined project.",
      },
      {
        question: "Does artificial grass drain properly?",
        answer:
          "When installed over a correctly prepared permeable sub-base, artificial grass is designed to allow water to drain through rather than pool on the surface.",
      },
    ],
    metaDescription:
      "Artificial grass installation on the Isle of Man from LEGG Surfacing Ltd's dedicated landscaping team, for gardens, play areas and commercial spaces.",
  },
  {
    slug: "landscaping",
    name: "General Landscaping Services",
    shortName: "Landscaping",
    tagline: "A dedicated landscaping team for the finishing touches to your project",
    heroImage: "/gallery/825328781_1701841705283573_777714722802027712_n.jpg",
    heroImageAlt: "Site preparation works ahead of resurfacing",
    cardImage: "/gallery/825328781_1701841705283573_777714722802027712_n.jpg",
    cardImageAlt: "Site and landscaping preparation works",
    summary:
      "General landscaping from our dedicated landscaping team, bringing together fencing, artificial grass and finishing touches alongside your surfacing project.",
    intro: [
      "Alongside our surfacing and groundwork services, LEGG Surfacing has a dedicated landscaping team covering fencing, artificial grass installation and general landscaping works.",
      "Having a dedicated landscaping team means customers can have every aspect of their project completed by one company — from groundwork and surfacing through to fencing, artificial grass and the finishing touches — rather than co-ordinating multiple separate contractors.",
      "General landscaping work is scoped on a project-by-project basis, so please get in touch to discuss what you have in mind alongside your surfacing or groundwork project.",
    ],
    applications: [
      "Garden tidy-ups and general landscaping works",
      "Landscaping alongside a new driveway or patio",
      "Boundary and garden finishing touches",
      "Combined projects covering groundwork, surfacing and landscaping",
    ],
    benefits: [
      {
        title: "One company for the whole project",
        description:
          "Groundwork, surfacing, fencing, artificial grass and general landscaping can all be delivered by the same team.",
      },
      {
        title: "A dedicated landscaping team",
        description:
          "Our landscaping team works alongside our surfacing and groundwork teams, so projects are planned and finished together.",
      },
      {
        title: "Finishing touches, properly planned",
        description:
          "Landscaping details are considered from the outset of a project rather than added on as an afterthought.",
      },
    ],
    propertyTypes: [
      "Residential gardens undertaking a wider project",
      "New-build and renovation properties",
      "Commercial grounds and communal areas",
    ],
    process: [
      {
        title: "Discuss your project",
        description:
          "Get in touch to talk through your surfacing, groundwork and landscaping requirements together.",
      },
      {
        title: "Site assessment",
        description:
          "We visit the site to assess ground conditions and discuss the scope of the landscaping works alongside any surfacing or groundwork.",
      },
      {
        title: "Quotation",
        description:
          "You'll receive a quotation covering the full scope of works agreed, whether that's surfacing alone or a combined project.",
      },
      {
        title: "Co-ordinated installation",
        description:
          "Groundwork, surfacing and landscaping elements are carried out in a logical sequence by our teams.",
      },
      {
        title: "Handover",
        description:
          "The completed project is handed over once all agreed works, including the finishing landscaping touches, are complete.",
      },
    ],
    faqs: [
      {
        question: "Can you handle both the surfacing and the landscaping for my project?",
        answer:
          "Yes, having a dedicated landscaping team alongside our surfacing and groundwork teams means we can deliver the whole project, from groundwork through to the finishing touches.",
      },
      {
        question: "What does general landscaping cover?",
        answer:
          "General landscaping is scoped on a project-by-project basis and can include garden tidy-ups, finishing touches and other works alongside your surfacing or groundwork project. Please get in touch to discuss your specific requirements.",
      },
    ],
    metaDescription:
      "General landscaping services on the Isle of Man from LEGG Surfacing Ltd's dedicated landscaping team, delivered alongside groundwork and surfacing projects.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
