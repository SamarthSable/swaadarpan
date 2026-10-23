"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const links = [
  ["Home", "/"],
  ["Shop", "/shop"],
  ["Collections", "/shop#collections"],
  ["Our story", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const menuVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.22, staggerChildren: 0.055 },
    },
    exit: { opacity: 0, y: -6, transition: { duration: 0.16 } },
  };

  return (
    <header className="sw-header">
      <div className="sw-header-inner">
        <Link
          className="sw-wordmark"
          href="/"
          aria-label="Swaadarpan home"
          onClick={() => setOpen(false)}
        >
          <span className="sw-brand-icon" aria-hidden="true">
            <Sparkles size={17} strokeWidth={1.6} />
          </span>

          <span className="sw-brand-copy">
            <span className="sw-brand-name">
              swaadarpan<span className="sw-brand-star">✳</span>
            </span>
            <span className="sw-brand-tagline">HANDMADE, WITH HEART</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="sw-desktop-nav">
          {links.map(([label, href], index) => (
            <motion.div
              key={href}
              initial={reduceMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
            >
              <Link
                href={href}
                className="sw-nav-link"
                onClick={() => setOpen(false)}
              >
                {label}
                <span className="sw-nav-underline" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="sw-header-actions">
          <Link className="sw-header-cta" href="/contact">
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>

          <button
            className="sw-menu-toggle"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="sw-mobile-navigation"
            onClick={() => setOpen((previous) => !previous)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="sw-mobile-navigation"
            aria-label="Mobile navigation"
            className="sw-mobile-nav"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="sw-mobile-nav-note">
              <span>A LITTLE SOMETHING SPECIAL</span>
              <span aria-hidden="true">♡</span>
            </div>

            {links.map(([label, href], index) => (
              <motion.div
                key={href}
                variants={
                  reduceMotion
                    ? {}
                    : {
                        hidden: { opacity: 0, x: -8 },
                        visible: { opacity: 1, x: 0 },
                      }
                }
              >
                <Link
                  href={href}
                  className="sw-mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  <span className="sw-mobile-nav-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{label}</span>
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </Link>
              </motion.div>
            ))}

            <p className="sw-mobile-nav-footer">
              Little things, made with love. <span>✳</span>
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
