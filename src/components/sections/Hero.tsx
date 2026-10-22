import Image from "next/image";
import { ArrowRight, Award, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Heading";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-charcoal">
      <Image
        src="/gallery/831507012_1697979039003173_8184368965309395647_n.jpg"
        alt="Tarmac driveway finished with illuminated edge lighting"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/20 to-transparent" />

      <Container className="relative z-10 pb-20 pt-40 sm:pb-24 lg:pb-28">
        <Eyebrow className="text-accent-light">
          Isle of Man Surfacing Specialists
        </Eyebrow>
        <h1 className="balance mt-5 max-w-3xl text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-bold leading-[1.05] tracking-tight text-offwhite">
          Professional Surfacing Solutions Across the Isle of Man
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-offwhite/80 sm:text-lg">
          LEGG Surfacing Ltd delivers resin bound surfacing, tarmac
          driveways, road and lane surfacing, micro asphalt and groundworks
          for residential, commercial and infrastructure customers — from
          Douglas and Peel to Ramsey, Castletown and Port Erin.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Get a Free Quote
          </Button>
          <Button href="/services" size="lg" variant="ghost">
            Explore Our Services
          </Button>
          <Button href={business.phoneHref} size="lg" variant="outline" className="border-offwhite/30 text-offwhite hover:border-accent hover:text-accent-light" icon={<Phone className="h-4 w-4" />}>
            {business.phoneDisplay}
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {business.accreditations.map((accreditation) => (
            <span
              key={accreditation.name}
              className="inline-flex items-center gap-2 rounded-full border border-offwhite/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-offwhite/85 backdrop-blur-sm"
            >
              <Award className="h-4 w-4 text-accent-light" aria-hidden="true" />
              {accreditation.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
