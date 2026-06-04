import { MessageSquareHeart } from "lucide-react";
import { site } from "@/lib/site";

export function FeedbackButton({
  toolName,
  toolSlug,
}: {
  toolName?: string;
  toolSlug?: string;
}) {
  const subject = toolName
    ? `Feedback on ${toolName}`
    : `Feedback on ${site.name}`;
  const body = toolName
    ? `Hi Chaitanya,\n\nI was using ${toolName}${
        toolSlug ? ` (${site.url}/tools/${toolSlug})` : ""
      } and wanted to share some feedback:\n\n`
    : `Hi Chaitanya,\n\nI wanted to share some feedback about ${site.name}:\n\n`;

  const href = `mailto:${site.feedbackEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-[13.5px] font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-10px_rgba(200,75,47,0.7)]"
    >
      <MessageSquareHeart className="h-4 w-4 transition-transform group-hover:scale-110" />
      Tell me what you think
    </a>
  );
}
