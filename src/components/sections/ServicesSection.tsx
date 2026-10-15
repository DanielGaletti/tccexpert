import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workTypes } from "@/content/site-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesTabs } from "./ServicesTabs";

export function ServicesSection() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-cream py-section">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <SectionHeading kicker="Serviços" id="servicos-title" className="lg:col-span-7">
            Como podemos ajudar no seu trabalho
          </SectionHeading>
          <div data-reveal className="lg:col-span-5 lg:text-right">
            <p className="text-ink lg:ml-auto lg:max-w-[42ch]">Orientamos {workTypes}.</p>
            <Link href="/servicos/" className="btn btn-secondary mt-5">
              Conheça nossos serviços
              <ArrowRight className="arrow size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div data-reveal className="mt-12">
          <ServicesTabs />
        </div>
      </div>
    </section>
  );
}
