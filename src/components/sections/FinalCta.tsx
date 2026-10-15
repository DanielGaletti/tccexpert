import Image from "next/image";
import icon from "../../../public/brand/logo-icon.png";
import { finalCta } from "@/content/site-content";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FinalCta({ spacing = "pb-section" }: { spacing?: string }) {
  return (
    <section aria-labelledby="cta-title" className={`bg-cream ${spacing}`}>
      <div className="container-x">
        <div
          data-reveal
          className="on-dark relative overflow-hidden rounded-3xl bg-brand px-6 py-12 text-white/85 sm:px-12 sm:py-16 lg:px-16"
        >
          <Image
            src={icon}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -bottom-10 hidden w-56 opacity-90 md:block lg:w-64"
          />
          <div className="relative max-w-2xl">
            <h2 id="cta-title" className="text-h2 text-white">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-lead">{finalCta.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <WhatsAppLink source="final_cta" className="btn btn-wa">
                <WhatsAppIcon />
                {finalCta.button}
              </WhatsAppLink>
              <p className="text-sm text-white/75">{finalCta.microcopy}</p>
            </div>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] text-white/80 transition-colors hover:text-white"
              >
                <InstagramIcon className="size-5 text-orange" />
                Acompanhe a TCC Expert no Instagram
                <span className="font-semibold text-white">{siteConfig.instagramHandle}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
