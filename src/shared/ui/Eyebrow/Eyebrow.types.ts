import type { ReactNode } from "react";

export type EyebrowTone = "brand" | "inverse";

export type EyebrowProps = {
  children: ReactNode;
  tone?: EyebrowTone;
  className?: string;
};
