import Image from "next/image";
import photo from "../../../public/images/biblioteca.webp";
import { about, stats } from "@/content/site-content";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-cream py-section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="relative lg:col-span-6">
          <Image
            src={photo}
            alt="Biblioteca com estantes de livros do chão ao teto"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <div className="absolute -top-5 right-3 rounded-xl bg-orange px-5 py-4 text-brand-deep shadow-lg sm:-right-5">
            <span className="block text-xs font-semibold tracking-[0.12em] uppercase">Desde</span>
            <span className="block font-display text-3xl leading-none font-semibold">{siteConfig.trust.foundedYear}</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <SectionHeading kicker={about.kicker} id="sobre-title">
            {about.title}
          </SectionHeading>
          <div data-reveal className="mt-6 space-y-4 text-ink">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl data-reveal className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="min-w-0 rounded-xl bg-white px-2 py-4 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-4"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-xl font-bold whitespace-nowrap text-orange-deep sm:text-3xl">{s.value}</dd>
                <dd aria-hidden="true" className="mt-1 text-xs text-muted sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
