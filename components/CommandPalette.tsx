"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, CornerDownLeft } from "lucide-react";
import { toolsSorted } from "@/lib/tools";
import { categoryOf, getCategory } from "@/lib/categories";

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
      className="overlay-in fixed inset-0 z-[100] flex items-start justify-center bg-[rgba(26,26,24,0.28)] px-4 pt-[14vh] backdrop-blur-[2px]"
      onMouseDown={close}
      role="dialog"
      aria-modal="true"
      aria-label="Search tools"
    >
      <div
        className="palette-in w-full max-w-lg overflow-hidden rounded-[10px] border border-[var(--color-line)] bg-[var(--color-card)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.32)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 border-b border-[var(--color-line-soft)] px-4">
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
            placeholder="Search tools…"
            aria-label="Search tools"
            className="w-full bg-transparent py-3.5 text-[14px] font-light text-[var(--color-ink)] outline-none placeholder:text-[var(--color-hint)]"
          />
          <button
            onClick={close}
            className="shrink-0 text-[10.5px] font-medium text-[var(--color-hint)] transition-colors hover:text-[var(--color-ink)]"
            aria-label="Close"
          >
            ESC
          </button>
        </div>

        <div ref={listRef} className="no-scrollbar max-h-[50vh] overflow-y-auto p-1.5">
          {results.length === 0 ? (
            <div className="px-3 py-10 text-center text-[13px] font-light text-[var(--color-muted)]">
              No tools match “{query}”.
            </div>
          ) : (
            results.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.slug}
                  data-index={i}
                  onMouseMove={() => setActive(i)}
                  onClick={() => go(item.slug)}
                  className={`flex w-full items-center justify-between gap-3 rounded-[6px] px-3 py-2.5 text-left transition-colors ${
                    isActive ? "bg-[rgba(0,0,0,0.05)]" : ""
                  }`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13.5px] font-medium text-[var(--color-ink)]">
                      {item.name}
                    </span>
                    <span className="block truncate text-[12px] font-light text-[var(--color-muted)]">
                      {item.tagline}
                    </span>
                  </span>
                  <span className="shrink-0 text-[11px] font-light text-[var(--color-hint)]">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[var(--color-line-soft)] px-4 py-2 text-[11px] font-light text-[var(--color-hint)]">
          <span className="flex items-center gap-1">
            <CornerDownLeft className="h-3 w-3" /> to open · ↑↓ to navigate
          </span>
          <span>{results.length} results</span>
        </div>
      </div>
    </div>
  );
}
