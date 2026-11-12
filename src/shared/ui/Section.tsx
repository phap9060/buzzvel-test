import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type SectionProps = {
  id?: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
};

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
