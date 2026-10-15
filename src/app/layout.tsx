import type { Metadata, Viewport } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ConversionTracker } from "@/components/layout/ConversionTracker";
import { Analytics } from "@/components/layout/Analytics";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const title = "TCC Expert | Assessoria e orientação acadêmica para TCC e pesquisa";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`),
  title: { default: title, template: "%s | TCC Expert" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    url: "./",
    images: [{ url: "og.png", width: 1200, height: 630, alt: "TCC Expert — Assessoria e orientação acadêmica" }],
  },
  twitter: { card: "summary_large_image", title, description: siteConfig.description, images: ["og.png"] },
  robots: siteConfig.isPreview ? { index: false, follow: false } : { index: true, follow: true },
  verification: siteConfig.analytics.searchConsoleVerification
    ? { google: siteConfig.analytics.searchConsoleVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#14283f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${newsreader.variable} ${dmSans.variable}`}>
      <body id="topo">
        <Header />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ConversionTracker />
        <Analytics />
      </body>
    </html>
  );
}
