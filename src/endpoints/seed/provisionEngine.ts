import type { Payload, PayloadRequest } from 'payload'
import type { SiteConfig } from '@/site.config'

export interface ProvisionResult {
  success: boolean
  message: string
  clientName: string
  timestamp: string
}

/**
 * Motor de Provisionamento Automatizado de Clientes
 * Inicializa e sincroniza os globals institucionais, temas e dados fiscais
 * a partir de qualquer manifesto de cliente fornecido.
 */
export async function provisionClientFromConfig({
  payload,
  config,
  adminPassword = 'admin-change-me-2026',
  req,
}: {
  payload: Payload
  config: SiteConfig
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
      businessName: config.branding.legalName,
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

  payload.logger.info(`Provisionamento de ${config.branding.name} concluído com sucesso.`)

  return {
    success: true,
    message: `Cliente ${config.branding.name} provisionado com sucesso.`,
    clientName: config.branding.name,
    timestamp: new Date().toISOString(),
  }
}
