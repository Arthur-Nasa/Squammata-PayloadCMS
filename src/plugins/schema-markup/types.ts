export interface SchemaMarkupPluginConfig {
  /**
   * Coleções onde o campo/aba de Schema Markup será injetado.
   * Exemplo: ['pages', 'posts']
   */
  collections?: string[]
  /**
   * Slug do Global de Portfólio.
   * Padrão: 'portfolio-settings'
   */
  portfolioGlobalSlug?: string
  /**
   * Habilita ou desabilita o Global de Portfólio.
   * Padrão: true
   */
  enablePortfolioGlobal?: boolean
}

export interface FAQItem {
  question: string
  answer: string
  id?: string
}

export interface CaseItem {
  title: string
  metric: string
  description?: string
  id?: string
}

export interface AlumniItem {
  name: string
  url?: string
  id?: string
}

export interface TopicItem {
  topic: string
  id?: string
}

export interface SocialLinkItem {
  url: string
  id?: string
}

export interface MetricCardItem {
  value: string
  label: string
  description: string
  id?: string
}

export interface PortfolioSettingsData {
  // Schema Markup
  schemaMarkup?: {
    mode?: 'visual' | 'raw' | 'both'
    person?: {
      name?: string
      alternateName?: string
      jobTitle?: string
      description?: string
      email?: string
      telephone?: string
      url?: string
      image?: string
      addressLocality?: string
      addressRegion?: string
      addressCountry?: string
      alumniOf?: AlumniItem[]
      knowsAbout?: TopicItem[]
      sameAs?: SocialLinkItem[]
    }
    faq?: {
      items?: FAQItem[]
    }
    organization?: {
      name?: string
      taxID?: string
      url?: string
    }
    occupation?: {
      name?: string
      occupationalCategory?: string
      skills?: string
      description?: string
    }
    cases?: {
      items?: CaseItem[]
    }
    rawJson?: string
    syncFromRaw?: boolean
  }
  // Hero & Apresentação
  hero?: {
    eyebrow?: string
    title?: string
    lead?: string
    whatsappNumber?: string
    curriculoPdfUrl?: string
    linkedinUrl?: string
    email?: string
    specs?: {
      pj?: string
      formacao?: string
      fluencia?: string
      coreStack?: string
    }
  }
  // Indicadores
  metrics?: MetricCardItem[]
  // FAQs Visuais
  faqSection?: {
    eyebrow?: string
    title?: string
    subtext?: string
    items?: FAQItem[]
  }
  // Footer Callout
  footer?: {
    callout?: string
    metaLine1?: string
    metaLine2?: string
  }
}
