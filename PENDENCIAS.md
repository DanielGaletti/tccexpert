# Informações pendentes de validação com a TCC Expert

Dados comerciais ficam centralizados em `src/config/site.ts` e `src/content/site-content.ts`.

## Já confirmados

| Item | Valor |
|------|-------|
| CNPJ | 66.549.895/0001-26 |
| Instagram | @_tccexpert |
| Logo oficial | Extraída do site atual |
| Frentes de serviço | Mentoria acadêmica, Revisão acadêmica, Formatação acadêmica, Projetos |

## Bloqueantes para publicação oficial

| # | Item | Onde alterar | Situação atual |
|---|------|--------------|----------------|
| 1 | **Número oficial do WhatsApp** | `site.ts` → `whatsapp.number` | Botões abrem o WhatsApp com a mensagem pronta, mas o visitante escolhe o contato |
| 2 | Razão social | `site.ts` → `legalName` | Omitida |
| 3 | Revisão jurídica da Política de Privacidade e dos Termos | `src/app/privacidade`, `src/app/termos` | Publicadas como minutas, com aviso |
| 4 | Encarregado de dados (LGPD) | `src/app/privacidade/page.tsx` | "[a definir]" |
| 5 | Domínio definitivo e fim do modo de validação | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PREVIEW=false` | Versão atual é `noindex` |

## Números e afirmações exibidos (confirmar)

| Item | Fonte | Observação |
|------|-------|------------|
| Desde 2019 (+7 anos) | Informado pela empresa / site atual ("mais de 07 anos") | `site.ts` → `trust.foundedYear` |
| +8 mil alunos orientados | Site atual | `trust.studentsLabel` |
| +11 mil projetos acompanhados | Site atual | `trust.projectsLabel` |
| +80 universidades atendidas | Informado pela empresa | `trust.universitiesLabel` |
| "Altíssimo índice de aprovação" | Informado pela empresa | Afirmação qualitativa. Evitamos "100% de aprovação", que não é comprovável e conflita com o compromisso de não prometer nota |
| Verificação com CopySpider e laudo de originalidade | Site atual | Confirmar se vale para todos os serviços |
| "Em poucos minutos um especialista conversa com você" | Site atual | Confirmar se é prática real |
| "Suas informações e seu material são tratados com sigilo" | Proposto (cláusula do Compromisso acadêmico) | Confirmar que a operação garante sigilo, pois é um compromisso público |
| "Empresa registrada" (Hero e Compromisso) | CNPJ informado pela empresa | Recomendável confirmar que o CNPJ está ativo na Receita |
| "+15 mil TCCs com 100% de aprovação" | Site atual | **Não utilizado** (conflita com os outros números e com a ética do serviço) |

## Feedbacks

Os três feedbacks (Tamires, Paulo, Katia) foram transcritos dos prints já publicados no site atual. O trecho "Consegui nota 9,5!" (Tamires) também aparece no Hero.
**Confirmar que há autorização dos alunos** para uso no novo site.

## Outros

| Item | Onde |
|------|------|
| Horário de atendimento | `site.ts` → `businessHours` |
| LinkedIn / YouTube, se houver | `site.ts` → `social` |
| Link do perfil no Google (avaliações) | `site.ts` → `googleReviewsUrl` |
| IDs de GA4 / GTM / Meta Pixel (exige banner de consentimento LGPD) | `site.ts` → `analytics` |
| Formulário "deixe seu contato que chamamos em menos de 8 horas" do site atual | Não incluído (o site não tem backend; o foco é o WhatsApp) |
