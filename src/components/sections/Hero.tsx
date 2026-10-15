import { ArrowRight } from "lucide-react";
import { contents, hero, pillars } from "@/content/site-content";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="container-x">
        {/* Cabeço corrido, como no topo de uma página impressa */}
        <div className="flex items-center justify-between border-b border-rule py-4 text-xs tracking-[0.16em] text-muted uppercase">
          <span>{hero.eyebrow}</span>
          <span className="hidden sm:inline">Orientação · Método · Autoria</span>
        </div>

        <div className="grid gap-14 pt-12 pb-16 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-24">
          <div className="lg:col-span-8">
            <h1 id="hero-title" className="text-display">
              {hero.title.map((line, i) => (
                <span key={line} className="block">
                  {i === hero.title.length - 1 ? <em className="text-ink-2">{line}</em> : line}
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-[52ch] text-lead text-graphite">{hero.lead}</p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <WhatsAppLink source="hero" className="btn btn-primary">
                <WhatsAppIcon />
                {hero.primaryCta}
              </WhatsAppLink>
              <a href="#servicos" className="btn btn-link self-start sm:self-auto">
                {hero.secondaryCta}
                <ArrowRight className="arrow size-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-10 flex max-w-[46ch] gap-3 text-sm text-muted">
              <span aria-hidden="true" className="font-serif text-base text-gold-text">
                ¹
              </span>
              {hero.note}
            </p>
          </div>

          {/* Sumário: índice editorial que também funciona como navegação */}
          <aside aria-label="Sumário da página" className="hidden md:block lg:col-span-4 lg:col-start-9 lg:self-end">
            <div className="border-t-2 border-ink pt-5">
              <p className="flex items-baseline justify-between">
                <span className="font-serif text-2xl text-ink italic">Sumário</span>
                <span className="text-xs tracking-[0.16em] text-muted uppercase">Nesta página</span>
              </p>
              <ol className="mt-6 space-y-1">
                {contents.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group flex items-baseline gap-3 py-2 text-[0.975rem] text-graphite transition-colors hover:text-ink"
                    >
                      <span className="font-serif text-gold-text tabular-nums">{item.n}</span>
                      <span className="group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                        {item.label}
                      </span>
                      <span aria-hidden="true" className="leader" />
                      <span aria-hidden="true" className="font-serif text-muted">
                        §
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>

      {/* Faixa de confiança: diferenciais qualitativos, sem estatísticas não verificadas */}
      <div className="border-y border-rule bg-white/60">
        <ul className="container-x grid grid-cols-1 divide-y divide-rule sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li
              key={p.label}
              className={`py-6 sm:px-6 sm:py-8 ${i % 2 === 1 ? "sm:border-l sm:border-rule" : ""} ${
                i >= 2 ? "sm:border-t sm:border-rule lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:border-rule" : ""} ${i === 0 ? "sm:pl-0" : ""}`}
            >
              <p className="text-xs font-medium tracking-[0.16em] text-gold-text uppercase">{p.label}</p>
              <p className="mt-2 font-serif text-lg leading-snug text-ink">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
