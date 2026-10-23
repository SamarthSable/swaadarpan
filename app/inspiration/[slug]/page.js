import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import { absoluteUrl, breadcrumbJsonLd } from "@/src/lib/seo";

const articles = {
  "caring-for-crochet-keepsakes": {
    category: "Care & keeping",
    readTime: "3 MIN READ",
    title: "Caring for crochet keepsakes",
    description:
      "Practical ways to care for handmade crochet pieces while following the maker's material and care guidance.",
    paragraphs: [
      "Crochet pieces are made from different fibres and constructions, so care is not one-size-fits-all. Before cleaning, check the product label or ask the maker for instructions that match the exact materials.",
      "For day-to-day care, handle handmade items gently and avoid pulling loose loops. Store clean, dry pieces away from direct sunlight and anything that could snag the stitches.",
      "For a sample product on this website, the material and care details still need confirmation. Always follow the specific instructions supplied with the actual item.",
    ],
  },
  "styling-crochet-flowers": {
    category: "Home & styling",
    readTime: "3 MIN READ",
    title: "Styling crochet flowers at home",
    description:
      "Simple ideas for styling handmade crochet flowers around your home and choosing a vessel that suits the arrangement.",
    paragraphs: [
      "Crochet flowers can add a lasting colour accent to a shelf, bedside table, or reading nook. A simple vessel helps the handmade stitches stay the focus.",
      "Choose a vase with a neck that supports the stems without squeezing them. Adjust the arrangement by height and colour, leaving a little breathing room between blooms.",
      "These styling ideas are general inspiration. Product dimensions and stem flexibility vary, so check the details of the piece you choose.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: absoluteUrl(`/inspiration/${slug}`),
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: absoluteUrl(`/inspiration/${slug}`),
    },
  };
}

async function InspirationContent({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Inspiration", href: "/inspiration" },
    { label: article.title, href: `/inspiration/${slug}` },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: absoluteUrl(`/inspiration/${slug}`),
    publisher: {
      "@type": "Organization",
      name: "Swaadarpan",
      url: absoluteUrl("/"),
    },
  };

  return (
    <main className="sw-article-page">
      <div className="sw-article-breadcrumb-wrap">
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

      <header className="sw-article-hero">
        <span
          className="sw-article-decoration sw-article-decoration-one"
          aria-hidden="true"
        />
        <span
          className="sw-article-decoration sw-article-decoration-two"
          aria-hidden="true"
        />

        <div className="sw-article-hero-content">
          <Link href="/inspiration" className="sw-article-back">
            <span aria-hidden="true">←</span> All inspiration
          </Link>

          <p className="sw-article-eyebrow">
            <span aria-hidden="true">✳</span>
            SWAADARPAN JOURNAL
            <span aria-hidden="true">✳</span>
          </p>

          <span className="sw-article-category">{article.category}</span>

          <h1>{article.title}</h1>

          <p className="sw-article-description">{article.description}</p>

          <div className="sw-article-meta">
            <span>{article.readTime}</span>
            <span className="sw-article-meta-dot" aria-hidden="true" />
            <span>Little ideas, thoughtfully shared</span>
          </div>
        </div>
      </header>

      <article className="sw-article-body">
        <div className="sw-article-body-heading">
          <span className="sw-article-drop-cap" aria-hidden="true">
            ✿
          </span>
          <p>A little inspiration for everyday living.</p>
        </div>

        <div className="sw-article-prose">
          {article.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "sw-article-lead" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="sw-article-signoff">
          <span aria-hidden="true">♡</span>
          <p>Little things, made with love.</p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </article>

      <section className="sw-article-footer">
        <div className="sw-article-footer-content">
          <span className="sw-article-footer-flower" aria-hidden="true">
            ✿
          </span>
          <p className="sw-article-eyebrow">A LITTLE MORE TO EXPLORE</p>
          <h2>
            Keep finding <em>lovely things.</em>
          </h2>
          <p>
            Discover more inspiration or explore handmade pieces for your own
            little corner of the world.
          </p>

          <div className="sw-article-footer-actions">
            <Link href="/inspiration" className="sw-article-primary-link">
              More inspiration <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/shop" className="sw-article-secondary-link">
              Browse the shop <span aria-hidden="true">♡</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function InspirationArticle({ params }) {
  return (
    <Suspense
      fallback={
        <main className="sw-article-loading">
          <span aria-hidden="true">✳</span>
          <p>Gathering a little inspiration…</p>
        </main>
      }
    >
      <InspirationContent params={params} />
    </Suspense>
  );
}
