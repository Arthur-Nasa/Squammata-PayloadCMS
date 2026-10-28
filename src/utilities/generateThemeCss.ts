import type { ClientThemeConfig } from '@/site.config'
import { RADIUS_TOKENS } from '@/theme/presets'
import { getFontPreset, type FontPresetKey } from '@/theme/fontPresets'

export interface ThemeCssInput {
  primaryColor?: string | null
  primaryHover?: string | null
  secondaryColor?: string | null
  darkBg?: string | null
  lightBg?: string | null
  cardBg?: string | null
  border?: string | null
  radius?: 'organic' | 'modern' | 'sharp' | null
  fontPreset?: FontPresetKey | null
}

/**
 * Converte um tema de cliente e suas configurações tipográficas em variáveis CSS injetáveis no <head>
 */
export function generateThemeCss(theme?: ThemeCssInput | null): string {
  const primary = theme?.primaryColor || '#7A4207'
  const primaryHover = theme?.primaryHover || '#9E5509'
  const secondary = theme?.secondaryColor || '#B87514'
  const darkBg = theme?.darkBg || '#1A1A1A'
  const lightBg = theme?.lightBg || '#FAF9F6'
  const cardBg = theme?.cardBg || '#FFFFFF'
  const border = theme?.border || '#D5CFC6'
  const radiusKey = theme?.radius || 'organic'
  const radius = RADIUS_TOKENS[radiusKey] || RADIUS_TOKENS.organic
  const fontConfig = getFontPreset(theme?.fontPreset)

  return `
    :root {
      /* --- Dynamic Theme Tokens (Boilerplate Engine) --- */
      --mil-primary: ${primary};
      --mil-primary-hover: ${primaryHover};
      --mil-secondary: ${secondary};
      --mil-bg-dark: ${darkBg};
      --mil-bg-light: ${lightBg};
      --mil-card-bg: ${cardBg};
      --mil-border: ${border};

      /* --- Geometric Radii --- */
      --mil-radius-sm: ${radius.sm};
      --mil-radius-base: ${radius.md};
      --mil-radius-lg: ${radius.lg};
      --mil-radius-pill: ${radius.pill};

      /* --- SCSS Token Mirroring --- */
      --a-1: ${primary};
      --a-2: ${primaryHover};
      --m-1: ${darkBg};
      --m-5: ${lightBg};
      --m-4: ${border};

      /* --- Dynamic Font System Tokens --- */
      --font-heading: ${fontConfig.headingFont};
      --font-body: ${fontConfig.bodyFont};
      --font-mono: ${fontConfig.monoFont};
    }
  `.replace(/\s+/g, ' ').trim()
}
