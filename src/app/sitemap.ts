import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacidade/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/termos/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
