import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/business";

// AI/answer-engine crawlers explicitly welcomed so LEGG Surfacing's content
// can be indexed and cited by tools like ChatGPT, Perplexity and Google's
// AI Overviews, alongside standard search engine bots.
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
