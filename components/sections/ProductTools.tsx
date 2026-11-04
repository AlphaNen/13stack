import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ProductTools({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { name: string; body: string }[];
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
        </RevealItem>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {items.map((item) => (
            <RevealItem
              key={item.name}
              className="flex flex-col gap-2 rounded-xl border border-white/10 bg-card-bg p-4 sm:p-5"
            >
              <h3 className="font-mono text-sm font-semibold tracking-tight text-primary sm:text-base">
                {item.name}
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
