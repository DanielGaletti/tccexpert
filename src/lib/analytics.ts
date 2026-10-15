import { siteConfig } from "@/config/site";

type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

export const analyticsEnabled = Boolean(
  siteConfig.analytics.gtmId || siteConfig.analytics.ga4Id || siteConfig.analytics.metaPixelId,
);

/**
 * Dispara um evento de conversão apenas se alguma integração estiver
 * configurada e carregada. Um único ponto de envio evita duplicidade.
 */
export function trackWhatsAppClick(source: string, topic: string) {
  if (!analyticsEnabled || typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  const payload = { event: "whatsapp_click", wa_source: source, wa_topic: topic };

  if (siteConfig.analytics.gtmId && w.dataLayer) {
    w.dataLayer.push(payload);
  } else if (siteConfig.analytics.ga4Id && w.gtag) {
    w.gtag("event", "whatsapp_click", { wa_source: source, wa_topic: topic });
  }
  if (siteConfig.analytics.metaPixelId && w.fbq) {
    w.fbq("track", "Contact", { content_name: `${source}:${topic}` });
  }
}
