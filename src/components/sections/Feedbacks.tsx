"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Expand, Quote, X } from "lucide-react";
import paulo from "../../../public/feedbacks/paulo.webp";
import tamires from "../../../public/feedbacks/tamires.webp";
import katia from "../../../public/feedbacks/katia.webp";
import { testimonials, type Testimonial } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const prints: Record<string, typeof paulo> = {
  "feedbacks/paulo.webp": paulo,
  "feedbacks/tamires.webp": tamires,
  "feedbacks/katia.webp": katia,
};

/** Feedbacks reais em texto, com acesso ao print original em um modal nativo (<dialog>). */
export function Feedbacks() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<Testimonial | null>(null);

  const open = (t: Testimonial) => {
    setCurrent(t);
    dialogRef.current?.showModal();
  };

  if (testimonials.length === 0) return null;
  const currentPrint = current?.image ? prints[current.image] : undefined;

  return (
    <section id="feedbacks" aria-labelledby="feedbacks-title" className="bg-cream-2 py-section">
      <div className="container-x">
        <SectionHeading kicker="Feedbacks" id="feedbacks-title" align="center" className="max-w-2xl">
          Dá para sentir a alegria deles com a aprovação
        </SectionHeading>
        <p data-reveal className="mx-auto mt-4 max-w-[52ch] text-center text-ink">
          Mensagens reais que recebemos de alunos pelo WhatsApp.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.author} data-reveal style={{ ["--reveal-i" as string]: i }}>
              <figure className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_1px_0_rgba(18,21,66,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-28px_rgba(18,21,66,0.45)] sm:p-7">
                <Quote className="size-8 text-orange transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-ink">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-end justify-between gap-4 border-t border-rule pt-5">
                  <span>
                    <span className="block font-display font-semibold text-brand">{t.author}</span>
                    <span className="block text-sm text-muted">{t.context ?? t.service}</span>
                  </span>
                  {t.image && (
                    <button
                      type="button"
                      onClick={() => open(t)}
                      className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-cream px-3.5 text-sm font-medium text-brand transition-all hover:bg-orange-soft active:scale-95"
                    >
                      <Expand className="size-4" aria-hidden="true" />
                      Ver print
                      <span className="sr-only"> da mensagem de {t.author}</span>
                    </button>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={current ? `Mensagem de ${current.author}` : "Mensagem"}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="m-auto max-h-[92vh] w-[min(92vw,26rem)] overflow-visible rounded-2xl bg-transparent p-0 backdrop:bg-brand-deep/70 backdrop:backdrop-blur-sm open:animate-pop-in"
      >
        {currentPrint && (
          <div className="relative">
            <Image
              src={currentPrint}
              alt={`Print da mensagem enviada por ${current?.author} pelo WhatsApp`}
              sizes="26rem"
              className="max-h-[88vh] w-full rounded-2xl object-contain"
            />
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              autoFocus
              className="absolute -top-3 -right-3 inline-flex size-11 items-center justify-center rounded-full bg-white text-brand shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Fechar</span>
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
