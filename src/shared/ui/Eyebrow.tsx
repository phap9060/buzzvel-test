import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type EyebrowTone = "brand" | "inverse" | "muted";

type EyebrowProps = {
  children: ReactNode;
  tone?: EyebrowTone;
  className?: string;
};

const toneClasses: Record<EyebrowTone, string> = {
  brand: "text-brand",
  inverse: "text-white",
  muted: "text-ink-tertiary",
};

/** Small uppercase label that sits above headings ("Desktop/Overline"). */
export function Eyebrow({ children, tone = "brand", className }: EyebrowProps) {
  return (
    <p className={cn("text-overline", toneClasses[tone], className)}>
      {children}
    </p>
  );
}
