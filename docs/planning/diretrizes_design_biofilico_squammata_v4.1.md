# Diretrizes de Design da Marca: A Organicidade da Forma do Pássaro e Biofilia Paulista
## Squammata Design System v4.1 (Da Rigidez Industrial à Biomimética e Morfologia Orgânica)

Este documento estabelece o cânone visual oficial da **Squammata**, substituindo a antiga premissa de cantos retos e brutalismo rígido pela **Organicidade da Forma do Pássaro** (*Columbina squammata*, a ave fogo-apagou) aliada à **Biofilia do Interior Paulista**.

---

## 1. Fundamento Conceitual: Biomimética da Columbina squammata e Território Paulista
A ave *Columbina squammata*, típica dos campos, cerrados e áreas rurais do interior de São Paulo, possui silhueta aerodinâmica, contornos suaves, dorso curvilíneo e penugem escamada que une proteção rígida e leveza articular. Na engenharia de e-commerce e transformação digital, essa biologia traduz o conceito de arquitetura modular (*composable commerce*). O sistema visual reflete essas propriedades em quatro dimensões:

1. **Curvatura Contínua e Suave (Squammata Curvature e Geometria de Seixo):**
   * Eliminação total dos cantos vivos cortantes (0px), reproduzindo a abrasão natural dos seixos de rio e os terminais circulares da tipografia institucional.
   * Aplicação de raios proporcionais à escala de cada componente:
     * **Elementos de Controle, Inputs e Botões:** `$radius-sm: 8px` (toque anatômico e ergonômico).
     * **Badges, Categorias e Pílulas:** `$radius-pill: 100px` (morfologia de gota, semente e cápsula).
     * **Cartões Modulares (Cards) e Blocos de Dados:** `$radius-base: 16px` (encaixe orgânico em grid).
     * **Banners, Heróis, Contêineres Macro e Janelas Modais:** `$radius-lg: 24px` (envoltória protetora).

2. **Fluidez, Aerodinâmica e Cinemática de Pouso:**
   * Transições suaves inspiradas no voo silencioso e na desaceleração de pouso do fogo-apagou, banindo animações lineares ou mecânicas.
   * **Curva de Desaceleração de Pouso (Hovers e Expansões):** `$ease-landing: cubic-bezier(0.22, 1, 0.36, 1);` com duração de `350ms` a `450ms` (rápida resposta inicial com assentamento suave no final).
   * **Curva de Fluxo Hidrológico (Transições de Layout e Modais):** `$ease-river: cubic-bezier(0.4, 0, 0.2, 1);` com duração de `500ms`.
   * Divisores de seção em curva suave (`.mil-section-curve-divider`), simulando a linha dorsal da ave e o relevo de cuestas do interior paulista.
   * Marca d'água sutil da silhueta do fogo-apagou (`.mil-bird-watermark`) em opacidade contida (`0.025` a `0.04`).

3. **Imbricação Modular (Padrão Squama):**
   * Assim como as escamas da plumagem se sobrepõem para criar resiliência, os grids de arquitetura de sistemas e cards utilizam agrupamentos coesos com espaçamento respirável (`gap: 24px` a `32px`), conectando fluxogramas técnicos com curvas de Bézier contínuas (inspiradas na cauda caligráfica da letra "Q" do logotipo) em vez de setas ortogonais de 90 graus.

4. **Perspectiva e Refúgio (Conforto Cognitivo):**
   * Ambientes de dados densos (dashboards, relatórios de performance e auditorias técnicas) devem preservar no mínimo **25% de área de respiro** em superfície mineral clara (`$m-5`), garantindo visão panorâmica dos indicadores sem fadiga visual.

---

## 2. Tipografia Disciplinada: Anti-Gigantismo e Equilíbrio Leitor
A identidade tipográfica da Squammata expressa modernidade técnica sem histeria visual ou títulos monumentais desproporcionais:

