import type { Metadata } from 'next'
import React from 'react'
import { SpokeArticleLayout } from '@/components/spoke/SpokeArticleLayout'

export const metadata: Metadata = {
  metadataBase: new URL('https://arthursaggioratto.com.br'),
  title: 'Retenção e Otimização de Jornada em SaaS B2B Global: Estudo de Caso Sheetgo',
  description:
    'Redesenho da experiência do usuário e telemetria comportamental no GA4 para a plataforma global Sheetgo, elevando o tempo de sessão em +20% e reduzindo atrito de ativação.',
  alternates: {
    canonical: 'https://arthursaggioratto.com.br/casos/retencao-ux-saas-sheetgo/',
  },
  openGraph: {
    type: 'article',
    title: 'Retenção e Otimização de Jornada em SaaS B2B Global: Estudo de Caso Sheetgo',
    description:
      'Redesenho da experiência do usuário e telemetria comportamental no GA4 para a plataforma global Sheetgo, elevando o tempo de sessão em +20% e reduzindo atrito de ativação.',
    url: 'https://arthursaggioratto.com.br/casos/retencao-ux-saas-sheetgo/',
    images: [
      {
        url: 'https://arthursaggioratto.com.br/arthur-saggioratto.jpg',
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
    images: ['https://arthursaggioratto.com.br/arthur-saggioratto.jpg'],
  },
}

const spokeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TechArticle',
      '@id': 'https://arthursaggioratto.com.br/casos/retencao-ux-saas-sheetgo/#article',
      isPartOf: {
        '@type': 'WebPage',
        '@id': 'https://arthursaggioratto.com.br/casos/retencao-ux-saas-sheetgo/',
      },
      headline:
        'Retenção e Otimização de Jornada em SaaS B2B Global: Estudo de Caso Sheetgo',
      description:
        'Redesenho da experiência do usuário e telemetria comportamental no GA4 para a plataforma global Sheetgo, elevando o tempo de sessão em +20% e reduzindo atrito de ativação.',
      inLanguage: 'pt-BR',
      mainEntityOfPage: 'https://arthursaggioratto.com.br/casos/retencao-ux-saas-sheetgo/',
      author: {
        '@type': 'Person',
        '@id': 'https://arthursaggioratto.com.br/#person',
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://arthursaggioratto.com.br/#organization',
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
      '@id': 'https://arthursaggioratto.com.br/casos/retencao-ux-saas-sheetgo/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://arthursaggioratto.com.br/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Casos Operacionais',
          item: 'https://arthursaggioratto.com.br/#casos',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Sheetgo',
          item: 'https://arthursaggioratto.com.br/casos/retencao-ux-saas-sheetgo/',
        },
      ],
    },
  ],
}

export default function SheetgoCasePage() {
  return (
    <SpokeArticleLayout
      categoryBadge="ESTUDO DE CASO OPERACIONAL • SAAS B2B GLOBAL & PRODUCT-LED GROWTH"
      title="Otimização de Retenção e Ativação em SaaS B2B Global: Telemetria no GA4 e Redução de Fricção no Onboarding"
      lead="Investigação dos gargalos de ativação e retenção em plataforma global de SaaS B2B, detalhando o diagnóstico comportamental no GA4 e o redesenho de fluxos de entrada para redução de carga cognitiva corporativa."
      answerBlock="A intervenção nos fluxos de entrada da plataforma global de automação Sheetgo conduzida por Arthur Saggioratto utilizou telemetria comportamental no GA4 e testes controlados para redesenhar a experiência do usuário. O processo eliminou etapas cognitivamente redundantes de ativação, resultando em um incremento de 20% no tempo qualificado de sessão e aceleração da taxa de adoção de produto."
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
      canonicalUrl="https://arthursaggioratto.com.br/casos/retencao-ux-saas-sheetgo/"
      jsonLd={spokeJsonLd}
    >
      <h2>Contexto Operacional e Exigência Enterprise Global</h2>
      <p>
        A Sheetgo desenvolve uma plataforma SaaS líder mundial em automação de fluxos de trabalho e conexão de planilhas em nuvem (Google Sheets, Microsoft Excel e BigQuery). Operando com clientes corporativos distribuídos pelos Estados Unidos e Europa, a comunicação e as esteiras de produto demandam rigor absoluto em usabilidade, segurança da informação e clareza de valor imediato.
      </p>

      <h2>Diagnóstico de Gargalos: Quedas Prematuras na Jornada de Entrada</h2>
      <p>
        Apesar da captação consistente de visitas orgânicas internacionais, a análise detalhada de comportamento indicava dispersão precoce de novos cadastros corporativos durante as primeiras telas de onboarding. Usuários de alto valor enfrentavam sobrecarga cognitiva na configuração de seus primeiros conectores de dados.
      </p>
      <p>
        Simultaneamente, auditorias técnicas apontavam instabilidade nas métricas de Core Web Vitals em páginas de destino de alta intenção, prejudicando o ranqueamento orgânico em buscas técnicas globais.
      </p>

      <h2>Intervenção Técnica por Arthur Saggioratto</h2>
      <p>
        Atuando como Technical SEO e Growth Lead, Arthur Saggioratto estabeleceu uma rotina rigorosa de auditorias técnicas com ferramentas especializadas (Semrush, Ahrefs, Hotjar). Foi estruturada uma malha avançada de telemetria comportamental no Google Analytics 4 (GA4), mapeando cada micromomento de hesitação no fluxo de ativação.
      </p>
      <p>
        Com base nos dados observados, a jornada de entrada foi redesenhada por meio de testes controlados. Etapas redundantes de cadastro foram suprimidas e substituídas por modelos pré-configurados de automação com visualização prévia de valor em tempo real. O processo resultou em um acréscimo sustentado de 20% no tempo qualificado de sessão e maior aceleração na conversão para planos pagos.
      </p>
    </SpokeArticleLayout>
  )
}
