// Static site build: data/tools.json -> dist/. Only tools with status "released" get listed and get a page.
// LOCALTOOLS_DATA=<path> builds from another manifest (local testing).
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from "node:fs";
import { Resvg } from "@resvg/resvg-js";

const SITE = "https://tools.chaitanyaprabuddha.com";
const GH = "https://github.com/chayprabs";
const REPO = `${GH}/localtools`;
const RAW = "https://raw.githubusercontent.com/chayprabs/localtools/main";
const OUT = "dist";
const CATS = ["pdf", "data", "dev", "media", "docs"];
const KIND = { bin: "Native app", py: "Python, bundled", js: "Single executable", docker: "Docker image" };
const OS = { windows: "Windows 10/11", macos: "macOS 12+", linux: "Linux (glibc)" };
const ASSET = { "windows-x64": "Windows x64", "windows-arm64": "Windows ARM64", "macos-arm64": "macOS Apple Silicon",
  "macos-x64": "macOS Intel", "linux-x64": "Linux x64", "linux-arm64": "Linux ARM64" };

const manifest = JSON.parse(readFileSync(process.env.LOCALTOOLS_DATA || "data/tools.json", "utf8"));
const tools = manifest.tools.filter((t) => t.status === "released").sort((a, b) => a.name.localeCompare(b.name));

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const pascal = (s) => s.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join("");
const mb = (n) => `${(n / 1048576).toFixed(1)} MB`;
const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`;

function page({ path, title, desc, body, head = "", og = "og/index.png" }) {
  const url = SITE + (path === "/" ? "/" : path);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="localtools">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/${og}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f1f1ec" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#111110" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/jetbrains-mono-latin-bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/site.css">
<script src="/site.js" defer></script>
${head}</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="bar"><div class="wrap">
<a class="brand" href="/">local<b>/</b>tools</a>
<nav aria-label="Main"><a href="/">Tools</a><a href="${REPO}">GitHub</a></nav>
</div></header>
<main id="main" class="wrap">
${body}
</main>
<footer><div class="wrap">
<span>MIT licensed. Tools run on your machine; files stay local.</span>
<nav aria-label="Footer"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="${REPO}">Source of builds</a><a href="${REPO}/issues">Issues</a></nav>
</div></footer>
</body>
</html>
`;
}

// ---------- home ----------
function home() {
  const list = tools.length
    ? `<div class="finder">
<input class="search" type="search" placeholder="Search ${tools.length} tools" aria-label="Search tools" autocomplete="off">
<div class="seg" role="group" aria-label="Category">
<button type="button" data-cat="" aria-pressed="true">All</button>${CATS.map((c) => `<button type="button" data-cat="${c}" aria-pressed="false">${c}</button>`).join("")}
</div>
</div>
<ul class="grid">
${tools.map((t) => `<li data-cat="${t.category}"><a href="/${t.slug}">
<h2>${esc(t.name)}</h2>
<p>${esc(t.description)}</p>
<span class="meta"><span>${t.category}</span><span>${KIND[t.kind]}</span></span>
</a></li>`).join("\n")}
</ul>
<p class="empty" id="none" hidden><strong>No match.</strong>Try another word or category.</p>`
    : `<p class="empty"><strong>First releases are on their way.</strong>Tools appear here as soon as each one passes clean-install tests on Windows, macOS and Linux. Follow progress on <a href="${REPO}">GitHub</a>.</p>`;
  return page({
    path: "/",
    title: "localtools: free offline PDF, data, dev, media and docs tools",
    desc: "Free tools that run offline on your own machine. Merge PDFs, query CSV with SQL, diff APIs, convert documents. Install with one command; files never leave your computer.",
    head: ld({ "@context": "https://schema.org", "@type": "WebSite", name: "localtools", url: SITE + "/" }),
    body: `<div class="hero">
<h1>Tools that run on your machine.</h1>
<p>Free, offline PDF, data, developer, media and document tools. One command installs each one; your files never leave your computer. Builds live in <a href="${REPO}">chayprabs/localtools</a>.</p>
</div>
${list}`,
  });
}

