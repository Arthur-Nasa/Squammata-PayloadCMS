import type { GlobalConfig } from 'payload'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const ProjectsPage: GlobalConfig = {
  slug: 'projects_page',
  label: 'Página de Projetos e Estudos de Caso',
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
              label: 'Construtor de Layout',
              labels: {
                singular: 'Bloco',
                plural: 'Blocos',
              },
            },
          ],
          label: 'Blocos (Antes)',
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
              label: 'Construtor de Layout',
              labels: {
                singular: 'Bloco',
                plural: 'Blocos',
              },
            },
          ],
          label: 'Blocos (Depois)',
        },
        {
          fields: [
            {
              name: 'badge',
              type: 'text',
              label: 'Badge',
              defaultValue: 'Estudos de Caso & DRE',
            },
            {
              name: 'title',
              type: 'textarea',
              label: 'Título (use <br> para quebra de linha ou span com class="mil-opacity-text")',
              defaultValue: 'Operações Auditadas e <br><span class="mil-opacity-text">Resultados no DRE</span>',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Descrição',
              defaultValue: 'Análise aprofundada de gargalos operacionais solucionados na Região Metropolitana de Campinas com mensuração direta de margem de contribuição e eficiência técnica.',
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
