import type { GlobalConfig } from 'payload'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Blog: GlobalConfig = {
  slug: 'blog',
  label: 'Página de Publicações Técnicas',
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
              defaultValue: 'Artigos & Engenharia',
            },
            {
              name: 'title',
              type: 'textarea',
              label: 'Título (use <br> para quebra de linha ou span com class="mil-opacity-text")',
              defaultValue: 'Publicações Técnicas & <br><span class="mil-opacity-text">Análise Operacional</span>',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Descrição',
              defaultValue: 'Artigos analíticos sobre estruturação de DRE, arquitetura headless, autoridade semântica e logística avançada no interior paulista.',
            },
          ],
          label: 'Cabeçalho da Página',
        },
        {
          fields: [
            {
              name: 'post_layout_after',
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
          label: 'Blocos no Fim do Artigo',
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
