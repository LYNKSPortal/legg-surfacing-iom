import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/business";
import { services } from "@/lib/content/services";
import { inspirationBlends } from "@/lib/content/inspiration";

const staticImages: Record<string, string> = {
  "": "/og-image.jpg",
  "/about": "/gallery/687065433_1553399173461161_8668424976482873946_n.jpg",
  "/services": "/gallery/701559013_1563599459107799_4625763931304252382_n.jpg",
  "/projects": "/gallery/688740314_1554291820038563_4217299450706373818_n.jpg",
  "/inspiration": "/inspiration/large/red-purple-milano-marble.jpg",
  "/faqs": "/gallery/698209421_1561059389361806_7370727440355159578_n.jpg",
  "/contact": "/gallery/689009096_1556223703178708_3023758006728532054_n.jpg",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.keys(staticImages).map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
    images: [`${siteConfig.url}${staticImages[path]}`],
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${siteConfig.url}${service.heroImage}`],
  }));

  const inspirationRoutes = inspirationBlends.map((blend) => ({
    url: `${siteConfig.url}/inspiration/${blend.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
    images: [`${siteConfig.url}${blend.detailImage}`],
  }));

  return [...staticRoutes, ...serviceRoutes, ...inspirationRoutes];
}
