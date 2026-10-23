import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import ProductGrid from "@/src/components/ProductGrid";
import { categories, getCategory } from "@/src/data/categories";
import { getProductsByCategory } from "@/src/data/products";
import { breadcrumbJsonLd, absoluteUrl } from "@/src/lib/seo";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) return {};

  return {
    title: category.title,
    description: category.intro,
    alternates: {
      canonical: absoluteUrl(`/categories/${slug}`),
    },
    openGraph: {
      type: "website",
      title: category.title,
      description: category.intro,
      url: absoluteUrl(`/categories/${slug}`),
    },
  };
}

async function CategoryContent({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) notFound();

  const products = getProductsByCategory(slug);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: category.name, href: `/categories/${slug}` },
  ];

  return (
    <main className="sw-category-page">
      <div className="sw-category-breadcrumb-wrap">
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

      {/* Collection hero */}
      <header className="sw-category-hero">
        <span
          className="sw-category-hero-decoration sw-category-decoration-one"
          aria-hidden="true"
        />
        <span
          className="sw-category-hero-decoration sw-category-decoration-two"
          aria-hidden="true"
        />

        <div className="sw-category-hero-content">
          <p className="sw-category-eyebrow">
            <span aria-hidden="true">✳</span>
            THE SWAADARPAN COLLECTIONS
            <span aria-hidden="true">✳</span>
          </p>

          <h1>{category.title}</h1>

          <p className="sw-category-intro">{category.intro}</p>

          <div className="sw-category-hero-bottom">
            <span>THOUGHTFULLY CHOSEN</span>
            <span aria-hidden="true">♡</span>
            <span>MADE TO MAKE YOU SMILE</span>
          </div>
        </div>
      </header>

      {/* Collection products */}
      <section className="sw-category-products">
        <div className="sw-category-section-heading">
          <div>
            <p className="sw-category-section-eyebrow">
              A LITTLE SOMETHING FOR YOU
            </p>
            <h2>
              Little things, <em>lovely finds.</em>
            </h2>
            <p className="sw-category-results">
              {products.length === 1
                ? "1 piece to explore"
                : `${products.length} pieces to explore`}
            </p>
          </div>

          <Link href="/shop" className="sw-category-back-link">
            View everything <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="sw-category-empty">
            <span aria-hidden="true">✿</span>
            <h3>A little more love is on the way.</h3>
            <p>
              There aren&apos;t any pieces in this collection just yet. Take a
              look at all our collections instead.
            </p>
            <Link href="/shop" className="sw-category-empty-link">
              Browse all pieces <span aria-hidden="true">↗</span>
            </Link>
          </div>
        )}

        <div className="sw-category-note">
          <span className="sw-category-note-icon" aria-hidden="true">
            ♡
          </span>
          <p>
            Our collection is growing. Please enquire to confirm product details
            and availability.
          </p>
        </div>
      </section>

      {/* Closing banner */}
      <section className="sw-category-closing">
        <span className="sw-category-closing-flower" aria-hidden="true">
          ✿
        </span>
        <div>
          <p className="sw-category-section-eyebrow">
            STILL LOOKING FOR YOUR LITTLE FAVOURITE?
          </p>
          <h2>
            There&apos;s more to <em>fall for.</em>
          </h2>
        </div>
        <Link href="/shop" className="sw-category-closing-button">
          Explore all collections <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}

export default function CategoryPage({ params }) {
  return (
    <Suspense
      fallback={
        <main className="sw-category-loading">
          <span aria-hidden="true">✳</span>
          <p>Gathering your little finds…</p>
        </main>
      }
    >
      <CategoryContent params={params} />
    </Suspense>
  );
}
