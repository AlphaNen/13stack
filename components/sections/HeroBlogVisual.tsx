"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPage } from "@/lib/mock-data";
import { ProductMark } from "@/components/ui/ProductMark";

export function HeroBlogVisual() {
  const { label, items } = blogPage.heroProducts;

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[22rem] xl:max-w-[24rem]"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-3 text-[11px] font-medium tracking-wide text-primary uppercase">
        {label}
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-card-bg">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,145,255,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

        <ul className="relative divide-y divide-white/8">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group flex items-center gap-3.5 px-4 py-3.5 transition-colors hover:bg-white/[0.03] sm:gap-4 sm:px-5 sm:py-4"
              >
                <ProductMark
                  id={item.id}
                  size="sm"
                  className="transition-colors group-hover:border-primary/35"
                />

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                    <span className="text-sm font-semibold tracking-tight text-white sm:text-[15px]">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-medium tracking-wide text-text-03 uppercase">
                      {item.status}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-text-03 sm:text-[13px]">
                    {item.line}
                  </span>
                </span>

                <span
                  className="size-1.5 shrink-0 rounded-full bg-primary/70 opacity-50 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
