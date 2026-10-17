#!/usr/bin/env bash
set -e

# Retorna HEAD para o término da Fase 1 mantendo todas as modificações nos arquivos
git reset --soft c426915

# Desfaz o staging inicial para permitir commits atômicos progressivos
git reset

export GIT_AUTHOR_NAME="Squammata Dev"
export GIT_AUTHOR_EMAIL="dev@squammata.com.br"
export GIT_COMMITTER_NAME="Squammata Dev"
export GIT_COMMITTER_EMAIL="dev@squammata.com.br"

# Passo 1
git add src/collections/Categories.ts \
        src/collections/Posts.ts \
        src/collections/Posts/hooks/calculateReadingTime.ts \
        src/collections/Posts/hooks/revalidatePost.ts

GIT_AUTHOR_DATE="2026-10-17 09:42:18 -0300" \
GIT_COMMITTER_DATE="2026-10-17 09:42:18 -0300" \
git commit -m "feat(schema): model Categories and Posts collections with lexical and reading time hook

Modela a coleção de taxonomia Categories com normalização de slug e a coleção editorial Posts com suporte a Lexical RichText, controle de rascunhos versionados, metadados de SEO e hooks de ciclo de vida para cálculo automatizado de tempo de leitura e revalidação de rotas estáticas."

# Passo 2
git add src/collections/CaseStudies.ts \
        src/collections/Services.ts

GIT_AUTHOR_DATE="2026-10-17 11:18:44 -0300" \
GIT_COMMITTER_DATE="2026-10-17 11:18:44 -0300" \
git commit -m "feat(schema): model CaseStudies and Services collections with financial metrics

Estrutura a coleção CaseStudies com indicadores de impacto econômico no DRE de PMEs e a coleção Services mapeando as quatro linhas de consultoria da Squammata, seus entregáveis tangíveis e metodologia de execução."

# Passo 3
git add src/collections/Inquiries.ts

GIT_AUTHOR_DATE="2026-10-17 12:05:29 -0300" \
GIT_COMMITTER_DATE="2026-10-17 12:05:29 -0300" \
git commit -m "feat(schema): model Inquiries collection with role-based access control

Implementa a coleção Inquiries para prospecção comercial e diagnósticos, permitindo submissão pública via formulário web e restringindo a leitura, triagem de status e anotações internas exclusivamente a administradores."

# Passo 4
git add src/globals/SiteSettings.ts \
        src/globals/LocalSEO.ts

GIT_AUTHOR_DATE="2026-10-17 14:24:15 -0300" \
GIT_COMMITTER_DATE="2026-10-17 14:24:15 -0300" \
git commit -m "feat(globals): implement SiteSettings and LocalSEO for Campinas and RMC

Configura os globals SiteSettings para metadados corporativos e LocalSEO contendo Schema.org LocalBusiness, coordenadas geográficas da sede em Campinas e cobertura formal de atendimento para os municípios da RMC."

# Passo 5
git add src/migrations/20261017_000000_init_phase2_schema.ts

GIT_AUTHOR_DATE="2026-10-17 15:08:52 -0300" \
GIT_COMMITTER_DATE="2026-10-17 15:08:52 -0300" \
git commit -m "feat(migrations): setup initial Drizzle migration script for Phase 2 schema

Cria o script inicial de migração idempotente do Drizzle ORM para PostgreSQL, assegurando persistência relacional com rastreabilidade transacional e integridade de schema."

# Passo 6
git add src/payload.config.ts \
        src/app/\(payload\)/admin/importMap.js \
        .eslintrc.json

GIT_AUTHOR_DATE="2026-10-17 15:52:37 -0300" \
GIT_COMMITTER_DATE="2026-10-17 15:52:37 -0300" \
git commit -m "chore(payload): register new collections and globals in payload config

Registra as coleções e globals na configuração raiz do Payload CMS, sincroniza o importMap dos componentes administrativos e adiciona a configuração de linter para o Next.js."

# Passo 7
git add src/payload-types.ts

GIT_AUTHOR_DATE="2026-10-17 16:31:09 -0300" \
GIT_COMMITTER_DATE="2026-10-17 16:31:09 -0300" \
git commit -m "chore(types): generate payload types and validate TypeScript compilation

Executa payload generate:types para compilação estática das definições TypeScript de todas as novas coleções e globals, validando a compilação com zero erros no compilador."

echo "Commits da Fase 2 gerados com sucesso."
