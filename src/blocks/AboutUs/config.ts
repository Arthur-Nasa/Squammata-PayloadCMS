import type { Block } from 'payload'

export const AboutUs: Block = {
  slug: 'about_us',
  interfaceName: 'AboutUsBlock',
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      defaultValue: 'Manifesto Squammata',
    },
    {
      name: 'title',
      type: 'textarea',
      label: 'Título (use <br> para quebra de linha ou span com class="mil-c-m-2")',
      defaultValue: 'Origem na Roça Paulista. <br><span class="mil-c-m-2">Eficiência Sem Ilusão.</span>',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição',
      defaultValue: 'A ave Columbina squammata, conhecida no interior como fogo-apagou, guia nossa conduta. Apagamos incêndios operacionais e fiscais de pequenas e médias empresas com método e discrição. Rejeitamos promessas fáceis de enriquecimento rápido para focar na margem real do DRE.',
    },
    {
      name: 'portrait',
      type: 'upload',
      relationTo: 'media',
      label: 'Retrato do Fundador',
    },
    {
      name: 'founder_name',
      type: 'text',
      label: 'Nome do Fundador',
      defaultValue: 'Arthur Saggioratto',
    },
    {
      name: 'founder_role',
      type: 'text',
      label: 'Função do Fundador',
      defaultValue: 'Fundador & Consultor de Estratégia',
    },
    {
      name: 'founder_quote',
      type: 'textarea',
      label: 'Citação do Fundador',
      defaultValue: 'O fogo-apagou só canta protegido na folhagem. Não buscamos holofotes nem vaidade em redes sociais; nossa marca só aparece através do resultado financeiro de nossos clientes.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem Lateral',
    },
  ],
  labels: {
    plural: 'Sobre Nós / Manifesto',
    singular: 'Sobre Nós / Manifesto',
  },
}