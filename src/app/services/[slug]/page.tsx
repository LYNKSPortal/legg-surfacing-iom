import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Home, Images } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTASection from "@/components/sections/CTASection";
import { services, getServiceBySlug } from "@/lib/content/services";
import { serviceJsonLd, faqJsonLd } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.name,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(service.faqs)) }}
      />
      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.tagline}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" icon={<ArrowRight className="h-4 w-4" />}>
            Enquire About This Service
          </Button>
          <Button href="/services" variant="ghost">
            All Services
          </Button>
          {service.slug === "resin-bound-surfacing" && (
            <Button href="/inspiration" variant="ghost">
              Inspirations
            </Button>
          )}
        </div>
      </PageHero>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.shortName },
        ]}
      />

      <Section className="bg-offwhite">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <Heading as="h2" className="mt-4">
              {service.summary}
            </Heading>
            <div className="mt-6 space-y-4">
              {service.intro.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-slate sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <FadeIn>
            <div className="rounded-3xl bg-offwhite-dim p-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate">
                Common Applications
              </h3>
              <ul className="mt-4 space-y-3">
                {service.applications.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-7 text-sm font-semibold uppercase tracking-wide text-slate">
                Suitable Property Types
              </h3>
              <ul className="mt-4 space-y-3">
                {service.propertyTypes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal">
                    <Home className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-offwhite-dim">
        <div className="max-w-2xl">
          <Eyebrow>Key Benefits</Eyebrow>
          <Heading as="h2" className="mt-4">
            Why choose {service.shortName.toLowerCase()}?
          </Heading>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {service.benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 0.08}>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5">
                <h3 className="text-lg font-semibold text-charcoal">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-offwhite">
        <div className="max-w-2xl">
          <Eyebrow>Our Process</Eyebrow>
          <Heading as="h2" className="mt-4">
            How we install your {service.shortName.toLowerCase()}
          </Heading>
        </div>
        <ol className="mt-12 space-y-6">
          {service.process.map((step, index) => (
            <FadeIn as="li" key={step.title} delay={index * 0.06}>
              <div className="flex gap-5 rounded-2xl bg-offwhite-dim p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-offwhite">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-charcoal sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </ol>

        {service.considerations && (
          <div className="mt-12 rounded-3xl border border-accent/25 bg-accent/5 p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Things to consider
            </h3>
            <ul className="mt-4 space-y-2.5">
              {service.considerations.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-charcoal/80">
                  &bull; {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <Section className="bg-offwhite-dim">
        <FadeIn>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-charcoal/5">
            <Images className="h-8 w-8 text-accent" aria-hidden="true" />
            <Heading as="h2" align="center">
              See more in our gallery
            </Heading>
            <p className="text-sm leading-relaxed text-slate sm:text-base">
              Browse photos of our surfacing and groundwork across the Isle
              of Man, filterable by category.
            </p>
            <Button href="/projects" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
              View Gallery
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-offwhite">
        <div className="max-w-2xl">
          <Eyebrow>FAQs</Eyebrow>
          <Heading as="h2" className="mt-4">
            Frequently asked questions
          </Heading>
        </div>
        <div className="mt-10">
          <FaqAccordion faqs={service.faqs} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
