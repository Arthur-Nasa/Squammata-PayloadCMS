export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#webpage',
      url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
      name: 'Arthur Saggioratto | Consultoria em E-commerce e Rentabilidade Digital',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#website',
        url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
        name: 'Arthur Saggioratto | Consultoria e Portfólio Executivo',
      },
      about: {
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#person',
      },
      mainEntity: {
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#person',
      },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Person',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#person',
      name: 'Arthur Saggioratto',
      alternateName: [
        'Arthur Saggioratto Neto',
        'Arthur Nasa',
      ],
      jobTitle: [
        'Consultor de Crescimento, Rentabilidade e Arquitetura para E-commerce',
        'Consultor de E-commerce e Margem',
        'Head de E-commerce e Operações',
      ],
      description:
        'Especialista em governança de margem de contribuição (POAS), arquitetura de marketplaces e SEO técnico para operações de comércio eletrônico no interior paulista e São Paulo.',
      image: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/arthur-saggioratto.webp',
      url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
      email: 'mailto:arthur.saggioratto@gmail.com',
      telephone: '+55-19-99349-7819',
      address: {
        '@type': 'PostalAddress',
        addressLocality: "Santa Bárbara d'Oeste",
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      sameAs: [
        'https://www.wikidata.org/wiki/Q171183',
        'https://linkedin.com/in/arthurnasa',
        'https://github.com/arthur-nasa',
        'https://blog.ruadocafe.com.br/author/arthur/',
      ],
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Universidade Estadual de Campinas',
          alternateName: 'UNICAMP',
          sameAs: 'https://www.wikidata.org/wiki/Q645494',
          description: 'Bacharelado em Ciências Sociais (Sociologia), previsão de conclusão em 2027',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'FAAL • Faculdade de Administração e Artes de Limeira',
          description: 'Bacharelado em Marketing e Gestão de Vendas, concluído em 2015',
        },
      ],
      knowsAbout: [
        'https://www.wikidata.org/wiki/Q171183',
        'https://www.wikidata.org/wiki/Q22661',
        'https://www.wikidata.org/wiki/Q52271',
        'https://www.wikidata.org/wiki/Q797446',
        'Profit on Ad Spend (POAS)',
        'E-commerce Growth',
        'P&L Governance',
        'Conversion Rate Optimization (CRO)',
        'Shopify Plus',
        'VTEX',
        'Magento',
        'Tiny ERP',
        'Bling ERP',
      ],
      worksFor: {
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#organization',
      name: 'Squammata Consultoria',
      legalName: '31.384.814 ARTHUR SAGGIORATTO NETO ME',
      taxID: '31.384.814/0001-09',
      url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
      founder: {
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#person',
      },
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Brasil',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Região Metropolitana de Campinas',
          sameAs: 'https://pt.wikipedia.org/wiki/Regi%C3%A3o_Metropolitana_de_Campinas',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Campinas',
          sameAs: 'https://pt.wikipedia.org/wiki/Campinas',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Piracicaba',
          sameAs: 'https://pt.wikipedia.org/wiki/Piracicaba',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Americana',
          sameAs: 'https://pt.wikipedia.org/wiki/Americana',
        },
        {
          '@type': 'AdministrativeArea',
          name: "Santa Bárbara d'Oeste",
          sameAs: "https://pt.wikipedia.org/wiki/Santa_B%C3%A1rbara_d%27Oeste",
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Limeira',
          sameAs: 'https://pt.wikipedia.org/wiki/Limeira',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'São Paulo',
          sameAs: 'https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo',
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#servicos',
      name: 'Consultoria Squammata • Arthur Saggioratto',
      url: 'https://arthur-nasa.github.io/Squammata-PayloadCMS/',
      telephone: '+5519993497819',
      email: 'arthur.saggioratto@gmail.com',
      priceRange: '$$$$',
      serviceType: [
        'Consultoria de E-commerce e Destrave de Crescimento',
        'Diagnóstico de P&L, DRE e Mídia de Performance (POAS)',
        'SEO Técnico para Grandes Catálogos',
        'Direção Executiva Interina de Operações Digitais',
      ],
      areaServed: {
        '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#organization',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://arthur-nasa.github.io/Squammata-PayloadCMS/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Como a consultoria atua para tirar e-commerces e empresas da estagnação e destravar o crescimento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A intervenção identifica exatamente onde estão os gargalos que impedem a empresa de expandir, sejam falhas na conversão do site, desordem na integração de estoques com o ERP, ou leilões de tráfego pago que corroem a margem. A consultoria organiza a engenharia de catálogo (SEO técnico), elimina atritos no checkout (CRO), reestrutura a comunicação de estoques e subordina os anúncios no Google e Meta ao lucro real no DRE (POAS), permitindo romper o platô e retomar a escala com caixa saudável.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como você equilibra a contratação como consultor com funções executivas para empresas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Opero com escopos contratuais distintos e transparentes. Para empresas que buscam superar a estagnação e destravar processos, disponibilizo intervenções consultivas práticas com duração de 3 a 6 meses, com planos de ação diretos e acompanhamento técnico sem gerar custos fixos permanentes de diretoria. Para marcas consolidadas e corporações, assumo posições como Head de E-commerce, Diretor de Crescimento ou liderança executiva de transição.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que significa na prática fazer gestão de mídia paga baseada em POAS e margem de contribuição?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ao contrário da métrica comum de ROAS, que avalia apenas o faturamento bruto gerado pelos anúncios sem considerar os custos do produto, a gestão por POAS (Profit on Ad Spend) avalia o lucro líquido que sobra no caixa da empresa após subtrair custo de mercadoria (CMV), impostos, comissões de gateway e frete. O investimento é alocado prioritariamente nos itens que geram dinheiro real para a empresa, e não naqueles que apenas aumentam o faturamento de fachada.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais plataformas e sistemas de gestão (ERPs) são atendidos nos projetos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Possuo ampla vivência com as principais plataformas do mercado nacional e global, incluindo Shopify Plus, VTEX, Magento e ecossistemas de marketplace como Seller Center Omnik. Na retaguarda de gestão, estruturo integrações completas com ERPs como Tiny, Bling e Totvs, garantindo a sincronização em tempo real de estoques, emissão automatizada de notas e expedição sem atritos logísticos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Há disponibilidade para alinhamentos presenciais em cidades do interior paulista?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sim. Com base operacional localizada no interior de São Paulo, realizo visitas técnicas e diagnósticos presenciais nas sedes das empresas em Campinas, Piracicaba, Americana, Santa Bárbara d'Oeste, Limeira e na capital do estado, além de manter reuniões executivas virtuais diárias.",
          },
        },
      ],
    },
  ],
}
