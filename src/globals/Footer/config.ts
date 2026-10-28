import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      label: 'Modelo de Rodapé',
      options: [
        {
          label: 'Padrão',
          value: 'default',
        },
        {
          label: 'Minimalista',
          value: 'minimal',
        },
      ],
      defaultValue: 'default',
      admin: {
        description: 'Selecione o modelo de rodapé padrão do site. Páginas individuais podem sobrescrever esta opção.',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logomarca (Escura)',
      required: false,
    },
    {
      name: 'logoLight',
      type: 'upload',
      relationTo: 'media',
      label: 'Logomarca Negativa (Branca) - Usada no modelo minimalista',
    },
    {
      name: 'newsletter',
      type: 'group',
      label: 'Boletim Técnico / Newsletter',
      fields: [
        {
          name: 'placeholder',
          type: 'text',
          label: 'Texto de Orientação do Campo',
          defaultValue: 'Cadastre seu e-mail corporativo para receber análises técnicas de DRE e gestão de estoque',
        },
        {
          name: 'buttonIcon',
          type: 'text',
          label: 'Classe do Ícone do Botão',
          defaultValue: 'fal fa-envelope',
        },
      ],
    },
    {
      name: 'mainMenu',
      type: 'array',
      label: 'Menu Principal',
      defaultValue: [
        { label: 'Serviços', link: '/services' },
        { label: 'Estudos de Caso', link: '/projects' },
        { label: 'Metodologia', link: '/#metodologia' },
        { label: 'Publicações Técnicas', link: '/posts' },
        { label: 'Contato', link: '/contato' },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Rótulo',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link de Destino',
          required: true,
        },
      ],
      maxRows: 10,
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem de Fundo (Modelo Minimalista)',
    },
    {
      name: 'policyLinks',
      type: 'array',
      label: 'Governança e Políticas',
      defaultValue: [
        { label: 'Termos de Uso', link: '/termos-de-uso' },
        { label: 'Política de Privacidade', link: '/politica-de-privacidade' },
        { label: 'Governança de Dados', link: '/governanca' },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Rótulo',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link de Destino',
          required: true,
        },
      ],
      maxRows: 10,
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'social',
      type: 'array',
      label: 'Canais Oficiais',
      defaultValue: [
        { icon: 'fab fa-whatsapp', link: 'https://wa.me/5519993497819' },
        { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/company/squammata' },
        { icon: 'fab fa-github', link: 'https://github.com/Arthur-Nasa/Squammata-PayloadCMS' },
      ],
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Classe do Ícone',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link de Destino',
          required: true,
        },
      ],
      maxRows: 10,
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'footerLinks',
      type: 'array',
      label: 'Soluções Técnicas',
      defaultValue: [
        { label: 'Auditoria Fogo-Apagou', link: '/services' },
        { label: 'Modelagem de DRE', link: '/projects' },
        { label: 'Zeladoria de Infraestrutura', link: '/services' },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Rótulo',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link de Destino',
          required: true,
        },
      ],
      maxRows: 10,
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'locations',
      type: 'array',
      label: 'Unidades e Atendimento',
      defaultValue: [
        {
          title: 'Sede Operacional',
          address: 'Rua Coronel Quirino, 1200 - Cambuí, Campinas/SP, CEP 13025-002',
          phone: '+55 19 99349-7819',
        },
        {
          title: 'Atendimento Regional',
          address: 'Campinas e Região Metropolitana (RMC)',
          phone: '+55 19 99349-7819',
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título da Unidade',
          required: true,
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Endereço Completo',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Telefone / WhatsApp',
          required: true,
        },
      ],
      maxRows: 5,
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Direitos Autorais',
      defaultValue: '© 2026 Squammata Consultoria e Gestão de Projetos Ltda. Todos os direitos reservados. CNPJ sob consulta.',
    },
    {
      name: 'createdBy',
      type: 'text',
      label: 'Assinatura Técnica',
      defaultValue: 'Squammata | Engenharia de Operações & DRE',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
