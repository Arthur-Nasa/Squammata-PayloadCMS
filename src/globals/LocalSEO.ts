import type { GlobalConfig } from 'payload'

export const LocalSEO: GlobalConfig = {
  slug: 'local-seo',
  label: 'SEO Local e Schema.org',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'businessName',
      type: 'text',
      required: true,
      defaultValue: 'Squammata Gestão de Projetos e E-commerce',
      label: 'Nome da Entidade Comercial',
    },
    {
      name: 'schemaType',
      type: 'select',
      required: true,
      defaultValue: 'ProfessionalService',
      label: 'Tipo Schema.org',
      options: [
        { label: 'ProfessionalService', value: 'ProfessionalService' },
        { label: 'LocalBusiness', value: 'LocalBusiness' },
        { label: 'ConsultingService', value: 'ConsultingService' },
      ],
    },
    {
      name: 'streetAddress',
      type: 'text',
      required: true,
      defaultValue: 'Rua Coronel Quirino, 1200',
      label: 'Logradouro e Número',
    },
    {
      name: 'neighborhood',
      type: 'text',
      required: true,
      defaultValue: 'Cambuí',
      label: 'Bairro',
    },
    {
      name: 'city',
      type: 'text',
      required: true,
      defaultValue: 'Campinas',
      label: 'Município Sede',
    },
    {
      name: 'state',
      type: 'text',
      required: true,
      defaultValue: 'SP',
      label: 'Estado Federativo',
    },
    {
      name: 'postalCode',
      type: 'text',
      required: true,
      defaultValue: '13025-002',
      label: 'Código de Endereçamento Postal (CEP)',
    },
    {
      name: 'coordinates',
      type: 'group',
      label: 'Coordenadas Geográficas (Latitude e Longitude)',
      fields: [
        {
          name: 'latitude',
          type: 'number',
          required: true,
          defaultValue: -22.9064,
          label: 'Latitude',
        },
        {
          name: 'longitude',
          type: 'number',
          required: true,
          defaultValue: -47.0543,
          label: 'Longitude',
        },
      ],
    },
    {
      name: 'contactPhone',
      type: 'text',
      required: true,
      defaultValue: '+55 19 3200-0000',
      label: 'Telefone Corporativo de Contato',
    },
    {
      name: 'whatsappPhone',
      type: 'text',
      defaultValue: '+55 19 99000-0000',
      label: 'Canal de WhatsApp Comercial',
    },
    {
      name: 'serviceAreas',
      type: 'array',
      label: 'Cidades Atendidas na Região Metropolitana de Campinas (RMC)',
      defaultValue: [
        { city: 'Campinas' },
        { city: 'Paulínia' },
        { city: 'Americana' },
        { city: 'Indaiatuba' },
        { city: 'Valinhos' },
        { city: 'Vinhedo' },
        { city: 'Sumaré' },
        { city: 'Hortolândia' },
        { city: 'Santa Bárbara d’Oeste' },
        { city: 'Jaguariúna' },
      ],
      fields: [
        {
          name: 'city',
          type: 'text',
          required: true,
          label: 'Município Atendido',
        },
      ],
    },
    {
      name: 'businessHours',
      type: 'array',
      label: 'Horários de Atendimento Comercial',
      defaultValue: [
        { dayOfWeek: 'Segunda a Sexta-feira', opens: '09:00', closes: '18:00' },
      ],
      fields: [
        {
          name: 'dayOfWeek',
          type: 'text',
          required: true,
          label: 'Dias da Semana',
        },
        {
          name: 'opens',
          type: 'text',
          required: true,
          label: 'Horário de Abertura',
        },
        {
          name: 'closes',
          type: 'text',
          required: true,
          label: 'Horário de Encerramento',
        },
      ],
    },
  ],
}
