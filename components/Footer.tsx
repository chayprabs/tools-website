import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Tools" },
  { href: "/tags", label: "Tags" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-[var(--color-line)]">
      <div className="mx-auto w-full max-w-[880px] px-5 py-8">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {links.map((item, i) => (
            <div key={item.href} className="flex items-center gap-4">
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
              {i < links.length - 1 && (
                <span className="text-[11px] leading-none text-[rgba(0,0,0,0.22)]">
                  ·
                </span>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-6 flex flex-col gap-1.5 text-[12px] font-light text-[var(--color-hint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.author}. Built and maintained by me.</p>
          <p>Free, fast, and private — most tools run in your browser.</p>
        </div>
      </div>
    </footer>
  );
}
