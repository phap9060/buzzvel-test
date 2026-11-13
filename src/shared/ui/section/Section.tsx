import { cn } from "@/shared/lib/cn";
import type { SectionProps } from "./Section.types";

export function Section({ id, labelledBy, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-15 md:py-20 lg:py-25", className)}
    >
      {children}
    </section>
  );
}
