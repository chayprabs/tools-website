import Link from "next/link";
import { Github, Twitter, Globe } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 border-t border-[var(--color-line-soft)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white">
                <span className="font-display text-[15px] leading-none">C</span>
              </span>
              <span className="font-display text-[20px] leading-none text-[var(--color-ink)]">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
              {site.tagline} Open source, no accounts, no tracking — most tools
              run entirely on your device.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={site.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={site.socials.xHandle}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={site.socials.personalSite}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal site"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
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
                className="footer-link"
              >
                GitHub
              </a>
              <a
                href={site.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {site.socials.xHandle}
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

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-line-soft)] pt-6 text-[12.5px] text-[var(--color-hint)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.author}. Built with care.
          </p>
          <p className="font-display-italic text-[15px] text-[var(--color-muted)]">
            small tools, done well.
          </p>
        </div>
      </div>
    </footer>
  );
}
