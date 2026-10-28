import type { Block } from 'payload'
import { createButtonFields } from '@/fields/elementCustomization'

export const CallToAction2: Block = {
  slug: 'call_to_action_2',
  interfaceName: 'CallToAction2Block',
  fields: [
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'title',
      type: 'textarea',
      label: 'Title (use HTML like <br> for line breaks)',
    },
    ...createButtonFields({
      prefix: 'button1',
      label: 'Botão 1',
      defaultText: 'FAQ',
      defaultUrl: '/faq',
      defaultColor: 'outline',
      defaultRadius: 'default',
    }),
    ...createButtonFields({
      prefix: 'button2',
      label: 'Botão 2',
      defaultText: "Let's Talk",
      defaultUrl: '/contact',
      defaultColor: 'terracota',
      defaultRadius: 'default',
    }),
  ],
  labels: {
    plural: 'Call to Action 2',
    singular: 'Call to Action 2',
  },
}