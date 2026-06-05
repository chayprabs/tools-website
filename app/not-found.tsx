import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-5 pt-28 pb-10 text-center sm:px-8">
      <span className="section-label">404</span>
      <h1 className="font-display mt-4 text-[42px] leading-[1.04] text-[var(--color-ink)] sm:text-[56px]">
        This page{" "}
        <span className="font-display-italic text-[var(--color-accent)]">
          wandered off.
        </span>
      </h1>
      <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-[var(--color-muted)]">
        The page you&apos;re looking for doesn&apos;t exist — but there are
        plenty of tools that do.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-[13.5px] font-medium text-white transition-all hover:-translate-y-0.5"
      >
        Browse all tools
      </Link>
    </div>
  );
}
