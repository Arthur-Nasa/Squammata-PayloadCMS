import type { Block } from 'payload'
import { createButtonFields } from '@/fields/elementCustomization'

export const HeroTwo: Block = {
  slug: 'hero_two',
  interfaceName: 'HeroTwoBlock',
  fields: [
    {
      name: 'title',
      type: 'textarea',
      label: 'Title (use HTML like <br> for line breaks, use span like <span class="mil-opacity-text">TEXT</span> for highlighted text)',
    },
    {
      name: 'users',
      type: 'array',
      label: 'User Avatars',
      maxRows: 10,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'User Image',
          required: true,
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description (use HTML like <br class="mil-lg-hidden"> for responsive line breaks; wrap in <i> for italics)',
    },
    ...createButtonFields({
      prefix: 'button',
      label: 'Botão',
      defaultText: '',
      defaultUrl: '',
      defaultColor: 'cafe',
      defaultRadius: 'default',
    }),
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
  ],
  labels: {
    plural: 'Hero Two',
    singular: 'Hero Two',
  },
}