import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import InspirationGrid from "@/components/inspiration/InspirationGrid";
import CTASection from "@/components/sections/CTASection";
import { business } from "@/lib/business";
import {
  inspirationBlends,
  inspirationCategories,
} from "@/lib/content/inspiration";

export const metadata: Metadata = {
  title: "Inspirations",
  description:
    "Browse VUBA resin bound colour and aggregate blends for inspiration ahead of your resin bound driveway or patio project on the Isle of Man.",
  alternates: { canonical: "/inspiration" },
};

export default function InspirationPage() {
  return (
    <>
      <PageHero
        eyebrow="Inspirations"
        title="Find your resin bound colour"
        description="As a VUBA accredited installer, we have access to VUBA's full range of exclusive aggregate blends. Browse by colour family to find inspiration for your project."
        image="/inspiration/large/red-purple-milano-marble.jpg"
        imageAlt="Milano Marble resin bound driveway with a decorative inset circle"
      />
      <Breadcrumbs items={[{ label: "Inspirations" }]} />

      <Section className="bg-offwhite">
        <div className="flex max-w-2xl flex-wrap items-start gap-6">
          <Image
            src={business.accreditations[0].logoColour}
            alt={business.accreditations[0].name}
            width={80}
            height={94}
            className="h-20 w-auto shrink-0"
          />
          <div>
            <Eyebrow>Colour & Aggregate Blends</Eyebrow>
            <Heading as="h2" className="mt-4">
              VUBA colour blend inspiration
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
              These photographs and blend names are used under licence from
              VUBA Surfaces, the manufacturer of the resin bound systems we
              install. Tap any blend to see a larger sample photo, a
              description and request a free quotation.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <InspirationGrid
            blends={inspirationBlends}
            categories={inspirationCategories}
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button
            href="/services/resin-bound-surfacing"
            variant="outline"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            About Resin Bound Surfacing
          </Button>
          <Button href="/contact">Request a Quotation</Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
