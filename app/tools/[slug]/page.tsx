import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getTool, repoUrl, tagLabel } from "@/lib/tools";
import { categoryOf, getCategory } from "@/lib/categories";
import { site } from "@/lib/site";
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
      <article className="mx-auto w-full max-w-[760px] px-5 pt-10 sm:pt-14">
        <nav className="flex items-center gap-2 text-[12px] font-light text-[var(--color-hint)]">
          <Link href="/" className="transition-colors hover:text-[var(--color-ink)]">
            Tools
          </Link>
          <span className="text-[rgba(0,0,0,0.22)]">·</span>
          {category && (
            <Link
              href={`/#${category.slug}`}
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {category.label}
            </Link>
          )}
        </nav>

        <header className="fade-up mt-6">
          <h1 className="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[44px]">
            {tool.name}
          </h1>
          <p className="mt-4 max-w-[560px] text-[16px] font-light leading-[1.6] text-[var(--color-muted)]">
            {tool.tagline}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-light text-[var(--color-hint)]">
            {tool.tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-3">
                <Link
                  href={`/tags/${tag}`}
                  className="transition-colors hover:text-[var(--color-accent)]"
                >
                  {tagLabel(tag)}
                </Link>
                {i < tool.tags.length - 1 && (
                  <span className="text-[rgba(0,0,0,0.22)]">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <FeedbackButton toolName={tool.name} toolSlug={tool.slug} variant="accent" />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View source &rarr;
            </a>
          </div>
        </header>

        <div className="hairline mt-10" />

        <section className="mt-8">
          <p className="section-label">About this tool</p>
          <p className="mt-3 text-[15px] font-light leading-[1.85] text-[var(--color-foreground)]">
            {tool.description}
          </p>
        </section>

        <section className="mt-8">
          <p className="section-label">What it does</p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {tool.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-[14px] font-light leading-[1.6] text-[var(--color-foreground)]"
              >
                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-accent)]" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <p className="section-label">Repository</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 flex items-center justify-between gap-3 rounded-[6px] bg-[var(--color-card-2)] px-4 py-3.5 transition-colors hover:bg-[#e6e3dd]"
          >
            <span>
              <span className="block text-[14px] font-medium text-[var(--color-ink)]">
                {site.socials.githubProfile}/{tool.repo}
              </span>
              <span className="block text-[12px] font-light text-[var(--color-hint)]">
                Full source code, issues, and releases
              </span>
            </span>
            <span className="shrink-0 text-[12px] text-[var(--color-hint)] transition-colors group-hover:text-[var(--color-accent)]">
              Open &rarr;
            </span>
          </a>
        </section>

        <section className="mt-12 rounded-[6px] bg-[var(--color-card-2)] px-5 py-6 sm:px-7">
          <h2 className="text-[18px] font-semibold leading-tight text-[var(--color-ink)]">
            Spotted a bug or have an idea?
          </h2>
          <p className="mt-2 max-w-md text-[14px] font-light leading-[1.7] text-[var(--color-muted)]">
            This tool is built in the open and shaped by feedback. If something
            feels off — or you want a feature — I read every message.
          </p>
          <div className="mt-4">
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
      <p className="section-label">Related tools</p>
      <div className="mt-3 flex flex-col">
        {related.map((t, i) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className={`group flex items-center justify-between gap-3 py-3 transition-colors ${
              i > 0 ? "border-t border-[var(--color-line-soft)]" : ""
            }`}
          >
            <span>
              <span className="block text-[14px] font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                {t.name}
              </span>
              <span className="block text-[12px] font-light text-[var(--color-hint)]">
                {t.tags.map((tag) => tagLabel(tag)).join("  ·  ")}
              </span>
            </span>
            <span className="shrink-0 text-[12px] text-[var(--color-hint)] transition-colors group-hover:text-[var(--color-accent)]">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
