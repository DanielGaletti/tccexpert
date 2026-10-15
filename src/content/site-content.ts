import type { WhatsAppTopic } from "@/config/site";

/**
 * Conteúdo editorial do site, separado da apresentação.
 * `confirmed: false` = item proposto que a TCC Expert ainda precisa validar.
 */

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const hero = {
  eyebrow: "Assessoria e orientação acadêmica",
  title: ["Seu trabalho acadêmico", "merece uma orientação", "à altura."],
  lead: "Da escolha do tema à preparação para a banca, conte com acompanhamento especializado para desenvolver sua pesquisa com clareza, método e segurança.",
  primaryCta: "Conversar com um especialista",
  secondaryCta: "Conheça nossos serviços",
  note: "Orientamos. Quem escreve e assina o trabalho é você.",
};

/** Sumário exibido no Hero, como o índice de uma publicação. */
export const contents = [
  { n: "01", label: "O que fazemos", href: "#servicos" },
  { n: "02", label: "Como funciona o atendimento", href: "#como-funciona" },
  { n: "03", label: "Por que confiar", href: "#por-que" },
  { n: "04", label: "Compromisso acadêmico", href: "#compromisso" },
  { n: "05", label: "Dúvidas frequentes", href: "#duvidas" },
] as const;

/** Faixa de confiança: apenas diferenciais qualitativos, sem números não verificados. */
export const pillars = [
  { label: "Atendimento", text: "Individual, online e direto pelo WhatsApp." },
  { label: "Níveis", text: "Graduação e pós-graduação, em diferentes áreas." },
  { label: "Escopo", text: "Do projeto de pesquisa à preparação para a banca." },
  { label: "Princípio", text: "A autoria do trabalho é sempre do estudante." },
] as const;

export const struggles = {
  kicker: "Antes de começar",
  title: "Quase ninguém aprende a pesquisar antes de precisar entregar uma pesquisa.",
  body: "Escrita científica, metodologia e normas raramente são ensinadas com calma. É natural que o TCC pareça maior do que é. Estas são as situações que mais ouvimos no primeiro contato:",
  items: [
    { title: "Não saber por onde começar", text: "O tema ainda está vago e a página em branco pesa." },
    { title: "Falta de organização", text: "Leituras, anotações e capítulos sem um fio condutor." },
    { title: "Insegurança com a metodologia", text: "Dúvida sobre qual abordagem, método ou amostra usar." },
    { title: "Normas acadêmicas", text: "ABNT, citações e referências que mudam de instituição para instituição." },
    { title: "Escrita científica", text: "Saber o que dizer, mas não como dizer no registro acadêmico." },
    { title: "Receio da banca", text: "Insegurança sobre a apresentação e as perguntas." },
    { title: "Prazos apertados", text: "Pouco tempo e a necessidade de priorizar o essencial." },
  ],
  closing: "Nenhuma delas é sinal de incapacidade. Todas têm caminho.",
};

