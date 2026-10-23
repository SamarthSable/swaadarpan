"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function CategoryCard({ category }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="sw-category-wrapper"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -7 }}
    >
      <Link
        className="sw-category-tile"
        href={`/categories/${category.slug}`}
        aria-label={`Explore ${category.name} collection`}
      >
        <div className="sw-category-art">
          <Image
            src={category.image}
            alt={`${category.name} collection`}
            fill
            sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 23vw"
            className="sw-category-image"
          />

          <div className="sw-category-overlay" />

          <span className="sw-category-badge">MADE WITH LOVE ✿</span>

          <motion.span
            className="sw-category-arrow"
            aria-hidden="true"
            whileHover={reduceMotion ? undefined : { rotate: 45 }}
          >
            ↗
          </motion.span>
        </div>

        <div className="sw-category-meta">
          <div>
            <span className="sw-category-caption">
              YOUR NEXT LITTLE FAVOURITE
            </span>
            <h3 className="sw-category-name">{category.name}</h3>
          </div>

          <span className="sw-category-explore" aria-hidden="true">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
