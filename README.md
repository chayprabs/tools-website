# Chai Tools

A free, fast directory of browser-based developer tools — SQL on CSV, PDF utilities, OpenAPI diffs, log analysis, and more. No installs, no accounts, and most tools run entirely in your browser.

Live at **[tools.chaitanyaprabuddha.com](https://tools.chaitanyaprabuddha.com)** (subdomain pending).

## What's inside

- **43 developer tools**, each with its own SEO-optimized landing page
- **Tag pages** to browse tools by category (CSV, SQL, PDF, OpenAPI, logs, DevOps, …)
- **Search + filter** on the homepage
- Full SEO: per-page metadata, JSON-LD structured data, dynamic Open Graph images, `sitemap.xml`, and `robots.txt`
- Mobile-first, accessible, and fast

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
  privacy, terms, about
components/           # Header, Footer, ToolCard, ToolDirectory, …
lib/
  tools.ts           # The tool dataset + helpers
  site.ts            # Site config (URLs, socials, feedback email)
```

## Adding a tool

Add an entry to the `tools` array in [`lib/tools.ts`](lib/tools.ts). Each tool defines its slug, display name, GitHub repo, tagline, description, tags, features, and SEO keywords. Everything else — the page, sitemap entry, OG image, and tag pages — is generated automatically.

## Configuration

Set `NEXT_PUBLIC_SITE_URL` in your Vercel environment variables once the custom domain is attached so canonical URLs, the sitemap, and OG tags use the correct origin.

## Author

Built by [Chaitanya Prabuddha](https://www.chaitanyaprabuddha.com) · [@chayprabs](https://x.com/chayprabs) · [GitHub](https://github.com/chayprabs)
