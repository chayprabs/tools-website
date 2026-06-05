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
      className={`fixed bottom-6 left-1/2 z-[90] max-w-[calc(100vw-24px)] min-w-[120px] -translate-x-1/2 overflow-hidden rounded-[24px] border-[0.5px] border-[var(--color-line)] bg-[rgba(244,242,238,0.96)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-[12px] ${
        expanded ? "px-4 py-4 sm:px-6" : "px-4 py-2"
      }`}
      style={{ transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
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
          <span className="contact-pulse h-[5px] w-[5px] rounded-full bg-[#4a8a1e]" />
          <span className="text-[11px] font-normal text-[var(--color-muted)]">
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
            <p className="m-0 text-[10px] font-normal uppercase tracking-[0.15em] text-[var(--color-hint)]">
              reach out
            </p>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setPinned(false)}
              className="rounded-full px-1 text-[14px] leading-none text-[var(--color-hint)] transition-colors hover:text-[var(--color-ink)] md:hidden"
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
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-[0.5px] border-[var(--color-line)] bg-[var(--color-card)] text-[var(--color-ink)] transition-transform duration-150 hover:-translate-y-[2px]">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="mt-1.5 text-[10px] text-[var(--color-muted)] sm:text-[11px]">
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
