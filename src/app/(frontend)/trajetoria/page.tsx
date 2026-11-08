import type { Metadata } from 'next'
import React from 'react'
import { SpokeArticleLayout } from '@/components/spoke/SpokeArticleLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthur-nasa.github.io/Squammata-PayloadCMS'),
  title: 'Trajetória Profissional e Liderança Executiva: 15 Anos em E-commerce | Arthur Saggioratto',
  description:
    'Linha do tempo completa e histórico de atuação de Arthur Saggioratto em liderança de e-commerce, consultoria estratégica, marketplace e SaaS global.',
  alternates: {
    canonical: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/trajetoria/',
  },
  openGraph: {
    type: 'article',
    title: 'Trajetória Profissional e Liderança Executiva: 15 Anos em E-commerce | Arthur Saggioratto',
    description:
      'Histórico completo de liderança de e-commerce, consultoria de margem e operações digitais de Arthur Saggioratto.',
    url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/trajetoria/',
    images: [
      {
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg',
        width: 1200,
        height: 630,
        alt: 'Arthur Saggioratto: 15 Anos em E-commerce e Operações Digitais',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trajetória Profissional e Liderança Executiva: 15 Anos em E-commerce | Arthur Saggioratto',
    description:
      'Histórico completo de liderança de e-commerce, consultoria de margem e operações digitais de Arthur Saggioratto.',
    images: ['https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg'],
  },
}

const spokeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/trajetoria/#profile',
      isPartOf: {
        '@type': 'WebPage',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/trajetoria/',
      },
      headline: 'Trajetória Profissional e Liderança Executiva: 15 Anos em E-commerce',
      description:
        'Linha do tempo completa e histórico de atuação de Arthur Saggioratto em liderança de e-commerce e consultoria de margem.',
      inLanguage: 'pt-BR',
      mainEntityOfPage: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/trajetoria/',
      author: {
        '@type': 'Person',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#person',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/trajetoria/#breadcrumb',
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
          name: 'Trajetória Profissional',
          item: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/trajetoria/',
        },
      ],
    },
  ],
}

