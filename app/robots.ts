import type { MetadataRoute } from "next";
import { siteFlags } from "@/lib/flags";
import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      ...(siteFlags.showServices ? {} : { disallow: ["/services", "/work"] }),
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
