/**
 * Verified business information for LEGG Surfacing Ltd.
 * Keep this file as the single source of truth for contact
 * details and site-wide business facts.
 */

export const business = {
  name: "LEGG Surfacing Ltd",
  // Registered legal name per the Isle of Man Companies Registry.
  legalName: "LEGG Surfacing Limited",
  tagline: "Specialist Surfacing & Groundwork Contractors",
  addressLine1: "The Paddocks",
  postcode: "IM7 3BD",
  region: "Isle of Man",
  fullAddress: "The Paddocks, IM7 3BD, Isle of Man",
  // Verified via the Isle of Man Companies Registry.
  companyNumber: "134233C",
  companyRegistryType: "1931 Act Company",
  incorporationDate: "2021-01-05",
  registeredOfficeAddress:
    "Unit 229B, Jurby Industrial Estate, Jurby, IM7 3BD, Isle of Man",
  companyRegistryUrl:
    "https://services.gov.im/ded/services/companiesregistry/viewcompany.iom?Id=Cd8%2bfkBJgRBjMWLa3WNqLw%3d%3d",
  phoneDisplay: "+44 7624 326454",
  phoneHref: "tel:+447624326454",
  email: "thomasholmes@leggsurfacing.co.uk",
  emailHref: "mailto:thomasholmes@leggsurfacing.co.uk",
  website: "https://leggsurfacing.co.uk",
  websiteDisplay: "leggsurfacing.co.uk",
  facebookUrl: "https://www.facebook.com/leggsurfacing" as string | null,
  // Google Business Profile share link (confirmed listing).
  googleBusinessUrl: "https://share.google/ppz8HukNauN2d8UF7" as string | null,
  // Google Maps link using the known postcode. Should be replaced with the
  // confirmed pinned business location once verified.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Paddocks+IM7+3BD+Isle+of+Man",
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=The%20Paddocks%2C%20IM7%203BD%2C%20Isle%20of%20Man&t=&z=13&ie=UTF8&iwloc=&output=embed",
  serviceAreas: [
    "Douglas",
    "Peel",
    "Ramsey",
    "Castletown",
    "Port Erin",
    "Onchan",
    "Port St Mary",
    "Laxey",
  ],
  // LEGG Surfacing is an accredited VUBA installer, giving access to
  // VUBA's full resin bound surfacing product range on the Isle of Man.
  accreditations: [
    {
      name: "VUBA Certified Installer",
      description:
        "LEGG Surfacing Ltd is a VUBA accredited installer, giving us access to the full VUBA resin bound surfacing product range for Isle of Man projects.",
      url: "https://www.vubasurfaces.co.uk/",
      logoColour: "/vuba/Vuba-Col.png",
      logoWhite: "/vuba/Vuba-White.png",
    },
  ],
} as const;

export const siteConfig = {
  name: "LEGG Surfacing",
  url: "https://leggsurfacing.co.uk",
  defaultTitle: "LEGG Surfacing Ltd | Isle of Man Surfacing Specialists",
  defaultDescription:
    "LEGG Surfacing Ltd provides professional resin bound surfacing, tarmac driveways, road and lane surfacing, micro asphalt and groundworks across the Isle of Man, including Douglas, Peel, Ramsey, Castletown and Port Erin.",
  ogImage: "/og-image.jpg",
  logo: "/logo/logo-colour.png",
  keywords: [
    "surfacing Isle of Man",
    "resin bound surfacing Isle of Man",
    "tarmac driveways Isle of Man",
    "road surfacing Isle of Man",
    "micro asphalt Isle of Man",
    "groundworks Isle of Man",
    "driveway contractor Isle of Man",
    "LEGG Surfacing",
  ],
} as const;
