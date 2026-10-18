import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import assert from "node:assert/strict";
import test from "node:test";

test("checks quoted install URLs and escaped link queries as a browser reads them", () => {
  const dir = mkdtempSync(join(tmpdir(), "localtools-linkcheck-"));
  try {
    mkdirSync(join(dir, "dist"));
    writeFileSync(join(dir, "dist/index.html"), '<a href="https://example.org/download?a=1&amp;b=2">download</a><code>pipx install tool --pip-args=&quot;--find-links https://example.org/dependency.whl&quot;</code><code>curl &#39;https://example.org/install.sh&#39;</code>');
    const checker = new URL("./check-links.mjs", import.meta.url).href;
    const result = spawnSync(process.execPath, ["--input-type=module", "-e", `globalThis.fetch = async (url) => { console.log("URL " + url); return { ok: true }; }; await import(${JSON.stringify(checker)});`], { cwd: dir, encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    const urls = result.stdout.split("\n").filter((s) => s.startsWith("URL ")).map((s) => s.slice(4));
    assert.deepEqual(urls, ["https://example.org/download?a=1&b=2", "https://example.org/dependency.whl", "https://example.org/install.sh"]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
