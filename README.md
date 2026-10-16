# tools-website

Marketplace for [localtools](https://github.com/chayprabs/localtools): https://tools.chaitanyaprabuddha.com

Static site, no framework, no analytics. `build.mjs` (Node 20+, one dependency: `@resvg/resvg-js` for OG images)
renders `data/tools.json` into `dist/`. Only tools with `status: "released"` get listed and get a page.

```sh
npm ci
npm run sync          # copy the workspace manifest (default C:/Users/chait/tools-rebuild/tools.json, or pass a path)
npm run build         # -> dist/
npm run check-links   # every href/src, install-script, download and media URL must resolve
npx serve dist        # local preview (clean URLs)
```

`data/tools.json` is a copy because Vercel can't see the workspace: after changing the manifest, run `npm run sync`
and commit. Screenshots and demo videos are picked up at build time from
`https://raw.githubusercontent.com/chayprabs/localtools/main/<slug>/media/{screenshot.png,demo.webm,demo.gif}`
(produced by the `capture-media` workflow in that repo); missing files are simply not shown.

Deploy: Vercel project `tools-website`, settings in `vercel.json`. CI: `.github/workflows/check.yml`.

MIT licensed. JetBrains Mono: SIL OFL 1.1 (`src/fonts/OFL.txt`).
