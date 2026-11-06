import type { Metadata } from "next";
import { ProductDetailHero } from "@/components/sections/ProductDetailHero";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { ProductSteps } from "@/components/sections/ProductSteps";
import { ProductFeature } from "@/components/sections/ProductFeature";
import { ProductCapabilities } from "@/components/sections/ProductCapabilities";
import { ProductSibling } from "@/components/sections/ProductSibling";
import { CTA } from "@/components/sections/CTA";
import { skedvioProductPage } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Skedvio",
  description: skedvioProductPage.subtitle,
};

export default function SkedvioProductPage() {
  const page = skedvioProductPage;

  return (
    <main className="flex flex-1 flex-col">
      <ProductDetailHero
        eyebrow={page.eyebrow}
        badge={page.badge}
        logoId="skedvio"
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
      <section className="px-gutter">
        <div className="mx-auto w-full max-w-[var(--page-max-width)] lg:pl-6">
          <div className="lg:pl-10">
            <ProductFeature />
          </div>
        </div>
      </section>
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
        logoId={page.sibling.logoId}
      />
      <CTA />
    </main>
  );
}
