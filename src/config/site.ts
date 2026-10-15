/**
 * Configuração central da TCC Expert.
 *
 * Tudo o que é dado comercial fica aqui. Valores marcados com `PENDENTE`
 * ainda precisam ser confirmados pela empresa antes da publicação oficial.
 * Campos `null` são omitidos automaticamente do site (nada fictício é exibido).
 */

export type Pending<T> = { value: T; verified: boolean };

export const siteConfig = {
  name: "TCC Expert",
  legalName: null as string | null, // PENDENTE: razão social
  cnpj: null as string | null, // PENDENTE: CNPJ
  description:
    "Assessoria e orientação acadêmica para TCC, artigos científicos, projetos de pesquisa e revisão ABNT. Atendimento individual e online, do tema à banca.",
  tagline: "Assessoria e orientação acadêmica",

  /** URL pública definitiva. Usada em canonical, sitemap e Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tccexpert.com",

  /**
   * Enquanto `true`, o site pede aos buscadores que não indexem esta versão
   * (evita conteúdo duplicado com o site atual durante a validação).
   */
  isPreview: process.env.NEXT_PUBLIC_PREVIEW !== "false",

  locale: "pt_BR",

  whatsapp: {
    /**
     * PENDENTE: número oficial no formato internacional, só dígitos
     * (ex.: "55DDXXXXXXXXX"). Enquanto `null`, os botões abrem o WhatsApp
     * com a mensagem pronta e o visitante escolhe o contato — o link funciona,
     * mas não leva à empresa. Preencha antes de publicar.
     */
    number: null as string | null,
    messages: {
      default:
        "Olá! Conheci a TCC Expert pelo site e gostaria de saber mais sobre a assessoria acadêmica.",
      tcc: "Olá! Gostaria de informações sobre orientação para meu TCC.",
      revisao: "Olá! Gostaria de saber mais sobre revisão acadêmica.",
      artigo: "Olá! Preciso de orientação para um artigo científico.",
      projeto: "Olá! Gostaria de ajuda com meu projeto de pesquisa.",
      abnt: "Olá! Preciso de ajuda com a normalização do meu trabalho (ABNT).",
      metodologia: "Olá! Gostaria de orientação metodológica para minha pesquisa.",
      estrutura: "Olá! Preciso de ajuda para organizar e estruturar minha pesquisa.",
      banca: "Olá! Gostaria de me preparar para a apresentação na banca.",
    },
  },

  /** Encontrados no site atual (tccexpert.com). Confirmar qual é o canal oficial. */
  email: {
    contact: "contato@tccexpert.com",
    support: "suporte@tccexpert.com",
  },

  /** PENDENTE: horário de atendimento. `null` = não exibido. */
  businessHours: null as string | null,

  /** PENDENTE: perfis oficiais. Só os preenchidos aparecem no rodapé. */
  social: {
    instagram: null as string | null,
    linkedin: null as string | null,
    youtube: null as string | null,
  },

  /** PENDENTE: link público do perfil no Google (avaliações verificáveis). */
  googleReviewsUrl: null as string | null,

  /**
   * Integrações opcionais. Nada é carregado enquanto o ID estiver `null`.
   * Atenção (LGPD): ao ativar GA4/GTM/Pixel, implemente consentimento de
   * cookies antes de publicar.
   */
  analytics: {
    gtmId: null as string | null,
    ga4Id: null as string | null,
    metaPixelId: null as string | null,
    searchConsoleVerification: null as string | null,
  },
} as const;

export type WhatsAppTopic = keyof typeof siteConfig.whatsapp.messages;
