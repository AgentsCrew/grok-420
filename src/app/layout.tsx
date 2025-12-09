import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grok 4.20 Release Date, Rumors & Leaks | Unofficial Tracker",
  description: "Everything we know about Elon Musk's Grok 4.20 update. Benchmarks, release date rumors, and crypto news. The #1 community tracker.",
  keywords: ["Grok 4.20", "xAI update", "Elon Musk AI", "Grok Memecoin", "Grok 4.20 vs GPT-5"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <DisclaimerBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
