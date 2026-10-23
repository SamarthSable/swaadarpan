import { publicPaths, absoluteUrl } from "@/src/lib/seo";

export default function sitemap() {
  return publicPaths.map((path) => ({
    url: absoluteUrl(path || "/"),
    changeFrequency: path.startsWith("/products/") ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/shop" ? 0.9 : 0.7,
  }));
}
