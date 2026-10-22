import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import {
  inspirationBlends,
  inspirationCategoryDescriptions,
  getInspirationBlendById,
} from "@/lib/content/inspiration";

type Params = { slug: string };

export function generateStaticParams() {
  return inspirationBlends.map((blend) => ({ slug: blend.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blend = getInspirationBlendById(slug);
  if (!blend) return {};
  return {
    title: `${blend.name} | Inspirations`,
    description: `${blend.name} — a ${blend.category.toLowerCase()} resin bound colour blend. Request a free quotation from LEGG Surfacing Ltd for your Isle of Man project.`,
    alternates: { canonical: `/inspiration/${blend.id}` },
  };
}

export default async function InspirationBlendPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const blend = getInspirationBlendById(slug);
  if (!blend) notFound();

  const more = inspirationBlends
    .filter((b) => b.category === blend.category && b.id !== blend.id)
    .slice(0, 3);

  const quoteHref = `/contact?service=${encodeURIComponent(
    "Resin Bound Surfacing"
  )}&blend=${encodeURIComponent(blend.name)}`;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Inspirations", href: "/inspiration" },
          { label: blend.name },
        ]}
      />

      <Section className="bg-offwhite">
        <Link
          href="/inspiration"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-slate hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Inspirations
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={blend.detailImage}
              alt={`${blend.name} resin bound colour blend sample`}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <Badge>{blend.category}</Badge>
            <Heading as="h1" className="mt-4">
              {blend.name}
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
              {inspirationCategoryDescriptions[blend.category]}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-light">
              {blend.name} is one of the exclusive VUBA aggregate blends
              available through LEGG Surfacing Ltd as a VUBA accredited
              installer. Photography shown is used under licence from VUBA
              Surfaces.
            </p>

            <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
                Like this blend?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                Request a free, no-obligation quotation and we&apos;ll talk
                you through colour and aggregate options — including{" "}
                {blend.name} — bringing samples to your site visit.
              </p>
              <div className="mt-5">
                <Button href={quoteHref} icon={<ArrowRight className="h-4 w-4" />}>
                  Request a Quote for {blend.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {more.length > 0 && (
        <Section className="bg-offwhite-dim">
          <div className="max-w-2xl">
            <Eyebrow>More {blend.category}</Eyebrow>
            <Heading as="h2" className="mt-4">
              Other blends you might like
            </Heading>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {more.map((b) => (
              <Link
                key={b.id}
                href={`/inspiration/${b.id}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={b.image}
                    alt={`${b.name} resin bound colour blend`}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm font-semibold text-charcoal">
                    {b.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
