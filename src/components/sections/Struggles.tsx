import { struggles } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Struggles() {
  return (
    <section aria-labelledby="dificuldades-title" className="py-section">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading index="01" kicker={struggles.kicker} id="dificuldades-title">
            {struggles.title}
          </SectionHeading>
          <p className="mt-6 max-w-[46ch] text-graphite">{struggles.body}</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="border-t border-ink">
            {struggles.items.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-6 sm:grid-cols-[3.5rem_1fr]">
                <span aria-hidden="true" className="font-serif text-xl text-gold-text tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-h3">{item.title}</h3>
                  <p className="mt-1.5 text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 font-serif text-2xl leading-snug text-ink italic sm:text-[1.75rem]">{struggles.closing}</p>
        </div>
      </div>
    </section>
  );
}
