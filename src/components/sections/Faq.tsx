import { Plus } from "lucide-react";
import { faq } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Accordion com <details>/<summary> nativos: acessível e sem JavaScript, com abertura suave via CSS. */
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="faq-title" className="bg-cream py-section">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading kicker="Dúvidas frequentes" id="faq-title">
            Perguntas que costumamos ouvir
          </SectionHeading>
          <p data-reveal className="mt-5 text-ink">
            Não encontrou o que procurava? Fale direto com a nossa equipe.
          </p>
          <WhatsAppLink source="faq" className="btn btn-ghost mt-6">
            <WhatsAppIcon className="size-5 text-[#1f8f4e]" />
            Tirar dúvida no WhatsApp
          </WhatsAppLink>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {faq.map((item, i) => (
            <details
              key={item.q}
              data-reveal
              style={{ ["--reveal-i" as string]: Math.min(i, 4) }}
              className="faq-item group rounded-xl bg-white transition-shadow duration-300 open:shadow-[0_18px_36px_-26px_rgba(18,21,66,0.5)] hover:shadow-[0_12px_28px_-24px_rgba(18,21,66,0.5)]"
            >
              <summary className="flex min-h-16 items-center justify-between gap-6 rounded-xl px-5 py-4 font-display text-[1.0625rem] font-semibold text-brand transition-colors active:bg-cream sm:px-6">
                <span>{item.q}</span>
                <span className="faq-icon inline-flex size-9 flex-none items-center justify-center rounded-full bg-cream text-brand">
                  <Plus className="size-5" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-[64ch] px-5 pb-6 text-ink sm:px-6">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
