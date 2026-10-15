import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Botão flutuante discreto. Sem pop-up, sem animação chamativa. */
export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      source="floating"
      aria-label="Conversar pelo WhatsApp (abre em nova aba)"
      className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_6px_20px_-6px_rgba(14,29,47,0.45)] transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </WhatsAppLink>
  );
}
