import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { createButtonFields } from '@/fields/elementCustomization'

export const AboutUsFour: Block = {
  slug: 'about_us_four',
  interfaceName: 'AboutUsFourBlock',
  fields: [
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Icon',
    },
    {
      name: 'title',
      type: 'textarea',
      label: 'Title (use HTML like <br> for line breaks)',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Description',
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
    ...createButtonFields({
      prefix: 'button1',
      label: 'Botão 1',
      defaultText: '',
      defaultUrl: '',
      defaultColor: 'terracota',
      defaultRadius: 'default',
    }),
    ...createButtonFields({
      prefix: 'button2',
      label: 'Botão 2',
      defaultText: '',
      defaultUrl: '',
      defaultColor: 'cafe',
      defaultRadius: 'default',
    }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Right Side Image (with overlay)',
    },
    {
      name: 'counters',
      type: 'array',
      label: 'Counters',
      maxRows: 2,
      fields: [
        {
          name: 'upper',
          type: 'text',
          label: 'Upper Text (e.g., Projects)',
        },
        {
          name: 'lower',
          type: 'text',
          label: 'Lower Text (e.g., completed)',
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value (e.g., 173)',
        },
        {
          name: 'suffix',
          type: 'text',
          label: 'Suffix (e.g., + or %)',
        },
        {
          name: 'suffix_class',
          type: 'text',
          label: 'Suffix Class (e.g., mil-sub-text-2)',
          admin: {
            description: 'For styling; defaults based on index',
          },
        },
      ],
    },
    {
      name: 'partners',
      type: 'array',
      label: 'Partners',
      minRows: 5,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Partner Logo',
          required: true,
        },
      ],
    },
  ],
  labels: {
    plural: 'About Us Four',
    singular: 'About Us Four',
  },
}