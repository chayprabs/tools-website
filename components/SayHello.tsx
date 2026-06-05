"use client";

import { useState } from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: site.socials.github, label: "GitHub", Icon: Github },
  { href: site.socials.x, label: "X", Icon: Twitter },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${site.feedbackEmail}`, label: "Email", Icon: Mail },
];

export function SayHello() {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const expanded = hovered || pinned;

  return (
    <section
      aria-label="Contact"
      className={`fixed bottom-5 left-1/2 z-[90] max-w-[calc(100vw-24px)] min-w-[120px] -translate-x-1/2 overflow-hidden rounded-[20px] border border-[var(--border-strong)] bg-[var(--surface)]/95 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
        expanded ? "px-4 py-4 sm:px-6" : "px-4 py-2.5"
      }`}
      style={{ transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setPinned(false);
      }}
    >
      <div className="relative">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="say-hello-links"
          onClick={() => setPinned((c) => !c)}
          className={`origin-bottom transition-all duration-200 ${
            expanded
              ? "pointer-events-none absolute inset-0 scale-[0.95] opacity-0"
              : "scale-100 opacity-100"
          } flex w-full items-center justify-center gap-2 border-0 bg-transparent p-0`}
        >
          <span className="contact-pulse h-[6px] w-[6px] rounded-full bg-[var(--accent)]" />
          <span className="text-[12px] font-medium text-[var(--muted)]">
            say hello
          </span>
        </button>

        <div
          id="say-hello-links"
          className={`origin-bottom transition-all duration-200 ${
            expanded
              ? "scale-100 opacity-100"
              : "pointer-events-none absolute inset-0 scale-[0.95] opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="mono-label m-0">reach out</p>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setPinned(false)}
              className="rounded-full px-1 text-[14px] leading-none text-[var(--faint)] transition-colors hover:text-[var(--fg)] md:hidden"
            >
              ×
            </button>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            {links.map(({ href, label, Icon }) => {
              const isEmail = href.startsWith("mailto:");
              return (
                <a
                  key={label}
                  href={href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  onClick={() => setPinned(false)}
                  className="flex min-w-[44px] flex-col items-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-2)] text-[var(--fg)] transition-all duration-150 hover:-translate-y-[2px] hover:border-[var(--accent)]/50 hover:bg-[var(--accent-dim)] hover:text-[var(--accent-2)]">
                    <Icon className="h-[17px] w-[17px]" />
                  </span>
                  <span className="mt-1.5 text-[10px] text-[var(--muted)] sm:text-[11px]">
                    {label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
