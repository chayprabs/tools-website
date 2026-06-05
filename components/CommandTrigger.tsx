"use client";

import { Search } from "lucide-react";

function open() {
  window.dispatchEvent(new Event("open-command-palette"));
}

export function CommandBar({ count }: { count: number }) {
  return (
    <button
      onClick={open}
      className="group flex w-full items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] px-5 py-4 text-left shadow-[var(--shadow-card)] transition-all hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-lift)]"
      aria-label="Search tools"
    >
      <Search className="h-5 w-5 shrink-0 text-[var(--color-hint)] transition-colors group-hover:text-[var(--color-accent)]" />
      <span className="flex-1 text-[15px] text-[var(--color-muted)]">
        Search {count} tools — try “csv”, “pdf”, “openapi”…
      </span>
      <span className="hidden shrink-0 items-center gap-1 sm:flex">
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </span>
    </button>
  );
}

export function CommandButtonCompact() {
  return (
    <button
      onClick={open}
      className="flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-card)] py-1.5 pl-3 pr-2 text-[13px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/40 hover:text-[var(--color-ink)]"
      aria-label="Search tools"
    >
      <Search className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Search</span>
      <span className="hidden items-center gap-0.5 sm:flex">
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </span>
    </button>
  );
}
