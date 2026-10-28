import type { Field } from 'payload'

// ============================================================================
// 1. Opções de Cores Canônicas da Marca Squammata
// ============================================================================

export const buttonColorOptions = [
  { label: 'Terracota (Principal Squammata · #C15C3D)', value: 'terracota' },
  { label: 'Café / Mineral Basalto (#3A2313)', value: 'cafe' },
  { label: 'Floresta Biofilia (#244735)', value: 'floresta' },
  { label: 'Âmbar DRE (#B87514)', value: 'ambar' },
  { label: 'Rio Tietê (#244558)', value: 'rio' },
  { label: 'Argila Suave (#F3EFE6)', value: 'argila' },
  { label: 'Branco Mineral Niemeyer (#FAF9F6)', value: 'niemeyer' },
  { label: 'Contorno / Delicado Outline', value: 'outline' },
] as const

export type ButtonColor = (typeof buttonColorOptions)[number]['value']

export const cardColorOptions = [
  { label: 'Padrão Mineral (#FFFFFF / #FAF9F6)', value: 'default' },
  { label: 'Argila Suave (#F3EFE6)', value: 'argila' },
  { label: 'Terracota Sutil (Acento Biofílico)', value: 'terracota' },
  { label: 'Floresta Biofilia Sutil (Verde Orgânico)', value: 'floresta' },
  { label: 'Café / Mineral Basalto Noturno (#3A2313)', value: 'cafe' },
  { label: 'Carvão Técnico Noturno (#1A1A1A)', value: 'dark' },
  { label: 'Contorno Delicado (Fundo Transparente)', value: 'outline' },
  { label: 'Totalmente Transparente (Sem Fundo/Borda)', value: 'transparent' },
] as const

export type CardColor = (typeof cardColorOptions)[number]['value']

// ============================================================================
// 2. Opções de Curvatura de Cantos (Border-Radius)
// ============================================================================

export const buttonRadiusOptions = [
  { label: 'Padrão do Sistema (8px)', value: 'default' },
  { label: 'Cantos Retos / Sharp (4px)', value: 'sharp' },
  { label: 'Suave / Small (8px)', value: 'sm' },
  { label: 'Orgânico / Medium (16px)', value: 'md' },
  { label: 'Amplo / Large (24px)', value: 'lg' },
  { label: 'Cápsula / Pill (100px)', value: 'pill' },
] as const

export type ButtonRadius = (typeof buttonRadiusOptions)[number]['value']

// ============================================================================
// 3. Opções de Canto Chanfrado / Triângulo Decorativo (mil-angle)
// ============================================================================

export const triangleOptions = [
  { label: 'Nenhum (Cantos Normais)', value: 'none' },
  { label: 'Triângulo Canônico (Canto Superior Direito)', value: 'triangle' },
  { label: 'Triângulo Amplo (Canto Superior Direito)', value: 'triangle_lg' },
  { label: 'Triângulo Terracota (#C15C3D)', value: 'triangle_terracota' },
  { label: 'Triângulo Floresta (#244735)', value: 'triangle_floresta' },
  { label: 'Triângulo Café Basalto (#3A2313)', value: 'triangle_cafe' },
  { label: 'Triângulo Argila (#F3EFE6)', value: 'triangle_argila' },
] as const

export type TriangleOption = (typeof triangleOptions)[number]['value']

// ============================================================================
// 4. Factory de Campos para Botões (Payload CMS)
// ============================================================================

export interface CreateButtonFieldsOptions {
  prefix: string
  label: string
  defaultText?: string
  defaultUrl?: string
  defaultColor?: ButtonColor
  defaultRadius?: ButtonRadius
  defaultTriangle?: boolean | string
  defaultShowIcon?: boolean
  colorEnumName?: string
  radiusEnumName?: string
}

/**
 * Cria campos estruturados em linhas para edição completa de botões no Payload CMS.
 * Mantém compatibilidade integral com `buttonX_text` e `buttonX_url` existentes no banco.
 */