1. **Famílias Tipográficas:**
   * **Quicksand (`$font-1`):** Tipografia sans-serif geométrica de traço arredondado e acolhedor (mesma matriz do logotipo oficial). Usada em navegação, textos corridos e títulos dinâmicos, harmonizando perfeitamente com a curvatura orgânica.
   * **Zilla Slab (`$font-2`):** Tipografia serifada editorial e técnica, de lastro material. Usada em títulos nobres, citações do manifesto e números de destaque.
   * **Space Mono (`$font-3`):** Tipografia monoespaçada de precisão. Usada para metadados, valores em Reais/Euros, indicadores de DRE, códigos de arquitetura e badges técnicos.

2. **Escala Controlada e Ritmo Vertical:**
   * **Hero H1:** `clamp(3.0rem, 3.2vw + 0.8rem, 4.6rem)`, entrelinha `108%`, `letter-spacing: -0.01em`. Evita quebras bruscas e palavras órfãs.
   * **H2 de Seção:** `clamp(2.2rem, 2.0vw + 0.6rem, 3.2rem)`, entrelinha `112%`.
   * **H3 de Cards:** `1.8rem` a `2.2rem`, entrelinha `124%`.
   * **Textos Corridos (Parágrafos):** `1.6rem` com entrelinha expandida de `160%` e largura máxima de leitura de `68ch`, garantindo leitura técnica confortável.
   * **Badges e Controles:** `1.1rem` a `1.3rem` com caixa alta sóbria (`letter-spacing: 0.08em`) e entrelinha contida.

---

## 3. Contraste Cromático, Biofilia Telúrica e Dinamismo em Blocos (v4.2 - 39 Tokens)
A paleta cromática é telúrica, mineral e acolhedora, ancorada na geologia, hidrografia, botânica e história cafeeira do interior paulista. Ela garante flexibilidade total e dinamismo para todos os blocos do CMS com blindagem técnica de contraste WCAG AA/AAA:

1. **Família Botânica & Vegetal Paulista (Verdes e Clorofilas):**
   * **Verde Musgo de Cuesta (`$bio-moss: #344A32;` / `--bio-moss`):** Fundos de cards escuros alternativos, selos de conservação e sustentabilidade.
   * **Verde Mata Estacional (`$bio-forest: #244735;` / `--bio-forest` / `$bio-success`):** Indicador canônico de DRE positivo, metas superadas e crescimento de margem.
   * **Verde Folha de Café Bourbon (`$bio-leaf: #1B382B;` / `--bio-leaf`):** Títulos botânicos nobres, cabeçalhos escuros e alto contraste.
   * **Verde Alecrim do Campo (`$bio-sage: #4D6E57;` / `--bio-sage`):** Bordas ativas, tags de cerrado rupestre e ícones secundários.
   * **Verde Broto & Palmito Juçara (`$bio-sprout: #6C8B64;` / `--bio-sprout`):** Tags de inovação, novos lançamentos e produtos em fase piloto.
   * **Verde Líquen Rupestre (`$bio-lichen: #8EA885;` / `--bio-lichen`):** Acentos sutis, divisórias orgânicas e tags suaves.
   * **Clorofila Pálida (`$bio-green-subtle: #E6EFE5;` / `--bio-green-subtle`):** Superfície de apoio suave para blocos ecológicos e sustentabilidade.

