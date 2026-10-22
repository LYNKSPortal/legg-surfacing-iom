import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import ContactForm from "@/components/forms/ContactForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with LEGG Surfacing Ltd for a free quotation on resin bound surfacing, tarmac driveways, road and lane surfacing or groundworks on the Isle of Man.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get your free, no-obligation quotation"
        description="Tell us about your project and we'll be in touch to arrange a site visit."
        image="/gallery/689009096_1556223703178708_3023758006728532054_n.jpg"
        imageAlt="Resin bound driveway at a brick property"
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <Section className="bg-offwhite">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Eyebrow>Contact Details</Eyebrow>
            <Heading as="h2" className="mt-4">
              Speak to the team
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-slate">
              Call, email or complete the form and we&apos;ll get back to you to
              discuss your surfacing or groundwork project.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Phone</p>
                  <a
                    href={business.phoneHref}
                    className="text-sm text-slate hover:text-accent transition-colors"
                  >
                    {business.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Email</p>
                  <a
                    href={business.emailHref}
                    className="text-sm text-slate hover:text-accent transition-colors break-all"
                  >
                    {business.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Address</p>
                  <p className="text-sm text-slate">{business.fullAddress}</p>
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-accent hover:text-accent-dark"
                  >
                    Get directions
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-charcoal/10">
              <iframe
                title="LEGG Surfacing Ltd location map"
                src={business.mapsEmbedSrc}
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm />
          </Suspense>
        </div>
      </Section>
    </>
  );
}

function ContactFormFallback() {
  return (
    <div
      aria-hidden="true"
      className="h-[720px] animate-pulse rounded-3xl bg-white shadow-sm ring-1 ring-charcoal/5"
    />
  );
}
