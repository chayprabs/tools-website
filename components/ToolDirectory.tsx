"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Tool } from "@/lib/types";
import type { TagInfo } from "@/lib/tools";
import { ToolCard } from "./ToolCard";

export function ToolDirectory({
  tools,
  tags,
}: {
  tools: Tool[];
  tags: TagInfo[];
}) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesTag = !activeTag || tool.tags.includes(activeTag);
      if (!matchesTag) return false;
      if (!q) return true;
      const haystack = [
        tool.name,
        tool.tagline,
        tool.description,
        tool.repo,
        ...tool.tags,
        ...tool.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [tools, query, activeTag]);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-hint)]" />
          <input
            type="search"
            inputMode="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools — try “csv”, “pdf”, “openapi”…"
            aria-label="Search tools"
            className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] py-3 pl-11 pr-10 text-[14.5px] text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-hint)] focus:border-[var(--color-accent)]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-[var(--color-hint)] transition-colors hover:text-[var(--color-ink)]"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="no-scrollbar flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-medium tracking-wide transition-colors ${
              activeTag === null
                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                : "border-[var(--color-line)] bg-[var(--color-background)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag.slug}
              type="button"
              onClick={() =>
                setActiveTag((prev) => (prev === tag.slug ? null : tag.slug))
              }
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] font-medium tracking-wide transition-colors ${
                activeTag === tag.slug
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "border-[var(--color-line)] bg-[var(--color-background)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {tag.label}
              <span
                className={
                  activeTag === tag.slug
                    ? "text-white/70"
                    : "text-[var(--color-hint)]"
                }
              >
                {tag.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-[12.5px] text-[var(--color-hint)]">
          {filtered.length} {filtered.length === 1 ? "tool" : "tools"}
          {activeTag ? " in this tag" : ""}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-[var(--color-line)] py-16 text-center">
          <p className="text-[14px] text-[var(--color-muted)]">
            No tools match “{query}”.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveTag(null);
            }}
            className="mt-3 text-[13px] font-medium text-[var(--color-accent)] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
