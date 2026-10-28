# Manual do Usuário e Guia do Operador: Painel Administrativo Squammata

Bem-vindo ao manual oficial de operação e personalização do painel administrativo da **Squammata**. Este guia foi elaborado para que editores, gestores de conteúdo e engenheiros possam operar o painel com autonomia total, personalizando elementos visuais, paletas cromáticas, cantos orgânicos, chanfros decorativos e integrando agentes de IA com máxima segurança e fidelidade à marca.

---

## 1. Visão Geral da Arquitetura & Identidade Visual

O sistema da Squammata combina **Next.js 15 (App Router)** com **Payload CMS 3.0** e banco de dados **PostgreSQL**. A identidade visual baseia-se no conceito de **Biofilia Paulista** (linhas limpas, tons minerais, café, terracota e floresta), com rigor técnico voltado a **Margem Real no DRE** e acessibilidade **WCAG AAA**.

### Vocabulário de Customização:
- **Botões (`.mil-btn`):** Elementos interativos com 8 esquemas de cor, 6 variações de raio e suporte ao chanfro diagonal (`.mil-angle`).
- **Cards e Módulos (`.mil-card`):** Superfícies com elevação mineral, cantos calibrados e chanfro opcional no canto superior direito.
- **Conteúdo Reutilizável (`Reusable Content`):** Módulos editados uma única vez que propagam atualizações para todas as páginas vinculadas.
- **API de Design Tokens (`/api/design-tokens`):** Vocabulário estruturado em JSON para manipulação direta por agentes de IA.

---

## 2. Passo 1: Acesso e Autenticação

Para acessar a área de administração:
1. Abra o navegador no endereço: `http://localhost:3000/admin` (ou o IP/domínio de produção correspondente).
2. Insira as credenciais de acesso corporativo:
   - **E-mail:** `contato@squammata.com.br`
   - **Senha:** `squammata-admin-2026`
3. Clique em **Login**.

![Tela de Login do Painel Administrativo](/docs/screenshots/01_admin_login.png)

> [!TIP]
> O painel suporta alternância automática de tema claro/escuro de acordo com a preferência do sistema operacional, preservando contraste máximo e conformidade WCAG AAA.

---

## 3. Passo 2: Visão Geral do Dashboard

Após o login, você verá o painel principal organizado em duas seções essenciais:
- **Collections (Coleções de Dados):**
  - **`Pages`:** Páginas completas do site (Home, Serviços, Projetos, etc.).
  - **`Reusable Contents`:** Biblioteca central de blocos reutilizáveis.
  - **`Artigos / Publicações` & `Categorias`:** Blog técnico e artigos de engenharia.
  - **`Estudos de Caso`:** Cases com métricas financeiras de DRE.
  - **`Media`:** Gerenciador de uploads, fotos e logotipos.
- **Globals (Configurações Globais):**
  - **`Header`:** Menu de navegação e botão de contato superior.
  - **`Footer`:** Rodapé institucional, links e dados de contato.
  - **`Configurações Institucionais` & `SEO`:** Metadados globais e schema.org.

![Dashboard Administrativo Squammata](/docs/screenshots/02_admin_dashboard.png)

---

## 4. Passo 3: Gestão de Páginas (`Pages`)

Na coleção **Pages**, você gerencia a estrutura de cada rota do site.

1. No menu lateral ou no Dashboard, clique em **Pages**.
2. A lista de páginas publicadas será exibida (Home, Home 2, Prices, Contact, FAQ, etc.).
3. Clique sobre o nome da página (ex: **Squammata / `home`**) para abrir o editor.

````carousel
![Lista de Páginas](/docs/screenshots/03_admin_pages_list.png)
<!-- slide -->
![Editor da Página Home com Blocos Modulares](/docs/screenshots/04_admin_page_layout_blocks.png)
````

### Como Funciona o Layout Modular de Blocos:
Cada página é composta por um campo **Layout (Blocks)**:
- Você pode **reordenar blocos** arrastando a alça lateral.
- Você pode **adicionar novos blocos** clicando em **Add Layout** e selecionando o tipo de bloco desejado (`Reusable Content`, `Content`, `Media Block`, `Hero`, etc.).
- Na maioria das páginas da Squammata, os blocos são inseridos como **`Reusable Content`**, garantindo que edições feitas em um bloco reflitam instantaneamente em todas as páginas onde ele é utilizado.

---

## 5. Passo 4: Biblioteca de Conteúdo Reutilizável (`Reusable Content`)

Esta é a área mais poderosa do CMS. Todos os blocos centrais do site (`Hero One`, `Features`, `Prices`, `Call to Action 2`, etc.) estão catalogados aqui como módulos autônomos.

