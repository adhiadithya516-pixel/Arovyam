import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date("2026-10-16"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
