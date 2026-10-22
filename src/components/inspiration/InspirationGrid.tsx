"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  InspirationBlend,
  InspirationCategory,
} from "@/lib/content/inspiration";

export default function InspirationGrid({
  blends,
  categories,
}: {
  blends: InspirationBlend[];
  categories: InspirationCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<
    InspirationCategory | "All"
  >("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? blends
        : blends.filter((blend) => blend.category === activeCategory),
    [blends, activeCategory]
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-3"
        role="group"
        aria-label="Filter blends by colour category"
      >
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

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((blend) => (
          <Link
            key={blend.id}
            href={`/inspiration/${blend.id}`}
            className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-charcoal/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={blend.image}
                alt={`${blend.name} resin bound colour blend by VUBA`}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between gap-2 p-4">
              <span className="text-sm font-semibold text-charcoal">
                {blend.name}
              </span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
