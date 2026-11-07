import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioView } from './ArthurPortfolioView'
import { getCachedPortfolioSettings } from '@/utilities/getGlobals'
import { portfolioSchema } from './portfolioSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthursaggioratto.com.br'),
  alternates: {
    canonical: 'https://arthursaggioratto.com.br/',
    languages: {
      'pt-BR': 'https://arthursaggioratto.com.br/',
      'en-US': 'https://arthursaggioratto.com.br/en/arthur/',
      'x-default': 'https://arthursaggioratto.com.br/',
    },
  },
  title: {
    absolute: 'Arthur Saggioratto | Consultoria em E-commerce e Rentabilidade Digital',
  },
  description:
    '15 anos de atuação consultiva em governança de margem (POAS), SEO técnico de catálogo, arquitetura de plataformas e destrave de crescimento para e-commerces. Atendimento presencial na RMC, Piracicaba e São Paulo.',
  openGraph: {
    title: 'Arthur Saggioratto | Governança e Margem para E-commerce',
    description:
      '15 anos transformando gargalos técnicos em lucro operacional. Governança de margem (POAS), SEO técnico e arquitetura.',
    url: 'https://arthursaggioratto.com.br/',
    siteName: 'Arthur Saggioratto | Consultoria e Portfólio',
    images: [
      {
        url: 'https://arthursaggioratto.com.br/arthur-saggioratto.jpg',
        width: 1200,
        height: 630,
        alt: 'Arthur Saggioratto: Consultor de Crescimento e Rentabilidade para E-commerce',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Saggioratto | Governança e Margem para E-commerce',
    description:
      '15 anos transformando gargalos técnicos em lucro operacional. Governança de margem (POAS), SEO técnico e arquitetura.',
    images: ['https://arthursaggioratto.com.br/arthur-saggioratto.jpg'],
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
