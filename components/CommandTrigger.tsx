"use client";

import { Search } from "lucide-react";

function open() {
  window.dispatchEvent(new Event("open-command-palette"));
}

export function CommandBar({ count }: { count: number }) {
  return (
    <button
      onClick={open}
      className="group flex w-full items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-3.5 text-left backdrop-blur-sm transition-all hover:border-[var(--accent)]/40 hover:bg-[var(--surface-2)] hover:shadow-[0_10px_40px_-20px_var(--accent-glow)]"
      aria-label="Search tools"
    >
      <Search className="h-[18px] w-[18px] shrink-0 text-[var(--faint)] transition-colors group-hover:text-[var(--accent-2)]" />
      <span className="flex-1 text-[14px] text-[var(--muted)]">
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
      className="flex h-9 items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2.5 text-[13px] text-[var(--muted)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--fg)] sm:h-8"
      aria-label="Search tools"
    >
      <Search className="h-3.5 w-3.5" />
      <span className="hidden items-center gap-0.5 sm:flex">
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </span>
    </button>
  );
}
