import Image from "next/image";
import { Gauge, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";

const points = [
  {
    icon: ShieldCheck,
    title: "Quality workmanship",
    description:
      "Every project is prepared and installed with care, from groundwork through to the finished surface.",
  },
  {
    icon: Sparkles,
    title: "Professional finishes",
    description:
      "We take pride in a clean, consistent finish on every driveway, road, lane and surfacing project we complete.",
  },
  {
    icon: Gauge,
    title: "Tailored surfacing solutions",
    description:
      "No two sites are the same — we assess ground conditions and requirements before recommending the right specification.",
  },
  {
    icon: MapPinned,
    title: "Local Isle of Man expertise",
    description:
      "Based on the Isle of Man, we understand the local climate, ground conditions and the needs of island properties.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-charcoal text-offwhite">
      <div className="max-w-2xl">
        <Eyebrow className="text-accent-light">Why Choose Us</Eyebrow>
        <Heading as="h2" className="mt-4 text-offwhite">
          Why Choose LEGG Surfacing?
        </Heading>
        <p className="mt-5 text-base leading-relaxed text-offwhite/70 sm:text-lg">
          We focus on getting the fundamentals right — proper site
          assessment, solid groundwork and a quality finish — on every
          project, large or small.
        </p>
      </div>

      <FadeIn>
        <div className="relative mt-12 h-28 w-full overflow-hidden rounded-3xl shadow-lg sm:h-36 lg:h-40">
          <Image
            src="/our-samples.webp"
            alt="A selection of resin bound aggregate colour samples available from LEGG Surfacing"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
          <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wide text-offwhite/90 sm:bottom-4 sm:left-6 sm:text-sm">
            A sample of our aggregate colour options
          </p>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point, index) => (
          <FadeIn key={point.title} delay={index * 0.08}>
            <div className="group rounded-2xl border border-offwhite/10 p-6 transition-colors duration-300 hover:border-accent/50 hover:bg-white/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-charcoal">
                <point.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/65">
                {point.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
