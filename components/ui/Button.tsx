"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-transparent text-white border border-border-01/20",
  light: "bg-white text-bg-primary",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  const widthClasses = className
    .split(/\s+/)
    .filter((token) => /^(?:sm:|md:|lg:|xl:|2xl:)?w-/.test(token))
    .join(" ");
  const visualClasses = className
    .split(/\s+/)
    .filter((token) => token && !/^(?:sm:|md:|lg:|xl:|2xl:)?w-/.test(token))
    .join(" ");
  const wrapperWidth = widthClasses || "inline-block";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={wrapperWidth.includes("w-full") ? wrapperWidth : `inline-block ${wrapperWidth}`.trim()}
    >
      <Link
        href={href}
        className={`inline-flex w-full items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors hover:brightness-110 ${variantClasses[variant]} ${visualClasses}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
