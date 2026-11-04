"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroRule } from "@/components/ui/HeroRule";
import { fadeUp, staggerContainer } from "@/lib/motion";

type Cta = { label: string; href: string };

export function ProductDetailHero({
  eyebrow,
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section className="relative overflow-clip px-gutter pt-[clamp(3rem,5.5vh,4.75rem)] pb-0">
      <div
        className="pointer-events-none absolute top-[18%] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px] lg:left-[20%] lg:translate-x-0"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-start gap-5 pb-[clamp(1.5rem,4vh,2.75rem)] sm:gap-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3"
        >
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </p>
          <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-wide text-primary">
            {badge}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-[clamp(2rem,4.5vw+0.8rem,3.25rem)] font-medium tracking-tight leading-[1.12] text-balance"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-prose text-[0.975rem] leading-relaxed text-pretty text-text-03 sm:text-base lg:text-lg"
        >
          {subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Button
            href={primaryCta.href}
            variant="primary"
            className="w-full shrink-0 px-5 py-3.5 text-base sm:w-auto sm:px-7"
          >
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button
              href={secondaryCta.href}
              variant="secondary"
              className="w-full shrink-0 px-5 py-3.5 text-base sm:w-auto sm:px-7"
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </motion.div>
      </motion.div>

      <HeroRule className="relative z-10" />
    </section>
  );
}
