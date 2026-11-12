import type { MosaicColumn } from "./types";

export const communityContent = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  // Placeholder copy kept exactly as it appears in the design.
  description:
    "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
  action: { label: "Explore teachers and students", href: "#contact" },
} as const;

const photo = (file: string) => `/images/people/${file}.jpg`;

/** Photo slots measured on the desktop frame; the component scales them. */
export const mosaicColumns: readonly MosaicColumn[] = [
  {
    id: "first",
    offsetTop: 64.2,
    align: "end",
    photos: [
      {
        src: photo("person-01"),
        alt: "Student raising her hand during an online class",
        width: 102.72,
        height: 154.08,
      },
      {
        src: photo("person-02"),
        alt: "Group of students gathered around a laptop",
        width: 138.03,
        height: 207.05,
      },
    ],
  },
  {
    id: "second",
    offsetTop: 25.68,
    align: "start",
    photos: [
      {
        src: photo("person-03"),
        alt: "Student in a blue hoodie reading a book",
        width: 102.72,
        height: 170.13,
      },
      {
        src: photo("person-04"),
        alt: "Two singers rehearsing with a microphone by a window",
        width: 102.72,
        height: 172.54,
      },
      {
        src: photo("person-05"),
        alt: "Man taking notes beside his laptop",
        width: 102.72,
        height: 128.4,
      },
    ],
  },
  {
    id: "third",
    offsetTop: 0,
    align: "start",
    photos: [
      {
        src: photo("person-06"),
        alt: "Graduate in cap and gown holding a diploma",
        width: 102.72,
        height: 137.23,
      },
      {
        src: photo("person-07"),
        alt: "Woman studying at a desk at home",
        width: 102.72,
        height: 138.03,
      },
      {
        src: photo("person-08"),
        alt: "Student watching a teacher on a video call",
        width: 102.72,
        height: 154.08,
      },
    ],
  },
  {
    id: "fourth",
    offsetTop: 0,
    align: "start",
    photos: [
      {
        src: photo("person-09"),
        alt: "Smiling student holding folders outside a campus building",
        width: 128.4,
        height: 204.64,
      },
      {
        src: photo("person-10"),
        alt: "Student wearing a hijab holding a coffee cup",
        width: 102.72,
        height: 132.42,
      },
    ],
  },
];
