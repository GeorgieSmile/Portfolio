import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

const title = `${profile.name} — ${profile.title}`;
const description = `${profile.tagline} Co-author of JaiTTS (arXiv, 2026).`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-canvas text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
