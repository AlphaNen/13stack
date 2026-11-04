import type { MetadataRoute } from "next";
import { siteFlags } from "@/lib/flags";
import { getVisibleBlogPosts } from "@/lib/mock-data";
import { getSiteUrl } from "@/lib/site";

const staticRoutes: {
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  ...(siteFlags.showServices
    ? [
        {
          path: "/services",
          changeFrequency: "monthly" as const,
          priority: 0.7,
        },
        { path: "/work", changeFrequency: "monthly" as const, priority: 0.7 },
      ]
    : []),
  { path: "/products", changeFrequency: "monthly", priority: 0.7 },
  { path: "/products/skedvio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/elim-mcp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/fylmkit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...getVisibleBlogPosts().map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
