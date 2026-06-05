import Link from "next/link";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";
import { site } from "@/lib/site";

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: Github },
  { href: site.socials.x, label: site.socials.xHandle, Icon: Twitter },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: site.socials.personalSite, label: "Personal site", Icon: Globe },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-[var(--border)] bg-[var(--bg-2)]">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent"
      />
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--accent-2)] via-[var(--accent)] to-[#5b3cff] text-[12px] font-bold text-white shadow-[0_4px_16px_-4px_var(--accent-glow)]">
                {site.monogram}
              </span>
              <span className="text-[14.5px] font-semibold tracking-[-0.02em] text-[var(--fg)]">
                {site.wordmark}
              </span>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--muted)]">
              {site.tagline} Open source, no accounts, no tracking — most tools
              run entirely in your browser.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent-2)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-16">
            <nav className="flex flex-col gap-2.5">
              <span className="mono-label mb-1">Explore</span>
              <Link href="/" className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]">
                All tools
              </Link>
              <Link href="/tags" className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]">
                Browse by tag
              </Link>
              <Link href="/about" className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]">
                About
              </Link>
            </nav>
            <nav className="flex flex-col gap-2.5">
              <span className="mono-label mb-1">Legal</span>
              <Link href="/privacy" className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]">
                Privacy
              </Link>
              <Link href="/terms" className="text-[13.5px] text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]">
                Terms
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-[12.5px] text-[var(--faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.author}. Built and maintained by me.</p>
          <p className="font-mono">free · fast · private</p>
        </div>
      </div>
    </footer>
  );
}
