import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/lib/types";
import { tagLabel } from "@/lib/tools";
import { ToolIcon } from "./icons";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/45 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-background)] text-[var(--color-muted)] transition-colors duration-300 group-hover:border-[var(--color-accent)]/30 group-hover:bg-[var(--color-accent-soft)] group-hover:text-[var(--color-accent)]">
          <ToolIcon slug={tool.slug} className="h-[18px] w-[18px]" />
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 -translate-y-0.5 translate-x-0.5 text-[var(--color-hint)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--color-accent)] group-hover:opacity-100" />
      </div>

      <h3 className="font-display mt-4 text-[20px] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--color-ink)]">
        {tool.name}
      </h3>
      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
        {tool.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="font-mono inline-flex items-center rounded-md border border-[var(--color-line-soft)] bg-[var(--color-background)] px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wide text-[var(--color-muted)]"
          >
            {tagLabel(tag)}
          </span>
        ))}
      </div>
    </Link>
  );
}
