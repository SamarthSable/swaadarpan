import Image from "next/image";
import Link from "next/link";
import { organizationJsonLd } from "@/src/lib/seo";

export const metadata = {
  title: "Our Story",
  description:
    "Discover Swaadarpan's love for crochet, thoughtful craft, and handmade details that bring warmth to everyday life.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our Story | Swaadarpan",
    description:
      "Get to know Swaadarpan and our appreciation for the beauty of handmade things.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="sw-about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="sw-about-hero">
        <div className="sw-about-hero-decoration sw-about-decoration-one" />
        <div className="sw-about-hero-decoration sw-about-decoration-two" />

        <div className="sw-about-hero-content">
          <span className="sw-about-overline">
            <span aria-hidden="true">✳</span>A LITTLE ABOUT US
            <span aria-hidden="true">✳</span>
          </span>

          <h1>
            Made with care.
            <br />
            <em>Shared with love.</em>
          </h1>

          <p>
            Little things can hold a lot of meaning. We celebrate the charm of
            crochet, thoughtful details, and handmade pieces that make everyday
            spaces feel a little more like you.
          </p>

          <Link href="/shop" className="sw-about-primary-link">
            Explore our little world
            <span aria-hidden="true">↗</span>
          </Link>

          <span className="sw-about-hero-flower" aria-hidden="true">
            ✿
          </span>
        </div>

        <div className="sw-about-hero-bottom">
          <span>THOUGHTFULLY HANDMADE</span>
          <span>COLOUR · TEXTURE · HEART</span>
        </div>
      </section>

      {/* Story section */}
      <section className="sw-about-story">
        <div className="sw-about-art-column">
          <div className="sw-about-art-frame">
            <Image
              src="/images/handmade.svg"
              alt="Illustration celebrating the texture and beauty of handmade crochet"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              className="sw-about-art-image"
            />

            <span className="sw-about-art-sticker">
              Made for the little moments <span aria-hidden="true">♡</span>
            </span>
          </div>

          <div className="sw-about-art-caption">
            <span>A LITTLE TEXTURE. A LOT OF HEART.</span>
            <span aria-hidden="true">✳</span>
          </div>
        </div>

        <div className="sw-about-story-copy">
          <p className="sw-about-eyebrow">
            <span aria-hidden="true">♡</span> THE HEART OF SWAADARPAN
          </p>

          <h2>
            There is beauty
            <br />
            in <em>the making.</em>
          </h2>

          <p>
            There is something special about the details that go into making
            something by hand. A stitch, a shape, a playful colour — each little
            choice helps turn a simple material into something with character.
          </p>

          <p>
            Swaadarpan celebrates that feeling through crochet flowers,
            accessories, home décor, and thoughtful gifts. Pieces that bring
            softness, colour, and a little personality into everyday life.
          </p>

          <div className="sw-about-handwritten">
            <span>Little things, made with love.</span>
            <span aria-hidden="true">♡</span>
          </div>
        </div>
      </section>

      {/* Brand values */}
      <section className="sw-about-values">
        <div className="sw-about-values-heading">
          <p className="sw-about-eyebrow">THE LITTLE THINGS WE LOVE</p>
          <h2>
            What makes it <em>special.</em>
          </h2>
          <p>The details that inspire the Swaadarpan world.</p>
        </div>

        <div className="sw-about-values-grid">
          <article className="sw-about-value-card sw-about-value-blush">
            <span className="sw-about-value-number">01</span>
            <span className="sw-about-value-icon" aria-hidden="true">
              ✿
            </span>
            <h3>Made with care</h3>
            <p>
              We celebrate the patience, attention, and creativity that make
              handmade work feel personal.
            </p>
          </article>

          <article className="sw-about-value-card sw-about-value-sage">
            <span className="sw-about-value-number">02</span>
            <span className="sw-about-value-icon" aria-hidden="true">
              ❋
            </span>
            <h3>Full of character</h3>
            <p>
              Soft textures, lovely colours, and playful details make room for
              little things that feel uniquely yours.
            </p>
          </article>

          <article className="sw-about-value-card sw-about-value-lavender">
            <span className="sw-about-value-number">03</span>
            <span className="sw-about-value-icon" aria-hidden="true">
              ♡
            </span>
            <h3>Chosen with love</h3>
            <p>
              Whether for your home or someone special, we believe small
              thoughtful details can mean a lot.
            </p>
          </article>
        </div>
      </section>

      {/* Closing section */}
      <section className="sw-about-closing">
        <span className="sw-about-closing-flower" aria-hidden="true">
          ✿
        </span>

        <p className="sw-about-eyebrow">HAPPY YOU FOUND US</p>

        <h2>
          Find something
          <br />
          <em>that feels like you.</em>
        </h2>

        <p>
          Take a little look around and discover a handmade piece that catches
          your eye.
        </p>

        <div className="sw-about-closing-actions">
          <Link href="/shop" className="sw-about-primary-link">
            Browse the collection <span aria-hidden="true">↗</span>
          </Link>

          <Link href="/contact" className="sw-about-secondary-link">
            Say hello <span aria-hidden="true">♡</span>
          </Link>
        </div>

        <span className="sw-about-closing-note" aria-hidden="true">
          a little extra love, always
        </span>
      </section>
    </main>
  );
}
