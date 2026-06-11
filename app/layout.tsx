import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nithid Guntasin — AI/ML Engineer",
  description:
    "AI/ML Engineer and co-author of JaiTTS (arXiv, 2026). SIIT Computer Engineering graduate (GPA 3.65) with production experience in speech AI, model fine-tuning, and NLP. Reduced ASR CER from 44% to 2.75% at Jasmine Technology Solution.",
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
