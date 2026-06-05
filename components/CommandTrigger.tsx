"use client";

import { Search } from "lucide-react";

function open() {
  window.dispatchEvent(new Event("open-command-palette"));
}

export function CommandBar({ count }: { count: number }) {
  return (
    <button
      onClick={open}
      className="group flex w-full items-center gap-2.5 rounded-[6px] border border-[var(--color-line)] bg-[var(--color-card)] px-3.5 py-2.5 text-left transition-colors hover:border-[rgba(0,0,0,0.2)]"
      aria-label="Search tools"
    >
      <Search className="h-4 w-4 shrink-0 text-[var(--color-hint)] transition-colors group-hover:text-[var(--color-muted)]" />
      <span className="flex-1 text-[13.5px] font-light text-[var(--color-hint)]">
        Search {count} tools…
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
      className="flex items-center gap-1.5 text-[var(--color-hint)] transition-colors hover:text-[var(--color-ink)]"
      aria-label="Search tools"
    >
      <Search className="h-4 w-4" />
      <span className="hidden items-center gap-0.5 sm:flex">
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </span>
    </button>
  );
}
