"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getVisibleBlogPosts, productsPage } from "@/lib/mock-data";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ProductMark } from "@/components/ui/ProductMark";
import { TextLink } from "@/components/ui/TextLink";

const kindLabel = {
  news: "News",
  article: "Article",
} as const;

export function ProductsBody() {
  const { overview, proof, catalog, principles, audiences, updates } =
    productsPage;
  const updatePosts = getVisibleBlogPosts().filter((post) =>
    updates.slugs.includes(post.slug),
  );

  return (
    <section className="relative px-gutter pb-10 pt-2 sm:pb-14 sm:pt-4 md:pb-16">
      <div className="relative mx-auto w-full max-w-[var(--page-max-width)]">
        <RevealGroup className="flex w-full flex-col gap-12 sm:gap-16">
          <div className="flex w-full flex-col gap-8 sm:gap-10">
            <RevealItem className="flex max-w-3xl flex-col gap-2 text-left sm:gap-3">
              <p className="text-xs font-medium tracking-wide text-primary uppercase">
                {overview.eyebrow}
              </p>
              <h2 className="text-[clamp(1.65rem,4vw+0.75rem,2.75rem)] font-medium tracking-tight leading-[1.15] text-balance">
                {overview.title}
              </h2>
              <p className="text-base leading-snug text-pretty text-text-03 sm:text-lg lg:text-xl">
                {overview.subtitle}
              </p>
            </RevealItem>

            <RevealItem className="grid grid-cols-2 gap-3 border-y border-white/10 py-5 sm:grid-cols-4 sm:gap-4 sm:py-6">
              {proof.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {item.value}
                  </p>
                  <p className="text-xs tracking-wide text-text-03 uppercase sm:text-[13px] sm:normal-case sm:tracking-normal">
                    {item.label}
                  </p>
                </div>
              ))}
            </RevealItem>

            <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {catalog.map((item) => (
                <RevealItem key={item.id} className="w-full">
                  <div className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-card-bg p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <ProductMark id={item.id} size="md" />
                      <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {item.name}
                        </h3>
                        <p className="text-xs tracking-wide text-text-03">
                          {item.meta}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-pretty text-text-03 sm:text-[15px]">
                        {item.line}
                      </p>
                    </div>

                    <ul className="flex flex-col gap-2 border-t border-white/10 pt-4">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-text-02"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-primary"
                      >
                        {item.cta}
                        <ArrowUpRight size={14} />
                      </Link>
                      {item.externalHref && item.externalLabel ? (
                        <a
                          href={item.externalHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-03 transition-colors hover:text-white"
                        >
                          {item.externalLabel}
                          <ArrowUpRight size={14} className="opacity-70" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 border-t border-white/10 pt-10 sm:gap-8 sm:pt-12">
            <RevealItem className="flex max-w-2xl flex-col gap-2 sm:gap-3">
              <p className="text-xs font-medium tracking-wide text-primary uppercase">
                {principles.eyebrow}
              </p>
              <h2 className="text-[clamp(1.55rem,3vw+0.7rem,2.35rem)] font-medium tracking-tight leading-[1.15] text-balance">
                {principles.title}
              </h2>
              <p className="text-sm leading-relaxed text-pretty text-text-03 sm:text-base">
                {principles.subtitle}
              </p>
            </RevealItem>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {principles.items.map((item, i) => (
                <RevealItem
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:gap-4 sm:p-5"
                >
                  <span className="font-mono text-xs tracking-wide text-primary sm:text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-pretty text-text-03">
                      {item.body}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 border-t border-white/10 pt-10 sm:gap-8 sm:pt-12">
            <RevealItem className="flex max-w-2xl flex-col gap-2 sm:gap-3">
              <p className="text-xs font-medium tracking-wide text-primary uppercase">
                {audiences.eyebrow}
              </p>
              <h2 className="text-[clamp(1.55rem,3vw+0.7rem,2.35rem)] font-medium tracking-tight leading-[1.15] text-balance">
                {audiences.title}
              </h2>
              <p className="text-sm leading-relaxed text-pretty text-text-03 sm:text-base">
                {audiences.subtitle}
              </p>
            </RevealItem>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {audiences.items.map((item) => (
                <RevealItem key={item.product} className="w-full">
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col gap-3 border-t border-white/10 pt-5 transition-colors"
                  >
                    <p className="text-xs font-medium tracking-wide text-primary uppercase">
                      {item.product}
                    </p>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-pretty text-text-03 sm:text-[15px]">
                      {item.body}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </div>
          </div>

          {updatePosts.length > 0 ? (
            <div className="flex w-full flex-col gap-6 border-t border-white/10 pt-10 sm:gap-8 sm:pt-12">
              <RevealItem className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div className="flex max-w-2xl flex-col gap-2 sm:gap-3">
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    {updates.eyebrow}
                  </p>
                  <h2 className="text-[clamp(1.55rem,3vw+0.7rem,2.35rem)] font-medium tracking-tight leading-[1.15] text-balance">
                    {updates.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-pretty text-text-03 sm:text-base">
                    {updates.subtitle}
                  </p>
                </div>
                <TextLink href={updates.viewAllHref}>
                  {updates.viewAllLabel}
                </TextLink>
              </RevealItem>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {updatePosts.map((post) => (
                  <RevealItem key={post.slug} className="w-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-primary/30 sm:p-5"
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-03">
                        <span className="font-medium text-primary">
                          {kindLabel[post.kind]}
                        </span>
                        <span>{post.dateLabel}</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <h3 className="text-base font-semibold tracking-tight text-white transition-colors group-hover:text-primary sm:text-lg">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-pretty text-text-03">
                        {post.excerpt}
                      </p>
                    </Link>
                  </RevealItem>
                ))}
              </div>
            </div>
          ) : null}
        </RevealGroup>
      </div>
    </section>
  );
}
