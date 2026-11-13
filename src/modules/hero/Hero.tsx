import Image from "next/image";
import { AvatarStack, Button, Container, Eyebrow } from "@/shared/ui";
import { heroContent, learnerAvatars } from "./data";

const HEADING_ID = "hero-heading";

export function Hero() {
  const { coursesBadge, rating, image, trust } = heroContent;

  return (
    <section
      aria-labelledby={HEADING_ID}
      className="overflow-x-clip bg-cream py-15 md:py-20 lg:py-25"
    >
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-15">
        <div className="order-2 lg:order-1 lg:min-w-0 lg:flex-1">
          <Eyebrow>{heroContent.eyebrow}</Eyebrow>
          <h1
            id={HEADING_ID}
            className="mt-4 font-display text-h1 lg:text-h1-lg text-ink"
          >
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-120 text-subtitle-1 lg:text-subtitle-1-lg text-ink-secondary">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={heroContent.primaryAction.href}>
              {heroContent.primaryAction.label}
            </Button>
            <Button href={heroContent.secondaryAction.href} variant="secondary">
              {heroContent.secondaryAction.label}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
            <AvatarStack avatars={learnerAvatars} />
            <p className="text-body text-ink-secondary">
              <strong className="font-bold text-ink">{trust.highlight}</strong>{" "}
              {trust.rest}
            </p>
          </div>
        </div>

        <div className="order-1 w-full px-2 lg:order-2 lg:w-11/25 lg:shrink-0 lg:px-0 xl:w-125">
          <div className="relative mx-auto aspect-346/380 max-w-125 lg:aspect-500/520">
            <div
              aria-hidden="true"
              className="absolute top-6 -right-4.5 bottom-3.5 w-22.25 rounded-2xl bg-peach lg:bottom-7 xl:-right-9.75"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-3 -left-4.5 size-16 rounded-full bg-brand-soft xl:-left-11.25 xl:size-26.5"
            />

            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              fetchPriority="high"
              sizes="(min-width: 80rem) 500px, (min-width: 64rem) 44vw, (min-width: 36rem) 500px, 92vw"
              className="rounded-3xl bg-brand-soft object-cover"
            />

            <p className="absolute top-1.5 -left-2 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-body text-ink shadow-badge lg:top-4 xl:-left-5.5">
              <span className="flex h-8 items-center rounded-lg bg-brand-soft px-1 font-bold text-brand">
                {coursesBadge.value}
              </span>
              {coursesBadge.label}
            </p>

            <p className="absolute -right-4.75 bottom-9 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-body text-ink shadow-badge xl:-right-14.25">
              <span
                role="img"
                aria-label={`${rating.value} out of ${rating.max} stars`}
                className="flex gap-0.5"
              >
                {Array.from({ length: rating.max }, (_, index) => (
                  <Image
                    key={index}
                    src="/icons/star.svg"
                    alt=""
                    width={14}
                    height={14}
                  />
                ))}
              </span>
              {rating.value} {rating.label}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
