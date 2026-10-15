import { siteConfig, type WhatsAppTopic } from "@/config/site";

/** Origem do clique, usada como evento de conversão. */
export type WhatsAppSource =
  | "header"
  | "mobile_menu"
  | "hero"
  | "audience"
  | "originality"
  | "services_page"
  | "service"
  | "process"
  | "final_cta"
  | "faq"
  | "footer"
  | "floating";

export function whatsappHref(topic: WhatsAppTopic = "default"): string {
  const text = encodeURIComponent(siteConfig.whatsapp.messages[topic]);
  const number = siteConfig.whatsapp.number?.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}
