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
          <div style={{ fontSize: 24, fontWeight: 600, color: "#9aa3b2" }}>
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
                  color: "#9b8cff",
                  border: "1px solid rgba(108,92,255,0.45)",
                  background: "rgba(108,92,255,0.1)",
                  borderRadius: 6,
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
              color: "#f2f3f6",
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
              color: "#9aa3b2",
              marginTop: 24,
              maxWidth: 980,
              lineHeight: 1.3,
            }}
          >
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 21, color: "#646b7a" }}>
          Free online tool · no signup · {site.socials.xHandle}
        </div>
      </div>
    ),
    { ...size }
  );
}
