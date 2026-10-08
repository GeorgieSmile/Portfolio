import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Thai } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const plex = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-plex" });
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-thai",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

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
    <html lang="en" className={`${plex.variable} ${plexThai.variable} ${plexMono.variable}`}>
      <body className="bg-canvas text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
