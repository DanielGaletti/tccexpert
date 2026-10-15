import { LifeBuoy, MessageCircle, Sparkles, UserCheck } from "lucide-react";
import { reasons } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [UserCheck, Sparkles, MessageCircle, LifeBuoy];

export function Reasons() {
  return (
    <section id="por-que" aria-labelledby="porque-title" className="bg-white py-section">
      <div className="container-x">
        <SectionHeading kicker={reasons.kicker} id="porque-title" align="center" className="max-w-2xl">
          {reasons.title}
        </SectionHeading>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.items.map((item, i) => {
            const Icon = icons[i] ?? UserCheck;
            return (
              <li
                key={item.title}
                data-reveal
                style={{ ["--reveal-i" as string]: i }}
                className="group rounded-xl border border-rule p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange hover:shadow-[0_20px_40px_-26px_rgba(242,107,33,0.6)] active:scale-[0.98]"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand text-white transition-all duration-300 group-hover:bg-orange group-hover:text-brand-deep">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-h3">{item.title}</h3>
                <p className="mt-2 text-[0.975rem] text-muted">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
