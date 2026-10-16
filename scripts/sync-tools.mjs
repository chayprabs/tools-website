// Copy the workspace manifest into the site repo (Vercel builds can't see the workspace).
// Usage: node scripts/sync-tools.mjs [path/to/tools.json]
import { copyFileSync } from "node:fs";
const src = process.argv[2] || "C:/Users/chait/tools-rebuild/tools.json";
copyFileSync(src, new URL("../data/tools.json", import.meta.url));
console.log(`copied ${src} -> data/tools.json`);
