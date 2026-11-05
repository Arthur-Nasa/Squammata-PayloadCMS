import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioViewEn } from './ArthurPortfolioViewEn'
import { portfolioSchemaEn } from './portfolioSchemaEn'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthur-nasa.github.io/Squammata-PayloadCMS'),
  alternates: {
    canonical: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/en/arthur/',
    languages: {
      'pt-BR': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
      'en-US': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/en/arthur/',
      'x-default': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
    },
  },
  title: {
    absolute: 'Arthur Saggioratto | E-commerce Growth & Profitability Executive',
  },
  description:
    '15 years directing e-commerce operations, digital P&L governance, technical SEO/GEO, CRO, and omnichannel architecture across Shopify Plus, Magento, and VTEX. Available for global executive leadership, Fractional Head of E-commerce, and board advisory.',
  openGraph: {
    title: 'Arthur Saggioratto | E-commerce Growth & Profitability Executive',
    description:
      '15 years directing e-commerce operations, digital P&L governance, technical SEO/GEO, CRO, and omnichannel architecture across Shopify Plus, Magento, and VTEX. Available for global executive leadership, Fractional Head of E-commerce, and board advisory.',
    url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/en/arthur/',
    siteName: 'Arthur Saggioratto | Executive Portfolio',
    images: [
      {
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg',
        width: 720,
        height: 720,
        alt: 'Arthur Saggioratto: E-commerce Growth & Profitability Executive',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Saggioratto | E-commerce Growth & Profitability Executive',
    description:
      '15 years directing e-commerce operations, digital P&L governance, technical SEO/GEO, CRO, and omnichannel architecture across Shopify Plus, Magento, and VTEX. Available for global executive leadership, Fractional Head of E-commerce, and board advisory.',
    images: ['https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg'],
  },
}

export default async function ArthurEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchemaEn) }}
      />
      <ArthurPortfolioViewEn />
    </>
  )
}
