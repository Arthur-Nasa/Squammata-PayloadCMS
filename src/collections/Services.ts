import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'updatedAt'],
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
      label: 'Nome da Linha de Consultoria',
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
        description: 'Identificador para a rota /servicos/[slug].',
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
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Ordem de Exibição',
      admin: {
        position: 'sidebar',
        description: 'Ordem numérica crescente para exibição em menus e listagens.',
      },
    },
    {
      name: 'icon',
      type: 'relationship',
      relationTo: 'media',
      label: 'Ícone ou Elemento Visual',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Sumário Executivo',
      maxLength: 240,
      admin: {
        description: 'Síntese da proposta de valor para cartões e destaques na página inicial.',
      },
    },
    {
      name: 'targetAudience',
      type: 'text',
      required: true,
      label: 'Perfil Operacional Recomendado',
      admin: {
        description: 'Estágio de maturidade da empresa e faixa de faturamento recomendada.',
      },
    },
    {
      name: 'deliverables',
      type: 'array',
      label: 'Entregáveis Tangíveis da Consultoria',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título do Entregável (Ex: Diagnóstico de Checkout, Matriz de Atribuição)',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Detalhamento do Entregável',
        },
      ],
    },
    {
      name: 'methodology',
      type: 'richText',
      required: true,
      label: 'Metodologia e Fases de Execução',
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
