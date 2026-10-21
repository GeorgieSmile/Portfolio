import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Thai } from "next/font/google";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import "./globals.css";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex" });
const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500"],
  variable: "--font-plex-thai",
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
    <html lang="en" className={`${plex.variable} ${plexThai.variable}`}>
      <body className="bg-bg text-ink antialiased">
        {children}
        <Reveal />
      </body>
    </html>
  );
}
