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

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.defaultTitle }],
  },
};

export default function Home() {
  return (
    <>
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
