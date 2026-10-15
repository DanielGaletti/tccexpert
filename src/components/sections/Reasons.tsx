import { reasons } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reasons() {
  return (
    <section id="por-que" aria-labelledby="porque-title" className="py-section">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading index="04" kicker={reasons.kicker} id="porque-title">
            {reasons.statement}
          </SectionHeading>
        </div>

        <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:pt-14">
          {reasons.items.map((item, i) => (
            <div
              key={item.title}
              className={`border-t border-rule py-7 ${i === reasons.items.length - 1 ? "sm:col-span-2 sm:border-t-2 sm:border-ink" : ""}`}
            >
              <dt className="font-serif text-[1.375rem] leading-snug text-ink">{item.title}</dt>
              <dd className="mt-2 text-graphite">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
