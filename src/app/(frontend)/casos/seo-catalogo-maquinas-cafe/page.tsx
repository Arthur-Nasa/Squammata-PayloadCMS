import type { Metadata } from 'next'
import React from 'react'
import { SpokeArticleLayout } from '@/components/spoke/SpokeArticleLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthur-nasa.github.io/Squammata-PayloadCMS'),
  title: 'Taxonomia Facetada e SEO Técnico de Catálogo: Estudo de Caso Máquinas & Café',
  description:
    'Análise longitudinal de 10 anos de crescimento contínuo (+20% YoY) e sustentação de 45% da receita da Black Friday via busca orgânica sem custo de clique.',
  alternates: {
    canonical: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/',
  },
  openGraph: {
    type: 'article',
    title: 'Taxonomia Facetada e SEO Técnico de Catálogo: Estudo de Caso Máquinas & Café',
    description:
      'Análise longitudinal de 10 anos de crescimento contínuo (+20% YoY) e sustentação de 45% da receita da Black Friday via busca orgânica sem custo de clique.',
    url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/',
    images: [
      {
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg',
        width: 1200,
        height: 630,
        alt: 'Taxonomia Facetada e SEO Técnico de Catálogo: Estudo de Caso Máquinas & Café',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxonomia Facetada e SEO Técnico de Catálogo: Estudo de Caso Máquinas & Café',
    description:
      'Análise longitudinal de 10 anos de crescimento contínuo (+20% YoY) e sustentação de 45% da receita da Black Friday via busca orgânica sem custo de clique.',
    images: ['https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg'],
  },
}

const spokeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TechArticle',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/#article',
      isPartOf: {
        '@type': 'WebPage',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/',
      },
      headline:
        'Taxonomia Facetada e SEO Técnico de Catálogo: Estudo de Caso Máquinas & Café',
      description:
        'Análise longitudinal de 10 anos de crescimento contínuo (+20% YoY) e sustentação de 45% da receita da Black Friday via busca orgânica sem custo de clique.',
      inLanguage: 'pt-BR',
      mainEntityOfPage: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/',
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
          name: 'Search Engine Optimization',
          sameAs: 'https://www.wikidata.org/wiki/Q52271',
        },
        {
          '@type': 'Thing',
          name: 'E-commerce',
          sameAs: 'https://www.wikidata.org/wiki/Q171183',
        },
        {
          '@type': 'Thing',
          name: 'Cataloging',
          sameAs: 'https://www.wikidata.org/wiki/Q797446',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/#breadcrumb',
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
          name: 'Máquinas & Café',
          item: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/',
        },
      ],
    },
  ],
}

