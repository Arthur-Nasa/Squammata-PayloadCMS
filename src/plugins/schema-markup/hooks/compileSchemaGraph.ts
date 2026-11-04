import type { FieldHook } from 'payload'

export const compileSchemaGraphHook: FieldHook = async ({ value, data, siblingData }) => {
  try {
    const target = siblingData || data?.schemaMarkup || {}

    // Se o usuário solicitou sincronizar a partir de JSON colado
    if (target.syncFromRaw && target.rawJson) {
      try {
        const parsed = JSON.parse(target.rawJson)
        const graph = parsed['@graph'] || [parsed]

        // 1. Encontra e extrai Person
        const personEntity = graph.find((item: any) => item['@type'] === 'Person')
        if (personEntity) {
          if (!target.person) target.person = {}
          if (personEntity.name) target.person.name = personEntity.name
          if (personEntity.alternateName) {
            target.person.alternateName = Array.isArray(personEntity.alternateName)
              ? personEntity.alternateName.join(', ')
              : personEntity.alternateName
          }
          if (personEntity.jobTitle) target.person.jobTitle = personEntity.jobTitle
          if (personEntity.description) target.person.description = personEntity.description
          if (personEntity.email) target.person.email = personEntity.email.replace('mailto:', '')
          if (personEntity.telephone) target.person.telephone = personEntity.telephone
          if (personEntity.url) target.person.url = personEntity.url
          if (personEntity.image) target.person.image = personEntity.image
          if (personEntity.address?.addressLocality) target.person.addressLocality = personEntity.address.addressLocality
          if (personEntity.address?.addressRegion) target.person.addressRegion = personEntity.address.addressRegion
          if (personEntity.address?.addressCountry) target.person.addressCountry = personEntity.address.addressCountry

          if (Array.isArray(personEntity.alumniOf)) {
            target.person.alumniOf = personEntity.alumniOf.map((alumni: any) => ({
              name: alumni.name || '',
              url: alumni.sameAs || alumni.url || '',
            }))
          }
          if (Array.isArray(personEntity.knowsAbout)) {
            target.person.knowsAbout = personEntity.knowsAbout.map((topic: string) => ({
              topic,
            }))
          }
          if (Array.isArray(personEntity.sameAs)) {
            target.person.sameAs = personEntity.sameAs.map((url: string) => ({
              url,
            }))
          }
        }

        // 2. Encontra e extrai FAQPage
        const faqEntity = graph.find((item: any) => item['@type'] === 'FAQPage')
        if (faqEntity && Array.isArray(faqEntity.mainEntity)) {
          if (!target.faq) target.faq = {}
          target.faq.items = faqEntity.mainEntity.map((q: any) => ({
            question: q.name || '',
            answer: q.acceptedAnswer?.text || '',
          }))
        }

        // 3. Encontra e extrai Organization
        const orgEntity = graph.find((item: any) => item['@type'] === 'Organization')
        if (orgEntity) {
          if (!target.organization) target.organization = {}
          if (orgEntity.name) target.organization.name = orgEntity.name
          if (orgEntity.taxID) target.organization.taxID = orgEntity.taxID
          if (orgEntity.url) target.organization.url = orgEntity.url
        }

        // 4. Encontra e extrai Occupation
        const occEntity = graph.find((item: any) => item['@type'] === 'Occupation')
        if (occEntity) {
          if (!target.occupation) target.occupation = {}
          if (occEntity.name) target.occupation.name = occEntity.name
          if (occEntity.occupationalCategory) target.occupation.occupationalCategory = occEntity.occupationalCategory
          if (occEntity.skills) target.occupation.skills = occEntity.skills
          if (occEntity.description) target.occupation.description = occEntity.description
        }

        // Desliga a flag de sincronização para salvar os campos extraídos
        target.syncFromRaw = false
        return target.rawJson
      } catch (parseErr) {
        console.warn('[Schema Plugin] Falha ao fazer parse do rawJson para sincronização:', parseErr)
      }
    }

    // Caso contrário: Compila os menus visuais em um grafo @graph canônico
    const p = target.person || {}
    const f = target.faq || {}
    const o = target.organization || {}
    const oc = target.occupation || {}
    const c = target.cases || {}

    const personId = p.url ? `${p.url}#person` : 'https://linkedin.com/in/arthurnasa#person'
    const orgId = o.url ? `${o.url}#organization` : 'https://squammata.com.br/#organization'

    const compiledGraph: any[] = []

    // 1. Person
    if (p.name || p.jobTitle) {
      const personObj: any = {
        '@type': 'Person',
        '@id': personId,
        name: p.name || 'Arthur Saggioratto',
      }
      if (p.alternateName) {
        personObj.alternateName = p.alternateName.split(',').map((s: string) => s.trim()).filter(Boolean)
      }
      if (p.jobTitle) personObj.jobTitle = p.jobTitle
      if (p.description) personObj.description = p.description
      if (p.url) personObj.url = p.url
      if (p.image) personObj.image = p.image
      if (p.email) personObj.email = p.email.startsWith('mailto:') ? p.email : `mailto:${p.email}`
      if (p.telephone) personObj.telephone = p.telephone

      if (p.addressLocality || p.addressRegion || p.addressCountry) {
        personObj.address = {
          '@type': 'PostalAddress',
          addressLocality: p.addressLocality || "Santa Bárbara d'Oeste",
          addressRegion: p.addressRegion || 'SP',
          addressCountry: p.addressCountry || 'BR',
        }
      }

      if (Array.isArray(p.alumniOf) && p.alumniOf.length > 0) {
        personObj.alumniOf = p.alumniOf.map((item: any) => ({
          '@type': 'CollegeOrUniversity',
          name: item.name,
          ...(item.url ? { sameAs: item.url } : {}),
        }))
      }

      personObj.worksFor = {
        '@id': orgId,
      }

      personObj.hasOccupation = {
        '@id': 'https://squammata.com.br/arthur#occupation',
      }

      if (Array.isArray(p.knowsAbout) && p.knowsAbout.length > 0) {
        personObj.knowsAbout = p.knowsAbout.map((item: any) => item.topic || item).filter(Boolean)
      }

      if (Array.isArray(p.sameAs) && p.sameAs.length > 0) {
        personObj.sameAs = p.sameAs.map((item: any) => item.url || item).filter(Boolean)
      }

      compiledGraph.push(personObj)
    }

    // 2. ProfilePage
    compiledGraph.push({
      '@type': 'ProfilePage',
      '@id': 'https://squammata.com.br/arthur#webpage',
      url: 'https://squammata.com.br/arthur',
      name: `${p.name || 'Arthur Saggioratto'}: ${p.jobTitle || 'Head de E-commerce, SEO & Margem DRE'}`,
      description: p.description || 'Portfólio executivo e governança de e-commerce.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://squammata.com.br/#website',
        name: 'Squammata',
        url: 'https://squammata.com.br',
      },
      mainEntity: {
        '@id': personId,
      },
      breadcrumb: {
        '@id': 'https://squammata.com.br/arthur#breadcrumb',
      },
    })

    // 3. Organization
    if (o.name) {
      compiledGraph.push({
        '@type': 'Organization',
        '@id': orgId,
        name: o.name,
        ...(o.taxID ? { taxID: o.taxID } : {}),
        url: o.url || 'https://squammata.com.br',
        founder: {
          '@id': personId,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: p.addressLocality || "Santa Bárbara d'Oeste",
          addressRegion: p.addressRegion || 'SP',
          addressCountry: p.addressCountry || 'BR',
        },
      })
    }

    // 4. Occupation
    if (oc.name) {
      compiledGraph.push({
        '@type': 'Occupation',
        '@id': 'https://squammata.com.br/arthur#occupation',
        name: oc.name,
        ...(oc.occupationalCategory ? { occupationalCategory: oc.occupationalCategory } : {}),
        ...(oc.description ? { description: oc.description } : {}),
        ...(oc.skills ? { skills: oc.skills } : {}),
      })
    }

    // 5. BreadcrumbList
    compiledGraph.push({
      '@type': 'BreadcrumbList',
      '@id': 'https://squammata.com.br/arthur#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://squammata.com.br/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: `Portfólio ${p.name || 'Arthur Saggioratto'}`,
          item: 'https://squammata.com.br/arthur',
        },
      ],
    })

    // 6. ItemList (Cases)
    if (Array.isArray(c.items) && c.items.length > 0) {
      compiledGraph.push({
        '@type': 'ItemList',
        '@id': 'https://squammata.com.br/arthur#cases',
        name: 'Estudos de Caso e Trajetória Operacional Auditável',
        itemListElement: c.items.map((item: any, idx: number) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: `${item.title}${item.metric ? `: ${item.metric}` : ''}`,
        })),
      })
    }

    // 7. FAQPage
    if (Array.isArray(f.items) && f.items.length > 0) {
      compiledGraph.push({
        '@type': 'FAQPage',
        '@id': 'https://squammata.com.br/arthur#faq',
        mainEntity: f.items.map((faqItem: any) => ({
          '@type': 'Question',
          name: faqItem.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faqItem.answer,
          },
        })),
      })
    }

    const finalSchema = {
      '@context': 'https://schema.org',
      '@graph': compiledGraph,
    }

    return JSON.stringify(finalSchema, null, 2)
  } catch (err) {
    console.error('[Schema Plugin] Erro ao compilar schema graph:', err)
    return value
  }
}
