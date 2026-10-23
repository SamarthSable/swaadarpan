import { siteUrl } from "@/src/lib/seo";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
