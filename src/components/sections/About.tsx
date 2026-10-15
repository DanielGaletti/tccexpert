import { about } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-paper-2 py-section">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <SectionHeading index="05" kicker={about.kicker} id="sobre-title">
            {about.title}
          </SectionHeading>
          <div className="mt-10 max-w-[62ch] space-y-5 text-[1.0625rem] text-graphite sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={p} className={i === 0 ? "dropcap" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <aside aria-label="Em resumo" className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <p className="font-serif text-xl text-ink italic">Em resumo</p>
          <dl className="mt-4 border-t-2 border-ink">
            {about.facts.map((f) => (
              <div key={f.label} className="flex items-baseline gap-3 border-b border-rule py-4">
                <dt className="text-sm tracking-[0.08em] text-muted uppercase">{f.label}</dt>
                <span aria-hidden="true" className="leader" />
                <dd className="text-right text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
