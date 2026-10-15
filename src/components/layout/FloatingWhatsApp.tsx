import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Botão flutuante discreto, sem pop-up. Cresce levemente no hover e comprime no clique. */
export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      source="floating"
      aria-label="Fale conosco pelo WhatsApp (abre em nova aba)"
      className="fixed right-4 bottom-4 z-30 inline-flex size-14 items-center justify-center gap-2.5 rounded-full bg-wa text-wa-ink shadow-[0_8px_24px_-8px_rgba(6,48,26,0.55)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 sm:right-6 sm:bottom-6 lg:h-14 lg:w-auto lg:px-6"
    >
      <WhatsAppIcon className="size-7 lg:size-6" />
      <span className="hidden text-[0.9375rem] font-semibold lg:inline">
        Fale conosco
      </span>
    </WhatsAppLink>
  );
}