1. Clique em **Reusable Contents** no Dashboard.
2. Localize o bloco que deseja editar na lista (ex: `Hero One` [ID 13], `Features` [ID 14], `Prices (Page)` [ID 35]).
3. Clique sobre a linha para entrar na tela de personalização do bloco.

![Lista de Blocos Reutilizáveis](/docs/screenshots/05_admin_reusable_content_list.png)

---

## 6. Passo 5: Como Editar e Personalizar Cada Elemento

Todos os blocos contam agora com o **Factory Canônico de Customização**, permitindo alterar cores, cantos e triângulos de forma granular.

### A. Personalização de Botões

Cada botão no painel possui 4 parâmetros principais:
1. **Texto & URL:** O rótulo exibido e o link de destino (âncora `#contato`, página interna `/services` ou URL externa).
2. **Esquema de Cor:**
   - **Terracota (`terracota`):** Cor principal da marca (`#C15C3D`), alto contraste e foco de conversão.
   - **Café / Basalto (`cafe`):** Tom escuro mineral (`#3A2313`), ideal para botões secundários sóbrios.
   - **Floresta Biofilia (`floresta`):** Verde orgânico (`#244735`), associado a sustentabilidade e crescimento.
   - **Âmbar DRE (`ambar`):** Tom solar quente (`#B87514`), destaque financeiro.
   - **Rio Tietê (`rio`):** Azul profundo (`#244558`), dados e engenharia técnica.
   - **Argila Suave (`argila`):** Fundo suave claro (`#F3EFE6`).
   - **Branco Mineral Niemeyer (`niemeyer`):** Fundo puro luminoso (`#FAF9F6`).
   - **Contorno / Outline (`outline`):** Borda delicada com fundo transparente.
3. **Cantos / Raio de Borda (Border-Radius):**
   - **Padrão do Sistema (8px):** Raio equilibrado.
   - **Cantos Retos / Sharp (4px):** Rigor industrial e técnico.
   - **Suave / Small (8px):** Transição suave.
   - **Orgânico / Medium (16px):** Alinhado com a identidade biofílica.
   - **Amplo / Large (24px):** Botões volumosos e modernos.
   - **Cápsula / Pill (100px):** Bordas perfeitamente arredondadas em formato pílula.
4. **Canto Triangular Chanfrado (`.mil-angle`):**
   - Marque a caixa de seleção **"Ativar Canto Triangular Chanfrado (mil-angle)"** para aplicar o chanfro angular característico da Squammata no canto superior direito.
5. **Exibir Seta Triangular Interna:**
   - Ativa ou remove o ícone de seta angular rotacionada com disco circular.

![Customização de Botões no Hero One](/docs/screenshots/06_admin_hero_customization.png)

---

### B. Personalização de Diferenciais (`Features`)

No bloco **Features**:
- Os **Botões de Ação** superiores (Botão 1 e Botão 2) possuem os seletores completos de cor, cantos e triângulo.
- A lista de **Features (Cards)** permite editar cada item individualmente:
  - **Ícone:** Upload de imagem SVG ou PNG.
  - **Título & Descrição:** Textos explicativos com suporte a HTML semântico.
  - **Item / Card (Esquema de Cor):** Altera a cor de fundo do cartão entre Padrão Mineral, Argila, Terracota, Floresta, Café ou Contorno Delicado.
  - **Item / Card (Canto Triangular Chanfrado):** Ativa o chanfro no cartão correspondente.

![Customização de Botões e Cards no Bloco Features](/docs/screenshots/07_admin_features_customization.png)

---

### C. Personalização de Tabela de Investimentos (`PricesBlock`)

No bloco **Prices (Page)**:
- **Botão Superior:** Botão de diagnóstico geral no cabeçalho da seção.
- **Array de Planos e Soluções:**
  - **Nome do Plano:** (ex: *Auditoria Fogo-Apagou*, *Setup de Engenharia*).
  - **Preço & Sufixo:** (ex: *490*, */ one-time*).
  - **Lista de Recursos (Features List):** Cada item pode ser marcado como `Disabled` para indicar recursos não inclusos no plano (adiciona `.mil-empty`).
  - **Botão do Plano:** Customização independente para o botão de contratação de cada plano.
  - **Estilo do Card:** Define a cor da superfície do cartão e a ativação do chanfro triangular `.mil-angle`.

![Customização da Tabela de Investimentos](/docs/screenshots/08_admin_prices_customization.png)

---

### D. Personalização de Chamadas para Ação (`CallToAction` / `CallToAction2`)

