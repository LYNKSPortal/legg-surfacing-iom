"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage, GalleryCategory } from "@/lib/content/gallery";

const aspectRatios = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]"];

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

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
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

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

  const isOpen = lightboxIndex !== null;

  function openLightbox(index: number, trigger: HTMLElement) {
    triggerRef.current = trigger;
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  // Lock the page, trap focus inside the dialog while it's open, and
  // handle Escape/arrow-key navigation. Keyed on `isOpen` (not
  // `lightboxIndex`) so navigating between photos doesn't re-run this
  // setup/teardown and steal focus back out of the dialog.
  useEffect(() => {
    if (!isOpen) return;

    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const current = document.activeElement;

        if (e.shiftKey && (current === first || current === dialogRef.current)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && current === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, filtered.length]);

  // Return focus to the thumbnail that opened the lightbox once it closes.
  useEffect(() => {
    if (!isOpen) triggerRef.current?.focus();
  }, [isOpen]);

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
              onClick={(e) => openLightbox(index, e.currentTarget)}
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
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.imageAlt}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm outline-none"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
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