export function createButtonFields({
  prefix,
  label,
  defaultText = '',
  defaultUrl = '',
  defaultColor = 'terracota',
  defaultRadius = 'default',
  defaultTriangle = false,
  defaultShowIcon = true,
  colorEnumName,
  radiusEnumName,
}: CreateButtonFieldsOptions): Field[] {
  return [
    {
      type: 'row',
      fields: [
        {
          name: `${prefix}_text`,
          type: 'text',
          label: `${label} (Texto)`,
          defaultValue: defaultText,
          admin: {
            width: '50%',
          },
        },
        {
          name: `${prefix}_url`,
          type: 'text',
          label: `${label} (URL)`,
          defaultValue: defaultUrl,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: `${prefix}_color`,
          type: 'select',
          ...(colorEnumName ? { enumName: colorEnumName } : {}),
          label: `${label} (Esquema de Cor)`,
          defaultValue: defaultColor,
          options: [...buttonColorOptions],
          admin: {
            width: '50%',
            description: 'Tonalidade Squammata aplicada ao botão.',
          },
        },
        {
          name: `${prefix}_radius`,
          type: 'select',
          ...(radiusEnumName ? { enumName: radiusEnumName } : {}),
          label: `${label} (Cantos / Raio de Borda)`,
          defaultValue: defaultRadius,
          options: [...buttonRadiusOptions],
          admin: {
            width: '50%',
            description: 'Curvatura dos cantos (reto, suave, orgânico ou cápsula).',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: `${prefix}_has_triangle`,
          type: 'checkbox',
          label: `${label} - Ativar Canto Triangular Chanfrado (mil-angle)`,
          defaultValue: Boolean(defaultTriangle && defaultTriangle !== 'none'),
          admin: {
            width: '50%',
            style: {
              alignSelf: 'center',
            },
            description: 'Aplica chanfro triangular decorativo (.mil-angle) no canto do botão.',
          },
        },
        {
          name: `${prefix}_show_icon`,
          type: 'checkbox',
          label: `${label} - Exibir Seta Triangular Interna`,
          defaultValue: defaultShowIcon,
          admin: {
            width: '50%',
            style: {
              alignSelf: 'center',
            },
            description: 'Alterna a presença do ícone de seta triangular rotacionada (fa-arrow-right).',
          },
        },
      ],
    },
  ]
}

// ============================================================================
// 5. Factory de Campos para Cards e Módulos (Payload CMS)
// ============================================================================

export interface CreateCardCustomizationFieldsOptions {
  prefix?: string
  name?: string
  label?: string
  defaultStyle?: CardColor
  defaultRadius?: ButtonRadius
  defaultTriangle?: boolean | string
  styleEnumName?: string
}

/**
 * Cria campos para customização dinâmica de cartões, colunas ou módulos.
 */
export function createCardCustomizationFields({
  prefix = 'card',
  name,
  label = 'Card',
  defaultStyle = 'default',
  defaultRadius = 'default',
  defaultTriangle = false,
  styleEnumName,
}: CreateCardCustomizationFieldsOptions = {}): Field[] {
  const styleFieldName = name || `${prefix}_style`
  const triangleFieldName = name ? `${name}_has_triangle` : `${prefix}_has_triangle`

  return [
    {
      type: 'row',
      fields: [
        {
          name: styleFieldName,
          type: 'select',
          ...(styleEnumName ? { enumName: styleEnumName } : {}),
          label: `${label} (Esquema de Cor)`,
          defaultValue: defaultStyle,
          options: [...cardColorOptions],
          admin: {
            width: '50%',
            description: 'Tonalidade de fundo e superfície do card.',
          },
        },
        {
          name: triangleFieldName,
          type: 'checkbox',
          label: `${label} - Ativar Canto Triangular Chanfrado (mil-angle)`,
          defaultValue: Boolean(defaultTriangle && defaultTriangle !== 'none'),
          admin: {
            width: '50%',
            style: {
              alignSelf: 'center',
            },
            description: 'Chanfro triangular decorativo (.mil-angle) no canto superior do card.',
          },
        },
      ],
    },
  ]
}

// ============================================================================
// 6. Helpers de Resolução de Classes CSS para o Frontend
// ============================================================================

/**
 * Resolve as classes CSS do botão combinando cor, raio e triângulo decorativo.
 */
export function getButtonClasses(
  color?: string | null,
  radius?: string | null,
  hasTriangle?: boolean | string | null,
  extraClasses: string = '',
): string {
  const classes: string[] = ['mil-btn']

  // Mapeamento de Cores
  switch (color) {
    case 'cafe':
    case 'dark':
    case 'mil-dark':
      classes.push('mil-btn-cafe')
      break
    case 'floresta':
    case 'mil-btn-bio-forest':
      classes.push('mil-btn-floresta')
      break
    case 'ambar':
      classes.push('mil-btn-ambar')
      break
    case 'rio':
    case 'mil-btn-bio-river':
      classes.push('mil-btn-rio')
      break
    case 'argila':
    case 'mil-soft':
      classes.push('mil-btn-argila')
      break
    case 'niemeyer':
    case 'mil-light':
      classes.push('mil-btn-niemeyer')
      break
    case 'outline':
      classes.push('mil-btn-outline')
      break
    case 'terracota':
    case 'accent':
    case 'mil-accent':
    default:
      classes.push('mil-btn-terracota')
      break
  }

  // Mapeamento de Cantos / Raio de Borda
  switch (radius) {
    case 'sharp':
      classes.push('mil-radius-sharp')
      break
    case 'sm':
      classes.push('mil-radius-sm')
      break
    case 'md':
      classes.push('mil-radius-md')
      break
    case 'lg':
      classes.push('mil-radius-lg')
      break
    case 'pill':
      classes.push('mil-radius-pill')
      break
    case 'default':
    default:
      break
  }

  // Mapeamento de Triângulo Decorativo
  if (hasTriangle === true || (hasTriangle as any) === 'true' || hasTriangle === 'triangle') {
    classes.push('mil-angle')
  } else if (typeof hasTriangle === 'string') {
    switch (hasTriangle) {
      case 'triangle_lg':
        classes.push('mil-angle mil-angle-lg')
        break
      case 'triangle_terracota':
        classes.push('mil-angle mil-angle-terracota')
        break
      case 'triangle_floresta':
        classes.push('mil-angle mil-angle-floresta')
        break
      case 'triangle_cafe':
        classes.push('mil-angle mil-angle-cafe')
        break
      case 'triangle_argila':
        classes.push('mil-angle mil-angle-argila')
        break
      default:
        break
    }
  }

  if (extraClasses) {
    classes.push(extraClasses)
  }

  return classes.filter(Boolean).join(' ')
}

/**
 * Resolve as classes CSS de um Card combinando cor de superfície, cantos e triângulo decorativo.
 */
export function getCardClasses(
  cardStyle?: string | null,
  cardRadius?: string | null,
  cardTriangle?: boolean | string | null,
  extraClasses: string = '',
): string {
  const classes: string[] = ['mil-card']

  // Mapeamento de Estilo do Card
  switch (cardStyle) {
    case 'argila':
    case 'mil-gray-card':
      classes.push('mil-card-argila')
      break
    case 'terracota':
      classes.push('mil-card-terracota')
      break
    case 'floresta':
      classes.push('mil-card-floresta')
      break
    case 'cafe':
      classes.push('mil-card-cafe')
      break
    case 'dark':
      classes.push('mil-card-dark')
      break
    case 'outline':
      classes.push('mil-card-outline')
      break
    case 'transparent':
    case 'mil-transparent':
      classes.push('mil-transparent')
      break
    case 'default':
    default:
      // Padrão mineral limpo
      break
  }

  // Mapeamento de Curvatura dos Cantos
  switch (cardRadius) {
    case 'sharp':
      classes.push('mil-radius-sharp')
      break
    case 'sm':
      classes.push('mil-radius-sm')
      break
    case 'md':
      classes.push('mil-radius-md')
      break
    case 'lg':
      classes.push('mil-radius-lg')
      break
    case 'pill':
      classes.push('mil-radius-pill')
      break
    case 'default':
    default:
      // Mantém o raio padrão (16px)
      break
  }

  // Mapeamento de Triângulo Decorativo
  if (
    cardTriangle === true ||
    (cardTriangle as any) === 'true' ||
    cardTriangle === 'triangle' ||
    cardTriangle === 'mil-angle-gray'
  ) {
    classes.push('mil-angle')
  } else if (typeof cardTriangle === 'string') {
    switch (cardTriangle) {
      case 'triangle_lg':
        classes.push('mil-angle mil-angle-lg')
        break
      case 'triangle_terracota':
        classes.push('mil-angle mil-angle-terracota')
        break
      case 'triangle_floresta':
        classes.push('mil-angle mil-angle-floresta')
        break
      case 'triangle_cafe':
        classes.push('mil-angle mil-angle-cafe')
        break
      case 'triangle_argila':
        classes.push('mil-angle mil-angle-argila')
        break
      default:
        break
    }
  }

  if (extraClasses) {
    classes.push(extraClasses)
  }

  return classes.filter(Boolean).join(' ')
}
