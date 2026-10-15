import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services, workTypes, type Service } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

/** Marca visível apenas na versão de validação: serviço ainda não confirmado pela empresa. */
function PendingMark({ service }: { service: Service }) {
  if (!siteConfig.isPreview || service.confirmed) return null;
  return (
    <span className="ml-2 inline-block border border-dashed border-gold-text/60 px-1.5 align-middle font-sans text-[0.6875rem] tracking-[0.08em] text-gold-text uppercase">
      a confirmar
    </span>
  );
}

function ServiceCta({ service }: { service: Service }) {
  return (
    <WhatsAppLink
      source="service"
      topic={service.topic}
      className="group/cta inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-medium text-ink-2"
    >
      <span className="link-underline">Perguntar sobre este serviço</span>
      <span className="sr-only">: {service.name}, pelo WhatsApp</span>
      <ArrowUpRight className="size-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" aria-hidden="true" />
    </WhatsAppLink>
  );
}

export function Services() {
  const featured = services.filter((s) => s.featured);
  const others = services.filter((s) => !s.featured);

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-white py-section">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading index="02" kicker="Serviços" id="servicos-title" className="lg:col-span-7">
            Orientação para cada etapa da sua pesquisa.
          </SectionHeading>
          <p className="max-w-[44ch] text-graphite lg:col-span-4 lg:col-start-9">
            Formatos que orientamos: {workTypes}
          </p>
        </div>

        {/* Serviços principais: três colunas editoriais */}
        <div className="mt-16 grid border-t-2 border-ink md:grid-cols-3">
          {featured.map((s, i) => (
            <article
              key={s.id}
              className={`flex flex-col border-b border-rule py-10 md:border-b-0 md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l"} ${i === featured.length - 1 ? "md:pr-0" : ""}`}
            >
              <span aria-hidden="true" className="font-serif text-6xl leading-none text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-h3">
                {s.name}
                <PendingMark service={s} />
              </h3>
              <p className="mt-4 text-graphite">{s.description}</p>
              <p className="mt-5 border-l-2 border-gold pl-4 text-[0.9375rem] text-ink italic">{s.benefit}</p>
              <div className="mt-auto pt-8">
                <ServiceCta service={s} />
              </div>
            </article>
          ))}
        </div>

        {/* Demais serviços: índice tabular, fácil de comparar */}
        <div className="mt-16 lg:mt-24">
          <h3 className="kicker">Também orientamos</h3>
          <ul className="mt-6 border-t border-ink">
            {others.map((s, i) => (
              <li
                key={s.id}
                className="grid gap-x-8 gap-y-3 border-b border-rule py-8 md:grid-cols-12 md:items-baseline"
              >
                <span aria-hidden="true" className="font-serif text-lg text-gold-text tabular-nums md:col-span-1">
                  {String(featured.length + i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-serif text-[1.375rem] leading-snug text-ink md:col-span-4">
                  {s.name}
                  <PendingMark service={s} />
                </h4>
                <div className="md:col-span-4">
                  <p className="text-graphite">{s.description}</p>
                  <p className="mt-2 text-[0.9375rem] text-muted italic">{s.benefit}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <ServiceCta service={s} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
