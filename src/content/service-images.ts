import mentoria from "../../public/images/servico-mentoria.webp";
import revisao from "../../public/images/servico-revisao.webp";
import formatacao from "../../public/images/servico-formatacao.webp";
import projetos from "../../public/images/servico-projetos.webp";
import type { Service } from "./site-content";

/** Fotos ilustrativas (licença CC0, ver README) para cada frente de serviço. */
export const serviceImages: Record<Service["icon"], { src: typeof mentoria; alt: string }> = {
  mentoria: { src: mentoria, alt: "Pessoa estudando com notebook e caderno sobre a mesa" },
  revisao: { src: revisao, alt: "Mão fazendo anotações em um caderno" },
  formatacao: { src: formatacao, alt: "Mesa de trabalho com teclado, livro aberto e caderno" },
  projetos: { src: projetos, alt: "Pessoa planejando etapas em uma agenda" },
};
