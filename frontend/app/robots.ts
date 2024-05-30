import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/about", "/privacy"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
