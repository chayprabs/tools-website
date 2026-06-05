import Link from "next/link";
import { Github, Twitter, Sparkles } from "lucide-react";
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
      sameAs: [site.socials.github, site.socials.x, site.socials.personalSite],
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

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="fade-up inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-3.5 py-1.5 shadow-[var(--shadow-card)]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            <span className="eyebrow" style={{ color: "var(--color-muted)" }}>
              {count} free tools · no signup · open source
            </span>
          </span>

          <h1 className="font-display fade-up-2 mx-auto mt-7 max-w-3xl text-[48px] font-medium leading-[0.98] text-[var(--color-ink)] sm:text-[80px]">
            Developer tools that
            <br className="hidden sm:block" /> just{" "}
            <span className="font-display-italic text-[var(--color-accent)]">
              work.
            </span>
          </h1>

          <p className="fade-up-2 mx-auto mt-7 max-w-xl text-[16.5px] leading-relaxed text-[var(--color-muted)]">
            A curated directory of fast, focused utilities for data, documents,
            APIs, and DevOps — right in your browser. No installs, no accounts,
            no tracking.
          </p>

          <div className="fade-up-3 mx-auto mt-9 max-w-xl">
            <CommandBar count={count} />
          </div>

          <div className="fade-up-3 mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[var(--color-muted)]">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-ink)]"
            >
              <Github className="h-4 w-4" /> Open source on GitHub
            </a>
            <a
              href={site.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-ink)]"
            >
              <Twitter className="h-4 w-4" /> {site.socials.xHandle}
            </a>
          </div>
        </div>

        <div className="mt-16">
          <CategoryNav groups={groups} />
        </div>
      </section>

      {/* Category sections */}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24">
          {groups.map((group, i) => (
            <CategorySection key={group.category.slug} group={group} index={i} />
          ))}
        </div>

        {/* Browse by tag */}
        <section className="mt-20">
          <div className="hairline" />
          <div className="mt-10 text-center">
            <span className="section-label">Browse by tag</span>
            <h2 className="font-display mt-3 text-[30px] leading-tight text-[var(--color-ink)] sm:text-[38px]">
              Looking for something specific?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[14px] text-[var(--color-muted)]">
              Every tool is tagged by what it does. Jump straight to a topic.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/tags/${tag.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-3 py-1.5 text-[12.5px] font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
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
