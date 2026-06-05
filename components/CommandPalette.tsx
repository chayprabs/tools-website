"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, CornerDownLeft } from "lucide-react";
import { toolsSorted } from "@/lib/tools";
import { categoryOf, getCategory } from "@/lib/categories";
import { categoryIcons } from "./icons";

type Item = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  haystack: string;
};

const items: Item[] = toolsSorted.map((t) => {
  const cat = getCategory(categoryOf(t.slug));
  return {
    slug: t.slug,
    name: t.name,
    tagline: t.tagline,
    category: cat?.short ?? "",
    haystack: [t.name, t.tagline, t.description, t.repo, ...t.tags, ...t.keywords]
      .join(" ")
      .toLowerCase(),
  };
});

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => i.haystack.includes(q));
  }, [query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const go = useCallback(
    (slug: string) => {
      close();
      router.push(`/tools/${slug}`);
    },
    [close, router]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "/" && !open) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA") {
          e.preventDefault();
          setOpen(true);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("open-command-palette", onOpen);
    return () => window.removeEventListener("open-command-palette", onOpen);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const id = requestAnimationFrame(() => inputRef.current?.focus());
      return () => {
        cancelAnimationFrame(id);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-index="${active}"]`
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  return (
    <div
      className="overlay-in fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={close}
      role="dialog"
      aria-modal="true"
      aria-label="Search tools"
    >
      <div
        className="palette-in glass w-full max-w-lg overflow-hidden rounded-2xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.92)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4">
          <Search className="h-4 w-4 shrink-0 text-[var(--accent-2)]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                const item = results[active];
                if (item) go(item.slug);
              } else if (e.key === "Escape") {
                e.preventDefault();
                close();
              }
            }}
            placeholder="Search tools…"
            aria-label="Search tools"
            className="w-full bg-transparent py-3.5 text-[14.5px] text-[var(--fg)] outline-none placeholder:text-[var(--faint)]"
          />
          <kbd>ESC</kbd>
        </div>

        <div ref={listRef} className="no-scrollbar max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="px-3 py-10 text-center text-[13.5px] text-[var(--muted)]">
              No tools match “{query}”.
            </div>
          ) : (
            results.map((item, i) => {
              const Icon = categoryIcons[categoryOf(item.slug)];
              const isActive = i === active;
              return (
                <button
                  key={item.slug}
                  data-index={i}
                  onMouseMove={() => setActive(i)}
                  onClick={() => go(item.slug)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                    isActive ? "bg-[var(--accent-dim)]" : ""
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                      isActive
                        ? "border-[var(--accent)]/40 bg-[var(--accent-soft)] text-[var(--accent-2)]"
                        : "border-[var(--border)] text-[var(--muted)]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13.5px] font-medium text-[var(--fg)]">
                      {item.name}
                    </span>
                    <span className="block truncate text-[12px] text-[var(--muted)]">
                      {item.tagline}
                    </span>
                  </span>
                  <span className="font-mono hidden shrink-0 text-[10.5px] uppercase tracking-wide text-[var(--faint)] sm:block">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-2.5 text-[11px] text-[var(--faint)]">
          <span className="flex items-center gap-1.5">
            <CornerDownLeft className="h-3 w-3" /> open · ↑↓ navigate · esc close
          </span>
          <span className="font-mono">{results.length}</span>
        </div>
      </div>
    </div>
  );
}
