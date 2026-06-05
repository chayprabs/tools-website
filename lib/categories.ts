import { tools, toolsSorted } from "./tools";
import type { Tool } from "./types";

export type CategorySlug =
  | "data"
  | "documents"
  | "apis"
  | "formats"
  | "media"
  | "logs"
  | "devops"
  | "security";

export type Category = {
  slug: CategorySlug;
  label: string;
  short: string;
  description: string;
};

// Display order is intentional — it shapes the home-page narrative.
export const categories: Category[] = [
  {
    slug: "data",
    label: "Data & Query",
    short: "Data",
    description: "Query, transform, and profile data files with real SQL.",
  },
  {
    slug: "documents",
    label: "Documents & PDF",
    short: "Documents",
    description: "Convert, compare, fill, and process documents.",
  },
  {
    slug: "apis",
    label: "APIs & Schemas",
    short: "APIs",
    description: "Diff specs and catch breaking changes before they ship.",
  },
  {
    slug: "formats",
    label: "Config & Formats",
    short: "Formats",
    description: "Query and convert structured config and markup.",
  },
  {
    slug: "media",
    label: "Media & Design",
    short: "Media",
    description: "Work with images, video, audio, fonts, and SVG.",
  },
  {
    slug: "logs",
    label: "Logs & Text",
    short: "Logs",
    description: "Parse, query, and make sense of log files.",
  },
  {
    slug: "devops",
    label: "DevOps & Infra",
    short: "DevOps",
    description: "Harden manifests, plans, and CI pipelines.",
  },
  {
    slug: "security",
    label: "Security & Files",
    short: "Security",
    description: "Inspect files, archives, and certificates safely.",
  },
];

// Each tool maps to exactly one primary category.
export const toolCategory: Record<string, CategorySlug> = {
  "csv-sql-query-editor": "data",
  "duckdb-file-sql": "data",
  "csv-jsonl-processor": "data",
  "csv-json-transformer": "data",
  "dataset-profiler": "data",
  "sql-formatter-linter": "data",
  "postgres-migration-safety-checker": "data",

  "pdf-acroform-filler": "documents",
  "json-to-excel": "documents",
  "excel-workbook-diff": "documents",
  "typst-online": "documents",
  "latex-math-renderer": "documents",
  "pdf-visual-diff": "documents",
  "docx-redline-compare": "documents",
  "asciidoctor-online": "documents",
  "pptx-to-png": "documents",
  "pandoc-online": "documents",
  "pdf-to-rag-chunks": "documents",
  "epub-validator": "documents",
  "pdf-toolkit": "documents",

  "openapi-breaking-changes": "apis",
  "graphql-breaking-changes": "apis",
  "openapi-diff-checker": "apis",

  "yaml-json-query-editor": "formats",
  "yaml-json-patcher": "formats",
  "html-css-selector-extractor": "formats",
  "cli-to-json": "formats",

  "font-subsetter": "media",
  "video-thumbnail-tool": "media",
  "image-metadata-stripper": "media",
  "og-image-generator": "media",
  "svg-optimizer": "media",
  "audio-loudnorm": "media",
  "subtitle-converter": "media",

  "grok-pattern-playground": "logs",
  "log-sql-analyzer": "logs",
  "log-highlighter": "logs",

  "github-actions-security-linter": "devops",
  "kubernetes-manifest-analyzer": "devops",
  "terraform-plan-visualizer": "devops",

  "magic-byte-detector": "security",
  "nested-archive-inspector": "security",
  "tls-dns-checker": "security",
};

export function categoryOf(slug: string): CategorySlug {
  return toolCategory[slug] ?? "data";
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getToolsInCategory(slug: CategorySlug): Tool[] {
  return toolsSorted.filter((t) => categoryOf(t.slug) === slug);
}

export type CategoryGroup = { category: Category; tools: Tool[] };

export function getCategoryGroups(): CategoryGroup[] {
  return categories
    .map((category) => ({
      category,
      tools: getToolsInCategory(category.slug),
    }))
    .filter((g) => g.tools.length > 0);
}

export function categoryCount(slug: CategorySlug): number {
  return tools.filter((t) => categoryOf(t.slug) === slug).length;
}
