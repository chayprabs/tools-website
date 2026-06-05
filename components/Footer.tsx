import Link from "next/link";
import { Github, Twitter, Globe, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 bg-[var(--color-dark)] text-[var(--color-dark-fg)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="eyebrow" style={{ color: "var(--color-accent)" }}>
              {site.shortName}
            </p>
            <p className="font-display mt-4 text-[30px] leading-[1.1] text-[var(--color-dark-fg)] sm:text-[38px]">
              Small tools,{" "}
              <span className="font-display-italic text-[var(--color-accent)]">
                done well.
              </span>
            </p>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-[var(--color-dark-muted)]">
              {site.tagline} Open source, no accounts, no tracking — most tools
              run entirely on your device.
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              {[
                { href: site.socials.github, label: "GitHub", Icon: Github },
                { href: site.socials.x, label: site.socials.xHandle, Icon: Twitter },
                { href: site.socials.personalSite, label: "Site", Icon: Globe },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-dark-line)] text-[var(--color-dark-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <nav className="flex flex-col gap-3">
              <span className="section-label" style={{ color: "var(--color-dark-muted)" }}>
                Explore
              </span>
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
            <nav className="flex flex-col gap-3">
              <span className="section-label" style={{ color: "var(--color-dark-muted)" }}>
                Connect
              </span>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-1">
                GitHub <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href={site.socials.x} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-1">
                {site.socials.xHandle} <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href={site.socials.personalSite} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-1">
                Personal site <ArrowUpRight className="h-3 w-3" />
              </a>
            </nav>
            <nav className="flex flex-col gap-3">
              <span className="section-label" style={{ color: "var(--color-dark-muted)" }}>
                Legal
              </span>
              <Link href="/privacy" className="footer-link">
                Privacy
              </Link>
              <Link href="/terms" className="footer-link">
                Terms
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-[var(--color-dark-line)] pt-7 text-[12.5px] text-[var(--color-dark-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.author}. All rights reserved.
          </p>
          <p>Free, fast, and private developer tools.</p>
        </div>
      </div>
    </footer>
  );
}
