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
          <div style={{ fontSize: 24, fontWeight: 600, color: "#6b6860" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 22 }}>
            {tags.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 20,
                  color: "#c84b2f",
                  border: "1px solid rgba(200,75,47,0.4)",
                  borderRadius: 4,
                  padding: "3px 14px",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#1a1a18",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              maxWidth: 1040,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#6b6860",
              marginTop: 24,
              maxWidth: 980,
              lineHeight: 1.3,
            }}
          >
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 21, color: "#9a9890" }}>
          Free online tool · no signup · {site.socials.xHandle}
        </div>
      </div>
    ),
    { ...size }
  );
}
