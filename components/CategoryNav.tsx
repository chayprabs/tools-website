import type { CategoryGroup } from "@/lib/categories";

export function CategoryNav({ groups }: { groups: CategoryGroup[] }) {
  return (
    <div className="no-scrollbar -mx-5 flex items-center gap-x-4 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
      {groups.map(({ category, tools }, i) => (
        <div key={category.slug} className="flex shrink-0 items-center gap-4">
          <a href={`#${category.slug}`} className="nav-link">
            {category.short}
            <span className="ml-1.5 text-[var(--color-hint)]">{tools.length}</span>
          </a>
          {i < groups.length - 1 && (
            <span className="text-[11px] leading-none text-[rgba(0,0,0,0.22)]">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
