import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-[var(--color-line-soft)]">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-accent)] text-[13px] font-semibold text-white">
                CT
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-[var(--color-ink)]">
                {site.name}
              </span>
            </Link>
            <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
              {site.tagline} Open source, no accounts, no tracking — everything
              runs locally in your browser.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-14">
            <nav className="flex flex-col gap-2.5">
              <span className="section-label">Explore</span>
              <Link href="/" className="footer-link">
                All tools
              </Link>
              <Link href="/tags" className="footer-link">
                Browse by tag
              </Link>
              <Link href="/about" className="footer-link">
                About
              </Link>
            </nav>
            <nav className="flex flex-col gap-2.5">
              <span className="section-label">Legal</span>
              <Link href="/privacy" className="footer-link">
                Privacy policy
              </Link>
              <Link href="/terms" className="footer-link">
                Terms of use
              </Link>
            </nav>
            <nav className="flex flex-col gap-2.5">
              <span className="section-label">Connect</span>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link inline-flex items-center gap-2"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <a
                href={site.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link inline-flex items-center gap-2"
              >
                <Twitter className="h-3.5 w-3.5" /> {site.socials.xHandle}
              </a>
              <a
                href={site.socials.personalSite}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                chaitanyaprabuddha.com
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--color-line-soft)] pt-6 text-[12.5px] text-[var(--color-hint)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.author}. Built with care.
          </p>
          <p>Free, fast, and private developer tools.</p>
        </div>
      </div>
    </footer>
  );
}
