import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Github, ArrowRight } from "lucide-react";
import { tools, getTool, repoUrl, tagLabel } from "@/lib/tools";
import { categoryOf, getCategory } from "@/lib/categories";
import { site } from "@/lib/site";
import { TagPill } from "@/components/TagPill";
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
      <article className="mx-auto w-full max-w-3xl px-5 pt-10 sm:px-8 sm:pt-14">
        <nav className="flex items-center gap-1.5 text-[13px] text-[var(--color-hint)]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All tools
          </Link>
          {category && (
            <>
              <span>/</span>
              <Link
                href={`/#${category.slug}`}
                className="transition-colors hover:text-[var(--color-ink)]"
              >
                {category.label}
              </Link>
            </>
          )}
        </nav>

        <header className="fade-up mt-8">
          <div className="flex items-center gap-4">
            {category && (
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] text-[var(--color-accent)] shadow-[var(--shadow-card)]">
                <CategoryIcon category={category.slug} className="h-6 w-6" />
              </span>
            )}
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </div>

          <h1 className="font-display mt-6 text-[40px] leading-[1.05] text-[var(--color-ink)] sm:text-[54px]">
            {tool.name}
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[var(--color-muted)]">
            {tool.tagline}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <FeedbackButton toolName={tool.name} toolSlug={tool.slug} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-5 py-2.5 text-[13.5px] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Github className="h-4 w-4" /> View source
            </a>
          </div>
        </header>

        <div className="hairline mt-12" />

        <section className="mt-10">
          <span className="section-label">About this tool</span>
          <p className="mt-4 text-[17px] leading-[1.8] text-[var(--color-ink)]">
            {tool.description}
          </p>
        </section>

        <section className="mt-12">
          <span className="section-label">What it does</span>
          <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {tool.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-card)] p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
                  <Check className="h-3 w-3 text-[var(--color-accent)]" />
                </span>
                <span className="text-[13.5px] leading-relaxed text-[var(--color-foreground)]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <span className="section-label">Repository</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 flex items-center justify-between gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-line-soft)] bg-[var(--color-background)] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
                <Github className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[14.5px] font-medium text-[var(--color-ink)]">
                  {site.socials.githubProfile}/{tool.repo}
                </p>
                <p className="text-[12.5px] text-[var(--color-hint)]">
                  Full source code, issues, and releases
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-[var(--color-hint)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
          </a>
        </section>

        <section className="mt-14 overflow-hidden rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-8 text-center shadow-[var(--shadow-card)] sm:p-10">
          <h2 className="font-display text-[26px] leading-tight text-[var(--color-ink)] sm:text-[32px]">
            Spotted a bug or have an idea?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-[var(--color-muted)]">
            This tool is built in the open and shaped by feedback. If something
            feels off — or you want a feature — I read every message.
          </p>
          <div className="mt-6 flex justify-center">
            <FeedbackButton toolName={tool.name} toolSlug={tool.slug} />
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
    <section className="mt-16">
      <span className="section-label">Related tools</span>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {related.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-lift)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-line-soft)] bg-[var(--color-background)] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent)]">
              <CategoryIcon category={categoryOf(t.slug)} className="h-4 w-4" />
            </span>
            <p className="mt-3 text-[14px] font-medium leading-snug text-[var(--color-ink)]">
              {t.name}
            </p>
            <p className="mt-1 text-[12px] text-[var(--color-hint)]">
              {t.tags.map((tag) => tagLabel(tag)).join(" · ")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
