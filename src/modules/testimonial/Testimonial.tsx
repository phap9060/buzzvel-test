import Image from "next/image";
import { Container, Section } from "@/shared/ui";
import { stats, testimonial } from "./data";

const HEADING_ID = "testimonial-heading";

export function Testimonial() {
  const { author, quote } = testimonial;

  return (
    <Section labelledBy={HEADING_ID} className="bg-white">
      <Container className="flex flex-col gap-15 lg:flex-row lg:items-center lg:justify-between">
        <h2 id={HEADING_ID} className="sr-only">
          What learners say
        </h2>

        <figure className="lg:max-w-150 lg:flex-1">
          <Image src="/icons/quote.svg" alt="" width={24} height={22} />
          <blockquote className="mt-4 font-display text-quote lg:text-quote-lg text-ink">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={author.avatar}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full bg-brand-soft object-cover"
            />
            <span>
              <span className="block text-base leading-7 font-bold text-ink">
                {author.name}
              </span>
              <span className="block text-body text-ink-secondary">
                {author.role}
              </span>
            </span>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 gap-x-4 lg:w-100.25 lg:shrink-0 lg:grid-cols-1 lg:gap-4.25 lg:border-l lg:border-line lg:pl-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 max-w-26 text-body text-ink-tertiary lg:max-w-none">
                {stat.label}
              </dt>
              <dd className="font-display text-stat lg:text-stat-lg text-brand">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
