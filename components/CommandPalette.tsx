"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, CornerDownLeft, ArrowUp, ArrowDown } from "lucide-react";
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
    category: cat?.label ?? "",
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
      className="overlay-in fixed inset-0 z-[100] flex items-start justify-center bg-[rgba(26,26,24,0.32)] px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={close}
      role="dialog"
      aria-modal="true"
      aria-label="Search tools"
    >
      <div
        className="palette-in w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)] shadow-[var(--shadow-pop)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-[var(--color-line-soft)] px-4">
          <Search className="h-4 w-4 shrink-0 text-[var(--color-hint)]" />
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
            placeholder="Search 43 tools…"
            aria-label="Search tools"
            className="w-full bg-transparent py-4 text-[15px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-hint)]"
          />
          <button
            onClick={close}
            className="shrink-0 rounded-md border border-[var(--color-line)] px-2 py-1 text-[10.5px] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            aria-label="Close"
          >
            ESC
          </button>
        </div>

        <div
          ref={listRef}
          className="no-scrollbar max-h-[52vh] overflow-y-auto p-2"
        >
          {results.length === 0 ? (
            <div className="px-3 py-10 text-center text-[13.5px] text-[var(--color-muted)]">
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
                    isActive ? "bg-[var(--color-accent-soft)]" : ""
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                      isActive
                        ? "border-[var(--color-accent)]/30 bg-[var(--color-card)] text-[var(--color-accent)]"
                        : "border-[var(--color-line-soft)] bg-[var(--color-background)] text-[var(--color-muted)]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[14px] font-medium text-[var(--color-ink)]">
                      {item.name}
                    </span>
                    <span className="block truncate text-[12.5px] text-[var(--color-muted)]">
                      {item.tagline}
                    </span>
                  </span>
                  <span className="hidden shrink-0 text-[11px] text-[var(--color-hint)] sm:block">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[var(--color-line-soft)] px-4 py-2.5 text-[11px] text-[var(--color-hint)]">
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <ArrowUp className="h-3 w-3" />
              <ArrowDown className="h-3 w-3" /> navigate
            </span>
            <span className="flex items-center gap-1">
              <CornerDownLeft className="h-3 w-3" /> open
            </span>
          </span>
          <span>{results.length} results</span>
        </div>
      </div>
    </div>
  );
}
