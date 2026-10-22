import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTASection from "@/components/sections/CTASection";
import { generalFaqs } from "@/lib/content/faqs";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about surfacing, groundwork, quotations and the installation process from LEGG Surfacing Ltd on the Isle of Man.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(generalFaqs)) }}
      />
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Answers to some of the questions we're asked most often about our surfacing and groundwork services."
        image="/gallery/698209421_1561059389361806_7370727440355159578_n.jpg"
        imageAlt="Resin bound footpath installation in progress"
      />
      <Breadcrumbs items={[{ label: "FAQs" }]} />

      <Section className="bg-offwhite">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion faqs={generalFaqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
