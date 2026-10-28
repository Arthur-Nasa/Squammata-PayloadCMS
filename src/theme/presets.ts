/**
 * ============================================================================
 * Squammata Design System v4.2 - Motor Canônico de Temas e Cores
 * Biofilia Paulista & Anti-AI-Slop
 * ============================================================================
 * 
 * Este arquivo define a arquitetura canônica de esquemas visuais da Squammata.
 * Cada tema é composto por um conjunto estruturado e intuitivo de chaves que
 * controlam a paleta cromática, superfícies, contraste e curvatura orgânica.
 * 
 * Para criar um novo tema, basta duplicar um dos presets abaixo e fornecer as
 * chaves obrigatórias.
 */

export interface ThemePreset {
  /** Identificador único do preset (ex: 'terracotta', 'forest') */
  key: string
  /** Nome amigável exibido no painel de controle */
  name: string
  /** Subtítulo institucional / foco operacional */
  description: string
  /** Cor primária de acento (botões de conversão, links ativos, destaques) */
  primary: string
  /** Estado de hover / interação ativa da cor primária */
  primaryHover: string
  /** Cor secundária (badges, destaques complementares, foco) */
  secondary: string
  /** Cor terciária / acento sutil */
  tertiary: string
  /** Fundo escuro telúrico (heróis escuros, cabeçalhos densos, rodapés) */
  darkBg: string
  /** Fundo claro canônico (superfície mineral Concreto Niemeyer / Argila) */
  lightBg: string
  /** Fundo dos cards e contêineres modulares */
  cardBg: string
  /** Fundo de cartões secundários ou alternados */
  cardAltBg: string
  /** Borda tátil suave e delimitadores */
  border: string
  /** Borda de foco / destaque ativo */
  borderFocus: string
  /** Cor de títulos e cabeçalhos editoriais (Zilla Slab) */
  textHeading: string
  /** Cor de corpo de texto, navegação e leitura (Quicksand) */
  textBody: string
  /** Cor de metadados, legendas e carimbos técnicos (Space Mono) */
  textMuted: string
  /** Família de curvatura orgânica */
  radius: 'organic' | 'modern' | 'sharp'
}

/**
 * Raio de borda correspondente a cada família geométrica
 */
export const RADIUS_TOKENS = {
  organic: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    pill: '100px',
  },
  modern: {
    sm: '10px',
    md: '20px',
    lg: '32px',
    pill: '100px',
  },
  sharp: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    pill: '100px',
  },
} as const

/**
 * 6 Presets Canônicos Squammata (Biofilia Paulista v4.2)
 */