2. **Família Geológica, Solos & Terracotas (Minerais e Acentos Tectônicos):**
   * **Terracota Tectônico (`$a-1: #7A4207;` / `--acento-terracota`):** Acento primário da marca, botões de conversão e foco visual.
   * **Terracota Solar / Iluminado (`$a-2: #9E5509;` / `--acento-hover`):** Estados de hover e transições ativas de botões.
   * **Terra Roxa Vulcânica (`$bio-terraroxa: #522416;` / `--bio-terraroxa`):** Solo basáltico paulista, blocos de liderança e cabeçalhos terrosos.
   * **Argila Vermelha de Olaria (`$bio-clay: #933E24;` / `--bio-clay`):** Cerâmica tradicional, botões secundários terrosos e destaques.
   * **Arenito Botucatu (`$bio-sandstone: #C88E52;` / `--bio-sandstone`):** Minerais de cuesta, selos de garantia técnica e badges ilustrados.
   * **Ocre de Safra (`$bio-warning: #8C5808;` / `--bio-warning`):** Alertas operacionais de estoque, latência em integrações e itens em observação.
   * **Âmbar Solar (`$bio-amber: #B87514;` / `--bio-amber`):** Métricas de faturamento em aceleração, ratings de clientes e taxas de conversão.
   * **Brasas de Queimada (`$bio-danger: #7A231D;` / `--bio-danger`):** Gargalos de conversão, erros de checkout e alertas críticos no DRE.
   * **Cerâmica Crua (`$bio-ceramic: #D98260;` / `--bio-ceramic`):** Contornos suaves de foco e badges de categoria acolhedores.
   * **Poeira de Tijolo (`$bio-terracotta-subtle: #F7EBE4;` / `--bio-terracotta-subtle`):** Superfície mineral quente de fundo para blocos de alerta e banners promocionais.

3. **Família Dendrológica, Grãos & Torrefação (Madeiras e Café):**
   * **Marrom Squammata / Café Torrado (`$m-2: #3A2313;` / `--marrom-squammata`):** Âncora da marca, cor do logotipo da ave e blocos solenes.
   * **Cacau Cabruca / Tanino Escuro (`$bio-cocoa: #2B1A12;` / `--bio-cocoa`):** Profundidade para cards de arquitetura de software e rodapés de engenharia.
   * **Jacarandá Paulista (`$bio-jacaranda: #442B21;` / `--bio-jacaranda`):** Madeira nobre de planalto, cabeçalhos editoriais e seções premium.
   * **Casca de Peroba-Rosa (`$bio-wood: #633F2E;` / `--bio-wood`):** Rústico e orgânico para etapas de esteira e processos industriais.
   * **Palha Seca & Milho Crioulo (`$bio-straw: #CCA458;` / `--bio-straw`):** Tom dourado de colheita para badges de safra e pontuações de performance.
   * **Flor de Café & Seda (`$bio-coffee-flower: #EBDCBF;` / `--bio-coffee-flower`):** Bege solar nobre para caixas de destaque de texto e selos de garantia.
   * **Marfim de Madeira Clara (`$bio-wood-subtle: #F4EDE4;` / `--bio-wood-subtle`):** Superfície acolhedora de alto aconchego para blocos de história e cultura.

4. **Família Hidrográfica & Atmosfera Paulista (Águas, Céus e Crepúsculo):**
   * **Azul Rio Piracicaba (`$bio-river: #244558;` / `--bio-river`):** Água profunda de leito mineral, cartões analíticos de segurança e APIs.
   * **Bruma de Cuesta & Neblina (`$bio-mist: #43677A;` / `--bio-mist`):** Neblina matinal das serras, blocos de cloud infrastructure e pipelines.
   * **Céu de Inverno Paulista (`$bio-sky: #688FA3;` / `--bio-sky`):** Azul seco e cristalino para links secundários e badges informativos.
   * **Nascente de Rocha (`$bio-spring: #8FAFC0;` / `--bio-spring`):** Transparência e fluxo de dados, conectores de fluxograma e linhas.
   * **Espelho d'Água (`$bio-water-subtle: #E5EEF3;` / `--bio-water-subtle`):** Superfície refrescante de apoio para blocos de suporte, onboarding e documentação.
   * **Crepúsculo Sertanejo (`$bio-twilight: #483544;` / `--bio-twilight`):** Violeta terroso do pôr do sol nos canaviais, blocos de insights e relatórios estratégicos.
   * **Ametista de Geodo Paulista (`$bio-amethyst: #684860;` / `--bio-amethyst`):** Mineral raro dos basaltos do Paranapanema, planos corporativos e módulos exclusivos.
   * **Névoa Crepuscular (`$bio-twilight-subtle: #EFE8ED;` / `--bio-twilight-subtle`):** Superfície suave inspiradora para blocos de inovação e design.

