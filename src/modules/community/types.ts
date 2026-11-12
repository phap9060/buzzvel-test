/** A [width, height] pair in design pixels. */
export type Size = readonly [width: number, height: number];

export type MosaicPhoto = {
  src: string;
  alt: string;
  /** Photo slot as drawn in the mobile and desktop frames. */
  mobile: Size;
  desktop: Size;
};

export type MosaicColumn = {
  id: string;
  /** Side the narrower photos of the column hug. */
  align: "start" | "end";
  /** Extra space above the column in each frame, in design pixels. */
  offsetTop: { mobile: number; desktop: number };
  photos: readonly MosaicPhoto[];
};
