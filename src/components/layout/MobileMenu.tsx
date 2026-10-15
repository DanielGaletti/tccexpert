"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site-content";
import { whatsappHref } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = [buttonRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a")].filter(
          (el): el is HTMLElement => el !== null,
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 -mr-2 inline-flex size-12 items-center justify-center rounded-lg text-brand transition-colors hover:bg-cream active:scale-95"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[4.75rem] bottom-0 z-40 overflow-y-auto border-t border-rule bg-white"
      >
        <nav aria-label="Menu móvel" className="container-x flex min-h-full flex-col py-8">
          <ol className="divide-y divide-rule border-y border-rule">
            {/* Cada item entra com um pequeno atraso para o menu abrir de forma suave. */}
            {nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className="row-hover flex animate-panel-in items-baseline gap-4 py-5 pl-4 font-display text-2xl font-semibold text-brand active:bg-cream"
                >
                  <span aria-hidden="true" className="w-6 font-sans text-sm font-medium text-orange-text tabular-nums">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-auto animate-panel-in pt-10 [animation-delay:250ms]">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-source="mobile_menu"
              data-wa-topic="default"
              onClick={close}
              className="btn btn-wa w-full"
            >
              <WhatsAppIcon />
              Conversar com um especialista
            </a>
            <p className="mt-4 text-center text-sm text-muted">
              ou escreva para{" "}
              <a className="link-underline" href={`mailto:${siteConfig.email.contact}`}>
                {siteConfig.email.contact}
              </a>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
