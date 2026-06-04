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
      <span className="section-label">Categories</span>
      <h1 className="mt-3 text-[30px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[38px]">
        Browse by tag
      </h1>
      <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-[var(--color-muted)]">
        Every tool is tagged by what it does. Pick a category to see the tools
        that fit.
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tags/${tag.slug}`}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-2 text-[13.5px] font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {tag.label}
            <span className="rounded-full bg-[var(--color-background)] px-1.5 text-[11.5px] text-[var(--color-hint)] group-hover:text-[var(--color-accent)]">
              {tag.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
