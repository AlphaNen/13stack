/**
 * Flip `showServices` to true to restore the studio offering:
 * /services, /work, homepage delivery + case-study sections,
 * service consultations, and client-delivery copy.
 */
export const siteFlags = {
  showServices: false,
} as const;

export function copyFor<T>(productCopy: T, servicesCopy: T): T {
  return siteFlags.showServices ? servicesCopy : productCopy;
}

export function isServiceHref(href: string) {
  return (
    href === "/services" ||
    href === "/work" ||
    href.startsWith("/services/") ||
    href.startsWith("/work/") ||
    href.startsWith("/work#")
  );
}
