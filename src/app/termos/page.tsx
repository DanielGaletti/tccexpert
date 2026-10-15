import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { disclaimer } from "@/content/site-content";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site da TCC Expert e natureza do serviço de assessoria acadêmica (minuta em revisão).",
  alternates: { canonical: "./" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso" updated="outubro de 2026">
      <p>
        Ao utilizar este site, você concorda com os termos abaixo. Se não concordar, recomendamos não utilizá-lo.
      </p>

      <h2>1. Sobre o site</h2>
      <p>
        Este site tem caráter informativo e apresenta os serviços de assessoria e orientação acadêmica da{" "}
        {siteConfig.name}. A contratação de qualquer serviço ocorre por meio de proposta específica, enviada após o
        atendimento.
      </p>

      <h2>2. Natureza do serviço</h2>
      <p>{disclaimer}</p>
      <ul>
        <li>O acompanhamento não substitui o orientador nem as exigências da instituição de ensino.</li>
        <li>Não há garantia de nota, aprovação ou aceite de publicação.</li>
        <li>
          O estudante é responsável por observar as normas éticas e as políticas de integridade acadêmica da sua
          instituição.
        </li>
      </ul>

      <h2>3. Propriedade intelectual</h2>
      <p>
        Textos, marca e elementos visuais deste site pertencem à {siteConfig.name} e não podem ser reproduzidos sem
        autorização.
      </p>

      <h2>4. Links externos</h2>
      <p>
        Os botões de contato direcionam ao WhatsApp, serviço de terceiros. Não nos responsabilizamos pelas práticas de
        sites e serviços externos.
      </p>

      <h2>5. Alterações</h2>
      <p>Estes termos podem ser atualizados a qualquer momento. A data de atualização estará sempre indicada no topo.</p>

      <h2>6. Contato</h2>
      <p>
        Dúvidas sobre estes termos:{" "}
        <a className="link-underline text-ink-2" href={`mailto:${siteConfig.email.contact}`}>
          {siteConfig.email.contact}
        </a>
        .
      </p>
    </LegalPage>
  );
}
