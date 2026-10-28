# Manual do Desenvolvedor: Boilerplate White-Label & Gerador de Sites

Bem-vindo ao manual técnico do **Boilerplate Engine** (Next.js 15 App Router + Payload CMS v3). Este documento orienta engenheiros e agências a replicar e entregar sites sob medida para novos clientes em minutos.

---

## 1. Arquitetura do Boilerplate

O motor foi projetado com acoplamento zero à identidade visual de um cliente específico. Ele opera através de 4 camadas:

1. **Camada de Manifesto (`src/site.config.ts`):** Fonte única de verdade de dados cadastrais, logos, contatos, SEO e features.
2. **Camada de Temas Dinâmicos (`src/theme/presets.ts` & `src/utilities/generateThemeCss.ts`):** Injeta tokens de cores e curvaturas diretamente nas variáveis CSS do `:root`, eliminando a necessidade de recompilar SCSS a cada alteração de marca.
3. **Camada de Componentes Modulares (`src/blocks/` & `src/fields/elementCustomization.ts`):** Mais de 30 blocos que aceitam customização individual de cores, cantos orgânicos e chanfros decorativos (`.mil-angle`).
4. **Motor de Provisionamento Programático (`/api/provision` & `provisionEngine.ts`):** Cria administradores, popula globals e configura SEO Local com um único POST JSON.

---

## 2. Passo a Passo: Criando um Site para um Novo Cliente

### Método 1: Via Manifesto Estático (`site.config.ts`)
1. Clone o repositório na branch `boilerplate/engine` para a nova pasta do cliente:
   ```bash
   git clone -b boilerplate/engine https://github.com/.../meu-novo-cliente.git
   ```
2. Abra `src/site.config.ts` e ajuste:
   * `branding.name`: Nome do cliente (ex: "Clínica Horizonte").
   * `branding.tagline`: Slogan (ex: "Odontologia Estética e Saúde Integrada").
   * `branding.document`: CNPJ do cliente.
   * `contact`: E-mails, WhatsApp, endereço e cidades atendidas.
   * `theme.preset`: Escolha um dos presets canônicos (`corporate-blue`, `forest`, `minimal-dark`, `terracotta`, `luxury-gold`).
   * `theme.dividerStyle`: Estilo de transição entre seções (`curve`, `wave`, `slant`, `straight`, `none`).
3. Inicie o banco e rode a aplicação:
   ```bash
   pnpm dev
   ```

---

### Método 2: Via Endpoint de Provisionamento Automático (`/api/provision`)
Você pode enviar uma requisição HTTP contendo o manifesto do cliente:

```bash
curl -X POST http://localhost:3000/api/provision \
  -H "Content-Type: application/json" \
  -d '{
    "branding": {
      "name": "Horizonte Advocacia",
      "legalName": "Horizonte Sociedade de Advogados",
      "tagline": "Direito Empresarial e Tributário",
      "description": "Assessoria jurídica estratégica para médias empresas."
    },
    "contact": {
      "email": "contato@horizonteadv.com.br",
      "phone": "+55 19 3322-1100",
      "whatsapp": "+55 19 99888-7766",
      "address": {
        "street": "Avenida José de Souza Campos",
        "number": "500",
        "neighborhood": "Nova Campinas",
        "city": "Campinas",
        "state": "SP",
        "country": "Brasil",
        "zipCode": "13092-123"
      }
    },
    "theme": {
      "preset": "corporate-blue",
      "primaryColor": "#1A365D",
      "primaryHover": "#2A4365",
      "radius": "modern",
      "dividerStyle": "slant",
      "enableWatermark": false
    }
  }'
```

---

## 3. Catálogo de Presets de Tema Disponíveis

* **`terracotta`:** Tons quentes e telúricos de terra roxa e argila (ideal para consultorias, engenharia e agronegócio).
* **`forest`:** Verdes botânicos e clorofila (ideal para sustentabilidade, ESG, biotecnologia e bem-estar).
* **`corporate-blue`:** Azuis minerais profundos e sóbrios (ideal para escritórios de advocacia, tecnologia, finanças e contabilidade).
* **`minimal-dark`:** Fundo escuro em basalto e carvão técnico (ideal para produtos digitais, desenvolvedores e estúdios criativos).
* **`luxury-gold`:** Acentos em dourado e marrom nobre (ideal para arquitetura de luxo, joalherias e hospitalidade premium).

---

## 4. Biblioteca Atômica e Documentação Viva

Cada nova instalação traz consigo o catálogo interativo de componentes na rota `/docs` (`http://localhost:3000/docs`), permitindo inspecionar botões, cartões, formulários e paletas em tempo real.
