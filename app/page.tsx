import Link from "next/link";
import { Github, Star } from "lucide-react";
import { tools, toolsSorted, getAllTags } from "@/lib/tools";
import { getCategoryGroups, categories } from "@/lib/categories";
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

  const stats = [
    { value: count, label: "tools" },
    { value: categories.length, label: "categories" },
    { value: "100%", label: "open source" },
    { value: "$0", label: "forever" },
  ];

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
      <section className="relative overflow-hidden">
        <div className="grid-backdrop" />
        <div className="hero-glow" />
        <div className="mx-auto w-full max-w-6xl px-5 pt-20 pb-10 sm:px-6 sm:pt-28 sm:pb-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="fade-up mono-label inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-1 backdrop-blur-sm">
              <Star className="h-3 w-3 fill-[var(--accent-2)] text-[var(--accent-2)]" />
              {count} free developer tools
            </span>

            <h1 className="fade-up-2 mt-6 text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-[var(--fg)] sm:text-[64px]">
              Every dev tool you need,
              <br className="hidden sm:block" />{" "}
              <span className="gradient-text">right in your browser.</span>
            </h1>

            <p className="fade-up-2 mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[var(--muted)]">
              A fast, open-source directory of {count} focused utilities for
              data, documents, APIs, and DevOps. No installs, no accounts, no
              tracking — most run entirely on your device.
            </p>

            <div className="fade-up-3 mx-auto mt-8 max-w-md">
              <CommandBar count={count} />
            </div>

            <div className="fade-up-3 mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github className="h-4 w-4" /> Star on GitHub
              </a>
            </div>

            <dl className="fade-up-3 mx-auto mt-12 grid max-w-lg grid-cols-4 gap-2 sm:gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 px-2 py-3.5 backdrop-blur-sm transition-colors hover:border-[var(--accent)]/30"
                >
                  <dt className="bg-gradient-to-b from-[var(--fg)] to-[var(--muted)] bg-clip-text text-[20px] font-bold tracking-[-0.02em] text-transparent sm:text-[26px]">
                    {s.value}
                  </dt>
                  <dd className="mono-label mt-0.5 text-[10px]">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="border-y border-[var(--border)] py-3">
          <CategoryNav groups={groups} />
        </div>

        <div className="mt-12 space-y-14 sm:mt-14">
          {groups.map((group) => (
            <CategorySection key={group.category.slug} group={group} />
          ))}
        </div>

        {/* Browse by tag */}
        <section className="mt-20">
          <div className="hairline" />
          <p className="mono-label mt-10">Browse by tag</p>
          <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.01em] text-[var(--fg)]">
            Looking for something specific?
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/tags/${tag.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[12.5px] font-medium text-[var(--muted)] transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent-dim)] hover:text-[var(--fg)]"
              >
                {tag.label}
                <span className="font-mono text-[11px] text-[var(--faint)]">
                  {tag.count}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