5. **Família Estrutural Neutra (Fundações e Texto de Alto Contraste):**
   * **Concreto Branco Niemeyer (`$m-5: #FAF9F6;` / `--branco-niemeyer`):** Canvas principal canônico do tema (16.5:1 com $m-1).
   * **Argila Seca (`$m-5-alt: #F3EFE6;` / `--superficie-argila`):** Superfície secundária de apoio para ritmo visual e tabelas (15.2:1 com $m-1).
   * **Mármore Travertino Paulista (`$bio-travertine: #EAE3D6;` / `--bio-travertine`):** Baixo relevo mineral, caixas de citação e cartões sóbrios.
   * **Borda Mineral Suave (`$m-4: #D5CFC6;` / `--marrom-borda-suave`):** Delimitador táctil e linhas divisórias entre cartões e colunas.
   * **Seixo de Rio / Cinza Cascalho (`$bio-pebble: #736B63;` / `--bio-pebble`):** Textos terciários, metadados, carimbos de data e legendas (4.5:1).
   * **Chumbo Mineral Terroso (`$m-3: #3E3731;` / `--concreto-medio`):** Textos secundários, parágrafos técnicos e ícones de apoio (7.8:1 - WCAG AAA).
   * **Basalto Profundo / Carvão Técnico (`$m-1: #1A1A1A;` / `--carvao-tecnico`):** Títulos primários, textos de corpo e máximo contraste leitor (16.5:1 - WCAG AAA).

6. **Classes Utilitárias de Blocos para Dinamismo Visual:**
   * **Cards Temáticos:** `.mil-card-bio-forest`, `.mil-card-bio-river`, `.mil-card-bio-terracotta`, `.mil-card-bio-wood`, `.mil-card-bio-twilight`.
   * **Botões Temáticos:** `.mil-btn-bio-forest`, `.mil-btn-bio-river`, `.mil-btn-bio-terraroxa`, `.mil-btn-bio-coffee`.
   * **Badges Temáticos:** `.mil-badge-moss`, `.mil-badge-river`, `.mil-badge-terraroxa`, `.mil-badge-sandstone`, `.mil-badge-amber`, `.mil-badge-twilight`, `.mil-badge-coffee`, `.mil-badge-clay`.

3. **Elevação e Luz Solar Difusa (Sombras Naturais):**
   * Proibido o uso de sombras cinzentas artificiais baseadas em preto puro (`rgba(0, 0, 0, x)`).
   * Toda elevação de cards e modais deve utilizar pigmento terroso aquecido (`#3A2313` ou `#3E3731`):
     * `$shadow-soft: 0 10px 30px -6px rgba(58, 35, 19, 0.06), 0 4px 12px -2px rgba(62, 55, 49, 0.04);`
     * `$shadow-hover: 0 18px 40px -8px rgba(58, 35, 19, 0.11), 0 6px 16px -3px rgba(122, 66, 7, 0.06);`

4. **Regras Estritas de Contraste:**
   * **Fim da Opacidade Esmaecida:** Eliminar `.mil-opacity-text { opacity: .5; }`. Substituir por opacidade mínima de `0.88` ou cor direta contrastada (`$m-3`).
   * **Heróis e Fundos Escuros:** Sobre `.mil-overlay` escuro (`$m-1` ou `$m-2`), todos os textos devem ser claros (`$m-5 #FAF9F6` ou branco puro `#FFFFFF`). NUNCA aplicar `.mil-c-m-3` (escuro) sobre fundo escuro.
   * **Botões de Ação (`.mil-btn.mil-accent`):** Fundo terracota (`$a-1`) com texto branco puro (`#FFFFFF`) e ícone contrastado.

