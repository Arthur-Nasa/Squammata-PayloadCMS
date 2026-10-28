/**
 * ============================================================================
 * Squammata Boilerplate Engine - Presets Tipográficos do Sistema
 * ============================================================================
 * 
 * Permite que novos clientes do boilerplate adotem identidades visuais distintas
 * (Editorial, Moderno, Tech ou Minimalista) sem necessidade de alterar código SCSS.
 */

export type FontPresetKey = 'editorial' | 'modern' | 'tech' | 'minimal'

export interface FontPresetDefinition {
  key: FontPresetKey
  name: string
  description: string
  headingFont: string
  bodyFont: string
  monoFont: string
}

export const FONT_PRESETS: Record<FontPresetKey, FontPresetDefinition> = {
  editorial: {
    key: 'editorial',
    name: 'Editorial Clássico',
    description: 'Zilla Slab nos títulos com Quicksand na interface e Space Mono em números/dados.',
    headingFont: 'var(--font-zilla-slab, "Zilla Slab", Georgia, serif)',
    bodyFont: 'var(--font-quicksand, "Quicksand", -apple-system, BlinkMacSystemFont, sans-serif)',
    monoFont: 'var(--font-space-mono, "Space Mono", monospace)',
  },
  modern: {
    key: 'modern',
    name: 'Moderno Corporativo',
    description: 'Plus Jakarta Sans com Inter, ideal para consultorias corporativas e serviços premium.',
    headingFont: '"Plus Jakarta Sans", var(--font-zilla-slab, sans-serif)',
    bodyFont: '"Inter", var(--font-quicksand, -apple-system, sans-serif)',
    monoFont: 'var(--font-space-mono, "Space Mono", monospace)',
  },
  tech: {
    key: 'tech',
    name: 'Tecnologia & SaaS',
    description: 'Space Grotesk e Inter com estética geométrica de produtos de tecnologia.',
    headingFont: '"Space Grotesk", var(--font-zilla-slab, sans-serif)',
    bodyFont: '"Inter", var(--font-quicksand, -apple-system, sans-serif)',
    monoFont: 'var(--font-space-mono, "Space Mono", monospace)',
  },
  minimal: {
    key: 'minimal',
    name: 'Minimalista Neutro',
    description: 'Inter em todas as superfícies para um estilo direto, limpo e atemporal.',
    headingFont: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    bodyFont: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monoFont: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
}

export function getFontPreset(presetKey?: string | null): FontPresetDefinition {
  if (presetKey && presetKey in FONT_PRESETS) {
    return FONT_PRESETS[presetKey as FontPresetKey]
  }
  return FONT_PRESETS.editorial
}
