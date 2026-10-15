import { siteConfig } from "@/config/site";

/**
 * Wordmark tipográfico provisório.
 * PENDENTE: substituir pelo logotipo oficial em SVG quando for fornecido.
 */
export function Logo({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const color = tone === "ink" ? "text-ink" : "text-paper";
  return (
    <span className={`inline-flex items-baseline gap-2 ${color}`}>
      <span className="font-serif text-[1.65rem] leading-none font-medium tracking-[-0.02em]">TCC</span>
      <span aria-hidden="true" className="h-4 w-px translate-y-0.5 bg-gold" />
      <span className="text-[0.8125rem] font-medium uppercase tracking-[0.22em]">Expert</span>
      <span className="sr-only">{siteConfig.name} — página inicial</span>
    </span>
  );
}
