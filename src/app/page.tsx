import { siteConfig } from "@/config/site";
import { faq, services } from "@/content/site-content";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Audience } from "@/components/sections/Audience";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Process } from "@/components/sections/Process";
import { Originality } from "@/components/sections/Originality";
import { Feedbacks } from "@/components/sections/Feedbacks";
import { Reasons } from "@/components/sections/Reasons";
import { About } from "@/components/sections/About";
import { Commitment } from "@/components/sections/Commitment";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      email: siteConfig.email.contact,
      taxID: siteConfig.cnpj ?? undefined,
      sameAs: Object.values(siteConfig.social).filter(Boolean),
      foundingDate: String(siteConfig.trust.foundedYear),
      areaServed: { "@type": "Country", name: "Brasil" },
      availableLanguage: "pt-BR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de assessoria acadêmica",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
          },
        })),
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
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Highlights />
      <Audience />
      <ServicesSection />
      <Process />
      <Originality />
      <Feedbacks />
      <Reasons />
      <About />
      <Commitment />
      <Faq />
      <FinalCta />
    </>
  );
}
