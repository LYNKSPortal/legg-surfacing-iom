"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage, GalleryCategory } from "@/lib/content/gallery";

const aspectRatios = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]"];

export default function GalleryGrid({
  images,
  categories,
}: {
  images: GalleryImage[];
  categories: GalleryCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lastCategory, setLastCategory] = useState(activeCategory);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? images
        : images.filter((image) => image.category === activeCategory),
    [images, activeCategory]
  );

  // Close the lightbox when the filter changes, adjusted during render
  // rather than in an effect.
  if (activeCategory !== lastCategory) {
    setLastCategory(activeCategory);
    setLightboxIndex(null);
  }

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, filtered.length]);

  const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter gallery by category">
        {(["All", ...categories] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200",
              activeCategory === category
                ? "bg-charcoal text-offwhite"
                : "bg-white text-charcoal ring-1 ring-charcoal/10 hover:ring-accent/50 hover:text-accent"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 rounded-3xl border border-dashed border-charcoal/15 bg-white/60 p-10 text-center text-slate">
          More photos for this category are coming soon.
        </p>
      ) : (
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`View larger image: ${image.imageAlt}`}
              className={cn(
                "group relative block w-full overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-charcoal/5 break-inside-avoid",
                aspectRatios[index % aspectRatios.length]
              )}
            >
              <Image
                src={image.image}
                alt={image.imageAlt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute left-4 top-4 inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.category}
              </span>
            </button>
          ))}
        </div>
      )}

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.imageAlt}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-offwhite hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-offwhite hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-offwhite hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={activeImage.image}
                alt={activeImage.imageAlt}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-5 flex items-center justify-center">
              <span className="inline-block rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-charcoal">
                {activeImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
