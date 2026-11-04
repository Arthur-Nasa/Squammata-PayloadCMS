export const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://squammata.com.br/arthur#arthur",
      "name": "Arthur Saggioratto",
      "alternateName": [
        "Arthur Saggioratto Neto",
        "Arthur Nasa"
      ],
      "jobTitle": "Executivo de Crescimento e Rentabilidade Digital",
      "description": "15 anos liderando operações de e-commerce, SEO técnico, CRO, mídia de performance (Google Ads) e gestão de P&L. Escala sustentável de GMV e proteção de margem em Shopify Plus, Magento e VTEX.",
      "url": "https://squammata.com.br/arthur",
      "image": "https://squammata.com.br/arthur-saggioratto.jpg",
      "email": "mailto:arthur.saggioratto@gmail.com",
      "telephone": "+55-19-99349-7819",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santa Bárbara d'Oeste",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "UNICAMP - Universidade Estadual de Campinas",
          "sameAs": "https://www.unicamp.br/"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "FAAL - Faculdade de Administração e Artes de Limeira"
        }
      ],
      "worksFor": {
        "@id": "https://squammata.com.br/#squammata"
      },
      "hasOccupation": {
        "@id": "https://squammata.com.br/arthur#occupation"
      },
      "knowsLanguage": [
        "pt-BR",
        "en-US"
      ],
      "knowsAbout": [
        "E-commerce Management",
        "Digital P&L Governance",
        "Technical SEO",
        "Conversion Rate Optimization (CRO)",
        "Google Ads Performance",
        "Shopify Plus",
        "Magento Commerce",
        "VTEX",
        "Enterprise Architecture",
        "Retail Media",
        "Generative Engine Optimization (GEO)",
        "Marketplace Integration (Omnik)"
      ],
      "sameAs": [
        "https://linkedin.com/in/arthurnasa",
        "https://github.com/arthurnasa",
        "https://blog.ruadocafe.com.br/author/arthur/"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://squammata.com.br/#squammata",
      "name": "Squammata",
      "legalName": "Squammata Consultoria e Gestão de Projetos Ltda",
      "taxID": "31.384.814/0001-09",
      "url": "https://squammata.com.br",
      "founder": {
        "@id": "https://squammata.com.br/arthur#arthur"
      },
      "description": "Consultoria técnica educativa e arquitetura de negócios digitais com foco em rentabilidade e eficiência operacional.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santa Bárbara d'Oeste",
        "addressRegion": "SP",
        "addressCountry": "BR"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://squammata.com.br/arthur#webpage",
      "url": "https://squammata.com.br/arthur",
      "name": "Arthur Saggioratto | Executivo de Crescimento, E-commerce e Rentabilidade Digital",
      "description": "15 anos liderando operações de e-commerce, SEO técnico, CRO, mídia de performance (Google Ads) e gestão de P&L. Escala sustentável de GMV e proteção de margem em Shopify Plus, Magento e VTEX.",
      "inLanguage": "pt-BR",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://squammata.com.br/#website",
        "name": "Squammata",
        "url": "https://squammata.com.br"
      },
      "about": {
        "@id": "https://squammata.com.br/arthur#arthur"
      },
      "mainEntity": {
        "@id": "https://squammata.com.br/arthur#arthur"
      },
      "breadcrumb": {
        "@id": "https://squammata.com.br/arthur#breadcrumb"
      }
    },
    {
      "@type": "Occupation",
      "@id": "https://squammata.com.br/arthur#occupation",
      "name": "Executivo de Crescimento e Rentabilidade Digital",
      "occupationalCategory": "11-2021.00",
      "description": "Liderança de operações digitais, gestão de P&L de e-commerce, engenharia de SEO, otimização de conversão (CRO) e mídia de performance subordinada a Unit Economics.",
      "skills": "SEO Técnico, GEO, CRO, Shopify Plus, DRE, P&L, POAS, Magento, VTEX, Retail Media"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://squammata.com.br/arthur#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://squammata.com.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfólio Arthur Saggioratto",
          "item": "https://squammata.com.br/arthur"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://squammata.com.br/arthur#cases",
      "name": "Estudos de Caso e Trajetória Operacional Auditável",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Rua do Café: Escala de GMV (+66% MoM) e Marketplace Shopify Plus com Omnik"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sheetgo: Expansão de SEO Internacional e CRO (+20% em Retenção de Sessão)"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Máquinas & Café: 10 Anos de Crescimento Linear (+20% YoY) e 45% da Black Friday via Busca Orgânica"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Squammata Consultoria: Auditorias de DRE, POAS e Retail Media para Varejo e Indústria"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://squammata.com.br/arthur#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que significa subordinar a operação de e-commerce ao DRE e à margem de contribuição?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Significa avaliar o sucesso das ações pelo lucro que realmente permanece no caixa da empresa, e não por faturamento bruto ou métricas isoladas de painel como ROAS. Analisamos custos de mercadoria vendida (CMV), taxas de gateway, impostos e frete para garantir que cada real investido em aquisição gere margem líquida positiva (POAS)."
          }
        },
        {
          "@type": "Question",
          "name": "Como funciona a otimização para motores de busca com Inteligência Artificial (GEO e AEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trata-se da modelagem semântica de entidades e tópicos com dados estruturados Schema.org em JSON-LD e conteúdo técnico de alta densidade (E-E-A-T). Essa arquitetura permite que assistentes como Google AI Overviews, Perplexity e ChatGPT citem e recomendem a marca como autoridade confiável no segmento."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são os formatos de contratação disponíveis para trabalhar com Arthur Saggioratto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A atuação ocorre em quatro pilares estruturados pela Squammata: Diagnóstico e Auditoria Operacional (sprints técnicos de 3 a 4 semanas), Arquitetura de Plataformas e Engenharia (Shopify Plus, VTEX e headless), Aquisição de Performance e Governança de P&L (gestão de mídia orientada a lucro), e Advisory Executivo com Formação de Lideranças Internas."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é a vantagem da formação em Sociologia pela UNICAMP para a gestão de tecnologia e e-commerce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A formação em Sociologia fornece rigor para compreender plataformas, algoritmos e funis como sistemas sociotécnicos complexos. Em vez de perseguir atalhos passageiros de crescimento que queimam caixa, a estratégia prioriza a construção de ecossistemas sustentáveis de confiança, soberania de canais orgânicos e fidelização genuína do consumidor."
          }
        }
      ]
    }
  ]
}
