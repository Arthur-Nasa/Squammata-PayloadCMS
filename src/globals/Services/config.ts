import type { GlobalConfig } from 'payload'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const ServicesPage: GlobalConfig = {
  slug: 'services_page',
  label: 'Services',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'layout_before',
              type: 'blocks',
              blockReferences: [
                'reusable_block',
              ],
              blocks: [],
              required: false,
              admin: {
                initCollapsed: true,
              },
              label: 'Construtor de Blocos (Antes da Lista)',
              labels: {
                singular: 'Bloco',
                plural: 'Blocos',
              },
            },
          ],
          label: 'Layout (Antes)',
        },
        {
          fields: [
            {
              name: 'layout_after',
              type: 'blocks',
              blockReferences: [
                'reusable_block',
              ],
              blocks: [],
              required: false,
              admin: {
                initCollapsed: true,
              },
              label: 'Construtor de Blocos (Depois da Lista)',
              labels: {
                singular: 'Bloco',
                plural: 'Blocos',
              },
            },
          ],
          label: 'Layout (Depois)',
        },
        {
          fields: [
            {
              name: 'badge',
              type: 'text',
              label: 'Etiqueta / Badge',
              defaultValue: 'Catálogo de Soluções V6',
            },
            {
              name: 'title',
              type: 'textarea',
              label: 'Título Principal',
              defaultValue: 'Engenharia de Operações & Gestão Técnica',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Descrição Institucional',
              defaultValue: 'Intervenções cirúrgicas de auditoria e esteiras contínuas de gestão para pequenas e médias empresas. Foco estrito em processos, margem de contribuição e sustentabilidade no DRE.',
            },
          ],
          label: 'Cabeçalho da Página',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
  ],
}
