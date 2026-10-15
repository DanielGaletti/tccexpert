import { highlights } from "@/content/site-content";

/**
 * Faixa divisória com destaques em movimento contínuo.
 * O conteúdo é duplicado para o loop não ter emenda; a cópia fica oculta para leitores de tela.
 * Pausa ao passar o mouse e fica parada para quem prefere menos movimento.
 */
export function Highlights() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {highlights.map((item, i) => (
        <li key={item} className="flex items-center">
          <span
            className={`px-7 whitespace-nowrap sm:px-10 ${
              i % 2 === 0
                ? "font-display text-[0.9375rem] font-extrabold tracking-[0.06em] uppercase sm:text-base"
                : "text-[0.9375rem] font-medium sm:text-base"
            }`}
          >
            {item}
          </span>
          <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-deep/60" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Destaques da TCC Expert" className="marquee overflow-hidden bg-orange text-brand-deep">
      <div className="marquee-track py-5">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
