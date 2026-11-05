import type { Metadata } from "next";
import { ProductDetailHero } from "@/components/sections/ProductDetailHero";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { ProductSteps } from "@/components/sections/ProductSteps";
import { ProductCapabilities } from "@/components/sections/ProductCapabilities";
import { ProductSibling } from "@/components/sections/ProductSibling";
import { CTA } from "@/components/sections/CTA";
import { fylmkitProductPage } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Fylmkit",
  description: fylmkitProductPage.subtitle,
};

export default function FylmkitProductPage() {
  const page = fylmkitProductPage;

  return (
    <main className="flex flex-1 flex-col">
      <ProductDetailHero
        eyebrow={page.eyebrow}
        badge={page.badge}
        title={page.title}
        subtitle={page.subtitle}
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
      />
      <ProductHighlights items={page.highlights} />
      <ProductSteps
        eyebrow={page.steps.eyebrow}
        title={page.steps.title}
        subtitle={page.steps.subtitle}
        items={page.steps.items}
      />
      <ProductCapabilities
        eyebrow={page.capabilities.eyebrow}
        title={page.capabilities.title}
        subtitle={page.capabilities.subtitle}
        items={page.capabilities.items}
      />
      <ProductSibling
        label={page.sibling.label}
        name={page.sibling.name}
        line={page.sibling.line}
        href={page.sibling.href}
      />
      <CTA />
    </main>
  );
}
