"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function ProductCard({ product }) {
  const reduceMotion = useReducedMotion();
  const productHref = `/products/${product.slug}`;

  return (
    <motion.article
      className="sw-product-card"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      <Link
        className="sw-product-art"
        href={productHref}
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.images[0]}
          alt={product.altText || product.name}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1000px) 30vw, 23vw"
          className="sw-product-image"
        />

        <span className="sw-product-badge">✿ HANDMADE FEELING</span>

        <span className="sw-product-view" aria-hidden="true">
          View piece ↗
        </span>

        <span className="sw-product-sparkle" aria-hidden="true">
          ✳
        </span>
      </Link>

      <div className="sw-product-copy">
        <div className="sw-product-details">
          <Link href={productHref} className="sw-product-title-link">
            <h3>{product.name}</h3>
          </Link>

          <p>{product.shortDescription}</p>
        </div>

        <span className="sw-product-status">
          <span aria-hidden="true">✦</span> Sample
        </span>
      </div>
    </motion.article>
  );
}
