import type { ReactNode } from "react";

export type SectionProps = {
  id?: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
};
