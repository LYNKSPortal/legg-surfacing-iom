import { business, siteConfig } from "./business";
import { services } from "./content/services";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: business.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    url: siteConfig.url,
    telephone: business.phoneDisplay,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine1,
      postalCode: business.postcode,
      addressRegion: business.region,
      addressCountry: "IM",
    },
    areaServed: business.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: business.facebookUrl ? [business.facebookUrl] : [],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.metaDescription,
      },
    })),
  };
}

export function serviceJsonLd(service: {
  name: string;
  metaDescription: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      "@type": "GeneralContractor",
      name: business.name,
      telephone: business.phoneDisplay,
      email: business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.addressLine1,
        postalCode: business.postcode,
        addressRegion: business.region,
        addressCountry: "IM",
      },
    },
    areaServed: business.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
