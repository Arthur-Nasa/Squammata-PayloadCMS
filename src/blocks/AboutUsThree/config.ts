import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { createButtonFields } from '@/fields/elementCustomization'

export const AboutUsThree: Block = {
  slug: 'about_us_three',
  interfaceName: 'AboutUsThreeBlock',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
    },
    {
      name: 'title',
      type: 'textarea',
      label: 'Title (use HTML like <br> for line breaks)',
    },
    {
      name: 'left_description',
      type: 'textarea',
      label: 'Left Description (use HTML like <br> for line breaks)',
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
      name: 'right_description1',
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
      label: 'Right Description 1',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image (with overlay)',
    },
    {
      name: 'right_description2',
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
      label: 'Right Description 2',
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Skills',
      maxRows: 10,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Skill Name (e.g., Strategic Thinking)',
        },
        {
          name: 'percentage',
          type: 'text',
          label: 'Percentage (e.g., 85%; used for data-value and display)',
        },
      ],
    },
    {
      name: 'right_description3',
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
      label: 'Right Description 3',
    },
  ],
  labels: {
    plural: 'About Us Three Blocks',
    singular: 'About Us Three Block',
  },
}