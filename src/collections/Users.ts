import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role', 'updatedAt'],
  },
  auth: true,
  access: {
    // Apenas usuários autenticados podem ler a lista de usuários
    read: ({ req: { user } }) => Boolean(user),
    // Apenas admins podem criar novos usuários
    create: ({ req: { user } }) => user?.role === 'admin',
    // Apenas admins podem deletar usuários
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Administrador', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: {
        // Apenas admins podem alterar o papel de um usuário
        update: ({ req: { user } }) => user?.role === 'admin',
      },
    },
    {
      name: 'displayName',
      type: 'text',
      label: 'Nome de Exibição',
    },
  ],
}
