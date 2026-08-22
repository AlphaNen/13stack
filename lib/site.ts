export const siteEmails = {
  hello: "hello@13stack.com",
  ceo: "ceo@13stack.com",
  cto: "cto@13stack.com",
  engineering: "engineering@13stack.com",
  sales: "sales@13stack.com",
  support: "support@13stack.com",
} as const;

export const siteContacts = [
  {
    group: "Studio",
    items: [{ label: "General", email: siteEmails.hello }],
  },
  {
    group: "Leadership",
    items: [
      { label: "CEO", email: siteEmails.ceo },
      { label: "CTO", email: siteEmails.cto },
      { label: "Engineering", email: siteEmails.engineering },
    ],
  },
  {
    group: "Sales & support",
    items: [
      { label: "Sales", email: siteEmails.sales },
      { label: "Support", email: siteEmails.support },
    ],
  },
] as const;

export const siteConfig = {
  name: "13Stack",
  description:
    "13Stack designs, builds, and ships production AI systems, full-stack products, and agentic automation.",
  defaultTitle: "13Stack | AI Systems and Products",
  contactEmail: siteEmails.hello,
  emails: siteEmails,
};

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}
