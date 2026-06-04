import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Github } from "lucide-react";
import { tools, getTool, repoUrl, tagLabel } from "@/lib/tools";
import { site } from "@/lib/site";
import { TagPill } from "@/components/TagPill";
import { FeedbackButton } from "@/components/FeedbackButton";

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
    author: { "@type": "Person", name: site.author, url: site.socials.personalSite },
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
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All tools
        </Link>

        <header className="fade-up mt-6">
          <div className="flex flex-wrap gap-2">
            {tool.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
          <h1 className="mt-4 text-[30px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[38px]">
            {tool.name}
          </h1>
          <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-muted)]">
            {tool.tagline}
          </p>
        </header>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-5 py-2.5 text-[13.5px] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Github className="h-4 w-4" /> View source on GitHub
          </a>
          <FeedbackButton toolName={tool.name} toolSlug={tool.slug} />
        </div>

        <section className="mt-12">
          <span className="section-label">About this tool</span>
          <p className="mt-3 text-[16px] leading-[1.8] text-[var(--color-ink)]">
            {tool.description}
          </p>
        </section>

        <section className="mt-10">
          <span className="section-label">What it does</span>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {tool.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 rounded-lg border border-[var(--color-line-soft)] bg-[var(--color-card)] p-3.5"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <span className="text-[13.5px] leading-relaxed text-[var(--color-foreground)]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <span className="section-label">Repository</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-accent)]/40"
          >
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-[var(--color-muted)]" />
              <div>
                <p className="text-[14px] font-medium text-[var(--color-ink)]">
                  {site.socials.githubProfile}/{tool.repo}
                </p>
                <p className="text-[12.5px] text-[var(--color-hint)]">
                  Full source code, issues, and releases
                </p>
              </div>
            </div>
            <span className="text-[12.5px] font-medium text-[var(--color-accent)]">
              Open →
            </span>
          </a>
        </section>

        <section className="mt-12 rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] p-6 text-center sm:p-8">
          <h2 className="text-[18px] font-semibold tracking-tight text-[var(--color-ink)]">
            Spotted a bug or have an idea?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-[var(--color-muted)]">
            This tool is built in the open and shaped by feedback. If something
            feels off — or you want a feature — I read every message.
          </p>
          <div className="mt-5 flex justify-center">
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
    <section className="mt-12">
      <span className="section-label">Related tools</span>
      <div className="mt-4 flex flex-col gap-2">
        {related.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="flex items-center justify-between gap-3 rounded-lg border border-[var(--color-line-soft)] p-3.5 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-card)]"
          >
            <div>
              <p className="text-[14px] font-medium text-[var(--color-ink)]">
                {t.name}
              </p>
              <p className="text-[12.5px] text-[var(--color-hint)]">
                {t.tags.map((tag) => tagLabel(tag)).join(" · ")}
              </p>
            </div>
            <span className="text-[12.5px] text-[var(--color-accent)]">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
