import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioView } from './ArthurPortfolioView'
import { getCachedPortfolioSettings } from '@/utilities/getGlobals'
import { portfolioSchema } from './portfolioSchema'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthur-nasa.github.io/Squammata-PayloadCMS'),
  alternates: {
    canonical: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
    languages: {
      'pt-BR': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
      'en-US': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/en/arthur/',
      'x-default': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
    },
  },
  title: {
    absolute: 'Arthur Saggioratto | Consultoria em E-commerce e Lucro Real',
  },
  description:
    '15 anos ajudando lojas virtuais a destravar vendas e proteger o lucro real. Consultoria prática em plataformas, SEO de catálogo, ERP e tráfego pago (POAS). Atendimento presencial no polo de Campinas, Piracicaba e São Paulo.',
  openGraph: {
    title: 'Arthur Saggioratto | Consultoria em E-commerce e Lucro Real',
    description:
      '15 anos de experiência resolvendo gargalos de e-commerce e gerando lucro real. Consultoria em plataformas, SEO e tráfego pago.',
    url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
    siteName: 'Arthur Saggioratto | Consultoria e Portfólio',
    images: [
      {
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg',
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
    title: 'Arthur Saggioratto | Consultoria em E-commerce e Lucro Real',
    description:
      '15 anos de experiência resolvendo gargalos de e-commerce e gerando lucro real. Consultoria em plataformas, SEO e tráfego pago.',
    images: ['https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg'],
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
