import Image from "next/image";
import icon from "../../../public/brand/logo-icon.png";
import { finalCta } from "@/content/site-content";
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
          </div>
        </div>
      </div>
    </section>
  );
}
