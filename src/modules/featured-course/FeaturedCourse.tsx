import Image from "next/image";
import { ArrowIcon, Button, Container, Eyebrow, Section } from "@/shared/ui";
import { featuredCourse } from "./data";

const HEADING_ID = "featured-course-heading";

export function FeaturedCourse() {
  const { image, primaryAction, secondaryAction } = featuredCourse;

  return (
    <Section id="featured-course" labelledBy={HEADING_ID} className="bg-brand">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-15">
        <div className="relative lg:min-w-0 lg:flex-1">
          <div className="relative aspect-[362/280] overflow-hidden rounded-2xl lg:aspect-auto lg:h-[408px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 64rem) 46vw, 92vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -top-3 -left-3 rounded-md bg-sun px-3 py-1.5 text-overline text-ink">
            {featuredCourse.badge}
          </p>
        </div>

        <div className="lg:min-w-0 lg:flex-1">
          <Eyebrow tone="inverse">{featuredCourse.eyebrow}</Eyebrow>
          <h2 id={HEADING_ID} className="mt-4 text-h3 text-white">
            {featuredCourse.title}
          </h2>
          <p className="mt-5 text-subtitle-2 text-white">
            {featuredCourse.description}
          </p>
          <p className="mt-6 text-subtitle-2 text-white">
            {featuredCourse.instructor}
          </p>

          <ul aria-label="Course details" className="mt-6 flex flex-wrap gap-3">
            {featuredCourse.facts.map((fact) => (
              <li
                key={fact}
                className="rounded-lg border border-line px-3.5 py-1.5 text-body text-white"
              >
                {fact}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={primaryAction.href} variant="accent">
              {primaryAction.label}
            </Button>
            <a
              href={secondaryAction.href}
              className="group flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-body font-bold text-white underline-offset-4 hover:underline focus-visible:outline-white"
            >
              {secondaryAction.label}
              <ArrowIcon
                tone="light"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
