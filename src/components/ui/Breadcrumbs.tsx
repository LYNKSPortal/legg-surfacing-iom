import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Container from "./Container";

export type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-charcoal/10 bg-offwhite-dim">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="flex items-center gap-1.5 py-3 text-sm text-slate overflow-x-auto whitespace-nowrap">
        <Link href="/" className="flex items-center gap-1 hover:text-accent transition-colors">
          <Home className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </Link>
        {items.map((item, index) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-slate-light" aria-hidden="true" />
            {item.href && index !== items.length - 1 ? (
              <Link href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </Container>
    </nav>
  );
}
