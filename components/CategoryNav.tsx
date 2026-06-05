import type { CategoryGroup } from "@/lib/categories";
import { CategoryIcon } from "./icons";

export function CategoryNav({ groups }: { groups: CategoryGroup[] }) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
      {groups.map(({ category, tools }) => (
        <a
          key={category.slug}
          href={`#${category.slug}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] py-1.5 pl-2.5 pr-3 text-[12.5px] font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-ink)]"
        >
          <CategoryIcon
            category={category.slug}
            className="h-3.5 w-3.5 text-[var(--color-accent)]"
          />
          {category.short}
          <span className="text-[var(--color-hint)]">{tools.length}</span>
        </a>
      ))}
    </div>
  );
}
