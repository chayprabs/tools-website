import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/lib/types";
import { tagLabel } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative flex h-full flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.18)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15.5px] font-semibold leading-snug tracking-tight text-[var(--color-ink)]">
          {tool.name}
        </h3>
        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-hint)] transition-colors group-hover:text-[var(--color-accent)]" />
      </div>

      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
        {tool.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-[var(--color-background)] px-2 py-0.5 text-[11px] font-medium tracking-wide text-[var(--color-muted)]"
          >
            {tagLabel(tag)}
          </span>
        ))}
      </div>
    </Link>
  );
}
