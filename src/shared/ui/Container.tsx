import { cn } from "@/shared/lib/cn";
import type { ContainerProps } from "./Container.types";

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-5 md:px-10 xl:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