export default function MaquinasCafeCasePage() {
  return (
    <SpokeArticleLayout
      categoryBadge="ESTUDO DE CASO OPERACIONAL • SEO TÉCNICO & CATÁLOGO B2B/B2C"
      title="Taxonomia Facetada e SEO Técnico de Catálogo: Blindagem de Margem na Black Friday e +20% YoY em 10 Anos"
      lead="Estudo longitudinal de 10 anos de crescimento sustentável (+20% YoY) em e-commerce técnico de alto tíquete, demonstrando como a taxonomia facetada e a autoridade orgânica blindaram o caixa contra a inflação de leilões pagos na Black Friday."
      answerBlock="A implementação de taxonomia facetada e marcação estruturada de dados no catálogo da Máquinas & Café por Arthur Saggioratto garantiu a sustentação de 45% da receita total durante a Black Friday exclusivamente via busca orgânica. O posicionamento semântico de páginas de categoria e produto blindou a margem bruta da operação contra picos de custo por clique em mídia paga."
      placeholderArtifacts={[
        {
          title: 'Auditoria de Taxonomia Facetada & Canibalização de URLs',
          description:
            'Matriz de indexação de parâmetros de voltagem, grupos e caldeiras, com regras canônicas para evitar dispersão de autoridade orgânica.',
          statusBadge: 'Auditoria Técnica',
        },
        {
          title: 'Série Histórica Longitudinal de Busca Orgânica (2014 a 2024)',
          description:
            'Evolução de impressões, cliques e volume de transações de alto tíquete originadas na busca orgânica institucional sem custo por clique.',
          statusBadge: 'Série Histórica',
        },
        {
          title: 'Calculadora de Blindagem de Margem na Black Friday',
          description:
            'Modelo gerencial comprovando a preservação da margem de contribuição ao deslocar o mix de vendas do leilão pago para o catálogo orgânico.',
          statusBadge: 'Modelo Gerencial',
        },
      ]}
      metrics={[
        {
          value: '10 Anos',
          label: 'Expansão Linear',
          detail: 'Crescimento auditado de +20% ao ano sustentado entre 2014 e 2024 sem endividamento bancário.',
        },
        {
          value: '45% BF',
          label: 'Receita Orgânica',
          detail: 'Faturamento de pico durante a Black Friday originado em tráfego gratuito de alta intenção comercial.',
        },
        {
          value: '+30%',
          label: 'Taxa de Conversão',
          detail: 'Elevação na eficiência de fechamento unindo catálogo semântico a canal consultivo via WhatsApp.',
        },
      ]}
      tags={[
        'Technical SEO',
        'Catalog Architecture',
        'Faceted Navigation',
        'Black Friday Margin Shield',
        'Bling ERP',
        'High Ticket Conversion',
      ]}
      breadcrumb={{
        parentLabel: 'Casos Operacionais',
        parentUrl: '/arthur#casos',
        currentLabel: 'Máquinas & Café',
      }}
      canonicalUrl="https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/"
      jsonLd={spokeJsonLd}
    >
      <h2>Contexto Operacional e Desafio de Bens Duráveis</h2>
      <p>
        A Máquinas &amp; Café consolidou-se como referência pioneira no varejo e atacado B2B de máquinas de espresso profissionais e residenciais, suprimentos e assistência técnica especializada. Operando com tíquetes médios elevados (de R$ 2.500 a mais de R$ 35.000 por unidade), o modelo de negócio demandava máxima confiança e conteúdo técnico aprofundado antes de cada tomada de decisão de compra.
      </p>

      <h2>Diagnóstico de Gargalos: A Armadilha do CPC na Black Friday</h2>
      <p>
        Durante os meses de pico sazonal (outubro e novembro), a concorrência agressiva de grandes varejistas generalistas inflacionava os custos por clique (CPC) em campanhas de Google Shopping. Manter a rentabilidade da operação tornou-se incompatível com a dependência exclusiva de mídia leiloada, sob risco de corrosão integral da margem de contribuição.
      </p>
      <p>
        No âmbito técnico, o catálogo apresentava centenas de variações de voltagem, grupos térmicos e capacidades de caldeira, gerando risco recorrente de canibalização semântica e indexação desordenada de URLs facetadas.
      </p>

      <h2>Intervenção Técnica por Arthur Saggioratto</h2>
      <p>
        Na função de Head de E-commerce e Performance, Arthur Saggioratto reestruturou integralmente a taxonomia do catálogo na plataforma de comércio eletrônico e sincronizou atributos técnicos via ERP Bling. Foi desenhada uma malha semântica de canonicalização estrita, permitindo que apenas combinações de alta intenção comercial fossem indexadas pelos buscadores.
      </p>
      <p>
        A estratégia contemplou a produção de dossiês técnicos detalhados e guias comparativos de equipamentos, enriquecidos com marcação de dados Schema.org para especificações técnicas de produto. Em vendas de alta complexidade, implantou-se atendimento consultivo imediato via WhatsApp, convertendo o tráfego técnico em pedidos fechados com margem preservada.
      </p>
    </SpokeArticleLayout>
  )
}
