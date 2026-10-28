import type { Block } from 'payload'
import {
  createButtonFields,
  createCardCustomizationFields,
} from '@/fields/elementCustomization'

export const PricesBlock: Block = {
  slug: 'prices_block',
  interfaceName: 'PricesBlock',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Tabela de Investimentos V6',
    },
    {
      name: 'title',
      type: 'textarea',
      label: 'Título (use <br> para quebra de linha ou span com class="mil-opacity-text")',
      defaultValue: 'Investimento Claro. <br><span class="mil-opacity-text">Retorno no DRE.</span>',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição',
      defaultValue: 'Modelos de contratação objetivos para saneamento técnico, engenharia de dados e gestão continuada.',
    },
    ...createButtonFields({
      prefix: 'button',
      label: 'Botão Superior',
      defaultText: 'Solicitar Diagnóstico',
      defaultUrl: '#popup',
      defaultColor: 'cafe',
      defaultRadius: 'default',
    }),
    {
      name: 'plans',
      type: 'array',
      label: 'Planos e Soluções',
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
          name: 'features',
          type: 'array',
          label: 'Features List',
          maxRows: 10,
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'Feature Item',
            },
            {
              name: 'disabled',
              type: 'checkbox',
              label: 'Disabled (adds mil-empty class)',
              defaultValue: false,
            },
          ],
        },
        ...createButtonFields({
          prefix: 'button',
          label: 'Botão do Plano',
          defaultText: 'Contratar Solução',
          defaultUrl: '#contact',
          defaultColor: 'terracota',
          defaultRadius: 'default',
          colorEnumName: 'enum_pb_plan_btn_color',
          radiusEnumName: 'enum_pb_plan_btn_radius',
        }),
        ...createCardCustomizationFields({
          name: 'card_color',
          label: 'Estilo do Card',
          defaultStyle: 'default',
          defaultRadius: 'default',
          defaultTriangle: 'triangle',
          styleEnumName: 'enum_pb_plan_card_color',
        }),
        {
          name: 'button_style',
          type: 'select',
          options: [
            { label: 'Light', value: 'mil-light' },
            { label: 'Accent', value: 'mil-accent' },
            { label: 'Soft', value: 'mil-soft' },
            { label: 'Dark', value: 'mil-dark' },
          ],
          defaultValue: 'mil-soft',
          admin: { hidden: true },
        },
        {
          name: 'card_style',
          type: 'select',
          options: [
            { label: 'Default Card', value: '' },
            { label: 'Gray Card', value: 'mil-gray-card' },
            { label: 'Angle Gray', value: 'mil-angle-gray' },
          ],
          defaultValue: '',
          admin: { hidden: true },
        },
      ],
    },
  ],
  labels: {
    plural: 'Prices Blocks',
    singular: 'Prices Block',
  },
}