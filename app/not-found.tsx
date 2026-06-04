import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-5 pt-24 pb-10 text-center sm:px-6">
      <span className="section-label">404</span>
      <h1 className="mt-3 text-[30px] font-semibold leading-tight tracking-tight text-[var(--color-ink)] sm:text-[38px]">
        This page wandered off.
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
