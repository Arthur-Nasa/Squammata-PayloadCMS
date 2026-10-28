import { getPayload } from 'payload'
import config from '@payload-config'
import { provisionClientFromConfig } from '@/endpoints/seed/provisionEngine'
import { defaultSiteConfig, type SiteConfig } from '@/site.config'

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config })
    const body = await req.json().catch(() => ({}))

    const clientConfig: SiteConfig = {
      branding: {
        ...defaultSiteConfig.branding,
        ...(body.branding || {}),
      },
      contact: {
        ...defaultSiteConfig.contact,
        ...(body.contact || {}),
      },
      theme: {
        ...defaultSiteConfig.theme,
        ...(body.theme || {}),
      },
      features: {
        ...defaultSiteConfig.features,
        ...(body.features || {}),
      },
    }

    const result = await provisionClientFromConfig({
      payload,
      config: clientConfig,
      templateData: body.templateData,
      adminPassword: body.adminPassword || 'admin-change-me-2026',
    })

    return Response.json(result, { status: 200 })
  } catch (error: any) {
    return Response.json(
      {
        success: false,
        message: 'Erro no provisionamento do cliente.',
        error: error?.message || 'Erro desconhecido',
      },
      { status: 500 }
    )
  }
}
