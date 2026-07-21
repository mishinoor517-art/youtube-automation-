import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

// Display face for headings — geometric and technical, fits a SaaS/automation product
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body face for readable, neutral text
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoTube — Grow Your YouTube Channel with Automation",
  description:
    "Script writing, AI voice-over, editing, thumbnails, SEO, and channel management — done for you, so your channel grows on autopilot.",
  keywords: [
    "YouTube automation",
    "AI voice over",
    "video editing service",
    "YouTube SEO",
    "channel management",
  ],
  openGraph: {
    title: "AutoTube — Grow Your YouTube Channel with Automation",
    description:
      "End-to-end YouTube automation: scripts, voice-over, editing, thumbnails, SEO, and channel management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        {/* A slim red progress bar tracking scroll position — a nod to a video's own
            playback scrubber, doubling as the page's signature visual motif */}
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
