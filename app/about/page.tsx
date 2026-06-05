import type { Metadata } from "next";
import Link from "next/link";
import { Github, Twitter, Globe } from "lucide-react";
import { site } from "@/lib/site";
import { tools } from "@/lib/tools";
import { FeedbackButton } from "@/components/FeedbackButton";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — a free, open-source directory of fast, privacy-first developer tools built by ${site.author}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 pt-14 sm:px-8 sm:pt-20">
      <span className="section-label">About</span>
      <h1 className="font-display mt-4 text-[42px] leading-[1.04] text-[var(--color-ink)] sm:text-[56px]">
        Small tools,{" "}
        <span className="font-display-italic text-[var(--color-accent)]">
          done well.
        </span>
      </h1>

      <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[var(--color-foreground)]">
        <p>
          {site.name} is a growing collection of {tools.length} free developer
          tools — each one focused on doing a single job well. SQL on a CSV. A
          breaking-change diff for an OpenAPI spec. Stripping metadata from an
          image. The kind of thing you reach for mid-task and want to just
          work.
        </p>
        <p>
          Most of these run entirely in your browser. No accounts, no uploads to
          a server you do not control, no tracking. Your files stay on your
          device, and every tool is open source — so you can read exactly what
          it does.
        </p>
        <p>
          I&apos;m {site.author}, and I build these in the open. If something is
          broken or missing, tell me — feedback shapes what gets built next.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-2 text-[13.5px] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href={site.socials.x}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-2 text-[13.5px] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Twitter className="h-4 w-4" /> {site.socials.xHandle}
        </a>
        <a
          href={site.socials.personalSite}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-2 text-[13.5px] font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Globe className="h-4 w-4" /> Personal site
        </a>
      </div>

      <div className="mt-14 rounded-3xl border border-[var(--color-line)] bg-[var(--color-card)] p-8 text-center shadow-[var(--shadow-card)] sm:p-10">
        <h2 className="font-display text-[26px] leading-tight text-[var(--color-ink)] sm:text-[32px]">
          Got feedback or a tool idea?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-[var(--color-muted)]">
          I read every message. Tell me what would make these tools better.
        </p>
        <div className="mt-5 flex justify-center">
          <FeedbackButton />
        </div>
      </div>

      <p className="mt-10 text-center text-[13px] text-[var(--color-hint)]">
        <Link href="/" className="hover:text-[var(--color-accent)]">
          ← Back to all tools
        </Link>
      </p>
    </div>
  );
}