export type Service = {
  id: string;
  name: string;
  description: string;
  benefit: string;
  topic: WhatsAppTopic;
  /** Mencionado no site atual da TCC Expert ou proposto e ainda não confirmado. */
  confirmed: boolean;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "tcc",
    name: "Orientação para TCC",
    description:
      "Acompanhamento do trabalho de conclusão em todas as etapas: delimitação do tema, problema, objetivos, estrutura dos capítulos e redação.",
    benefit: "Você avança com um plano claro e sabe o que fazer em cada fase.",
    topic: "tcc",
    confirmed: true,
    featured: true,
  },
  {
    id: "artigo",
    name: "Orientação para artigos científicos",
    description:
      "Apoio na construção de artigos para disciplinas, eventos ou periódicos, respeitando o formato e as diretrizes de cada publicação.",
    benefit: "Um texto mais objetivo, coerente e alinhado às exigências de submissão.",
    topic: "artigo",
    confirmed: true,
    featured: true,
  },
  {
    id: "projeto",
    name: "Assessoria em projetos de pesquisa",
    description:
      "Estruturação de pré-projetos e projetos para TCC, mestrado ou doutorado: justificativa, referencial, método e cronograma.",
    benefit: "Um projeto consistente, que sustenta o restante da pesquisa.",
    topic: "projeto",
    confirmed: true,
    featured: true,
  },
  {
    id: "revisao",
    name: "Revisão acadêmica",
    description:
      "Leitura crítica do texto com foco em clareza, coesão, coerência argumentativa e adequação à linguagem científica.",
    benefit: "Seu texto chega ao orientador mais claro e com menos retrabalho.",
    topic: "revisao",
    confirmed: false,
  },
  {
    id: "abnt",
    name: "Normalização ABNT e outras normas",
    description:
      "Adequação de citações, referências e formatação às normas exigidas pela instituição — ABNT, APA, Vancouver, entre outras.",
    benefit: "Menos preocupação com detalhes formais e mais tempo para o conteúdo.",
    topic: "abnt",
    confirmed: false,
  },
  {
    id: "metodologia",
    name: "Orientação metodológica",
    description:
      "Definição do tipo de pesquisa, instrumentos de coleta e forma de análise mais adequados à sua pergunta.",
    benefit: "Escolhas de método que você consegue explicar e defender.",
    topic: "metodologia",
    confirmed: false,
  },
  {
    id: "estrutura",
    name: "Organização e estruturação da pesquisa",
    description:
      "Mapeamento do que já foi feito, do que falta e da ordem mais sensata para avançar dentro do seu prazo.",
    benefit: "Um cronograma realista e prioridades bem definidas.",
    topic: "estrutura",
    confirmed: false,
  },
  {
    id: "banca",
    name: "Preparação para apresentação e banca",
    description:
      "Organização dos slides, roteiro da fala e antecipação das perguntas mais prováveis da banca.",
    benefit: "Mais segurança para apresentar e responder com tranquilidade.",
    topic: "banca",
    confirmed: true,
  },
];

export const workTypes =
  "TCC, monografia, projeto de pesquisa, artigo, dissertação, tese, relatórios, resenhas e apresentações.";

export const process = {
  kicker: "Como funciona",
  title: "Um processo simples, explicado desde o primeiro contato.",
  steps: [
    {
      title: "Primeiro contato",
      text: "Você conta sua necessidade pelo WhatsApp, no seu tempo e sem compromisso.",
    },
    {
      title: "Entendimento da demanda",
      text: "Identificamos curso, etapa do trabalho, exigências da instituição, objetivos e prazos.",
    },
    {
      title: "Proposta personalizada",
      text: "Você recebe uma proposta de acompanhamento com escopo e condições definidos para o seu caso.",
    },
    {
      title: "Acompanhamento acadêmico",
      text: "A orientação acontece conforme o escopo combinado, com um especialista da sua área.",
    },
    {
      title: "Ajustes e direcionamento",
      text: "Quando previsto no serviço, você conta com orientações adicionais após o retorno do seu orientador.",
    },
  ],
};

export const reasons = {
  kicker: "Por que a TCC Expert",
  statement: "Confiança se constrói com clareza: sobre o que fazemos, como fazemos e o que não fazemos.",
  items: [
    {
      title: "Atendimento individualizado",
      text: "Cada proposta parte do seu curso, da sua etapa e das regras da sua instituição — não de um pacote fixo.",
    },
    {
      title: "Processo transparente",
      text: "Escopo, etapas e responsabilidades combinados antes de começar. Você sabe o que esperar.",
    },
    {
      title: "Apoio metodológico de verdade",
      text: "Mais do que corrigir, explicamos o porquê das escolhas para que você consiga defendê-las.",
    },
    {
      title: "Comunicação direta",
      text: "Conversa objetiva pelo WhatsApp, sem formulários longos nem intermediários.",
    },
    {
      title: "Respeito à autoria",
      text: "Orientamos o caminho. As ideias, a escrita e a assinatura do trabalho são suas.",
    },
  ],
};

