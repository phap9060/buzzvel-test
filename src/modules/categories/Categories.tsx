import { Container, Eyebrow, Section } from "@/shared/ui";
import { CategoryCard } from "./components/CategoryCard";
import { categories, categoriesContent } from "./data";

const HEADING_ID = "categories-heading";

export function Categories() {
  return (
    <Section id="courses" labelledBy={HEADING_ID} className="bg-white">
      <Container>
        <div className="max-w-[560px]">
          <Eyebrow>{categoriesContent.eyebrow}</Eyebrow>
          <h2
            id={HEADING_ID}
            className="mt-4 font-display text-h3 lg:text-h3-lg text-ink"
          >
            {categoriesContent.title}
          </h2>
          <p className="mt-4 text-subtitle-1 lg:text-subtitle-1-lg text-ink-secondary">
            {categoriesContent.description}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {categories.map((category, index) => (
            <li key={category.id}>
              <CategoryCard
                category={category}
                position={index + 1}
                linkLabel={categoriesContent.linkLabel}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
