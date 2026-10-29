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
      jobTitle: 'Executivo de E-commerce | Tráfego, SEO & GEO, Tecnologia e Marca',
      description:
        'Executivo de E-commerce e Consultor com 15 anos de atuação estruturada em 4 pilares: Gestão de Tráfego, SEO/GEO e Conteúdo, Implementação e Tecnologia, e Desenvolvimento de Marca e Produto.',
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
        'E-commerce Strategy & Management',
        'Gestão de Tráfego e Mídia de Performance (Google Ads, Meta Ads)',
        'SEO Técnico, GEO (Generative Engine Optimization) e Estratégia de Conteúdo',
        'Implementação e Tecnologia de E-commerce (Shopify Plus, VTEX, Next.js)',
        'Desenvolvimento de Marca e Produto (Branding, Catálogo e Private Label)',
        'Conversion Rate Optimization (CRO)',
        'Unit Economics, POAS e Otimização de Margem',
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
  title: {
    absolute: 'Arthur Saggioratto | E-commerce: Tráfego, SEO & GEO, Tecnologia e Marca',
  },
  description:
    'Portfólio executivo e consultoria de Arthur Saggioratto. 15 anos acelerando e-commerces em 4 pilares: Gestão de Tráfego, SEO/GEO & Conteúdo, Implementação & Tecnologia e Desenvolvimento de Marca & Produto.',
  openGraph: {
    title: 'Arthur Saggioratto | E-commerce: Tráfego, SEO & GEO, Tecnologia e Marca',
    description:
      'Portfólio executivo e consultoria de e-commerce no Brasil. Atuação integrada em Tráfego Pago, SEO/GEO, Tecnologia e Desenvolvimento de Marca e Produto.',
    url: 'https://linkedin.com/in/arthurnasa',
    siteName: 'Arthur Saggioratto | Portfólio Executivo & Consultoria',
    images: [
      {
        url: '/arthur-saggioratto.jpg',
        width: 600,
        height: 600,
        alt: 'Arthur Saggioratto - Consultor e Head de E-commerce',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Saggioratto | E-commerce: Tráfego, SEO & GEO, Tecnologia e Marca',
    description:
      '15 anos acelerando e-commerces em 4 pilares: Tráfego, SEO & GEO, Tecnologia e Marca.',
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
