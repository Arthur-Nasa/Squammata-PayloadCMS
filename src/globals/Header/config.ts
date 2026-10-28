import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'group',
      label: 'Logomarca',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            { label: 'Imagem', value: 'image' },
            { label: 'Texto', value: 'text' },
          ],
          defaultValue: 'image',
          label: 'Tipo de Exibição',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logomarca Principal (Escura)',
          admin: {
            condition: (data) => data?.logo?.type === 'image',
          },
        },
        {
          name: 'logo_invert',
          type: 'upload',
          relationTo: 'media',
          label: 'Logomarca Negativa (Branca)',
          admin: {
            condition: (data) => data?.logo?.type === 'image',
          },
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto Alternativo (Alt)',
          defaultValue: 'Squammata Consultoria e Gestão',
          admin: {
            condition: (data) => data?.logo?.type === 'image',
          },
        },
        {
          name: 'fontawesome_icon',
          type: 'text',
          label: 'Ícone FontAwesome',
          admin: {
            condition: (data) => data?.logo?.type === 'text',
          },
        },
        {
          name: 'text',
          type: 'text',
          label: 'Texto da Logomarca',
          defaultValue: 'Squammata',
          admin: {
            condition: (data) => data?.logo?.type === 'text',
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link de Destino',
          defaultValue: '/',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Botão de Ação e Atendimento',
      fields: [
        {
          name: 'actionType',
          type: 'select',
          label: 'Tipo de Ação',
          defaultValue: 'popup',
          options: [
            { label: 'Abrir Link', value: 'link' },
            { label: 'Abrir Painel de Atendimento', value: 'popup' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          label: 'Rótulo do Botão',
          defaultValue: 'Solicitar Diagnóstico',
        },
        {
          name: 'fontawesome_icon',
          type: 'text',
          label: 'Ícone FontAwesome',
          defaultValue: 'fal fa-envelope',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link de Destino',
          admin: {
            condition: (data) => data?.contact?.actionType === 'link',
          },
        },
        {
          name: 'popupTitle',
          type: 'text',
          label: 'Título do Painel Lateral',
          defaultValue: 'Atendimento & Diagnóstico',
          admin: {
            condition: (data) => data?.contact?.actionType === 'popup',
          },
        },
        {
          name: 'popupItems',
          type: 'array',
          label: 'Informações de Contato',
          defaultValue: [
            { label: 'Sede Operacional', value: 'Rua Coronel Quirino, 1200 - Cambuí, Campinas/SP' },
            { label: 'Telefone / WhatsApp', value: '+55 19 99349-7819' },
            { label: 'E-mail Institucional', value: 'contato@squammata.com.br' },
            { label: 'Atendimento Regional', value: 'Campinas e Região Metropolitana (RMC)' },
            { label: 'Horário de Atendimento', value: 'Segunda a Sexta, 08h às 18h' },
          ],
          admin: {
            condition: (data) => data?.contact?.actionType === 'popup',
            initCollapsed: true,
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Rótulo',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Informação',
              required: true,
            },
          ],
        },
        {
          name: 'formTitle',
          type: 'text',
          label: 'Título do Formulário',
          defaultValue: 'Solicite uma Análise Operacional',
          admin: {
            condition: (data) => data?.contact?.actionType === 'popup',
          },
        },
        {
          name: 'form',
          type: 'relationship',
          relationTo: 'forms',
          required: false,
          admin: {
            condition: (data) => data?.contact?.actionType === 'popup',
          },
        },
      ],
    },
    {
      name: 'ordercall',
      type: 'group',
      label: 'Botão Flutuante de Chamada',
      fields: [
        {
          name: 'actionType',
          type: 'select',
          label: 'Tipo de Ação',
          defaultValue: 'link',
          options: [
            { label: 'Abrir Link', value: 'link' },
            { label: 'Abrir Modal', value: 'popup' },
          ],
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
          defaultValue: 'https://wa.me/5519993497819',
          admin: {
            condition: (data) => data?.ordercall?.actionType === 'link',
          },
        },
        {
          name: 'formTitle',
          type: 'text',
          label: 'Título do Formulário',
          defaultValue: 'Agende uma Conversa Direta',
          admin: {
            condition: (data) => data?.ordercall?.actionType === 'popup',
          },
        },
        {
          name: 'form',
          type: 'relationship',
          relationTo: 'forms',
          required: false,
          admin: {
            condition: (data) => data?.ordercall?.actionType === 'popup',
          },
        },
        {
          name: 'bgImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagem de Fundo',
          admin: {
            condition: (data) => data?.ordercall?.actionType === 'popup',
          },
        },
      ],
    },
    {
      name: 'navItems',
      label: 'Itens de Navegação',
      type: 'array',
      defaultValue: [
        {
          link: {
            type: 'custom',
            url: '/services',
            label: 'Serviços',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/projects',
            label: 'Estudos de Caso',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/#metodologia',
            label: 'Metodologia',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/posts',
            label: 'Publicações Técnicas',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contato',
            label: 'Contato',
          },
        },
      ],
      fields: [
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'headerStyle',
      type: 'select',
      label: 'Estilo Padrão do Cabeçalho',
      defaultValue: 'default',
      options: [
        { label: 'Padrão (Escuro)', value: 'default' },
        { label: 'Invertido (Branco)', value: 'invert' },
      ],
      admin: {
        description: 'Estilo padrão do cabeçalho. Pode ser substituído individualmente por página.',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
