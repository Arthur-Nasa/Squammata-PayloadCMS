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

## 3. Contraste Cromático, Biofilia Telúrica e Acessibilidade (WCAG AA/AAA)
A paleta cromática é telúrica, mineral e acolhedora, ancorada na geologia e na botânica do interior paulista, com garantia técnica de legibilidade em todas as condições:

1. **Tons Estruturais e Institucionais:**
   * **Canvas Niemeyer / Calcário (Fundo Claro):** `$m-5: #FAF9F6;` (Concreto Branco aquecido / algodão cru, eliminando o brilho estéril do branco `#FFFFFF` em grandes superfícies).
   * **Superfície de Apoio / Argila Seca:** `$m-5-alt: #F3EFE6;` (Fundo secundário para destaque de seções, tabelas e blocos de arquitetura).
   * **Texto Primário / Basalto Profundo:** `$m-1: #1A1A1A;` (Preto grafite profundo). Contraste de 16.5:1 sobre `$m-5` (WCAG AAA).
   * **Marrom Squammata / Café Torrado (Âncora da Marca):** `$m-2: #3A2313;` (Cor original do logotipo e do símbolo da ave). Contraste de 13.4:1 sobre `$m-5` (WCAG AAA). Usado em cabeçalhos institucionais, selos e ícones primários.
   * **Texto Secundário / Técnico:** `$m-3: #3E3731;` (Cinza chumbo mineral terroso). Contraste de 7.8:1 sobre `$m-5` (WCAG AAA).
   * **Bordas e Superfícies Alternadas:** `$m-4: #D5CFC6;` (Sedimento mineral sutil).
   * **Acento da Marca (Terracota Tectônico / Terra Roxa):** `$a-1: #7A4207;` (Usado em CTAs, links ativos, onda da letra Q e pontos focais).
   * **Acento Secundário (Terracota Iluminado / Insolação):** `$a-2: #9E5509;` (Usado para estados de hover e foco ativo).

2. **Tokens Semânticos Biofílicos (Indicadores de DRE, Performance e UI):**
   * **Sucesso / Mata Estacional:** `$bio-success: #244735;` (Verde profundo da flora interiorana para margens positivas, crescimento de receita e aprovações).
   * **Atenção / Ocre de Safra:** `$bio-warning: #8C5808;` (Âmbar terroso escuro para alertas de estoque, latência ou métricas em observação).
   * **Crítico / Brasas de Queimada:** `$bio-danger: #7A231D;` (Vermelho óxido fechado para gargalos de conversão, erros de integração ou queda de margem).

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
* **Protocolo No AI Slop (Peter Yang):** Zero travessões explicativos no meio de orações, zero superlativos vazios e zero promessas milagrosas.
