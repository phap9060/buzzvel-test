import type { ActionLink } from "@/shared/ui";
import type { MosaicColumn } from "./types";

export const communityContent = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  description:
    "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
  action: { label: "Explore teachers and students" } as ActionLink,
} as const;

const photo = (file: string) => `/images/people/${file}.jpg`;

export const mosaicColumns: readonly MosaicColumn[] = [
  {
    id: "first",
    offsetTop: { mobile: 48, desktop: 64.2 },
    align: "end",
    photos: [
      {
        src: photo("person-01"),
        alt: "Student raising her hand during an online class",
        mobile: [72, 96],
        desktop: [102.72, 154.08],
      },
      {
        src: photo("person-02"),
        alt: "Group of students gathered around a laptop",
        mobile: [94, 129],
        desktop: [138.03, 207.05],
      },
    ],
  },
  {
    id: "second",
    offsetTop: { mobile: 0, desktop: 25.68 },
    align: "start",
    photos: [
      {
        src: photo("person-03"),
        alt: "Student in a blue hoodie reading a book",
        mobile: [72, 106],
        desktop: [102.72, 170.13],
      },
      {
        src: photo("person-04"),
        alt: "Two singers rehearsing with a microphone by a window",
        mobile: [72, 107.5],
        desktop: [102.72, 172.54],
      },
      {
        src: photo("person-05"),
        alt: "Man taking notes beside his laptop",
        mobile: [72, 80],
        desktop: [102.72, 128.4],
      },
    ],
  },
  {
    id: "third",
    offsetTop: { mobile: 0, desktop: 0 },
    align: "start",
    photos: [
      {
        src: photo("person-06"),
        alt: "Graduate in cap and gown holding a diploma",
        mobile: [72, 85.5],
        desktop: [102.72, 137.23],
      },
      {
        src: photo("person-07"),
        alt: "Woman studying at a desk at home",
        mobile: [72, 86],
        desktop: [102.72, 138.03],
      },
      {
        src: photo("person-08"),
        alt: "Student watching a teacher on a video call",
        mobile: [72, 96],
        desktop: [102.72, 154.08],
      },
    ],
  },
  {
    id: "fourth",
    offsetTop: { mobile: 0, desktop: 0 },
    align: "start",
    photos: [
      {
        src: photo("person-09"),
        alt: "Smiling student holding folders outside a campus building",
        mobile: [88, 127.5],
        desktop: [128.4, 204.64],
      },
      {
        src: photo("person-10"),
        alt: "Student wearing a hijab holding a coffee cup",
        mobile: [72, 82.5],
        desktop: [102.72, 132.42],
      },
    ],
  },
];
