import type { ReactNode } from "react";

type Props = { title: string; updated: string; children: ReactNode };

/** Layout editorial para documentos legais. Sempre identifica a minuta como pendente. */
export function LegalPage({ title, updated, children }: Props) {
  return (
    <article className="container-x py-16 sm:py-24">
      <div className="mx-auto max-w-[68ch]">
        <p className="kicker">Informações legais</p>
        <h1 className="mt-5 text-h2 font-bold">{title}</h1>
        <p className="mt-4 text-sm text-muted">Última atualização: {updated}</p>

        <div role="note" className="mt-10 rounded-xl border-l-4 border-orange bg-white px-5 py-4 text-[0.9375rem] text-ink">
          <strong className="font-semibold text-brand">Minuta pendente de revisão jurídica.</strong> Este texto é uma
          versão preliminar para validação e ainda não constitui o documento oficial da TCC Expert. Dados
          empresariais complementares (razão social e endereço) serão incluídos após confirmação.
        </div>

        <div className="legal mt-12 space-y-5 [&_h2]:mt-12 [&_h2]:text-h3 [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2">
          {children}
        </div>
      </div>
    </article>
  );
}
