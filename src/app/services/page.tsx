import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Surfacing Services",
  description:
    "Resin bound surfacing, tarmac driveways, road and lane surfacing, micro asphalt and groundworks from LEGG Surfacing Ltd, serving the Isle of Man.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Specialist surfacing and groundwork services"
        description="Every project begins with a proper site assessment, so the right surface and preparation are specified for your property."
        image="/gallery/701559013_1563599459107799_4625763931304252382_n.jpg"
        imageAlt="Resurfacing a private lane through open countryside"
      />
      <Breadcrumbs items={[{ label: "Services" }]} />

      <Section className="bg-offwhite">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.06}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid h-full grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[220px_1fr]"
              >
                <div className="relative h-52 sm:h-full">
                  <Image
                    src={service.cardImage}
                    alt={service.cardImageAlt}
                    fill
                    sizes="(min-width: 640px) 220px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h2 className="text-xl font-semibold text-charcoal">
                    {service.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {service.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal group-hover:text-accent">
                    View service
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
