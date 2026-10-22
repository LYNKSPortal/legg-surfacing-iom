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
    name: "Groundworks",
    shortName: "Groundworks",
    tagline: "Site preparation and associated groundwork for surfacing projects",
    heroImage: "/groundworks.png",
    heroImageAlt: "Excavation and groundwork in progress ahead of surfacing",
    cardImage: "/groundworks.png",
    cardImageAlt: "Groundwork and excavation ahead of surfacing",
    summary:
      "Excavation, site preparation and associated groundwork that forms the foundation of every quality surfacing project.",
    intro: [
      "The quality and longevity of any surfacing project depends on the groundwork beneath it. Proper excavation, levelling, sub-base construction and drainage preparation are essential steps that are often unseen once a project is complete, but are fundamental to its performance.",
      "LEGG Surfacing carries out groundwork associated with our surfacing projects, from excavating and preparing a driveway base to wider site preparation ahead of tarmac, resin bound or road surfacing works.",
      "Where drainage is relevant to a project, this is considered and prepared for as part of the groundwork, in line with the specific requirements of the site.",
    ],
    applications: [
      "Excavation and site clearance ahead of surfacing",
      "Sub-base preparation for driveways, roads and lanes",
      "Levelling and formation of new surfacing areas",
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
          "Ground conditions vary from property to property, so groundwork is assessed and specified individually for every project.",
      },
      {
        title: "Drainage considered from the outset",
        description:
          "Where relevant, drainage preparation is factored into the groundwork to help manage surface water appropriately.",
      },
    ],
    propertyTypes: [
      "Any property undertaking new driveway, road or lane surfacing",
      "Sites requiring excavation or level changes ahead of surfacing",
      "Projects with existing drainage considerations",
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
        title: "Sub-base construction",
        description:
          "A suitable sub-base is laid, graded and compacted to provide a stable foundation for the surfacing to follow.",
      },
      {
        title: "Drainage preparation",
        description:
          "Where applicable, drainage provisions are prepared as part of the groundwork ahead of the final surface being laid.",
      },
      {
        title: "Handover to surfacing",
        description:
          "Once groundwork is complete and levels confirmed, the site is ready for the specified surfacing to be installed.",
      },
    ],
    faqs: [
      {
        question: "Is groundwork included in your surfacing quotations?",
        answer:
          "Groundwork requirements are assessed as part of every site visit and included in your quotation where necessary for the surfacing to be installed correctly.",
      },
      {
        question: "Can you carry out groundwork and drainage preparation on its own?",
        answer:
          "Our groundwork is generally undertaken as part of an associated surfacing project. Please get in touch to discuss your specific requirements.",
      },
    ],
    metaDescription:
      "Excavation, site preparation and groundwork associated with driveway, road and lane surfacing projects on the Isle of Man, from LEGG Surfacing Ltd.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
