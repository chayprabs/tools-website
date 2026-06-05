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
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-background)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[880px] items-center justify-between px-5 py-3.5">
        <Link
          href="/"
          className="text-[14px] font-semibold tracking-[-0.01em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
        >
          {site.wordmark}
        </Link>

        <div className="flex items-center gap-3.5 sm:gap-4">
          <nav className="flex items-center gap-3.5 sm:gap-4">
            {navItems.map((item, i) => (
              <div key={item.href} className="flex items-center gap-3.5 sm:gap-4">
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
                {i < navItems.length - 1 && (
                  <span className="text-[11px] leading-none text-[rgba(0,0,0,0.22)]">
                    ·
                  </span>
                )}
              </div>
            ))}
          </nav>
          <span className="h-3.5 w-px bg-[var(--color-line)]" />
          <CommandButtonCompact />
        </div>
      </div>
    </header>
  );
}
