import type { Block } from 'payload'

export const CountersTwo: Block = {
  slug: 'counters_two',
  dbName: 'ctr2',
  interfaceName: 'CountersTwoBlock',
  fields: [
    {
      name: 'counters',
      dbName: 'items',
      type: 'array',
      label: 'Counters',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Counter Value (e.g., 249; used for data-number and initial display)',
          required: true,
        },
        {
          name: 'suffix',
          type: 'text',
          label: 'Suffix (e.g., + or %)',
        },
        {
          name: 'suffix_class',
          type: 'text',
          label: 'Suffix Class (e.g., mil-sub-text-2 for +; mil-sub-text-1 for %)',
          admin: {
            description: 'Optional CSS class for suffix styling',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Counter Title (e.g., Projects Completed)',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description (use HTML like <br> for line breaks)',
        },
        {
          name: 'bgImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image (for special card with overlay)',
        },
        {
          name: 'card_style',
          dbName: 'style',
          type: 'select',
          label: 'Card Style (for non-bg cards)',
          options: [
            { label: 'Argila Suave (mil-gray-card)', value: 'mil-gray-card' },
            { label: 'Canto Chanfrado Argila (mil-angle-gray)', value: 'mil-angle-gray' },
            { label: 'Padrão Mineral (#FFFFFF)', value: 'default' },
            { label: 'Terracota Sutil', value: 'terracota' },
            { label: 'Floresta Biofilia', value: 'floresta' },
            { label: 'Café / Mineral Basalto', value: 'cafe' },
            { label: 'Carvão Técnico Noturno', value: 'dark' },
            { label: 'Contorno Delicado', value: 'outline' },
          ],
          defaultValue: 'mil-gray-card',
          admin: {
            condition: (data, siblingData) => !siblingData.bgImage,
          },
        },
        {
          name: 'card_radius',
          dbName: 'card_rad',
          type: 'select',
          label: 'Curvatura dos Cantos',
          options: [
            { label: 'Padrão (16px)', value: 'default' },
            { label: 'Cantos Retos (4px)', value: 'sharp' },
            { label: 'Suave (8px)', value: 'sm' },
            { label: 'Orgânico (16px)', value: 'md' },
            { label: 'Amplo (24px)', value: 'lg' },
            { label: 'Cápsula (100px)', value: 'pill' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'card_triangle',
          dbName: 'card_tri',
          type: 'select',
          label: 'Triângulo Decorativo',
          options: [
            { label: 'Triângulo Canônico (Superior Direito)', value: 'triangle' },
            { label: 'Triângulo Amplo', value: 'triangle_lg' },
            { label: 'Triângulo Terracota (#C15C3D)', value: 'triangle_terracota' },
            { label: 'Triângulo Floresta (#244735)', value: 'triangle_floresta' },
            { label: 'Triângulo Café Basalto (#3A2313)', value: 'triangle_cafe' },
            { label: 'Triângulo Argila (#F3EFE6)', value: 'triangle_argila' },
            { label: 'Nenhum', value: 'none' },
          ],
          defaultValue: 'triangle',
        },
      ],
    },
  ],
  labels: {
    plural: 'Counters Two Blocks',
    singular: 'Counters Two Block',
  },
}