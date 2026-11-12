import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type SectionProps = {
  /** Anchor target used by the navigation. */
  id?: string;
  /** Id of the heading that names this section for assistive technology. */
  labelledBy: string;
  children: ReactNode;
  className?: string;
};

/** Full-bleed page band with the vertical rhythm of the design (60 / 80 / 100px). */
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
