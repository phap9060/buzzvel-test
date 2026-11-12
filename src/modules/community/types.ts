export type MosaicPhoto = {
  src: string;
  alt: string;
  /** Size of the photo slot in the 520px-wide desktop mosaic, in px. */
  width: number;
  height: number;
};

export type MosaicColumn = {
  id: string;
  /** Vertical offset of the column in the desktop mosaic, in px. */
  offsetTop: number;
  /** Side the narrower photos of the column hug. */
  align: "start" | "end";
  photos: readonly MosaicPhoto[];
};
