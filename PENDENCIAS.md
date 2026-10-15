# Informações pendentes de validação com a TCC Expert

Nada abaixo foi inventado no site. Itens sem confirmação estão omitidos, marcados como "a confirmar"
(visível apenas na versão de validação) ou com valor `null` em `src/config/site.ts`.

## Bloqueantes para publicação oficial

| # | Item | Onde alterar | Situação atual no site |
|---|------|--------------|------------------------|
| 1 | **Número oficial do WhatsApp** | `site.ts` → `whatsapp.number` | Não encontrado no site atual. Os botões abrem o WhatsApp com a mensagem pronta, mas o visitante escolhe o contato. |
| 2 | Logotipo oficial em SVG | `src/components/ui/Logo.tsx` | Wordmark tipográfico provisório |
| 3 | Razão social e CNPJ | `site.ts` → `legalName`, `cnpj` | Omitidos |
| 4 | Revisão jurídica da Política de Privacidade e dos Termos | `src/app/privacidade`, `src/app/termos` | Publicadas como minutas, com aviso |
| 5 | Encarregado de dados (LGPD) | `src/app/privacidade/page.tsx` | "[a definir]" |
| 6 | Domínio definitivo e desligar modo de validação | variáveis `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_PREVIEW=false` | Versão atual é `noindex` |

## Conteúdo comercial

| # | Item | Observação |
|---|------|-----------|
| 7 | Lista oficial de serviços | Confirmados pelo site atual: TCC, artigo, projeto de pesquisa, apresentação. **A confirmar:** revisão acadêmica, normalização ABNT, orientação metodológica, organização/estruturação. |
| 8 | Etapas reais do atendimento | Texto adaptado do site atual (5 etapas). Confirmar se "ajustes após retorno do orientador" faz parte de todos os serviços. |
| 9 | Prazo de resposta | O site atual promete retorno "em menos de 08 horas" no formulário. **Não foi usado** — confirmar se é compromisso real. |
| 10 | Horário de atendimento | `site.ts` → `businessHours` |
| 11 | E-mail oficial | Site atual usa `contato@` e `suporte@tccexpert.com`. Usamos `contato@`. |
| 12 | Redes sociais oficiais | `site.ts` → `social` |
| 13 | Áreas de atuação | Site atual diz "todas as áreas". Preferível uma lista concreta. |
| 14 | História, ano de fundação, equipe e fotos reais | Seção Sobre usa texto institucional genérico, sem datas ou nomes. |

## Prova social

| # | Item | Observação |
|---|------|-----------|
| 15 | **"+15 mil TCCs assessorados com 100% de aprovação"** | Alegação do site atual **não utilizada**: não verificável e "100% de aprovação" conflita com o compromisso de não garantir resultado (e pode gerar problema com o CDC/Conar). Recomendação: não usar. Se houver dado auditável de volume, pode entrar sem a taxa de aprovação. |
| 16 | Depoimentos | Nenhum cadastrado. Precisam ser reais, autorizados e, idealmente, com fonte (ex.: Google). Site atual mostra prints de conversa — não recomendados. |
| 17 | Perfil no Google (avaliações) | `site.ts` → `googleReviewsUrl` |

## Analytics

| # | Item | Observação |
|---|------|-----------|
| 18 | IDs de GA4 / GTM / Meta Pixel | `site.ts` → `analytics`. Ao ativar, implementar banner de consentimento (LGPD) antes de publicar. |
| 19 | Search Console | `site.ts` → `analytics.searchConsoleVerification` |

## Observação de posicionamento

O site atual usa frases como "Estamos aqui para assumir esse peso com você" e "Iniciaremos o seu projeto de TCC".
A proposta reposiciona a comunicação como **orientação com autoria do estudante**, o que reduz risco de
interpretação como venda de trabalhos prontos. Vale alinhar com a empresa se esse posicionamento reflete a
operação real.
