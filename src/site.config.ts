/**
 * ============================================================================
 * Squammata Boilerplate Engine - Manifesto Central de Configuração do Cliente
 * ============================================================================
 * 
 * Este arquivo é a fonte única de verdade (Single Source of Truth) para novos
 * clientes do boilerplate. Ao iniciar um novo projeto, basta preencher os campos
 * deste arquivo ou sincronizá-lo via painel administrativo.
 */

export interface ClientBranding {
  /** Nome comercial ou de fantasia da empresa */
  name: string
  /** Razão social completa */
  legalName: string
  /** Documento fiscal (CNPJ ou similar) */
  document: string
  /** Slogan principal de posicionamento */
  tagline: string
  /** Descrição padrão para metadados e mecanismos de busca */
  description: string
  /** Caminhos para logotipos e ícones */
  logos: {
    dark: string
    light: string
    symbol: string
    favicon: string
  }
}

export interface ClientContact {
  email: string
  supportEmail?: string
  phone: string
  whatsapp: string
  address: {
    street: string
    number?: string
    neighborhood: string
    city: string
    state: string
    country: string
    zipCode: string
  }
  social: {
    instagram?: string
    linkedin?: string
    github?: string
    youtube?: string
  }
  operationalHours?: string
  citiesServed?: string[]
}

export interface ClientThemeConfig {
  /** Preset de cores canônico ou 'custom' */
  preset: 'terracotta' | 'forest' | 'river' | 'amber' | 'coffee' | 'clay' | 'custom'
  primaryColor: string
  primaryHover: string
  secondaryColor: string
  darkBg: string
  lightBg: string
  cardBg: string
  border: string
  /** Estilo geométrico de curvatura de cantos */
  radius: 'organic' | 'modern' | 'sharp'
  /** Preset tipográfico do site */
  fontPreset?: 'editorial' | 'modern' | 'tech' | 'minimal'
  /** Estilo do divisor de seção entre blocos */
  dividerStyle: 'curve' | 'wave' | 'slant' | 'straight' | 'none'
  /** Exibição de marca d'água no fundo de seções */
  enableWatermark: boolean
}


export interface ClientFeatures {
  enableBlog: boolean
  enableCaseStudies: boolean
  enableServices: boolean
  enableTeam: boolean
  enablePricing: boolean
  enableDiagnosticPopup: boolean
}

export interface SiteConfig {
  branding: ClientBranding
  contact: ClientContact
  theme: ClientThemeConfig
  features: ClientFeatures
}

/**
 * Configuração Ativa Padrão do Boilerplate
 * (Pode ser alterada manualmente ou sobreposta pelas Globals do Payload CMS)
 */
export const defaultSiteConfig: SiteConfig = {
  branding: {
    name: 'Squammata',
    legalName: 'Squammata Consultoria e Gestão de Projetos Ltda.',
    document: 'CNPJ sob consulta',
    tagline: 'Gestão de Projetos e Engenharia de E-commerce',
    description:
      'Consultoria especializada em reestruturação operacional, DRE e engenharia headless para médias empresas no interior paulista.',
    logos: {
      dark: '/logo/squammata/logo-novo-45.png',
      light: '/logo/squammata/logo-novo-br-45.png',
      symbol: '/logo/squammata/passarinho.svg',
      favicon: '/favicon.svg',
    },
  },
  contact: {
    email: 'contato@squammata.com.br',
    phone: '+55 19 99349-7819',
    whatsapp: '+55 19 99349-7819',
    address: {
      street: 'Rua Coronel Quirino',
      number: '1200',
      neighborhood: 'Cambuí',
      city: 'Campinas',
      state: 'SP',
      country: 'Brasil',
      zipCode: '13025-002',
    },
    social: {
      linkedin: 'https://linkedin.com/company/squammata',
    },
    operationalHours: 'Segunda a Sexta, das 09h às 18h',
    citiesServed: [
      'Campinas',
      'Paulínia',
      'Americana',
      'Indaiatuba',
      'Valinhos',
      'Vinhedo',
      'Sumaré',
      'Hortolândia',
      'Santa Bárbara d\'Oeste',
      'Jaguariúna',
    ],
  },
  theme: {
    preset: 'terracotta',
    primaryColor: '#7A4207',
    primaryHover: '#9E5509',
    secondaryColor: '#B87514',
    darkBg: '#1A1A1A',
    lightBg: '#FAF9F6',
    cardBg: '#FFFFFF',
    border: '#D5CFC6',
    radius: 'organic',
    fontPreset: 'editorial',
    dividerStyle: 'curve',
    enableWatermark: true,
  },
  features: {
    enableBlog: true,
    enableCaseStudies: true,
    enableServices: true,
    enableTeam: true,
    enablePricing: true,
    enableDiagnosticPopup: true,
  },
}
