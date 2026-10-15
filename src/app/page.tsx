import { siteConfig } from "@/config/site";
import { faq, services } from "@/content/site-content";
import { Hero } from "@/components/sections/Hero";
import { Struggles } from "@/components/sections/Struggles";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Reasons } from "@/components/sections/Reasons";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Commitment } from "@/components/sections/Commitment";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

/** Dados estruturados: somente informações publicadas no próprio site. */
function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email.contact,
      areaServed: { "@type": "Country", name: "Brasil" },
      availableLanguage: "pt-BR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de assessoria acadêmica",
        itemListElement: services
          .filter((s) => s.confirmed)
          .map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, description: s.description } })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      // JSON gerado no build a partir de conteúdo estático do próprio repositório.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Struggles />
      <Services />
      <Process />
      <Reasons />
      <About />
      <Testimonials />
      <Commitment />
      <Faq />
      <FinalCta />
    </>
  );
}