Nos blocos de Call to Action:
- Configure a mensagem de impacto e utilize `<span class="mil-opacity-text">` para criar contraste de ênfase visual.
- Personalize os botões com esquemas contrastantes (por exemplo: Botão 1 em Floresta Biofílica e Botão 2 em Café Basalto).

![Customização de Call to Action](/docs/screenshots/09_admin_cta_customization.png)

---

## 7. Passo 6: Configurações Globais (`Header` e `Footer`)

### Header (Cabeçalho)
No menu lateral, navegue até **Globals > Header**:
- **Navigation Links:** Adicione ou reordene itens de menu (`Serviços`, `Estudos de Caso`, `Metodologia`, `Artigos`, etc.).
- **Button Action:** Configure o botão de ação rápida fixo do topo ("Solicitar Diagnóstico").

![Configuração Global do Header](/docs/screenshots/10_admin_global_header.png)

### Footer (Rodapé)
No menu lateral, navegue até **Globals > Footer**:
- **Colunas Institucionais:** Edite os links de governança, termos e catálogo de serviços.
- **Dados Regionais:** Mantenha atualizados o endereço do polo operacional de Campinas / RMC e os canais de contato.

![Configuração Global do Footer](/docs/screenshots/11_admin_global_footer.png)

---

## 8. Passo 7: Como os Elementos são Renderizados no Frontend

Ao salvar e publicar qualquer alteração no painel, o Next.js revalida a renderização e aplica as classes canônicas:

````carousel
![Hero Renderizado com Botões Floresta e Basalto](/docs/screenshots/12_frontend_hero_rendered.png)
<!-- slide -->
![Bloco Features com Botões e Cards Alinhados](/docs/screenshots/13_frontend_features_rendered.png)
<!-- slide -->
![Tabela de Investimentos com Cards Chanfrados .mil-angle](/docs/screenshots/14_frontend_prices_rendered.png)
````

---

## 9. Passo 8: API de Design Tokens para IA Integrada

Para permitir que agentes autônomos, workflows de automação e LLMs interajam e modifiquem a identidade visual da Squammata de forma programática, criamos o endpoint público de tokens:

- **Endpoint:** `GET http://localhost:3000/api/design-tokens`
- **Formato:** JSON estruturado com metadados semânticos e instruções para agentes.

![Resposta do Endpoint /api/design-tokens](/docs/screenshots/15_api_design_tokens.png)

### Exemplo de Consumo via cURL:
```bash
curl -s http://localhost:3000/api/design-tokens | jq .
```

### Exemplo de Resposta:
```json
{
  "system": "Squammata Biofilia Paulista Design Tokens",
  "version": "1.0.0",
  "tokens": {
    "buttons": {
      "colors": [
        { "label": "Terracota (Principal Squammata · #C15C3D)", "value": "terracota" },
        { "label": "Café / Mineral Basalto (#3A2313)", "value": "cafe" },
        { "label": "Floresta Biofilia (#244735)", "value": "floresta" }
      ],
      "radii": [
        { "label": "Padrão do Sistema (8px)", "value": "default" },
        { "label": "Cantos Retos / Sharp (4px)", "value": "sharp" },
        { "label": "Cápsula / Pill (100px)", "value": "pill" }
      ]
    },
    "palette": {
      "terracota": "#C15C3D",
      "basalto": "#3A2313",
      "floresta": "#244735",
      "argila": "#F3EFE6"
    }
  },
  "instructionsForAI": {
    "buttonCustomization": "Para configurar botões em qualquer bloco, use {prefix}_color, {prefix}_radius, {prefix}_has_triangle e {prefix}_show_icon.",
    "cardCustomization": "Para configurar cards ou itens em listas, use {prefix}_style, {prefix}_radius e {prefix}_triangle."
  }
}
```

---

## 10. Checklist de Melhores Práticas para Editores

- [ ] **Hierarquia de Cores:** Em blocos com dois botões, prefira o botão primário com cor de destaque (`terracota` ou `floresta`) e o botão secundário com tom sóbrio (`cafe` ou `outline`).
- [ ] **Consistência de Cantos:** Mantenha raios consistentes dentro da mesma seção (por exemplo, todos os botões com `default` ou todos com `pill`).
- [ ] **Uso Moderado do Chanfro (`.mil-angle`):** O chanfro diagonal é um elemento nobre da marca; utilize-o em cards principais e botões de chamada primária para valorizar a arquitetura biofílica.
- [ ] **Salvar e Publicar:** Lembre-se de clicar no botão superior direito **Publish changes** para que as edições entrem no ar imediatamente.
