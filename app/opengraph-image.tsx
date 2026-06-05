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
          backgroundColor: "#070809",
          backgroundImage:
            "linear-gradient(135deg, rgba(108,92,255,0.22), transparent 42%), linear-gradient(315deg, rgba(52,211,238,0.12), transparent 42%)",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, #9b8cff 0%, #6c5cff 55%, #5b3cff 100%)",
              color: "white",
              fontSize: 20,
              fontWeight: 700,
              borderRadius: 11,
            }}
          >
            CP
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#f2f3f6" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#f2f3f6",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Every dev tool you need,
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#9b8cff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            right in your browser.
          </div>
          <div style={{ fontSize: 26, color: "#9aa3b2", marginTop: 26 }}>
            43 free developer tools · no signup · runs in your browser
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 21, color: "#646b7a" }}>
          {site.socials.xHandle} · github.com/{site.socials.githubProfile}
        </div>
      </div>
    ),
    { ...size }
  );
}
