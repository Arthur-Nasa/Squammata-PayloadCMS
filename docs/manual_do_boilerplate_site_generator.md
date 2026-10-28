# Manual do Desenvolvedor: Boilerplate White-Label & Gerador de Sites

Bem-vindo ao manual técnico do **Boilerplate Engine** (Next.js 15 App Router + Payload CMS v3). Este documento orienta engenheiros e agências a replicar, personalizar e entregar sites profissionais sob medida para novos clientes em poucos minutos.

---

## 1. Arquitetura do Boilerplate

O motor opera através de camadas desacopladas que eliminam qualquer dependência de código fixo:

1. **Camada de Manifesto (`src/site.config.ts`):** Fonte única de verdade de dados cadastrais, logotipos, contatos, SEO, recursos ativos e tipografia.
2. **Camada de Temas Dinâmicos (`src/theme/presets.ts`, `src/theme/fontPresets.ts` & `src/utilities/generateThemeCss.ts`):** Injeta tokens cromáticos, curvaturas geométricas e fontes diretamente nas variáveis CSS do `:root`, sem exigir compilação de SCSS.
3. **Painel Administrativo Neutro (`/admin`):** Logotipos e ícones gerados dinamicamente com base no cliente configurado, sem resíduos de marcas anteriores.
4. **Shell Global Reativo (Header, Footer e JSON-LD):** Cabeçalho e rodapé leem dados de contato, redes sociais, horários e links do manifesto.
5. **Motor de Provisionamento (`provisionEngine.ts` & `/api/provision`):** Sincroniza banco de dados PostgreSQL, cria administrador, popula globals e importa serviços de nicho automaticamente.

---

## 2. Fluxo Rápido: Criando um Site via CLI Interativo

A forma mais rápida e recomendada para iniciar um projeto para um novo cliente é através do assistente de terminal:

```bash
pnpm site:create
```

O assistente solicitará:
1. **Identidade:** Nome fantasia, razão social, CNPJ e slogan.
2. **Contato:** E-mail corporativo, WhatsApp, endereço completo e cidades atendidas.
3. **Modelo de Nicho:** Seleção entre os templates prontos (`b2b-consulting`, `local-services`, `technology-saas`).
4. **Estilo Visual e Tipografia:** Paleta cromática (`terracotta`, `forest`, `river`, `amber`, `coffee`, `clay`), preset de fontes (`editorial`, `modern`, `tech`, `minimal`) e estilo de curvatura (`organic`, `modern`, `sharp`).

Ao concluir, o script atualiza `src/site.config.ts` e, caso o servidor esteja em execução na porta 3000, sincroniza imediatamente o banco PostgreSQL.

---

## 3. Catálogo de Modelos de Nicho (`templates/`)

* **`b2b-consulting.json`:** Consultorias estratégicas, controladoria, auditoria de processos e reestruturação operacional.
* **`local-services.json`:** Prestadores de serviços locais, clínicas de saúde, consultórios e escritórios regionais.
* **`technology-saas.json`:** Empresas de software, produtos SaaS, APIs, segurança da informação e consultorias de engenharia.

---

## 4. Presets Tipográficos Disponíveis

* **`editorial` (Padrão):** Zilla Slab nos títulos com Quicksand na interface e Space Mono em números/dados.
* **`modern`:** Plus Jakarta Sans com Inter para visual corporativo contemporâneo.
* **`tech`:** Space Grotesk com Inter para produtos de tecnologia e SaaS.
* **`minimal`:** Inter em todas as superfícies para estilo atemporal e neutro.

---

## 5. Exportação e Publicação para o Cliente

Quando o site estiver validado e aprovado pelo cliente, execute:

```bash
pnpm site:export
```

O utilitário inspecionará o manifesto e exibirá o roteiro para isolar e enviar o projeto para o repositório Git do cliente:

```bash
# Criar branch dedicada
git checkout -b release/<slug-cliente>

# Conectar remote do cliente
git remote add cliente git@github.com:organizacao/<slug-cliente>.git

# Publicar
git push cliente release/<slug-cliente>:main
```

---

## 6. Comandos Úteis do Sistema

* `pnpm dev`: Inicia o servidor unificado em modo desenvolvimento (Porta 3000).
* `pnpm build`: Executa compilação e gera as páginas estáticas otimizadas.
* `pnpm tsc --noEmit`: Validação estrita de tipos TypeScript.
* `pnpm lint`: Análise estática de código ESLint.
* `pnpm site:create`: Assistente de configuração de novo cliente.
* `pnpm site:export`: Resumo e instruções de exportação Git.
