import type { Block } from 'payload'
import { createButtonFields } from '@/fields/elementCustomization'

export const HeroOne: Block = {
  slug: 'hero_one',
  interfaceName: 'HeroOneBlock',
  fields: [
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem de Fundo',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Ícone (Ave Fogo-Apagou)',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtítulo',
      defaultValue: 'Consultoria em Gestão de Projetos e Engenharia de E-commerce',
    },
    {
      name: 'title_line1',
      type: 'text',
      label: 'Título (Linha 1)',
      defaultValue: 'Estrutura Operacional Firme.',
    },
    {
      name: 'title_line2',
      type: 'text',
      label: 'Título (Linha 2)',
      defaultValue: 'Margem Real no DRE.',
    },
    {
      name: 'title_line3',
      type: 'text',
      label: 'Título (Linha 3 com opacidade)',
      defaultValue: 'Tecnologia Sem Ilusão.',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição',
      defaultValue: 'Ajudamos pequenas e médias empresas do interior paulista a estruturar operações lucrativas, eliminando gargalos em sistemas, estoque e controladoria.',
    },
    ...createButtonFields({
      prefix: 'button1',
      label: 'Botão 1',
      defaultText: 'Conhecer Soluções',
      defaultUrl: '/services',
      defaultColor: 'terracota',
      defaultRadius: 'default',
    }),
    ...createButtonFields({
      prefix: 'button2',
      label: 'Botão 2',
      defaultText: 'Estudos de Caso',
      defaultUrl: '/projects',
      defaultColor: 'cafe',
      defaultRadius: 'default',
    }),
    {
      name: 'counter1_upper',
      type: 'text',
      label: 'Contador 1 (Texto Superior)',
      defaultValue: 'Volume Transacionado',
    },
    {
      name: 'counter1_lower',
      type: 'text',
      label: 'Contador 1 (Texto Inferior)',
      defaultValue: 'Auditado',
    },
    {
      name: 'counter1_value',
      type: 'text',
      label: 'Contador 1 (Valor)',
      defaultValue: 'R$ 54M',
    },
    {
      name: 'counter2_upper',
      type: 'text',
      label: 'Contador 2 (Texto Superior)',
      defaultValue: 'Ganho Médio em',
    },
    {
      name: 'counter2_lower',
      type: 'text',
      label: 'Contador 2 (Texto Inferior)',
      defaultValue: 'Margem Operacional',
    },
    {
      name: 'counter2_value',
      type: 'text',
      label: 'Contador 2 (Valor)',
      defaultValue: '+26.4',
    },
  ],
  labels: {
    plural: 'Hero Principal',
    singular: 'Hero Principal',
  },
}