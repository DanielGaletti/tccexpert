import { commitment } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const roman = ["I", "II", "III", "IV", "V", "VI"];

export function Commitment() {
  return (
    <section id="compromisso" aria-labelledby="compromisso-title" className="bg-white py-section">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SectionHeading index="07" kicker={commitment.kicker} id="compromisso-title">
            {commitment.title}
          </SectionHeading>
        </div>

        {/* Composição de termo: moldura de fio duplo, cláusulas em numeração romana */}
        <div className="border-4 border-double border-ink/80 p-6 sm:p-10 lg:col-span-7 lg:col-start-6 lg:p-14">
          <p className="text-center text-xs tracking-[0.2em] text-muted uppercase">Termo de compromisso</p>
          <ol className="mt-8 space-y-6">
            {commitment.clauses.map((c, i) => (
              <li
                key={c}
                className="grid grid-cols-[2.75rem_1fr] items-baseline gap-3 border-b border-rule pb-6 last:border-0 last:pb-0"
              >
                <span aria-hidden="true" className="font-serif text-lg text-gold-text">
                  {roman[i]}.
                </span>
                <p className="font-serif text-xl leading-snug text-ink sm:text-[1.375rem]">{c}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
