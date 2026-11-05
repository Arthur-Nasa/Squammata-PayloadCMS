import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioView } from './ArthurPortfolioView'
import { getCachedPortfolioSettings } from '@/utilities/getGlobals'
import { portfolioSchema } from './portfolioSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://squammata.com.br'),
  alternates: {
    canonical: '/arthur',
    languages: {
      'pt-BR': '/arthur',
      'en-US': '/en/arthur',
    },
  },
  title: {
    absolute: 'Arthur Saggioratto | Consultor de Crescimento e Rentabilidade para E-commerce',
  },
  description:
    '15 anos de atuação consultiva em governança de margem (POAS), SEO técnico de catálogo, arquitetura de plataformas e destrave de crescimento para e-commerces. Atendimento presencial na RMC, Piracicaba e São Paulo.',
  openGraph: {
    title: 'Arthur Saggioratto | Consultor de Crescimento e Rentabilidade para E-commerce',
    description:
      '15 anos de atuação consultiva em governança de margem (POAS), SEO técnico de catálogo, arquitetura de plataformas e destrave de crescimento para e-commerces. Atendimento presencial na RMC, Piracicaba e São Paulo.',
    url: 'https://squammata.com.br/arthur',
    siteName: 'Arthur Saggioratto | Consultoria e Portfólio',
    images: [
      {
        url: '/arthur-saggioratto.jpg',
        width: 600,
        height: 600,
        alt: 'Arthur Saggioratto: Consultor de Crescimento e Rentabilidade para E-commerce',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Saggioratto | Consultor de Crescimento e Rentabilidade para E-commerce',
    description:
      '15 anos de atuação consultiva em governança de margem (POAS), SEO técnico de catálogo, arquitetura de plataformas e destrave de crescimento para e-commerces. Atendimento presencial na RMC, Piracicaba e São Paulo.',
    images: ['/arthur-saggioratto.jpg'],
  },
}

export default async function ArthurPage() {
  let portfolioData: any = null
  try {
    portfolioData = await getCachedPortfolioSettings()()
  } catch {
    portfolioData = null
  }

  let schemaToRender: any = portfolioSchema
  if (portfolioData?.schemaMarkup?.rawJson) {
    try {
      schemaToRender = JSON.parse(portfolioData.schemaMarkup.rawJson)
    } catch {
      schemaToRender = portfolioSchema
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
      />
      <ArthurPortfolioView initialData={portfolioData} />
    </>
  )
}
