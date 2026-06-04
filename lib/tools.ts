import type { Tool } from "./types";
export { repoUrl } from "./types";
export type { Tool } from "./types";

export const tools: Tool[] = [
  {
    slug: "csv-sql-query-editor",
    name: "CSV SQL Query Editor",
    repo: "csv-tsv-sql-query-editor-playground",
    tagline: "Run SQL SELECT queries on CSV and TSV files instantly in your browser.",
    description:
      "Upload any CSV or TSV file and query it with real SQL — no database setup, no uploads to a server. Write SELECT statements, JOIN multiple files, filter, group, and aggregate using an in-browser SQLite engine with automatic type inference. A fast, private alternative to datasette, q, and textql.",
    tags: ["csv", "sql"],
    features: [
      "Query CSV and TSV files with full SQL using an in-browser SQLite engine",
      "JOIN multiple uploaded files together in a single query",
      "Automatic column type inference for numbers, dates, and text",
      "Filter, GROUP BY, aggregate, and sort with standard SQL",
      "Download query results as CSV",
      "Everything runs locally in the browser — your data never leaves your machine",
    ],
    keywords: ["csv sql", "query csv", "sql on csv", "tsv sql", "csv query tool", "datasette alternative"],
  },
  {
    slug: "yaml-json-query-editor",
    name: "YAML & JSON Query Editor",
    repo: "yaml-json-xml-toml-ini-query-playground",
    tagline: "Query and convert YAML, JSON, XML, TOML, and INI with jq-style expressions.",
    description:
      "A browser-based query editor for structured config files. Run jq-style and yq expressions against YAML, JSON, XML, CSV, TOML, and INI using the yq and dasel engines, then convert between formats instantly. Perfect for exploring config files and reshaping data without leaving the browser.",
    tags: ["yaml", "json"],
    features: [
      "Query YAML, JSON, XML, TOML, and INI with jq-style expressions",
      "Powered by the yq and dasel engines",
      "Convert between formats with one click",
      "Live editor with instant results",
      "No install and no account required",
    ],
    keywords: ["yaml query", "json query", "yq online", "dasel", "convert yaml to json", "toml query"],
  },
  {
    slug: "pdf-acroform-filler",
    name: "PDF Form Filler",
    repo: "acroform-filler",
    tagline: "Fill, flatten, and validate PDF AcroForms from JSON, FDF, or XFDF.",
    description:
      "Fill out PDF AcroForms programmatically from JSON, FDF, or XFDF, then flatten and validate the result with full appearance regeneration. Inspect every form field, set values in bulk, and produce a finished, non-editable PDF — all in the browser.",
    tags: ["pdf", "forms"],
    features: [
      "Fill PDF AcroForms from JSON, FDF, or XFDF input",
      "Flatten forms into non-editable PDFs",
      "Appearance regeneration for correctly rendered field values",
      "Inspect and validate every form field",
      "Bulk-set field values for repeatable workflows",
    ],
    keywords: ["pdf form filler", "acroform", "fill pdf form json", "flatten pdf", "xfdf", "fdf"],
  },
  {
    slug: "duckdb-file-sql",
    name: "DuckDB File SQL",
    repo: "duckdb-file-sql",
    tagline: "Run DuckDB SQL on CSV, JSON, Parquet, and SQLite files in the browser.",
    description:
      "Bring the power of DuckDB to the browser. Run analytical SQL directly on CSV, JSON, JSONL, Parquet, and SQLite files — including joins and EXPLAIN plans — with bounded, downloadable result sets. Ideal for quick data analysis without spinning up a warehouse.",
    tags: ["duckdb", "sql"],
    features: [
      "Run DuckDB SQL on CSV, JSON, JSONL, Parquet, and SQLite files",
      "Joins across multiple files",
      "Inspect EXPLAIN query plans",
      "Bounded result downloads to keep things fast",
      "Fully in-browser analytical engine",
    ],
    keywords: ["duckdb online", "duckdb wasm", "parquet sql", "query parquet", "sql on parquet"],
  },
  {
    slug: "json-to-excel",
    name: "JSON to Excel Generator",
    repo: "xlsx-from-json",
    tagline: "Generate styled Excel XLSX spreadsheets from declarative JSON.",
    description:
      "Turn declarative JSON into polished Excel workbooks. Define sheets, charts, formulas, conditional formatting, merged cells, tables, and embedded images, then export a ready-to-share XLSX — entirely client-side.",
    tags: ["excel", "json"],
    features: [
      "Generate XLSX workbooks from a single JSON definition",
      "Charts, formulas, and conditional formatting",
      "Merged cells, tables, and embedded images",
      "Cell-level styling control",
      "Client-side export with no server round trip",
    ],
    keywords: ["json to excel", "generate xlsx", "json to xlsx", "create excel from json", "xlsx generator"],
  },
  {
    slug: "yaml-json-patcher",
    name: "YAML & JSON Patcher",
    repo: "yaml-json-patcher",
    tagline: "Query and patch YAML, JSON, TOML, and XML configs while preserving comments.",
    description:
      "Edit structured config files surgically. Apply jq, JSONPath, JMESPath, and JSON Patch operations to YAML, JSON, TOML, and XML — while preserving comments, anchors, and key order. Make precise, reviewable changes without reformatting the whole file.",
    tags: ["yaml", "json"],
    features: [
      "Patch configs with jq, JSONPath, JMESPath, and JSON Patch",
      "Preserves comments, anchors, and key order",
      "Supports YAML, JSON, TOML, and XML",
      "Surgical edits without reformatting the document",
      "Runs entirely in the browser",
    ],
    keywords: ["json patch", "yaml patch", "jsonpath", "jmespath", "edit yaml online", "json patch online"],
  },
  {
    slug: "grok-pattern-playground",
    name: "Grok Pattern Playground",
    repo: "grok-pattern-playground",
    tagline: "Write, test, and benchmark grok and Logstash patterns with field inference.",
    description:
      "Build and debug grok patterns for log parsing. Test patterns against sample lines, infer extracted fields, and benchmark performance with ReDoS warnings — then export configs for Vector and Fluent Bit. The fastest way to nail your log pipeline regexes.",
    tags: ["logs", "regex"],
    features: [
      "Write and test grok and Logstash patterns live",
      "Automatic field inference from matches",
      "Performance benchmarking with ReDoS warnings",
      "Export configs for Vector and Fluent Bit",
      "Instant feedback on every change",
    ],
    keywords: ["grok pattern", "grok debugger", "logstash grok", "grok playground", "log parsing"],
  },
  {
    slug: "excel-workbook-diff",
    name: "Excel Workbook Diff",
    repo: "xlsx-workbook-diff",
    tagline: "Compare Excel workbooks at cell, formula, style, and structure level.",
    description:
      "See exactly what changed between two Excel files. Compare XLSX workbooks at the cell, formula, style, chart, named-range, and sheet-structure level with configurable tolerance — so spreadsheet diffs are finally readable and reviewable.",
    tags: ["excel", "diff"],
    features: [
      "Cell-by-cell comparison of two XLSX workbooks",
      "Formula, style, chart, and named-range diffs",
      "Sheet-structure change detection",
      "Configurable numeric tolerance",
      "Clear, human-readable diff output",
    ],
    keywords: ["excel diff", "compare excel files", "xlsx diff", "spreadsheet diff", "compare workbooks"],
  },
  {
    slug: "html-css-selector-extractor",
    name: "HTML CSS Selector Extractor",
    repo: "html-css-selector-extractor-scraper-playground",
    tagline: "Query and scrape HTML with CSS selectors, extract text and attributes.",
    description:
      "Test CSS selectors against any HTML and extract exactly what you need. Query elements, pull attributes and text content, pretty-print output, and strip unwanted nodes — a browser-based alternative to htmlq, pup, xq, and BeautifulSoup with zero install.",
    tags: ["html", "scraping"],
    features: [
      "Test CSS selectors against pasted HTML",
      "Extract attributes and text content",
      "Pretty-print and clean up output",
      "Strip elements you do not want",
      "Alternative to htmlq, pup, xq, and BeautifulSoup",
    ],
    keywords: ["css selector tester", "html extractor", "scrape html", "htmlq online", "css selector scraper"],
  },
  {
    slug: "openapi-breaking-changes",
    name: "OpenAPI & JSON Schema Diff",
    repo: "openapi-breaking-changes",
    tagline: "Compare OpenAPI and JSON Schema specs to find breaking changes per operation.",
    description:
      "Catch API contract regressions before they ship. Diff two OpenAPI or JSON Schema specs, surface breaking changes per operation, generate migration patches, and preview the downstream SDK impact — all in the browser.",
    tags: ["openapi", "api"],
    features: [
      "Diff two OpenAPI or JSON Schema specs",
      "Breaking-change detection per operation",
      "Migration patch generation",
      "SDK impact preview",
      "Runs fully client-side",
    ],
    keywords: ["openapi diff", "openapi breaking changes", "json schema diff", "api contract diff", "swagger diff"],
  },
  {
    slug: "font-subsetter",
    name: "Font Subsetter & Converter",
    repo: "subset-font-online",
    tagline: "Subset, convert, and QA TTF, OTF, WOFF, and WOFF2 fonts in the browser.",
    description:
      "Shrink and convert web fonts without the toolchain. Subset TTF, OTF, WOFF, and WOFF2 fonts to just the glyphs you need, instance variable fonts, check glyph coverage, and export optimized WOFF2 — all client-side for faster, lighter web typography.",
    tags: ["fonts", "woff"],
    features: [
      "Subset fonts to only the glyphs you use",
      "Convert between TTF, OTF, WOFF, and WOFF2",
      "Variable-font instancing",
      "Glyph coverage QA",
      "Optimized WOFF2 output in the browser",
    ],
    keywords: ["font subset", "woff2 converter", "subset font online", "ttf to woff2", "variable font instancing"],
  },
  {
    slug: "magic-byte-detector",
    name: "File Type Detector",
    repo: "magic-byte-detector",
    tagline: "Detect true file types from magic bytes and flag MIME mismatches.",
    description:
      "Find out what a file really is. Detect file types from magic bytes, catch MIME mismatches and ambiguity, sniff container formats, and flag risks like Office macros and polyglot files — a fast forensic check that runs entirely in the browser.",
    tags: ["files", "security"],
    features: [
      "Detect file type from magic bytes",
      "Flag MIME type mismatches and ambiguity",
      "Container format sniffing",
      "Risk flags for Office macros and polyglots",
      "Private, in-browser analysis",
    ],
    keywords: ["magic bytes", "file type detector", "file signature", "mime detection", "file magic number"],
  },
  {
    slug: "typst-online",
    name: "Typst Online Compiler",
    repo: "typst-online",
    tagline: "Compile Typst documents to PDF, SVG, PNG, and HTML in a live editor.",
    description:
      "A full Typst playground in the browser. Write Typst and compile to PDF, SVG, PNG, or HTML with pinned compiler versions, the package universe, custom fonts, and a live editor — perfect for typesetting documents without a local install.",
    tags: ["typst", "pdf"],
    features: [
      "Compile Typst to PDF, SVG, PNG, and HTML",
      "Pinned compiler versions for reproducibility",
      "Access to the Typst package universe",
      "Custom font support",
      "Live editor playground",
    ],
    keywords: ["typst online", "typst compiler", "typst playground", "typst to pdf", "typst editor"],
  },
  {
    slug: "csv-jsonl-processor",
    name: "CSV & JSONL Processor",
    repo: "csv-jsonl-miller",
    tagline: "Stream-process CSV, TSV, NDJSON, and JSONL with Miller-style verb chains.",
    description:
      "Wrangle tabular and line-delimited data at speed. Stream-process CSV, TSV, NDJSON, and JSONL with Miller-style verb chains — filter, join, pivot, and reshape — with automatic dialect sniffing, all in the browser.",
    tags: ["csv", "jsonl"],
    features: [
      "Miller-style verb chains for data processing",
      "Supports CSV, TSV, NDJSON, and JSONL",
      "Joins, pivots, and reshaping",
      "Automatic dialect sniffing",
      "Streaming, in-browser processing",
    ],
    keywords: ["miller online", "jsonl processor", "ndjson tool", "csv pivot", "mlr online"],
  },
  {
    slug: "video-thumbnail-tool",
    name: "Video Thumbnail & FFmpeg Tool",
    repo: "video-thumbnail-tool",
    tagline: "Trim, concat, and remux video and generate thumbnails with FFmpeg.",
    description:
      "Do common video chores right in the browser. Trim, concatenate, and remux video, then generate thumbnails, contact sheets, sprite sheets, and shot-boundary detections — powered by FFmpeg compiled to WebAssembly.",
    tags: ["video", "ffmpeg"],
    features: [
      "Trim, concatenate, and remux video files",
      "Generate thumbnails and contact sheets",
      "Build sprite sheets for scrubbing previews",
      "Shot boundary detection",
      "Powered by FFmpeg in the browser",
    ],
    keywords: ["video thumbnail generator", "ffmpeg online", "sprite sheet video", "contact sheet", "remux video"],
  },
  {
    slug: "image-metadata-stripper",
    name: "Image Metadata Stripper",
    repo: "image-metadata-stripper",
    tagline: "Remove EXIF, GPS, XMP, and IPTC metadata from images and documents.",
    description:
      "Protect your privacy before you share. Strip EXIF, GPS, XMP, IPTC, and MakerNotes metadata from JPEG, PNG, HEIC, PDF, MP3, and MP4 files with one-click privacy presets and prove-clean reports — all processed locally in your browser.",
    tags: ["image", "privacy"],
    features: [
      "Remove EXIF, GPS, XMP, IPTC, and MakerNotes metadata",
      "Supports JPEG, PNG, HEIC, PDF, MP3, and MP4",
      "One-click privacy presets",
      "Prove-clean verification reports",
      "Local processing — files never leave your device",
    ],
    keywords: ["remove exif", "strip metadata", "exif remover", "image privacy", "remove gps from photo"],
  },
  {
    slug: "latex-math-renderer",
    name: "LaTeX Math Renderer",
    repo: "latex-math-renderer",
    tagline: "Render LaTeX math to SVG, PNG, PDF, and accessible MathML.",
    description:
      "Turn LaTeX math into shareable, accessible output. Render equations to SVG, PNG, PDF, and MathML using KaTeX or MathJax, with control over fonts, theme, and accessibility — ideal for docs, slides, and the web.",
    tags: ["latex", "math"],
    features: [
      "Render LaTeX math to SVG, PNG, PDF, and MathML",
      "Choose between the KaTeX and MathJax engines",
      "Font and theme controls",
      "Accessible MathML output",
      "Instant in-browser rendering",
    ],
    keywords: ["latex to svg", "latex math renderer", "katex online", "mathjax", "latex to png", "equation to image"],
  },
  {
    slug: "tls-dns-checker",
    name: "TLS & DNS Checker",
    repo: "tls-dns-checker",
    tagline: "Check DNS, RDAP, TLS, certificate chains, and ASN with DNSSEC validation.",
    description:
      "A one-stop network and certificate inspector. Check DNS records, RDAP data, TLS handshakes, certificate chains, ASN info, and socket banners — with DNSSEC validation, Certificate Transparency log lookups, and expiry alerts.",
    tags: ["dns", "tls"],
    features: [
      "Inspect DNS, RDAP, and ASN information",
      "Full TLS and certificate-chain analysis",
      "DNSSEC validation",
      "Certificate Transparency log lookups",
      "Certificate expiry alerts",
    ],
    keywords: ["tls checker", "dns lookup", "ssl certificate checker", "dnssec", "certificate chain checker"],
  },
  {
    slug: "og-image-generator",
    name: "Open Graph Image Generator",
    repo: "og-image-online",
    tagline: "Generate Open Graph social cards and syntax-highlighted code screenshots.",
    description:
      "Make link previews and code shots look great. Generate Open Graph social cards and beautiful, syntax-highlighted code screenshots with custom themes, fonts, line highlights, and reusable brand templates — exported straight from the browser.",
    tags: ["og", "image"],
    features: [
      "Generate Open Graph social share cards",
      "Syntax-highlighted code screenshots",
      "Custom themes, fonts, and line highlights",
      "Reusable brand templates",
      "One-click image export",
    ],
    keywords: ["open graph image", "og image generator", "social card generator", "code screenshot", "carbon alternative"],
  },
  {
    slug: "sql-formatter-linter",
    name: "SQL Formatter & Linter",
    repo: "sql-lint-format-online",
    tagline: "Lint, format, and rewrite SQL across Postgres, MySQL, Snowflake, and BigQuery.",
    description:
      "Clean up SQL and catch risky queries. Lint, format, and safely rewrite SQL across PostgreSQL, MySQL, Snowflake, and BigQuery dialects, with warnings for dangerous patterns and suggested safe rewrites — all in the browser.",
    tags: ["sql", "format"],
    features: [
      "Format SQL across Postgres, MySQL, Snowflake, and BigQuery",
      "Lint for risky and dangerous query patterns",
      "Suggested safe rewrites",
      "Dialect-aware parsing",
      "Instant formatting in the browser",
    ],
    keywords: ["sql formatter", "sql linter", "format sql online", "sql beautifier", "sqlfluff online"],
  },
  {
    slug: "pdf-visual-diff",
    name: "PDF Visual Diff",
    repo: "pdf-visual-diff-online",
    tagline: "Compare PDFs visually and structurally with per-page masks and summaries.",
    description:
      "Spot every change between two PDFs. Compare documents visually and structurally with per-page masks, text and object diffs, and signature checks — then read a clear, human-readable summary of what actually changed.",
    tags: ["pdf", "diff"],
    features: [
      "Visual, pixel-level PDF comparison",
      "Per-page masking to ignore expected regions",
      "Text and object-level diffs",
      "Digital signature checks",
      "Human-readable change summaries",
    ],
    keywords: ["pdf diff", "compare pdf", "pdf visual diff", "pdf comparison tool", "diff two pdfs"],
  },
  {
    slug: "docx-redline-compare",
    name: "DOCX Redline & Compare",
    repo: "docx-redline-online",
    tagline: "Compare DOCX versions, accept or reject tracked changes, extract comments.",
    description:
      "Review Word documents without Word. Compare DOCX versions, accept or reject tracked changes, extract comments, and convert the result to clean HTML or Markdown — all processed privately in the browser.",
    tags: ["docx", "diff"],
    features: [
      "Compare two DOCX versions with a redline view",
      "Accept or reject tracked changes",
      "Extract document comments",
      "Convert Word to clean HTML or Markdown",
      "Private, in-browser processing",
    ],
    keywords: ["docx compare", "word diff", "compare word documents", "docx to markdown", "track changes online"],
  },
  {
    slug: "log-sql-analyzer",
    name: "Log File SQL Analyzer",
    repo: "log-file-sql-query-analyzer-playground",
    tagline: "Query any log file with SQL — nginx, Apache, syslog, and JSON logs.",
    description:
      "Analyze logs with the query language you already know. Upload nginx, Apache, syslog, or JSON logs and run SQL against them instantly — no Splunk, no ELK, no account. Filter, aggregate, and find patterns in seconds, right in the browser.",
    tags: ["logs", "sql"],
    features: [
      "Run SQL queries against raw log files",
      "Built-in parsing for nginx, Apache, syslog, and JSON logs",
      "Filter and aggregate to surface patterns",
      "No Splunk or ELK stack required",
      "Upload and SELECT instantly in the browser",
    ],
    keywords: ["log sql", "query logs with sql", "log analyzer", "nginx log analysis", "splunk alternative"],
  },
  {
    slug: "asciidoctor-online",
    name: "AsciiDoc Online Converter",
    repo: "asciidoctor-online",
    tagline: "Compile AsciiDoc to HTML, PDF, and EPUB with diagrams and themes.",
    description:
      "Publish AsciiDoc anywhere. Compile AsciiDoc to HTML, PDF, and EPUB with Asciidoctor, including themes, includes, and embedded PlantUML, Mermaid, and Graphviz diagrams — straight from the browser.",
    tags: ["asciidoc", "convert"],
    features: [
      "Compile AsciiDoc to HTML, PDF, and EPUB",
      "Theme and include support",
      "Embedded PlantUML, Mermaid, and Graphviz diagrams",
      "Powered by Asciidoctor",
      "No local toolchain needed",
    ],
    keywords: ["asciidoc online", "asciidoctor", "asciidoc to pdf", "asciidoc to html", "adoc converter"],
  },
  {
    slug: "svg-optimizer",
    name: "SVG Optimizer & Sanitizer",
    repo: "svgo-online",
    tagline: "Sanitize, optimize, rasterize, and diff SVGs and strip XSS risks.",
    description:
      "Make SVGs smaller and safer. Sanitize SVGs to strip XSS, optimize and diff them, resolve fonts, build sprites, and rasterize to PNG, WebP, and AVIF at exact DPI — a complete SVG workbench in the browser.",
    tags: ["svg", "optimize"],
    features: [
      "Optimize and minify SVG files",
      "Sanitize to strip XSS and unsafe content",
      "Rasterize to PNG, WebP, and AVIF at exact DPI",
      "Build SVG sprites and resolve fonts",
      "Diff two SVGs to see what changed",
    ],
    keywords: ["svg optimizer", "svgo online", "optimize svg", "svg to png", "sanitize svg"],
  },
  {
    slug: "pptx-to-png",
    name: "PPTX to PNG Converter",
    repo: "pptx-to-png-online",
    tagline: "Render PowerPoint slides to PNG, JPEG, SVG, and PDF and extract notes.",
    description:
      "Convert presentations without PowerPoint. Render PPTX slides to PNG, JPEG, SVG, and PDF, extract speaker notes, pull embedded media and fonts, and swap assets — all in the browser.",
    tags: ["pptx", "convert"],
    features: [
      "Render PPTX slides to PNG, JPEG, SVG, and PDF",
      "Extract speaker notes",
      "Pull embedded media and fonts",
      "Swap assets inside the deck",
      "In-browser conversion",
    ],
    keywords: ["pptx to png", "powerpoint to image", "pptx to pdf", "convert powerpoint", "slides to png"],
  },
  {
    slug: "pandoc-online",
    name: "Pandoc Document Converter",
    repo: "pandoc-online",
    tagline: "Convert Markdown, DOCX, HTML, LaTeX, EPUB, and PDF with Pandoc.",
    description:
      "The universal document converter, in your browser. Convert between Markdown, DOCX, HTML, LaTeX, EPUB, and PDF using Pandoc — with template, citation, filter, and math support for professional output.",
    tags: ["pandoc", "convert"],
    features: [
      "Convert between Markdown, DOCX, HTML, LaTeX, EPUB, and PDF",
      "Template support for custom output",
      "Citations and bibliography handling",
      "Pandoc filters and math support",
      "Powered by Pandoc in the browser",
    ],
    keywords: ["pandoc online", "markdown to docx", "convert markdown to pdf", "docx to markdown", "latex to docx"],
  },
  {
    slug: "audio-loudnorm",
    name: "Audio Loudness Normalizer",
    repo: "audio-loudnorm-online",
    tagline: "Run EBU R128 loudness normalization and generate waveforms.",
    description:
      "Get broadcast-ready audio levels. Extract audio, run EBU R128 loudness normalization, generate waveform peaks, and compute Chromaprint fingerprints — ideal prep for podcasts and video, all in the browser.",
    tags: ["audio", "ffmpeg"],
    features: [
      "EBU R128 loudness normalization",
      "Audio extraction from media files",
      "Waveform peak generation",
      "Chromaprint audio fingerprinting",
      "Browser-based with no upload",
    ],
    keywords: ["loudness normalization", "ebu r128", "audio normalize", "loudnorm", "waveform generator"],
  },
  {
    slug: "pdf-to-rag-chunks",
    name: "PDF to RAG Chunks",
    repo: "pdf-to-rag-chunks",
    tagline: "Parse PDFs into RAG-ready Markdown and JSONL chunks with reading order.",
    description:
      "Prepare PDFs for retrieval-augmented generation. Parse documents into clean, RAG-ready Markdown and JSONL chunks that preserve reading order, headings, tables, code blocks, and captions — with OCR for scanned pages.",
    tags: ["pdf", "rag"],
    features: [
      "Parse PDFs into Markdown and JSONL chunks",
      "Preserves reading order and document structure",
      "Keeps headings, tables, code blocks, and captions",
      "OCR for scanned documents",
      "Output ready for RAG pipelines",
    ],
    keywords: ["pdf to rag", "pdf chunking", "pdf to markdown", "rag preprocessing", "pdf to jsonl", "document parsing"],
  },
  {
    slug: "graphql-breaking-changes",
    name: "GraphQL Schema Diff",
    repo: "graphql-breaking-changes",
    tagline: "Diff two GraphQL schemas to find breaking and dangerous changes.",
    description:
      "Keep GraphQL APIs backward compatible. Diff two schemas to surface breaking and dangerous changes, measure operation coverage, and run federation composition checks before you deploy.",
    tags: ["graphql", "api"],
    features: [
      "Diff two GraphQL schemas",
      "Detect breaking and dangerous changes",
      "Operation coverage analysis",
      "Federation composition checks",
      "Runs in the browser",
    ],
    keywords: ["graphql diff", "graphql breaking changes", "schema diff", "graphql schema comparison", "graphql inspector"],
  },
  {
    slug: "subtitle-converter",
    name: "Subtitle Converter",
    repo: "subtitle-converter-online",
    tagline: "Convert, normalize, mux, and burn SRT, VTT, ASS, and TTML subtitles.",
    description:
      "Fix and convert subtitles in one place. Convert, normalize, mux, and burn SRT, VTT, ASS, and TTML subtitles into MP4, MKV, and WebM — with timing and encoding fixes that just work, all in the browser.",
    tags: ["subtitles", "video"],
    features: [
      "Convert between SRT, VTT, ASS, and TTML",
      "Normalize timing and fix encoding issues",
      "Mux subtitles into MP4, MKV, and WebM",
      "Burn-in subtitles for hardcoded captions",
      "In-browser processing",
    ],
    keywords: ["subtitle converter", "srt to vtt", "convert subtitles", "ass to srt", "burn subtitles"],
  },
  {
    slug: "csv-json-transformer",
    name: "CSV JSON Data Transformer",
    repo: "csv-json-tsv-data-transform-playground",
    tagline: "Filter, sort, pivot, and reshape CSV, JSON, TSV, and NDJSON data.",
    description:
      "Clean and reshape data without code. Filter, sort, pivot, rename, and reorder columns, then convert between CSV, JSON, TSV, and NDJSON — a browser-based alternative to pandas, awk, and sed for quick data wrangling.",
    tags: ["csv", "json"],
    features: [
      "Filter, sort, and pivot tabular data",
      "Rename and reorder columns",
      "Convert between CSV, JSON, TSV, and NDJSON",
      "Clean and reshape messy datasets",
      "Alternative to pandas, awk, and sed",
    ],
    keywords: ["csv to json", "data transformer", "convert csv json", "reshape data", "csv cleaner", "json to csv"],
  },
  {
    slug: "github-actions-security-linter",
    name: "GitHub Actions Security Linter",
    repo: "github-actions-workflow-security-linter",
    tagline: "Lint and security-scan GitHub Actions YAML for unpinned actions and injection.",
    description:
      "Harden your CI before attackers do. Lint and security-scan GitHub Actions workflows for unpinned actions, over-broad token permissions, script-injection risks, and matrix errors — with clear, actionable findings.",
    tags: ["ci", "security"],
    features: [
      "Detect unpinned actions and supply-chain risks",
      "Flag over-broad token permissions",
      "Catch script-injection vulnerabilities",
      "Validate workflow matrix configuration",
      "Clear, actionable security findings",
    ],
    keywords: ["github actions security", "workflow linter", "actions yaml lint", "ci security scan", "pin github actions"],
  },
  {
    slug: "log-highlighter",
    name: "Log Syntax Highlighter",
    repo: "log-highlighter-colorizer-syntax-viewer-online-playground",
    tagline: "Paste any log file and get instant syntax highlighting and structure.",
    description:
      "Make raw logs readable instantly. Paste any log file and get automatic syntax highlighting for timestamps, IPs, UUIDs, URLs, HTTP methods, log levels, and key-value pairs — zero install, runs in the browser.",
    tags: ["logs", "viewer"],
    features: [
      "Automatic syntax highlighting for any log format",
      "Highlights timestamps, IPs, UUIDs, and URLs",
      "Color-codes HTTP methods and log levels",
      "Detects key-value pairs",
      "Instant, in-browser viewing",
    ],
    keywords: ["log highlighter", "log viewer", "colorize logs", "log syntax highlighting", "log formatter online"],
  },
  {
    slug: "archive-inspector",
    name: "Nested Archive Inspector",
    repo: "nested-archive-inspector",
    tagline: "Open and safely extract ZIP, 7z, RAR, TAR, ISO, DMG, and nested archives.",
    description:
      "Peek inside archives without the risk. Open and safely extract ZIP, 7z, RAR, TAR, ISO, DMG, and deeply nested archives — with built-in protection against zip bombs, path traversal, and malicious symlinks.",
    tags: ["archives", "security"],
    features: [
      "Open ZIP, 7z, RAR, TAR, ISO, DMG, and nested archives",
      "Zip-bomb protection",
      "Path-traversal protection",
      "Symlink-attack protection",
      "Safe, in-browser extraction",
    ],
    keywords: ["archive inspector", "extract zip online", "open 7z", "unzip online", "inspect tar", "zip bomb protection"],
  },
  {
    slug: "epub-validator",
    name: "EPUB Validator & Repair",
    repo: "epub-validate-repair",
    tagline: "Validate, repair, and convert EPUB, MOBI, and AZW3 ebooks.",
    description:
      "Fix ebooks that won't open. Validate, repair, and convert EPUB, MOBI, and AZW3 files — correcting manifest, spine, TOC, and metadata errors with epubcheck and Calibre-style processing, all in the browser.",
    tags: ["epub", "ebooks"],
    features: [
      "Validate EPUB files with epubcheck-style checks",
      "Repair manifest, spine, TOC, and metadata errors",
      "Convert between EPUB, MOBI, and AZW3",
      "Detailed validation reports",
      "In-browser processing",
    ],
    keywords: ["epub validator", "epubcheck online", "repair epub", "epub to mobi", "fix epub", "azw3 converter"],
  },
  {
    slug: "dataset-profiler",
    name: "Dataset Profiler",
    repo: "dataset-profile-tool",
    tagline: "Profile CSV, Parquet, JSONL, Avro, and SQLite datasets and infer schema.",
    description:
      "Understand any dataset in seconds. Profile CSV, Parquet, JSONL, Avro, and SQLite data to infer JSON Schema, detect drift and anomalies, and measure nulls and cardinality — a fast data-quality check in the browser.",
    tags: ["data", "profiling"],
    features: [
      "Profile CSV, Parquet, JSONL, Avro, and SQLite datasets",
      "Infer JSON Schema automatically",
      "Detect drift and anomalies",
      "Measure null rates and cardinality",
      "Quick data-quality reporting",
    ],
    keywords: ["data profiling", "dataset profiler", "infer json schema", "data quality", "profile parquet", "column statistics"],
  },
  {
    slug: "kubernetes-manifest-analyzer",
    name: "Kubernetes Manifest Analyzer",
    repo: "kubernetes-manifest-readiness-analyzer",
    tagline: "Get a production-readiness score for Kubernetes YAML manifests.",
    description:
      "Ship Kubernetes workloads with confidence. Score your manifests for production readiness — checking liveness and readiness probes, resource limits, security contexts, and rollout strategy — with clear guidance on what to fix.",
    tags: ["kubernetes", "devops"],
    features: [
      "Production-readiness score for Kubernetes YAML",
      "Checks liveness and readiness probes",
      "Validates resource requests and limits",
      "Reviews security contexts",
      "Assesses rollout and update strategy",
    ],
    keywords: ["kubernetes linter", "k8s manifest check", "kubernetes best practices", "k8s readiness", "kube-score alternative"],
  },
  {
    slug: "terraform-plan-visualizer",
    name: "Terraform Plan Visualizer",
    repo: "terraform-plan-visualizer-blast-radius",
    tagline: "Visualize terraform plan JSON with dependency graphs and blast-radius warnings.",
    description:
      "See the real impact of a Terraform change. Visualize terraform plan JSON as a dependency graph, surface blast-radius warnings, and summarize destroy and replace risk — so you can review infrastructure changes safely.",
    tags: ["terraform", "devops"],
    features: [
      "Visualize terraform plan JSON as a graph",
      "Dependency graph between resources",
      "Blast-radius warnings for risky changes",
      "Destroy and replace risk summaries",
      "Browser-based, no credentials needed",
    ],
    keywords: ["terraform plan visualizer", "terraform graph", "blast radius", "terraform plan json", "infrastructure diff"],
  },
  {
    slug: "openapi-diff-checker",
    name: "OpenAPI Breaking Change Checker",
    repo: "openapi-breaking-change-diff-checker",
    tagline: "Detect breaking changes between OpenAPI 3.0 and 3.1 specs.",
    description:
      "Validate API compatibility across versions. Detect breaking changes between OpenAPI 3.0 and 3.1 specs, generate a contract diff and risk report, and produce a PR-ready Markdown summary you can paste straight into review.",
    tags: ["openapi", "api"],
    features: [
      "Detect breaking changes across OpenAPI 3.0 and 3.1",
      "Full contract diff between specs",
      "Risk-categorized change report",
      "PR-ready Markdown summary",
      "Runs entirely in the browser",
    ],
    keywords: ["openapi breaking change", "openapi 3.1 diff", "api diff checker", "openapi compatibility", "swagger breaking changes"],
  },
  {
    slug: "pdf-toolkit",
    name: "PDF Toolkit",
    repo: "pdf-merge-split-compress-rotate-watermark-browser-playground",
    tagline: "Merge, split, compress, rotate, and watermark PDFs entirely in your browser.",
    description:
      "Every common PDF edit in one place. Merge, split, compress, rotate, watermark, and edit PDFs entirely in your browser — no uploads, no accounts, no tracking. Powered by pdfcpu compiled to WebAssembly.",
    tags: ["pdf", "edit"],
    features: [
      "Merge and split PDF documents",
      "Compress PDFs to reduce file size",
      "Rotate pages and apply watermarks",
      "No uploads, accounts, or tracking",
      "Powered by pdfcpu and WebAssembly",
    ],
    keywords: ["merge pdf", "split pdf", "compress pdf", "pdf watermark", "rotate pdf", "pdf editor online"],
  },
  {
    slug: "cli-to-json",
    name: "CLI Output to JSON",
    repo: "cli-command-output-to-json-converter-online",
    tagline: "Paste raw CLI output and get clean, structured JSON for 100+ commands.",
    description:
      "Make shell output scriptable. Paste raw output from 100+ commands — ls, ps, netstat, dig, ping, ifconfig, df, env, arp — and get clean, structured JSON for DevOps automation and scripting, right in the browser.",
    tags: ["cli", "json"],
    features: [
      "Parse output from 100+ common CLI commands",
      "Convert ls, ps, netstat, dig, df, and more to JSON",
      "Structured output for automation",
      "Great for DevOps and shell scripting",
      "Runs in the browser",
    ],
    keywords: ["cli to json", "command output to json", "jc online", "parse command output", "shell to json"],
  },
  {
    slug: "postgres-migration-safety-checker",
    name: "Postgres Migration Safety Checker",
    repo: "postgres-migration-safety-checker",
    tagline: "Preflight unsafe PostgreSQL migrations for locks and blocking DDL.",
    description:
      "Avoid downtime from a risky migration. Preflight PostgreSQL migrations to flag table locks, full rewrites, and blocking DDL, with zero-downtime risk analysis and safer alternatives — before you run them in production.",
    tags: ["postgres", "sql"],
    features: [
      "Detect table locks and full table rewrites",
      "Flag blocking DDL statements",
      "Zero-downtime risk analysis",
      "Suggested safer migration patterns",
      "Browser-based preflight check",
    ],
    keywords: ["postgres migration safety", "safe migrations", "blocking ddl", "zero downtime migration", "postgres lock check"],
  },
];

