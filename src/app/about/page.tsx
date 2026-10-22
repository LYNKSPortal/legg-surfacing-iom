import type { Metadata } from "next";
import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/sections/CTASection";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "LEGG Surfacing Ltd is a specialist surfacing and groundwork contractor based on the Isle of Man, focused on quality workmanship and dependable service.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Attention to detail",
    description:
      "From the initial site assessment to the final finish, we pay close attention to the details that affect how a surface performs and looks over time.",
  },
  {
    title: "Dependable service",
    description:
      "We aim to be straightforward and reliable to deal with, from your first enquiry through to project completion.",
  },
  {
    title: "Professional workmanship",
    description:
      "Every project is approached with care, using the right preparation and techniques for the surface being installed.",
  },
  {
    title: "Honest assessment",
    description:
      "We assess each site properly before recommending a solution, rather than applying a one-size-fits-all approach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A specialist surfacing contractor based on the Isle of Man"
        description="LEGG Surfacing Ltd is focused on quality workmanship, attention to detail and dependable service on every project we undertake."
        image="/gallery/687065433_1553399173461161_8668424976482873946_n.jpg"
        imageAlt="Compacting a tarmac driveway during installation"
      />
      <Breadcrumbs items={[{ label: "About" }]} />

      <Section className="bg-offwhite">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <Eyebrow>Who We Are</Eyebrow>
            <Heading as="h2" className="mt-4">
              Quality surfacing, properly done
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
              LEGG Surfacing Ltd is based at {business.fullAddress}, providing
              specialist surfacing and groundwork services to residential,
              commercial and infrastructure customers across the island.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              We work across resin bound surfacing, tarmac driveways, road
              and lane surfacing, micro asphalt treatments and the
              groundworks that underpin them — always starting with a proper
              on-site assessment so the right approach is used for your
              property.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Our approach is simple: assess each site honestly, prepare the
              ground properly, and install every surface to a high,
              professional standard.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              We are also a VUBA accredited installer, giving us access to
              VUBA&apos;s full resin bound surfacing product range for
              projects across the island.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/gallery/700049857_1561721449295600_2439805601770063670_n.jpg"
                alt="Power trowelling equipment used during surfacing installation"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-offwhite-dim">
        <div className="max-w-2xl">
          <Eyebrow>What We Value</Eyebrow>
          <Heading as="h2" className="mt-4">
            The principles behind every project
          </Heading>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.08}>
              <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {value.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-offwhite">
        <div className="max-w-2xl">
          <Eyebrow>Accreditations</Eyebrow>
          <Heading as="h2" className="mt-4">
            Accredited for resin bound surfacing
          </Heading>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {business.accreditations.map((accreditation) => (
            <FadeIn key={accreditation.name}>
              <a
                href={accreditation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 rounded-2xl bg-offwhite-dim p-6 ring-1 ring-charcoal/5 transition-colors hover:ring-accent/40"
              >
                <Award className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {accreditation.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {accreditation.description}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-offwhite-dim">
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-3xl bg-charcoal p-10 text-center text-offwhite sm:p-14">
            <Heading as="h2" align="center" className="text-offwhite">
              Based on the Isle of Man, working across the island
            </Heading>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-offwhite/75">
              From {business.addressLine1} we carry out projects for
              residential, commercial and infrastructure customers across
              Douglas, Peel, Ramsey, Castletown, Port Erin and the
              surrounding areas.
            </p>
          </div>
        </FadeIn>
      </Section>

      <CTASection />
    </>
  );
}
