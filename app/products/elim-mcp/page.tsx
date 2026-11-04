import type { Metadata } from "next";
import { ProductDetailHero } from "@/components/sections/ProductDetailHero";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import { ProductWhy } from "@/components/sections/ProductWhy";
import { ElimMcpDetail } from "@/components/sections/ElimMcpDetail";
import { ProductTools } from "@/components/sections/ProductTools";
import { ProductInstall } from "@/components/sections/ProductInstall";
import { ProductCapabilities } from "@/components/sections/ProductCapabilities";
import { ProductSibling } from "@/components/sections/ProductSibling";
import { CTA } from "@/components/sections/CTA";
import { elimMcpProductPage } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "elim-mcp",
  description: elimMcpProductPage.subtitle,
};

export default function ElimMcpProductPage() {
  const page = elimMcpProductPage;

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
      <ProductWhy
        eyebrow={page.why.eyebrow}
        title={page.why.title}
        body={page.why.body}
      />
      <section className="px-gutter">
        <div className="mx-auto w-full max-w-[var(--page-max-width)] lg:pl-6">
          <div className="lg:pl-10">
            <ElimMcpDetail />
          </div>
        </div>
      </section>
      <ProductTools
        eyebrow={page.tools.eyebrow}
        title={page.tools.title}
        items={page.tools.items}
      />
      <ProductInstall
        eyebrow={page.install.eyebrow}
        title={page.install.title}
        subtitle={page.install.subtitle}
        filename={page.install.filename}
        code={page.install.code}
      />
      <ProductCapabilities
        eyebrow={page.details.eyebrow}
        title={page.details.title}
        subtitle="Local-first memory that survives sessions, branches, and tool switches."
        items={page.details.items}
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
