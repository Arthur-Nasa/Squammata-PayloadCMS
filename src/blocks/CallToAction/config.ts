import type { Block } from 'payload'
import { createButtonFields } from '@/fields/elementCustomization'

export const CallToAction: Block = {
  slug: 'call_to_action',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Icon',
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
    },
    {
      name: 'title',
      type: 'textarea',
      label: 'Title (use HTML like <br> for line breaks, use span like <span class="mil-opacity-text">TEXT</span> for highlighted text)',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description (use HTML like <br> for responsive line breaks)',
    },
    ...createButtonFields({
      prefix: 'button1',
      label: 'Button 1',
      defaultText: '',
      defaultUrl: '',
      defaultColor: 'terracota',
      defaultRadius: 'default',
    }),
    ...createButtonFields({
      prefix: 'button2',
      label: 'Button 2',
      defaultText: '',
      defaultUrl: '',
      defaultColor: 'outline',
      defaultRadius: 'default',
    }),
  ],
  labels: {
    plural: 'CTA Blocks',
    singular: 'CTA Block',
  },
}