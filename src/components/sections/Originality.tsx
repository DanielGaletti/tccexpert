import Image from "next/image";
import { BadgeCheck, FileSearch, UserCheck } from "lucide-react";
import photo from "../../../public/images/livros-anotacoes.webp";
import { originality } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const icons = [FileSearch, BadgeCheck, UserCheck];

export function Originality() {
  return (
    <section aria-labelledby="originalidade-title" className="bg-white py-section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading kicker={originality.kicker} id="originalidade-title">
            {originality.title}
          </SectionHeading>
          <p data-reveal className="mt-5 max-w-[56ch] text-lead text-ink">
            {originality.text}
          </p>
          <ul className="mt-8 space-y-3">
            {originality.points.map((p, i) => {
              const Icon = icons[i] ?? BadgeCheck;
              return (
                <li
                  key={p.title}
                  data-reveal
                  style={{ ["--reveal-i" as string]: i }}
                  className="row-hover group flex items-center gap-4 rounded-xl p-3 pl-5 hover:bg-cream"
                >
                  <span className="inline-flex size-11 flex-none items-center justify-center rounded-lg bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display font-semibold text-brand">{p.title}</span>
                    <span className="block text-[0.9375rem] text-muted">{p.text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <WhatsAppLink source="originality" className="btn btn-wa mt-8">
            <WhatsAppIcon />
            Conversar com especialista
          </WhatsAppLink>
        </div>

        <div data-reveal className="relative lg:col-span-6">
          <Image
            src={photo}
            alt="Livros abertos com anotações feitas à mão"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl bg-white p-4 pr-6 shadow-[0_20px_40px_-20px_rgba(18,21,66,0.4)]">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-orange text-brand-deep">
              <BadgeCheck className="size-6" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display font-semibold text-brand">Laudo de originalidade</span>
              <span className="text-sm text-muted">incluso na entrega</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
