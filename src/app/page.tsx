import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CompanyIntro from "@/components/sections/CompanyIntro";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/business";
import { localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <CompanyIntro />
      <FeaturedProjects />
      <ProcessSteps />
      <Testimonials />
      <ServiceAreas />
      <CTASection />
    </>
  );
}
