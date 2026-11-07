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
      categoryBadge="ESTUDO DE CASO • MARKETPLACE &amp; DIVISÃO DE PAGAMENTOS"
      title="Marketplace em Shopify Plus com Seller Center Omnik: Integração de 100 Lojistas e Crescimento com Lucro Real"
      lead="Como conectamos mais de 100 marcas e produtores rurais de cafés especiais em um único marketplace, automatizando o repasse financeiro e garantindo crescimento sustentável de vendas com foco na margem de cada produto."
      answerBlock="A estruturação do marketplace da Rua do Café em Shopify Plus com Seller Center Omnik resolveu o desafio de conectar mais de 100 produtores artesanais e marcas parceiras. Com integração direta aos ERPs (Bling e Tiny) e campanhas orientadas pela margem real de cada item (POAS), a operação atingiu um crescimento médio de 66% ao mês em volume transacionado (GMV), preservando a rentabilidade e o caixa do negócio."
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
      <h2>O Cenário: Conectar Produtores de Café do Brasil Inteiro em Uma Única Loja</h2>
      <p>
        A Rua do Café nasceu com a proposta de reunir a riqueza dos cafés especiais brasileiros em um marketplace moderno e prático. O modelo de negócio reuniu produtores de microlotes agrícolas e torrefações artesanais de estados como Minas Gerais, São Paulo, Espírito Santo e Bahia, criando um catálogo unificado sob a infraestrutura do Shopify Plus.
      </p>

      <h2>O Desafio: Estoques Descentralizados, Fretes Múltiplos e Anúncios Caros</h2>
      <p>
        O maior desafio estava na rotina operacional de cada parceiro. Cada produtor utilizava seu próprio sistema de gestão, o que tornava inviável atualizar estoques e notas fiscais de forma manual. No carrinho de compras, pedidos que misturavam produtos de diferentes origens geravam dúvidas no frete e dificuldades para calcular os repasses financeiros de cada vendedor.
      </p>
      <p>
        Além disso, os anúncios de café especial no Google estavam ficando cada vez mais concorridos. Olhar apenas para o faturamento bruto escondia pedidos em que custos de frete e embalagem consumiam todo o lucro da venda.
      </p>

      <h2>A Solução: Integração com ERPs, Divisão de Pagamentos e Foco no Lucro Real</h2>
      <p>
        Como líder de operações e e-commerce, estruturei o Seller Center Omnik como ponte entre a loja e os sistemas dos lojistas parceiros. Criamos conectores automáticos com Bling e Tiny, mantendo preços e estoques sincronizados em tempo real.
      </p>
      <p>
        Na experiência de compra da Shopify, desenhamos um checkout claro com cálculo de frete por remessa e divisão automática dos pagamentos para cada parceiro. Em paralelo, direcionamos a verba de anúncios para os produtos de maior margem de lucro (POAS), fazendo o negócio crescer de forma saudável e lucrativa.
      </p>
    </SpokeArticleLayout>
  )
}
