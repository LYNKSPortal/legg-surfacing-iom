import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/business";
import { services } from "@/lib/content/services";
import { inspirationBlends } from "@/lib/content/inspiration";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/inspiration",
    "/faqs",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const inspirationRoutes = inspirationBlends.map((blend) => ({
    url: `${siteConfig.url}/inspiration/${blend.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...inspirationRoutes];
}
