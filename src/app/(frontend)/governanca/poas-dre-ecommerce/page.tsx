import type { Metadata } from 'next'
import React from 'react'
import { SpokeArticleLayout } from '@/components/spoke/SpokeArticleLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthur-nasa.github.io/Squammata-PayloadCMS'),
  title: 'Framework de POAS (Profit on Ad Spend) e Governança de Margem no DRE do E-commerce',
  description:
    'Metodologia proprietária para alocação de mídia de performance orientada ao lucro líquido operacional real, eliminando a ilusão de faturamento do ROAS bruto.',
  alternates: {
    canonical: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/governanca/poas-dre-ecommerce/',
  },
  openGraph: {
    type: 'article',
    title: 'Framework de POAS (Profit on Ad Spend) e Governança de Margem no DRE do E-commerce',
    description:
      'Metodologia proprietária para alocação de mídia de performance orientada ao lucro líquido operacional real, eliminando a ilusão de faturamento do ROAS bruto.',
    url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/governanca/poas-dre-ecommerce/',
    images: [
      {
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg',
        width: 1200,
        height: 630,
        alt: 'Framework de POAS e Governança de Margem: Metodologia Arthur Saggioratto',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Framework de POAS (Profit on Ad Spend) e Governança de Margem no DRE do E-commerce',
    description:
      'Metodologia proprietária para alocação de mídia de performance orientada ao lucro líquido operacional real, eliminando a ilusão de faturamento do ROAS bruto.',
    images: ['https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg'],
  },
}

const spokeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TechArticle',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/governanca/poas-dre-ecommerce/#article',
      isPartOf: {
        '@type': 'WebPage',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/governanca/poas-dre-ecommerce/',
      },
      headline:
        'Framework de POAS (Profit on Ad Spend) e Governança de Margem no DRE do E-commerce',
      description:
        'Metodologia proprietária para alocação de mídia de performance orientada ao lucro líquido operacional real, eliminando a ilusão de faturamento do ROAS bruto.',
      inLanguage: 'pt-BR',
      mainEntityOfPage: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/governanca/poas-dre-ecommerce/',
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
          name: 'Income statement',
          sameAs: 'https://www.wikidata.org/wiki/Q180748',
        },
        {
          '@type': 'Thing',
          name: 'E-commerce',
          sameAs: 'https://www.wikidata.org/wiki/Q171183',
        },
        {
          '@type': 'Thing',
          name: 'Profit margin',
          sameAs: 'https://www.wikidata.org/wiki/Q1685419',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/governanca/poas-dre-ecommerce/#breadcrumb',
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
          name: 'Governança & DRE',
          item: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#matriz',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Framework POAS',
          item: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/governanca/poas-dre-ecommerce/',
        },
      ],
    },
  ],
}