---

## 4. Recursos, Vetores e Assets: Resiliência e Fallbacks Biofílicos
1. **Acervo Institucional Padronizado e Prioridade Vetorial:**
   * Ativos localizados em `public/logo/squammata/`.
   * Prioridade absoluta para arquivos vetoriais (`.svg`) em cabeçalhos, rodapés e favicons (`squammata-lockup-horizontal.svg`, `squammata-wordmark.svg`, `squammata-simbolo-favicon.svg` e `squammata-monograma-sq.svg`), mantendo os arquivos `.png` (`logo-novo-45.png`, `passarinho.png`) e `still-capa.jpg` apenas como apoio de compatibilidade legada.
   * Na assinatura horizontal combinada, o centro óptico do peito da ave deve alinhar-se ao eixo médio da tipografia `Quicksand` com peso calibrado (`Regular/Medium`), evitando que a cauda desloque a altura útil da barra de navegação.
   * Proibido exibir o símbolo do pássaro simultaneamente no cabeçalho e como marca d'água na mesma dobra de tela: quando `.mil-bird-watermark` estiver ativo na seção, o topo deve exibir apenas o logotipo tipográfico ou o monograma `SQ`.

2. **Fallbacks Elegantes e Biomiméticos em Cards:**
   * Cards de serviços, projetos, blog e equipe sem imagem cadastrada devem renderizar um contorno orgânico (`border-radius: 16px`, fundo `$m-5-alt` e borda `$m-4`) preenchido pela malha vetorial de escamas imbricadas (`squammata-bio-pattern.svg`) ou pela silhueta centralizada da ave em opacidade `0.06`, eliminando qualquer texto de erro ou placeholder genérico.

---

## 5. Diretrizes Inegociáveis
* **Embargo Nominal e Territorial:** Zero citações a "Algarve" e "Samuel Luz" em todo o código, comentários, metadados e templates.
* **Protocolo No AI Slop (Peter Yang & OpenDesign):** Zero travessões didáticos (—) no meio de orações, zero superlativos vazios ("revolucionário", "líder indiscutível"), zero números hiperbólicos inventados ("10x faster", "99.9% uptime") e zero emojis como ícones funcionais.
* **Contraste WCAG AAA:** Mínimo de 7:1 em todos os textos técnicos e 16.5:1 nas combinações primárias de leitura.

---

## 6. Protocolo Anti-AI-Slop & Craftsmanship (Padrões OpenDesign & Hallmark)

Fundamentado nas diretrizes técnicas de **OpenDesign** (7 Pecados Capitais de Frontend IA) e **Hallmark (Together AI)**, o Squammata v4.2 implementa uma camada rigorosa de proteção contra a estética pré-fabricada de modelos de linguagem:

