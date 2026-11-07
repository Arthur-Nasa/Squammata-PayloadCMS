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
      categoryBadge="METODOLOGIA PRÁTICA • GESTÃO DE MARGEM &amp; LUCRO REAL"
      title="Gestão de Margem e POAS no E-commerce: Como Parar de Queimar Caixa e Focar no Lucro Real"
      lead="Como alinhar as campanhas de anúncios ao lucro real da sua empresa, evitando a armadilha de comemorar faturamento alto enquanto a conta bancária não cresce."
      answerBlock="O método de POAS (Profit on Ad Spend) substitui o foco em faturamento bruto pelo foco no lucro líquido real de cada pedido. Ao cruzar custos de produto, frete, impostos e taxas de cartão com os dados de anúncios no Google e Meta Ads, a empresa descobre exatamente quais produtos colocam dinheiro no caixa e corta desperdícios que corroem o lucro."
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
      <h2>A Ilusão do ROAS Alto: Por Que Faturamento Nem Sempre É Lucro</h2>
      <p>
        No comércio eletrônico, o ROAS (Return on Ad Spend) é uma das métricas mais comemoradas por agências e gestores de tráfego. No entanto, ele esconde um perigo silencioso: mede apenas a receita bruta das vendas, sem considerar quanto custou o produto, quanto foi pago de impostos, qual foi o frete e quanto o meio de pagamento cobrou.
      </p>
      <p>
        Em lojas que faturam entre R$ 800 mil e R$ 3 milhões por mês, é comum ver campanhas com ROAS aparentemente excelente de 8x que, na realidade, dão prejuízo líquido. Isso acontece porque a margem de contribuição daqueles produtos não é suficiente para pagar o anúncio e as despesas operacionais.
      </p>

      <h2>O Que É o POAS e Como Ele Protege o Seu Negócio</h2>
      <p>
        O POAS (Profit on Ad Spend) resolve esse problema ao relacionar diretamente o lucro líquido de cada venda ao valor gasto com anúncios:
      </p>
      <p>
        <strong>POAS = Lucro Líquido Real (Receita deduzidos custos do produto, impostos, taxas e frete) / Gasto em Anúncios</strong>
      </p>
      <p>
        Com essa conta em mãos, qualquer resultado acima de 1,0 significa que a campanha colocou dinheiro de verdade no caixa da empresa. Resultados abaixo de 1,0 alertam imediatamente que a operação está pagando para vender, permitindo pausar campanhas e recalibrar orçamentos antes de prejudicar a saúde financeira do negócio.
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
