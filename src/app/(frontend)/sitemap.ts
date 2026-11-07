import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioBaseUrl = 'https://arthur-nasa.github.io/Squammata-PayloadCMS'
  const agencyBaseUrl = 'https://squammata.com.br'
  const now = new Date()

  return [
    // --- Portfólio Executivo Arthur Saggioratto (Hub-and-Spoke GEO / SEO) ---
    {
      url: `${portfolioBaseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'pt-BR': `${portfolioBaseUrl}/`,
          'en-US': `${portfolioBaseUrl}/en/arthur/`,
        },
      },
    },
    {
      url: `${portfolioBaseUrl}/casos/marketplace-specialty-coffee/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${portfolioBaseUrl}/casos/seo-catalogo-maquinas-cafe/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${portfolioBaseUrl}/casos/retencao-ux-saas-sheetgo/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${portfolioBaseUrl}/governanca/poas-dre-ecommerce/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${portfolioBaseUrl}/en/arthur/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // --- Squammata Consultoria Institucional ---
    {
      url: `${agencyBaseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${agencyBaseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${agencyBaseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}
