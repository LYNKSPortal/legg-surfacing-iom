import { ArrowRight, Phone } from "lucide-react";
import { MuxBackgroundVideo } from "@videojs/react/media/mux-background-video";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Heading";
import { business } from "@/lib/business";

const MUX_PLAYBACK_ID = "aUOCHSXVbX9gzjbU39KIRQtb8q3whrMuoEmnbzRaUNo";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0" aria-hidden="true">
        {/* Poster shown instantly while the Mux video streams in. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.webp?time=18.08`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <MuxBackgroundVideo
          src={`https://stream.mux.com/${MUX_PLAYBACK_ID}.m3u8?max_resolution=1080p`}
          crossOrigin="anonymous"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
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
      </Container>
    </section>
  );
}
