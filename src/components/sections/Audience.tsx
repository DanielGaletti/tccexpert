import Image from "next/image";
import photo from "../../../public/images/estudante-notebook.webp";
import { audience } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AudienceIcon } from "@/components/ui/ServiceIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Audience() {
  return (
    <section aria-labelledby="publico-title" className="bg-white py-section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="relative order-2 lg:order-1 lg:col-span-5">
          <Image
            src={photo}
            alt="Estudante trabalhando no notebook em uma mesa de estudos"
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[16/10] lg:aspect-[4/5]"
          />
          <p className="absolute right-4 bottom-4 left-4 rounded-xl bg-white/95 p-4 text-[0.9375rem] leading-snug text-ink shadow-lg sm:right-auto sm:max-w-xs">
            <span className="font-display font-semibold text-brand">Atendimento 100% online.</span> Converse com a equipe
            de onde estiver.
          </p>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <SectionHeading kicker={audience.kicker} id="publico-title">
            {audience.title}<span className="text-orange-deep">...</span>
          </SectionHeading>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {audience.items.map((item, i) => (
              <li
                key={item.title}
                data-reveal
                style={{ ["--reveal-i" as string]: i }}
                className="row-hover group rounded-xl border border-rule bg-cream p-5 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-[0_18px_36px_-22px_rgba(18,21,66,0.4)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-orange-soft text-orange-text transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-orange group-hover:text-brand-deep">
                  <AudienceIcon name={item.icon} />
                </span>
                <h3 className="mt-4 text-h3">{item.title}</h3>
                <p className="mt-2 text-[0.975rem] text-muted">{item.text}</p>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[40ch] text-ink">{audience.closing}</p>
            <WhatsAppLink source="audience" className="btn btn-wa shrink-0">
              <WhatsAppIcon />
              Conversar com especialista
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
