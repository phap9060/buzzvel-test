export type Size = readonly [width: number, height: number];

export type MosaicPhoto = {
  src: string;
  alt: string;
  mobile: Size;
  desktop: Size;
};

export type MosaicColumn = {
  id: string;
  align: "start" | "end";
  offsetTop: { mobile: number; desktop: number };
  photos: readonly MosaicPhoto[];
};
