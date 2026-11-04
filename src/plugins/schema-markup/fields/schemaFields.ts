import type { Field } from 'payload'
import { compileSchemaGraphHook } from '../hooks/compileSchemaGraph'

export const createSchemaFields = (): Field[] => [
  {
    name: 'schemaMarkup',
    type: 'group',
    label: 'Dados Estruturados Schema.org (JSON-LD)',
    fields: [
      {
        name: 'mode',
        type: 'select',
        label: 'Modo de Gerenciamento das Schemas',
        defaultValue: 'both',
        options: [
          { label: 'Menus Visuais Interativos', value: 'visual' },
          { label: 'JSON-LD Puro (Editor de Código)', value: 'raw' },
          { label: 'Híbrido (Menus com Compilação e Visualização JSON)', value: 'both' },
        ],
        admin: {
          description: 'Escolha se prefere editar as informações através dos menus visuais abaixo ou diretamente via JSON-LD.',
        },
      },
      {
        type: 'tabs',
        tabs: [
          // 1. Menu Pessoa / Autoridade
          {
            name: 'person',
            label: 'Pessoa (Person)',
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'name',
                    type: 'text',
                    label: 'Nome Completo',
                    defaultValue: 'Arthur Saggioratto',
                    required: false,
                    admin: { width: '50%' },
                  },
                  {
                    name: 'alternateName',
                    type: 'text',
                    label: 'Nomes Alternativos / Grafias (separados por vírgula)',
                    defaultValue: 'Arthur Saggioratto Neto, Arthur Nasa',
                    admin: { width: '50%' },
                  },
                ],
              },
              {
                name: 'jobTitle',
                type: 'text',
                label: 'Cargo Executivo / Função Principal',
                defaultValue: 'Head of E-commerce, SEO & Growth',
                required: false,
              },
              {
                name: 'description',
                type: 'textarea',
                label: 'Biografia Executiva (E-E-A-T)',
                defaultValue:
                  'Especialista com 15 anos liderando operações digitais de comércio eletrônico, arquitetura de sistemas, governança de margem de contribuição (DRE/P&L), visibilidade em IA generativa (GEO/AEO) e otimização de conversão (CRO).',
              },
              {
                type: 'row',
                fields: [
                  {
                    name: 'email',
                    type: 'email',
                    label: 'E-mail Profissional',
                    defaultValue: 'arthur.saggioratto@gmail.com',
                    admin: { width: '50%' },
                  },
                  {
                    name: 'telephone',
                    type: 'text',
                    label: 'Telefone Profissional',
                    defaultValue: '+55-19-99349-7819',
                    admin: { width: '50%' },
                  },
                ],
              },
              {
                type: 'row',
                fields: [
                  {
                    name: 'url',
                    type: 'text',
                    label: 'URL Canônica de Identidade',
                    defaultValue: 'https://linkedin.com/in/arthurnasa',
                    admin: { width: '50%' },
                  },
                  {
                    name: 'image',
                    type: 'text',
                    label: 'URL da Imagem / Retrato',
                    defaultValue: 'https://squammata.com.br/arthur-saggioratto.jpg',
                    admin: { width: '50%' },
                  },
                ],
              },
              {
                type: 'row',
                fields: [
                  {
                    name: 'addressLocality',
                    type: 'text',
                    label: 'Município',
                    defaultValue: "Santa Bárbara d'Oeste",
                    admin: { width: '40%' },
                  },
                  {
                    name: 'addressRegion',
                    type: 'text',
                    label: 'Estado (UF)',
                    defaultValue: 'SP',
                    admin: { width: '30%' },
                  },
                  {
                    name: 'addressCountry',
                    type: 'text',
                    label: 'País',
                    defaultValue: 'BR',
                    admin: { width: '30%' },
                  },
                ],
              },
              {
                name: 'alumniOf',
                type: 'array',
                dbName: 'sm_alumni',
                label: 'Formação Acadêmica (Universidades e Faculdades)',
                defaultValue: [
                  {
                    name: 'Universidade Estadual de Campinas (UNICAMP)',
                    url: 'https://www.unicamp.br/',
                  },
                  {
                    name: 'Faculdade de Administração e Artes de Limeira (FAAL)',
                    url: '',
                  },
                ],
                fields: [
                  {
                    name: 'name',
                    type: 'text',
                    label: 'Instituição de Ensino',
                    required: false,
                  },
                  {
                    name: 'url',
                    type: 'text',
                    label: 'Link Oficial da Instituição',
                  },
                ],
              },
              {
                name: 'knowsAbout',
                type: 'array',
                dbName: 'sm_knows',
                label: 'Entidades Semânticas e Conhecimentos Especializados (E-E-A-T)',
                defaultValue: [
                  { topic: 'SEO Técnico e Semântico' },
                  { topic: 'GEO (Generative Engine Optimization) e AEO' },
                  { topic: 'Conversion Rate Optimization (CRO)' },
                  { topic: 'Arquitetura de Plataformas de E-commerce (Shopify Plus, Magento, VTEX)' },
                  { topic: 'Mídia de Performance e Retail Media (Google Ads, Meta Ads, Mercado Ads)' },
                  { topic: 'Governança Financeira de E-commerce, Unit Economics, POAS e DRE/P&L' },
                  { topic: 'Marketplace Seller Center (Omnik) e Integração de ERPs' },
                  { topic: 'Arquitetura de Split Payment em Shopify' },
                  { topic: 'Schema.org JSON-LD e Web Semântica' },
                  { topic: 'Sociologia da Técnica e do Consumo' },
                ],
                fields: [
                  {
                    name: 'topic',
                    type: 'text',
                    label: 'Competência / Tópico Semântico',
                    required: false,
                  },
                ],
              },
              {
                name: 'sameAs',
                type: 'array',
                dbName: 'sm_sameas',
                label: 'Perfis e Perfis Oficiais Canônicos (sameAs)',
                defaultValue: [
                  { url: 'https://linkedin.com/in/arthurnasa' },
                  { url: 'https://blog.ruadocafe.com.br/author/arthur/' },
                ],
                fields: [
                  {
                    name: 'url',
                    type: 'text',
                    label: 'URL do Perfil',
                    required: false,
                  },
                ],
              },
            ],
          },

          // 2. Menu Perguntas Frequentes (FAQPage)
          {
            name: 'faq',
            label: 'FAQ (FAQPage)',
            fields: [
              {
                name: 'items',
                type: 'array',
                dbName: 'sm_faq_items',
                label: 'Lista de Perguntas & Respostas Frequentes',
                defaultValue: [
                  {
                    question: 'O que significa subordinar a operação de e-commerce ao DRE e à margem de contribuição?',
                    answer:
                      'Significa avaliar o sucesso das ações pelo lucro que realmente permanece no caixa da empresa, e não por faturamento bruto ou métricas isoladas de painel como ROAS. Analisamos custos de mercadoria vendida (CMV), taxas de gateway, impostos e frete para garantir que cada real investido em aquisição gere margem líquida positiva (POAS).',
                  },
                  {
                    question: 'Como funciona a otimização para motores de busca com Inteligência Artificial (GEO e AEO)?',
                    answer:
                      'Trata-se da modelagem semântica de entidades e tópicos com dados estruturados Schema.org em JSON-LD e conteúdo técnico de alta densidade (E-E-A-T). Essa arquitetura permite que assistentes como Google AI Overviews, Perplexity e ChatGPT citem e recomendem a marca como autoridade confiável no segmento.',
                  },
                  {
                    question: 'Quais são os formatos de contratação disponíveis para trabalhar com Arthur Saggioratto?',
                    answer:
                      'A atuação ocorre em três modelos: Liderança Executiva (Head de E-commerce, Growth ou SEO/CRO em regime fracionado ou integral), Consultoria Estratégica Continuada pela Squammata com acompanhamento mensal de metas e governança de margem, ou Auditorias Técnicas Fechadas (sprints de 3 a 4 semanas para diagnóstico profundo de SEO, CRO e infraestrutura).',
                  },
                  {
                    question: 'Qual é a vantagem da formação em Sociologia pela UNICAMP para a gestão de tecnologia e e-commerce?',
                    answer:
                      'A formação em Sociologia fornece rigor para compreender plataformas, algoritmos e funis como sistemas sociotécnicos. Em vez de perseguir atalhos passageiros de crescimento que queimam caixa, a estratégia prioriza a construção de ecossistemas sustentáveis de confiança, soberania de canais orgânicos e fidelização genuína do consumidor.',
                  },
                ],
                fields: [
                  {
                    name: 'question',
                    type: 'text',
                    label: 'Pergunta',
                    required: false,
                  },
                  {
                    name: 'answer',
                    type: 'textarea',
                    label: 'Resposta Detalhada e Didática',
                    required: false,
                  },
                ],
              },
            ],
          },

          // 3. Menu Organização (Organization)
          {
            name: 'organization',
            label: 'Empresa (Organization)',
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'name',
                    type: 'text',
                    label: 'Nome Institucional da Organização',
                    defaultValue: 'Squammata Consultoria & Operações Estratégicas',
                    required: false,
                    admin: { width: '50%' },
                  },
                  {
                    name: 'taxID',
                    type: 'text',
                    label: 'Cadastro Nacional da Pessoa Jurídica (CNPJ)',
                    defaultValue: '31.384.814/0001-09',
                    admin: { width: '50%' },
                  },
                ],
              },
              {
                name: 'url',
                type: 'text',
                label: 'Endereço Web Oficial',
                defaultValue: 'https://squammata.com.br',
              },
            ],
          },

          // 4. Menu Ocupação (Occupation)
          {
            name: 'occupation',
            label: 'Ocupação (Occupation)',
            fields: [
              {
                type: 'row',
                fields: [
                  {
                    name: 'name',
                    type: 'text',
                    label: 'Título da Ocupação',
                    defaultValue: 'Head of E-commerce, SEO & Growth',
                    admin: { width: '50%' },
                  },
                  {
                    name: 'occupationalCategory',
                    type: 'text',
                    label: 'Código CBO / Standard Occupational Classification (SOC)',
                    defaultValue: '11-2021.00',
                    admin: { width: '50%' },
                  },
                ],
              },
              {
                name: 'skills',
                type: 'text',
                label: 'Competências Chave',
                defaultValue:
                  'SEO Técnico, GEO (Generative Engine Optimization), CRO, Shopify Plus, DRE / P&L, POAS, Magento, VTEX, Retail Media',
              },
              {
                name: 'description',
                type: 'textarea',
                label: 'Descrição das Responsabilidades',
                defaultValue:
                  'Liderança de operações digitais, gestão de P&L de e-commerce, engenharia de SEO, otimização de conversão (CRO) e mídia de performance subordinada a Unit Economics.',
              },
            ],
          },

          // 5. Menu Casos de Sucesso (ItemList)
          {
            name: 'cases',
            label: 'Casos (ItemList)',
            fields: [
              {
                name: 'items',
                type: 'array',
                dbName: 'sm_case_items',
                label: 'Dossiê de Casos Operacionais',
                defaultValue: [
                  {
                    title: 'Rua do Café',
                    metric: '+66% MoM em GMV e Marketplace Shopify Plus com Omnik',
                  },
                  {
                    title: 'Sheetgo',
                    metric: 'Expansão de SEO Internacional e CRO (+20% em Retenção de Sessão)',
                  },
                  {
                    title: 'Máquinas & Café',
                    metric: '10 Anos de Crescimento Linear (+20% YoY) e 45% da Black Friday via Busca Orgânica',
                  },
                  {
                    title: 'Squammata Consultoria',
                    metric: 'Auditorias de DRE, POAS e Retail Media para Varejo e Indústria',
                  },
                ],
                fields: [
                  {
                    name: 'title',
                    type: 'text',
                    label: 'Nome da Operação / Empresa',
                    required: false,
                  },
                  {
                    name: 'metric',
                    type: 'text',
                    label: 'Métrica de Impacto Auditada',
                    required: false,
                  },
                ],
              },
            ],
          },

          // 6. Menu JSON-LD Compilado & Sincronização
          {
            name: 'rawTab',
            label: 'JSON-LD Compilado & Importador',
            fields: [
              {
                name: 'syncFromRaw',
                type: 'checkbox',
                label: 'Sincronizar campos dos menus a partir do código JSON colado abaixo',
                defaultValue: false,
                admin: {
                  description:
                    'Ao ativar esta opção e salvar, o sistema fará a leitura do JSON-LD abaixo e atualizará automaticamente os menus de Pessoa, FAQ, Organização e Casos.',
                },
              },
              {
                name: 'rawJson',
                type: 'code',
                label: 'Grafo JSON-LD Compilado (@graph)',
                admin: {
                  language: 'json',
                  description:
                    'Este código é gerado automaticamente a partir dos menus visuais. Você também pode colar uma schema customizada para que o backend a interprete.',
                },
                hooks: {
                  beforeChange: [compileSchemaGraphHook],
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
