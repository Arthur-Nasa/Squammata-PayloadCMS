import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'fullName', 'corporateEmail', 'monthlyRevenue', 'status', 'createdAt'],
  },
  access: {
    // Permite criação pública a partir do formulário institucional da web
    create: () => true,
    // Leitura, atualização e remoção estritamente restritas a administradores autenticados
    read: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Nome Completo do Solicitante',
    },
    {
      name: 'corporateEmail',
      type: 'email',
      required: true,
      label: 'E-mail Corporativo',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Telefone ou WhatsApp de Contato',
    },
    {
      name: 'companyName',
      type: 'text',
      required: true,
      label: 'Razão Social ou Nome Fantasia',
    },
    {
      name: 'websiteUrl',
      type: 'text',
      label: 'Endereço do Site ou E-commerce Atual',
    },
    {
      name: 'monthlyRevenue',
      type: 'select',
      required: true,
      label: 'Faixa de Faturamento Mensal Médio',
      options: [
        { label: 'Até R$ 50 mil / mês', value: 'under_50k' },
        { label: 'De R$ 50 mil a R$ 200 mil / mês', value: '50k_to_200k' },
        { label: 'De R$ 200 mil a R$ 1 milhão / mês', value: '200k_to_1m' },
        { label: 'Acima de R$ 1 milhão / mês', value: 'above_1m' },
      ],
    },
    {
      name: 'mainChallenge',
      type: 'select',
      required: true,
      label: 'Gargalo Prioritário Identificado',
      options: [
        { label: 'Estruturação de DRE e Margem de Contribuição', value: 'dre_margin' },
        { label: 'Migração ou Estabilização de Plataforma de E-commerce', value: 'platform' },
        { label: 'Logística, Expedição e Redução de Ruptura', value: 'logistics' },
        { label: 'Aquisição Orgânica e SEO Técnico', value: 'seo' },
        { label: 'Governança, Processos e Gestão de Canais', value: 'governance' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Contexto Adicional da Operação',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      label: 'Status do Diagnóstico',
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: 'Novo Lead', value: 'new' },
        { label: 'Em Qualificação Técnica', value: 'in_review' },
        { label: 'Contato Realizado', value: 'contacted' },
        { label: 'Desqualificado', value: 'disqualified' },
        { label: 'Convertido em Proposta', value: 'converted' },
      ],
      access: {
        // Bloqueia manipulação do status pelo formulário público na criação
        create: () => false,
        update: ({ req: { user } }) => user?.role === 'admin',
      },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      label: 'Anotações Internas de Consultoria',
      admin: {
        position: 'sidebar',
        description: 'Visível e editável exclusivamente por consultores administradores.',
      },
      access: {
        create: () => false,
        read: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user } }) => user?.role === 'admin',
      },
    },
  ],
}
