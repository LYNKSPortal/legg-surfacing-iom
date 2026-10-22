import Image from "next/image";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-charcoal sm:min-h-[58vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/30" />
      <Container className="relative z-10 pb-14 pt-32 sm:pb-16">
        {eyebrow && <Eyebrow className="text-accent-light">{eyebrow}</Eyebrow>}
        <h1 className="balance mt-4 max-w-3xl text-[clamp(2rem,4vw+1rem,3.5rem)] font-bold leading-[1.08] tracking-tight text-offwhite">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-offwhite/80 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
