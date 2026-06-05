"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { CommandButtonCompact } from "./CommandTrigger";

const navItems = [
  { href: "/", label: "Tools" },
  { href: "/tags", label: "Tags" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-[10px] bg-gradient-to-br from-[var(--accent-2)] via-[var(--accent)] to-[#5b3cff] text-[12px] font-bold text-white shadow-[0_4px_16px_-4px_var(--accent-glow)] transition-transform group-hover:scale-105">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1/2 bg-white/20"
            />
            <span className="relative">{site.monogram}</span>
          </span>
          <span className="hidden text-[14.5px] font-semibold tracking-[-0.02em] text-[var(--fg)] sm:block">
            {site.wordmark}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 sm:flex">
          <nav className="flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-1.5 text-[13.5px] font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-[var(--surface)] text-[var(--fg)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--fg)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="mx-1 h-4 w-px bg-[var(--border)]" />
          <CommandButtonCompact />
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--fg)]"
          >
            <Github className="h-[17px] w-[17px]" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1.5 sm:hidden">
          <CommandButtonCompact />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--fg)] transition-colors hover:border-[var(--border-strong)]"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="overlay-in sm:hidden">
          <div
            className="fixed inset-0 top-[57px] z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <nav className="relative z-50 border-b border-[var(--border)] bg-[var(--bg-2)] px-5 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-[var(--surface)] text-[var(--fg)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--fg)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-2.5 rounded-xl px-3 py-3 text-[15px] font-medium text-[var(--muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--fg)]"
            >
              <Github className="h-[18px] w-[18px]" /> GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
