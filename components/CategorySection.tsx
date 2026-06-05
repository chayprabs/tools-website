import type { CategoryGroup } from "@/lib/categories";
import { CategoryIcon } from "./icons";
import { ToolCard } from "./ToolCard";

export function CategorySection({ group }: { group: CategoryGroup }) {
  const { category, tools } = group;
  return (
    <section id={category.slug} className="scroll-mt-24">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] text-[var(--color-accent)] shadow-[var(--shadow-card)]">
          <CategoryIcon category={category.slug} className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-[19px] font-semibold tracking-tight text-[var(--color-ink)]">
            {category.label}
          </h2>
          <p className="text-[13px] text-[var(--color-muted)]">
            {category.description}
          </p>
        </div>
        <span className="ml-auto text-[12px] font-medium text-[var(--color-hint)]">
          {tools.length}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
