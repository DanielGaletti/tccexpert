import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Depoimentos autênticos. Sem depoimentos cadastrados, a seção:
 * - na versão de validação, mostra um estado neutro explicando o espaço;
 * - em produção, só aparece se houver link para avaliações no Google.
 */
export function Testimonials() {
  const hasItems = testimonials.length > 0;
  const reviewsUrl = siteConfig.googleReviewsUrl;
  if (!hasItems && !reviewsUrl && !siteConfig.isPreview) return null;

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-title" className="py-section">
      <div className="container-x">
        <SectionHeading index="06" kicker="Depoimentos" id="depoimentos-title" className="max-w-3xl">
          Quem já passou pela orientação.
        </SectionHeading>

        {hasItems ? (
          <ul className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <li key={`${t.author}-${i}`} className={i % 2 === 1 ? "md:mt-16" : undefined}>
                <figure className="border-t border-ink pt-8">
                  <blockquote className="font-serif text-[1.375rem] leading-normal text-ink sm:text-2xl">
                    <p>&ldquo;{t.text}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-6 text-[0.9375rem] text-muted">
                    <span className="font-medium text-graphite">{t.author}</span>
                    {t.context && <> · {t.context}</>}
                    {t.service && <> · {t.service}</>}
                    {t.sourceUrl && (
                      <>
                        {" · "}
                        <a href={t.sourceUrl} className="link-underline" target="_blank" rel="noopener noreferrer">
                          {t.sourceLabel ?? "Ver fonte"}
                        </a>
                      </>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-14 flex gap-5 border-y border-rule py-12 sm:gap-10">
            <span aria-hidden="true" className="font-serif text-6xl leading-[0.8] text-gold-deep sm:text-8xl">
              &ldquo;
            </span>
            <div>
              <p className="max-w-[52ch] font-serif text-2xl leading-snug text-ink">
                Este espaço é reservado a depoimentos reais de estudantes, publicados com autorização e com indicação da
                fonte.
              </p>
              {siteConfig.isPreview && (
                <p className="mt-4 text-sm text-muted">
                  Nota da versão de validação: nenhum depoimento foi cadastrado ainda. Eles entram em{" "}
                  <code className="text-ink">src/content/site-content.ts</code>.
                </p>
              )}
            </div>
          </div>
        )}

        {reviewsUrl && (
          <a href={reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-link mt-10">
            Ver avaliações no Google
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </section>
  );
}
