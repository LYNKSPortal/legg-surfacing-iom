import { MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import { business } from "@/lib/business";

export default function ServiceAreas() {
  return (
    <Section className="bg-offwhite">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <FadeIn>
          <Eyebrow>Where We Work</Eyebrow>
          <Heading as="h2" className="mt-4">
            Serving the whole of the Isle of Man
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            Based at The Paddocks, we carry out surfacing and groundwork
            projects across the island for residential, commercial and
            infrastructure customers.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {business.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-4 text-sm font-medium text-charcoal shadow-sm ring-1 ring-charcoal/5"
              >
                <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {area}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
