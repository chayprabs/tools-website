import Link from "next/link";
import type { Tool } from "@/lib/types";
import { tagLabel } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex h-full flex-col rounded-[6px] border border-transparent bg-[var(--color-card-2)] p-4 transition-colors duration-150 hover:border-[var(--color-line)] md:px-[22px] md:py-[20px]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[17px] font-semibold leading-tight text-[var(--color-ink)]">
          {tool.name}
        </h3>
      </div>

      <p className="mt-2 flex-1 text-[14px] font-light leading-[1.6] text-[var(--color-muted)]">
        {tool.tagline}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-[12px] font-light text-[var(--color-hint)]">
          {tool.tags.map((t) => tagLabel(t)).join("  ·  ")}
        </p>
        <span className="shrink-0 text-[12px] text-[var(--color-hint)] transition-colors group-hover:text-[var(--color-accent)]">
          Open &rarr;
        </span>
      </div>
    </Link>
  );
}
