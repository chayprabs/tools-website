import { ImageResponse } from "next/og";
import { getTool, tagLabel } from "@/lib/tools";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  const name = tool?.name ?? site.name;
  const tagline = tool?.tagline ?? site.tagline;
  const tags = tool?.tags.map((t) => tagLabel(t)) ?? [];

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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#c84b2f",
              color: "white",
              fontSize: 24,
              fontWeight: 700,
              borderRadius: 13,
            }}
          >
            CT
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#6b6860" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
            {tags.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "#c84b2f",
                  border: "2px solid rgba(200,75,47,0.4)",
                  borderRadius: 999,
                  padding: "4px 18px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#1a1a18",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#6b6860",
              marginTop: 22,
              maxWidth: 980,
              lineHeight: 1.3,
            }}
          >
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#9a9890" }}>
          Free online tool · no signup · {site.socials.xHandle}
        </div>
      </div>
    ),
    { ...size }
  );
}
