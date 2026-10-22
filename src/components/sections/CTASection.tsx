import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { business } from "@/lib/business";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-24">
      <Image
        src="/gallery/702718500_1562596169208128_4881284490970532373_n.jpg"
        alt="Resin bound driveway with a decorative Manx emblem inlay"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/70" />
      <Container className="relative z-10 text-center">
        <Heading as="h2" align="center" className="mx-auto max-w-2xl text-offwhite">
          Ready to start your surfacing project?
        </Heading>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-offwhite/75 sm:text-lg">
          Get in touch today for a free, no-obligation quotation on your
          driveway, road, lane or groundwork project anywhere on the Isle
          of Man.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Request a Quotation
          </Button>
          <Button
            href={business.phoneHref}
            size="lg"
            variant="outline"
            className="border-offwhite/30 text-offwhite hover:border-accent hover:text-accent-light"
            icon={<Phone className="h-4 w-4" />}
          >
            {business.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
