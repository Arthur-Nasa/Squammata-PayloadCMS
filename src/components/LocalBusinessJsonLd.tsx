import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { LocalSeo } from '@/payload-types'
import { defaultSiteConfig } from '@/site.config'

export async function LocalBusinessJsonLd() {
  try {
    const seoData: LocalSeo = await getCachedGlobal('local-seo', 1)()

    const areasServed =
      seoData?.serviceAreas && seoData.serviceAreas.length > 0
        ? seoData.serviceAreas.map((item) => (typeof item === 'object' && item?.city ? item.city : String(item)))
        : defaultSiteConfig.contact.citiesServed || [defaultSiteConfig.contact.address.city]

    const schema = {
      '@context': 'https://schema.org',
      '@type': seoData?.schemaType || 'ProfessionalService',
      name: seoData?.businessName || defaultSiteConfig.branding.legalName || defaultSiteConfig.branding.name,
      description: defaultSiteConfig.branding.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          seoData?.streetAddress ||
          `${defaultSiteConfig.contact.address.street}${defaultSiteConfig.contact.address.number ? `, ${defaultSiteConfig.contact.address.number}` : ''}`,
        addressLocality: seoData?.city || defaultSiteConfig.contact.address.city,
        addressRegion: seoData?.state || defaultSiteConfig.contact.address.state,
        postalCode: seoData?.postalCode || defaultSiteConfig.contact.address.zipCode,
        addressCountry: 'BR',
      },
      telephone: seoData?.contactPhone || defaultSiteConfig.contact.phone,
      areaServed: areasServed,
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
