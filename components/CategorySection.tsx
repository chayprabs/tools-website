import type { CategoryGroup } from "@/lib/categories";
import { ToolCard } from "./ToolCard";

export function CategorySection({ group }: { group: CategoryGroup }) {
  const { category, tools } = group;
  return (
    <section id={category.slug} className="scroll-mt-20">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <p className="section-label">{category.label}</p>
          <span className="text-[11px] font-light text-[var(--color-hint)]">
            {tools.length}
          </span>
        </div>
        <p className="hidden text-[12px] font-light text-[var(--color-hint)] sm:block">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
