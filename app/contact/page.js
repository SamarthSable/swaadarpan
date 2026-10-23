import Link from "next/link";

export const metadata = {
  title: "Contact & Enquiries",
  description:
    "Get in touch with Swaadarpan about handmade crochet pieces, product details, and enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Enquiries | Swaadarpan",
    description:
      "Have a question about a handmade piece? We'd love to hear from you.",
  },
};

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;

export default async function ContactPage({ searchParams }) {
  const params = searchParams ? await searchParams : {};
  const productName =
    typeof params.product === "string" ? params.product.trim() : "";

  const hasContactDetails = Boolean(email || phone || instagram);

  const whatsappMessage = productName
    ? `Hi Swaadarpan! I'm interested in "${productName}". Could you please share more details and availability?`
    : "Hi Swaadarpan! I'd love to know more about your handmade collection.";

  const whatsappHref = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`
    : null;

  return (
    <main className="sw-contact-page">
      {/* Hero */}
      <header className="sw-contact-hero">
        <span
          className="sw-contact-decoration sw-contact-decoration-one"
          aria-hidden="true"
        />
        <span
          className="sw-contact-decoration sw-contact-decoration-two"
          aria-hidden="true"
        />

        <div className="sw-contact-hero-content">
          <p className="sw-contact-eyebrow">
            <span aria-hidden="true">✳</span>
            WE&apos;D LOVE TO HEAR FROM YOU
            <span aria-hidden="true">✳</span>
          </p>

          <h1>
            Let&apos;s make
            <br />
            <em>a connection.</em>
          </h1>

          <p>
            A question, a little idea, or a piece you can&apos;t stop thinking
            about? We&apos;re here for the conversation.
          </p>

          <span className="sw-contact-hero-heart" aria-hidden="true">
            ♡
          </span>
        </div>

        <div className="sw-contact-hero-bottom">
          <span>A LITTLE HELLO GOES A LONG WAY</span>
          <span>MADE WITH HEART · SHARED WITH LOVE</span>
        </div>
      </header>

      {/* Contact options */}
      <section className="sw-contact-main">
        <div className="sw-contact-heading">
          <p className="sw-contact-section-eyebrow">SAY HELLO YOUR WAY</p>
          <h2>
            Pick your <em>little corner.</em>
          </h2>
          <p>Choose whichever contact option feels easiest for you.</p>
        </div>

        {hasContactDetails ? (
          <div className="sw-contact-grid">
            {email && (
              <article className="sw-contact-card sw-contact-card-peach">
                <span className="sw-contact-card-number">01 / EMAIL</span>
                <span className="sw-contact-card-icon" aria-hidden="true">
                  ✉
                </span>
                <h3>Write us a note.</h3>
                <p>
                  For product questions, details, or anything you&apos;d like to
                  ask us.
                </p>
                <a className="sw-contact-card-link" href={`mailto:${email}`}>
                  Send an email <span aria-hidden="true">↗</span>
                </a>
                <p className="sw-contact-address">{email}</p>
              </article>
            )}

            {phone && (
              <article className="sw-contact-card sw-contact-card-sage">
                <span className="sw-contact-card-number">02 / WHATSAPP</span>
                <span className="sw-contact-card-icon" aria-hidden="true">
                  ♡
                </span>
                <h3>Let&apos;s chat.</h3>
                <p>Have a quick question about a piece? Send us a message.</p>
                <a
                  className="sw-contact-card-link"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on WhatsApp <span aria-hidden="true">↗</span>
                </a>
                <p className="sw-contact-address">
                  {productName
                    ? "Your product enquiry is ready."
                    : "A little hello is always welcome."}
                </p>
              </article>
            )}

            {instagram && (
              <article className="sw-contact-card sw-contact-card-lavender">
                <span className="sw-contact-card-number">03 / INSTAGRAM</span>
                <span className="sw-contact-card-icon" aria-hidden="true">
                  ✿
                </span>
                <h3>Find us in our little world.</h3>
                <p>Explore our Instagram and keep up with Swaadarpan.</p>
                <a
                  className="sw-contact-card-link"
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Instagram <span aria-hidden="true">↗</span>
                </a>
                <p className="sw-contact-address">
                  Come say hello over there, too.
                </p>
              </article>
            )}
          </div>
        ) : (
          <div className="sw-contact-unconfigured">
            <span aria-hidden="true">✿</span>
            <h3>Our little inbox is getting ready.</h3>
            <p>
              Contact options haven&apos;t been configured yet. Please check
              back after the Swaadarpan team adds its verified contact details.
            </p>
          </div>
        )}

        {/* Product enquiry prompt */}
        <div className="sw-contact-enquiry">
          <div className="sw-contact-enquiry-icon" aria-hidden="true">
            ♡
          </div>
          <div className="sw-contact-enquiry-copy">
            <p className="sw-contact-section-eyebrow">A LITTLE TIP</p>
            <h2>
              Asking about a <em>specific piece?</em>
            </h2>
            <p>
              Mention its name and any questions about materials, dimensions,
              care, or availability. We&apos;ll share details once they&apos;re
              confirmed.
            </p>
            {productName && (
              <p className="sw-contact-product-context">
                Your enquiry is about: <strong>{productName}</strong>
              </p>
            )}
          </div>
          {whatsappHref ? (
            <a
              href={whatsappHref}
              className="sw-contact-enquiry-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask about a piece <span aria-hidden="true">↗</span>
            </a>
          ) : email ? (
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                productName
                  ? `Enquiry about ${productName}`
                  : "Swaadarpan product enquiry",
              )}&body=${encodeURIComponent(
                productName
                  ? `Hi Swaadarpan,\n\nI'm interested in ${productName}.\n\nCould you please share more details about its availability and product information?\n\nThank you!`
                  : "Hi Swaadarpan,\n\nI'd love to know more about your handmade collection.\n\nThank you!",
              )}`}
              className="sw-contact-enquiry-button"
            >
              Ask about a piece <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link href="/shop" className="sw-contact-enquiry-button">
              Explore the shop <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </section>

      {/* Closing */}
      <section className="sw-contact-closing">
        <span className="sw-contact-closing-flower" aria-hidden="true">
          ✳
        </span>
        <p className="sw-contact-section-eyebrow">THANK YOU FOR BEING HERE</p>
        <h2>
          Little things.
          <br />
          <em>Meaningful connections.</em>
        </h2>
        <p>
          We&apos;re glad our little world brought you here. Have a lovely day.
        </p>
        <Link href="/shop" className="sw-contact-shop-link">
          Back to the goodies <span aria-hidden="true">↗</span>
        </Link>
        <span className="sw-contact-signoff">with love, Swaadarpan ♡</span>
      </section>
    </main>
  );
}
