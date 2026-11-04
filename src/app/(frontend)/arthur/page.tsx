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
    absolute: 'Arthur Saggioratto | Executivo de Crescimento, E-commerce e Rentabilidade Digital',
  },
  description:
    '15 anos liderando operações de e-commerce, SEO técnico, CRO, mídia de performance (Google Ads) e gestão de P&L. Escala sustentável de GMV e proteção de margem em Shopify Plus, Magento e VTEX.',
  openGraph: {
    title: 'Arthur Saggioratto | Executivo de Crescimento, E-commerce e Rentabilidade Digital',
    description:
      '15 anos liderando operações de e-commerce, SEO técnico, CRO, mídia de performance (Google Ads) e gestão de P&L. Escala sustentável de GMV e proteção de margem em Shopify Plus, Magento e VTEX.',
    url: 'https://squammata.com.br/arthur',
    siteName: 'Arthur Saggioratto | Portfólio Executivo',
    images: [
      {
        url: '/arthur-saggioratto.jpg',
        width: 600,
        height: 600,
        alt: 'Arthur Saggioratto: Executivo de Crescimento e Rentabilidade Digital',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Saggioratto | Executivo de Crescimento, E-commerce e Rentabilidade Digital',
    description:
      '15 anos liderando operações de e-commerce, SEO técnico, CRO, mídia de performance (Google Ads) e gestão de P&L. Escala sustentável de GMV e proteção de margem em Shopify Plus, Magento e VTEX.',
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