export const THEME_PRESETS: Record<string, ThemePreset> = {
  terracotta: {
    key: 'terracotta',
    name: 'Terracota Tectônico (Padrão)',
    description: 'Estratégia, DRE & Margem Operacional',
    primary: '#C15C3D',
    primaryHover: '#A84C30',
    secondary: '#8C5808',
    tertiary: '#933E24',
    darkBg: '#1A110B',
    lightBg: '#FAF9F6',
    cardBg: '#FFFFFF',
    cardAltBg: '#F3EFE6',
    border: '#D5CFC6',
    borderFocus: '#C15C3D',
    textHeading: '#1A1A1A',
    textBody: '#3E3731',
    textMuted: '#736B63',
    radius: 'organic',
  },
  forest: {
    key: 'forest',
    name: 'Mata Atlântica & Clorofila',
    description: 'Sustentabilidade, Governança & ESG Paulista',
    primary: '#244735',
    primaryHover: '#1B382B',
    secondary: '#4D6E57',
    tertiary: '#6C8B64',
    darkBg: '#111E16',
    lightBg: '#F5F8F4',
    cardBg: '#FFFFFF',
    cardAltBg: '#E6EFE5',
    border: '#C8D8C5',
    borderFocus: '#244735',
    textHeading: '#102117',
    textBody: '#2A3B30',
    textMuted: '#586E60',
    radius: 'organic',
  },
  river: {
    key: 'river',
    name: 'Leito de Rio Piracicaba',
    description: 'Engenharia Headless, APIs & Infraestrutura Cloud',
    primary: '#244558',
    primaryHover: '#1B3442',
    secondary: '#43677A',
    tertiary: '#688FA3',
    darkBg: '#0F1A21',
    lightBg: '#F3F7FA',
    cardBg: '#FFFFFF',
    cardAltBg: '#E5EEF3',
    border: '#C4D6E0',
    borderFocus: '#244558',
    textHeading: '#101C22',
    textBody: '#273942',
    textMuted: '#576F7C',
    radius: 'organic',
  },
  amber: {
    key: 'amber',
    name: 'Âmbar Solar & Safra',
    description: 'Performance de Mídia, Aquisição & ROAS',
    primary: '#B87514',
    primaryHover: '#965E0E',
    secondary: '#8C5808',
    tertiary: '#D9822B',
    darkBg: '#1F1508',
    lightBg: '#FAF7F0',
    cardBg: '#FFFFFF',
    cardAltBg: '#F7EFE1',
    border: '#E3D7C4',
    borderFocus: '#B87514',
    textHeading: '#231808',
    textBody: '#3F3221',
    textMuted: '#75654F',
    radius: 'organic',
  },
  coffee: {
    key: 'coffee',
    name: 'Café Torrado & Barão',
    description: 'Controladoria, Valuation & IFRS',
    primary: '#3A2313',
    primaryHover: '#29180C',
    secondary: '#522416',
    tertiary: '#633F2E',
    darkBg: '#150B05',
    lightBg: '#F9F6F2',
    cardBg: '#FFFFFF',
    cardAltBg: '#F0E9DF',
    border: '#DDD2C3',
    borderFocus: '#3A2313',
    textHeading: '#1D1108',
    textBody: '#382B21',
    textMuted: '#6D5B4F',
    radius: 'organic',
  },
  clay: {
    key: 'clay',
    name: 'Argila Vermelha de Olaria',
    description: 'Fulfillment, Logística RMC & Operações Físicas',
    primary: '#933E24',
    primaryHover: '#79321C',
    secondary: '#7A231D',
    tertiary: '#D98260',
    darkBg: '#1C0D09',
    lightBg: '#FAF5F2',
    cardBg: '#FFFFFF',
    cardAltBg: '#F5ECE6',
    border: '#E3D3CB',
    borderFocus: '#933E24',
    textHeading: '#210F09',
    textBody: '#3D2922',
    textMuted: '#755B52',
    radius: 'organic',
  },
}

/** Preset padrão canônico */
export const DEFAULT_THEME_KEY = 'terracotta'

/**
 * Retorna o preset ativo combinando as chaves canônicas com quaisquer overrides
 */
export function getThemePreset(
  key?: string | null,
  overrides?: Partial<ThemePreset> | null
): ThemePreset {
  const basePreset = (key && THEME_PRESETS[key]) ? THEME_PRESETS[key] : THEME_PRESETS[DEFAULT_THEME_KEY]

  if (!overrides) {
    return basePreset
  }

  // Mescla limpa ignorando valores indefinidos ou vazios
  const merged: ThemePreset = { ...basePreset }
  for (const [k, v] of Object.entries(overrides)) {
    if (v !== undefined && v !== null && v !== '') {
      ;(merged as unknown as Record<string, unknown>)[k] = v
    }
  }

  return merged
}

/**
 * Converte um ThemePreset em um bloco CSS de variáveis :root
 * Garante que o frontend e o admin possam injetar e ler as variáveis instantaneamente
 */
export function generateThemeCssVariables(theme: ThemePreset): string {
  const radius = RADIUS_TOKENS[theme.radius] || RADIUS_TOKENS.organic

  return `
:root {
  /* Squammata Dynamic Theme Active Preset: ${theme.key} (${theme.name}) */
  --acento-terracota: ${theme.primary};
  --acento-hover: ${theme.primaryHover};
  --primary-color: ${theme.primary};
  --primary-hover: ${theme.primaryHover};
  --secondary-color: ${theme.secondary};
  --tertiary-color: ${theme.tertiary};

  --branco-niemeyer: ${theme.lightBg};
  --superficie-argila: ${theme.cardAltBg};
  --marrom-squammata: ${theme.darkBg};
  --marrom-borda: ${theme.border};
  --marrom-borda-suave: ${theme.border};
  --border-focus: ${theme.borderFocus};

  --carvao-tecnico: ${theme.textHeading};
  --concreto-medio: ${theme.textBody};
  --bio-pebble: ${theme.textMuted};

  --card-bg: ${theme.cardBg};
  --card-alt-bg: ${theme.cardAltBg};

  --border-radius-sm: ${radius.sm};
  --border-radius-md: ${radius.md};
  --border-radius-lg: ${radius.lg};
  --border-radius-pill: ${radius.pill};
  --border-radius: ${radius.md};
}
`.trim()
}
