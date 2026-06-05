import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${site.name}, a directory of free, open-source, browser-based developer tools.`,
  alternates: { canonical: "/terms" },
};

const updated = "June 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 pt-14 pb-4 sm:px-8 sm:pt-20">
      <span className="section-label">Legal</span>
      <h1 className="font-display mt-4 text-[40px] leading-[1.05] text-[var(--color-ink)] sm:text-[52px]">
        Terms of Use
      </h1>
      <p className="mt-3 text-[13px] text-[var(--color-hint)]">
        Last updated: {updated}
      </p>

      <div className="legal mt-8">
        <p>
          By using {site.name} (&ldquo;the Site&rdquo;) and the tools linked
          from it, you agree to these terms. If you do not agree, please do not
          use the Site.
        </p>

        <h2>Free to use</h2>
        <p>
          The tools are provided free of charge for personal and commercial use.
          Each tool is open source; your use of a tool&apos;s source code is
          governed by the license in its respective GitHub repository.
        </p>

        <h2>No warranty</h2>
        <p>
          The Site and tools are provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, express or implied,
          including but not limited to fitness for a particular purpose and
          non-infringement. Tool output may contain errors. Always verify
          results before relying on them for anything important.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {site.author} shall not be
          liable for any direct, indirect, incidental, or consequential damages
          arising from your use of, or inability to use, the Site or its tools —
          including any loss of data.
        </p>

        <h2>Acceptable use</h2>
        <ul>
          <li>Do not use the Site to violate any law or third-party rights.</li>
          <li>
            Do not attempt to disrupt, overload, or compromise the Site or its
            infrastructure.
          </li>
          <li>
            You are responsible for the files and data you choose to process.
          </li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          The Site design, branding, and content are owned by {site.author}.
          Tool source code is licensed under the terms stated in each
          repository.
        </p>

        <h2>Changes</h2>
        <p>
          These terms may change over time. Continued use of the Site after an
          update constitutes acceptance of the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href={`mailto:${site.feedbackEmail}`}>{site.feedbackEmail}</a>.
        </p>
      </div>

      <p className="mt-10 text-[13px] text-[var(--color-hint)]">
        <Link href="/" className="hover:text-[var(--color-accent)]">
          ← Back to all tools
        </Link>
      </p>
    </div>
  );
}
