// Copy buttons, install tabs (pre-selected for the visitor's OS) and the home-page filter. No dependencies.
for (const b of document.querySelectorAll(".copy")) {
  b.addEventListener("click", async () => {
    await navigator.clipboard.writeText(b.previousElementSibling.textContent);
    b.textContent = "Copied";
    setTimeout(() => (b.textContent = "Copy"), 1500);
  });
}

const tablist = document.querySelector("[role=tablist]");
if (tablist) {
  const tabs = [...tablist.querySelectorAll("[role=tab]")];
  const select = (tab) => {
    for (const t of tabs) {
      t.setAttribute("aria-selected", t === tab);
      t.tabIndex = t === tab ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = t !== tab;
    }
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", (e) => {
      const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (d) { const n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });
  const p = (navigator.userAgentData?.platform || navigator.platform || navigator.userAgent).toLowerCase();
  const os = p.includes("win") ? "windows" : p.includes("mac") ? "macos" : "linux";
  select(tabs.find((t) => t.dataset.os.split(" ").includes(os)) || tabs[0]);
}

const search = document.querySelector(".search");
if (search) {
  const items = [...document.querySelectorAll(".grid li")];
  const btns = [...document.querySelectorAll(".seg button")];
  const none = document.getElementById("none");
  let cat = "";
  const apply = () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    for (const li of items) {
      const ok = (!cat || li.dataset.cat === cat) && li.textContent.toLowerCase().includes(q);
      li.hidden = !ok; shown += ok;
    }
    none.hidden = shown > 0;
  };
  search.addEventListener("input", apply);
  for (const b of btns) b.addEventListener("click", () => {
    cat = b.dataset.cat;
    for (const x of btns) x.setAttribute("aria-pressed", x === b);
    apply();
  });
}
