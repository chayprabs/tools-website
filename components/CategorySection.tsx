import type { CategoryGroup } from "@/lib/categories";
import { CategoryIcon } from "./icons";
import { ToolCard } from "./ToolCard";

export function CategorySection({ group }: { group: CategoryGroup }) {
  const { category, tools } = group;
  return (
    <section id={category.slug} className="scroll-mt-20">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface-2)] to-[var(--surface)] text-[var(--accent-2)] shadow-[0_2px_10px_-4px_var(--accent-glow)]">
          <CategoryIcon category={category.slug} className="h-[18px] w-[18px]" />
        </span>
        <h2 className="text-[16px] font-semibold tracking-[-0.01em] text-[var(--fg)]">
          {category.label}
        </h2>
        <span className="font-mono text-[12px] text-[var(--faint)]">
          {String(tools.length).padStart(2, "0")}
        </span>
        <span className="ml-1 hidden flex-1 truncate text-[12.5px] text-[var(--faint)] sm:block">
          {category.description}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
