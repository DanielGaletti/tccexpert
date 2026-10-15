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
| Textos, serviços, etapas, FAQ, feedbacks, faixa de destaques | `src/content/site-content.ts` |
| Números de confiança (ano de fundação, alunos, projetos, universidades) | `src/config/site.ts` → `trust` |
| Fotos dos serviços | `src/content/service-images.ts` e `public/images` |
| Cores, fontes, escala tipográfica | `src/app/globals.css` (bloco `@theme`) |
| Logotipo oficial | `public/brand` e `src/components/ui/Logo.tsx` |
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

- `noindex` em todas as páginas e `robots.txt` bloqueando buscadores (evita competir com o site atual).

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

## Imagens e créditos

- Logo e ícone: material oficial da TCC Expert (site atual).
- Feedbacks: prints publicados pela própria TCC Expert no site atual (confirmar autorização dos alunos).
- Fotos ilustrativas: licença CC0 (StockSnap e Rawpixel), uso comercial livre e sem exigência de crédito.

## Testes realizados (15/10/2026)

| Verificação | Resultado |
| --- | --- |
| `npm run lint` e `npm run typecheck` (TypeScript strict) | Sem erros ou avisos |
| `npm run build` (raiz e com `basePath=/tccexpert`) | OK, 10 rotas estáticas |
| Rolagem horizontal em 320, 375, 390, 768, 1024, 1440, 1920px | Nenhuma (corrigidos o CNPJ no rodapé em 1024px e os números em 320px) |
| Erros de console / hidratação | Nenhum (corrigido o 404 de prefetch do Next 16 com `scripts/flatten-rsc.mjs`) |
| Lista de serviços clicável, modal de prints, FAQ animado, menu mobile | OK |
| Todos os CTAs de contato apontam para `https://wa.me/` | OK |

**Lighthouse 13** (build de produção com `NEXT_PUBLIC_PREVIEW=false`, servido localmente, Edge headless, 3 execuções):

| Página | Perfil | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Início | Mobile | 94 a 99 | 100 | 100 | 100 | 1,6 a 3,1 s | 0 |
| Início | Desktop | 100 | 100 | 100 | 100 | 0,6 s | 0 |
| Serviços | Mobile | 93 a 94 | 100 | 100 | 100 | 3,0 a 3,2 s | 0 |

O LCP mobile simulado fica acima da meta de 2,5 s na maioria das execuções: o maior elemento é o título em
Inter 700, que depende do download da fonte. Isso deve ser confirmado com dados reais (Search Console /
PageSpeed Insights) após a publicação no domínio definitivo. No modo de validação o SEO cai de propósito
(`noindex`).
