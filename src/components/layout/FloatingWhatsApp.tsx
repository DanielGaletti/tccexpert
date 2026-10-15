import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Botão flutuante discreto, sem pop-up. Cresce levemente no hover e comprime no clique. */
export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      source="floating"
      aria-label="Conversar pelo WhatsApp (abre em nova aba)"
      className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-wa text-wa-ink shadow-[0_8px_24px_-8px_rgba(6,48,26,0.55)] transition-transform duration-200 hover:scale-110 active:scale-95 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </WhatsAppLink>
  );
}
