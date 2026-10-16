// Fail if any link, install-script URL, download URL or media URL in dist/ doesn't resolve.
// Internal links must exist as files in dist/; external URLs get HEAD (then GET) with retries.
import { readdirSync, readFileSync, existsSync } from "node:fs";

const SITE = "https://tools.chaitanyaprabuddha.com";
const skip = /^https:\/\/schema\.org|^http:\/\/www\.sitemaps\.org/;
const pages = readdirSync("dist").filter((f) => f.endsWith(".html"));
const ext = new Set(), bad = [];

for (const f of pages) {
  const html = readFileSync(`dist/${f}`, "utf8");
  for (const [, u] of html.matchAll(/(?:href|src|poster)="([^"]+)"/g)) {
    if (u.startsWith("#")) continue;
    if (u.startsWith("/") || u.startsWith(SITE)) {
      const p = u.replace(SITE, "").split(/[?#]/)[0].replace(/\/$/, "") || "/index";
      if (![`dist${p}`, `dist${p}.html`].some(existsSync)) bad.push(`${f}: missing internal ${u}`);
    } else if (/^https?:/.test(u)) ext.add(u.replaceAll("&amp;", "&"));
  }
  // install commands are text, not hrefs
  for (const [u] of html.matchAll(/https:\/\/[^\s"'<>]+/g)) {
    if (!u.startsWith(SITE) && !skip.test(u)) ext.add(u.replaceAll("&amp;", "&").replace(/[.,;)]+$/, ""));
  }
}

async function ok(url) {
  for (let i = 0; i < 4; i++) {
    for (const method of ["HEAD", "GET"]) {
      try {
        const r = await fetch(url, { method, redirect: "follow", signal: AbortSignal.timeout(15000), headers: { "user-agent": "localtools-linkcheck" } });
        if (r.ok) return true;
        if (r.status === 404 || r.status === 410) break;
      } catch {}
    }
    await new Promise((r) => setTimeout(r, 1000 * 2 ** i));
  }
  return false;
}

const urls = [...ext];
const res = await Promise.all(urls.map(async (u) => [u, await ok(u)]));
for (const [u, good] of res) if (!good) bad.push(`broken external ${u}`);
console.log(`checked ${pages.length} pages, ${urls.length} external URLs`);
if (bad.length) { console.error(bad.join("\n")); process.exit(1); }
