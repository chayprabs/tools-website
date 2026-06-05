import Link from "next/link";
import { site } from "@/lib/site";
import { CommandButtonCompact } from "./CommandTrigger";

const navItems = [
  { href: "/", label: "Tools" },
  { href: "/tags", label: "Tags" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line-soft)] bg-[var(--color-background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)] text-[15px] font-medium text-white shadow-[var(--shadow-card)] transition-transform group-hover:scale-105">
            <span className="font-display leading-none">C</span>
          </span>
          <span className="font-display text-[20px] leading-none text-[var(--color-ink)]">
            {site.name}
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="flex items-center gap-3.5 sm:gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] sm:text-[13.5px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="h-4 w-px bg-[var(--color-line)]" />
          <CommandButtonCompact />
        </div>
      </div>
    </header>
  );
}
