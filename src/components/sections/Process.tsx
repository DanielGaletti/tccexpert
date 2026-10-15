import { process } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Process() {
  return (
    <section id="como-funciona" aria-labelledby="processo-title" className="on-dark bg-brand-deep py-section text-white/80">
      <div className="container-x">
        <SectionHeading kicker={process.kicker} id="processo-title" className="max-w-2xl [&_h2]:text-white">
          {process.title}
        </SectionHeading>

        <ol className="relative mt-14 grid gap-4 lg:grid-cols-5 lg:gap-5">
          {process.steps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ ["--reveal-i" as string]: i }}
              className="group relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/50 hover:bg-white/[0.07] active:scale-[0.98] lg:flex-col lg:p-6"
            >
              <span className="relative inline-flex size-12 flex-none items-center justify-center rounded-full border-2 border-orange font-display text-lg font-extrabold text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-brand-deep">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-12 flex flex-col gap-5 rounded-2xl bg-white/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="font-display text-xl font-bold text-white">{process.closing}</p>
          <WhatsAppLink source="process" className="btn btn-wa self-start sm:self-auto">
            <WhatsAppIcon />
            Conversar com especialista
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
