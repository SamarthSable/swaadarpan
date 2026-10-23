import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import ProductGrid from "@/src/components/ProductGrid";
import { getCategory } from "@/src/data/categories";
import { products, getProduct } from "@/src/data/products";
import { absoluteUrl, breadcrumbJsonLd } from "@/src/lib/seo";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: {
      canonical: absoluteUrl(`/products/${slug}`),
    },
    openGraph: {
      type: "website",
      title: product.name,
      description: product.shortDescription,
      url: absoluteUrl(`/products/${slug}`),
      images: [
        {
          url: product.images[0],
          alt: product.altText || product.name,
        },
      ],
    },
  };
}

async function ProductContent({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const category = getCategory(product.category);

  if (!category) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: category.name, href: `/categories/${category.slug}` },
    { label: product.name, href: `/products/${slug}` },
  ];

  const related = products
    .filter(
      (item) =>
        item.category === product.category && item.slug !== product.slug,
    )
    .slice(0, 3);

  return (
    <main className="sw-product-page">
      <div className="sw-product-breadcrumb-wrap">
        <Breadcrumbs items={crumbs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(crumbs)).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <section className="sw-product-detail">
        <div className="sw-product-visual">
          <div className="sw-product-image-frame">
            <Image
              src={product.images[0]}
              alt={product.altText || product.name}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 54vw"
              className="sw-product-main-image"
            />

            <span className="sw-product-image-label">
              MADE WITH A LITTLE LOVE
              <span aria-hidden="true"> ♡</span>
            </span>
          </div>

          <div className="sw-product-image-caption">
            <span>THE LITTLE DETAILS MATTER</span>
            <span aria-hidden="true">✳</span>
          </div>
        </div>

        <div className="sw-product-information">
          <div className="sw-product-kicker">
            <span className="sw-product-kicker-dot" />
            {category.name}
            <span className="sw-product-kicker-divider">/</span>
            Handmade collection
          </div>

          <h1 className="sw-product-title">
            {product.name}
            <span>.</span>
          </h1>

          <p className="sw-product-description">
            {product.description || product.shortDescription}
          </p>

          <div className="sw-product-note">
            <span className="sw-product-note-icon" aria-hidden="true">
              ✿
            </span>
            <p>
              Every handmade piece has its own little character. Ask us about
              this design, its availability, and the details that make it
              special.
            </p>
          </div>

          <div className="sw-product-divider" />

          <div className="sw-product-specs">
            <div className="sw-product-spec">
              <span className="sw-product-spec-icon" aria-hidden="true">
                ✳
              </span>
              <div>
                <h2>Materials</h2>
                <p>{product.materials || "Ask us for material details."}</p>
              </div>
            </div>

            <div className="sw-product-spec">
              <span className="sw-product-spec-icon" aria-hidden="true">
                ↔
              </span>
              <div>
                <h2>Dimensions</h2>
                <p>{product.dimensions || "Please enquire for dimensions."}</p>
              </div>
            </div>

            <div className="sw-product-spec">
              <span className="sw-product-spec-icon" aria-hidden="true">
                ♡
              </span>
              <div>
                <h2>Care instructions</h2>
                <p>
                  {product.careInstructions ||
                    "Care guidance is available on request."}
                </p>
              </div>
            </div>
          </div>

          <div className="sw-product-availability">
            <span className="sw-product-availability-dot" />
            <p>Curious about this piece? Let&apos;s talk.</p>
          </div>

          <Link
            className="sw-product-enquiry-button"
            href={`/contact?product=${encodeURIComponent(product.name)}`}
          >
            <span>Ask about this piece</span>
            <span className="sw-product-button-icon" aria-hidden="true">
              ↗
            </span>
          </Link>

          <p className="sw-product-enquiry-caption">
            No pressure, just a little conversation. ♡
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sw-related-section">
          <div className="sw-related-heading">
            <div>
              <p className="sw-related-eyebrow">A FEW MORE LOVELY THINGS</p>
              <h2>
                More to <em>fall for.</em>
              </h2>
              <p className="sw-related-subtitle">
                More little finds from the same collection.
              </p>
            </div>

            <Link
              className="sw-related-link"
              href={`/categories/${category.slug}`}
            >
              Explore collection <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <ProductGrid products={related} />
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Swaadarpan",
            url: absoluteUrl("/"),
          }).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}

export default function ProductPage({ params }) {
  return (
    <Suspense
      fallback={
        <main className="sw-product-loading">
          <span className="sw-loading-flower" aria-hidden="true">
            ✳
          </span>
          <p>Getting your little find ready…</p>
        </main>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}
