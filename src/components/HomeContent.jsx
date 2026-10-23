"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import CategoryCard from "@/src/components/CategoryCard";
import ProductGrid from "@/src/components/ProductGrid";
import { categories } from "@/src/data/categories";
import { getFeaturedProducts } from "@/src/data/products";

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion ? false : { opacity: 0, y: 32, filter: "blur(8px)" }
      }
      whileInView={
        reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeContent() {
  const reduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <main className="swaadarpan-home">
      {/* HERO */}
      <section className="modern-hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <motion.div
          className="modern-hero-copy"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.13 },
            },
          }}
        >
          <motion.div {...entrance(0.1)} className="hero-pill">
            <span className="live-dot" />
            LITTLE THINGS, BIG FEELINGS
            <span>✳</span>
          </motion.div>

          <motion.h1 {...entrance(0.2)}>
            Your world,
            <br />
            your little <span className="gradient-word">wonder.</span>
          </motion.h1>

          <motion.p {...entrance(0.3)} className="modern-hero-description">
            Handmade crochet and happy little details to make your space feel a
            little more <em>you.</em>
          </motion.p>

          <motion.div {...entrance(0.4)} className="modern-hero-actions">
            <Link href="/shop" className="gradient-button">
              Find your favourite
              <span aria-hidden="true"> ↗</span>
            </Link>

            <Link href="/about" className="modern-text-link">
              Get to know us <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          <motion.div {...entrance(0.55)} className="hero-social-proof">
            <div className="mini-flower">✿</div>
            <p>
              Made with care.
              <br />
              Kept with love.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="modern-hero-visual"
          initial={
            reduceMotion ? false : { opacity: 0, scale: 0.88, rotate: 3 }
          }
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
        >
          <div className="hero-image-halo" />

          <motion.div
            className="hero-image-frame"
            animate={
              reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 0.6, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/hero-crochet.svg"
              alt="Handmade crochet flower bouquet in soft pastel colours"
              fill
              priority
              sizes="(max-width: 800px) 90vw, 48vw"
            />
          </motion.div>

          <motion.div
            className="floating-note floating-note-top"
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>✿</span>
            made with love
          </motion.div>

          <motion.div
            className="floating-note floating-note-bottom"
            animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>♡</span> not mass-made
          </motion.div>

          <span className="hero-sparkle sparkle-one">✳</span>
          <span className="hero-sparkle sparkle-two">✦</span>
        </motion.div>
      </section>

      {/* COLLECTIONS */}
      <section className="modern-section" id="collections">
        <Reveal>
          <div className="modern-section-heading">
            <div>
              <span className="modern-eyebrow">A LITTLE BIT OF LOVELY</span>
              <h2>
                What's your
                <br />
                <span className="gradient-word">kind of cute?</span>
              </h2>
            </div>

            <p>
              From tiny treasures to cosy corners, find something that feels
              like it was made just for you.
            </p>
          </div>
        </Reveal>

        <div className="modern-category-grid">
          {categories.slice(0, 4).map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.09}>
              <motion.div
                className={`modern-category-card category-tone-${index + 1}`}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        rotate: index % 2 === 0 ? -1 : 1,
                      }
                }
                transition={{ duration: 0.3, ease }}
              >
                <CategoryCard category={category} />
                <span className="category-sparkle" aria-hidden="true">
                  {index % 2 === 0 ? "✳" : "✦"}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="modern-featured">
        <div className="featured-glow" />

        <Reveal>
          <div className="modern-section-heading">
            <div>
              <span className="modern-eyebrow">THE CUTIE COLLECTION</span>
              <h2>
                Little things.
                <br />
                <span className="gradient-word">Lots of heart.</span>
              </h2>
            </div>

            <Link href="/shop" className="modern-outline-button">
              Meet all the cuties ↗
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ProductGrid products={getFeaturedProducts()} />
        </Reveal>
      </section>

      {/* BRAND STORY */}
      <section className="modern-story">
        <Reveal className="modern-story-art">
          <div className="story-image-frame">
            <Image
              src="/images/handmade.svg"
              alt="Illustration inspired by handmade crochet stitches"
              fill
              sizes="(max-width: 800px) 90vw, 45vw"
            />
          </div>
          <span className="story-sticker">A little handmade magic ✷</span>
        </Reveal>

        <Reveal className="modern-story-copy" delay={0.12}>
          <span className="modern-eyebrow">NOT JUST STUFF. FEELINGS.</span>
          <h2>
            Made by hand.
            <br />
            <span className="gradient-word">Made to mean more.</span>
          </h2>
          <p>
            There's something special about things made slowly. Every loop,
            every colour, every tiny detail brings a little more personality
            into your everyday.
          </p>
          <Link href="/about" className="gradient-button">
            The Swaadarpan story ↗
          </Link>
        </Reveal>
      </section>

      {/* GIFT CTA */}
      <Reveal>
        <section className="modern-gift-band">
          <span className="gift-decoration gift-decoration-one">✿</span>
          <span className="gift-decoration gift-decoration-two">✳</span>

          <span className="modern-eyebrow">PSST... THEY'D LOVE THIS</span>
          <h2>
            Give them
            <br />
            <span>something heartfelt.</span>
          </h2>
          <p>
            Because the best gifts feel personal, thoughtful, and a little bit
            unexpected.
          </p>
          <Link href="/categories/handmade-gifts" className="gift-button">
            Find a little something ↗
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
