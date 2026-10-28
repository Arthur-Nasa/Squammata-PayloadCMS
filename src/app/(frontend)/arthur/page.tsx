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
      image: 'https://arthursaggioratto.com.br/arthur-saggioratto.jpg',
      worksFor: {
        '@type': 'Organization',
        name: 'Arthur Saggioratto Consultoria & Advisory',
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
  title: 'Arthur Saggioratto | Executivo de E-commerce, Growth & SEO Técnico',
  description:
    'Currículo executivo e consultoria estratégica de Arthur Saggioratto. 15 anos acelerando negócios digitais, arquitetura de e-commerce e crescimento com lucro real no DRE.',
  openGraph: {
    title: 'Arthur Saggioratto | Executivo de E-commerce, Growth & SEO Técnico',
    description:
      'Currículo online executivo, trajetória e consultoria estratégica. 15 anos acelerando operações digitais B2C, B2B e SaaS global.',
    url: 'https://linkedin.com/in/arthurnasa',
    siteName: 'Arthur Saggioratto | Currículo Executivo & Consultoria',
    images: [
      {
        url: '/arthur-saggioratto.jpg',
        width: 600,
        height: 600,
        alt: 'Arthur Saggioratto - Executivo de E-commerce, Growth & SEO Técnico',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Saggioratto | Executivo de E-commerce, Growth & SEO Técnico',
    description:
      '15 anos acelerando operações digitais B2C, B2B e SaaS global com SEO Técnico, CRO e Unit Economics.',
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
