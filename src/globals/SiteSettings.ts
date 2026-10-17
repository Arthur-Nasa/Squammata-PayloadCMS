import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Configurações Institucionais',
  access: {
    read: () => true,
    update: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'brandName',
      type: 'text',
      required: true,
      defaultValue: 'Squammata',
      label: 'Nome Institucional da Marca',
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      defaultValue: 'Gestão de projetos e consultoria estratégica para operações de e-commerce',
      label: 'Posicionamento Institucional',
    },
    {
      name: 'corporateEmail',
      type: 'email',
      required: true,
      defaultValue: 'contato@squammata.com.br',
      label: 'E-mail Oficial de Contato',
    },
    {
      name: 'corporateDocument',
      type: 'text',
      label: 'Cadastro Nacional da Pessoa Jurídica (CNPJ)',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Canais Oficiais e Redes Profissionais',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          label: 'Plataforma',
          options: [
            { label: 'LinkedIn Institucional', value: 'linkedin' },
            { label: 'GitHub Corporativo', value: 'github' },
            { label: 'Instagram Corporativo', value: 'instagram' },
            { label: 'Canal de Vídeos ou Podcasts', value: 'video' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Endereço URL do Perfil',
        },
      ],
    },
    {
      name: 'announcementBanner',
      type: 'group',
      label: 'Faixa de Aviso Institucional',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: false,
          label: 'Habilitar faixa de comunicado no topo do site',
        },
        {
          name: 'text',
          type: 'text',
          label: 'Texto do Comunicado',
        },
        {
          name: 'link',
          type: 'text',
          label: 'URL de Destino do Comunicado',
        },
      ],
    },
  ],
}
