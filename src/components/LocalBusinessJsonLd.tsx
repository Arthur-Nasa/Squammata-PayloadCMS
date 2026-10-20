import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { LocalSeo } from '@/payload-types'

export async function LocalBusinessJsonLd() {
  try {
    const seoData: LocalSeo = await getCachedGlobal('local-seo', 1)()
    if (!seoData) return null

    const schema = {
      '@context': 'https://schema.org',
      '@type': seoData.schemaType || 'ProfessionalService',
      name: seoData.businessName || 'Squammata Gestão de Projetos e E-commerce',
      address: {
        '@type': 'PostalAddress',
        streetAddress: seoData.streetAddress || 'Rua Coronel Quirino, 1200',
        addressLocality: seoData.city || 'Campinas',
        addressRegion: seoData.state || 'SP',
        postalCode: seoData.postalCode || '13025-002',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -22.9056,
        longitude: -47.0506,
      },
      areaServed: [
        'Campinas',
        'Americana',
        'Hortolândia',
        'Indaiatuba',
        'Itatiba',
        'Jaguariúna',
        'Paulínia',
        'Sumaré',
        'Valinhos',
        'Vinhedo',
      ],
      priceRange: '$$$',
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  } catch {
    return null
  }
}
