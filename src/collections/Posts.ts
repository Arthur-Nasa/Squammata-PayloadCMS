import type { CollectionConfig } from 'payload'
import { calculateReadingTime } from './Posts/hooks/calculateReadingTime'
import { revalidatePostAfterChange, revalidatePostAfterDelete } from './Posts/hooks/revalidatePost'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', '_status', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) {
        return true
      }
      return {
        _status: {
          equals: 'published',
        },
      }
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  hooks: {
    afterChange: [revalidatePostAfterChange],
    afterDelete: [revalidatePostAfterDelete],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título do Artigo',
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
        description: 'Identificador único na rota /posts/[slug].',
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
      name: 'authors',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      label: 'Autores',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      label: 'Categoria Temática',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'readingTime',
      type: 'number',
      label: 'Tempo Estimado de Leitura (minutos)',
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Calculado de forma automatizada via contagem de palavras.',
      },
      hooks: {
        beforeValidate: [calculateReadingTime],
      },
    },
    {
      name: 'heroImage',
      type: 'relationship',
      relationTo: 'media',
      label: 'Imagem Principal',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Resumo Analítico',
      maxLength: 260,
      admin: {
        description: 'Texto conciso de até 260 caracteres para listagens, feeds e metatags.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Conteúdo Editorial',
      required: true,
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Otimização para Motores de Busca (SEO)',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Título de SEO (Meta Title)',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Descrição de SEO (Meta Description)',
          maxLength: 160,
        },
        {
          name: 'ogImage',
          type: 'relationship',
          relationTo: 'media',
          label: 'Imagem para Compartilhamento (Open Graph)',
        },
      ],
    },
  ],
}
