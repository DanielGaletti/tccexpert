import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { disclaimer } from "@/content/site-content";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const footerNav = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos/" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Feedbacks", href: "/#feedbacks" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Perguntas frequentes", href: "/#duvidas" },
];

const socialLabels: Record<keyof typeof siteConfig.social, string> = {
  instagram: "Instagram @_tccexpert",
  linkedin: "LinkedIn",
  youtube: "YouTube",
};

const linkClass =
  "inline-block py-0.5 transition-all duration-200 hover:translate-x-1 hover:text-orange";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 font-sans text-xs font-semibold tracking-[0.14em] text-orange uppercase">{children}</h2>;
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials = (Object.keys(siteConfig.social) as (keyof typeof siteConfig.social)[]).filter(
    (k) => siteConfig.social[k],
  );

  return (
    <footer className="on-dark bg-brand-deep text-[0.9375rem] text-white/75">
      <div className="container-x pt-16 pb-10 sm:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-6 max-w-[36ch] leading-relaxed">
              Assessoria e orientação acadêmica online desde {siteConfig.trust.foundedYear}, para estudantes de
              graduação e pós em todo o Brasil.
            </p>
            <WhatsAppLink source="footer" className="btn btn-wa mt-6 min-h-11 px-5 py-2.5 text-[0.9375rem]">
              <WhatsAppIcon className="size-[1.1rem]" />
              Conversar com especialista
            </WhatsAppLink>
          </div>

          <nav aria-labelledby="footer-nav" className="lg:col-span-2">
            <ColumnTitle>
              <span id="footer-nav">Navegação</span>
            </ColumnTitle>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-1 lg:col-span-3">
            <ColumnTitle>Atendimento</ColumnTitle>
            <ul className="space-y-2.5">
              <li>
                <WhatsAppLink source="footer" className={linkClass}>
                  WhatsApp
                </WhatsAppLink>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email.contact}`} className={`${linkClass} break-all`}>
                  {siteConfig.email.contact}
                </a>
              </li>
              {siteConfig.businessHours && <li>{siteConfig.businessHours}</li>}
              {socials.map((key) => (
                <li key={key}>
                  <a href={siteConfig.social[key] ?? undefined} className={linkClass} rel="noopener noreferrer" target="_blank">
                    {socialLabels[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <ColumnTitle>Informações legais</ColumnTitle>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacidade/" className={linkClass}>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos/" className={linkClass}>
                  Termos de Uso
                </Link>
              </li>
              {siteConfig.legalName && <li>{siteConfig.legalName}</li>}
              {siteConfig.cnpj && <li className="whitespace-nowrap">CNPJ {siteConfig.cnpj}</li>}
            </ul>
          </div>
        </div>

        <p className="mt-14 max-w-[90ch] rounded-xl bg-white/[0.05] p-5 text-sm leading-relaxed text-white/70">
          <strong className="font-semibold text-white">Atenção:</strong> {disclaimer}
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <a
            href="#topo"
            className="group inline-flex items-center gap-2 self-start py-2 transition-colors hover:text-orange sm:self-auto"
          >
            Voltar ao topo
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
