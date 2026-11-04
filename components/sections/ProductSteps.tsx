import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ProductSteps({
  eyebrow,
  title,
  subtitle,
  items,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { label: string; title: string; body: string }[];
}) {
  return (
    <section className="px-gutter py-10 sm:py-14">
      <RevealGroup className="mx-auto flex w-full max-w-[1100px] flex-col gap-8 sm:gap-10">
        <RevealItem className="flex max-w-2xl flex-col gap-2 sm:gap-3">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(1.55rem,3vw+0.7rem,2.35rem)] font-medium tracking-tight leading-[1.15] text-balance">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-pretty text-text-03 sm:text-base">
            {subtitle}
          </p>
        </RevealItem>

        <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
          {items.map((item) => (
            <RevealItem key={item.label} className="flex flex-col gap-2.5">
              <span className="font-mono text-xs tracking-wide text-primary">
                {item.label}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-pretty text-text-03">
                {item.body}
              </p>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>
    </section>
  );
}
