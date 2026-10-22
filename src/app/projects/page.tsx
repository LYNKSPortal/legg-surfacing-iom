import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import CTASection from "@/components/sections/CTASection";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryImages, galleryCategories } from "@/lib/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of surfacing and groundwork work from LEGG Surfacing Ltd across the Isle of Man, filterable by tarmac, resin bound, roads & lanes, micro asphalt and groundworks.",
  alternates: { canonical: "/projects" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at our work"
        description="Browse photos of our surfacing and groundwork by category. We're continually adding more photography as new work is completed."
        image="/gallery/688740314_1554291820038563_4217299450706373818_n.jpg"
        imageAlt="Resin bound patio with a decorative Manx emblem inlay"
      />
      <Breadcrumbs items={[{ label: "Gallery" }]} />

      <Section className="bg-offwhite-dim">
        <GalleryGrid images={galleryImages} categories={galleryCategories} />
      </Section>

      <CTASection />
    </>
  );
}
