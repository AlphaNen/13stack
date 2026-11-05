"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  blogPage,
  getVisibleBlogPosts,
  type BlogPostKind,
} from "@/lib/mock-data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

type FilterId = "all" | BlogPostKind;

const kindLabel = {
  news: "News",
  article: "Article",
} as const;

export function BlogFeed() {
  const [filter, setFilter] = useState<FilterId>("all");

  const posts = useMemo(() => {
    const visible = getVisibleBlogPosts();
    if (filter === "all") return visible;
    return visible.filter((post) => post.kind === filter);
  }, [filter]);

  return (
    <section className="px-gutter pb-20 sm:pb-24">
      <RevealGroup className="w-full items-start gap-0">
        <RevealItem className="w-full border-y border-white/10">
          <div
            role="tablist"
            aria-label="Filter build log posts"
            className="flex w-full items-stretch gap-1 overflow-x-auto sm:gap-2"
          >
            {blogPage.filters.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item.id)}
                  className={`relative shrink-0 px-3.5 py-3.5 text-sm font-medium tracking-tight transition-colors sm:px-4 ${
                    active
                      ? "text-white"
                      : "text-text-03 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute inset-x-3 -bottom-px h-0.5 rounded-full transition-colors sm:inset-x-3.5 ${
                      active ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </RevealItem>
      </RevealGroup>

      <div className="mx-auto w-full max-w-[var(--page-max-width)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col"
          >
            {posts.length === 0 ? (
              <div className="w-full max-w-lg py-10">
                <h2 className="text-xl font-semibold tracking-tight">
                  {blogPage.emptyTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-03 sm:text-base">
                  {blogPage.emptyBody}
                </p>
              </div>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid w-full grid-cols-1 gap-3 border-b border-white/10 py-6 transition-colors sm:grid-cols-[7.5rem_minmax(0,1fr)_auto] sm:items-start sm:gap-6 sm:py-7"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:flex-col sm:items-start sm:gap-2">
                    <span className="text-[11px] font-medium tracking-wide text-primary uppercase">
                      {kindLabel[post.kind]}
                    </span>
                    <time
                      dateTime={post.date}
                      className="text-xs text-text-03 sm:text-sm"
                    >
                      {post.dateLabel}
                    </time>
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-primary sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-pretty text-text-03 sm:text-base">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-text-03">
                      {post.author} · {post.readingTime}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="hidden shrink-0 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary sm:mt-1 sm:block"
                  />
                </Link>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
