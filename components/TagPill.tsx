import Link from "next/link";
import { tagLabel } from "@/lib/tools";

export function TagPill({
  tag,
  active = false,
}: {
  tag: string;
  active?: boolean;
}) {
  return (
    <Link
      href={`/tags/${tag}`}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11.5px] font-medium tracking-wide transition-colors ${
        active
          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
          : "border-[var(--color-line)] bg-[var(--color-background)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      }`}
    >
      {tagLabel(tag)}
    </Link>
  );
}
