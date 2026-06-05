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
          ? "border-transparent bg-[var(--accent)] text-white"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent)]/50 hover:text-[var(--accent-2)]"
      }`}
    >
      {tagLabel(tag)}
    </Link>
  );
}
