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
      categoryBadge="ESTUDO DE CASO • SEO DE CATÁLOGO &amp; BLACK FRIDAY"
      title="SEO de Catálogo e Vendas na Black Friday: 45% do Faturamento Orgânico e 10 Anos de Crescimento Contínuo"
      lead="Como a organização técnica do catálogo e a produção de conteúdos especializados geraram 45% do faturamento da Black Friday via busca orgânica no Google, sustentando uma década de crescimento com lucro real."
      answerBlock="A estruturação do catálogo técnico e dos conteúdos da Máquinas & Café permitiu que 45% de todo o faturamento da Black Friday viesse de busca orgânica gratuita no Google. A presença nas primeiras posições de busca protegeu o caixa da empresa contra a disparada no preço dos anúncios pagos, viabilizando um crescimento médio de 20% ao ano ao longo de 10 anos consecutivos."
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
      <h2>O Cenário: Equipamentos de Alto Valor e Decisões Técnicas de Compra</h2>
      <p>
        A Máquinas &amp; Café consolidou-se como referência pioneira na venda de máquinas de espresso profissionais e residenciais, peças de reposição e assistência técnica especializada. Com produtos de tíquete médio elevado (variando de R$ 2.500 a mais de R$ 35.000 por unidade), o cliente precisava de máxima confiança e informações técnicas precisas antes de decidir a compra.
      </p>

      <h2>O Desafio: Anúncios Cada Vez Mais Caros no Período Mais Concorrido do Ano</h2>
      <p>
        Nos meses de maior movimento, especialmente durante a Black Friday, a disputa acirrada por anúncios no Google Shopping encarecia os cliques a ponto de zerar o lucro de produtos caros. Depender exclusivamente de anúncios pagos colocava a margem da empresa em risco constante.
      </p>
      <p>
        Ao mesmo tempo, a loja contava com centenas de variações de voltagem, caldeiras e modelos, gerando páginas duplicadas e dificultando o ranqueamento das categorias mais importantes no Google.
      </p>

      <h2>A Solução: Conteúdo Especializado, Catálogo Organizado e Venda Consultiva</h2>
      <p>
        Como Head de E-commerce e Performance, reorganizei toda a estrutura de categorias e filtros na plataforma Magento, sincronizando dados e estoque diretamente com o Bling ERP. Aplicamos regras claras de organização para que apenas as páginas relevantes fossem indexadas pelos mecanismos de busca.
      </p>
      <p>
        Criamos também guias aprofundados de compra, comparativos entre modelos e tutoriais de manutenção com marcações técnicas (Schema.org). Para compras corporativas ou de máquinas de maior valor, estruturamos um canal direto de consultoria no WhatsApp, transformando visitantes interessados em vendas fechadas com excelente margem de lucro.
      </p>
    </SpokeArticleLayout>
  )
}
