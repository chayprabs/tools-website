import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Tool } from "@/lib/types";
import { tagLabel } from "@/lib/tools";
import { ToolIcon } from "./icons";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="card group flex h-full flex-col overflow-hidden p-4"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[var(--accent)]/12 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--bg-2)] text-[var(--muted)] transition-colors duration-200 group-hover:border-[var(--accent)]/40 group-hover:bg-[var(--accent-dim)] group-hover:text-[var(--accent-2)]">
          <ToolIcon slug={tool.slug} className="h-[17px] w-[17px]" />
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 translate-y-0.5 -translate-x-0.5 text-[var(--faint)] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[var(--accent-2)] group-hover:opacity-100" />
      </div>

      <h3 className="mt-3.5 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[var(--fg)] transition-colors group-hover:text-[var(--accent-2)]">
        {tool.name}
      </h3>
      <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-[var(--muted)]">
        {tool.tagline}
      </p>

      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="chip">
            {tagLabel(tag)}
          </span>
        ))}
      </div>
    </Link>
  );
}
