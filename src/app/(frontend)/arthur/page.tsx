import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioView } from './ArthurPortfolioView'
import { getCachedPortfolioSettings } from '@/utilities/getGlobals'

export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://linkedin.com/in/arthurnasa#person',
      name: 'Arthur Saggioratto',
      alternateName: ['Arthur Saggioratto Neto', 'Arthur Nasa'],
      jobTitle: 'Head of E-commerce, SEO & Growth',
      description:
        'Especialista com 15 anos liderando operações digitais de comércio eletrônico, arquitetura de sistemas, governança de margem de contribuição (DRE/P&L), visibilidade em IA generativa (GEO/AEO) e otimização de conversão (CRO).',
      url: 'https://linkedin.com/in/arthurnasa',
      image: 'https://squammata.com.br/arthur-saggioratto.jpg',
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
        '@id': 'https://squammata.com.br/#organization',
      },
      hasOccupation: {
        '@id': 'https://squammata.com.br/arthur#occupation',
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
    {
      '@type': 'ProfilePage',
      '@id': 'https://squammata.com.br/arthur#webpage',
      url: 'https://squammata.com.br/arthur',
      name: 'Arthur Saggioratto: Head de E-commerce, SEO & Margem DRE',
      description:
        'Portfólio executivo de Arthur Saggioratto. 15 anos liderando operações digitais: Arquitetura de E-commerce, Crescimento Orgânico e Proteção de Margem Operacional.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://squammata.com.br/#website',
        name: 'Squammata',
        url: 'https://squammata.com.br',
      },
      mainEntity: {
        '@id': 'https://linkedin.com/in/arthurnasa#person',
      },
      breadcrumb: {
        '@id': 'https://squammata.com.br/arthur#breadcrumb',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://squammata.com.br/#organization',
      name: 'Squammata Consultoria & Operações Estratégicas',
      taxID: '31.384.814/0001-09',
      url: 'https://squammata.com.br',
      founder: {
        '@id': 'https://linkedin.com/in/arthurnasa#person',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: "Santa Bárbara d'Oeste",
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    {
      '@type': 'Occupation',
      '@id': 'https://squammata.com.br/arthur#occupation',
      name: 'Head of E-commerce, SEO & Growth',
      occupationalCategory: '11-2021.00',
      description:
        'Liderança de operações digitais, gestão de P&L de e-commerce, engenharia de SEO, otimização de conversão (CRO) e mídia de performance subordinada a Unit Economics.',
      skills:
        'SEO Técnico, GEO (Generative Engine Optimization), CRO, Shopify Plus, DRE / P&L, POAS, Magento, VTEX, Retail Media',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://squammata.com.br/arthur#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://squammata.com.br/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfólio Arthur Saggioratto',
          item: 'https://squammata.com.br/arthur',
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://squammata.com.br/arthur#cases',
      name: 'Estudos de Caso e Trajetória Operacional Auditável',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Rua do Café: Escala de GMV (+66% MoM) e Marketplace Shopify Plus com Omnik',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sheetgo: Expansão de SEO Internacional e CRO (+20% em Retenção de Sessão)',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Máquinas & Café: 10 Anos de Crescimento Linear (+20% YoY) e 45% da Black Friday via Busca Orgânica',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Squammata Consultoria: Auditorias de DRE, POAS e Retail Media para Varejo e Indústria',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://squammata.com.br/arthur#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O que significa subordinar a operação de e-commerce ao DRE e à margem de contribuição?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Significa avaliar o sucesso das ações pelo lucro que realmente permanece no caixa da empresa, e não por faturamento bruto ou métricas isoladas de painel como ROAS. Analisamos custos de mercadoria vendida (CMV), taxas de gateway, impostos e frete para garantir que cada real investido em aquisição gere margem líquida positiva (POAS).',
          },
        },
        {
          '@type': 'Question',
          name: 'Como funciona a otimização para motores de busca com Inteligência Artificial (GEO e AEO)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trata-se da modelagem semântica de entidades e tópicos com dados estruturados Schema.org em JSON-LD e conteúdo técnico de alta densidade (E-E-A-T). Essa arquitetura permite que assistentes como Google AI Overviews, Perplexity e ChatGPT citem e recomendem a marca como autoridade confiável no segmento.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais são os formatos de contratação disponíveis para trabalhar com Arthur Saggioratto?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A atuação ocorre em três modelos: Liderança Executiva (Head de E-commerce, Growth ou SEO/CRO em regime fracionado ou integral), Consultoria Estratégica Continuada pela Squammata com acompanhamento mensal de metas e governança de margem, ou Auditorias Técnicas Fechadas (sprints de 3 a 4 semanas para diagnóstico profundo de SEO, CRO e infraestrutura).',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual é a vantagem da formação em Sociologia pela UNICAMP para a gestão de tecnologia e e-commerce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A formação em Sociologia fornece rigor para compreender plataformas, algoritmos e funis como sistemas sociotécnicos. Em vez de perseguir atalhos passageiros de crescimento que queimam caixa, a estratégia prioriza a construção de ecossistemas sustentáveis de confiança, soberania de canais orgânicos e fidelização genuína do consumidor.',
          },
        },
      ],
    },
  ],
}

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