export default function PoasGovernancePage() {
  return (
    <SpokeArticleLayout
      categoryBadge="TESE METODOLÓGICA • UNIT ECONOMICS & CONTROLADORIA DIGITAL"
      title="Framework de POAS (Profit on Ad Spend) e Governança de Margem de Contribuição no DRE do E-commerce"
      lead="Tese metodológica desenvolvida por Arthur Saggioratto estabelecendo a subordinação das decisões de mídia de performance à margem de contribuição líquida no DRE gerencial, expurgando o risco de queima de caixa em leilões inflacionados."
      answerBlock="O framework de POAS (Profit on Ad Spend) desenvolvido por Arthur Saggioratto subordina as decisões de leilão pago em Google e Meta Ads ao lucro líquido por pedido faturado, expurgando a ilusão de receita do ROAS bruto. A integração das regras fiscais e custos de mercadoria diretamente aos relatórios analíticos impede que a escala de vendas comprometa o capital de giro."
      placeholderArtifacts={[
        {
          title: 'Demonstração Algébrica: ROAS de Ilusão vs. Lucro Líquido Real',
          description:
            'Quadro comparativo com fórmulas analíticas demonstrando como campanhas com ROAS 8x podem queimar caixa enquanto campanhas com ROAS 3x geram lucro real.',
          statusBadge: 'Demonstração Matemática',
        },
        {
          title: 'Matriz de Sensibilidade de POAS por Categoria de Produto',
          description:
            'Tabela de parametrização dinâmica de metas de leilão vinculadas à elasticidade de preço, alíquota tributária e custo de frete interestadual.',
          statusBadge: 'Matriz Paramétrica',
        },
        {
          title: 'Planilha Gerencial de Auditoria de Mídia & DRE (Download)',
          description:
            'Template executivo em planilha para importação de dados de mídia e conciliação com CMV e despesas operacionais da operação.',
          statusBadge: 'Artefato em Planilha',
        },
      ]}
      metrics={[
        {
          value: 'Lucro Líquido',
          label: 'Foco no Caixa',
          detail: 'Subordinação integral de leilões ao lucro operacional remanescente e não ao faturamento bruto de fachada.',
        },
        {
          value: '-40%',
          label: 'Vazamento de Mídia',
          detail: 'Corte imediato de investimentos pagos sobre produtos de margem defasada ou frete incompatível.',
        },
        {
          value: '100% DRE',
          label: 'Rigor Contábil',
          detail: 'Dedução exata de custo de mercadoria vendida (CMV), impostos, taxas de gateway e despesas de expedição.',
        },
      ]}
      tags={[
        'POAS Framework',
        'Unit Economics',
        'Contribution Margin',
        'E-commerce Financial Governance',
        'DRE Integration',
        'Performance Ads Profitability',
      ]}
      breadcrumb={{
        parentLabel: 'Governança & DRE',
        parentUrl: '/arthur#matriz',
        currentLabel: 'Framework POAS',
      }}
      canonicalUrl="https://arthur-nasa.github.io/Squammata-PayloadCMS/governanca/poas-dre-ecommerce/"
      jsonLd={spokeJsonLd}
    >
      <h2>A Ilusão do ROAS Bruto e a Destruição Silenciosa de Caixa</h2>
      <p>
        No comércio eletrônico contemporâneo, a métrica de ROAS (Return on Ad Spend) consagrou-se como o principal balizador de agências e gestores de tráfego. Essa métrica, no entanto, carrega uma armadilha matemática crítica: ela mede unicamente a receita bruta faturada sem considerar a composição do custo da mercadoria vendida (CMV), alíquotas de ICMS ou substituição tributária, comissões de gateway de pagamento e custos reais de frete.
      </p>
      <p>
        Em operações que faturam entre R$ 800 mil e R$ 3 milhões ao mês, uma campanha com aparente ROAS de 8x pode facilmente operar em prejuízo líquido se os itens leiloados carregarem margem de contribuição inferior ao custo de aquisição adicionado às despesas operacionais variáveis.
      </p>

      <h2>O Conceito Estrutural do POAS (Profit on Ad Spend)</h2>
      <p>
        O POAS subverte essa lógica ao relacionar o lucro bruto gerado diretamente ao montante investido em mídia paga:
      </p>
      <p>
        <strong>POAS = Lucro Bruto Operacional (Receita Líquida deduzidos CMV, Carga Tributária e Custos Transacionais Variáveis) / Gasto em Mídia Paga</strong>
      </p>
      <p>
        Sob essa formulação, qualquer valor superior a 1,0 indica que o leilão gerou caixa líquido positivo para a empresa. Qualquer valor abaixo de 1,0 revela que a operação está subsidiando a venda com seu capital de giro, independentemente de quão expressivo seja o volume bruto divulgado nos painéis do Google Ads ou Meta Ads.
      </p>

      <h2>Metodologia de Governança Aplicada por Arthur Saggioratto</h2>
      <p>
        A metodologia desenvolvida e aplicada por Arthur Saggioratto conecta as regras de precificação e o cadastro de custos do ERP (Tiny, Bling ou TOTVS) diretamente aos dados de conversão e leilão.
      </p>
      <p>
        Os produtos do catálogo são segmentados em três faixas operacionais rigorosas:
      </p>
      <p>
        1. <strong>Faixa de Escala Agressiva:</strong> Itens com alta margem de contribuição e estoque assegurado, aptos a receberem maior pressão de lance em termos concorridos.
      </p>
      <p>
        2. <strong>Faixa de Equilíbrio:</strong> Produtos com margem moderada, limitados a campanhas de busca com intenção exata de compra para blindar a rentabilidade.
      </p>
      <p>
        3. <strong>Faixa de Exclusão de Tráfego:</strong> Produtos deficitários ou de frete desproporcional, excluídos ativamente dos leilões pagos e direcionados exclusivamente para a tração orgânica (SEO).
      </p>
    </SpokeArticleLayout>
  )
}
