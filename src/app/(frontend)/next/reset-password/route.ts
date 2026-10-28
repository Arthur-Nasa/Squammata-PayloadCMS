import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: Request): Promise<Response> {
  if (process.env.NODE_ENV !== 'development') {
    return new Response('Acesso negado.', { status: 403 })
  }

  try {
    const payload = await getPayload({ config })
    const body = await req.json().catch(() => ({}))
    const email = body.email || 'contato@squammata.com.br'
    const password = body.password

    if (!password) {
      return Response.json(
        { success: false, error: 'O campo password é obrigatório.' },
        { status: 400 }
      )
    }

    const users = await payload.find({
      collection: 'users',
      where: { email: { equals: email } },
      limit: 1,
    })

    if (users.docs.length === 0) {
      const newUser = await payload.create({
        collection: 'users',
        data: {
          email,
          password,
          name: 'Arthur Saggioratto',
        },
      })
      return Response.json({
        success: true,
        message: `Novo usuário ${email} criado com sucesso.`,
        email: newUser.email,
      })
    }

    await payload.update({
      collection: 'users',
      id: users.docs[0].id,
      data: {
        password,
      },
    })

    return Response.json({
      success: true,
      message: `Senha do usuário ${email} atualizada com sucesso.`,
    })
  } catch (error) {
    return Response.json(
      { success: false, error: (error as Error)?.message || String(error) },
      { status: 500 }
    )
  }
}
