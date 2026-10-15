import Link from "next/link";
import { nav } from "@/content/site-content";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Pular para o conteúdo
      </a>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="-m-2 p-2">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[0.9375rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={`/${item.href}`}
                  className="py-2 text-graphite transition-colors hover:text-ink-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink source="header" className="btn btn-primary hidden min-h-11 px-5 py-2.5 text-[0.9375rem] sm:inline-flex">
            <WhatsAppIcon className="size-[1.1rem]" />
            Falar com especialista
          </WhatsAppLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
