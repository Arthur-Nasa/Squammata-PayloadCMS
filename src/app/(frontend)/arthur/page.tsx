import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioView } from './ArthurPortfolioView'

const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://linkedin.com/in/arthurnasa#person',
      name: 'Arthur Saggioratto',
      alternateName: ['Arthur Saggioratto Neto', 'Arthur Nasa'],
      jobTitle: 'Head of E-commerce, SEO & Growth',
      description:
        'Há 15 anos estruturo e lidero operações digitais de ponta a ponta: integrando engenharia de SEO e visibilidade em IA (GEO), otimização de conversão (CRO) e mídia de performance para escalar receita subordinada à saúde financeira do negócio (DRE/P&L).',
      url: 'https://linkedin.com/in/arthurnasa',
      email: 'mailto:arthur.saggioratto@gmail.com',
      telephone: '+55-19-99349-7819',
      address: {
        '@type': 'PostalAddress',
        addressLocality: "Santa Bárbara d'Oeste",
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Universidade Estadual de Campinas (UNICAMP)',
          sameAs: 'https://www.unicamp.br/',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Faculdade de Administração e Artes de Limeira (FAAL)',
        },
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Squammata Consultoria & Operações Estratégicas',
        taxID: '31.384.814/0001-09',
      },
      knowsAbout: [
        'SEO Técnico e Semântico',
        'GEO (Generative Engine Optimization) e AEO',
        'Conversion Rate Optimization (CRO)',
        'Arquitetura de Plataformas de E-commerce (Shopify Plus, Magento, VTEX)',
        'Mídia de Performance e Retail Media (Google Ads, Meta Ads, Mercado Ads)',
        'Governança Financeira de E-commerce, Unit Economics, POAS e DRE/P&L',
        'Marketplace Seller Center (Omnik) e Integração de ERPs',
        'Arquitetura de Split Payment em Shopify',
        'Schema.org JSON-LD e Web Semântica',
        'Sociologia da Técnica e do Consumo',
      ],
      sameAs: [
        'https://linkedin.com/in/arthurnasa',
        'https://blog.ruadocafe.com.br/author/arthur/',
      ],
    },
  ],
}

export const metadata: Metadata = {
  title: {
    absolute: 'Arthur Saggioratto | Head of E-commerce, SEO & Growth',
  },
  description:
    'Portfólio executivo de Arthur Saggioratto. 15 anos liderando operações digitais: Arquitetura de E-commerce, Crescimento Orgânico e Proteção de Margem Operacional (DRE/P&L).',
  openGraph: {
    title: 'Arthur Saggioratto | Head of E-commerce, SEO & Growth',
    description:
      'Arquitetura de E-commerce, Crescimento Orgânico e Proteção de Margem Operacional. Integração de SEO, GEO, CRO e mídia subordinados ao P&L.',
    url: 'https://linkedin.com/in/arthurnasa',
    siteName: 'Arthur Saggioratto | Portfólio Executivo Editorial',
    images: [
      {
        url: '/arthur-saggioratto.jpg',
        width: 600,
        height: 600,
        alt: 'Arthur Saggioratto - Head of E-commerce, SEO & Growth',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Saggioratto | Head of E-commerce, SEO & Growth',
    description:
      'Engenharia de Crescimento Orgânico, Arquitetura de E-commerce e Proteção de Margem Operacional.',
    images: ['/arthur-saggioratto.jpg'],
  },
}

export default function ArthurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <ArthurPortfolioView />
    </>
  )
}