// ---------- tool page ----------
function methods(t) {
  const s = t.slug, c = t.command, r = t.registries, w = `localtools.${pascal(s)}`;
  const m = [
    { id: "powershell", label: "PowerShell", os: "windows", cmds: [`irm ${RAW}/${s}/install.ps1 | iex`, `${c} update`, `${c} uninstall`] },
    { id: "bash", label: "bash", os: "macos linux", cmds: [`curl -fsSL ${RAW}/${s}/install.sh | bash`, `${c} update`, `${c} uninstall`] },
  ];
  if (r.brew) m.push({ id: "brew", label: "brew", os: "macos", cmds: [`brew install chayprabs/localtools/${c}`, `brew upgrade ${c}`, `brew uninstall ${c}`] });
  if (r.scoop) m.push({ id: "scoop", label: "scoop", os: "", cmds: [`scoop bucket add localtools ${GH}/scoop-localtools; scoop install ${c}`, `scoop update ${c}`, `scoop uninstall ${c}`] });
  if (r.winget) m.push({ id: "winget", label: "winget", os: "", cmds: [`winget install ${w}`, `winget upgrade ${w}`, `winget uninstall ${w}`] });
  if (r.npm) m.push({ id: "npm", label: "npm", os: "", cmds: [`npm i -g ${r.npm}`, `npm i -g ${r.npm}@latest`, `npm rm -g ${r.npm}`] });
  if (r.pypi) m.push({ id: "pipx", label: "pipx", os: "", cmds: [`pipx install ${r.pypi}`, `pipx upgrade ${r.pypi}`, `pipx uninstall ${r.pypi}`] });
  if (r.ghcr) m.push({ id: "docker", label: "docker", os: "", cmds: [`docker run --rm -p 127.0.0.1:${t.port}:${t.port} ${r.ghcr}:latest`, `docker pull ${r.ghcr}:latest`, `docker rmi ${r.ghcr}`] });
  return m;
}

async function exists(url) {
  for (let i = 0; i < 3; i++) {
    try { return (await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(10000) })).ok; } catch {}
  }
  return false;
}

