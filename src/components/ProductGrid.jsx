"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  const reduceMotion = useReducedMotion();

  if (!products.length) {
    return (
      <motion.div
        className="sw-product-empty"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span className="sw-empty-flower" aria-hidden="true">
          ✿
        </span>

        <p className="sw-empty-eyebrow">A LITTLE PAUSE</p>

        <h3>Something lovely is on its way.</h3>

        <p className="sw-empty-description">
          There aren&apos;t any pieces in this collection just yet. Explore the
          rest of Swaadarpan to find your next favourite.
        </p>

        <Link href="/shop" className="sw-empty-button">
          Explore all pieces <span aria-hidden="true">↗</span>
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="sw-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
