import type { GlobalConfig } from 'payload'
import { createSchemaFields } from '../fields/schemaFields'

export const PortfolioSettings: GlobalConfig = {
  slug: 'portfolio-settings',
  label: 'Portfólio Arthur Saggioratto',
  admin: {
    group: 'Portfólio & Schemas',
    description: 'Gerencie todos os textos, métricas, perguntas frequentes e grafos Schema.org do portfólio executivo.',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // ABA 1: SCHEMAS & DADOS ESTRUTURADOS
        {
          label: 'Schemas JSON-LD',
          fields: createSchemaFields(),
        },

        // ABA 2: HERO & APRESENTAÇÃO
        {
          name: 'hero',
          label: 'Hero & Apresentação',
          fields: [
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Linha de Destaque Superior (Eyebrow)',
              defaultValue: '15 ANOS DE OPERAÇÃO • B2C, B2B & GLOBAL SAAS • SÃO PAULO',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Título Principal (H1)',
              defaultValue: 'Arquitetura de E-commerce, Crescimento Orgânico e Proteção de Margem Operacional.',
              required: true,
            },
            {
              name: 'lead',
              type: 'textarea',
              label: 'Texto Introdutório (Lead Didático e Humano)',
              defaultValue:
                'Ajudo empresas a crescerem com previsibilidade e lucro real. Há 15 anos estruturo e lidero operações digitais de ponta a ponta, conectando engenharia de SEO, visibilidade em inteligência artificial (GEO), otimização de conversão (CRO) e mídia paga. O princípio orientador é simples: nenhuma tecnologia ou anúncio se justifica se não proteger a margem líquida e o caixa da empresa.',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'whatsappNumber',
                  type: 'text',
                  label: 'Número de WhatsApp (ex: 5519993497819)',
                  defaultValue: '5519993497819',
                  admin: { width: '50%' },
                },
                {
                  name: 'curriculoPdfUrl',
                  type: 'text',
                  label: 'Link do Currículo em PDF (Google Drive ou CDN)',
                  defaultValue: 'https://drive.google.com/file/d/1kqXFuC4SN-vlFMez0RtELHqUe9Wk7RMr/view?usp=sharing',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'linkedinUrl',
                  type: 'text',
                  label: 'Link do LinkedIn Oficial',
                  defaultValue: 'https://linkedin.com/in/arthurnasa',
                  admin: { width: '50%' },
                },
                {
                  name: 'email',
                  type: 'email',
                  label: 'E-mail Principal',
                  defaultValue: 'arthur.saggioratto@gmail.com',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              name: 'specs',
              type: 'group',
              label: 'Dossiê Executivo (Coluna Lateral)',
              fields: [
                {
                  name: 'pj',
                  type: 'text',
                  label: 'Razão Social e CNPJ',
                  defaultValue: '31.384.814 ARTHUR SAGGIORATTO NETO ME (Consultoria Squammata)',
                },
                {
                  name: 'formacao',
                  type: 'text',
                  label: 'Formação Acadêmica Sintética',
                  defaultValue: 'Ciências Sociais e Sociologia (UNICAMP) & Marketing e Gestão de Vendas (FAAL)',
                },
                {
                  name: 'fluencia',
                  type: 'text',
                  label: 'Fluência Operacional',
                  defaultValue: 'Português (Nativo) | Inglês (C2 Proficient para liderança e times globais)',
                },
                {
                  name: 'coreStack',
                  type: 'text',
                  label: 'Tecnologias Nucleares (Core Stack)',
                  defaultValue: 'Shopify Plus • Magento • VTEX • GA4 • GSC • Semrush • Ahrefs • Schema JSON-LD',
                },
              ],
            },
          ],
        },

        // ABA 3: INDICADORES AUDITADOS
        {
          name: 'indicatorsSection',
          label: 'Indicadores Auditados',
          fields: [
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Rótulo da Seção',
              defaultValue: 'INDICADORES AUDITADOS',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Título da Seção',
              defaultValue: 'Indicadores Auditados de Operação e Margem',
            },
            {
              name: 'subtext',
              type: 'textarea',
              label: 'Texto de Apoio',
              defaultValue: 'Métricas reais de impacto financeiro: crescimento em receita, margem protegida e ganho de eficiência no funil.',
            },
            {
              name: 'cards',
              type: 'array',
              dbName: 'ps_cards',
              label: 'Cartões de Indicadores (Métricas)',
              defaultValue: [
                {
                  value: '+66% MoM em GMV',
                  label: 'ESCALA DE RECEITA • RUA DO CAFÉ',
                  description:
                    'Crescimento mensal sustentado no faturamento da Rua do Café. O resultado veio da alocação de mídia paga no Google e Meta Ads pautada na margem de cada produto, somada a melhorias contínuas na conversão do site.',
                },
                {
                  value: '45% na Black Friday via Orgânico',
                  label: 'PROTEÇÃO DE MARGEM • SEO TÉCNICO',
                  description:
                    'Fatia do faturamento gerada por busca orgânica no pico sazonal de vendas. A maturidade semântica do catálogo protegeu o caixa contra a explosão do custo por clique (CPC) nos leilões de anúncios.',
                },
                {
                  value: '10 Anos (+20% YoY)',
                  label: 'CRESCIMENTO LINEAR • MÁQUINAS & CAFÉ',
                  description:
                    'Uma década de crescimento contínuo de 20% ao ano na Máquinas & Café (2014 a 2024), consolidando a operação no mercado nacional de máquinas de espresso para pessoas físicas e empresas.',
                },
                {
                  value: '+50% Tráfego / +30% Conversão',
                  label: 'EFICIÊNCIA DE FUNIL • AQUISIÇÃO & CRO',
                  description:
                    'Mais visitantes qualificados com maior taxa de fechamento. A automação de canais ampliou o tráfego em 50%, enquanto a eliminação de dúvidas e fricções no checkout aumentou a conversão de vendas em 30%.',
                },
                {
                  value: '+20% em Tempo de Sessão',
                  label: 'RETENÇÃO B2B SAAS • SHEETGO (GLOBAL)',
                  description:
                    'Aumento no tempo de uso e exploração da plataforma global de software Sheetgo. O redesign da interface, orientado por dados de navegação e testes práticos, facilitou a ativação dos usuários.',
                },
                {
                  value: '+100 Lojistas Integrados',
                  label: 'ECOSSISTEMA MARKETPLACE • SHOPIFY PLUS & OMNIK',
                  description:
                    'Estruturação técnica e comercial do marketplace em Shopify Plus com Seller Center Omnik, conectando mais de uma centena de marcas parceiras com estoque e pedidos sincronizados ao ERP.',
                },
              ],
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  label: 'Métrica / Valor em Destaque',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Rótulo / Empresa',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Descrição Explicativa (Teste do So What)',
                  required: true,
                },
              ],
            },
          ],
        },

        // ABA 4: PERGUNTAS FREQUENTES (FAQ)
        {
          name: 'faqSection',
          label: 'Perguntas Frequentes (FAQ)',
          fields: [
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Rótulo da Seção',
              defaultValue: 'TRANSPARÊNCIA & MÉTODO',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Título da Seção',
              defaultValue: 'Perguntas Frequentes & Fundamentos da Operação',
            },
            {
              name: 'subtext',
              type: 'textarea',
              label: 'Subtítulo',
              defaultValue: 'Respostas diretas e didáticas sobre governança de margem, visibilidade em inteligência artificial e modelos de parceria.',
            },
            {
              name: 'items',
              type: 'array',
              dbName: 'ps_faqs',
              label: 'Perguntas e Respostas',
              defaultValue: [
                {
                  badge: 'FINANÇAS & DRE',
                  question: 'O que significa subordinar o e-commerce à saúde do negócio (DRE e POAS)?',
                  answer:
                    'Muitas operações comemoram um ROAS elevado nos painéis de anúncios enquanto a conta bancária da empresa sofre. Subordinar a operação ao DRE significa gerenciar os canais de venda com base no lucro líquido que realmente sobra no caixa, após abater o custo da mercadoria (CMV), taxas de gateway, fretes e tributos. Trabalhamos orientados pelo POAS (Profit on Ad Spend) para assegurar que cada real investido gere margem de contribuição saudável.',
                },
                {
                  badge: 'BUSCA GENERATIVA',
                  question: 'Como funciona a preparação para busca em Inteligência Artificial (GEO e AEO)?',
                  answer:
                    'Motores como ChatGPT, Perplexity e Google AI Overviews não leem páginas como um leitor comum: eles identificam entidades, autoridades e relações conceituais. Estruturamos os dados do seu e-commerce com marcações semânticas avançadas em Schema.org (JSON-LD) e produzimos conteúdos com autoridade comprovada (E-E-A-T). Com isso, quando um potencial cliente faz perguntas técnicas ou busca recomendações na IA, a sua marca é citada como fonte primária.',
                },
                {
                  badge: 'MODELO DE ENGAJAMENTO',
                  question: 'Qual o formato ideal de contratação para o momento da minha empresa?',
                  answer:
                    'Se a sua empresa precisa de direcionamento executivo contínuo e gestão de metas, a posição de Head Fracionado ou Integral é a mais recomendada. Caso você já possua um time executor e necessite de governança de margem e esteiras comerciais, a Consultoria Estratégica Continuada oferece reuniões e acompanhamento quinzenal. Se o desafio for resolver um gargalo pontual de SEO, checkout ou mídia paga, os Sprints de Auditoria Técnica entregam diagnóstico e plano de ação em até quatro semanas.',
                },
                {
                  badge: 'SOCIOLOGIA & TÉCNICA',
                  question: 'Por que a formação em Sociologia pela UNICAMP é um diferencial na gestão digital?',
                  answer:
                    'A Sociologia capacita a enxergar plataformas, marketplaces e algoritmos como ecossistemas sociotécnicos complexos. Em vez de perseguir atalhos passageiros que queimam a reputação da marca e cansam o cliente, essa fundamentação permite desenhar jornadas de compra éticas, transparentes e focadas na fidelização de longo prazo, reduzindo o custo de aquisição (CAC) e elevando o valor de vida do cliente (LTV).',
                },
              ],
              fields: [
                {
                  name: 'badge',
                  type: 'text',
                  label: 'Tag / Categoria',
                  defaultValue: 'GERAL',
                },
                {
                  name: 'question',
                  type: 'text',
                  label: 'Pergunta',
                  required: true,
                },
                {
                  name: 'answer',
                  type: 'textarea',
                  label: 'Resposta',
                  required: true,
                },
              ],
            },
          ],
        },

        // ABA 5: RODAPÉ EXECUTIVO
        {
          name: 'footer',
          label: 'Rodapé Executivo',
          fields: [
            {
              name: 'callout',
              type: 'textarea',
              label: 'Chamada Principal de Fechamento',
              defaultValue:
                'Aberto a conversas para liderança executiva (Head ou Diretoria), conselhos consultivos e projetos de reestruturação de e-commerce e SEO.',
            },
            {
              name: 'metaLine1',
              type: 'text',
              label: 'Identificação e Localização',
              defaultValue: "Arthur Saggioratto Neto • Santa Bárbara d'Oeste / Campinas, SP",
            },
            {
              name: 'metaLine2',
              type: 'text',
              label: 'Dados Societários',
              defaultValue: 'CNPJ: 31.384.814/0001-09 (31.384.814 ARTHUR SAGGIORATTO NETO ME)',
            },
          ],
        },
      ],
    },
  ],
}
