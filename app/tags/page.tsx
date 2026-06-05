import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags } from "@/lib/tools";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Browse Tools by Tag",
  description:
    "Browse all developer tools by category — CSV, SQL, PDF, JSON, OpenAPI, logs, DevOps, and more. Find the right utility fast.",
  alternates: { canonical: "/tags" },
  openGraph: {
    title: `Browse Tools by Tag — ${site.name}`,
    description: "Browse all developer tools by category and topic.",
    url: `${site.url}/tags`,
    type: "website",
  },
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="mx-auto w-full max-w-3xl px-5 pt-12 sm:px-6 sm:pt-16">
      <p className="mono-label">Categories</p>
      <h1 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--fg)] sm:text-[44px]">
        Browse by tag
      </h1>
      <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[var(--muted)]">
        Every tool is tagged by what it does. Pick a topic to see the tools that
        fit.
      </p>

      <div className="mt-9 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tags/${tag.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent-dim)] hover:text-[var(--fg)]"
          >
            {tag.label}
            <span className="font-mono text-[11px] text-[var(--faint)]">
              {tag.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
