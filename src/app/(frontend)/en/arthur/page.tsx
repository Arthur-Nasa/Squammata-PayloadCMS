import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioViewEn } from './ArthurPortfolioViewEn'
import { portfolioSchemaEn } from './portfolioSchemaEn'

export const metadata: Metadata = {
  metadataBase: new URL('https://squammata.com.br'),
  alternates: {
    canonical: '/en/arthur',
    languages: {
      'pt-BR': '/arthur',
      'en-US': '/en/arthur',
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
    url: 'https://squammata.com.br/en/arthur',
    siteName: 'Arthur Saggioratto | Executive Portfolio',
    images: [
      {
        url: '/arthur-saggioratto.jpg',
        width: 600,
        height: 600,
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
    images: ['/arthur-saggioratto.jpg'],
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
