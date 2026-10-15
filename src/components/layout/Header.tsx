import Link from "next/link";
import { nav } from "@/content/site-content";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-white">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <div className="container-x flex h-[4.75rem] items-center justify-between gap-6">
        <Link href="/" className="-m-1 rounded-md p-1 transition-opacity hover:opacity-85" aria-label="TCC Expert, página inicial">
          <Logo priority />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.9375rem] font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative block rounded-md px-3.5 py-2 text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink source="header" className="btn btn-wa hidden min-h-11 px-5 py-2.5 text-[0.9375rem] sm:inline-flex">
            <WhatsAppIcon className="size-[1.1rem]" />
            Falar com especialista
          </WhatsAppLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