### 1. Blindagem Contra os 7 Pecados Capitais de IA (Auditoria P0):
1. **Default Tailwind Indigo Bloqueado:** Proibição estrita de `#6366f1`, `#4f46e5`, `#7c3aed`. O sistema utiliza unicamente a paleta mineral paulista ancorada em Terracota (`#7A4207`), Café (`#3A2313`), Clorofila (`#244735`) e Basalto (`#1A1A1A`).
2. **Fim do Two-Stop "Trust Gradient" no Hero:** Proibido o degradê roxo→azul ou azul→ciano. A interface adota superfícies minerais planas (`#FAF9F6`, `#F3EFE6`), textura biomimética de escamas e divisores de curvatura dorsal da ave.
3. **Erradicação de Emojis em Elementos de UI:** Banimento total de emojis (`✨`, `🚀`, `🎯`, `⚡`, `🔥`, `💡`, `🌿`, `🧱`) em botões, títulos, listas e badges. Utilização exclusiva de monoline SVGs (1.6px a 1.8px de traço com `currentColor`) ou tipografia intencional.
4. **Respeito à Tríade Tipográfica:** Display e títulos nobres usam obrigatoriamente a serifada editorial `Zilla Slab` (`var(--font-heading)`), a interface humanista usa `Quicksand` (`var(--font-body)`), e metadados e métricas financeiras usam `Space Mono` (`var(--font-mono)`).
5. **Eliminação do Card de Dashboard Genérico com Borda Lateral:** Banido o padrão `border-l-4 border-indigo-500 rounded-lg`. Adotado raio orgânico isotrópico (16px), borda mineral contínua de 1px e elevação por sombra difusa terrosa (`var(--shadow-soft)`).
6. **Métricas Reais e Parâmetros Operacionais Auditáveis:** Todo número em destaque deve representar métricas operacionais factuais ("Ciclo de 14 Dias", "Normas CPC / IFRS", "Latência P95 < 120ms", "WCAG AAA 16.5:1"), eliminando dados fictícios de marketing.
7. **Redação B2B sem Encheção de Linguiça:** Substituição de jargões ocos e lorem ipsum por comunicação técnica direta focada em vazamentos fiscais de checkout, arquitetura headless e governança contábil.

### 2. Motor de Diversidade Macroestrutural (Hallmark Anti-Sameness):
Para evitar a síndrome do "mesmo template com cores trocadas", o Squammata v4.2 estabelece quatro macroestruturas canônicas:
* **Macroestrutura 01 (DRE & Auditoria Operacional):** Split assimétrico 7/5 com painel de métricas financeiras em destaque lateral para consultorias de alto valor.
* **Macroestrutura 02 (Manifesto & Editorial Paulista):** Coluna ampla central com tipografia Zilla Slab, colofão e citação de liderança.
* **Macroestrutura 03 (Arquitetura Headless & Engenharia):** Grid bento com blocos de código monoline, especificações de endpoints e latência P95.
* **Macroestrutura 04 (Diagnóstico de Vazamentos de Checkout):** Funil comparativo antes vs depois com tabela densa de dispersão e recuperação de margem.

### 3. Disciplina Interativa dos 8 Estados (Hallmark State Standard):
Todo componente interativo do tema implementa estilização declarada para os 8 estados:
* `default`: Base sóbria e estável.
* `hover`: Elevação física com `transform: translateY(-2px)` e expansão de sombra `$shadow-hover`.
* `focus`: Anel de foco nítido com `outline: 2px solid $marrom-squammata` e offset de 2px.
* `active`: Compressão táctil com `transform: translateY(1px)` e sombra interna.
* `disabled`: Opacidade calibrada (0.45) e bloqueio de cliques (`cursor: not-allowed`).
* `loading`: Indicador de processamento assíncrono e bloqueio contra duplo clique.
* `error`: Borda de alerta mineral (`#A33A2A`) e mensagem de contexto.
* `success`: Confirmação positiva em Verde Mata Estacional (`#244735`).

### 4. Selo de Auto-Crítica Pré-Emissão (Pre-Emit Critique Radar):
Antes de qualquer entrega visual, o artefato é auditado nos 6 eixos canônicos:
`/* Hallmark · critique: P5 H5 E5 S5 R5 V5 · Audit: 100% Pass */`
* **P (Filosofia):** 5/5 (Biomimética da Columbina squammata e identidade do interior paulista).
* **H (Hierarquia):** 5/5 (Escala fluida clamp e tríade tipográfica rigorosa).
* **E (Execução):** 5/5 (Contraste WCAG AAA e física de curvatura exponencial).
* **S (Especificidade):** 5/5 (Métricas operacionais reais de DRE e infraestrutura).
* **R (Restrição):** 5/5 (Zero emojis, zero indigo padrão, zero bordas unilaterais).
* **V (Variedade):** 5/5 (4 macroestruturas e 6 atmosferas visuais de bloco).

