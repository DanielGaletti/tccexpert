import { CircleCheck, ShieldCheck } from "lucide-react";
import { commitment } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Commitment() {
  return (
    <section id="compromisso" aria-labelledby="compromisso-title" className="bg-white py-section">
      <div className="container-x">
        <div className="grid gap-10 rounded-3xl bg-brand-soft p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
          <div className="lg:col-span-5">
            <span className="inline-flex size-14 items-center justify-center rounded-xl bg-brand text-white">
              <ShieldCheck className="size-7" aria-hidden="true" />
            </span>
            <SectionHeading kicker={commitment.kicker} id="compromisso-title" className="mt-6">
              {commitment.title}
            </SectionHeading>
            <p data-reveal className="mt-5 text-ink">
              {commitment.intro}
            </p>
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {commitment.clauses.map((c, i) => (
              <li
                key={c}
                data-reveal
                style={{ ["--reveal-i" as string]: i }}
                className="row-hover flex items-start gap-3 rounded-xl bg-white p-4 pl-5 text-ink hover:shadow-[0_14px_28px_-20px_rgba(18,21,66,0.45)]"
              >
                <CircleCheck className="mt-0.5 size-5 flex-none text-orange-text" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
