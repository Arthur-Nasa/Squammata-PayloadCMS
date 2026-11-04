import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioView } from './ArthurPortfolioView'
import { getCachedPortfolioSettings } from '@/utilities/getGlobals'
import { portfolioSchema } from './portfolioSchema'

export const metadata: Metadata = {
  title: {
    absolute: 'Arthur Saggioratto: Head de E-commerce, SEO & Margem DRE',
  },
  description:
    'Escale seu e-commerce com lucro e margem protegida. Arthur Saggioratto une SEO técnico, IA generativa e CRO subordinados ao DRE. Conheça a operação.',
  openGraph: {
    title: 'Arthur Saggioratto: Head of E-commerce, SEO & Proteção de Margem',
    description:
      '15 anos estruturando operações de e-commerce e canais proprietários. Engenharia de SEO, visibilidade em IA generativa (GEO) e mídia de performance subordinadas ao lucro real da empresa.',
    url: 'https://squammata.com.br/arthur',
    siteName: 'Arthur Saggioratto | Portfólio Executivo Editorial',
    images: [
      {
        url: '/arthur-saggioratto.jpg',
        width: 600,
        height: 600,
        alt: 'Arthur Saggioratto: Head of E-commerce, SEO & Growth',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Saggioratto | Liderança em E-commerce, SEO & Growth',
    description:
      'Arquitetura de e-commerce, visibilidade em IA e controle de margem de contribuição. Conheça a trajetória e os casos auditados.',
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
