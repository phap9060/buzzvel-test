import type { MosaicColumn } from "../types";

export type PhotoMosaicProps = {
  columns: readonly MosaicColumn[];
  className?: string;
};

export type FrameName = "mobile" | "desktop";

export type FrameMeasures = {
  width: number;
  gapX: number;
  gapY: number;
  circle: number;
};
