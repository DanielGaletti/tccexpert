import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ConversionTracker } from "@/components/layout/ConversionTracker";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { Analytics } from "@/components/layout/Analytics";
import "./globals.css";

// Inter em títulos e texto: uma única família sóbria, de leitura profissional.
// Só os pesos realmente usados, para carregar o mínimo de arquivos.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const title =
  "TCC Expert | Orientação para TCC, artigos, relatórios e projetos acadêmicos";

export const metadata: Metadata = {
  metadataBase: new URL(
    siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`,
  ),
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
    images: [
      {
        url: "og.png",
        width: 1200,
        height: 630,
        alt: "TCC Expert Soluções Acadêmicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: ["og.png"],
  },
  robots: siteConfig.isPreview
    ? { index: false, follow: false }
    : { index: true, follow: true },
  verification: siteConfig.analytics.searchConsoleVerification
    ? { google: siteConfig.analytics.searchConsoleVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#1f2471",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marca que há JavaScript antes da pintura, para as animações de entrada não piscarem. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body id="topo">
        <Header />
        <main id="conteudo" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ConversionTracker />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
