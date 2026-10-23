"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ProductGrid from "./ProductGrid";

export default function ShopCatalog({ categories = [], products = [] }) {
  const [selected, setSelected] = useState("all");
  const [sort, setSort] = useState("featured");
  const reduceMotion = useReducedMotion();

  const visible = useMemo(() => {
    return products
      .filter((product) => selected === "all" || product.category === selected)
      .slice()
      .sort((a, b) => {
        if (sort === "name") {
          return a.name.localeCompare(b.name);
        }

        return (
          Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
          a.name.localeCompare(b.name)
        );
      });
  }, [products, selected, sort]);

  const filters = [
    ["all", "All pieces"],
    ...categories.map((category) => [category.slug, category.name]),
  ];

  return (
    <section className="sw-shop-catalog" id="collections">
      <motion.div
        className="sw-shop-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <span className="sw-shop-eyebrow">✳ THE HANDMADE EDIT</span>

          <h2>
            Find your next
            <br />
            <span className="sw-shop-gradient">little favourite.</span>
          </h2>

          <p>
            Thoughtful little pieces, made to bring a little more personality
            into your world.
          </p>
        </div>

        <div className="sw-shop-count" aria-live="polite">
          <span>{visible.length}</span>
          <span>{visible.length === 1 ? "piece" : "pieces"}</span>
          <span className="sw-count-flower" aria-hidden="true">
            ✿
          </span>
        </div>
      </motion.div>

      <div className="sw-shop-toolbar">
        <div
          className="sw-filter-list"
          role="group"
          aria-label="Filter products by category"
        >
          {filters.map(([slug, label]) => {
            const active = selected === slug;

            return (
              <button
                key={slug}
                type="button"
                className={`sw-filter-pill ${active ? "is-active" : ""}`}
                aria-pressed={active}
                onClick={() => setSelected(slug)}
              >
                {active && (
                  <motion.span
                    layoutId="sw-filter-active"
                    className="sw-filter-highlight"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="sw-filter-label">{label}</span>
                {active && (
                  <span className="sw-filter-check" aria-hidden="true">
                    ✳
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <label className="sw-sort-control">
          <span>Sort by</span>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="name">Name, A–Z</option>
          </select>

          <span className="sw-sort-arrow" aria-hidden="true">
            ↓
          </span>
        </label>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${selected}-${sort}`}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.22 }}
        >
          <ProductGrid products={visible} />
        </motion.div>
      </AnimatePresence>

      <div className="sw-shop-bottom-note">
        <span aria-hidden="true">♡</span>
        <p>A little handmade magic, picked just for you.</p>
      </div>
    </section>
  );
}
