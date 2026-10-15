# TCC Expert — Design System

## Conceito: "a página bem composta"

O site é desenhado como uma publicação acadêmica bem editada, não como uma landing page de startup.
A referência é o livro e o periódico científico: **sumário com linhas pontilhadas, numeração de seções (§),
notas de rodapé, capitular, cláusulas em numeração romana e fios editoriais**. Isso comunica método e cuidado
— exatamente o que a TCC Expert vende — sem recorrer a ilustrações genéricas ou fotos de banco de imagem.

Princípios aplicados:

- **Tipografia faz o trabalho pesado.** Títulos serifados grandes, texto sem serifa legível, hierarquia por
  tamanho e espaço, não por cor ou caixas.
- **Linhas no lugar de cards.** As seções usam fios horizontais/verticais, colunas e listas indexadas.
  Não há grade de cards idênticos.
- **Ritmo por alternância de composição.** Cada seção tem estrutura própria (ver mapa abaixo) e o fundo alterna
  entre papel, branco, marinho e papel escuro.
- **Assimetria controlada.** Grid de 12 colunas, com títulos em 4–7 colunas e conteúdo deslocado.
- **Movimento mínimo.** Apenas transições de hover/estado. O site é completo com animações desligadas
  (`prefers-reduced-motion` respeitado globalmente).

## Paleta

| Token        | Hex       | Uso                                                        |
| ------------ | --------- | ---------------------------------------------------------- |
| `ink`        | `#14283F` | Títulos, botão primário, fundo de "Como funciona"          |
| `ink-2`      | `#25476A` | Links, ênfase em itálico, fundo do CTA final               |
| `ink-deep`   | `#0E1D2F` | Rodapé                                                     |
| `graphite`   | `#283038` | Texto corrido                                              |
| `muted`      | `#5B6470` | Texto secundário (contraste AA sobre `paper`)              |
| `paper`      | `#F8F6F1` | Fundo principal                                            |
| `paper-2`    | `#EFEBE2` | Fundo alternado (Sobre)                                    |
| `rule`       | `#D9D3C6` | Fios editoriais                                            |
| `gold`       | `#B49A68` | **Somente** fios e numerais grandes (decorativo)           |
| `gold-text`  | `#7F6A3F` | Versão escurecida do dourado para textos pequenos (AA)     |
| `wa`         | `#1F7A4D` | Botão flutuante de WhatsApp (verde sóbrio, AA com branco)  |

Decisão: a paleta sugerida foi mantida porque o site atual não tem uma identidade cromática consolidada
(usa verde de botão e laranja de destaque sem sistema). O dourado foi rebaixado a acento de fio/numeral para
não virar ostentação; para texto pequeno usa-se `gold-text`, que passa em contraste AA.

## Tipografia

- **Newsreader** (títulos) — serifada editorial desenhada para leitura em tela, com eixo óptico e itálico
  expressivo. Mais contemporânea que Baskerville, mais legível em tamanhos médios que Cormorant.
- **DM Sans** (interface e texto) — geométrica com aberturas generosas, boa em 16–18px no celular, sem a
  frieza de uma neo-grotesca.

Carregadas via `next/font` (self-hosted, sem layout shift, `display: swap`). Apenas pesos 400 e 500.

Escala fluida (`clamp()`), definida em `src/app/globals.css`:

| Token        | Mín → Máx           | Uso              |
| ------------ | ------------------- | ---------------- |
| `display`    | 38px → 74px         | H1 do hero       |
| `h2`         | 32px → 56px         | Títulos de seção |
| `h3`         | 21.6px → 28px       | Subtítulos       |
| `lead`       | 17px → 20px         | Texto de apoio   |
| corpo        | 17px                | Texto corrido    |

Regras: `text-wrap: balance` em títulos, `pretty` em parágrafos, largura máxima de 46–62ch, nenhum texto
longo centralizado.

## Grid e espaçamento

- Contêiner `container-x`: máx. 82rem (1312px), gutter fluido `clamp(1rem, …, 3rem)`.
- Grid de 12 colunas a partir de `lg` (1024px); abaixo disso, coluna única reorganizada (não apenas reduzida).
- Espaço vertical de seção: `py-section` = `clamp(5rem, …, 9.5rem)`.

## Componentes

| Componente         | Arquivo                                   | Notas                                                    |
| ------------------ | ----------------------------------------- | -------------------------------------------------------- |
| Botão primário     | `.btn .btn-primary`                       | Marinho, cantos de 2px, altura mín. 52px                 |
| Botão claro        | `.btn .btn-light`                         | Para fundos escuros                                      |
| Link editorial     | `.btn .btn-link`, `.link-underline`       | Sublinhado fino que escurece no hover                    |
| Rótulo de seção    | `SectionHeading` / `.kicker`              | `§ 02 — SERVIÇOS` + H2 serifado                          |
| Linha de sumário   | `.leader`                                 | Pontilhado entre rótulo e marcador                       |
| WhatsApp           | `WhatsAppLink`                            | Server component; rastreamento por atributos `data-wa-*` |
| Accordion          | `<details>` nativo + `.faq-item`          | Acessível sem JavaScript                                 |

## Mapa de seções (ritmo)

| §  | Seção               | Fundo     | Composição                                                     |
| -- | ------------------- | --------- | -------------------------------------------------------------- |
| —  | Hero                | paper     | Cabeço corrido, H1 em 8 colunas, **sumário** à direita         |
| —  | Faixa de confiança  | branco    | 4 colunas separadas por fios, só diferenciais qualitativos     |
| 01 | Identificação       | paper     | Título fixo (sticky) à esquerda, lista numerada à direita      |
| 02 | Serviços            | branco    | 3 colunas editoriais com numerais grandes + índice tabular     |
| 03 | Como funciona       | marinho   | Linha do tempo horizontal (vertical no celular)                |
| 04 | Por que confiar     | paper     | Declaração grande + lista de definições em 2 colunas           |
| 05 | Sobre               | paper-2   | Texto com capitular + "Em resumo" com pontilhados              |
| 06 | Depoimentos         | paper     | Citações em colunas desencontradas / estado vazio editorial    |
| 07 | Compromisso         | branco    | "Termo" com moldura de fio duplo e cláusulas romanas           |
| 08 | Dúvidas             | paper     | Título fixo + accordion                                        |
| —  | CTA final           | ink-2     | Título grande + botão alinhado à base                          |
| —  | Rodapé              | ink-deep  | 4 colunas + nota de responsabilidade + faixa inferior          |

## Imagens

Nenhuma fotografia foi usada nesta versão: não há fotos reais da marca e fotos de banco de imagem
enfraqueceriam a credibilidade. Quando houver fotografias autorais (equipe, ambiente de trabalho, materiais),
o melhor lugar é a seção **Sobre** (substituindo o espaço vazio acima de "Em resumo") — sempre via `next/image`,
com dimensões declaradas.

## Responsividade

Testado em 320, 375, 390, 768, 1024, 1440 e 1920px sem rolagem horizontal. No celular: sumário do hero oculto
(a navegação fica no menu), CTA principal em largura total, linha do tempo vertical, rodapé em 2 colunas.
