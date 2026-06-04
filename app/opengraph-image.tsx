import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f1f0ee",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#c84b2f",
              color: "white",
              fontSize: 30,
              fontWeight: 700,
              borderRadius: 16,
            }}
          >
            CT
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#1a1a18" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1a1a18",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Developer tools that just work, right in your browser.
          </div>
          <div style={{ fontSize: 28, color: "#6b6860", marginTop: 24 }}>
            Free · open source · no signup · runs locally
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9a9890" }}>
          {site.socials.xHandle} · github.com/{site.socials.githubProfile}
        </div>
      </div>
    ),
    { ...size }
  );
}
