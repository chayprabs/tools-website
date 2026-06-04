import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}. Most tools run entirely in your browser — your files and data stay on your device.`,
  alternates: { canonical: "/privacy" },
};

const updated = "June 2026";

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 pt-12 pb-4 sm:px-6 sm:pt-16">
      <span className="section-label">Legal</span>
      <h1 className="mt-3 text-[30px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[38px]">
        Privacy Policy
      </h1>
      <p className="mt-3 text-[13px] text-[var(--color-hint)]">
        Last updated: {updated}
      </p>

      <div className="legal mt-8">
        <p>
          {site.name} (&ldquo;the Site&rdquo;) is a directory of free,
          browser-based developer tools operated by {site.author}. This policy
          explains what data is and is not collected when you use the Site.
        </p>

        <h2>The short version</h2>
        <p>
          Most tools listed here process your files and data entirely within
          your own browser. When a tool runs client-side, the files you open
          never leave your device and are never transmitted to us or any third
          party.
        </p>

        <h2>Information we do not collect</h2>
        <ul>
          <li>We do not require an account, login, or signup to use any tool.</li>
          <li>
            We do not ask for, store, or sell your personal information.
          </li>
          <li>
            For client-side tools, we do not receive the contents of the files
            you process.
          </li>
        </ul>

        <h2>Analytics and hosting</h2>
        <p>
          The Site is hosted on Vercel. Vercel may collect standard,
          aggregate request information (such as IP address, browser type, and
          requested page) in server logs for security and performance, as
          described in Vercel&apos;s own privacy documentation. If
          privacy-friendly, aggregate analytics are enabled, they are used only
          to understand which tools are useful — never to identify individuals.
        </p>

        <h2>Cookies</h2>
        <p>
          The Site does not use cookies for advertising or cross-site tracking.
          Any storage used is limited to making the tools function (for example,
          remembering a setting in your browser&apos;s local storage).
        </p>

        <h2>Third-party links</h2>
        <p>
          Tool pages link to source code on GitHub and to external sites. Those
          services have their own privacy policies, and we are not responsible
          for their practices.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          The Site is intended for a general, developer audience and is not
          directed at children under 13.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          This policy may be updated from time to time. Material changes will be
          reflected by the &ldquo;last updated&rdquo; date above.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy? Email{" "}
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
