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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span className="hidden h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-white transition-transform group-hover:scale-105 sm:flex">
            <span className="font-display text-[13px] font-medium leading-none">
              {site.monogram}
            </span>
          </span>
          <span className="font-display text-[17px] font-medium leading-none tracking-[-0.01em] text-[var(--color-ink)] sm:text-[20px]">
            {site.wordmark}
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="flex items-center gap-3.5 sm:gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12.5px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] sm:text-[13.5px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <span className="hidden h-4 w-px bg-[var(--color-line)] sm:block" />
          <CommandButtonCompact />
        </div>
      </div>
    </header>
  );
}
