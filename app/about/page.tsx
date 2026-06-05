import type { Metadata } from "next";
import Link from "next/link";
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
    <div className="mx-auto w-full max-w-2xl px-5 pt-12 sm:px-6 sm:pt-16">
      <p className="mono-label">About</p>
      <h1 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--fg)] sm:text-[44px]">
        Small tools, done well.
      </h1>

      <div className="mt-6 space-y-5 text-[16px] leading-[1.75] text-[var(--muted)]">
        <p>
          This is a growing collection of {tools.length} free developer tools I
          build and maintain — each one focused on doing a single job well. SQL
          on a CSV. A breaking-change diff for an OpenAPI spec. Stripping
          metadata from an image. The kind of thing you reach for mid-task and
          just want to work.
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

      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[var(--muted)]">
        <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent-2)]">
          GitHub
        </a>
        <span className="text-[var(--faint)]">·</span>
        <a href={site.socials.x} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent-2)]">
          {site.socials.xHandle}
        </a>
        <span className="text-[var(--faint)]">·</span>
        <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent-2)]">
          LinkedIn
        </a>
        <span className="text-[var(--faint)]">·</span>
        <a href={site.socials.personalSite} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent-2)]">
          Personal site
        </a>
      </div>

      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 sm:px-8">
        <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-[var(--fg)]">
          Got feedback or a tool idea?
        </h2>
        <p className="mt-2 max-w-md text-[14px] leading-relaxed text-[var(--muted)]">
          I read every message. Tell me what would make these tools better.
        </p>
        <div className="mt-5">
          <FeedbackButton variant="accent" />
        </div>
      </div>

      <p className="mt-10 text-[13px] text-[var(--faint)]">
        <Link href="/" className="hover:text-[var(--accent-2)]">
          ← Back to all tools
        </Link>
      </p>
    </div>
  );
}
