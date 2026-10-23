import Link from "next/link";

export const metadata = {
  title: "Crochet & Home Inspiration",
  description:
    "A growing collection of useful notes on crochet care, handmade gifting, and styling crochet details at home.",
  alternates: { canonical: "/inspiration" },
  openGraph: {
    title: "Crochet & Home Inspiration | Swaadarpan",
    description:
      "Thoughtful little reads on crochet care, handmade gifting, and styling your home.",
  },
};

const articles = [
  {
    number: "01",
    title: "Caring for crochet keepsakes",
    category: "Product care",
    readTime: "3 MIN READ",
    text: "Handmade crochet benefits from gentle handling. Follow the care label for each item; if no care label is supplied, ask the maker before washing or storing a piece.",
    href: "/inspiration/caring-for-crochet-keepsakes",
    accent: "peach",
    icon: "♡",
  },
  {
    number: "02",
    title: "Styling crochet flowers at home",
    category: "Home styling",
    readTime: "3 MIN READ",
    text: "Use crochet flowers to bring a small, lasting colour accent to a shelf, bedside table, or reading nook. Choose a vessel that supports the stems without crowding their shape.",
    href: "/inspiration/styling-crochet-flowers",
    accent: "sage",
    icon: "✿",
  },
];

export default function InspirationPage() {
  return (
    <main className="sw-inspiration-page">
      {/* Editorial hero */}
      <header className="sw-inspiration-hero">
        <span
          className="sw-inspiration-decoration sw-inspiration-decoration-one"
          aria-hidden="true"
        />
        <span
          className="sw-inspiration-decoration sw-inspiration-decoration-two"
          aria-hidden="true"
        />

        <div className="sw-inspiration-hero-content">
          <p className="sw-inspiration-eyebrow">
            <span aria-hidden="true">✳</span>
            THE SWAADARPAN JOURNAL
            <span aria-hidden="true">✳</span>
          </p>

          <h1>
            Inspiration,
            <br />
            <em>made slowly.</em>
          </h1>

          <p>
            Little notes, thoughtful ideas, and useful reads for the things we
            make, the spaces we love, and the moments worth keeping.
          </p>

          <a className="sw-inspiration-scroll" href="#journal-articles">
            Take a little look <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="sw-inspiration-hero-bottom">
          <span>CARE · CRAFT · HOME</span>
          <span>SMALL IDEAS, THOUGHTFULLY SHARED</span>
        </div>
      </header>

      {/* Journal articles */}
      <section className="sw-inspiration-content" id="journal-articles">
        <div className="sw-inspiration-section-heading">
          <div>
            <p className="sw-inspiration-section-eyebrow">
              A LITTLE SOMETHING TO READ
            </p>
            <h2>
              The journal <em>pages.</em>
            </h2>
          </div>

          <span className="sw-inspiration-count">
            0{articles.length} little reads
          </span>
        </div>

        <div className="sw-inspiration-list">
          {articles.map((article) => (
            <article
              className={`sw-inspiration-card sw-inspiration-card-${article.accent}`}
              key={article.href}
            >
              <div className="sw-inspiration-card-art" aria-hidden="true">
                <span className="sw-inspiration-card-number">
                  {article.number}
                </span>
                <span className="sw-inspiration-card-icon">{article.icon}</span>
                <span className="sw-inspiration-card-art-caption">
                  SWAADARPAN NOTES
                </span>
              </div>

              <div className="sw-inspiration-card-copy">
                <div className="sw-inspiration-card-meta">
                  <span>{article.category}</span>
                  <span className="sw-inspiration-meta-dot" />
                  <span>{article.readTime}</span>
                </div>

                <h3>
                  <Link href={article.href}>{article.title}</Link>
                </h3>

                <p>{article.text}</p>

                <Link
                  className="sw-inspiration-read-link"
                  href={article.href}
                  aria-label={`Read ${article.title}`}
                >
                  Read the little story
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <span className="sw-inspiration-card-heart" aria-hidden="true">
                ♡
              </span>
            </article>
          ))}
        </div>

        <div className="sw-inspiration-note">
          <span aria-hidden="true">✿</span>
          <p>
            Just a couple of little reads for now. More thoughtful ideas will
            find their way here.
          </p>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="sw-inspiration-closing">
        <span className="sw-inspiration-closing-flower" aria-hidden="true">
          ✳
        </span>

        <p className="sw-inspiration-section-eyebrow">
          FROM OUR JOURNAL TO YOUR HOME
        </p>

        <h2>
          Found a little <em>inspiration?</em>
        </h2>

        <p>
          Discover handmade crochet and thoughtful details to bring a little
          more warmth to your everyday.
        </p>

        <Link href="/shop" className="sw-inspiration-shop-button">
          Explore the collection <span aria-hidden="true">↗</span>
        </Link>

        <span className="sw-inspiration-closing-note">
          Little things, made with love. ♡
        </span>
      </section>
    </main>
  );
}
