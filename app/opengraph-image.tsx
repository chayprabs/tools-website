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
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#c84b2f",
              color: "white",
              fontSize: 19,
              fontWeight: 700,
              borderRadius: 9,
            }}
          >
            CP
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#1a1a18" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#1a1a18",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Tools I built,
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#1a1a18",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            free for everyone.
          </div>
          <div style={{ fontSize: 26, color: "#6b6860", marginTop: 26 }}>
            43 free developer tools · no signup · runs in your browser
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 21, color: "#9a9890" }}>
          {site.socials.xHandle} · github.com/{site.socials.githubProfile}
        </div>
      </div>
    ),
    { ...size }
  );
}
