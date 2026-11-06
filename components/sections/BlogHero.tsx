import { blogPage } from "@/lib/mock-data";
import { HeroBlogVisual } from "@/components/sections/HeroBlogVisual";
import { SplitHero } from "@/components/sections/SplitHero";

export function BlogHero() {
  return (
    <SplitHero
      eyebrow={blogPage.eyebrow}
      from={blogPage.headingFrom}
      to={blogPage.headingTo}
      subtitle={blogPage.subtitle}
      visual={<HeroBlogVisual />}
    />
  );
}
