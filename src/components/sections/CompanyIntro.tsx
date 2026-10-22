import Image from "next/image";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function CompanyIntro() {
  return (
    <Section className="bg-offwhite-dim">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/groundworks.png"
              alt="Groundwork and surfacing machinery on site"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Eyebrow>About LEGG Surfacing</Eyebrow>
          <Heading as="h2" className="mt-4">
            Specialist surfacing contractors based on the Isle of Man
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            LEGG Surfacing Ltd is a specialist surfacing and groundwork
            contractor, based at The Paddocks on the Isle of Man. We work
            with residential, commercial and infrastructure customers on
            resin bound surfacing, tarmac driveways, road and lane
            surfacing, micro asphalt and the groundworks that support them.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Our focus is on dependable, professionally finished surfacing —
            assessed properly on-site, prepared thoroughly, and installed
            to a high standard throughout the island, from Douglas and
            Peel to Ramsey, Castletown and Port Erin.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              More about us
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
