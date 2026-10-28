import type { Block } from 'payload'
import {
  createButtonFields,
  createCardCustomizationFields,
} from '@/fields/elementCustomization'

export const PricesTwo: Block = {
  slug: 'prices_two',
  interfaceName: 'PricesTwoBlock',
  fields: [
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
      label: 'Description (use HTML like <br> for line breaks)',
    },
    ...createButtonFields({
      prefix: 'button',
      label: 'Top Button',
      defaultText: '',
      defaultUrl: '',
      defaultColor: 'cafe',
      defaultRadius: 'default',
    }),
    {
      name: 'plans',
      type: 'array',
      label: 'Plans',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Plan Name',
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price (e.g., 490)',
        },
        {
          name: 'price_suffix',
          type: 'text',
          label: 'Price Suffix (e.g., / one-time)',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Plan Description (use HTML like <br> for line breaks)',
        },
        {
          name: 'bgImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image (for special card with overlay)',
        },
        ...createButtonFields({
          prefix: 'button',
          label: 'Plan Button',
          defaultText: '',
          defaultUrl: '',
          defaultColor: 'terracota',
          defaultRadius: 'default',
          colorEnumName: 'enum_p2_plan_btn_color',
          radiusEnumName: 'enum_p2_plan_btn_radius',
        }),
        ...createCardCustomizationFields({
          name: 'card_color',
          label: 'Card Style',
          defaultStyle: 'argila',
          defaultRadius: 'default',
          defaultTriangle: 'triangle',
          styleEnumName: 'enum_p2_plan_card_color',
        }),
        {
          name: 'button_style',
          type: 'select',
          options: [
            { label: 'Light', value: 'mil-light' },
            { label: 'Accent', value: 'mil-accent' },
            { label: 'Soft', value: 'mil-soft' },
          ],
          defaultValue: 'mil-light',
          admin: { hidden: true },
        },
        {
          name: 'card_style',
          type: 'select',
          options: [
            { label: 'Gray Card', value: 'mil-gray-card' },
            { label: 'Angle Gray', value: 'mil-angle-gray' },
          ],
          defaultValue: 'mil-gray-card',
          admin: { hidden: true },
        },
      ],
    },
  ],
  labels: {
    plural: 'Prices 2',
    singular: 'Prices 2',
  },
}