import { business, siteConfig } from "./business";
import { services } from "./content/services";

function businessSameAs(): string[] {
  return [business.facebookUrl, business.googleBusinessUrl].filter(
    (url): url is string => Boolean(url)
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: business.phoneDisplay,
    email: business.email,
    foundingDate: business.incorporationDate,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Isle of Man Companies Registry",
      value: business.companyNumber,
      url: business.companyRegistryUrl,
    },
    sameAs: businessSameAs(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phoneDisplay,
      email: business.email,
      contactType: "customer service",
      areaServed: "IM",
      availableLanguage: "English",
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: business.name,
    legalName: business.legalName,
    description: siteConfig.defaultDescription,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}${siteConfig.logo}`,
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
    sameAs: businessSameAs(),
    hasMap: business.mapsUrl,
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.metaDescription,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Isle of Man",
        },
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
      "@id": `${siteConfig.url}/#localbusiness`,
      name: business.name,
      telephone: business.phoneDisplay,
      email: business.email,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
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
