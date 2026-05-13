import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nithid Guntasin — AI/ML Engineer",
  description:
    "Computer Engineering student at SIIT with experience in speech data pipelines, TTS model fine-tuning, and NLP. Co-author of JaiTTS (arXiv). Seeking a full-time AI/ML Engineer position.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-[#0f0f0f] text-[#e5e5e5] antialiased">
        {children}
      </body>
    </html>
  );
}
