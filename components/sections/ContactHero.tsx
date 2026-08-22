import { Mail } from "lucide-react";
import { contactPage } from "@/lib/mock-data";
import { siteContacts } from "@/lib/site";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ContactHero() {
  return (
    <RevealGroup className="flex flex-col items-start gap-8 text-left lg:max-w-[28rem]">
      <div className="flex flex-col gap-4">
        <RevealItem>
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            {contactPage.eyebrow}
          </p>
        </RevealItem>
        <RevealItem>
          <h1 className="text-[clamp(2rem,4vw+0.75rem,3rem)] font-medium tracking-tight leading-[1.12]">
            {contactPage.title}
          </h1>
        </RevealItem>
        <RevealItem>
          <p className="max-w-prose text-[0.9375rem] leading-relaxed text-text-03 sm:text-base">
            {contactPage.subtitle}
          </p>
        </RevealItem>
      </div>

      <RevealItem className="flex w-full flex-col gap-5 border-t border-white/10 pt-6">
        {siteContacts.map((group) => (
          <div key={group.group} className="flex flex-col gap-2">
            <p className="text-[11px] font-medium tracking-wide text-text-03 uppercase">
              {group.group}
            </p>
            <ul className="flex flex-col gap-1.5">
              {group.items.map((item) => (
                <li key={item.email} className="flex items-baseline gap-3">
                  <span className="w-[5.5rem] shrink-0 text-xs text-text-03">
                    {item.label}
                  </span>
                  <a
                    href={`mailto:${item.email}`}
                    className="inline-flex min-w-0 items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-primary"
                  >
                    {group.group === "Studio" ? (
                      <Mail size={14} className="shrink-0 text-primary" />
                    ) : null}
                    {item.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-1.5">
          <p className="text-[11px] font-medium tracking-wide text-text-03 uppercase">
            {contactPage.responseLabel}
          </p>
          <p className="text-sm text-white">{contactPage.responseValue}</p>
        </div>
      </RevealItem>

      <RevealItem className="grid w-full gap-5 sm:grid-cols-3 lg:grid-cols-1">
        {contactPage.points.map((point) => (
          <div key={point.label} className="flex flex-col gap-1">
            <p className="text-sm font-medium tracking-tight text-white">
              {point.label}
            </p>
            <p className="text-[13px] leading-relaxed text-text-03">
              {point.detail}
            </p>
          </div>
        ))}
      </RevealItem>
    </RevealGroup>
  );
}
