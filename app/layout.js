import "./globals.css";
import SiteHeader from "@/src/components/SiteHeader";
import SiteFooter from "@/src/components/SiteFooter";
import { absoluteUrl, organizationJsonLd } from "@/src/lib/seo";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://swaadarpan.example",
  ),
  title: {
    default: "Swaadarpan | Little Things, Made with Love",
    template: "%s | Swaadarpan",
  },
  description:
    "Thoughtfully handcrafted crochet pieces that bring warmth, colour, and personality into everyday spaces.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    siteName: "Swaadarpan",
    title: "Swaadarpan | Little Things, Made with Love",
    description:
      "Thoughtfully handcrafted crochet pieces for home, gifting, and everyday joy.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <div className="announcement">
          Small-batch, handmade, always made with care
        </div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
