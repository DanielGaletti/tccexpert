import { process } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Process() {
  return (
    <section id="como-funciona" aria-labelledby="processo-title" className="on-dark bg-ink py-section text-paper/80">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 [&_h2]:text-paper">
            <SectionHeading index="03" kicker={process.kicker} id="processo-title">
              {process.title}
            </SectionHeading>
          </div>
        </div>

        <ol className="mt-16 grid gap-0 border-t border-paper/20 lg:mt-20 lg:grid-cols-5">
          {process.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[3.5rem_1fr] gap-x-4 border-b border-paper/15 py-8 lg:block lg:border-b-0 lg:border-l lg:px-6 lg:pt-10 lg:pb-2 lg:first:border-l-0 lg:first:pl-0"
            >
              <span aria-hidden="true" className="font-serif text-4xl leading-none text-gold lg:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-10">
                <h3 className="text-xl leading-snug text-paper lg:text-[1.375rem]">{step.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[48ch] font-serif text-xl leading-snug text-paper italic">
            O primeiro passo é só uma conversa. Você decide depois.
          </p>
          <WhatsAppLink source="process" className="btn btn-light self-start sm:self-auto">
            <WhatsAppIcon />
            Iniciar pelo WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
