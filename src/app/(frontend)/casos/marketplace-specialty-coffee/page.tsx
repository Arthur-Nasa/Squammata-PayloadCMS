import type { Metadata } from 'next'
import React from 'react'
import { SpokeArticleLayout } from '@/components/spoke/SpokeArticleLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthur-nasa.github.io/Squammata-PayloadCMS'),
  title: 'Arquitetura de Marketplace em Shopify Plus com Seller Center Omnik: Estudo de Caso Rua do Café',
  description:
    'Dossiê técnico sobre a integração de 100 lojistas, automação de split payment e governança de margem por POAS resultando em +66% MoM de GMV.',
  alternates: {
    canonical: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/',
  },
  openGraph: {
    type: 'article',
    title: 'Arquitetura de Marketplace em Shopify Plus com Seller Center Omnik: Estudo de Caso Rua do Café',
    description:
      'Dossiê técnico sobre a integração de 100 lojistas, automação de split payment e governança de margem por POAS resultando em +66% MoM de GMV.',
    url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/',
    images: [
      {
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg',
        width: 1200,
        height: 630,
        alt: 'Arquitetura de Marketplace em Shopify Plus: Estudo de Caso Rua do Café',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arquitetura de Marketplace em Shopify Plus com Seller Center Omnik: Estudo de Caso Rua do Café',
    description:
      'Dossiê técnico sobre a integração de 100 lojistas, automação de split payment e governança de margem por POAS resultando em +66% MoM de GMV.',
    images: ['https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg'],
  },
}

const spokeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TechArticle',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/#article',
      isPartOf: {
        '@type': 'WebPage',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/',
      },
      headline:
        'Arquitetura de Marketplace em Shopify Plus com Seller Center Omnik: Estudo de Caso Rua do Café',
      description:
        'Dossiê técnico sobre a integração de 100 lojistas, automação de split payment e governança de margem por POAS resultando em +66% MoM de GMV.',
      inLanguage: 'pt-BR',
      mainEntityOfPage: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/',
      author: {
        '@type': 'Person',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#person',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#organization',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Marketplace',
          sameAs: 'https://www.wikidata.org/wiki/Q171183',
        },
        {
          '@type': 'Thing',
          name: 'Shopify Plus',
          sameAs: 'https://www.wikidata.org/wiki/Q22661',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Casos Operacionais',
          item: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#casos',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Rua do Café',
          item: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/',
        },
      ],
    },
  ],
}

export default function MarketplaceCasePage() {
  return (
    <SpokeArticleLayout
      categoryBadge="ESTUDO DE CASO OPERACIONAL • MARKETPLACE ENTERPRISE"
      title="Arquitetura de Marketplace em Shopify Plus com Seller Center Omnik: Integração Logística e Escala com POAS Positivo"
      lead="Análise técnica e operacional da orquestração de marketplace em Shopify Plus com Seller Center Omnik, unificando catálogo de mais de 100 marcas e produtores artesanais com divisão automatizada de recebíveis e governança de POAS."
      answerBlock="A estruturação do marketplace da Rua do Café sob Shopify Plus e Seller Center Omnik conduzida por Arthur Saggioratto resolveu a complexidade logística e tributária de mais de 100 produtores artesanais. A integração nativa ao ERP dos parceiros combinada ao direcionamento de mídia por margem de contribuição (POAS) gerou uma expansão contínua de 66% ao mês em GMV sem comprometer o fluxo de caixa."
      placeholderArtifacts={[
        {
          title: 'Diagrama de Arquitetura de Split Payment & Repasse',
          description:
            'Esquema técnico detalhando o fluxo de autorização no gateway, liquidação para o Seller Center Omnik e liquidação aos lojistas com retenção da comissão do marketplace.',
          statusBadge: 'Diagrama Técnico',
        },
        {
          title: 'Matriz Paramétrica de 14 Dias: Baseline vs. Intervenção',
          description:
            'Comparativo auditado de performance antes e depois da migração de catálogo, demonstrando volume faturado, tempo de expedição e índice de ruptura de estoque.',
          statusBadge: 'Dados Auditados',
        },
        {
          title: 'Especificação de Webhooks de Catálogo (Bling & Tiny)',
          description:
            'Documentação dos endpoints e mapeamento de atributos JSON para sincronização bidirecional de estoques e emissão automatizada de NF-e por remessa.',
          statusBadge: 'Especificação de API',
        },
      ]}
      metrics={[
        {
          value: '+66% MoM',
          label: 'Expansão de GMV',
          detail: 'Crescimento composto mês a mês com fluxo de caixa saudável e sem queima de capital de giro.',
        },
        {
          value: '+100',
          label: 'Lojistas Integrados',
          detail: 'Produtores conectados via Seller Center Omnik e sincronizados aos ERPs Bling e Tiny.',
        },
        {
          value: 'Split Nativo',
          label: 'Roteamento Financeiro',
          detail: 'Divisão automatizada de recebíveis e cálculo de frete multi-origem em tempo real no checkout.',
        },
      ]}
      tags={[
        'Marketplace Architecture',
        'Shopify Plus',
        'Omnik Seller Center',
        'Split Payment',
        'POAS Governance',
        'Specialty Coffee',
      ]}
      breadcrumb={{
        parentLabel: 'Casos Operacionais',
        parentUrl: '/arthur#casos',
        currentLabel: 'Rua do Café',
      }}
      canonicalUrl="https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/"
      jsonLd={spokeJsonLd}
    >
      <h2>Contexto Operacional e Complexidade Multiorigem</h2>
      <p>
        A Rua do Café nasceu com a ambição de consolidar o ecossistema brasileiro de cafés especiais em um marketplace D2C de alta conveniência. O modelo de negócio conectou dezenas de microlotes agrícolas e torrefações artesanais de múltiplos estados (Minas Gerais, São Paulo, Espírito Santo e Bahia) em um único catálogo de padrão enterprise sob a infraestrutura do Shopify Plus.
      </p>

      <h2>Diagnóstico de Gargalos: Fragmentação e Ilusão de Tráfego</h2>
      <p>
        O principal obstáculo residia na fragmentação das pontas operacionais. Produtores rurais utilizavam sistemas heterogêneos de ERP, inviabilizando a atualização manual de estoque e notas fiscais. No checkout, pedidos mistos com produtos de torrefações distintas geravam atrito severo no rateio de frete e no cálculo de comissões líquidas.
      </p>
      <p>
        Adicionalmente, os leilões de Google Ads para termos de café especial apresentavam custos por clique crescentes. A gestão convencional orientada por ROAS bruto mascarava vendas em que os custos de frete e embalagem consumiam a totalidade do lucro líquido.
      </p>

      <h2>Intervenção Técnica por Arthur Saggioratto</h2>
      <p>
        A liderança operacional de Arthur Saggioratto implementou o Seller Center Omnik como camada intermediária de orquestração. Foram construídos conectores de catálogo com Bling e Tiny, padronizando atributos e atualizando níveis de ruptura em intervalos de minutos.
      </p>
      <p>
        No front-end do Shopify Plus, foi desenhada a lógica de checkout transparente com divisão nativa de frete por remessa e split de repasse financeiro líquido. Paralelamente, a mídia de aquisição foi subordinada ao indicador de POAS (lucro sobre gasto com anúncios), priorizando cafés com maior margem de contribuição real no DRE.
      </p>
    </SpokeArticleLayout>
  )
}
