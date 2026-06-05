import type { CategoryGroup } from "@/lib/categories";
import { CategoryIcon } from "./icons";

export function CategoryNav({ groups }: { groups: CategoryGroup[] }) {
  return (
    <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
      {groups.map(({ category, tools }) => (
        <a
          key={category.slug}
          href={`#${category.slug}`}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] py-1.5 pl-2.5 pr-3 text-[12.5px] font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--fg)]"
        >
          <CategoryIcon
            category={category.slug}
            className="h-3.5 w-3.5 text-[var(--accent-2)]"
          />
          {category.short}
          <span className="font-mono text-[11px] text-[var(--faint)]">
            {tools.length}
          </span>
        </a>
      ))}
    </div>
  );
}