async function toolPage(t) {
  const m = methods(t);
  const req = t.requirements;
  const assets = Object.entries(t.assets);
  const base = `${RAW}/${t.slug}/media`;
  const [shot, webm, gif] = await Promise.all(["screenshot.png", "demo.webm", "demo.gif"].map((f) => exists(`${base}/${f}`)));
  const faqs = t.page?.faqs || [], howto = t.page?.howto || [];
  const issue = `${REPO}/issues/new?template=${t.slug}.yml`;
  const download = assets[0]?.[1].url || `${RAW}/${t.slug}/install.sh`;

  const schema = [{
    "@context": "https://schema.org", "@type": "SoftwareApplication", name: `localtools ${t.name}`, description: t.description,
    url: `${SITE}/${t.slug}`, applicationCategory: t.category === "dev" ? "DeveloperApplication" : "UtilitiesApplication",
    operatingSystem: req.os.map((o) => OS[o]).join(", "), softwareVersion: t.version, downloadUrl: download,
    fileSize: assets.length ? mb(assets[0][1].size_bytes) : undefined, license: "https://opensource.org/licenses/MIT",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    ...(shot ? { screenshot: `${base}/screenshot.png` } : {}),
  }];
  if (faqs.length) schema.push({ "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });

  const media = shot || webm || gif ? `<section><h2 class="label">See it</h2><div class="media">
${webm ? `<video src="${base}/demo.webm" ${shot ? `poster="${base}/screenshot.png" ` : ""}controls muted loop playsinline preload="none" width="1280" height="800" aria-label="${esc(t.name)} demo"></video>`
  : gif ? `<img src="${base}/demo.gif" alt="${esc(t.name)} demo" width="1280" height="800" loading="lazy">` : ""}
${shot && !webm ? `<img src="${base}/screenshot.png" alt="${esc(t.name)} running in a browser" width="1280" height="800" loading="lazy">` : ""}
</div></section>` : "";

  const body = `<div class="head">
<span class="meta">${t.category} / ${KIND[t.kind]} / v${esc(t.version)}</span>
<h1>${esc(t.name)}</h1>
<p>${esc(t.description)}</p>
</div>
<div class="cols">
<div>
<section aria-labelledby="install">
<h2 class="label" id="install">Install</h2>
<div class="tabs" role="tablist" aria-label="Install method">
${m.map((x, i) => `<button type="button" role="tab" id="tab-${x.id}" aria-controls="p-${x.id}" aria-selected="${i === 0}" data-os="${x.os}"${i ? ' tabindex="-1"' : ""}>${x.label}</button>`).join("")}
</div>
${m.map((x, i) => `<div role="tabpanel" id="p-${x.id}" aria-labelledby="tab-${x.id}"${i ? " hidden" : ""}><ul class="cmds">
${x.cmds.map((c, j) => `<li class="cmd"><span class="meta">${["install", "update", "remove"][j]}</span><pre><code>${esc(c)}</code></pre><button type="button" class="copy">Copy</button></li>`).join("\n")}
</ul></div>`).join("\n")}
<p class="note">Opens at <code>http://127.0.0.1:${t.port}</code> in your browser. Run <code>${t.command} --help</code> for the command line. Set <code>LOCALTOOLS_NO_OPEN=1</code> to install without opening it.</p>
</section>
${assets.length ? `<section aria-labelledby="dl"><h2 class="label" id="dl">Direct download</h2>
<table><thead><tr><th>Platform</th><th>File</th><th class="num">Size</th></tr></thead><tbody>
${assets.map(([k, a]) => `<tr><td>${ASSET[k]}</td><td><a href="${esc(a.url)}">${esc(a.url.split("/").pop())}</a></td><td class="num">${mb(a.size_bytes)}</td></tr>`).join("\n")}
</tbody></table>
<p class="note">SHA-256 checksums are in the <a href="${REPO}/releases/tag/${t.slug}-v${esc(t.version)}">release notes</a>; the install scripts verify them for you.</p></section>` : ""}
${media}
${howto.length ? `<section aria-labelledby="how"><h2 class="label" id="how">How to use</h2><ol class="howto">${howto.map((h) => `<li>${esc(h)}</li>`).join("")}</ol></section>` : ""}
${faqs.length ? `<section aria-labelledby="faq"><h2 class="label" id="faq">FAQ</h2>${faqs.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("\n")}</section>` : ""}
</div>
<aside>
<section aria-labelledby="req"><h2 class="label" id="req">Requirements</h2><dl class="kv">
<dt>OS</dt><dd>${req.os.map((o) => OS[o]).join("<br>")}</dd>
<dt>Disk</dt><dd>${req.disk_mb} MB</dd>
<dt>Docker</dt><dd>${req.docker ? "Required (Linux containers)" : "Not needed"}</dd>
<dt>Network</dt><dd>${t.slug === "ssl-checker" ? "TLS and DNS checks; install and update" : "Install and update only"}</dd>
<dt>Engine</dt><dd>${esc(t.engine)}</dd>
</dl></section>
<section aria-labelledby="lnk"><h2 class="label" id="lnk">Links</h2><ul class="links">
<li><a href="${REPO}/tree/main/${t.slug}">Install scripts and notes</a></li>
<li><a href="${REPO}/releases/tag/${t.slug}-v${esc(t.version)}">Release ${esc(t.version)}</a></li>
<li><a href="${issue}">Report an issue</a></li>
</ul></section>
</aside>
</div>`;

  return page({
    path: `/${t.slug}`,
    title: `${t.name}: free offline ${t.category === "dev" ? "developer" : t.category} tool | localtools`,
    desc: `${t.description} Free, runs locally on ${req.os.map((o) => OS[o].split(" ")[0]).join(", ")}.`,
    og: `og/${t.slug}.png`,
    head: schema.map(ld).join("\n") + "\n",
    body,
  });
}

// ---------- static pages ----------
const prose = (path, title, desc, h1, html) => page({ path, title, desc, body: `<div class="head"><h1>${h1}</h1></div><div class="prose">${html}</div>` });

const privacy = prose("/privacy", "Privacy | localtools", "localtools has no analytics and no cookies. Tools run on your machine; files stay local.", "Privacy", `
<p>Short version: we don't collect anything.</p>
<h2>This website</h2>
<p>No analytics, no cookies, no trackers, no third-party scripts or fonts. The site is hosted on Vercel, which keeps standard request logs (IP address, user agent, requested URL, time) for operating and securing the service. We don't use them for anything else.</p>
<h2>The tools</h2>
<p>Each tool runs on your own computer and listens only on <code>127.0.0.1</code>. Your files are processed locally and are never uploaded. The tools contain no telemetry and make no network requests, except when a tool's job is the network (for example checking a TLS certificate you asked about), and when you run <code>update</code>, which downloads the new version from GitHub.</p>
<h2>Downloads and issues</h2>
<p>Installers and releases are served by GitHub, and reporting an issue happens on GitHub. Their <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">privacy statement</a> applies there.</p>`);

const terms = prose("/terms", "Terms | localtools", "localtools tools are free and MIT licensed, provided as is, without warranty.", "Terms", `
<p>All localtools tools and this website are free and released under the <a href="${REPO}/blob/main/LICENSE">MIT License</a>. Bundled third-party engines keep their own licenses, listed in each tool's <code>THIRD_PARTY_NOTICES.md</code>.</p>
<h2>No warranty</h2>
<p>The software is provided "as is", without warranty of any kind, express or implied, including merchantability, fitness for a particular purpose and noninfringement. The authors are not liable for any claim, damages or other liability arising from its use. Keep backups of files you process.</p>`);

const notFound = page({ path: "/404", title: "Not found | localtools", desc: "Page not found.",
  body: `<div class="head"><h1>Not found</h1><p>That page doesn't exist. <a href="/">See all tools</a>.</p></div>` });

// ---------- OG images ----------
const font = "src/fonts/JetBrainsMono-Bold.ttf";
function wrapText(s, n) {
  const lines = [""];
  for (const w of s.split(" ")) {
    if ((lines.at(-1) + " " + w).trim().length > n) lines.push(w); else lines[lines.length - 1] = (lines.at(-1) + " " + w).trim();
  }
  return lines;
}
function og(title, sub, meta) {
  const t = wrapText(title.toUpperCase(), 16).slice(0, 3), d = wrapText(sub, 52).slice(0, 2);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="#f1f1ec"/>
<text x="64" y="92" font-family="JetBrains Mono" font-weight="700" font-size="34" fill="#121211">local<tspan fill="#c8161b">/</tspan>tools</text>
<text x="1136" y="92" text-anchor="end" font-family="JetBrains Mono" font-weight="700" font-size="22" fill="#55554f" letter-spacing="2">${esc(meta.toUpperCase())}</text>
<rect x="64" y="124" width="1072" height="6" fill="#121211"/>
${t.map((l, i) => `<text x="60" y="${232 + i * 84}" font-family="JetBrains Mono" font-weight="700" font-size="80" letter-spacing="-3" fill="#121211">${esc(l)}</text>`).join("")}
${d.map((l, i) => `<text x="64" y="${270 + t.length * 84 - 40 + i * 38}" font-family="JetBrains Mono" font-weight="700" font-size="26" fill="#55554f">${esc(l)}</text>`).join("")}
<rect x="64" y="566" width="1072" height="2" fill="#121211"/>
<text x="64" y="602" font-family="JetBrains Mono" font-weight="700" font-size="22" fill="#c8161b">FREE. OFFLINE. RUNS ON YOUR MACHINE.</text>
</svg>`;
  return new Resvg(svg, { font: { fontFiles: [font], loadSystemFonts: false, defaultFontFamily: "JetBrains Mono" } }).render().asPng();
}

// ---------- write ----------
rmSync(OUT, { recursive: true, force: true });
mkdirSync(`${OUT}/og`, { recursive: true });
mkdirSync(`${OUT}/fonts`);
for (const f of ["jetbrains-mono-latin-regular.woff2", "jetbrains-mono-latin-bold.woff2"]) cpSync(`src/fonts/${f}`, `${OUT}/fonts/${f}`);
cpSync("src/site.css", `${OUT}/site.css`);
cpSync("src/site.js", `${OUT}/site.js`);
writeFileSync(`${OUT}/favicon.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#121211"/><path d="M20 6 12 26" stroke="#ff4d40" stroke-width="4"/></svg>`);
writeFileSync(`${OUT}/index.html`, home());
writeFileSync(`${OUT}/privacy.html`, privacy);
writeFileSync(`${OUT}/terms.html`, terms);
writeFileSync(`${OUT}/404.html`, notFound);
writeFileSync(`${OUT}/og/index.png`, og("Tools that run on your machine", "Free offline PDF, data, dev, media and docs tools.", "localtools"));
for (const t of tools) {
  writeFileSync(`${OUT}/${t.slug}.html`, await toolPage(t));
  writeFileSync(`${OUT}/og/${t.slug}.png`, og(t.name, t.description, `${t.category} / v${t.version}`));
}
const paths = ["/", ...tools.map((t) => `/${t.slug}`), "/privacy", "/terms"];
writeFileSync(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `<url><loc>${SITE}${p === "/" ? "/" : p}</loc></url>`).join("\n")}
</urlset>
`);
writeFileSync(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`built ${tools.length} released tool page(s) of ${manifest.tools.length} into ${OUT}/`);
