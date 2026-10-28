import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const AboutProject: Block = {
  slug: 'about_project',
  interfaceName: 'AboutProjectBlock',
  fields: [
    { name: 'badge', type: 'text', label: 'Badge', defaultValue: 'Diagnóstico & DRE' },
    {
      name: 'title',
      type: 'textarea',
      label: 'Título da Operação (use <br class="mil-md-hidden"> para quebra responsiva)',
    },
    {
      name: 'info_items',
      type: 'array',
      label: 'Ficha Técnica da Operação',
      labels: {
        singular: 'Dado da Operação',
        plural: 'Dados da Operação',
      },
      fields: [
        { name: 'label', type: 'text', label: 'Rótulo (ex: Cliente, Setor, Localização)' },
        { name: 'value', type: 'text', label: 'Valor' },
        { name: 'url', type: 'text', label: 'URL (opcional)' },
      ],
    },

    // Conteúdo lateral
    { name: 'intro_title', type: 'text', label: 'Título do Diagnóstico Inicial', defaultValue: 'Diagnóstico Inicial e Gargalos' },
    {
      name: 'intro_description',
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
      label: 'Descrição do Diagnóstico Inicial',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem da Operação (com overlay)',
    },

    { name: 'approach_title', type: 'text', label: 'Título da Intervenção Técnica', defaultValue: 'Intervenção Técnica e Metodologia' },
    {
      name: 'approach_description',
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
      label: 'Descrição da Intervenção e Metodologia',
    },

    { name: 'delivered_title', type: 'text', label: 'Título dos Entregáveis', defaultValue: 'Entregáveis Técnicos' },
    {
      name: 'delivered_items',
      type: 'array',
      label: 'Entregáveis Concluídos',
      labels: {
        singular: 'Entregável',
        plural: 'Entregáveis',
      },
      fields: [
        { name: 'title', type: 'text', label: 'Título do Entregável' },
        { name: 'description', type: 'text', label: 'Descrição' },
      ],
    },

    { name: 'goals_title', type: 'text', label: 'Título das Metas', defaultValue: 'Metas Estabelecidas' },
    {
      name: 'goals_items',
      type: 'array',
      label: 'Metas e Objetivos',
      labels: {
        singular: 'Meta',
        plural: 'Metas',
      },
      fields: [
        { name: 'title', type: 'text', label: 'Título da Meta' },
        { name: 'description', type: 'text', label: 'Descrição' },
      ],
    },

    { name: 'results_title', type: 'text', label: 'Título dos Resultados', defaultValue: 'Resultados Apurados no DRE' },
    {
      name: 'results_items',
      type: 'array',
      label: 'Métricas de Impacto',
      labels: {
        singular: 'Métrica',
        plural: 'Métricas',
      },
      fields: [
        { name: 'title', type: 'text', label: 'Indicador / Métrica (ex: Margem Bruta)' },
        { name: 'description', type: 'text', label: 'Impacto Apurado (ex: +18.4%)' },
      ],
    },

    { name: 'conclusion_title', type: 'text', label: 'Título da Conclusão', defaultValue: 'Consolidação e Próximos Passos' },
    {
      name: 'conclusion_description',
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
      label: 'Descrição da Conclusão',
    },
  ],
  labels: {
    singular: 'Bloco Sobre o Estudo de Caso',
    plural: 'Blocos Sobre o Estudo de Caso',
  },
}