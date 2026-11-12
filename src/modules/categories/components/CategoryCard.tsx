import { ArrowIcon } from "@/shared/ui";
import type { Category } from "../types";

type CategoryCardProps = {
  category: Category;
  /** 1-based position, rendered as the "01" style badge. */
  position: number;
  linkLabel: string;
};

/** The whole card is one link, so it is a single, large tab stop. */
export function CategoryCard({
  category,
  position,
  linkLabel,
}: CategoryCardProps) {
  return (
    <a
      href={category.href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-brand hover:shadow-card lg:min-h-[260px] lg:p-7"
    >
      <div>
        <span
          aria-hidden="true"
          className="inline-block rounded-md bg-brand-soft px-2 py-1 text-overline uppercase text-brand"
        >
          {String(position).padStart(2, "0")}
        </span>
        <h3 className="mt-5.5 font-display text-h5 lg:text-h5-lg text-ink">
          {category.title}
        </h3>
        <p className="mt-3 text-body text-ink-tertiary">
          {category.description}
        </p>
      </div>
      <span className="mt-5 flex items-center gap-2 text-body font-bold text-ink">
        {linkLabel}
        <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </a>
  );
}
