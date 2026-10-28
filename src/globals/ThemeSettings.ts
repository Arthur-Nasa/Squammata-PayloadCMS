import type { GlobalConfig } from 'payload'
import { THEME_PRESETS, DEFAULT_THEME_KEY } from '../theme/presets'

export const ThemeSettings: GlobalConfig = {
  slug: 'theme-settings',
  label: '🎨 Sistema de Design & Temas',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    group: 'Configurações',
    description: 'Gerenciamento visual centralizado: esquemas de cores, tokens biofílicos e geometria orgânica para o site e painel de controle.',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Esquema Ativo',
          fields: [
            {
              name: 'preset',
              type: 'select',
              required: true,
              defaultValue: DEFAULT_THEME_KEY,
              label: 'Paleta & Tema Ativo',
              admin: {
                description: 'Selecione um dos 6 esquemas biofílicos canônicos da Squammata ou escolha Personalizado para ajustar valores individuais.',
              },
              options: [
                ...Object.values(THEME_PRESETS).map((p) => ({
                  label: `${p.name} (${p.description})`,
                  value: p.key,
                })),
                {
                  label: '🛠️ Esquema Personalizado (Custom Overrides)',
                  value: 'custom',
                },
              ],
            },
            {
              name: 'radiusPreset',
              type: 'select',
              required: true,
              defaultValue: 'organic',
              label: 'Geometria de Curvatura (Squammata Curvature)',
              admin: {
                description: 'Define a intensidade dos raios de curvatura orgânica nos botões, cards e contêineres.',
              },
              options: [
                {
                  label: 'Orgânico Canônico (8px / 16px / 24px / 100px) - Padrão Fogo-Apagou',
                  value: 'organic',
                },
                {
                  label: 'Moderno Amplo (10px / 20px / 32px / 100px) - Fluidez Expandida',
                  value: 'modern',
                },
                {
                  label: 'Técnico / Minimalista (4px / 8px / 16px / 100px) - Precisão de Dados',
                  value: 'sharp',
                },
              ],
            },
            {
              name: 'adminThematization',
              type: 'select',
              required: true,
              defaultValue: 'brand-locked',
              label: 'Modo Visual do Painel Admin',
              admin: {
                description: 'Escolha se o painel administrativo mantém o Café Torrado corporativo estrito ou se acompanha o tema ativo do site.',
              },
              options: [
                {
                  label: 'Squammata Corporativo Fixo (Café Torrado + Terracota + Niemeyer)',
                  value: 'brand-locked',
                },
                {
                  label: 'Sincronizar com Tema Ativo do Site (Dinamismo Total)',
                  value: 'sync-active-theme',
                },
              ],
            },
          ],
        },
        {
          label: 'Ajuste Fino (Overrides)',
          description: 'Substitua cores específicas sem precisar recriar o tema inteiro. Útil para campanhas e testes A/B.',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'overridePrimary',
                  type: 'text',
                  label: 'Cor Primária (Hex: ex. #C15C3D)',
                  admin: {
                    width: '50%',
                    placeholder: '#C15C3D',
                  },
                },
                {
                  name: 'overrideSecondary',
                  type: 'text',
                  label: 'Cor Secundária (Hex: ex. #8C5808)',
                  admin: {
                    width: '50%',
                    placeholder: '#8C5808',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'overrideDarkBg',
                  type: 'text',
                  label: 'Fundo Escuro Telúrico (Hex: ex. #1A110B)',
                  admin: {
                    width: '50%',
                    placeholder: '#1A110B',
                  },
                },
                {
                  name: 'overrideLightBg',
                  type: 'text',
                  label: 'Fundo Claro Mineral (Hex: ex. #FAF9F6)',
                  admin: {
                    width: '50%',
                    placeholder: '#FAF9F6',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
