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
          background: "#0a0d14",
          color: "#e9edf3",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 400, letterSpacing: -2, lineHeight: 1.1 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 76, fontWeight: 400, letterSpacing: -2, lineHeight: 1.1, color: "#9aa3b2" }}>
            {profile.title}
          </div>
          <div style={{ fontSize: 30, color: "#9aa3b2", marginTop: 36, lineHeight: 1.4 }}>
            {profile.tagline}
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={330}
          height={440}
          style={{
            objectFit: "cover",
            objectPosition: "50% 22%",
          }}
        />
      </div>
    ),
    size
  );
}
