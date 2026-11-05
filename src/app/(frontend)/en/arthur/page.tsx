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
    absolute: 'Arthur Saggioratto | E-commerce Growth & Profitability Consultant',
  },
  description:
    '15 years leading e-commerce operations, technical SEO, CRO, performance marketing (Google Ads), and digital P&L governance. Helping businesses break growth plateaus, eliminate operational bottlenecks, and scale sustainably across Shopify Plus, Magento, and VTEX.',
  openGraph: {
    title: 'Arthur Saggioratto | E-commerce Growth & Profitability Consultant',
    description:
      '15 years leading e-commerce operations, technical SEO, CRO, performance marketing (Google Ads), and digital P&L governance. Helping businesses break growth plateaus, eliminate operational bottlenecks, and scale sustainably across Shopify Plus, Magento, and VTEX.',
    url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/en/arthur/',
    siteName: 'Arthur Saggioratto | Executive Portfolio',
    images: [
      {
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg',
        width: 720,
        height: 720,
        alt: 'Arthur Saggioratto: E-commerce Growth & Profitability Consultant',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Saggioratto | E-commerce Growth & Profitability Consultant',
    description:
      '15 years leading e-commerce operations, technical SEO, CRO, performance marketing (Google Ads), and digital P&L governance. Helping businesses break growth plateaus, eliminate operational bottlenecks, and scale sustainably across Shopify Plus, Magento, and VTEX.',
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
