import type { ReactNode } from "react";
import type { WhatsAppTopic } from "@/config/site";
import { whatsappHref, type WhatsAppSource } from "@/lib/whatsapp";

type Props = {
  source: WhatsAppSource;
  topic?: WhatsAppTopic;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

/**
 * Link de conversão para o WhatsApp. Server component: o rastreamento é feito
 * por um único ouvinte delegado (ConversionTracker) via atributos data-*.
 */
export function WhatsAppLink({ source, topic = "default", className, children, ...rest }: Props) {
  return (
    <a
      href={whatsappHref(topic)}
      target="_blank"
      rel="noopener noreferrer"
      data-wa-source={source}
      data-wa-topic={topic}
      className={className}
      aria-label={rest["aria-label"]}
    >
      {children}
    </a>
  );
}
