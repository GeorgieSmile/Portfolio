import { ImageResponse } from "next/og";

// Browser-tab icon: "NG" monogram in the site's indigo.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6366f1",
          color: "white",
          borderRadius: 14,
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        NG
      </div>
    ),
    size
  );
}
