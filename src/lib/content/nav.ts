import { services } from "./services";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.shortName,
      href: `/services/${service.slug}`,
    })),
  },
  { label: "Inspirations", href: "/inspiration" },
  { label: "Gallery", href: "/projects" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

export const processSteps = [
  {
    title: "Initial enquiry",
    description:
      "Get in touch by phone, email or through our contact form with some details about your project.",
  },
  {
    title: "Site assessment",
    description:
      "We visit your property to assess ground conditions, access, drainage and your specific requirements.",
  },
  {
    title: "Quotation",
    description:
      "You'll receive a clear, detailed quotation based on the site visit, with no obligation to proceed.",
  },
  {
    title: "Preparation",
    description:
      "Once confirmed, we prepare the site, including any necessary groundwork, excavation and sub-base construction.",
  },
  {
    title: "Installation",
    description:
      "Your chosen surface is installed by our team to a high standard, with the site left clean and tidy on completion.",
  },
] as const;
