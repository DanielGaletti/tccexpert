import { siteConfig, type WhatsAppTopic } from "@/config/site";

/**
 * Conteúdo do site, separado da apresentação.
 * Regra de redação: frases diretas, sem travessões e sem termos rebuscados.
 * `confirmed: false` = item proposto que a TCC Expert ainda precisa validar.
 */

const { trust } = siteConfig;
const years = new Date().getFullYear() - trust.foundedYear;

export const nav = [
  { label: "Serviços", href: "/servicos/" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Feedbacks", href: "/#feedbacks" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Dúvidas", href: "/#duvidas" },
] as const;

export const hero = {
  eyebrow: "Assessoria e orientação acadêmica",
  titleStart: "Seu TCC do tema à banca, com orientação de",
  titleHighlight: "especialistas.",
  lead: "Ajudamos estudantes de graduação e pós a organizar a pesquisa, escrever com segurança e chegar preparados na apresentação. Você conta sua situação pelo WhatsApp e recebe uma proposta feita para o seu caso.",
  primaryCta: "Conversar com um especialista",
  secondaryCta: "Conheça nossos serviços",
  reassurance: ["Online em todo o Brasil", "Proposta sem compromisso", "Empresa registrada"],
  /** Trecho de um feedback real (ver `testimonials`), exibido sobre a foto do Hero. */
  quote: { text: "Consegui nota 9,5!", author: "Tamires", context: "aluna de TCC" },
};

export const stats = [
  { value: `+${years}`, label: "anos orientando estudantes" },
  { value: trust.studentsLabel, label: "alunos orientados" },
  { value: trust.projectsLabel, label: "projetos acompanhados" },
];

/** Itens da faixa em movimento abaixo do Hero. */
export const highlights = [
  `Desde ${trust.foundedYear}`,
  `${trust.universitiesLabel} universidades atendidas`,
  "Excelência em escrita acadêmica",
  "Altíssimo índice de aprovação",
  `${trust.studentsLabel} alunos orientados`,
  "Laudo de originalidade",
  "Graduação e pós-graduação",
  "Atendimento em todo o Brasil",
];

/** Números da seção Sobre (complementam os do Hero, sem repetir todos). */
export const aboutStats = [
  { value: trust.universitiesLabel, label: "universidades atendidas" },
  { value: "100%", label: "atendimento online" },
  { value: trust.projectsLabel, label: "projetos acompanhados" },
];

export const audience = {
  kicker: "Para quem é",
  title: "A TCC Expert é para você que",
  items: [
    {
      icon: "layers",
      title: "Está com a vida acadêmica pesada",
      text: "Disciplinas, estágio e TCC ao mesmo tempo. Ajudamos a organizar as prioridades.",
    },
    {
      icon: "clock",
      title: "Precisa ganhar tempo no TCC",
      text: "Com um plano claro de etapas, você para de reescrever e passa a avançar.",
    },
    {
      icon: "briefcase",
      title: "Trabalha e estuda",
      text: "Atendimento online e conversa direta pelo WhatsApp, no horário que cabe na sua rotina.",
    },
    {
      icon: "compass",
      title: "Não sabe por onde começar",
      text: "Tema, problema de pesquisa, objetivos e metodologia. Começamos do ponto em que você está.",
    },
  ],
  closing: "Entendemos esses desafios. Converse com a nossa equipe e veja como podemos ajudar.",
};

export type Service = {
  id: string;
  name: string;
  icon: "mentoria" | "revisao" | "formatacao" | "projetos";
  short: string;
  description: string;
  includes: string[];
  forWho: string;
  topic: WhatsAppTopic;
};

/** As quatro frentes de atendimento da TCC Expert. */
export const services: Service[] = [
  {
    id: "mentoria",
    name: "Mentoria acadêmica",
    icon: "mentoria",
    short: "Acompanhamento do TCC, monografia, dissertação ou tese, do tema à banca.",
    description:
      "Um especialista da sua área acompanha o trabalho em todas as etapas, sempre respeitando as regras da sua instituição e as orientações do seu professor.",
    includes: [
      "Escolha e delimitação do tema",
      "Estrutura dos capítulos",
      "Orientação metodológica",
      "Preparação para a apresentação e a banca",
    ],
    forWho: "Para quem quer ter alguém ao lado durante todo o trabalho.",
    topic: "tcc",
  },
  {
    id: "revisao",
    name: "Revisão acadêmica",
    icon: "revisao",
    short: "Texto claro, coeso e na linguagem científica, pronto para o orientador.",
    description:
      "Leitura cuidadosa do seu texto com foco em gramática, clareza, coesão e argumentação, com sugestões comentadas para você entender cada ajuste.",
    includes: [
      "Correção gramatical e ortográfica",
      "Coesão e coerência entre capítulos",
      "Adequação à linguagem acadêmica",
      "Verificação de originalidade com laudo",
    ],
    forWho: "Para quem já escreveu e quer entregar com mais segurança.",
    topic: "revisao",
  },
  {
    id: "formatacao",
    name: "Formatação acadêmica",
    icon: "formatacao",
    short: "Seu trabalho nas normas ABNT, APA ou Vancouver, com rigor em cada detalhe.",
    description:
      "Adequamos o trabalho às normas exigidas pela sua instituição, cuidando de cada detalhe formal para você focar no conteúdo.",
    includes: [
      "Citações e referências",
      "Capa, sumário e listas",
      "Margens, fontes e espaçamento",
      "Elementos pré e pós-textuais",
    ],
    forWho: "Para quem não quer perder pontos por detalhes de formatação.",
    topic: "abnt",
  },
  {
    id: "projetos",
    name: "Projetos",
    icon: "projetos",
    short: "Projetos de pesquisa, pré-projetos de mestrado e doutorado e artigos científicos.",
    description:
      "Montamos com você um projeto consistente, que sustenta a pesquisa e ajuda na aprovação pelo orientador ou no processo seletivo. Também orientamos artigos para disciplinas, eventos e revistas.",
    includes: [
      "Problema, justificativa e objetivos",
      "Referencial teórico e metodologia",
      "Cronograma de pesquisa",
      "Artigos científicos e resumos",
    ],
    forWho: "Para quem está começando a pesquisa ou vai concorrer a uma vaga.",
    topic: "projeto",
  },
];

export const workTypes =
  "TCC, monografia, projeto de pesquisa, artigo, dissertação, tese, relatórios, resenhas e apresentações de slides";

export const process = {
  kicker: "Como funciona",
  title: "Como funciona o acompanhamento",
  steps: [
    {
      title: "Entre em contato",
      text: "Chame no WhatsApp e, em poucos minutos, um especialista conversa com você.",
    },
    {
      title: "Conte sua situação",
      text: "Você diz qual é o seu curso, o prazo de entrega e o tema do seu trabalho.",
    },
    {
      title: "Receba uma proposta",
      text: "Depois de entender o seu caso, enviamos uma proposta personalizada.",
    },
    {
      title: "Inicie a orientação",
      text: "Com a sua confirmação, começamos o acompanhamento do seu trabalho.",
    },
    {
      title: "Suporte contínuo",
      text: "Seguimos com você mesmo depois do retorno do orientador, até a etapa final.",
    },
  ],
  closing: "O primeiro passo é uma conversa, sem compromisso.",
};

export const originality = {
  kicker: "Originalidade",
  title: "Originalidade comprovada por laudo",
  text: "Levamos esse critério a sério. O material passa por verificação de originalidade com ferramentas como o CopySpider, e você recebe um laudo mostrando que o trabalho segue os critérios exigidos.",
  points: [
    { title: "Verificação com CopySpider", text: "Checagem de similaridade antes da entrega." },
    { title: "Laudo de originalidade", text: "Um documento para você ter segurança no envio." },
    { title: "Autoria do estudante", text: "Orientamos o caminho. O trabalho é seu." },
  ],
};

export type Testimonial = {
  author: string;
  context?: string;
  service?: string;
  quote: string;
  /** Print original da mensagem, publicado pela própria TCC Expert. */
  image?: string;
  sourceLabel?: string;
};

/**
 * Feedbacks reais publicados no site atual (prints de WhatsApp).
 * Transcrevemos o trecho principal em texto. PENDENTE: confirmar autorização de uso.
 */
export const testimonials: Testimonial[] = [
  {
    author: "Tamires",
    service: "Orientação para TCC",
    quote: "Passando aqui pra te agradecer por ter me ajudado no TCC. Consegui nota 9,5! Estou te indicando um amigo.",
    image: "feedbacks/tamires.webp",
    sourceLabel: "Mensagem pelo WhatsApp",
  },
  {
    author: "Paulo",
    context: "Engenharia Ambiental e Sanitária",
    service: "Orientação para TCC",
    quote: "Olha as notas do TCC: 9 e 9,5. Obrigadão!",
    image: "feedbacks/paulo.webp",
    sourceLabel: "Mensagem pelo WhatsApp",
  },
  {
    author: "Katia",
    service: "Orientação acadêmica",
    quote:
      "Obrigado pelo excelente trabalho. Estamos muito felizes com o serviço, comprometimento e confiabilidade. Já vou deixar salvo seu contato para a pós e a especialização.",
    image: "feedbacks/katia.webp",
    sourceLabel: "Mensagem pelo WhatsApp",
  },
];

export const reasons = {
  kicker: "Por que confiar",
  title: "O que você encontra na TCC Expert",
  items: [
    { title: "Especialista da sua área", text: "Quem orienta tem experiência no seu curso e no seu nível acadêmico." },
    { title: "Proposta feita para você", text: "Sem pacotes genéricos. O acompanhamento parte da sua etapa e do seu prazo." },
    { title: "Conversa direta", text: "Você fala com a equipe pelo WhatsApp, sem formulário longo e sem intermediário." },
    { title: "Suporte até o fim", text: "Seguimos com você depois do retorno do orientador, quando previsto na proposta." },
  ],
};

export const about = {
  kicker: "Sobre nós",
  title: `Mais de ${years} anos ajudando estudantes a concluir seus trabalhos`,
  paragraphs: [
    `A TCC Expert orienta estudantes desde ${trust.foundedYear}. Nesse tempo, acompanhamos ${trust.studentsLabel.replace("+", "mais de ")} alunos e ${trust.projectsLabel.replace("+", "mais de ")} projetos, de faculdades e universidades de todo o país.`,
    "Nosso trabalho é estar ao lado do aluno quando a pesquisa trava: ouvir, organizar as ideias e mostrar o próximo passo com método.",
    "Gostamos do que fazemos e levamos a sério a responsabilidade de orientar. Por isso a autoria do trabalho é sempre do estudante.",
  ],
};

export const commitment = {
  kicker: "Compromisso acadêmico",
  title: "Transparência sobre o que fazemos",
  intro:
    "Não criamos documentos falsos e não fazemos o trabalho no lugar do aluno. Nosso objetivo é a orientação acadêmica.",
  clauses: [
    "Nosso serviço é de orientação e assessoria acadêmica.",
    "A autoria e a entrega final do trabalho são do estudante.",
    "O acompanhamento não substitui o orientador nem as regras da sua instituição.",
    "Não prometemos nota: a avaliação é sempre da banca.",
    "Todo trabalho respeita as normas éticas e de integridade acadêmica.",
    "Suas informações e seu material são tratados com sigilo.",
  ],
};

export const faq = [
  {
    q: "Como funciona a assessoria acadêmica?",
    a: "Você conta pelo WhatsApp em que etapa está e do que precisa. Entendemos o seu curso e as regras da sua instituição, enviamos uma proposta personalizada e, com a sua confirmação, um especialista acompanha o trabalho.",
  },
  {
    q: "Quais trabalhos vocês orientam?",
    a: `Orientamos diversos formatos acadêmicos: ${workTypes}, entre outros.`,
  },
  {
    q: "Quais áreas vocês atendem?",
    a: "Atendemos alunos de diferentes cursos, áreas e níveis, da graduação ao doutorado.",
  },
  {
    q: "Quem vai me orientar?",
    a: "Um especialista com experiência na sua área e no seu nível acadêmico.",
  },
  {
    q: "Em quanto tempo terminamos meu trabalho?",
    a: "Depende da complexidade e do tempo disponível. Se o seu prazo estiver curto, fale com a nossa equipe para avaliarmos juntos a melhor forma de seguir.",
  },
  {
    q: "Como é definido o valor?",
    a: "O valor considera o tipo de trabalho, a etapa em que você está, o que será acompanhado e o prazo. Por isso a proposta é enviada depois da conversa inicial.",
  },
  {
    q: "E se eu precisar ajustar algo depois?",
    a: "Oferecemos suporte após a orientação para que o material fique alinhado ao que o seu orientador pediu. As condições aparecem na proposta.",
  },
  {
    q: "O atendimento é online?",
    a: "Sim. Todo o atendimento é online, então atendemos estudantes de qualquer cidade.",
  },
  {
    q: "Como faço para começar?",
    a: "É só chamar no WhatsApp e contar em que etapa você está. Não precisa enviar o trabalho na primeira mensagem.",
  },
] as const;

export const finalCta = {
  title: "Ainda com dúvida? Fale com um especialista.",
  text: "Conte em que etapa você está e descubra como podemos ajudar no seu trabalho.",
  button: "Falar com a TCC Expert",
  microcopy: "Resposta pelo WhatsApp. Sem compromisso.",
};

export const disclaimer =
  "A TCC Expert oferece orientação e assessoria acadêmica. Não criamos documentos falsos nem realizamos o trabalho pelo aluno. A autoria, a entrega e a responsabilidade pelo trabalho final são do estudante, conforme as normas da sua instituição.";
