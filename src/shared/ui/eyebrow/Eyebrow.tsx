import { cn } from "@/shared/lib/cn";
import type { EyebrowProps, EyebrowTone } from "./Eyebrow.types";

const toneClasses: Record<EyebrowTone, string> = {
  brand: "text-brand",
  inverse: "text-white",
};

export function Eyebrow({ children, tone = "brand", className }: EyebrowProps) {
  return (
    <p className={cn("text-overline uppercase", toneClasses[tone], className)}>
      {children}
    </p>
  );
}
