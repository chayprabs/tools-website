import {
  Database,
  FileText,
  Webhook,
  Braces,
  Image as ImageIcon,
  ScrollText,
  Boxes,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { CategorySlug } from "@/lib/categories";
import { categoryOf } from "@/lib/categories";

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  data: Database,
  documents: FileText,
  apis: Webhook,
  formats: Braces,
  media: ImageIcon,
  logs: ScrollText,
  devops: Boxes,
  security: ShieldCheck,
};

export function CategoryIcon({
  category,
  className,
}: {
  category: CategorySlug;
  className?: string;
}) {
  const Icon = categoryIcons[category];
  return <Icon className={className} />;
}

export function ToolIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = categoryIcons[categoryOf(slug)];
  return <Icon className={className} />;
}
