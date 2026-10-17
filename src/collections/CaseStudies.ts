import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'clientName', 'sector', 'publishedAt', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título do Estudo de Caso',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Slug da URL',
      admin: {
        position: 'sidebar',
        description: 'Identificador amigável para a rota /casos/[slug].',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value && typeof value === 'string') {
              return value
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            if (data?.title && typeof data.title === 'string') {
              return data.title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'clientName',
      type: 'text',
      required: true,
      label: 'Nome da Operação ou Cliente',
      admin: {
        description: 'Pode ser preenchido com a razão social ou indicação sob sigilo comercial com setor.',
      },
    },
    {
      name: 'sector',
      type: 'select',
      required: true,
      label: 'Setor de Atuação',
      options: [
        { label: 'Moda e Vestuário', value: 'fashion' },
        { label: 'Alimentos e Bebidas', value: 'food_beverage' },
        { label: 'Bens de Consumo e Varejo', value: 'retail' },
        { label: 'Indústria e Distribuição B2B', value: 'b2b_industrial' },
        { label: 'Saúde e Cosméticos', value: 'health_beauty' },
        { label: 'Outros Setores', value: 'other' },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Data de Publicação',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      defaultValue: () => new Date(),
    },
    {
      name: 'featuredImage',
      type: 'relationship',
      relationTo: 'media',
      label: 'Imagem de Destaque',
    },
    {
      name: 'initialDiagnosis',
      type: 'textarea',
      required: true,
      label: 'Diagnóstico Inicial e Gargalos',
      admin: {
        description: 'Descrição objetiva da situação da empresa antes da intervenção técnica.',
      },
    },
    {
      name: 'implementedSolution',
      type: 'richText',
      required: true,
      label: 'Intervenção Técnica e Metodologia Aplicada',
    },
    {
      name: 'metrics',
      type: 'array',
      label: 'Métricas de Impacto Econômico e DRE',
      minRows: 1,
      admin: {
        description: 'Indicadores objetivos apurados após a conclusão dos trabalhos.',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Indicador (Ex: Margem de Contribuição, CAC, Ruptura de Estoque)',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Valor Apurado (Ex: +22.4%, -38%, R$ 1.2M)',
        },
        {
          name: 'impactArea',
          type: 'text',
          label: 'Linha do DRE ou Processo Afetado (Ex: Lucro Operacional, Giro de Capital)',
        },
      ],
    },
    {
      name: 'resultsSummary',
      type: 'textarea',
      required: true,
      label: 'Consolidação de Resultados e Conclusão',
      admin: {
        description: 'Síntese analítica do impacto permanente na operação do cliente.',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Metadados de SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Título de SEO',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Descrição de SEO',
          maxLength: 160,
        },
      ],
    },
  ],
}
