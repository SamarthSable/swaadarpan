"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function PolicyPage({ eyebrow, title, intro, sections = [] }) {
  const reduceMotion = useReducedMotion();

  return (
    <main className="sw-policy-page">
      <header className="sw-policy-hero">
        <div className="sw-policy-glow sw-policy-glow-one" />
        <div className="sw-policy-glow sw-policy-glow-two" />

        <motion.div
          className="sw-policy-hero-inner"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href="/" className="sw-policy-back">
            <span aria-hidden="true">←</span> Back to Swaadarpan
          </Link>

          <span className="sw-policy-eyebrow">
            <span aria-hidden="true">✳</span> {eyebrow}
          </span>

          <h1>{title}</h1>

          <p className="sw-policy-intro">{intro}</p>

          <div className="sw-policy-decoration" aria-hidden="true">
            made with care <span>♡</span>
          </div>
        </motion.div>
      </header>

      <div className="sw-policy-layout">
        <aside className="sw-policy-sidebar">
          <div className="sw-policy-sidebar-card">
            <span className="sw-policy-sidebar-icon" aria-hidden="true">
              ♡
            </span>

            <h2>Good to know</h2>

            <p>
              We believe in keeping things clear, thoughtful, and transparent.
              Here&apos;s the information you need.
            </p>

            <Link href="/contact" className="sw-policy-contact">
              Questions? Talk to us ↗
            </Link>
          </div>
        </aside>

        <article className="sw-policy-content">
          <div className="sw-policy-notice">
            <span aria-hidden="true">✦</span>

            <p>
              <strong>Before publishing:</strong> This is an editable template.
              Review all business details and replace placeholders with
              confirmed information. This template is not legal advice.
            </p>
          </div>

          <div className="sw-policy-sections">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                className="sw-policy-section"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.06, 0.24),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="sw-policy-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="sw-policy-section-body">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              </motion.section>
            ))}
          </div>

          <div className="sw-policy-footer-card">
            <div>
              <span className="sw-policy-eyebrow">STILL HAVE QUESTIONS?</span>

              <h2>We&apos;re happy to help.</h2>

              <p>Reach out if anything needs clarification.</p>
            </div>

            <Link href="/contact" className="sw-policy-contact-button">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