export default function TrajetoriaPage() {
  const metrics = [
    {
      value: '15 Anos',
      label: 'Experiência Prática',
      detail: 'Trajetória contínua em comércio eletrônico, marketing técnico e liderança de operações digitais.',
    },
    {
      value: '2 Modelos',
      label: 'Atuação Flexível',
      detail: 'Equilíbrio entre consultoria estratégica para destrave de gargalos e dedicação executiva direta.',
    },
    {
      value: '5 Regiões',
      label: 'Presença Regional',
      detail: 'Atendimento presencial no polo de Campinas, Piracicaba, Americana, Santa Bárbara d\'Oeste e São Paulo.',
    },
  ]

  const tags = [
    'Carreira Executiva',
    'Consultoria de E-commerce',
    'Liderança de Operações',
    'Shopify Plus & Omnik',
    'Technical SEO',
    'SaaS Global',
  ]

  const placeholderArtifacts = [
    {
      title: 'Matriz de Habilidades e Competências por Ciclo Operacional',
      description:
        'Mapeamento detalhado das competências técnicas, plataformas dominadas e marcos de governança em cada fase da carreira.',
      statusBadge: 'Documento Técnico',
    },
    {
      title: 'Histórico de Liderança e Formação de Equipes',
      description:
        'Metodologia de estruturação de times internos de e-commerce, transição de agências externas e capacitação operacional.',
      statusBadge: 'Guia de Gestão',
    },
  ]

  return (
    <SpokeArticleLayout
      categoryBadge="TRAJETÓRIA PROFISSIONAL &amp; EXPERIÊNCIA"
      title="Trajetória Profissional: 15 Anos Construindo, Otimizando e Liderando Operações Digitais"
      lead="Uma visão detalhada das empresas onde atuei, dos desafios superados em cada fase e dos resultados financeiros construídos ao longo de uma década e meia de prática real no comércio eletrônico."
      metaDate="Novembro 2026"
      readingTime="4 min"
      answerBlock="Ao longo de 15 anos no e-commerce, construí uma trajetória marcada pela união entre estratégia executiva e execução técnica. Atuei na liderança de lojas virtuais, marketplaces complexos e plataformas de software global, combinando ciclos de dedicação executiva como Head e Diretor com intervenções consultivas práticas focadas em rentabilidade, integração de sistemas e proteção do caixa."
      metrics={metrics}
      tags={tags}
      breadcrumb={{
        parentLabel: 'Início',
        parentUrl: '/Squammata-PayloadCMS/',
        currentLabel: 'Trajetória Profissional',
      }}
      canonicalUrl="https://arthur-nasa.github.io/Squammata-PayloadCMS/trajetoria/"
      jsonLd={spokeJsonLd}
      placeholderArtifacts={placeholderArtifacts}
    >
      <h2>Marcos Profissionais e Organizações</h2>

      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem' }}>
          Squammata Consultoria (2024 a Presente)
        </h3>
        <p style={{ color: '#c5a880', fontSize: '0.9rem', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
          Fundador &amp; Consultor Principal • Advisory Estratégico &amp; PJ
        </p>
        <p>
          Estrutura formal pela qual presto consultoria executiva para médias e grandes empresas de comércio eletrônico. Minha atuação foca no diagnóstico de gargalos operacionais que travam as vendas, na arquitetura de plataformas de alta complexidade (Shopify Plus, VTEX, Magento) e na revisão rigorosa da governança de margem de contribuição (POAS) no DRE gerencial.
        </p>
        <p>
          Os projetos combinam visitas presenciais para alinhamento estratégico com diretorias e sócios no interior paulista e em São Paulo, acompanhados de rotinas estruturadas de execução com os times internos.
        </p>
        <p>
          <a
            href="https://empresas.serasaexperian.com.br/consulta-gratis/31384814-ARTHUR-SAGGIORATTO-NETO-ME-31384814000109"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#D4AF37', textDecoration: 'underline' }}
          >
            Consulta Cadastral Oficial da Empresa (CNPJ: 31.384.814/0001-09) ↗
          </a>
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem' }}>
          Rua do Café (2024 a 2026)
        </h3>
        <p style={{ color: '#c5a880', fontSize: '0.9rem', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
          Head of Marketing &amp; E-commerce • Dedicação Executiva
        </p>
        <p>
          Liderança operacional e técnica do marketplace em Shopify Plus integrado ao Seller Center Omnik. Estruturei a operação para conectar mais de 100 lojistas, marcas e produtores rurais de cafés especiais de diferentes regiões do país.
        </p>
        <p>
          Desenvolvi a automação de split payment no checkout, a integração de catálogo em tempo real com ERPs (Bling e Tiny) e a gestão de anúncios calibrada pela margem real no caixa, alcançando uma expansão composta de <strong>+66% ao mês (MoM) em GMV</strong>.
        </p>
        <p>
          <a
            href="/Squammata-PayloadCMS/casos/marketplace-specialty-coffee/"
            style={{ color: '#D4AF37', textDecoration: 'underline' }}
          >
            Acessar Estudo de Caso Completo da Rua do Café ↗
          </a>
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem' }}>
          Sheetgo (2024)
        </h3>
        <p style={{ color: '#c5a880', fontSize: '0.9rem', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
          Technical SEO &amp; Growth Lead • Operação Global em Língua Inglesa
        </p>
        <p>
          Atuação direta com o time internacional de produto em plataforma de software como serviço (SaaS) voltada à automação de planilhas e fluxos de dados corporativos.
        </p>
        <p>
          Conduzi auditorias técnicas de Core Web Vitals, reestruturei o ecossistema de conteúdo em tópicos semânticos de alta relevância internacional e executei testes práticos na jornada de onboarding, gerando um aumento de <strong>+20% no tempo de permanência</strong> dos novos usuários corporativos.
        </p>
        <p>
          <a
            href="/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/"
            style={{ color: '#D4AF37', textDecoration: 'underline' }}
          >
            Acessar Estudo de Caso Completo da Sheetgo ↗
          </a>
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem' }}>
          Máquinas &amp; Café (2014 a 2024 • 10 Anos)
        </h3>
        <p style={{ color: '#c5a880', fontSize: '0.9rem', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
          Diretor Operacional &amp; E-commerce • Gestão Integral e Liderança de Equipes
        </p>
        <p>
          Uma década completa à frente da operação de comércio eletrônico, pós-venda, catálogo e expedição na Máquinas &amp; Café. Implementei a arquitetura em Magento e a conexão ao Bling ERP para suportar equipamentos de alto valor agregado e suprimentos.
        </p>
        <p>
          Conduzi a empresa a uma média de <strong>+20% de crescimento ao ano</strong> por 10 anos consecutivos, estruturando uma autoridade orgânica em SEO que garantiu <strong>45% das vendas da Black Friday</strong> sem investimento em mídia paga.
        </p>
        <p>
          <a
            href="/Squammata-PayloadCMS/casos/seo-catalogo-maquinas-cafe/"
            style={{ color: '#D4AF37', textDecoration: 'underline' }}
          >
            Acessar Estudo de Caso Completo da Máquinas &amp; Café ↗
          </a>
        </p>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#F1F5F9', marginBottom: '0.5rem' }}>
          Cope Calçados (2020 a 2023)
        </h3>
        <p style={{ color: '#c5a880', fontSize: '0.9rem', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
          Consultor de E-commerce &amp; Mídia • Intervenção Consultiva
        </p>
        <p>
          Consultoria especializada para reestruturação das campanhas de mídia de performance (Google Shopping e Google Ads), reorganizando os grupos de produtos para priorizar itens de melhor giro e margem de contribuição saudável.
        </p>
      </div>

      <h2>Base Acadêmica e Formação Contínua</h2>
      <p>
        Minha prática de negócios é fundamentada por uma dupla perspectiva acadêmica: a compreensão de mercados e gestão comercial aliada ao rigor crítico das Ciências Sociais.
      </p>
      <ul>
        <li>
          <strong>Universidade Estadual de Campinas (UNICAMP):</strong> Bacharelado em Ciências Sociais com foco em Sociologia (previsão de conclusão em 2027). A formação proporciona instrumental analítico para investigar comportamento do consumidor, dinâmicas de confiança digital e a lógica das plataformas de tecnologia.
        </li>
        <li>
          <strong>Faculdade de Administração e Artes de Limeira (FAAL):</strong> Bacharelado em Marketing e Gestão de Vendas, concluído em 2015. Base sólida em finanças empresariais, canais de distribuição e psicologia de consumo.
        </li>
      </ul>
    </SpokeArticleLayout>
  )
}
