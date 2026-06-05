import type { CategoryGroup } from "@/lib/categories";
import { CategoryIcon } from "./icons";
import { ToolCard } from "./ToolCard";

export function CategorySection({
  group,
  index,
}: {
  group: CategoryGroup;
  index: number;
}) {
  const { category, tools } = group;
  const num = String(index + 1).padStart(2, "0");
  return (
    <section id={category.slug} className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4 border-b border-[var(--color-line)] pb-5">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] text-[var(--color-accent)] shadow-[var(--shadow-card)]">
            <CategoryIcon category={category.slug} className="h-5 w-5" />
          </span>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="index-num">{num}</span>
              <h2 className="font-display text-[26px] font-medium leading-none tracking-[-0.01em] text-[var(--color-ink)] sm:text-[30px]">
                {category.label}
              </h2>
            </div>
            <p className="mt-1.5 text-[13.5px] text-[var(--color-muted)]">
              {category.description}
            </p>
          </div>
        </div>
        <span className="font-mono shrink-0 pb-1 text-[12px] text-[var(--color-hint)]">
          {tools.length} tools
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
