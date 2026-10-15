import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a TCC Expert trata dados pessoais no site e no atendimento (minuta em revisão).",
  alternates: { canonical: "./" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade" updated="outubro de 2026">
      <p>
        Esta política explica como a {siteConfig.name} trata dados pessoais de quem visita este site e entra em
        contato conosco, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2>1. Dados coletados pelo site</h2>
      <p>
        Este site não possui formulários, cadastro ou área logada. Na versão atual, ele não utiliza cookies de
        publicidade nem ferramentas de análise de navegação. Caso ferramentas como Google Analytics ou Meta Pixel venham
        a ser adotadas, esta política será atualizada e o seu consentimento será solicitado antes de qualquer coleta não
        essencial.
      </p>
      <p>
        Como qualquer site, o serviço de hospedagem pode registrar dados técnicos de acesso (como endereço IP, data,
        horário e navegador) para fins de segurança e funcionamento.
      </p>

      <h2>2. Dados fornecidos no atendimento</h2>
      <p>
        Ao clicar nos botões de contato, você é direcionado ao WhatsApp, serviço de terceiros com política de
        privacidade própria. Nas conversas, podemos receber seu nome, telefone, curso, instituição, etapa do trabalho e
        prazos — informações usadas exclusivamente para entender sua necessidade, elaborar a proposta e prestar o
        acompanhamento contratado.
      </p>
      <p>Pedimos que não sejam enviados dados sensíveis desnecessários ao atendimento.</p>

      <h2>3. Finalidades e bases legais</h2>
      <ul>
        <li>Responder a solicitações e elaborar propostas (procedimentos preliminares a contrato).</li>
        <li>Prestar os serviços contratados (execução de contrato).</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2>4. Compartilhamento</h2>
      <p>
        Os dados não são vendidos. Podem ser compartilhados apenas com profissionais envolvidos no seu acompanhamento e
        com prestadores de serviço necessários à operação, sob dever de confidencialidade.
      </p>

      <h2>5. Armazenamento e segurança</h2>
      <p>
        Os dados são mantidos pelo tempo necessário às finalidades descritas ou ao cumprimento de obrigações legais, com
        medidas razoáveis de segurança para protegê-los.
      </p>

      <h2>6. Seus direitos</h2>
      <p>
        Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos
        seus dados, entre outros direitos previstos no art. 18 da LGPD, pelo e-mail{" "}
        <a className="link-underline text-ink-2" href={`mailto:${siteConfig.email.contact}`}>
          {siteConfig.email.contact}
        </a>
        .
      </p>

      <h2>7. Controlador e contato</h2>
      <p>
        Controlador: {siteConfig.legalName ?? "[razão social a confirmar]"}
        {siteConfig.cnpj ? `, CNPJ ${siteConfig.cnpj}` : ", CNPJ [a confirmar]"}. Encarregado pelo tratamento de dados:
        [a definir].
      </p>
    </LegalPage>
  );
}
