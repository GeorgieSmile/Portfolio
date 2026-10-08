import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/data/profile";

// Preview card shown when the site link is shared (LinkedIn, LINE, X, ...).
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          padding: "0 96px",
          background: "#0f0f0f",
          color: "#e5e5e5",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              color: "#2dd4bf",
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            {profile.title.toUpperCase()}
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, color: "white", lineHeight: 1.05 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 30, color: "#a3a3a3", marginTop: 28, lineHeight: 1.4 }}>
            {profile.tagline}
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={300}
          height={300}
          style={{
            borderRadius: 9999,
            objectFit: "cover",
            objectPosition: "50% 28%",
            border: "4px solid rgba(20, 184, 166, 0.4)",
          }}
        />
      </div>
    ),
    size
  );
}
