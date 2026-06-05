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
          background: "#f3efe6",
          backgroundImage:
            "radial-gradient(900px circle at 88% -10%, rgba(189,75,44,0.14), transparent 55%)",
          padding: "76px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#bd4b2c",
              color: "white",
              fontSize: 26,
              fontWeight: 700,
              borderRadius: 56,
            }}
          >
            CP
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#201d18" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 600,
              color: "#201d18",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Developer tools that
          </div>
          <div
            style={{
              display: "flex",
              gap: 22,
              fontSize: 92,
              fontWeight: 600,
              color: "#201d18",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <span>just</span>
            <span style={{ fontStyle: "italic", color: "#bd4b2c" }}>work.</span>
          </div>
          <div
            style={{
              fontSize: 27,
              color: "#756e62",
              marginTop: 26,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Free · open source · no signup · runs in your browser
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#a79e8f",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          {site.socials.xHandle} · github.com/{site.socials.githubProfile}
        </div>
      </div>
    ),
    { ...size }
  );
}
