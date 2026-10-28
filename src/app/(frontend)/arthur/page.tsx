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
      jobTitle: 'Head of E-commerce, Growth & Senior SEO/CRO Specialist',
      description:
        'Executivo de E-commerce, Growth e Performance com 15 anos de experiência a liderar operações digitais B2C, B2B e SaaS global, especialista em SEO Técnico, GEO, CRO e Retail Media.',
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
        name: 'Squammata Consultoria',
        taxID: '31.384.814/0001-09',
      },
      knowsAbout: [
        'Technical SEO',
        'Generative Engine Optimization (GEO)',
        'Conversion Rate Optimization (CRO)',
        'E-commerce Architecture',
        'Shopify Plus',
        'Magento',
        'VTEX',
        'Retail Media',
        'Unit Economics',
        'Schema.org JSON-LD',
      ],
      sameAs: [
        'https://linkedin.com/in/arthurnasa',
        'https://blog.ruadocafe.com.br/author/arthur/',
      ],
    },
  ],
}

export const metadata: Metadata = {
  title: 'Arthur Saggioratto | Head of E-commerce, Growth & Senior SEO/CRO Specialist',
  description:
    'Executivo de E-commerce, Growth e Performance com 15 anos de experiência a liderar operações digitais B2C, B2B e SaaS global. Especialista em SEO Técnico, GEO, CRO e Unit Economics.',
  openGraph: {
    title: 'Arthur Saggioratto | Head of E-commerce, Growth & Senior SEO/CRO Specialist',
    description:
      'Engenharia de Crescimento Orgânico, Arquitetura de E-commerce e Proteção de Margem Operacional. 15 anos a conectar dados e tecnologia ao DRE do negócio.',
    url: 'https://linkedin.com/in/arthurnasa',
    siteName: 'Arthur Saggioratto | Executive Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Arthur Saggioratto - Executive E-commerce Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arthur Saggioratto | Head of E-commerce, Growth & Senior SEO/CRO Specialist',
    description:
      '15 anos a liderar operações digitais B2C, B2B e SaaS global. Especialista em SEO Técnico, GEO, CRO e Unit Economics.',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
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
