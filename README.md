# Chaitanya Prabuddha — Developer Tools

A free, fast directory of browser-based developer tools — SQL on CSV, PDF utilities, OpenAPI diffs, log analysis, and more. No installs, no accounts, and most tools run entirely in your browser.

This is the tools directory by **Chaitanya Prabuddha**, sharing the design language of his personal site [chaitanyaprabuddha.com](https://www.chaitanyaprabuddha.com).

Live at **[tools.chaitanyaprabuddha.com](https://tools.chaitanyaprabuddha.com)** (subdomain pending).

## What's inside

- **43 developer tools**, each with its own SEO-optimized landing page
- **8 categories**: Data & Query, Documents & PDF, APIs & Schemas, Config & Formats, Media & Design, Logs & Text, DevOps & Infra, and Security & Files
- **Tag pages** to browse tools by topic (CSV, SQL, PDF, OpenAPI, logs, DevOps, …)
- **Home directory** with search and filtering, plus a **Cmd+K command palette** for quick navigation
- A floating **"say hello"** contact pill
- **About**, **privacy**, and **terms** pages
- Full SEO: per-page metadata, JSON-LD structured data, dynamic Open Graph images, `sitemap.xml`, and `robots.txt`
- Mobile-first, accessible, and fast

## Design

The directory mirrors the look and feel of [chaitanyaprabuddha.com](https://www.chaitanyaprabuddha.com):

- Minimal, content-first layout with compact, usable type
- **Inter** as the only typeface
- A warm paper palette — `#f1f0ee` background with a `#c84b2f` accent
- Cmd+K command palette search and a floating "say hello" contact pill

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript
- [lucide-react](https://lucide.dev/) icons
- Deployed on [Vercel](https://vercel.com/)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/                 # App Router pages, SEO routes, OG images
  page.tsx           # Home directory
  tools/[slug]/      # Individual tool pages
  tags/[tag]/        # Tag listing pages
  about, privacy, terms
components/           # Header, Footer, ToolCard, ToolDirectory, command palette, …
lib/
  tools.ts           # The tool dataset + helpers
  categories.ts      # Category definitions
  site.ts            # Site config (URLs, socials, feedback email)
```

## Adding a tool

Add an entry to the `tools` array in [`lib/tools.ts`](lib/tools.ts). Each tool defines its slug, display name, GitHub repo, tagline, description, category, tags, features, and SEO keywords. Categories themselves live in [`lib/categories.ts`](lib/categories.ts). Everything else — the page, sitemap entry, OG image, and tag pages — is generated automatically.

## Configuration

Set `NEXT_PUBLIC_SITE_URL` in your Vercel environment variables once the custom domain is attached so canonical URLs, the sitemap, and OG tags use the correct origin. Site-wide settings — URLs, socials, and the feedback email — live in [`lib/site.ts`](lib/site.ts).

## Author

Built by [Chaitanya Prabuddha](https://www.chaitanyaprabuddha.com) · [@chayprabs](https://x.com/chayprabs) · [GitHub](https://github.com/chayprabs)
