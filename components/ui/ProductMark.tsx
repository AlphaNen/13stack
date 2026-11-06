import Image from "next/image";
import {
  isProductLogoId,
  productLogos,
  type ProductLogoId,
} from "@/lib/product-logos";

const sizeMap = {
  sm: { box: "h-10 w-10", image: 28, icon: 18, radius: "rounded-xl" },
  md: { box: "h-11 w-11 sm:h-12 sm:w-12", image: 32, icon: 20, radius: "rounded-xl" },
  lg: { box: "h-14 w-14 sm:h-16 sm:w-16", image: 44, icon: 28, radius: "rounded-2xl" },
} as const;

export function ProductMark({
  id,
  size = "md",
  className = "",
}: {
  id: ProductLogoId | string;
  size?: keyof typeof sizeMap;
  className?: string;
}) {
  const dims = sizeMap[size];
  const logo = isProductLogoId(id) ? productLogos[id] : null;

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-[#0a0a0a] ${dims.box} ${dims.radius} ${className}`}
      aria-hidden
    >
      {!logo ? (
        <span className="font-mono text-sm font-semibold text-primary">?</span>
      ) : logo.kind === "image" ? (
        <Image
          src={logo.src}
          alt=""
          fill
          sizes={`${dims.image}px`}
          className="object-cover"
        />
      ) : (
        <svg viewBox="0 0 24 24" width={dims.icon} height={dims.icon} className="shrink-0">
          <title>{logo.alt}</title>
          <path fill={logo.hex} d={logo.path} />
        </svg>
      )}
    </span>
  );
}
