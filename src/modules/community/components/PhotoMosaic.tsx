import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/cn";
import type { MosaicColumn } from "../types";

type PhotoMosaicProps = {
  columns: readonly MosaicColumn[];
  className?: string;
};

/** Width of the mosaic in the desktop frame; every measure is relative to it. */
const DESIGN_WIDTH = 520;
const GAP_X = 16;
const GAP_Y = 12.84;
const CIRCLE = 500;

/** Converts a desktop pixel value into container-query width units. */
const cqw = (px: number) => `${((px / DESIGN_WIDTH) * 100).toFixed(3)}cqw`;

/**
 * Staggered photo collage. The wrapper is a size container and all sizes are
 * expressed in `cqw`, so the collage scales as one piece: the 362px mobile
 * frame is the same composition as the 520px desktop one.
 */
export function PhotoMosaic({ columns, className }: PhotoMosaicProps) {
  return (
    <div className={cn("@container w-full max-w-[520px]", className)}>
      <div
        className="relative flex items-center justify-center gap-(--gap-x)"
        style={{ "--gap-x": cqw(GAP_X) } as CSSProperties}
      >
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-1/2 rounded-full bg-brand-soft"
          style={{ width: cqw(CIRCLE), height: cqw(CIRCLE) }}
        />
        {columns.map((column) => (
          <ul
            key={column.id}
            className={cn(
              "relative flex flex-col",
              column.align === "end" ? "items-end" : "items-start",
            )}
            style={{ paddingTop: cqw(column.offsetTop), gap: cqw(GAP_Y) }}
          >
            {column.photos.map((item) => (
              <li
                key={item.src}
                className="relative overflow-hidden rounded-sm shadow-photo"
                style={{ width: cqw(item.width), height: cqw(item.height) }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
