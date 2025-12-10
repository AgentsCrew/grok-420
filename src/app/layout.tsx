import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://grok-420.com'),
  title: {
    default: "Grok 4.20 Release Date, Rumors & Leaks | Unofficial Tracker",
    template: "%s | Grok 4.20 Tracker"
  },
  description: "Everything we know about Elon Musk's Grok 4.20 update. Benchmarks, release date rumors, and crypto news. The #1 community tracker.",
  keywords: ["Grok 4.20", "xAI update", "Elon Musk AI", "Grok Memecoin", "Grok 4.20 vs GPT-5", "AI Leaks", "Tech News"],
  authors: [{ name: "Grok 4.20 Community" }],
  creator: "Grok 4.20 Community",
  publisher: "Grok 4.20 Tracker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Grok 4.20 Release Date & Leaks",
    description: "The ultimate unofficial tracker for xAI's Grok 4.20. Comparison charts, meme coin tracking, and latest rumors.",
    url: 'https://grok-420.com',
    siteName: 'Grok 4.20 Tracker',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Grok 4.20 Tracker Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grok 4.20 Release Date & Leaks",
    description: "The ultimate unofficial tracker for xAI's Grok 4.20. Comparison charts, meme coin tracking, and latest rumors.",
    creator: '@grok420tracker', // Placeholder handle
    images: ['/twitter-image.jpg'], // Placeholder for Twitter image
  },
  category: 'technology',
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
        <GoogleAnalytics gaId="G-51B5ZQ5591" />
      </body>
    </html>
  );
}
