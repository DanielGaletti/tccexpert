import Image from "next/image";
import logo from "../../../public/brand/logo.webp";
import icon from "../../../public/brand/logo-icon.png";
import { siteConfig } from "@/config/site";

/** Logo oficial da TCC Expert. Em fundos escuros usa o ícone com o nome em branco. */
export function Logo({ tone = "light", priority = false }: { tone?: "light" | "dark"; priority?: boolean }) {
  if (tone === "dark") {
    return (
      <span className="inline-flex items-center gap-3">
        <Image src={icon} alt="" width={40} height={52} className="h-12 w-auto" />
        <span className="leading-none">
          <span className="block font-display text-[1.375rem] font-extrabold tracking-[-0.02em] text-white">
            TCC Expert
          </span>
          <span className="mt-1 block text-[0.8125rem] tracking-wide text-white/70">Soluções Acadêmicas</span>
        </span>
      </span>
    );
  }
  return (
    <Image
      src={logo}
      alt={`${siteConfig.name} Soluções Acadêmicas`}
      priority={priority}
      sizes="160px"
      className="h-11 w-auto sm:h-12"
    />
  );
}
