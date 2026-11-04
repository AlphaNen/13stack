import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ProductInstall({
  eyebrow,
  title,
  subtitle,
  filename,
  code,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  filename: string;
  code: string;
}) {
  return (
    <section className="px-gutter py-10 sm:py-14">
      <RevealGroup className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-12">
        <RevealItem className="flex flex-col gap-2 sm:gap-3">
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

        <RevealItem className="overflow-hidden rounded-2xl border border-white/10 bg-[#060d14]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="font-mono text-[11px] tracking-wide text-white/45">
              {filename}
            </span>
            <span className="text-[11px] text-primary">Paste & restart</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-white/80 sm:p-5 sm:text-[13px]">
            <code>{code}</code>
          </pre>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
