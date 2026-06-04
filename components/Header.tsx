import Link from "next/link";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "Tools" },
  { href: "/tags", label: "Tags" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line-soft)] bg-[var(--color-background)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-accent)] text-[13px] font-semibold text-white transition-transform group-hover:scale-105">
            CT
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[var(--color-ink)]">
            {site.name}
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-normal tracking-wide text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
