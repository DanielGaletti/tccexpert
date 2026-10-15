import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { services, workTypes } from "@/content/site-content";
import { serviceImages } from "@/content/service-images";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Highlights } from "@/components/sections/Highlights";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Mentoria acadêmica, revisão, formatação ABNT e projetos de pesquisa. Conheça como a TCC Expert orienta o seu trabalho do tema à banca.",
  alternates: { canonical: "./" },
};

export default function ServicesPage() {
  return (
    <>
      <section aria-labelledby="servicos-page-title" className="bg-cream">
        <div className="container-x pt-10 pb-14 sm:pt-14 lg:pb-20">
          <Link
            href="/"
            className="group inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-muted transition-colors hover:text-brand"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Voltar ao início
          </Link>
          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="kicker">Nossos serviços</p>
              <h1 id="servicos-page-title" className="mt-4 text-display font-bold">
                Orientação para cada etapa do seu <span className="text-orange-deep">trabalho acadêmico</span>
              </h1>
            </div>
            <p className="text-lead text-ink lg:col-span-5">
              Escolha a frente que combina com o momento da sua pesquisa. Se tiver dúvida, a gente indica o melhor caminho
              na primeira conversa.
            </p>
          </div>
        </div>
      </section>

      <Highlights />

      <section aria-label="Lista de serviços" className="bg-cream py-section">
        <div className="container-x">
          <ul className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => {
              const image = serviceImages[s.icon];
              return (
                <li key={s.id} id={s.id} data-reveal style={{ ["--reveal-i" as string]: i % 2 }} className="scroll-mt-28">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(18,21,66,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_-34px_rgba(18,21,66,0.5)]">
                    <div className="relative overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        priority={i === 0}
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 inline-flex size-12 items-center justify-center rounded-xl bg-orange text-brand-deep shadow-md transition-transform duration-300 group-hover:rotate-[-6deg]">
                        <ServiceIcon name={s.icon} className="size-6" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <h2 className="text-[1.5rem] leading-tight sm:text-[1.75rem]">{s.name}</h2>
                      <p className="mt-2 font-medium text-orange-text">{s.short}</p>
                      <p className="mt-4 text-ink">{s.description}</p>
                      <ul className="mt-5 space-y-2.5">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-ink">
                            <span className="mt-0.5 inline-flex size-5 flex-none items-center justify-center rounded-full bg-orange-soft text-orange-text">
                              <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 rounded-lg bg-cream px-4 py-3 text-[0.9375rem] text-muted">{s.forWho}</p>
                      <div className="mt-auto pt-7">
                        <WhatsAppLink source="services_page" topic={s.topic} className="btn btn-wa w-full sm:w-auto">
                          <WhatsAppIcon />
                          Conversar sobre {s.name.toLowerCase()}
                        </WhatsAppLink>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
          <p data-reveal className="mx-auto mt-12 max-w-[60ch] text-center text-ink">
            Também orientamos {workTypes}. Se o seu trabalho não aparece aqui, fale com a gente.
          </p>
        </div>
      </section>

      <Process />
      <FinalCta spacing="py-section" />
    </>
  );
}
