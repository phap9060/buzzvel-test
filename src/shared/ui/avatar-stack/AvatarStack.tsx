import Image from "next/image";
import { cn } from "@/shared/lib/cn";
import type { AvatarStackProps } from "./AvatarStack.types";

const sizeClasses = {
  32: "size-8",
  40: "size-10",
} as const;

export function AvatarStack({
  avatars,
  size = 32,
  ringClassName = "border-cream",
  className,
}: AvatarStackProps) {
  return (
    <ul className={cn("flex", className)}>
      {avatars.map((avatar, index) => (
        <li
          key={avatar.src}
          className={cn(
            "overflow-hidden rounded-full border-2 bg-brand-soft",
            sizeClasses[size],
            ringClassName,
            index > 0 && "-ml-2",
          )}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={size}
            height={size}
            className="size-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
