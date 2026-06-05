import Link from "next/link";
import { tools, toolsSorted, getAllTags } from "@/lib/tools";
import { getCategoryGroups } from "@/lib/categories";
import { site } from "@/lib/site";
import { CommandBar } from "@/components/CommandTrigger";
import { CategoryNav } from "@/components/CategoryNav";
import { CategorySection } from "@/components/CategorySection";

export default function HomePage() {
  const groups = getCategoryGroups();
  const tags = getAllTags();
  const count = tools.length;

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: site.author,
      url: site.socials.personalSite,
      sameAs: [
        site.socials.github,
        site.socials.x,
        site.socials.linkedin,
        site.socials.personalSite,
      ],
    },
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    hasPart: toolsSorted.map((tool) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      description: tool.tagline,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: `${site.url}/tools/${tool.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <div className="mx-auto w-full max-w-[880px] px-5">
        {/* Hero */}
        <section className="fade-up pt-14 pb-2 sm:pt-20">
          <h1 className="max-w-[640px] text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] sm:text-[60px]">
            Tools I built,
            <br />
            free for everyone.
          </h1>
          <p className="mt-6 max-w-[540px] text-[15px] font-light leading-[1.8] text-[var(--color-foreground)]">
            {count} small, fast developer tools for data, documents, APIs, and
            DevOps — most run entirely in your browser. No installs, no
            accounts, no tracking.
          </p>

          <div className="mt-7 max-w-[460px]">
            <CommandBar count={count} />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-light text-[var(--color-muted)]">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              Open source on GitHub
            </a>
            <span className="text-[rgba(0,0,0,0.22)]">·</span>
            <a
              href={site.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {site.socials.xHandle}
            </a>
          </div>
        </section>

        {/* Category jump nav */}
        <div className="mt-10 border-t border-b border-[var(--color-line)] py-3">
          <CategoryNav groups={groups} />
        </div>

        {/* Category sections */}
        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <CategorySection key={group.category.slug} group={group} />
          ))}
        </div>

        {/* Browse by tag */}
        <section className="mt-16">
          <div className="hairline" />
          <p className="section-label mt-8">Browse by tag</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/tags/${tag.slug}`}
                className="inline-flex items-center gap-1.5 rounded-[4px] border border-[var(--color-line)] bg-[var(--color-card)] px-2.5 py-1 text-[12px] font-light text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {tag.label}
                <span className="text-[var(--color-hint)]">{tag.count}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
