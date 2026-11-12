import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type EyebrowTone = "brand" | "inverse";

type EyebrowProps = {
  children: ReactNode;
  tone?: EyebrowTone;
  className?: string;
};

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
