"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function SiteFooter() {
  const reduceMotion = useReducedMotion();

  const shopLinks = [
    { href: "/shop", label: "Shop all" },
    { href: "/about", label: "Our story" },
    { href: "/contact", label: "Get in touch" },
    { href: "/inspiration", label: "Inspiration" },
  ];

  const policyLinks = [
    { href: "/shipping-policy", label: "Shipping" },
    { href: "/return-policy", label: "Returns" },
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <footer className="sw-footer">
      <div className="sw-footer-glow sw-footer-glow-one" />
      <div className="sw-footer-glow sw-footer-glow-two" />

      <div className="sw-footer-main">
        <motion.div
          className="sw-footer-brand"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="sw-footer-wordmark">
            swaadarpan<span>✳</span>
          </Link>

          <p className="sw-footer-tagline">
            Little things,
            <br />
            made with <span>love.</span> ♡
          </p>

          <p className="sw-footer-description">
            Thoughtful little details, handmade to bring more warmth, colour,
            and personality into your everyday.
          </p>

          <Link href="/shop" className="sw-footer-cta">
            Find your little favourite <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>

        <div className="sw-footer-column">
          <p className="sw-footer-heading">
            TAKE A LITTLE LOOK <span>✿</span>
          </p>

          <nav aria-label="Shop and brand">
            {shopLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Link href={link.href} className="sw-footer-link">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="sw-footer-column">
          <p className="sw-footer-heading">
            THE LITTLE DETAILS <span>♡</span>
          </p>

          <nav aria-label="Store policies">
            {policyLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Link href={link.href} className="sw-footer-link">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="sw-footer-note-card">
          <span className="sw-footer-note-icon" aria-hidden="true">
            ✳
          </span>

          <p className="sw-footer-heading">A LITTLE NOTE</p>

          <h3>Handmade hits different.</h3>

          <p className="sw-footer-note-copy">
            Every little detail deserves a little love. We&apos;re so happy
            you&apos;re here.
          </p>

          <span className="sw-footer-note-decoration" aria-hidden="true">
            made with ♡
          </span>
        </div>
      </div>

      <div className="sw-footer-bottom">
        <p>
          © {new Date().getFullYear()} Swaadarpan.
          <span> Made with a little extra love.</span>
        </p>

        <Link href="/shop" className="sw-footer-back-top">
          Back to the goodies <span aria-hidden="true">↑</span>
        </Link>
      </div>
    </footer>
  );
}
