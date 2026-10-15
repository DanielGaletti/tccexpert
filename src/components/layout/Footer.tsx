import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { disclaimer } from "@/content/site-content";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const footerNav = [
  { label: "Início", href: "/#topo" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Perguntas frequentes", href: "/#duvidas" },
];

const socialLabels: Record<keyof typeof siteConfig.social, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-sans text-xs font-medium tracking-[0.16em] text-gold uppercase">{children}</h2>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials = (Object.keys(siteConfig.social) as (keyof typeof siteConfig.social)[]).filter(
    (k) => siteConfig.social[k],
  );

  return (
    <footer className="on-dark bg-ink-deep text-[0.9375rem] text-paper/75">
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-4">
            <Logo tone="paper" />
            <p className="mt-6 max-w-[34ch] leading-relaxed">
              Assessoria e orientação acadêmica online para estudantes de graduação e pós-graduação — do projeto de
              pesquisa à banca.
            </p>
          </div>

          <nav aria-labelledby="footer-nav" className="lg:col-span-2 lg:col-start-6">
            <ColumnTitle>
              <span id="footer-nav">Navegação</span>
            </ColumnTitle>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-1 lg:col-span-3">
            <ColumnTitle>Atendimento</ColumnTitle>
            <ul className="space-y-3">
              <li>
                <WhatsAppLink source="footer" className="link-underline text-paper">
                  WhatsApp
                </WhatsAppLink>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email.contact}`} className="link-underline break-all">
                  {siteConfig.email.contact}
                </a>
              </li>
              {siteConfig.businessHours && <li>{siteConfig.businessHours}</li>}
              {socials.map((key) => (
                <li key={key}>
                  <a href={siteConfig.social[key] ?? undefined} className="link-underline" rel="noopener noreferrer" target="_blank">
                    {socialLabels[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <ColumnTitle>Informações legais</ColumnTitle>
            <ul className="space-y-3">
              <li>
                <Link href="/privacidade/" className="transition-colors hover:text-paper">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos/" className="transition-colors hover:text-paper">
                  Termos de Uso
                </Link>
              </li>
              {siteConfig.legalName && <li>{siteConfig.legalName}</li>}
              {siteConfig.cnpj && <li>CNPJ {siteConfig.cnpj}</li>}
            </ul>
          </div>
        </div>

        <p className="mt-16 max-w-[80ch] border-l border-gold/60 pl-5 text-sm leading-relaxed text-paper/70">
          {disclaimer}
        </p>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/15 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
            <span className="hidden sm:inline"> · {siteConfig.tagline}.</span>
          </p>
          <a href="#topo" className="inline-flex items-center gap-2 self-start py-2 transition-colors hover:text-paper sm:self-auto">
            Voltar ao topo
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
