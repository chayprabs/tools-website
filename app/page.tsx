import { Github, Twitter } from "lucide-react";
import { toolsSorted, getAllTags } from "@/lib/tools";
import { site } from "@/lib/site";
import { ToolDirectory } from "@/components/ToolDirectory";

export default function HomePage() {
  const tools = toolsSorted;
  const tags = getAllTags();

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
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    hasPart: tools.map((tool) => ({
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
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">
        <section className="fade-up pt-14 pb-10 sm:pt-20 sm:pb-12">
          <span className="section-label">{tools.length} free tools · no signup</span>
          <h1 className="mt-4 max-w-2xl text-[32px] font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] sm:text-[44px]">
            Developer tools that just work, right in your browser.
          </h1>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-[var(--color-muted)]">
            A growing directory of fast, focused utilities for data, documents,
            APIs, and DevOps. No installs, no accounts, no tracking — most run
            entirely on your device.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              <Github className="h-4 w-4" /> Open source on GitHub
            </a>
            <a
              href={site.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              <Twitter className="h-4 w-4" /> {site.socials.xHandle}
            </a>
          </div>
        </section>

        <section className="pb-8">
          <ToolDirectory tools={tools} tags={tags} />
        </section>
      </div>
    </>
  );
}
