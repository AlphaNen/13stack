import { siNpm } from "simple-icons";

export type ProductLogoId = "skedvio" | "elim-mcp" | "fylmkit";

export type ProductLogo =
  | {
      kind: "image";
      src: string;
      alt: string;
    }
  | {
      kind: "npm";
      alt: string;
      path: string;
      hex: string;
    };

export const productLogos: Record<ProductLogoId, ProductLogo> = {
  skedvio: {
    kind: "image",
    src: "/assets/products/skedvio.png",
    alt: "Skedvio",
  },
  fylmkit: {
    kind: "image",
    src: "/assets/products/fylmkit.png",
    alt: "Fylmkit",
  },
  "elim-mcp": {
    kind: "npm",
    alt: "elim-mcp on npm",
    path: siNpm.path,
    hex: `#${siNpm.hex}`,
  },
};

export function isProductLogoId(id: string): id is ProductLogoId {
  return id in productLogos;
}
