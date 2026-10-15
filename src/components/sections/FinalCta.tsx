import { finalCta } from "@/content/site-content";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="on-dark bg-ink-2 text-paper/85">
      <div className="container-x grid gap-10 py-section lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-8">
          <span aria-hidden="true" className="block h-px w-16 bg-gold" />
          <h2 id="cta-title" className="mt-8 text-h2 text-paper">
            {finalCta.title}
          </h2>
          <p className="mt-6 max-w-[48ch] text-lead">{finalCta.text}</p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <WhatsAppLink source="final_cta" className="btn btn-light w-full sm:w-auto">
            <WhatsAppIcon />
            {finalCta.button}
          </WhatsAppLink>
          <p className="mt-4 text-sm">{finalCta.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
