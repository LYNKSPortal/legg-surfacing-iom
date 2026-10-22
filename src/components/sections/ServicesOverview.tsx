import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/content/services";

export default function ServicesOverview() {
  return (
    <Section className="bg-offwhite">
      <div className="max-w-2xl">
        <Eyebrow>What We Do</Eyebrow>
        <Heading as="h2" className="mt-4">
          Specialist surfacing services, tailored to your site
        </Heading>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          From decorative resin bound driveways to robust highway access
          surfacing, every project is assessed on-site and specified to
          suit the ground conditions and intended use.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <FadeIn key={service.slug} delay={index * 0.08}>
            <Link
              href={`/services/${service.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.cardImage}
                  alt={service.cardImageAlt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-charcoal">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