export const about = {
  kicker: "Sobre a TCC Expert",
  title: "Uma assessoria acadêmica para quem quer fazer o trabalho bem feito.",
  paragraphs: [
    "A TCC Expert nasceu para oferecer a estudantes de graduação e pós-graduação o acompanhamento que muitas vezes falta durante a pesquisa: alguém disponível para ouvir, organizar as ideias e indicar o próximo passo com método.",
    "Atuamos de forma online, com especialistas de diferentes áreas do conhecimento, orientando trabalhos como TCC, monografias, projetos, artigos, dissertações e teses.",
    "Acreditamos que uma boa orientação não faz o trabalho pelo aluno — ela dá condições para que ele seja feito com segurança, clareza e responsabilidade.",
  ],
  /** PENDENTE: história, ano de fundação e equipe só entram com dados confirmados. */
  facts: [
    { label: "Formato", value: "Online, em todo o Brasil" },
    { label: "Trabalhos", value: "Graduação e pós-graduação" },
    { label: "Áreas", value: "Diversas — confirmar lista" },
  ],
};

export type Testimonial = {
  author: string;
  context?: string;
  service?: string;
  text: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

/**
 * Somente depoimentos autênticos e autorizados.
 * Lista vazia => a seção mostra um estado editorial neutro (sem avaliações simuladas).
 */
export const testimonials: Testimonial[] = [];

export const commitment = {
  kicker: "Compromisso acadêmico",
  title: "O que você pode esperar de nós — e o que não fazemos.",
  clauses: [
    "Nosso serviço é de orientação e assessoria acadêmica.",
    "A autoria do trabalho pertence ao estudante, que é responsável pelo conteúdo e pela entrega final.",
    "O acompanhamento não substitui o orientador nem as exigências da sua instituição.",
    "Não há garantia de nota ou aprovação: a avaliação é sempre da banca e da instituição.",
    "Todo trabalho deve respeitar as normas éticas e as políticas de integridade acadêmica da instituição.",
  ],
};

export const faq = [
  {
    q: "Como funciona a assessoria acadêmica?",
    a: "Você nos conta pelo WhatsApp em que etapa está e do que precisa. Entendemos o contexto do seu curso e da sua instituição, enviamos uma proposta personalizada e, com sua confirmação, um especialista acompanha o trabalho conforme o escopo combinado.",
  },
  {
    q: "Quais tipos de trabalhos vocês orientam?",
    a: `Orientamos diversos formatos acadêmicos: ${workTypes}`,
  },
  {
    q: "Posso contratar orientação se meu prazo estiver próximo?",
    a: "Sim, vale conversar. Os prazos dependem da complexidade do trabalho e do tempo disponível; avaliamos juntos o que é viável e o que deve ser priorizado, sem prometer o que não pode ser cumprido.",
  },
  {
    q: "Como é definido o orçamento?",
    a: "O valor é definido a partir do tipo de trabalho, da etapa em que você está, do escopo de acompanhamento e do prazo. Por isso a proposta é personalizada e enviada depois da conversa inicial.",
  },
  {
    q: "Vocês atendem alunos de diferentes cursos?",
    a: "Sim. Contamos com especialistas de diferentes áreas e níveis acadêmicos, e o acompanhamento é feito por alguém com experiência na sua área.",
  },
  {
    q: "Como funciona o acompanhamento?",
    a: "O acompanhamento segue o escopo definido na proposta: pode envolver orientações sobre estrutura, metodologia, escrita, normas e preparação para a banca, com comunicação direta durante o processo.",
  },
  {
    q: "O atendimento acontece online?",
    a: "Sim. Todo o atendimento é online, o que permite acompanhar estudantes de qualquer cidade.",
  },
  {
    q: "Existe suporte para ajustes?",
    a: "Quando previsto na proposta, você conta com orientação para os ajustes solicitados pelo seu orientador. As condições são informadas antes do início do acompanhamento.",
  },
  {
    q: "Como faço para começar?",
    a: "Basta chamar no WhatsApp e contar em que etapa você está. Não é preciso enviar o trabalho na primeira mensagem nem informar dados pessoais além do necessário para conversarmos.",
  },
] as const;

export const finalCta = {
  title: "O próximo passo da sua jornada acadêmica começa com uma conversa.",
  text: "Conte em que etapa você está e descubra como podemos orientar seu trabalho.",
  button: "Falar com a TCC Expert",
  microcopy: "Resposta pelo WhatsApp. Sem compromisso e sem formulários.",
};

export const disclaimer =
  "A TCC Expert oferece orientação e assessoria acadêmica. A elaboração autoral, a submissão e a responsabilidade pelo trabalho final pertencem ao estudante, conforme as normas de sua instituição.";
