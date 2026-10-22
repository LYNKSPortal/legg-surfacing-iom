import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import { galleryImages } from "@/lib/content/gallery";

export default function FeaturedProjects() {
  const preview = galleryImages.slice(0, 4);

  return (
    <Section className="bg-offwhite">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Gallery</Eyebrow>
          <Heading as="h2" className="mt-4">
            A look at our work
          </Heading>
        </div>
        <Button href="/projects" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
          View full gallery
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {preview.map((image, index) => (
          <FadeIn key={image.id} delay={index * 0.08}>
            <div className="group relative block overflow-hidden rounded-3xl shadow-sm ring-1 ring-charcoal/5">
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={image.image}
                  alt={image.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Badge className="bg-accent text-charcoal">{image.category}</Badge>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
