# TCC Expert: Design System

## Conceito

Site institucional que passa confiança antes de vender. A identidade parte da **logo oficial** (lâmpada com
cérebro em gradiente laranja e nome em azul) e das cores que a marca já usa: off-white, branco, laranja e azul.

Princípios:

- **Marca em primeiro lugar.** Azul da logo nos títulos, laranja como destaque, verde do WhatsApp em todos os
  botões de contato.
- **Prova de confiança visível.** Números da empresa no Hero, faixa de destaques em movimento, feedbacks reais
  com acesso ao print original, laudo de originalidade e compromisso acadêmico.
- **Texto simples.** Frases diretas, sem travessões e sem termos rebuscados.
- **Movimento com função.** Hover e clique em listas, botões e cards; entrada suave das seções ao rolar.
  Tudo respeita `prefers-reduced-motion`.

## Paleta

| Token           | Hex       | Uso                                                       |
| --------------- | --------- | --------------------------------------------------------- |
| `brand`         | `#1F2471` | Azul da logo: títulos, botão secundário                   |
| `brand-deep`    | `#121542` | Seção "Como funciona" e rodapé                            |
| `brand-soft`    | `#ECEEFA` | Fundo do bloco de compromisso                             |
| `orange`        | `#F7931E` | Laranja da logo: faixa de destaques, ícones ativos        |
| `orange-strong` | `#F26B21` | Início do gradiente da lâmpada (detalhes)                 |
| `orange-deep`   | `#D9560F` | Destaque em títulos grandes (contraste 3:1)               |
| `orange-text`   | `#B8540D` | Laranja em textos pequenos (contraste AA)                 |
| `orange-soft`   | `#FFF3E6` | Fundo de ícones                                           |
| `cream`         | `#FAF7F2` | Off-white principal                                       |
| `cream-2`       | `#F3EEE6` | Off-white alternado (Feedbacks)                           |
| `ink`           | `#24263B` | Texto corrido                                             |
| `muted`         | `#5C5F73` | Texto secundário                                          |
| `wa`            | `#25D366` | Verde do WhatsApp nos botões de contato                   |
| `wa-ink`        | `#06301A` | Texto sobre o verde (texto branco não teria contraste AA) |

## Tipografia

- **Inter** em títulos e texto (pesos 400, 500, 600 e 700). Uma única família sóbria, comum em consultorias e
  escritórios, que passa uma imagem mais adulta do que fontes geométricas arredondadas.
- Títulos em peso 600/700 com espaçamento levemente negativo, proporcional ao tamanho
  (`-0.03em` no H1, `-0.025em` no H2, `-0.012em` no H3).
- Cantos levemente arredondados (8 a 16px) em vez de cantos muito redondos.

Carregada com `next/font` (sem layout shift). Escala fluida com `clamp()` em `src/app/globals.css`.

## Componentes e interações

| Componente           | Onde                              | Interação                                                       |
| -------------------- | --------------------------------- | --------------------------------------------------------------- |
| `.btn-wa`            | Todos os CTAs de WhatsApp         | Sobe 2px no hover, comprime no clique                           |
| `.btn-secondary`     | "Conheça nossos serviços"         | Idem, seta desliza                                               |
| `.row-hover`         | Listas de público, compromisso etc. | Barra laranja cresce na lateral, fundo clareia, clique comprime |
| `ServicesTabs`       | Seção de serviços da home         | Lista clicável; painel com foto entra animado                   |
| `Highlights`         | Abaixo do Hero e em /servicos     | Faixa laranja em loop contínuo, pausa no hover                  |
| `Feedbacks`          | Seção de feedbacks                | Cards sobem no hover; "Ver print" abre modal com zoom           |
| FAQ (`<details>`)    | Dúvidas                           | Abre com altura animada; ícone gira e fica laranja              |
| Menu mobile          | Header                            | Itens entram em sequência                                       |
| `RevealObserver`     | Seções                            | Blocos sobem e aparecem ao entrar na tela                       |

## Imagens

- Logo e ícone oficiais extraídos do site atual (`public/brand`).
- Fotos ilustrativas com licença **CC0** (StockSnap e Rawpixel), livres para uso comercial e sem exigência de
  crédito, convertidas para WebP (`public/images`). Não foram usadas imagens do Google Imagens, que em geral
  têm direitos autorais.
- Prints de feedback publicados pela própria TCC Expert (`public/feedbacks`).

## Responsividade

Testado em 320, 375, 390, 768, 1024, 1440 e 1920px sem rolagem horizontal. No celular o Hero empilha texto,
botões em largura total e foto com números; a lista de serviços vira acordeão com o detalhe logo abaixo do item.
