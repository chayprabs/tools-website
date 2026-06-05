import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-start px-5 pt-24 pb-10 sm:px-6">
      <p className="mono-label">404</p>
      <h1 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--fg)] sm:text-[44px]">
        This page wandered off.
      </h1>
      <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[var(--muted)]">
        The page you&apos;re looking for doesn&apos;t exist — but there are
        plenty of tools that do.
      </p>
      <Link href="/" className="btn-accent mt-6">
        Browse all tools &rarr;
      </Link>
    </div>
  );
}
