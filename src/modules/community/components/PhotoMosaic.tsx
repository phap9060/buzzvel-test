import type { CSSProperties } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/cn";
import type {
  FrameMeasures,
  FrameName,
  PhotoMosaicProps,
} from "./PhotoMosaic.types";

const FRAME: Record<FrameName, FrameMeasures> = {
  mobile: { width: 362, gapX: 12, gapY: 8, circle: 330 },
  desktop: { width: 520, gapX: 16, gapY: 12.84, circle: 500 },
};

const cqw = (px: number, frame: FrameName) =>
  `${((px / FRAME[frame].width) * 100).toFixed(3)}cqw`;

const responsiveVars = (
  values: Record<string, { mobile: number; desktop: number }>,
) => {
  const vars: Record<string, string> = {};
  for (const [name, value] of Object.entries(values)) {
    vars[`--${name}`] = cqw(value.mobile, "mobile");
    vars[`--${name}-lg`] = cqw(value.desktop, "desktop");
  }
  return vars as CSSProperties;
};

export function PhotoMosaic({ columns, className }: PhotoMosaicProps) {
  return (
    <div className={cn("@container w-full max-w-130", className)}>
      <div
        className="relative flex items-center justify-center gap-x-(--gap-x) lg:gap-x-(--gap-x-lg)"
        style={responsiveVars({
          "gap-x": { mobile: FRAME.mobile.gapX, desktop: FRAME.desktop.gapX },
          "gap-y": { mobile: FRAME.mobile.gapY, desktop: FRAME.desktop.gapY },
          circle: {
            mobile: FRAME.mobile.circle,
            desktop: FRAME.desktop.circle,
          },
        })}
      >
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-(--circle) -translate-1/2 rounded-full bg-brand-soft lg:size-(--circle-lg)"
        />
        {columns.map((column) => (
          <ul
            key={column.id}
            className={cn(
              "relative flex flex-col gap-y-(--gap-y) pt-(--offset) lg:gap-y-(--gap-y-lg) lg:pt-(--offset-lg)",
              column.align === "end" ? "items-end" : "items-start",
            )}
            style={responsiveVars({ offset: column.offsetTop })}
          >
            {column.photos.map((photo) => (
              <li
                key={photo.src}
                className="relative h-(--h) w-(--w) overflow-hidden rounded-sm shadow-photo lg:h-(--h-lg) lg:w-(--w-lg)"
                style={responsiveVars({
                  w: { mobile: photo.mobile[0], desktop: photo.desktop[0] },
                  h: { mobile: photo.mobile[1], desktop: photo.desktop[1] },
                })}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
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