export const toolsSorted: Tool[] = [...tools].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export type TagInfo = {
  slug: string;
  label: string;
  count: number;
};

export const tagLabels: Record<string, string> = {
  csv: "CSV",
  tsv: "TSV",
  sql: "SQL",
  json: "JSON",
  yaml: "YAML",
  xml: "XML",
  jsonl: "JSONL",
  pdf: "PDF",
  excel: "Excel",
  docx: "Word",
  pptx: "PowerPoint",
  forms: "Forms",
  duckdb: "DuckDB",
  logs: "Logs",
  regex: "Regex",
  diff: "Diff",
  html: "HTML",
  scraping: "Scraping",
  openapi: "OpenAPI",
  graphql: "GraphQL",
  api: "API",
  fonts: "Fonts",
  files: "Files",
  security: "Security",
  privacy: "Privacy",
  typst: "Typst",
  latex: "LaTeX",
  math: "Math",
  video: "Video",
  audio: "Audio",
  ffmpeg: "FFmpeg",
  image: "Images",
  svg: "SVG",
  subtitles: "Subtitles",
  og: "Open Graph",
  dns: "DNS",
  tls: "TLS",
  convert: "Convert",
  docs: "Docs",
  asciidoc: "AsciiDoc",
  pandoc: "Pandoc",
  rag: "RAG",
  ai: "AI",
  data: "Data",
  profiling: "Profiling",
  kubernetes: "Kubernetes",
  terraform: "Terraform",
  devops: "DevOps",
  ci: "CI/CD",
  postgres: "Postgres",
  cli: "CLI",
  ebooks: "Ebooks",
  epub: "EPUB",
  archives: "Archives",
  edit: "Edit",
  format: "Format",
  viewer: "Viewer",
  optimize: "Optimize",
  woff: "WOFF",
};

export function tagLabel(slug: string): string {
  return tagLabels[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
}

export function getAllTags(): TagInfo[] {
  const counts = new Map<string, number>();
  for (const tool of tools) {
    for (const tag of tool.tags) {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([slug, count]) => ({ slug, label: tagLabel(slug), count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

export function getToolsByTag(tag: string): Tool[] {
  return toolsSorted.filter((t) => t.tags.includes(tag));
}
