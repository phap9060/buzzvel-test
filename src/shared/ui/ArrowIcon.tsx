import Image from "next/image";
import { cn } from "@/shared/lib/cn";
import type { ArrowIconProps } from "./ArrowIcon.types";

const sources = {
  dark: "/icons/arrow-right.svg",
  light: "/icons/arrow-right-light.svg",
} as const;

export function ArrowIcon({ tone = "dark", className }: ArrowIconProps) {
  return (
    <Image
      src={sources[tone]}
      alt=""
      width={20}
      height={20}
      className={cn("shrink-0", className)}
    />
  );
}
