import type { GlobalConfig } from 'payload'

export const General: GlobalConfig = {
  slug: 'general',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'not_found',
          label: 'Página 404 (Não Localizada)',
          fields: [
            {
              name: 'bgImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagem de Fundo',
            },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Subtítulo',
              defaultValue: 'Erro 404 | Recurso Não Indexado',
            },
            {
              name: 'title',
              type: 'textarea',
              label: 'Título',
              defaultValue: 'Página Não Localizada',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Descrição',
              defaultValue: 'O endereço solicitado foi descontinuado, transferido ou não consta em nossa esteira técnica. Retorne à página inicial ou consulte nossos estudos de caso e publicações.',
            },
          ],
        },
      ],
    },
  ],
}
