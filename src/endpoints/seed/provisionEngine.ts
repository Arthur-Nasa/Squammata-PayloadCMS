import type { Payload, PayloadRequest } from 'payload'
import type { SiteConfig } from '@/site.config'

export interface TemplateNicheData {
  niche?: string
  name?: string
  description?: string
  services?: Array<{
    title: string
    shortDescription?: string
    price?: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
}

export interface ProvisionResult {
  success: boolean
  message: string
  clientName: string
  timestamp: string
  servicesCount?: number
}

/**
 * Motor de Provisionamento Automatizado de Clientes
 * Inicializa e sincroniza os globals institucionais, temas, cabeçalho, rodapé
 * e coleções de nicho a partir de qualquer manifesto de cliente fornecido.
 */
export async function provisionClientFromConfig({
  payload,
  config,
  templateData,
  adminPassword = 'admin-change-me-2026',
  req,
}: {
  payload: Payload
  config: SiteConfig
  templateData?: TemplateNicheData
  adminPassword?: string
  req?: PayloadRequest
}): Promise<ProvisionResult> {
  payload.logger.info(`Iniciando provisionamento para o cliente: ${config.branding.name}`)

  // 1. Garantir Usuário Administrador
  const adminEmail = config.contact.email
  const existingUser = await payload.find({
    collection: 'users',
    where: { email: { equals: adminEmail } },
    limit: 1,
    req,
  })

  if (existingUser.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        name: config.branding.name,
        email: adminEmail,
        password: adminPassword,
      },
      req,
    })
    payload.logger.info(`Usuário administrador criado: ${adminEmail}`)
  }

  // 2. Atualizar Global: SiteSettings
  const socialLinks: { platform: 'linkedin' | 'github' | 'instagram' | 'video'; url: string }[] = []
  if (config.contact.social.linkedin) {
    socialLinks.push({ platform: 'linkedin', url: config.contact.social.linkedin })
  }
  if (config.contact.social.instagram) {
    socialLinks.push({ platform: 'instagram', url: config.contact.social.instagram })
  }
  if (config.contact.social.github) {
    socialLinks.push({ platform: 'github', url: config.contact.social.github })
  }

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      brandName: config.branding.name,
      tagline: config.branding.tagline,
      corporateEmail: config.contact.email,
      corporateDocument: config.branding.document,
      socialLinks,
    },
    req,
  })

  // 3. Atualizar Global: LocalSEO
  await payload.updateGlobal({
    slug: 'local-seo',
    data: {
      businessName: config.branding.legalName || config.branding.name,
      streetAddress: `${config.contact.address.street}${
        config.contact.address.number ? `, ${config.contact.address.number}` : ''
      }`,
      neighborhood: config.contact.address.neighborhood,
      city: config.contact.address.city,
      state: config.contact.address.state,
      postalCode: config.contact.address.zipCode,
      contactPhone: config.contact.phone,
      whatsappPhone: config.contact.whatsapp,
      serviceAreas: config.contact.citiesServed?.map((city) => ({ city })) || [],
    },
    req,
  })

  // 4. Atualizar Global: ThemeSettings
  await payload.updateGlobal({
    slug: 'theme-settings',
    data: {
      preset: config.theme.preset === 'custom' ? 'custom' : config.theme.preset,
      radiusPreset: config.theme.radius,
      overridePrimary: config.theme.primaryColor,
      overrideSecondary: config.theme.secondaryColor,
      overrideDarkBg: config.theme.darkBg,
      overrideLightBg: config.theme.lightBg,
    },
    req,
  })

  // 5. Atualizar Global: Header
  const fullAddress = `${config.contact.address.street}${
    config.contact.address.number ? `, ${config.contact.address.number}` : ''
  } - ${config.contact.address.neighborhood}, ${config.contact.address.city}/${config.contact.address.state}`
  const regionalSummary = config.contact.citiesServed?.slice(0, 3).join(', ') || config.contact.address.city

  try {
    await payload.updateGlobal({
      slug: 'header',
      data: {
        logo: {
          type: 'text',
          text: config.branding.name,
          alt: config.branding.name,
        },
        contact: {
          actionType: 'popup',
          popupTitle: 'Atendimento & Diagnóstico',
          popupItems: [
            { label: 'Sede Operacional', value: fullAddress },
            { label: 'Telefone / WhatsApp', value: config.contact.phone || config.contact.whatsapp },
            { label: 'E-mail Institucional', value: config.contact.email },
            { label: 'Atendimento Regional', value: regionalSummary },
            { label: 'Horário de Atendimento', value: config.contact.operationalHours || 'Segunda a Sexta, 08h às 18h' },
          ],
        },
        ordercall: {
          actionType: 'link',
          link: config.contact.whatsapp
            ? `https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`
            : 'https://wa.me/',
        },
      },
      req,
    })
  } catch (err) {
    payload.logger.warn(`Aviso ao sincronizar Header no provisionamento: ${(err as Error).message}`)
  }

  // 6. Atualizar Global: Footer
  try {
    const footerSocial = [
      ...(config.contact.whatsapp
        ? [{ icon: 'fab fa-whatsapp', link: `https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}` }]
        : []),
      ...(config.contact.social.linkedin
        ? [{ icon: 'fab fa-linkedin-in', link: config.contact.social.linkedin }]
        : []),
      ...(config.contact.social.github
        ? [{ icon: 'fab fa-github', link: config.contact.social.github }]
        : []),
      ...(config.contact.social.instagram
        ? [{ icon: 'fab fa-instagram', link: config.contact.social.instagram }]
        : []),
    ]

    await payload.updateGlobal({
      slug: 'footer',
      data: {
        copyright: `© ${new Date().getFullYear()} ${config.branding.legalName || config.branding.name}. Todos os direitos reservados. ${config.branding.document || ''}`,
        createdBy: `${config.branding.name} | ${config.branding.tagline}`,
        locations: [
          {
            title: 'Sede Operacional',
            address: `${fullAddress}, CEP ${config.contact.address.zipCode}`,
            phone: config.contact.phone || config.contact.whatsapp,
          },
          {
            title: 'Atendimento Regional',
            address: regionalSummary,
            phone: config.contact.phone || config.contact.whatsapp,
          },
        ],
        social: footerSocial,
      },
      req,
    })
  } catch (err) {
    payload.logger.warn(`Aviso ao sincronizar Footer no provisionamento: ${(err as Error).message}`)
  }

  // 7. Provisionamento de Serviços do Template de Nicho (se fornecido)
  let servicesCount = 0
  if (templateData?.services && Array.isArray(templateData.services)) {
    for (const s of templateData.services) {
      const existing = await payload.find({
        collection: 'services',
        where: { title: { equals: s.title } },
        limit: 1,
        req,
      })

      if (existing.docs.length === 0) {
        await payload.create({
          collection: 'services',
          draft: true,
          data: {
            title: s.title,
            short: s.shortDescription || '',
          },
          req,
        })
        servicesCount++
      }
    }
    payload.logger.info(`${servicesCount} serviços de nicho provisionados.`)
  }

  payload.logger.info(`Provisionamento de ${config.branding.name} concluído com sucesso.`)

  return {
    success: true,
    message: `Cliente ${config.branding.name} provisionado com sucesso.`,
    clientName: config.branding.name,
    timestamp: new Date().toISOString(),
    servicesCount,
  }
}
