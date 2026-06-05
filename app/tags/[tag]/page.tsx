import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllTags, getToolsByTag, tagLabel } from "@/lib/tools";
import { site } from "@/lib/site";
import { ToolCard } from "@/components/ToolCard";

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tag.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const label = tagLabel(tag);
  const toolsForTag = getToolsByTag(tag);
  if (toolsForTag.length === 0) return { title: "Tag not found" };

  const title = `${label} Tools`;
  const description = `Free online ${label} tools — ${toolsForTag
    .slice(0, 4)
    .map((t) => t.name)
    .join(", ")} and more. Fast, browser-based, no signup.`;

  return {
    title,
    description,
    alternates: { canonical: `/tags/${tag}` },
    openGraph: {
      title: `${label} Tools — ${site.name}`,
      description,
      url: `${site.url}/tags/${tag}`,
      type: "website",
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const toolsForTag = getToolsByTag(tag);
  if (toolsForTag.length === 0) notFound();

  const label = tagLabel(tag);
  const otherTags = getAllTags().filter((t) => t.slug !== tag);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${label} Tools`,
    url: `${site.url}/tags/${tag}`,
    hasPart: toolsForTag.map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      description: tool.tagline,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: `${site.url}/tools/${tool.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto w-full max-w-6xl px-5 pt-10 sm:px-6 sm:pt-14">
        <Link
          href="/tags"
          className="inline-flex items-center gap-1.5 text-[13px] text-[var(--faint)] transition-colors hover:text-[var(--fg)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All tags
        </Link>

        <header className="fade-up mt-6">
          <p className="mono-label">
            {toolsForTag.length} {toolsForTag.length === 1 ? "tool" : "tools"}
          </p>
          <h1 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--fg)] sm:text-[44px]">
            {label} tools
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[var(--muted)]">
            Free, browser-based {label} utilities — pick one to get started.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {toolsForTag.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>

        <section className="mt-14">
          <p className="mono-label">Other tags</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherTags.map((t) => (
              <Link
                key={t.slug}
                href={`/tags/${t.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-[12.5px] font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent-dim)] hover:text-[var(--fg)]"
              >
                {t.label}
                <span className="font-mono text-[11px] text-[var(--faint)]">{t.count}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
