import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkHero } from "@/components/sections/WorkHero";
import { WorkCaseStudies } from "@/components/sections/WorkCaseStudies";
import { CTA } from "@/components/sections/CTA";
import { siteFlags } from "@/lib/flags";
import { workPage } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Work",
  description: workPage.subtitle,
};

export default function WorkPage() {
  if (!siteFlags.showServices) notFound();

  return (
    <main className="flex flex-1 flex-col">
      <WorkHero />
      <WorkCaseStudies />
      <CTA />
    </main>
  );
}
