import { categories } from "@/src/data/categories";
import { products } from "@/src/data/products";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://swaadarpan.example";
export function absoluteUrl(path) {
  return new URL(path, siteUrl).toString();
}
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Swaadarpan",
    url: siteUrl,
    description: "A handmade crochet and home décor brand.",
  };
}
export const publicPaths = [
  "",
  "/shop",
  "/about",
  "/contact",
  "/shipping-policy",
  "/return-policy",
  "/privacy-policy",
  "/terms",
  "/inspiration",
  "/inspiration/caring-for-crochet-keepsakes",
  "/inspiration/styling-crochet-flowers",
  ...categories.map((item) => `/categories/${item.slug}`),
  ...products.map((item) => `/products/${item.slug}`),
];
