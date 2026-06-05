import { site } from "@/lib/site";

export function FeedbackButton({
  toolName,
  toolSlug,
  variant = "ghost",
}: {
  toolName?: string;
  toolSlug?: string;
  variant?: "ghost" | "accent";
}) {
  const subject = toolName
    ? `Feedback on ${toolName}`
    : `Feedback on ${site.name}`;
  const body = toolName
    ? `Hi Chaitanya,\n\nI was using ${toolName}${
        toolSlug ? ` (${site.url}/tools/${toolSlug})` : ""
      } and wanted to share some feedback:\n\n`
    : `Hi Chaitanya,\n\nI wanted to share some feedback:\n\n`;

  const href = `mailto:${site.feedbackEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={href} className={variant === "accent" ? "btn-accent" : "btn-ghost"}>
      Send feedback &rarr;
    </a>
  );
}
