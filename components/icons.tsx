import type { LucideIcon } from "lucide-react";
import {
  Database,
  FileText,
  Webhook,
  Braces,
  ScrollText,
  Server,
  ShieldCheck,
  // tool-specific
  Table2,
  FileSpreadsheet,
  FileJson,
  FileCode2,
  FileSearch,
  GitCompare,
  Regex,
  FileType2,
  Film,
  Music,
  Captions,
  Globe,
  FileArchive,
  BookOpen,
  Boxes,
  Workflow,
  Terminal,
  Fingerprint,
  WrapText,
  Image as ImgIcon,
  Binary,
  Network,
  FileCheck2,
  ListTree,
  SlidersHorizontal,
  Crop,
  Container,
  Type,
} from "lucide-react";
import type { CategorySlug } from "@/lib/categories";

/* Category → icon */
export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  data: Database,
  documents: FileText,
  apis: Webhook,
  formats: Braces,
  media: ImgIcon,
  logs: ScrollText,
  devops: Server,
  security: ShieldCheck,
};

export function CategoryIcon({
  category,
  className,
}: {
  category: CategorySlug;
  className?: string;
}) {
  const Icon = categoryIcons[category] ?? Database;
  return <Icon className={className} aria-hidden />;
}

/* Per-tool → icon (falls back to its category icon) */
const toolIcons: Record<string, LucideIcon> = {
  "csv-sql-query-editor": Table2,
  "duckdb-file-sql": Database,
  "csv-jsonl-processor": ListTree,
  "csv-json-transformer": SlidersHorizontal,
  "dataset-profiler": FileSearch,
  "sql-formatter-linter": FileCode2,
  "postgres-migration-safety-checker": ShieldCheck,

  "pdf-acroform-filler": FileCheck2,
  "json-to-excel": FileSpreadsheet,
  "excel-workbook-diff": GitCompare,
  "typst-online": FileText,
  "latex-math-renderer": Type,
  "pdf-visual-diff": GitCompare,
  "docx-redline-compare": FileText,
  "asciidoctor-online": BookOpen,
  "pptx-to-png": ImgIcon,
  "pandoc-online": FileType2,
  "pdf-to-rag-chunks": ListTree,
  "epub-validator": BookOpen,
  "pdf-toolkit": FileText,

  "openapi-breaking-changes": Webhook,
  "graphql-breaking-changes": Network,
  "openapi-diff-checker": GitCompare,

  "yaml-json-query-editor": Braces,
  "yaml-json-patcher": FileJson,
  "html-css-selector-extractor": FileSearch,
  "cli-to-json": Terminal,

  "font-subsetter": Type,
  "video-thumbnail-tool": Film,
  "image-metadata-stripper": ImgIcon,
  "og-image-generator": Crop,
  "svg-optimizer": ImgIcon,
  "audio-loudnorm": Music,
  "subtitle-converter": Captions,

  "grok-pattern-playground": Regex,
  "log-sql-analyzer": ScrollText,
  "log-highlighter": WrapText,

  "github-actions-security-linter": Workflow,
  "kubernetes-manifest-analyzer": Container,
  "terraform-plan-visualizer": Boxes,

  "magic-byte-detector": Binary,
  "archive-inspector": FileArchive,
  "nested-archive-inspector": FileArchive,
  "tls-dns-checker": Globe,
};

const slugToCategory: Record<string, CategorySlug> = {};

export function ToolIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = toolIcons[slug] ?? Fingerprint;
  return <Icon className={className} aria-hidden />;
}

// kept exported for potential reuse; intentionally side-effect free
export { slugToCategory };
