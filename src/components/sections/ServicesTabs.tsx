"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { services } from "@/content/site-content";
import { serviceImages } from "@/content/service-images";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/**
 * Lista clicável de serviços. No desktop o detalhe aparece ao lado; no celular,
 * logo abaixo do item escolhido. Cada troca anima a entrada do painel.
 */
export function ServicesTabs() {
  const [activeId, setActiveId] = useState(services[0]?.id ?? "");
  const active = services.find((s) => s.id === activeId) ?? services[0];
  if (!active) return null;

  const panel = (s: typeof active, inline: boolean) => {
    const image = serviceImages[s.icon];
    return (
      <div key={`${s.id}-${inline}`} className="animate-panel-in overflow-hidden rounded-3xl bg-white shadow-[0_24px_48px_-28px_rgba(18,21,66,0.4)]">
        <div className="relative overflow-hidden">
          <Image src={image.src} alt={image.alt} sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[16/8] w-full object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <h3 className="text-h3">{s.name}</h3>
          <p className="mt-3 text-ink">{s.description}</p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {s.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-ink">
                <span className="mt-0.5 inline-flex size-5 flex-none items-center justify-center rounded-full bg-orange-soft text-orange-text">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <WhatsAppLink source="service" topic={s.topic} className="btn btn-wa mt-7 w-full sm:w-auto">
            <WhatsAppIcon />
            Quero saber mais
            <span className="sr-only"> sobre {s.name}</span>
          </WhatsAppLink>
        </div>
      </div>
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <ul className="space-y-3 lg:col-span-5">
        {services.map((s) => {
          const isActive = s.id === active.id;
          return (
            <li key={s.id}>
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={`servico-${s.id}`}
                data-active={isActive}
                onClick={() => setActiveId(s.id)}
                className={`row-hover group flex w-full items-center gap-4 rounded-2xl border p-4 pl-5 text-left transition-all sm:p-5 sm:pl-6 ${
                  isActive
                    ? "border-transparent bg-white shadow-[0_18px_36px_-24px_rgba(18,21,66,0.45)]"
                    : "border-rule bg-transparent hover:border-transparent hover:bg-white"
                }`}
              >
                <span
                  className={`inline-flex size-11 flex-none items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive ? "bg-orange text-brand-deep" : "bg-orange-soft text-orange-text group-hover:scale-105"
                  }`}
                >
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[1.0625rem] font-bold text-brand">{s.name}</span>
                  <span className="mt-0.5 block text-[0.9375rem] leading-snug text-muted">{s.short}</span>
                </span>
                <ChevronRight
                  aria-hidden="true"
                  className={`size-5 flex-none text-orange-text transition-transform duration-300 ${
                    isActive ? "rotate-90 lg:rotate-0 lg:translate-x-1" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
              {isActive && (
                <div id={`servico-${s.id}`} className="mt-3 lg:hidden">
                  {panel(s, true)}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:col-span-7 lg:block" aria-live="polite">
        {panel(active, false)}
      </div>
    </div>
  );
}
