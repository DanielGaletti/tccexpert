# TCC Expert — Website institucional (POC)

Site institucional da TCC Expert, assessoria e orientação acadêmica. Versão de validação com a empresa.
Objetivo comercial: gerar contatos qualificados pelo WhatsApp.

- **Stack:** Next.js 16 (App Router, exportação estática) · React 19 · TypeScript strict · Tailwind CSS 4 · Lucide
- **Sem backend:** o build gera HTML estático em `out/`, publicável em qualquer hospedagem estática.
- **JavaScript mínimo:** tudo é server component, exceto o menu mobile e um ouvinte de conversão.

Documentos do projeto:

- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) — conceito, paleta, tipografia, grid, componentes e mapa de seções
- [`PENDENCIAS.md`](PENDENCIAS.md) — **informações comerciais que a TCC Expert precisa confirmar**

## Rodando localmente

Requer Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build      # gera out/
npm start          # serve out/ localmente
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| WhatsApp (número e mensagens), e-mail, redes, CNPJ, analytics | `src/config/site.ts` |
| Textos, serviços, etapas, FAQ, depoimentos | `src/content/site-content.ts` |
| Cores, fontes, escala tipográfica | `src/app/globals.css` (bloco `@theme`) |
| Logotipo (provisório) | `src/components/ui/Logo.tsx` |
| Páginas legais (minutas) | `src/app/privacidade`, `src/app/termos` |

### WhatsApp

Todos os botões usam `wa.me` com mensagem codificada, gerada em `src/lib/whatsapp.ts`. Cada CTA de serviço
tem mensagem própria (TCC, revisão, artigo etc.).

**O número oficial ainda não foi informado** (`whatsapp.number: null`). Enquanto isso, os botões abrem o
WhatsApp com a mensagem pronta e o visitante escolhe o contato — nenhum link está quebrado e nenhum número
fictício é exibido. Basta preencher o número (só dígitos, com DDI 55) para tudo passar a apontar para a empresa.

Se o visitante chegar com `utm_source`/`utm_medium`/`utm_campaign` na URL, a origem é anexada à mensagem
(ex.: "(origem: instagram / outubro)") para o atendimento saber de onde veio o contato.

### Analytics (opcional)

Preencha `gtmId`, `ga4Id` e/ou `metaPixelId` em `src/config/site.ts`. Sem IDs, nenhum script é carregado e
nenhum evento é disparado. Com IDs, cada clique em WhatsApp gera um único evento `whatsapp_click` com
`wa_source` (`header`, `mobile_menu`, `hero`, `service`, `process`, `faq`, `final_cta`, `footer`, `floating`)
e `wa_topic`. **LGPD:** antes de ativar, implemente consentimento de cookies.

## Modo de validação

Por padrão o site roda em modo de validação (`NEXT_PUBLIC_PREVIEW` diferente de `false`):

- `noindex` em todas as páginas e `robots.txt` bloqueando buscadores (evita competir com o site atual);
- serviços ainda não confirmados exibem a etiqueta "a confirmar";
- a seção de depoimentos mostra uma nota explicando que está vazia.

Para produção: `NEXT_PUBLIC_PREVIEW=false` e `NEXT_PUBLIC_SITE_URL=https://tccexpert.com`.

## Deploy

### GitHub Pages (versão de validação)

O workflow `.github/workflows/deploy.yml` roda lint, typecheck e build a cada push na `main`, e publica em
`https://<usuario>.github.io/<repo>/` (o `basePath` é configurado automaticamente).

1. **Atenção:** GitHub Pages em repositório **privado** exige plano GitHub Pro/Team/Enterprise. No plano Free,
   o repositório precisa ser público para usar Pages.
2. Em *Settings → Pages*, selecione a origem **GitHub Actions**.
3. Em *Settings → Secrets and variables → Actions → Variables*, crie `PAGES_ENABLED` = `true`.
4. Rode o workflow novamente (aba *Actions* → *Deploy* → *Run workflow*).

Observação: mesmo com repositório privado, a página publicada no Pages é pública (exceto no plano Enterprise).

### Produção (domínio próprio)

Qualquer hospedagem estática serve: Vercel, Netlify, Cloudflare Pages ou o próprio servidor atual.

```bash
NEXT_PUBLIC_PREVIEW=false NEXT_PUBLIC_SITE_URL=https://tccexpert.com npm run build
```

Envie o conteúdo de `out/`. Na Vercel/Netlify, basta conectar o repositório; o comando de build é `npm run build`
e o diretório de saída é `out`. Recomenda-se cache longo para `/_next/static/*` (arquivos com hash).

## Testes realizados (15/10/2026)

| Verificação | Resultado |
| --- | --- |
| `npm run lint` (ESLint + regras Next/Core Web Vitals) | Sem erros ou avisos |
| `npm run typecheck` (TypeScript strict + `noUncheckedIndexedAccess`) | Sem erros |
| `npm run build` (raiz e com `basePath=/tccexpert`) | OK, 8 rotas estáticas |
| Rolagem horizontal em 320, 375, 390, 768, 1024, 1440, 1920px | Nenhuma |
| Erros de console / hidratação | Nenhum |
| Menu mobile: abrir, fechar com Esc, navegar e fechar ao clicar, retenção de foco | OK |
| FAQ (`<details>` nativo) abre/fecha | OK |
| Links WhatsApp: 16 links, todos `https://wa.me/`, com 9 origens distintas | OK |
| Âncoras internas: todas existem; um único H1 por página | OK |
| Páginas `/privacidade/`, `/termos/`, `/robots.txt`, `/sitemap.xml` | HTTP 200 |
| Preservação de UTM na mensagem | OK |
| Skip link "Pular para o conteúdo" é o primeiro foco | OK |

**Lighthouse 13** (build de produção com `NEXT_PUBLIC_PREVIEW=false`, servido localmente, Edge headless,
throttling padrão do Lighthouse):

| Perfil | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mobile | 99 | 100 | 100 | 100 | 2,0 s | 0 | 90 ms |
| Desktop | 100 | 100 | 100 | 100 | 0,6 s | 0 | 0 ms |

No modo de validação o SEO cai para 66 de propósito (`noindex`). Valores de laboratório; os Core Web Vitals
de campo (p75, INP) só podem ser medidos com tráfego real após a publicação (Search Console / CrUX).

Revisão visual feita com capturas em desktop (1440px) e mobile (390px) via Playwright. Correções aplicadas a
partir dela: menu mobile que não aparecia (o `backdrop-filter` do header prendia o painel `fixed`), quebra de
linha do H1, contraste do dourado, nome acessível dos CTAs de serviço, layout do rodapé no celular e origem
UTM duplicada.
