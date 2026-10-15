import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import heroImage from "../../../public/images/hero-estudante.webp";
import { hero, stats } from "@/content/site-content";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-cream">
      <div className="container-x grid items-center gap-12 pt-10 pb-14 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-12 lg:pb-16">
        <div className="lg:col-span-7">
          <p className="kicker">{hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-5 text-display font-bold">
            {hero.titleStart}{" "}
            <span className="text-orange-deep">
              {hero.titleHighlight}
            </span>
          </h1>
          <p className="mt-6 max-w-[54ch] text-lead text-ink">{hero.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <WhatsAppLink source="hero" className="btn btn-wa">
              <WhatsAppIcon />
              {hero.primaryCta}
            </WhatsAppLink>
            <Link href="/servicos/" className="btn btn-ghost">
              {hero.secondaryCta}
              <ArrowRight className="arrow size-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-8 flex flex-col gap-2 text-[0.9375rem] text-muted sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {hero.reassurance.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-orange-soft text-orange-text">
                  <Check className="size-3.5" aria-hidden="true" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5">
          {/* Prova social logo na primeira tela: trecho de um feedback real */}
          <figure className="relative z-10 mb-3 flex items-center gap-3 rounded-xl bg-white p-3 pr-4 shadow-[0_16px_32px_-18px_rgba(18,21,66,0.5)] sm:absolute sm:top-6 sm:left-6 sm:mb-0 sm:max-w-[15rem] lg:top-8 lg:right-[-2rem] lg:left-auto">
            <span aria-hidden="true" className="inline-flex size-10 flex-none items-center justify-center rounded-full bg-brand-soft font-display font-semibold text-brand">
              {hero.quote.author.charAt(0)}
            </span>
            <span className="min-w-0">
              <blockquote className="font-display text-[0.9375rem] leading-snug font-semibold text-brand">
                &ldquo;{hero.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
                <WhatsAppIcon className="size-3.5 text-[#1f8f4e]" />
                {hero.quote.author}, {hero.quote.context}
              </figcaption>
            </span>
          </figure>

          {/* Bloco deslocado em off-white que dá profundidade à foto */}
          <div aria-hidden="true" className="absolute -right-4 -bottom-4 hidden h-full w-full rounded-2xl bg-cream-2 sm:block" />
          <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(18,21,66,0.45)]">
            <Image
              src={heroImage}
              alt="Estudante trabalhando em sua pesquisa no notebook"
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full object-cover object-[72%_center] lg:aspect-[5/6]"
            />
          </div>

          <dl className="relative -mt-12 mx-2 grid grid-cols-3 gap-1 rounded-xl bg-white px-2 py-4 shadow-[0_20px_40px_-20px_rgba(18,21,66,0.35)] sm:mx-8 sm:p-5 lg:absolute lg:-bottom-8 lg:-left-10 lg:mx-0 lg:mt-0 lg:w-[110%] lg:max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-xl font-semibold whitespace-nowrap text-brand sm:text-[1.75rem]">{s.value}</dd>
                <dd aria-hidden="true" className="mt-1 text-xs leading-snug text-muted sm:text-[0.8125rem]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
