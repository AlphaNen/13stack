import { Hero } from "@/components/sections/Hero";
import { TrustedCompanies } from "@/components/sections/TrustedCompanies";
import { HowWeBuild } from "@/components/sections/HowWeBuild";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { AboutBrief } from "@/components/sections/AboutBrief";
import { Blog } from "@/components/sections/Blog";
import { CTA } from "@/components/sections/CTA";
import { siteFlags } from "@/lib/flags";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <TrustedCompanies />
      {siteFlags.showServices ? <HowWeBuild /> : null}
      <ProductsPreview />
      {siteFlags.showServices ? <WorkPreview /> : null}
      <AboutBrief />
      <Blog />
      <CTA />
    </main>
  );
}
