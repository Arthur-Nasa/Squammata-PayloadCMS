import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const AboutTeam: Block = {
  slug: 'about_team',
  interfaceName: 'AboutTeamBlock',
  fields: [
    {
      name: 'portrait',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto de Perfil',
      required: false,
    },
    { name: 'name', type: 'text', label: 'Nome Completo', required: true },
    { name: 'position', type: 'text', label: 'Cargo / Função Técnica' },
    {
      name: 'contact_items',
      type: 'array',
      label: 'Informações de Contato',
      labels: {
        singular: 'Item de Contato',
        plural: 'Itens de Contato',
      },
      fields: [
        { name: 'label', type: 'text', label: 'Rótulo (ex: E-mail, Telefone)' },
        { name: 'value', type: 'text', label: 'Valor' },
      ],
    },
    {
      name: 'social_links',
      type: 'array',
      label: 'Links de Redes',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        { name: 'icon_class', type: 'text', label: 'Classe do Ícone (ex: fab fa-linkedin-in)' },
        { name: 'url', type: 'text', label: 'URL' },
      ],
    },
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
      label: 'Parágrafo Introdutório'
    },
    { name: 'quote', type: 'textarea', label: 'Frase de Destaque' },
    {
      name: 'bio_description',
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
      label: 'Biografia Técnica'
    },
    {
      name: 'skills',
      type: 'array',
      label: 'Competências Técnicas',
      fields: [
        { name: 'name', type: 'text', label: 'Nome da Competência' },
        { name: 'percentage', type: 'text', label: 'Nível / Percentual (ex: 95%)' },
      ],
    },
    {
      name: 'timeline',
      type: 'array',
      label: 'Formação & Certificações',
      fields: [
        { name: 'date', type: 'text', label: 'Período (ex: 2018–2022)' },
        { name: 'title', type: 'text', label: 'Instituição / Especialidade' },
        { name: 'description', type: 'textarea', label: 'Descrição' },
      ],
    },
    {
      name: 'certificate_image',
      type: 'upload',
      relationTo: 'media',
      label: 'Certificado (opcional)',
    },
    { 
      name: 'closing_description', 
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
      label: 'Considerações Finais' 
    },
  ],
  labels: {
    singular: 'Bloco Sobre o Especialista',
    plural: 'Blocos Sobre o Especialista',
  },
}