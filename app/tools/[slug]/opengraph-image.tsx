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
        background: "#f3efe6",
        backgroundImage:
          "radial-gradient(900px circle at 90% -10%, rgba(189,75,44,0.13), transparent 55%)",
        padding: "72px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#bd4b2c",
            color: "white",
            fontSize: 22,
            fontWeight: 700,
            borderRadius: 50,
          }}
        >
          CP
        </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#756e62" }}>
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
                  fontSize: 21,
                  color: "#9a3a1f",
                  border: "2px solid rgba(189,75,44,0.4)",
                  borderRadius: 999,
                  padding: "4px 18px",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 600,
              color: "#201d18",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              maxWidth: 1040,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 29,
              color: "#756e62",
              marginTop: 24,
              maxWidth: 980,
              lineHeight: 1.3,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 21,
            color: "#a79e8f",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Free online tool · no signup · {site.socials.xHandle}
        </div>
      </div>
    ),
    { ...size }
  );
}
