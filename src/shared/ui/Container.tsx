import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Horizontal page gutter: 20px on mobile, 40px on tablet and the 80px of the
 * 1280px desktop frame. Content never grows past the 1120px design column.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 md:px-10 xl:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
