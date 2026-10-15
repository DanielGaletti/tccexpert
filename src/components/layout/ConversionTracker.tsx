"use client";

import { useEffect } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

const CAMPAIGN_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

/**
 * Único client component de conversão:
 * - registra cliques em links [data-wa-source] (no-op se analytics não estiver configurado);
 * - preserva a origem da campanha (utm_*) na mensagem do WhatsApp, para o
 *   atendimento saber de onde o contato veio.
 */
export function ConversionTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const campaign = CAMPAIGN_KEYS.map((k) => params.get(k)).filter(Boolean).join(" / ");

    if (campaign) {
      document.querySelectorAll<HTMLAnchorElement>("a[data-wa-source]:not([data-wa-campaign])").forEach((a) => {
        a.dataset.waCampaign = campaign;
        const url = new URL(a.href);
        const text = url.searchParams.get("text") ?? "";
        url.searchParams.set("text", `${text} (origem: ${campaign})`);
        a.href = url.toString();
      });
    }

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[data-wa-source]");
      if (link) trackWhatsAppClick(link.dataset.waSource ?? "unknown", link.dataset.waTopic ?? "default");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
