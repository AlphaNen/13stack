import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ProductWhy({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="px-gutter py-10 sm:py-14">
      <RevealGroup className="mx-auto max-w-[1100px]">
        <RevealItem className="flex max-w-3xl flex-col gap-3 border-l border-primary/40 pl-5 sm:pl-6">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(1.55rem,3vw+0.7rem,2.35rem)] font-medium tracking-tight leading-[1.15] text-balance">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-pretty text-text-03 sm:text-base lg:text-lg">
            {body}
          </p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
