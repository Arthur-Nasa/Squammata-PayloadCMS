import { createLocalReq, getPayload } from 'payload'
import { seed } from '@/endpoints/seed'
import config from '@payload-config'
import { headers } from 'next/headers'

export const maxDuration = 60 // Este endpoint pode rodar por até 60 segundos

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()

  // Autenticação via headers (obrigatória em produção, liberada em desenvolvimento)
  const { user } = await payload.auth({ headers: requestHeaders })
  if (!user && process.env.NODE_ENV !== 'development') {
    return new Response('Acesso negado.', { status: 403 })
  }

  try {
    const payloadReq = await createLocalReq({ user: user ?? undefined }, payload)
    await seed({ payload, req: payloadReq })
    return Response.json({ success: true, message: 'Conteúdo Squammata inicializado com sucesso.' })
  } catch (e) {
    payload.logger.error({ err: e, message: 'Erro ao inicializar dados da Squammata' })
    return new Response('Erro ao inicializar dados da Squammata.', { status: 500 })
  }
}

export async function GET(): Promise<Response> {
  if (process.env.NODE_ENV !== 'development') {
    return new Response('Acesso negado.', { status: 403 })
  }
  return POST()
}
