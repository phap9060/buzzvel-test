import type { Avatar } from "@/shared/ui";

export const finalCtaContent = {
  title: "What will you learn next?",
  description: "Start with one course. Build from there.",
  primaryAction: { label: "Explore all courses", href: "#courses" },
  secondaryAction: { label: "Join Luma", href: "#contact" },
} as const;

// Decorative faces; the heading carries the meaning.
export const communityAvatars: readonly Avatar[] = [
  { src: "/images/avatars/learner-1.jpg", alt: "" },
  { src: "/images/avatars/learner-2.jpg", alt: "" },
  { src: "/images/avatars/learner-3.jpg", alt: "" },
  { src: "/images/avatars/learner-4.jpg", alt: "" },
];
