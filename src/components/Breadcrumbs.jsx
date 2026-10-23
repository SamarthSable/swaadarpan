"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function Breadcrumbs({ items = [] }) {
  const reduceMotion = useReducedMotion();

  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="sw-breadcrumbs">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <motion.li
              key={item.href || item.label}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.06,
              }}
            >
              {index > 0 && (
                <span className="sw-breadcrumb-separator" aria-hidden="true">
                  /
                </span>
              )}

              {item.href && !isLast ? (
                <Link href={item.href} className="sw-breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span className="sw-breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              )}
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}
