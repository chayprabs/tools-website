import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Github, ArrowRight } from "lucide-react";
import { tools, getTool, repoUrl, tagLabel } from "@/lib/tools";
import { categoryOf, getCategory } from "@/lib/categories";
import { site } from "@/lib/site";
import { FeedbackButton } from "@/components/FeedbackButton";
import { CategoryIcon } from "@/components/icons";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool not found" };

  const title = `${tool.name} — Free Online Tool`;
  return {
    title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      title: `${tool.name} — ${site.name}`,
      description: tool.tagline,
      url: `${site.url}/tools/${tool.slug}`,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} — ${site.name}`,
      description: tool.tagline,
      creator: site.socials.xHandle,
    },
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const url = repoUrl(tool.repo);
  const category = getCategory(categoryOf(tool.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    alternateName: tool.repo,
    description: tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: `${site.url}/tools/${tool.slug}`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: tool.features,
    author: {
      "@type": "Person",
      name: site.author,
      url: site.socials.personalSite,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Tools", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: tool.name,
        item: `${site.url}/tools/${tool.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <article className="mx-auto w-full max-w-3xl px-5 pt-10 sm:px-6 sm:pt-14">
        <nav className="flex items-center gap-2 text-[12.5px] text-[var(--faint)]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--fg)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Tools
          </Link>
          {category && (
            <>
              <span>/</span>
              <Link
                href={`/#${category.slug}`}
                className="transition-colors hover:text-[var(--fg)]"
              >
                {category.label}
              </Link>
            </>
          )}
        </nav>

        <header className="fade-up mt-7">
          <div className="flex items-start gap-4">
            {category && (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface-2)] to-[var(--surface)] text-[var(--accent-2)] shadow-[0_4px_18px_-6px_var(--accent-glow)]">
                <CategoryIcon category={category.slug} className="h-[22px] w-[22px]" />
              </span>
            )}
            <div>
              <h1 className="text-[30px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--fg)] sm:text-[40px]">
                {tool.name}
              </h1>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`} className="chip transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--fg)]">
                    {tagLabel(tag)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-[var(--muted)]">
            {tool.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <FeedbackButton toolName={tool.name} toolSlug={tool.slug} variant="accent" />
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github className="h-4 w-4" /> View source
            </a>
          </div>
        </header>

        <div className="hairline mt-10" />

        <section className="mt-9">
          <p className="mono-label">About this tool</p>
          <p className="mt-3 text-[16px] leading-[1.75] text-[var(--muted)]">
            {tool.description}
          </p>
        </section>

        <section className="mt-9">
          <p className="mono-label">What it does</p>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {tool.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3.5"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--accent-dim)]">
                  <Check className="h-3 w-3 text-[var(--accent-2)]" />
                </span>
                <span className="text-[13.5px] leading-relaxed text-[var(--muted)]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-9">
          <p className="mono-label">Repository</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group mt-3 flex items-center justify-between gap-3 p-4"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-2)] text-[var(--muted)] transition-colors group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent-2)]">
                <Github className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[13.5px] font-medium text-[var(--fg)]">
                  {site.socials.githubProfile}/{tool.repo}
                </p>
                <p className="text-[12.5px] text-[var(--faint)]">
                  Source code, issues, and releases
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-[var(--faint)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--accent-2)]" />
          </a>
        </section>

        <section className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-[var(--fg)]">
            Spotted a bug or have an idea?
          </h2>
          <p className="mt-2 max-w-md text-[14px] leading-relaxed text-[var(--muted)]">
            This tool is built in the open and shaped by feedback. If something
            feels off — or you want a feature — I read every message.
          </p>
          <div className="mt-5">
            <FeedbackButton toolName={tool.name} toolSlug={tool.slug} variant="accent" />
          </div>
        </section>

        <RelatedTools currentSlug={tool.slug} tags={tool.tags} />
      </article>
    </>
  );
}

function RelatedTools({
  currentSlug,
  tags,
}: {
  currentSlug: string;
  tags: string[];
}) {
  const related = tools
    .filter(
      (t) => t.slug !== currentSlug && t.tags.some((tag) => tags.includes(tag))
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <p className="mono-label">Related tools</p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {related.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="card group flex flex-col p-4"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-2)] text-[var(--muted)] transition-colors group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent-2)]">
              <CategoryIcon category={categoryOf(t.slug)} className="h-4 w-4" />
            </span>
            <p className="mt-3 text-[14px] font-medium leading-snug text-[var(--fg)] transition-colors group-hover:text-[var(--accent-2)]">
              {t.name}
            </p>
            <p className="font-mono mt-1 text-[11px] uppercase tracking-wide text-[var(--faint)]">
              {t.tags.map((tag) => tagLabel(tag)).join(" · ")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
