import type { Avatar } from "@/shared/ui";

export const heroContent = {
  eyebrow: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  primaryAction: { label: "Explore courses", href: "#courses" },
  secondaryAction: { label: "See how it works", href: "#how-it-works" },
  trust: { highlight: "Trusted by 24,000+", rest: "learners" },
  image: {
    src: "/images/hero.jpg",
    alt: "Smiling learner with glasses and a denim jacket working at a laptop",
  },
  coursesBadge: { value: "120+", label: "expert-led courses" },
  rating: { value: 4.9, max: 5, label: "avg rating" },
} as const;

export const learnerAvatars: readonly Avatar[] = [
  { src: "/images/avatars/learner-1.jpg", alt: "" },
  { src: "/images/avatars/learner-2.jpg", alt: "" },
  { src: "/images/avatars/learner-3.jpg", alt: "" },
];
