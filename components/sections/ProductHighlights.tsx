import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ProductHighlights({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <section className="px-gutter py-10 sm:py-14">
      <RevealGroup className="mx-auto grid w-full max-w-[1100px] gap-4 sm:grid-cols-3 sm:gap-5">
        {items.map((item) => (
          <RevealItem
            key={item.title}
            className="flex flex-col gap-2 border-t border-white/10 pt-4"
          >
            <h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">
              {item.title}
            </h2>
            <p className="text-sm leading-relaxed text-pretty text-text-03 sm:text-[15px]">
              {item.body}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
