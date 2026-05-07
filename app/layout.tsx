import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manav Jaiswal | Professional Video Editor & Visual Storyteller",
  description: "High-retention video editing, cinematic videography, and visual storytelling by Manav Jaiswal. 1500+ videos edited for brands like Angel One, Oziva, and more.",
  keywords: ["video editor", "videographer", "visual storyteller", "content creator", "cinematic editing", "reel editing", "Manav Jaiswal", "MJ Video Editing"],
  authors: [{ name: "Manav Jaiswal" }],
  openGraph: {
    title: "Manav Jaiswal | Professional Video Editor",
    description: "Crafting visual stories that move. 5+ years of experience in cinematic and high-retention editing.",
    url: "https://manavjaiswal.com",
    siteName: "Manav Jaiswal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manav Jaiswal | Professional Video Editor",
    description: "Crafting visual stories that move. 5+ years of experience in cinematic and high-retention editing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-inter bg-[#0a0a0a] text-white antialiased selection:bg-accent selection:text-black`}>
        <div className="relative min-h-screen noise-overlay">
          <Navbar />
          <Preloader />
          <CustomCursor />
          {children}
        </div>
      </body>
    </html>
  );
}
