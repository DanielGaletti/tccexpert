import { Plus } from "lucide-react";
import { faq } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

/** Accordion com <details>/<summary> nativos: acessível por teclado e leitor de tela, sem JavaScript. */
export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="faq-title" className="py-section">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading index="08" kicker="Dúvidas frequentes" id="faq-title">
            Perguntas que costumamos ouvir.
          </SectionHeading>
          <p className="mt-6 max-w-[36ch] text-graphite">
            Não encontrou sua dúvida?{" "}
            <WhatsAppLink source="faq" className="link-underline text-ink-2">
              Pergunte direto pelo WhatsApp
            </WhatsAppLink>
            .
          </p>
        </div>

        <div className="border-t border-ink lg:col-span-7 lg:col-start-6">
          {faq.map((item) => (
            <details key={item.q} className="faq-item border-b border-rule">
              <summary className="flex min-h-16 items-start justify-between gap-6 py-6 font-serif text-xl leading-snug text-ink transition-colors hover:text-ink-2 sm:text-[1.375rem]">
                <span>{item.q}</span>
                <Plus className="faq-icon mt-1 size-5 flex-none text-gold-text" aria-hidden="true" />
              </summary>
              <p className="max-w-[62ch] pb-7 text-graphite">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
