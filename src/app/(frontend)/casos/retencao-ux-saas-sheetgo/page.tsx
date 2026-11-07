import type { Metadata } from 'next'
import React from 'react'
import { SpokeArticleLayout } from '@/components/spoke/SpokeArticleLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthur-nasa.github.io/Squammata-PayloadCMS'),
  title: 'Retenção e Otimização de Jornada em SaaS B2B Global: Estudo de Caso Sheetgo',
  description:
    'Redesenho da experiência do usuário e telemetria comportamental no GA4 para a plataforma global Sheetgo, elevando o tempo de sessão em +20% e reduzindo atrito de ativação.',
  alternates: {
    canonical: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/',
  },
  openGraph: {
    type: 'article',
    title: 'Retenção e Otimização de Jornada em SaaS B2B Global: Estudo de Caso Sheetgo',
    description:
      'Redesenho da experiência do usuário e telemetria comportamental no GA4 para a plataforma global Sheetgo, elevando o tempo de sessão em +20% e reduzindo atrito de ativação.',
    url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/',
    images: [
      {
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg',
        width: 1200,
        height: 630,
        alt: 'Retenção e Otimização em SaaS B2B Global: Estudo de Caso Sheetgo',
      },
    ],
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retenção e Otimização de Jornada em SaaS B2B Global: Estudo de Caso Sheetgo',
    description:
      'Redesenho da experiência do usuário e telemetria comportamental no GA4 para a plataforma global Sheetgo, elevando o tempo de sessão em +20% e reduzindo atrito de ativação.',
    images: ['https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.jpg'],
  },
}

const spokeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TechArticle',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/#article',
      isPartOf: {
        '@type': 'WebPage',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/',
      },
      headline:
        'Retenção e Otimização de Jornada em SaaS B2B Global: Estudo de Caso Sheetgo',
      description:
        'Redesenho da experiência do usuário e telemetria comportamental no GA4 para a plataforma global Sheetgo, elevando o tempo de sessão em +20% e reduzindo atrito de ativação.',
      inLanguage: 'pt-BR',
      mainEntityOfPage: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/',
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
          name: 'Software as a service',
          sameAs: 'https://www.wikidata.org/wiki/Q865582',
        },
        {
          '@type': 'Thing',
          name: 'Conversion Rate Optimization',
          sameAs: 'https://www.wikidata.org/wiki/Q171183',
        },
        {
          '@type': 'Thing',
          name: 'Google Analytics',
          sameAs: 'https://www.wikidata.org/wiki/Q118220025',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/#breadcrumb',
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
          name: 'Sheetgo',
          item: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/',
        },
      ],
    },
  ],
}

export default function SheetgoCasePage() {
  return (
    <SpokeArticleLayout
      categoryBadge="ESTUDO DE CASO • RETENÇÃO E EXPERIÊNCIA EM SAAS B2B"
      title="Retenção de Usuários e Experiência em SaaS Global: Aumento de 20% no Tempo de Sessão e Ativação Descomplicada"
      lead="Como a análise prática do comportamento dos usuários no GA4 e o redesenho das telas iniciais ajudaram uma plataforma internacional de automação a reter clientes corporativos e acelerar o uso do produto."
      answerBlock="A reformulação das telas iniciais e das páginas de destino da Sheetgo, conduzida a partir de dados reais no GA4 e testes com usuários, eliminou etapas desnecessárias no primeiro contato com a ferramenta. As melhorias aumentaram em 20% o tempo médio de permanência dos usuários corporativos e tornaram o processo de ativação muito mais rápido e intuitivo."
      placeholderArtifacts={[
        {
          title: 'Mapa de Telemetria e Eventos Customizados no GA4',
          description:
            'Dicionário de eventos analíticos para rastreamento de pontos de atrito no onboarding de usuários corporativos e ativação de conexões de planilhas.',
          statusBadge: 'Dicionário GA4',
        },
        {
          title: 'Relatório Comparativo de Carga Cognitiva no Onboarding',
          description:
            'Heurística de usabilidade avaliando o número de decisões e campos exigidos antes do primeiro momento eureka na plataforma.',
          statusBadge: 'Auditoria UX',
        },
        {
          title: 'Protocolo de Otimização de Core Web Vitals para Landing Pages',
          description:
            'Checklist técnico de redução de JavaScript, otimização de fontes e priorização de recursos para alcançar índices superiores no PageSpeed.',
          statusBadge: 'Checklist Técnico',
        },
      ]}
      metrics={[
        {
          value: '+20%',
          label: 'Tempo de Sessão',
          detail: 'Aumento expressivo no engajamento qualificado de novos usuários empresariais na plataforma.',
        },
        {
          value: '100% EN',
          label: 'Alcance Global',
          detail: 'Atuação integral em inglês orientada a clientes corporativos nos Estados Unidos e Europa.',
        },
        {
          value: 'Zero Friction',
          label: 'Funil de Ativação',
          detail: 'Saneamento de métricas Core Web Vitals (LCP, INP e CLS) eliminando desistências no cadastro.',
        },
      ]}
      tags={[
        'B2B SaaS',
        'Product-Led Growth',
        'Conversion Rate Optimization',
        'GA4 Telemetry',
        'Core Web Vitals',
        'User Onboarding',
      ]}
      breadcrumb={{
        parentLabel: 'Casos Operacionais',
        parentUrl: '/arthur#casos',
        currentLabel: 'Sheetgo',
      }}
      canonicalUrl="https://arthur-nasa.github.io/Squammata-PayloadCMS/casos/retencao-ux-saas-sheetgo/"
      jsonLd={spokeJsonLd}
    >
      <h2>O Cenário: Uma Ferramenta Global de Automação para Empresas</h2>
      <p>
        A Sheetgo é uma plataforma global de software para automação de fluxos de trabalho e integração de planilhas na nuvem (Google Sheets, Microsoft Excel e BigQuery). Com usuários corporativos espalhados pelos Estados Unidos e Europa, a comunicação da ferramenta precisava ser 100% em inglês, transmitindo clareza e segurança imediata.
      </p>

      <h2>O Desafio: Usuários que Chegavam ao Site Mas Desistiam no Cadastro</h2>
      <p>
        Embora o site recebesse um volume consistente de visitas internacionais qualificadas, muitos novos usuários corporativos desistiam logo nas primeiras telas de configuração. As etapas iniciais exigiam muitas decisões técnicas antes que a pessoa pudesse ver a automação funcionando de fato.
      </p>
      <p>
        Além disso, algumas páginas principais apresentavam carregamento oscilante no celular e no computador, afetando a experiência de navegação e as posições orgânicas no Google.
      </p>

      <h2>A Solução: Telas Mais Rápidas, Menos Fricção e Clareza de Valor</h2>
      <p>
        Atuando como Technical SEO e Growth Lead, estruturei um mapeamento detalhado de navegação no Google Analytics 4 (GA4) e gravações de uso no Hotjar, identificando com precisão os pontos onde os usuários tinham dúvidas ou travavam.
      </p>
      <p>
        Com base nesses aprendizados, simplificamos as telas de cadastro, aceleramos o tempo de resposta das páginas e disponibilizamos modelos pré-configurados para que o cliente pudesse conectar suas planilhas em poucos cliques. O resultado foi um aumento de 20% no tempo de uso da plataforma e uma transição mais fluida para os planos pagos.
      </p>
    </SpokeArticleLayout>
  )
}
