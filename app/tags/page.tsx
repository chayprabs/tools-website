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
    <div className="mx-auto w-full max-w-[760px] px-5 pt-12 sm:pt-16">
      <span className="section-label">Categories</span>
      <h1 className="mt-3 text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[44px]">
        Browse by tag
      </h1>
      <p className="mt-4 max-w-[540px] text-[15px] font-light leading-[1.8] text-[var(--color-foreground)]">
        Every tool is tagged by what it does. Pick a topic to see the tools that
        fit.
      </p>

      <div className="mt-9 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tags/${tag.slug}`}
            className="group inline-flex items-center gap-1.5 rounded-[4px] border border-[var(--color-line)] bg-[var(--color-card)] px-2.5 py-1 text-[13px] font-light text-[var(--color-foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {tag.label}
            <span className="text-[11.5px] text-[var(--color-hint)] group-hover:text-[var(--color-accent)]">
              {tag.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
