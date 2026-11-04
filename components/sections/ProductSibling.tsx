import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ProductSibling({
  label,
  name,
  line,
  href,
}: {
  label: string;
  name: string;
  line: string;
  href: string;
}) {
  return (
    <section className="px-gutter pb-4 pt-2 sm:pb-6 sm:pt-4">
      <RevealGroup className="mx-auto w-full max-w-[1100px]">
        <RevealItem>
          <Link
            href={href}
            className="group flex items-start justify-between gap-4 border-t border-white/10 py-6 transition-colors sm:py-8"
          >
            <div className="min-w-0">
              <p className="text-xs font-medium tracking-wide text-text-03 uppercase">
                {label}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-primary sm:text-2xl">
                {name}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-text-03 sm:text-base">
                {line}
              </p>
            </div>
            <ArrowUpRight
              size={20}
              className="mt-1 shrink-0 text-white/35 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
            />
          </Link>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
