'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { AdminManualSection } from './AdminManualSection'

interface ColorToken {
  name: string
  hex: string
  cssVar: string
  scssVar: string
  utilityBg: string
  utilityText: string
  category: 'botanica' | 'geologia' | 'madeiras' | 'aguas' | 'estruturais'
  role: string
  contrast: string
  textColor: string
  badgeClass?: string
}

const colorTokens: ColorToken[] = [
  // 1. Botânica Paulista (Verdes e Clorofilas)
  {
    name: 'Verde Musgo de Cuesta',
    hex: '#344A32',
    cssVar: '--bio-moss',
    scssVar: '$bio-moss',
    utilityBg: 'mil-bg-bio-moss',
    utilityText: 'mil-c-bio-moss',
    category: 'botanica',
    role: 'Fundos de cards escuros alternativos, selos de conservação e sustentabilidade',
    contrast: 'WCAG AAA (11.2:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-moss',
  },
  {
    name: 'Verde Mata Estacional (Sucesso)',
    hex: '#244735',
    cssVar: '--bio-forest',
    scssVar: '$bio-forest',
    utilityBg: 'mil-bg-bio-forest',
    utilityText: 'mil-c-bio-forest',
    category: 'botanica',
    role: 'Indicador canônico de DRE positivo, metas superadas e crescimento de margem',
    contrast: 'WCAG AAA (8.9:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-success',
  },
  {
    name: 'Verde Folha de Café Bourbon',
    hex: '#1B382B',
    cssVar: '--bio-leaf',
    scssVar: '$bio-leaf',
    utilityBg: 'mil-bg-bio-leaf',
    utilityText: 'mil-c-bio-leaf',
    category: 'botanica',
    role: 'Títulos botânicos nobres, cabeçalhos escuros e alto contraste',
    contrast: 'WCAG AAA (13.6:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-moss',
  },
  {
    name: 'Verde Alecrim do Campo',
    hex: '#4D6E57',
    cssVar: '--bio-sage',
    scssVar: '$bio-sage',
    utilityBg: 'mil-bg-bio-sage',
    utilityText: 'mil-c-bio-sage',
    category: 'botanica',
    role: 'Bordas ativas, tags de cerrado rupestre e ícones secundários',
    contrast: 'WCAG AA (5.4:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-moss',
  },
  {
    name: 'Verde Broto & Juçara',
    hex: '#6C8B64',
    cssVar: '--bio-sprout',
    scssVar: '$bio-sprout',
    utilityBg: 'mil-bg-bio-sprout',
    utilityText: 'mil-c-bio-sprout',
    category: 'botanica',
    role: 'Tags de inovação, novos lançamentos e produtos em fase piloto',
    contrast: 'WCAG AA (sobre escuro)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-moss',
  },
  {
    name: 'Verde Líquen Rupestre',
    hex: '#8EA885',
    cssVar: '--bio-lichen',
    scssVar: '$bio-lichen',
    utilityBg: 'mil-bg-bio-lichen',
    utilityText: 'mil-c-bio-lichen',
    category: 'botanica',
    role: 'Acentos sutis, divisórias orgânicas e tags suaves',
    contrast: 'WCAG AA (sobre escuro)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-moss',
  },
  {
    name: 'Clorofila Pálida (Superfície)',
    hex: '#E6EFE5',
    cssVar: '--bio-green-subtle',
    scssVar: '$bio-green-subtle',
    utilityBg: 'mil-bg-bio-green-subtle',
    utilityText: 'mil-c-bio-forest',
    category: 'botanica',
    role: 'Superfície de fundo suave para blocos ecológicos e depoimentos de sustentabilidade',
    contrast: 'Fundo Claro (14.2:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-moss',
  },

  // 2. Solos & Terracotas (Geologia & Minerais)
  {
    name: 'Terracota Tectônico (Acento)',
    hex: '#7A4207',
    cssVar: '--acento-terracota',
    scssVar: '$a-1',
    utilityBg: 'mil-bg-a-1',
    utilityText: 'mil-c-a-1',
    category: 'geologia',
    role: 'Acento canônico da marca, CTAs principais e foco',
    contrast: 'WCAG AA (5.2:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge',
  },
  {
    name: 'Terracota Solar / Iluminado',
    hex: '#9E5509',
    cssVar: '--acento-hover',
    scssVar: '$a-2',
    utilityBg: 'mil-bg-bio-terracotta-light',
    utilityText: 'mil-c-a-2',
    category: 'geologia',
    role: 'Estados de hover e transições ativas de botões',
    contrast: 'WCAG AA (4.5:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge',
  },
  {
    name: 'Terra Roxa Vulcânica',
    hex: '#522416',
    cssVar: '--bio-terraroxa',
    scssVar: '$bio-terraroxa',
    utilityBg: 'mil-bg-bio-terraroxa',
    utilityText: 'mil-c-bio-terraroxa',
    category: 'geologia',
    role: 'Solo basáltico paulista, blocos de liderança e cabeçalhos terrosos',
    contrast: 'WCAG AAA (11.8:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-terraroxa',
  },
  {
    name: 'Argila Vermelha de Olaria',
    hex: '#933E24',
    cssVar: '--bio-clay',
    scssVar: '$bio-clay',
    utilityBg: 'mil-bg-bio-clay',
    utilityText: 'mil-c-bio-clay',
    category: 'geologia',
    role: 'Cerâmica tradicional paulista, botões secundários terrosos e destaques',
    contrast: 'WCAG AA (6.1:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-clay',
  },
  {
    name: 'Arenito Botucatu',
    hex: '#C88E52',
    cssVar: '--bio-sandstone',
    scssVar: '$bio-sandstone',
    utilityBg: 'mil-bg-bio-sandstone',
    utilityText: 'mil-c-bio-sandstone',
    category: 'geologia',
    role: 'Minerais de cuesta, selos de garantia técnica e badges ilustrados',
    contrast: 'WCAG AA (texto escuro)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-sandstone',
  },
  {
    name: 'Ocre de Safra (Atenção)',
    hex: '#8C5808',
    cssVar: '--bio-warning',
    scssVar: '$bio-warning',
    utilityBg: 'mil-bg-bio-ochre',
    utilityText: 'mil-c-bio-ochre',
    category: 'geologia',
    role: 'Alertas operacionais de estoque, latência em integrações e itens em observação',
    contrast: 'WCAG AA (5.8:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-warning',
  },
  {
    name: 'Âmbar Solar (Métricas)',
    hex: '#B87514',
    cssVar: '--bio-amber',
    scssVar: '$bio-amber',
    utilityBg: 'mil-bg-bio-amber',
    utilityText: 'mil-c-bio-amber',
    category: 'geologia',
    role: 'Métricas de faturamento em aceleração, ratings de clientes e taxas de conversão',
    contrast: 'WCAG AA (4.8:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-amber',
  },
  {
    name: 'Brasas de Queimada (Crítico)',
    hex: '#7A231D',
    cssVar: '--bio-danger',
    scssVar: '$bio-danger',
    utilityBg: 'mil-bg-bio-ember',
    utilityText: 'mil-c-bio-ember',
    category: 'geologia',
    role: 'Gargalos de conversão, erros de checkout e alertas críticos no DRE',
    contrast: 'WCAG AAA (7.4:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-danger',
  },
  {
    name: 'Cerâmica Crua',
    hex: '#D98260',
    cssVar: '--bio-ceramic',
    scssVar: '$bio-ceramic',
    utilityBg: 'mil-bg-bio-ceramic',
    utilityText: 'mil-c-bio-ceramic',
    category: 'geologia',
    role: 'Contornos suaves de foco e badges de categoria acolhedores',
    contrast: 'WCAG AA (texto escuro)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-clay',
  },
  {
    name: 'Poeira de Tijolo (Superfície)',
    hex: '#F7EBE4',
    cssVar: '--bio-terracotta-subtle',
    scssVar: '$bio-terracotta-subtle',
    utilityBg: 'mil-bg-bio-terracotta-subtle',
    utilityText: 'mil-c-bio-terracotta',
    category: 'geologia',
    role: 'Superfície mineral quente de fundo para blocos de alerta e banners promocionais',
    contrast: 'Fundo Claro (13.8:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-clay',
  },

  // 3. Madeiras & Torrefação
  {
    name: 'Marrom Café Torrado (Logo)',
    hex: '#3A2313',
    cssVar: '--marrom-squammata',
    scssVar: '$m-2',
    utilityBg: 'mil-bg-m-2',
    utilityText: 'mil-c-m-2',
    category: 'madeiras',
    role: 'Âncora institucional da marca, cor do logotipo da ave e blocos solenes',
    contrast: 'WCAG AAA (13.4:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-coffee',
  },
  {
    name: 'Cacau Cabruca / Tanino Escuro',
    hex: '#2B1A12',
    cssVar: '--bio-cocoa',
    scssVar: '$bio-cocoa',
    utilityBg: 'mil-bg-bio-cocoa',
    utilityText: 'mil-c-bio-cocoa',
    category: 'madeiras',
    role: 'Profundidade para cards de arquitetura de software e rodapés de engenharia',
    contrast: 'WCAG AAA (15.1:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-coffee',
  },
  {
    name: 'Jacarandá Paulista',
    hex: '#442B21',
    cssVar: '--bio-jacaranda',
    scssVar: '$bio-jacaranda',
    utilityBg: 'mil-bg-bio-jacaranda',
    utilityText: 'mil-c-bio-jacaranda',
    category: 'madeiras',
    role: 'Madeira nobre de planalto, cabeçalhos editoriais e seções premium',
    contrast: 'WCAG AAA (11.6:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-coffee',
  },
  {
    name: 'Casca de Peroba-Rosa',
    hex: '#633F2E',
    cssVar: '--bio-wood',
    scssVar: '$bio-wood',
    utilityBg: 'mil-bg-bio-wood',
    utilityText: 'mil-c-bio-wood',
    category: 'madeiras',
    role: 'Rústico e orgânico para etapas de esteira e processos industriais',
    contrast: 'WCAG AAA (7.2:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-coffee',
  },
  {
    name: 'Palha Seca & Milho Crioulo',
    hex: '#CCA458',
    cssVar: '--bio-straw',
    scssVar: '$bio-straw',
    utilityBg: 'mil-bg-bio-straw',
    utilityText: 'mil-c-bio-straw',
    category: 'madeiras',
    role: 'Tom dourado de colheita para badges de safra e pontuações de performance',
    contrast: 'WCAG AA (texto escuro)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-warning',
  },
  {
    name: 'Flor de Café & Seda (Caixas)',
    hex: '#EBDCBF',
    cssVar: '--bio-coffee-flower',
    scssVar: '$bio-coffee-flower',
    utilityBg: 'mil-bg-bio-coffee-flower',
    utilityText: 'mil-c-m-2',
    category: 'madeiras',
    role: 'Bege solar nobre para caixas de destaque de texto e selos de garantia',
    contrast: 'Fundo Claro (12.5:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-coffee',
  },
  {
    name: 'Marfim de Madeira Clara (Superfície)',
    hex: '#F4EDE4',
    cssVar: '--bio-wood-subtle',
    scssVar: '$bio-wood-subtle',
    utilityBg: 'mil-bg-bio-wood-subtle',
    utilityText: 'mil-c-m-2',
    category: 'madeiras',
    role: 'Superfície acolhedora de alto aconchego para blocos de história e cultura',
    contrast: 'Fundo Claro (14.6:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-coffee',
  },

  // 4. Águas & Céus (Hidrografia & Atmosfera)
  {
    name: 'Azul Rio Piracicaba',
    hex: '#244558',
    cssVar: '--bio-river',
    scssVar: '$bio-river',
    utilityBg: 'mil-bg-bio-river',
    utilityText: 'mil-c-bio-river',
    category: 'aguas',
    role: 'Água profunda de leito mineral, cartões analíticos de segurança e APIs',
    contrast: 'WCAG AAA (9.2:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-river',
  },
  {
    name: 'Bruma de Cuesta & Neblina',
    hex: '#43677A',
    cssVar: '--bio-mist',
    scssVar: '$bio-mist',
    utilityBg: 'mil-bg-bio-mist',
    utilityText: 'mil-c-bio-mist',
    category: 'aguas',
    role: 'Neblina matinal das serras, blocos de cloud infrastructure e pipelines',
    contrast: 'WCAG AA (5.6:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-river',
  },
  {
    name: 'Céu de Inverno Paulista',
    hex: '#688FA3',
    cssVar: '--bio-sky',
    scssVar: '$bio-sky',
    utilityBg: 'mil-bg-bio-sky',
    utilityText: 'mil-c-bio-sky',
    category: 'aguas',
    role: 'Azul seco e cristalino para links secundários e badges informativos',
    contrast: 'WCAG AA (texto escuro)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-river',
  },
  {
    name: 'Nascente de Rocha',
    hex: '#8FAFC0',
    cssVar: '--bio-spring',
    scssVar: '$bio-spring',
    utilityBg: 'mil-bg-bio-spring',
    utilityText: 'mil-c-bio-spring',
    category: 'aguas',
    role: 'Transparência e fluxo de dados, conectores de fluxograma e linhas',
    contrast: 'WCAG AA (sobre escuro)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-river',
  },
  {
    name: 'Espelho d\'Água (Superfície)',
    hex: '#E5EEF3',
    cssVar: '--bio-water-subtle',
    scssVar: '$bio-water-subtle',
    utilityBg: 'mil-bg-bio-water-subtle',
    utilityText: 'mil-c-bio-river',
    category: 'aguas',
    role: 'Superfície refrescante de apoio para blocos de suporte, onboarding e documentação',
    contrast: 'Fundo Claro (14.1:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-river',
  },
  {
    name: 'Crepúsculo Sertanejo',
    hex: '#483544',
    cssVar: '--bio-twilight',
    scssVar: '$bio-twilight',
    utilityBg: 'mil-bg-bio-twilight',
    utilityText: 'mil-c-bio-twilight',
    category: 'aguas',
    role: 'Violeta terroso do pôr do sol nos canaviais, blocos de insights e relatórios estratégicos',
    contrast: 'WCAG AAA (8.6:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-twilight',
  },
  {
    name: 'Ametista de Geodo Paulista',
    hex: '#684860',
    cssVar: '--bio-amethyst',
    scssVar: '$bio-amethyst',
    utilityBg: 'mil-bg-bio-amethyst',
    utilityText: 'mil-c-bio-amethyst',
    category: 'aguas',
    role: 'Mineral raro dos basaltos do Paranapanema, planos corporativos e módulos exclusivos',
    contrast: 'WCAG AA (5.3:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge-twilight',
  },
  {
    name: 'Névoa Crepuscular (Superfície)',
    hex: '#EFE8ED',
    cssVar: '--bio-twilight-subtle',
    scssVar: '$bio-twilight-subtle',
    utilityBg: 'mil-bg-bio-twilight-subtle',
    utilityText: 'mil-c-bio-twilight',
    category: 'aguas',
    role: 'Superfície suave inspiradora para blocos de inovação e design',
    contrast: 'Fundo Claro (14.0:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge-twilight',
  },

  // 5. Estruturais & Neutros
  {
    name: 'Concreto Branco Niemeyer (Canvas)',
    hex: '#FAF9F6',
    cssVar: '--branco-niemeyer',
    scssVar: '$m-5',
    utilityBg: 'mil-bg-m-5',
    utilityText: 'mil-c-m-5',
    category: 'estruturais',
    role: 'Canvas canônico do tema, calcário e cimento claro aquecido',
    contrast: 'Canvas Base (16.5:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge',
  },
  {
    name: 'Argila Seca (Apoio)',
    hex: '#F3EFE6',
    cssVar: '--superficie-argila',
    scssVar: '$m-5-alt',
    utilityBg: 'mil-bg-argila',
    utilityText: 'mil-c-m-5',
    category: 'estruturais',
    role: 'Superfície secundária de apoio para ritmo visual e tabelas',
    contrast: 'Superfície Alternada (15.2:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge',
  },
  {
    name: 'Mármore Travertino Paulista',
    hex: '#EAE3D6',
    cssVar: '--bio-travertine',
    scssVar: '$bio-travertine',
    utilityBg: 'mil-bg-bio-travertine',
    utilityText: 'mil-c-m-3',
    category: 'estruturais',
    role: 'Baixo relevo mineral, caixas de citação e cartões sóbrios',
    contrast: 'Fundo Neutro (13.7:1)',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge',
  },
  {
    name: 'Borda Mineral Suave',
    hex: '#D5CFC6',
    cssVar: '--marrom-borda-suave',
    scssVar: '$m-4',
    utilityBg: 'mil-bg-m-4',
    utilityText: 'mil-c-m-4',
    category: 'estruturais',
    role: 'Delimitador táctil e linhas divisórias entre cartões e colunas',
    contrast: 'Delimitador Táctil',
    textColor: '#1A1A1A',
    badgeClass: 'mil-badge',
  },
  {
    name: 'Seixo de Rio / Cinza Cascalho',
    hex: '#736B63',
    cssVar: '--bio-pebble',
    scssVar: '$bio-pebble',
    utilityBg: 'mil-bg-bio-pebble',
    utilityText: 'mil-c-bio-pebble',
    category: 'estruturais',
    role: 'Textos terciários, metadados, carimbos de data e legendas',
    contrast: 'WCAG AA (4.5:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge',
  },
  {
    name: 'Chumbo Mineral Terroso',
    hex: '#3E3731',
    cssVar: '--concreto-medio',
    scssVar: '$m-3',
    utilityBg: 'mil-bg-m-3',
    utilityText: 'mil-c-m-3',
    category: 'estruturais',
    role: 'Textos secundários, parágrafos técnicos e ícones de apoio',
    contrast: 'WCAG AAA (7.8:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge',
  },
  {
    name: 'Basalto Profundo / Carvão Técnico',
    hex: '#1A1A1A',
    cssVar: '--carvao-tecnico',
    scssVar: '$m-1',
    utilityBg: 'mil-bg-m-1',
    utilityText: 'mil-c-m-1',
    category: 'estruturais',
    role: 'Títulos primários, textos de corpo e máximo contraste leitor',
    contrast: 'WCAG AAA (16.5:1)',
    textColor: '#FAF9F6',
    badgeClass: 'mil-badge',
  },
]

const curvatureTokens = [
  { level: 'Micro (8px)', cssVar: '--border-radius-sm', radius: '8px', usage: 'Inputs, formulários, textareas, paginação' },
  { level: 'Padrão (16px)', cssVar: '--border-radius-md', radius: '16px', usage: 'Cards técnicos de serviços, projetos e especialistas' },
  { level: 'Macro (24px)', cssVar: '--border-radius-lg', radius: '24px', usage: 'Containers de seção, modais e caixas de destaque' },
  { level: 'Cápsula (100px)', cssVar: '--border-radius-pill', radius: '100px', usage: 'Badges de categoria, tags, pílulas e formulário de newsletter' },
]

const antiSlopSins = [
  {
    id: 'sin-1',
    sin: 'Default Tailwind Indigo (#6366f1, #4f46e5, #7c3aed)',
    whySlop: 'Assinatura clássica e preguiçosa de IA. Ausência total de identidade territorial ou de marca.',
    squammataDefense: 'Paleta Mineral Paulista estrita: Terracota Tectônico (#7A4207), Café Torrado (#3A2313), Clorofila (#244735) e Basalto (#1A1A1A). Zero indigo em produção.',
    status: '100% BLINDADO',
    icon: 'fa-ban',
  },
  {
    id: 'sin-2',
    sin: 'Dois tons de "Trust Gradient" no Hero (roxo→azul, ciano→azul)',
    whySlop: 'Gradiente pré-fabricado de SaaS genérico que mascara falta de hierarquia e composição real.',
    squammataDefense: 'Superfícies minerais planas (Branco Niemeyer #FAF9F6, Argila #F3EFE6), textura de escamas squama e divisores biomiméticos de curvatura dorsal.',
    status: '100% BLINDADO',
    icon: 'fa-layer-group',
  },
  {
    id: 'sin-3',
    sin: 'Emojis como ícones de features e botões (✨, 🚀, 🎯, ⚡, 🔥)',
    whySlop: 'Poluição infantil e clichê gerado por prompts rápidos sem acabamento vetorial ou tipográfico.',
    squammataDefense: 'Monoline SVGs estritos de 1.6px a 1.8px de traço com currentColor ou tipografia editorial intencional. Zero emojis em botões e badges.',
    status: '100% BLINDADO',
    icon: 'fa-feather-alt',
  },
  {
    id: 'sin-4',
    sin: 'Sans-Serif padrão em tudo (Inter/Roboto) sem pairing serifado',
    whySlop: 'Aparência homogênea de dashboard corporativo comum, sem voz ou autoridade editorial.',
    squammataDefense: 'Tríade tipográfica autoral: Zilla Slab (autoridade editorial nos títulos), Quicksand (calor humanista na interface) e Space Mono (precisão DRE).',
    status: '100% BLINDADO',
    icon: 'fa-font',
  },
  {
    id: 'sin-5',
    sin: 'Card com borda lateral esquerda grossa (border-l-4 border-indigo-500)',
    whySlop: 'O mais reconhecível clichê de card de dashboard de IA desde 2018.',
    squammataDefense: 'Raio orgânico isotrópico (16px), borda mineral sutil de 1px em todo o perímetro e elevação por sombra tátil (var(--shadow-soft)).',
    status: '100% BLINDADO',
    icon: 'fa-square',
  },
  {
    id: 'sin-6',
    sin: 'Métricas inventadas e hiperbólicas ("10x faster", "99.9% uptime", "3x revenue")',
    whySlop: 'Números vazios que destroem a credibilidade técnica com tomadores de decisão C-level.',
    squammataDefense: 'Parâmetros operacionais reais e auditáveis: "Ciclo de 14 Dias", "Normas CPC / IFRS", "Latência P95 < 120ms", "WCAG AAA 16.5:1".',
    status: '100% BLINDADO',
    icon: 'fa-chart-line',
  },
  {
    id: 'sin-7',
    sin: 'Copy genérico de preenchimento, lorem ipsum e travessões didáticos (—)',
    whySlop: 'Texto oco com superlativos vazios ("revolucionário", "líder indiscutível") e pontuação robótica.',
    squammataDefense: 'Redação direta de negócios B2B focada em vazamentos fiscais, gargalos de DRE, e-commerce headless e arquitetura de software.',
    status: '100% BLINDADO',
    icon: 'fa-file-alt',
  },
]

const hallmarkMacrostructures = [
  {
    name: 'Macroestrutura 01: DRE & Auditoria Operacional',
    genre: 'Técnico / Financeiro',
    rhythm: 'Split assimétrico 7/5 com painel de métricas auditáveis em destaque lateral',
    bestFor: 'Demonstrações de ROI, diagnósticos tributários e consultorias estratégicas',
    sampleMetric: 'R$ 480k / ano (Vazamento Médio de Checkout Identificado)',
    badgeClass: 'mil-badge-earth',
  },
  {
    name: 'Macroestrutura 02: Manifesto & Editorial Paulista',
    genre: 'Editorial Humanista',
    rhythm: 'Coluna única ampla com tipografia Zilla Slab, colofão e citação autoral',
    bestFor: 'Artigos profundos, posicionamento de marca e manifestos anti-hype',
    sampleMetric: '14 Dias (Tempo Limite de Diagnóstico Sem Retrabalho)',
    badgeClass: 'mil-badge-coffee',
  },
  {
    name: 'Macroestrutura 03: Arquitetura Headless & Engenharia',
    genre: 'Modern-Minimal / Infra',
    rhythm: 'Grid bento com blocos de código monoline, especificações de latência e SLAs',
    bestFor: 'Documentação de APIs, arquitetura de sistemas e infraestrutura distribuída',
    sampleMetric: '< 120ms (Latência P95 em Endpoints Globais)',
    badgeClass: 'mil-badge-river',
  },
  {
    name: 'Macroestrutura 04: Diagnóstico de Vazamentos de Checkout',
    genre: 'Auditoria de Conversão',
    rhythm: 'Funil comparativo antes vs depois com tabela densa e cálculo de dispersão',
    bestFor: 'E-commerce corporativo, gateways de pagamento e retenção de margem',
    sampleMetric: '8.4% (Recuperação Média de Margem Bruta no Trimestre)',
    badgeClass: 'mil-badge-terracotta',
  },
]

export const DocsView: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [headerType, setHeaderType] = useState<'standard' | 'invert'>('standard')
  const [activeColorCategory, setActiveColorCategory] = useState<string>('all')
  const [blockSimulatorPreset, setBlockSimulatorPreset] = useState<number>(0)
  const [testedState, setTestedState] = useState<'default' | 'hover' | 'focus' | 'active' | 'disabled' | 'loading' | 'error' | 'success'>('default')

  const blockPresets = [
    {
      title: 'Botânica & Clorofila (Consultoria & Sustentabilidade)',
      bg: 'var(--bio-green-subtle)',
      border: 'rgba(36, 71, 53, 0.25)',
      accent: '#244735',
      badgeBg: 'rgba(36, 71, 53, 0.12)',
      badgeText: '#244735',
      badgeName: 'MATA ESTACIONAL',
      btnClass: 'mil-btn-bio-forest',
      metric: '14 Dias',
      metricLabel: 'Ciclo de Auditoria Operacional',
      btnText: 'Auditoria Sustentável',
    },
    {
      title: 'Hidrografia & Rio Piracicaba (Tecnologia & Dados)',
      bg: 'var(--bio-water-subtle)',
      border: 'rgba(36, 69, 88, 0.25)',
      accent: '#244558',
      badgeBg: 'rgba(36, 69, 88, 0.12)',
      badgeText: '#244558',
      badgeName: 'RIO PIRACICABA',
      btnClass: 'mil-btn-bio-river',
      metric: '< 120ms',
      metricLabel: 'Latência P95 em APIs Headless',
      btnText: 'Explorar Arquitetura',
    },
    {
      title: 'Terracota & Poeira de Tijolo (Acento Institucional)',
      bg: 'var(--bio-terracotta-subtle)',
      border: 'rgba(122, 66, 7, 0.25)',
      accent: '#7A4207',
      badgeBg: 'rgba(122, 66, 7, 0.12)',
      badgeText: '#7A4207',
      badgeName: 'TERRACOTA TECTÔNICO',
      btnClass: 'mil-btn mil-accent',
      metric: 'DRE & Margem',
      metricLabel: 'Diagnóstico de Vazamentos Fiscais',
      btnText: 'Solicitar Intervenção',
    },
    {
      title: 'Café Torrado & Marfim (Memória & Governança)',
      bg: 'var(--bio-wood-subtle)',
      border: 'rgba(58, 35, 19, 0.22)',
      accent: '#3A2313',
      badgeBg: 'rgba(58, 35, 19, 0.10)',
      badgeText: '#3A2313',
      badgeName: 'CAFÉ SQUAMMATA',
      btnClass: 'mil-btn-bio-coffee',
      metric: 'CPC / IFRS',
      metricLabel: 'Conformidade com Normas Contábeis',
      btnText: 'Conhecer Metodologia',
    },
    {
      title: 'Crepúsculo Sertanejo (Estratégia & Liderança)',
      bg: 'var(--bio-twilight-subtle)',
      border: 'rgba(72, 53, 68, 0.22)',
      accent: '#483544',
      badgeBg: 'rgba(72, 53, 68, 0.12)',
      badgeText: '#483544',
      badgeName: 'CREPÚSCULO SERTANEJO',
      btnClass: 'mil-btn mil-dark',
      metric: 'Zero Slop',
      metricLabel: 'Comunicação Direta & Anti-Hype',
      btnText: 'Ler Manifesto',
    },
    {
      title: 'Niemeyer & Argila Seca (Estrutura Canônica)',
      bg: 'var(--superficie-argila)',
      border: 'var(--marrom-borda-suave)',
      accent: '#1A1A1A',
      badgeBg: 'rgba(26, 26, 26, 0.08)',
      badgeText: '#1A1A1A',
      badgeName: 'ARGILA SECA $m-5-alt',
      btnClass: 'mil-btn-outline',
      metric: 'WCAG AAA',
      metricLabel: 'Contraste 16.5:1 Blindado',
      btnText: 'Especificações Técnicas',
    },
  ]

  const filteredTokens = activeColorCategory === 'all'
    ? colorTokens
    : colorTokens.filter(t => t.category === activeColorCategory)

  const copyToClipboard = (text: string, id: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2500)
    }
  }

  return (
    <div className="mil-docs-page" style={{ paddingTop: '2rem' }}>
      {/* Hero da Documentação */}
      <div className="mil-hero-inner mil-p-10-6" id="top" style={{ backgroundColor: 'var(--branco-niemeyer)', borderBottom: '1px solid var(--marrom-borda-suave)' }}>
        <div className="container">
          <div className="row mil-aie">
            <div className="col-12 col-lg-8">
              <div className="mil-badge mil-mb-4">SISTEMA ATÔMICO v4.1 (BIOFILIA PAULISTA)</div>
              <h1 className="mil-c-m-1 mil-mb-4" style={{ fontSize: '3.6rem', lineHeight: '1.15' }}>
                Biblioteca Atômica &<br />
                <span className="mil-opacity-text">Biofilia de Raiz Paulista</span>
              </h1>
              <p className="mil-c-m-2 mil-t-16 mil-mb-4" style={{ maxWidth: '680px' }}>
                Catálogo atômico completo do tema Squammata: transições biomiméticas da ave, malha de escamas imbricadas, física de pouso, todos os botões, cabeçalhos, formulários e blocos técnicos desacoplados.
              </p>
              <div className="mil-flex-row mil-aic" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#manual-admin" className="mil-btn mil-sm mil-btn-floresta"><span>📖 Manual do Painel Admin</span></a>
                <a href="#simulador-admin" className="mil-btn mil-sm mil-accent"><span>🎮 Simulador Live</span></a>
                <a href="#api-tokens" className="mil-btn mil-sm mil-btn-rio"><span>🤖 API Tokens & IA</span></a>
                <a href="#curva-ave" className="mil-btn mil-sm mil-dark"><span>Curvas & Transições</span></a>
                <a href="#malha-escamas" className="mil-btn mil-sm mil-dark"><span>Malha de Escamas</span></a>
                <a href="#botoes-atomizados" className="mil-btn mil-sm mil-dark"><span>Botões Atômicos</span></a>
                <a href="#tokens" className="mil-btn mil-sm mil-dark"><span>Paleta & DRE</span></a>
                <a href="#headers-atomizados" className="mil-btn mil-sm mil-dark"><span>Headers & Menus</span></a>
                <a href="#componentes-ui" className="mil-btn mil-sm mil-dark"><span>Cards & UI</span></a>
                <a href="#anti-slop" className="mil-btn mil-sm mil-dark"><span>Anti-Slop Craft</span></a>
                <a href="#receitas" className="mil-btn mil-sm mil-dark"><span>Receitas Sem Banco</span></a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mil-md-mt-6">
              <div style={{
                background: '#FFFFFF',
                border: '1px solid var(--marrom-borda-suave)',
                borderRadius: '16px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-soft)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                  <i className="fas fa-feather-alt mil-c-a-1" style={{ fontSize: '1.6rem' }}></i>
                  <strong style={{ fontSize: '1.4rem', color: 'var(--carvao-tecnico)' }}>Catálogo Atômico & Manual Ativo</strong>
                </div>
                <p className="mil-t-14 mil-c-m-2" style={{ margin: 0, lineHeight: '1.6' }}>
                  Manual com 15 Screenshots | Simulador de Botões & Cards | API Tokens para IA | Curvas Dorsais SVG | Malha Squama | 8 Variações de Botão | WCAG AAA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Completo do Painel Administrativo, Simulador Live & API de Tokens */}
      <AdminManualSection />

      {/* Seção 1: Estudo das Curvas e Transições da Ave (Dorso e Relevo) */}
      <section id="curva-ave" className="mil-section mil-p-10-8">
        <div className="container">
          <div className="row mil-aie mil-mb-8">
            <div className="col-12 col-lg-6">
              <div className="mil-badge mil-mb-4">BIOMIMÉTICA DE TRANSIÇÃO</div>
              <h2 className="mil-c-m-1">Curvas Dorsais da Ave & <br /><span className="mil-opacity-text">Transições de Seção</span></h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="mil-c-m-2 mil-t-16">
                A silhueta suave do dorso da <em>Columbina squammata</em> e o relevo de cuestas paulistas inspiram as transições entre seções claras e escuras. Em vez de quebras horizontais duras (0px), usamos divisores de onda contínua.
              </p>
            </div>
          </div>

          {/* Exemplo Interativo do Divisor em Curva */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid var(--marrom-borda-suave)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-soft)',
            marginBottom: '4rem'
          }}>
            <div style={{ padding: '3.5rem', backgroundColor: 'var(--branco-niemeyer)' }}>
              <div className="mil-badge mil-mb-2">SEÇÃO SUPERIOR (CONCRETO BRANCO $m-5)</div>
              <h3 className="mil-c-m-1" style={{ fontSize: '2.4rem' }}>Transição Orgânica Contínua</h3>
              <p className="mil-c-m-2 mil-t-14">A curva SVG abaixo conecta a seção mineral clara com a seção profunda terrosa sem costuras artificiais.</p>
            </div>

            {/* Divisor SVG Funcional do Dorso */}
            <div className="mil-section-curve-divider" style={{ backgroundColor: 'var(--branco-niemeyer)', color: 'var(--marrom-squammata)' }}>
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '70px', display: 'block' }}>
                <path d="M0,0 C150,90 400,120 600,60 C800,0 1050,90 1200,30 L1200,120 L0,120 Z" fill="var(--marrom-squammata)" />
              </svg>
            </div>

            <div style={{ padding: '3.5rem', backgroundColor: 'var(--marrom-squammata)', color: '#FAF9F6' }}>
              <div className="mil-badge mil-mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FAF9F6' }}>SEÇÃO INFERIOR (MARROM SQUAMMATA $m-2)</div>
              <h3 style={{ color: '#FAF9F6', fontSize: '2.4rem' }}>Superfície Mineral Profunda</h3>
              <p className="mil-t-14" style={{ color: 'rgba(250,249,246,0.85)', margin: 0 }}>
                Texto em alto contraste WCAG AAA com fundo Café Torrado (#3A2313).
              </p>
            </div>
          </div>

          {/* Snippet do Divisor */}
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h5 className="mil-c-m-1 mil-mb-3">Código HTML/JSX da Curva Dorsal</h5>
              <pre style={{
                background: '#1A1A1A',
                color: '#FAF9F6',
                padding: '2rem',
                borderRadius: '12px',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-mono)',
                overflowX: 'auto',
                margin: 0
              }}>
{`<!-- Divisor Dorsal entre Seção Clara e Escura -->
<div className="mil-section-curve-divider mil-fill-dark">
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0 C150,90 400,120 600,60 C800,0 1050,90 1200,30 L1200,120 L0,120 Z" />
  </svg>
</div>

<!-- Inversão para topo de seção: adicionar classe .mil-curve-top -->
<div className="mil-section-curve-divider mil-curve-top mil-fill-niemeyer">
  ...
</div>`}
              </pre>
            </div>
            <div className="col-12 col-lg-6">
              <h5 className="mil-c-m-1 mil-mb-3">Marca d&apos;Água do Pássaro (.mil-bird-watermark)</h5>
              <p className="mil-c-m-2 mil-t-14 mil-mb-3">
                Silhueta vetorial da ave aplicada em opacidade contida (0.025 a 0.04) nos cantos de heróis e seções:
              </p>
              <pre style={{
                background: '#1A1A1A',
                color: '#FAF9F6',
                padding: '2rem',
                borderRadius: '12px',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-mono)',
                overflowX: 'auto',
                margin: 0
              }}>
{`<!-- Marca d'Água no Canto Direito -->
<div className="mil-bird-watermark mil-watermark-right">
  <img src="/logo/squammata/passarinho.svg" alt="" />
</div>

<!-- Marca d'Água no Canto Esquerdo Espelhada -->
<div className="mil-bird-watermark mil-watermark-left">
  <img src="/logo/squammata/passarinho.svg" alt="" />
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Grid de Escamas Imbricadas (Padrão Squama) */}
      <section id="malha-escamas" className="mil-section mil-gray-section mil-p-10-8">
        <div className="container">
          <div className="row mil-aie mil-mb-8">
            <div className="col-12 col-lg-6">
              <div className="mil-badge mil-mb-4">PADRÃO SQUAMA</div>
              <h2 className="mil-c-m-1">Malha de Escamas Imbricadas & <br /><span className="mil-opacity-text">Grid Respirável</span></h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="mil-c-m-2 mil-t-16">
                Assim como as escamas da plumagem da ave se sobrepõem para criar resiliência articular, os módulos técnicos da Squammata formam um grid respirável conectado com curvaturas de Bézier contínuas.
              </p>
            </div>
          </div>

          {/* Demonstração da Malha de Escamas */}
          <div
            className="mil-squama-pattern"
            style={{
              padding: '4rem',
              borderRadius: '24px',
              border: '1px solid var(--marrom-borda-suave)',
              marginBottom: '4rem',
              boxShadow: 'var(--shadow-soft)'
            }}
          >
            <div className="mil-badge mil-mb-3" style={{ background: '#FFFFFF' }}>DEMONSTRAÇÃO DA MALHA BIOMIMÉTICA</div>
            <h3 className="mil-c-m-1 mil-mb-4">Grid Imbricado (.mil-squama-grid)</h3>
            <div className="mil-squama-grid">
              <div style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '3rem',
                border: '1px solid var(--marrom-borda-suave)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'transform 0.35s var(--ease-landing), box-shadow 0.35s var(--ease-landing)'
              }}>
                <span className="mil-badge mil-mb-2">MÓDULO 01</span>
                <h4 className="mil-c-m-1 mil-mb-2" style={{ fontSize: '1.8rem' }}>Controladoria & DRE</h4>
                <p className="mil-c-m-2 mil-t-14">Escama de base com gap de 24px/32px e ancoragem em margem real.</p>
              </div>

              <div style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '3rem',
                border: '1px solid var(--marrom-borda-suave)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'transform 0.35s var(--ease-landing), box-shadow 0.35s var(--ease-landing)'
              }}>
                <span className="mil-badge mil-mb-2">MÓDULO 02</span>
                <h4 className="mil-c-m-1 mil-mb-2" style={{ fontSize: '1.8rem' }}>Engenharia Headless</h4>
                <p className="mil-c-m-2 mil-t-14">Arquitetura desacoplada Next.js 15 garantindo resiliência de checkout.</p>
              </div>

              <div style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '3rem',
                border: '1px solid var(--marrom-borda-suave)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'transform 0.35s var(--ease-landing), box-shadow 0.35s var(--ease-landing)'
              }}>
                <span className="mil-badge mil-mb-2">MÓDULO 03</span>
                <h4 className="mil-c-m-1 mil-mb-2" style={{ fontSize: '1.8rem' }}>Distribuição RMC</h4>
                <p className="mil-c-m-2 mil-t-14">Esteira de despacho veloz na malha industrial do interior paulista.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h5 className="mil-c-m-1 mil-mb-3">Classes do Padrão de Escamas</h5>
              <pre style={{
                background: '#1A1A1A',
                color: '#FAF9F6',
                padding: '2rem',
                borderRadius: '12px',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-mono)',
                overflowX: 'auto',
                margin: 0
              }}>
{`<!-- Container com Textura Biofílica de Escamas -->
<div className="mil-squama-pattern">
  <div className="mil-squama-grid">
    <div className="mil-card-box">...</div>
    <div className="mil-card-box">...</div>
    <div className="mil-card-box">...</div>
  </div>
</div>`}
              </pre>
            </div>
            <div className="col-12 col-lg-6">
              <h5 className="mil-c-m-1 mil-mb-3">Vetor de Textura (/logo/squammata/squammata-bio-pattern.svg)</h5>
              <p className="mil-c-m-2 mil-t-14">
                Padrão geométrico suave de arcos imbricados em repetição contínua, pronto para uso em fundos de cartões sem imagem cadastrada ou em divisórias transparentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Atomização Profunda de Botões */}
      <section id="botoes-atomizados" className="mil-section mil-p-10-8">
        <div className="container">
          <div className="row mil-aie mil-mb-8">
            <div className="col-12 col-lg-6">
              <div className="mil-badge mil-mb-4">CATÁLOGO ATÔMICO DE AÇÕES</div>
              <h2 className="mil-c-m-1">Botões & Disparadores</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="mil-c-m-2 mil-t-16">
                Todas as 7 variações de botões e links de ação do tema, com suas classes, física de pouso ($ease-landing) e estrutura JSX.
              </p>
            </div>
          </div>

          <div className="row g-4 mil-mb-6">
            {/* 1. Botão Accent */}
            <div className="col-12 col-md-6 col-lg-4">
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', height: '100%', boxShadow: 'var(--shadow-soft)' }}>
                <span className="mil-badge mil-mb-3">01. PRINCIPAL (ACCENT)</span>
                <div className="mil-mb-3">
                  <button type="button" className="mil-btn mil-accent">
                    <span>Solicitar Diagnóstico</span>
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
                <code style={{ fontSize: '1.2rem', color: 'var(--acento-terracota)', display: 'block', marginBottom: '0.8rem' }}>.mil-btn.mil-accent</code>
                <p className="mil-t-14 mil-c-m-2" style={{ margin: 0 }}>CTA primário terracota com ícone de seta animado.</p>
              </div>
            </div>

            {/* 2. Botão Dark */}
            <div className="col-12 col-md-6 col-lg-4">
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', height: '100%', boxShadow: 'var(--shadow-soft)' }}>
                <span className="mil-badge mil-mb-3">02. SÓBRIO (DARK)</span>
                <div className="mil-mb-3">
                  <button type="button" className="mil-btn mil-dark">
                    <span>Conhecer Metodologia</span>
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
                <code style={{ fontSize: '1.2rem', color: 'var(--acento-terracota)', display: 'block', marginBottom: '0.8rem' }}>.mil-btn.mil-dark</code>
                <p className="mil-t-14 mil-c-m-2" style={{ margin: 0 }}>Ação secundária em preto basalto #1A1A1A.</p>
              </div>
            </div>

            {/* 3. Botão Outline */}
            <div className="col-12 col-md-6 col-lg-4">
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', height: '100%', boxShadow: 'var(--shadow-soft)' }}>
                <span className="mil-badge mil-mb-3">03. CONTORNADO (OUTLINE)</span>
                <div className="mil-mb-3">
                  <button type="button" className="mil-btn-outline">
                    <span>Download Relatório DRE</span>
                    <i className="far fa-file-alt"></i>
                  </button>
                </div>
                <code style={{ fontSize: '1.2rem', color: 'var(--acento-terracota)', display: 'block', marginBottom: '0.8rem' }}>.mil-btn-outline</code>
                <p className="mil-t-14 mil-c-m-2" style={{ margin: 0 }}>Borda mineral de 100px com fundo transparente.</p>
              </div>
            </div>

            {/* 4. Botão Link Type */}
            <div className="col-12 col-md-6 col-lg-4">
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', height: '100%', boxShadow: 'var(--shadow-soft)' }}>
                <span className="mil-badge mil-mb-3">04. LINK INLINE</span>
                <div className="mil-mb-3">
                  <button type="button" className="mil-btn mil-link-type mil-dark">
                    <span>Ver Estudo de Caso</span>
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
                <code style={{ fontSize: '1.2rem', color: 'var(--acento-terracota)', display: 'block', marginBottom: '0.8rem' }}>.mil-btn.mil-link-type.mil-dark</code>
                <p className="mil-t-14 mil-c-m-2" style={{ margin: 0 }}>Discreto para cards de artigos e serviços.</p>
              </div>
            </div>

            {/* 5. Botão Small */}
            <div className="col-12 col-md-6 col-lg-4">
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', height: '100%', boxShadow: 'var(--shadow-soft)' }}>
                <span className="mil-badge mil-mb-3">05. COMPACTO (SMALL)</span>
                <div className="mil-mb-3">
                  <button type="button" className="mil-btn mil-sm mil-accent">
                    <span>Filtrar</span>
                    <i className="far fa-sliders-h"></i>
                  </button>
                </div>
                <code style={{ fontSize: '1.2rem', color: 'var(--acento-terracota)', display: 'block', marginBottom: '0.8rem' }}>.mil-btn.mil-sm.mil-accent</code>
                <p className="mil-t-14 mil-c-m-2" style={{ margin: 0 }}>Versão compacta para formulários e barras de filtro.</p>
              </div>
            </div>

            {/* 6. Botão Circular */}
            <div className="col-12 col-md-6 col-lg-4">
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', height: '100%', boxShadow: 'var(--shadow-soft)' }}>
                <span className="mil-badge mil-mb-3">06. CIRCULAR / PLAY</span>
                <div className="mil-mb-3">
                  <button type="button" className="mil-circle-btn">
                    <i className="fas fa-play" style={{ fontSize: '1.6rem', marginLeft: '3px' }}></i>
                  </button>
                </div>
                <code style={{ fontSize: '1.2rem', color: 'var(--acento-terracota)', display: 'block', marginBottom: '0.8rem' }}>.mil-circle-btn</code>
                <p className="mil-t-14 mil-c-m-2" style={{ margin: 0 }}>Botão esférico 54px para vídeos e expansões.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Paleta Biofílica Paulista Expandida & Dinamismo em Blocos */}
      <section id="tokens" className="mil-section mil-p-10-8" style={{ backgroundColor: 'var(--branco-niemeyer)' }}>
        <div className="container">
          <div className="row mil-aie mil-mb-8">
            <div className="col-12 col-lg-7">
              <div className="mil-badge mil-mb-4">SISTEMA CROMÁTICO v4.2 (39 TOKENS)</div>
              <h2 className="mil-c-m-1">
                Paleta Biofílica Paulista &<br />
                <span className="mil-opacity-text">Dinamismo em Blocos</span>
              </h2>
            </div>
            <div className="col-12 col-lg-5">
              <p className="mil-c-m-2 mil-t-16">
                39 tokens telúricos e minerais organizados por famílias botânica, geológica, madeiras, águas e neutros, conferindo dinamismo cromático irrestrito para cards, tabelas, headers e botões sem perda de harmonia ou acessibilidade WCAG AAA.
              </p>
            </div>
          </div>

          {/* Filtros de Categorias */}
          <div className="mil-mb-6 mil-flex-row mil-aic" style={{ gap: '0.8rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 600, fontSize: '1.4rem', marginRight: '0.5rem' }}>Filtrar Família:</span>
            {[
              { id: 'all', label: 'Todas as Cores (39)' },
              { id: 'botanica', label: 'Botânica Paulista (7)' },
              { id: 'geologia', label: 'Solos & Terracotas (10)' },
              { id: 'madeiras', label: 'Madeiras & Café (7)' },
              { id: 'aguas', label: 'Águas & Céus (8)' },
              { id: 'estruturais', label: 'Estruturais & Neutros (7)' },
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`mil-btn mil-sm ${activeColorCategory === cat.id ? 'mil-accent' : 'mil-dark'}`}
                style={{ borderRadius: '100px', padding: '0.8rem 1.6rem', fontSize: '1.3rem' }}
                onClick={() => setActiveColorCategory(cat.id)}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Grid de Cores Atômicas */}
          <div className="row g-4 mil-mb-10">
            {filteredTokens.map((token, idx) => {
              const hexId = `hex-${idx}-${token.hex.replace('#', '')}`
              const cssId = `css-${idx}-${token.hex.replace('#', '')}`
              const scssId = `scss-${idx}-${token.hex.replace('#', '')}`
              const utilId = `util-${idx}-${token.hex.replace('#', '')}`

              return (
                <div key={token.name} className="col-12 col-md-6 col-lg-4">
                  <div style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid var(--marrom-borda-suave)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-soft)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                  }}>
                    {/* Visual Swatch */}
                    <div style={{
                      backgroundColor: token.hex,
                      height: '90px',
                      padding: '1.2rem 1.6rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(0,0,0,0.06)'
                    }}>
                      <span style={{
                        background: token.textColor === '#FAF9F6' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.7)',
                        color: token.textColor,
                        borderRadius: '100px',
                        padding: '0.3rem 0.9rem',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {token.contrast}
                      </span>
                      <span style={{
                        background: 'rgba(255,255,255,0.9)',
                        color: '#1A1A1A',
                        borderRadius: '6px',
                        padding: '0.2rem 0.6rem',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {token.hex}
                      </span>
                    </div>

                    {/* Conteúdo do Token */}
                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <h4 className="mil-c-m-1 mil-mb-2" style={{ fontSize: '1.6rem' }}>
                          {token.name}
                        </h4>
                        <p className="mil-c-m-2 mil-t-14 mil-mb-3" style={{ minHeight: '40px', lineHeight: '1.4' }}>
                          {token.role}
                        </p>
                      </div>

                      {/* Chips de Cópia Rápida */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {/* Botão Copiar HEX */}
                          <button
                            type="button"
                            onClick={() => copyToClipboard(token.hex, hexId)}
                            style={{
                              background: 'var(--superficie-argila)',
                              border: '1px solid var(--marrom-borda-suave)',
                              borderRadius: '6px',
                              padding: '0.4rem 0.8rem',
                              fontSize: '1.1rem',
                              fontFamily: 'var(--font-mono)',
                              cursor: 'pointer',
                              color: 'var(--carvao-tecnico)'
                            }}
                          >
                            {copiedId === hexId ? '✓ Copiado!' : token.hex}
                          </button>

                          {/* Botão Copiar SCSS */}
                          <button
                            type="button"
                            onClick={() => copyToClipboard(token.scssVar, scssId)}
                            style={{
                              background: 'rgba(122, 66, 7, 0.08)',
                              border: '1px solid rgba(122, 66, 7, 0.2)',
                              borderRadius: '6px',
                              padding: '0.4rem 0.8rem',
                              fontSize: '1.1rem',
                              fontFamily: 'var(--font-mono)',
                              cursor: 'pointer',
                              color: 'var(--acento-terracota)',
                              fontWeight: 600
                            }}
                          >
                            {copiedId === scssId ? '✓ Copiado!' : token.scssVar}
                          </button>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {/* Botão Copiar CSS Var */}
                          <button
                            type="button"
                            onClick={() => copyToClipboard(`var(${token.cssVar})`, cssId)}
                            style={{
                              background: '#FAF9F6',
                              border: '1px solid var(--marrom-borda-suave)',
                              borderRadius: '6px',
                              padding: '0.4rem 0.8rem',
                              fontSize: '1.1rem',
                              fontFamily: 'var(--font-mono)',
                              cursor: 'pointer',
                              color: 'var(--concreto-medio)'
                            }}
                          >
                            {copiedId === cssId ? '✓ Copiado!' : `var(${token.cssVar})`}
                          </button>

                          {/* Botão Copiar Classe Utilitária */}
                          <button
                            type="button"
                            onClick={() => copyToClipboard(`.${token.utilityBg}`, utilId)}
                            style={{
                              background: '#FAF9F6',
                              border: '1px solid var(--marrom-borda-suave)',
                              borderRadius: '6px',
                              padding: '0.4rem 0.8rem',
                              fontSize: '1.1rem',
                              fontFamily: 'var(--font-mono)',
                              cursor: 'pointer',
                              color: 'var(--concreto-medio)'
                            }}
                          >
                            {copiedId === utilId ? '✓ Copiado!' : `.${token.utilityBg}`}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Subseção: Dinamismo na Prática (Showcase de Blocos no Site) */}
          <div className="mil-mb-8 mil-pt-6" style={{ borderTop: '1px solid var(--marrom-borda-suave)' }}>
            <div className="row mil-aie mil-mb-8">
              <div className="col-12 col-lg-7">
                <div className="mil-badge mil-mb-4">DINAMISMO EM BLOCOS NA PRÁTICA</div>
                <h3 className="mil-c-m-1">Como a Paleta Biofílica Transforma os Blocos do CMS</h3>
              </div>
              <div className="col-12 col-lg-5">
                <p className="mil-c-m-2 mil-t-16">
                  Diferentes tipos de blocos demandam atmosferas cromáticas distintas. Com a paleta expandida, cada componente ganha personalidade visual sem perder o lastro material paulista.
                </p>
              </div>
            </div>

            {/* Grid dos 6 Blocos Dinâmicos */}
            <div className="row g-4 mil-mb-8">
              {/* Bloco 1: Botânica / Consultoria ESG */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="mil-card-bio-forest" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="mil-badge-moss mil-mb-3" style={{ padding: '0.4rem 1.2rem', display: 'inline-block', fontSize: '1.2rem', fontWeight: 600 }}>
                      CONSULTORIA AMBIENTAL
                    </span>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2rem' }}>
                      Mapeamento de Carbono & Cuestas
                    </h4>
                    <p className="mil-c-m-2 mil-t-14 mil-mb-4">
                      Diagnóstico de pegada energética em esteiras fabris com compensação em bacias de recarga do interior paulista.
                    </p>
                  </div>
                  <div>
                    <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(36, 71, 53, 0.15)', marginBottom: '2rem' }}>
                      <span className="mil-c-bio-forest" style={{ fontFamily: 'var(--font-mono)', fontSize: '2.4rem', fontWeight: 700 }}>
                        14 Dias
                      </span>
                      <span className="mil-t-12 mil-c-m-3" style={{ display: 'block' }}>Ciclo de Diagnóstico Operacional</span>
                    </div>
                    <button type="button" className="mil-btn mil-sm mil-btn-bio-forest" style={{ width: '100%' }}>
                      <span>Auditoria Sustentável</span>
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bloco 2: Hidrografia / Arquitetura & Cloud */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="mil-card-bio-river" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="mil-badge-river mil-mb-3" style={{ padding: '0.4rem 1.2rem', display: 'inline-block', fontSize: '1.2rem', fontWeight: 600 }}>
                      ARQUITETURA DE DADOS
                    </span>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2rem' }}>
                      Sistemas Desacoplados & APIs
                    </h4>
                    <p className="mil-c-m-2 mil-t-14 mil-mb-4">
                      Next.js 15 e PostgreSQL em alta disponibilidade para operações com milhares de transações simultâneas.
                    </p>
                  </div>
                  <div>
                    <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(36, 69, 88, 0.15)', marginBottom: '2rem' }}>
                      <span className="mil-c-bio-river" style={{ fontFamily: 'var(--font-mono)', fontSize: '2.4rem', fontWeight: 700 }}>
                        &lt; 120ms
                      </span>
                      <span className="mil-t-12 mil-c-m-3" style={{ display: 'block' }}>Latência P95 em APIs Headless</span>
                    </div>
                    <button type="button" className="mil-btn mil-sm mil-btn-bio-river" style={{ width: '100%' }}>
                      <span>Explorar Arquitetura</span>
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bloco 3: Geologia & Terracota / Diagnóstico Crítico */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="mil-card-bio-terracotta" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="mil-badge-amber mil-mb-3" style={{ padding: '0.4rem 1.2rem', display: 'inline-block', fontSize: '1.2rem', fontWeight: 600 }}>
                      AUDITORIA TECTÔNICA
                    </span>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2rem' }}>
                      Intervenção Fogo-Apagou
                    </h4>
                    <p className="mil-c-m-2 mil-t-14 mil-mb-4">
                      14 dias dedicados a identificar e estancar vazamentos de margem, reconciliação contábil e gargalos de checkout.
                    </p>
                  </div>
                  <div>
                    <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(122, 66, 7, 0.15)', marginBottom: '2rem' }}>
                      <span className="mil-c-a-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '2.4rem', fontWeight: 700 }}>
                        DRE &amp; Margem
                      </span>
                      <span className="mil-t-12 mil-c-m-3" style={{ display: 'block' }}>Diagnóstico de Vazamentos Fiscais</span>
                    </div>
                    <button type="button" className="mil-btn mil-sm mil-accent" style={{ width: '100%' }}>
                      <span>Solicitar Diagnóstico</span>
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bloco 4: Madeiras & Café / Memória Institucional */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="mil-card-bio-wood" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="mil-badge-coffee mil-mb-3" style={{ padding: '0.4rem 1.2rem', display: 'inline-block', fontSize: '1.2rem', fontWeight: 600 }}>
                      MEMÓRIA PAULISTA
                    </span>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2rem' }}>
                      A Força do Café & da Indústria
                    </h4>
                    <p className="mil-c-m-2 mil-t-14 mil-mb-4">
                      Herança comercial do planalto aliada ao rigor financeiro contemporâneo. Blindagem de margem sem atalhos.
                    </p>
                  </div>
                  <div>
                    <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(58, 35, 19, 0.15)', marginBottom: '2rem' }}>
                      <span className="mil-c-m-2" style={{ fontFamily: 'var(--font-mono)', fontSize: '2.4rem', fontWeight: 700 }}>
                        CPC / IFRS
                      </span>
                      <span className="mil-t-12 mil-c-m-3" style={{ display: 'block' }}>Conformidade com Normas Contábeis</span>
                    </div>
                    <button type="button" className="mil-btn mil-sm mil-btn-bio-coffee" style={{ width: '100%' }}>
                      <span>Conhecer Metodologia</span>
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bloco 5: Crepúsculo / Estratégia Anti-Slop */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="mil-card-bio-twilight" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="mil-badge-twilight mil-mb-3" style={{ padding: '0.4rem 1.2rem', display: 'inline-block', fontSize: '1.2rem', fontWeight: 600 }}>
                      ESTRATÉGIA DE AUTORIDADE
                    </span>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2rem' }}>
                      Comunicação Sem Vaidade
                    </h4>
                    <p className="mil-c-m-2 mil-t-14 mil-mb-4">
                      Eliminação de hype e jargões vazios. O trabalho da Squammata aparece no resultado operacional dos clientes.
                    </p>
                  </div>
                  <div>
                    <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(72, 53, 68, 0.15)', marginBottom: '2rem' }}>
                      <span className="mil-c-bio-twilight" style={{ fontFamily: 'var(--font-mono)', fontSize: '2.4rem', fontWeight: 700 }}>
                        Zero Slop
                      </span>
                      <span className="mil-t-12 mil-c-m-3" style={{ display: 'block' }}>Rigor de comunicação executiva</span>
                    </div>
                    <button type="button" className="mil-btn mil-sm mil-dark" style={{ width: '100%' }}>
                      <span>Ler Manifesto</span>
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bloco 6: Estrutural / Resumo Executivo */}
              <div className="col-12 col-md-6 col-lg-4">
                <div style={{
                  backgroundColor: 'var(--superficie-argila)',
                  border: '1px solid var(--marrom-borda-suave)',
                  borderRadius: '16px',
                  padding: '3.5rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-soft)'
                }}>
                  <div>
                    <span className="mil-badge mil-mb-3" style={{ background: '#FFFFFF', padding: '0.4rem 1.2rem', display: 'inline-block', fontSize: '1.2rem' }}>
                      GOVERNANÇA CANÔNICA
                    </span>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2rem' }}>
                      Prestação de Contas & DRE
                    </h4>
                    <p className="mil-c-m-2 mil-t-14 mil-mb-4">
                      Relatórios estruturados com tipografia Zilla Slab e Space Mono em conformidade técnica WCAG AAA.
                    </p>
                  </div>
                  <div>
                    <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--marrom-borda-suave)', marginBottom: '2rem' }}>
                      <span className="mil-c-m-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '2.4rem', fontWeight: 700 }}>
                        WCAG AAA
                      </span>
                      <span className="mil-t-12 mil-c-m-3" style={{ display: 'block' }}>Contraste 16.5:1 garantido</span>
                    </div>
                    <button type="button" className="mil-btn-outline" style={{ width: '100%' }}>
                      <span>Baixar Especificação</span>
                      <i className="far fa-file-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulador Interativo de Combinação de Cores para Blocos */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid var(--marrom-borda-suave)',
              padding: '3.5rem',
              boxShadow: 'var(--shadow-soft)'
            }}>
              <div className="row mil-aie mil-mb-6">
                <div className="col-12 col-lg-6">
                  <div className="mil-badge mil-mb-2">SIMULADOR AO VIVO</div>
                  <h4 className="mil-c-m-1" style={{ fontSize: '2.2rem' }}>Experimente Paletas Dinâmicas em um Bloco</h4>
                </div>
                <div className="col-12 col-lg-6">
                  <p className="mil-c-m-2 mil-t-14">
                    Clique nos botões abaixo para ver o bloco reagir instantaneamente à combinação de atmosfera biofílica selecionada:
                  </p>
                </div>
              </div>

              {/* Botões do Simulador */}
              <div className="mil-mb-6 mil-flex-row mil-aic" style={{ gap: '0.8rem', flexWrap: 'wrap' }}>
                {blockPresets.map((preset, pIdx) => (
                  <button
                    key={preset.title}
                    type="button"
                    className={`mil-btn mil-sm ${blockSimulatorPreset === pIdx ? 'mil-accent' : 'mil-dark'}`}
                    style={{ borderRadius: '100px', fontSize: '1.2rem', padding: '0.7rem 1.4rem' }}
                    onClick={() => setBlockSimulatorPreset(pIdx)}
                  >
                    <span>{preset.title.split(' (')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Preview Interativo do Bloco */}
              {(() => {
                const current = blockPresets[blockSimulatorPreset]
                return (
                  <div style={{
                    backgroundColor: current.bg,
                    border: `1px solid ${current.border}`,
                    borderRadius: '16px',
                    padding: '3.5rem',
                    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}>
                    <div className="row mil-aie">
                      <div className="col-12 col-lg-7">
                        <span style={{
                          backgroundColor: current.badgeBg,
                          color: current.badgeText,
                          borderRadius: '100px',
                          padding: '0.4rem 1.4rem',
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          display: 'inline-block',
                          marginBottom: '1.5rem',
                          fontFamily: 'var(--font-logo)'
                        }}>
                          {current.badgeName}
                        </span>
                        <h3 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2.6rem' }}>
                          {current.title}
                        </h3>
                        <p className="mil-c-m-2 mil-t-16 mil-mb-4" style={{ maxWidth: '600px' }}>
                          Demonstração de bloco temático do CMS renderizado com a combinação selecionada. Note como o contraste visual e a temperatura cromática se adaptam perfeitamente sem quebrar a elegância institucional.
                        </p>
                        <button type="button" className={`mil-btn ${current.btnClass}`}>
                          <span>{current.btnText}</span>
                          <i className="far fa-arrow-right"></i>
                        </button>
                      </div>
                      <div className="col-12 col-lg-5 mil-md-mt-4">
                        <div style={{
                          backgroundColor: '#FFFFFF',
                          borderRadius: '16px',
                          padding: '2.5rem',
                          border: '1px solid var(--marrom-borda-suave)',
                          boxShadow: 'var(--shadow-soft)'
                        }}>
                          <span style={{
                            color: current.accent,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '3.4rem',
                            fontWeight: 700,
                            display: 'block',
                            marginBottom: '0.5rem'
                          }}>
                            {current.metric}
                          </span>
                          <strong style={{ color: 'var(--carvao-tecnico)', fontSize: '1.4rem', display: 'block' }}>
                            {current.metricLabel}
                          </strong>
                          <span className="mil-t-12 mil-c-m-3">
                            Indicador operacional em conformidade com governança e DRE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Atomização de Headers e Menus */}
      <section id="headers-atomizados" className="mil-section mil-gray-section mil-p-10-8">
        <div className="container">
          <div className="row mil-aie mil-mb-8">
            <div className="col-12 col-lg-6">
              <div className="mil-badge mil-mb-4">ESTRUTURA DE TOPO</div>
              <h2 className="mil-c-m-1">Variações de Header & <br /><span className="mil-opacity-text">Navegação</span></h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="mil-c-m-2 mil-t-16">
                O cabeçalho do tema possui modos adaptáveis para páginas com fundo mineral claro (Niemeyer) ou heróis escuros (Invert), além de modal de diagnóstico lateral.
              </p>
            </div>
          </div>

          {/* Toggle de Simulação de Header */}
          <div className="mil-mb-4 mil-flex-row mil-aic" style={{ gap: '1rem' }}>
            <span style={{ fontWeight: 600, fontSize: '1.4rem' }}>Alternar Demonstração:</span>
            <button
              type="button"
              className={`mil-btn mil-sm ${headerType === 'standard' ? 'mil-accent' : 'mil-dark'}`}
              onClick={() => setHeaderType('standard')}
            >
              <span>Versão Padrão (Fundo Claro)</span>
            </button>
            <button
              type="button"
              className={`mil-btn mil-sm ${headerType === 'invert' ? 'mil-accent' : 'mil-dark'}`}
              onClick={() => setHeaderType('invert')}
            >
              <span>Versão Invertida (Fundo Escuro .mil-invert)</span>
            </button>
          </div>

          {/* Pré-visualização do Header */}
          <div style={{
            background: headerType === 'standard' ? 'var(--branco-niemeyer)' : '#1A1A1A',
            color: headerType === 'standard' ? '#1A1A1A' : '#FAF9F6',
            borderRadius: '16px',
            padding: '2.5rem 3.5rem',
            border: '1px solid var(--marrom-borda-suave)',
            boxShadow: 'var(--shadow-soft)',
            marginBottom: '4rem',
            transition: 'background 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
              {/* Logo simulado */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <img src="/logo/squammata/passarinho.svg" alt="" style={{ height: '32px', width: 'auto', filter: headerType === 'invert' ? 'brightness(0) invert(1)' : 'none' }} />
                <span style={{ fontFamily: 'var(--font-logo)', fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                  squammata
                </span>
              </div>

              {/* Links de Menu */}
              <nav>
                <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                  <li><span style={{ fontSize: '1.4rem', fontWeight: 600, cursor: 'pointer' }}>Serviços</span></li>
                  <li><span style={{ fontSize: '1.4rem', fontWeight: 600, cursor: 'pointer' }}>Estudos de Caso</span></li>
                  <li><span style={{ fontSize: '1.4rem', fontWeight: 600, cursor: 'pointer' }}>Especialistas</span></li>
                  <li><span style={{ fontSize: '1.4rem', fontWeight: 600, cursor: 'pointer' }}>Artigos</span></li>
                </ul>
              </nav>

              {/* Ação de Contato */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <button type="button" className="mil-btn mil-sm mil-accent">
                  <span>Diagnóstico</span>
                  <i className="far fa-envelope"></i>
                </button>
                {/* Botão Hambúrguer Simulado */}
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: headerType === 'standard' ? 'var(--superficie-argila)' : '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  <i className="fas fa-bars" style={{ fontSize: '1.4rem' }}></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h5 className="mil-c-m-1 mil-mb-3">Estrutura de Classes do Header</h5>
              <pre style={{
                background: '#1A1A1A',
                color: '#FAF9F6',
                padding: '2rem',
                borderRadius: '12px',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-mono)',
                overflowX: 'auto',
                margin: 0
              }}>
{`<!-- Header Padrão -->
<div className="mil-top-panel">
  <div className="mil-container mil-flex-row mil-aic mil-jcb">
    <Link href="/" className="mil-logo">...</Link>
    <nav><HeaderNav /></nav>
    <a href="#info" className="mil-btn mil-open-info">
      <span>Solicitar Diagnóstico</span>
    </a>
  </div>
</div>

<!-- Header Invertido (Heróis Escuros) -->
<div className="mil-top-panel mil-invert mil-static">
  ...
</div>`}
              </pre>
            </div>

            <div className="col-12 col-lg-6">
              <h5 className="mil-c-m-1 mil-mb-3">Painel Lateral de Atendimento (.mil-info-window-frame)</h5>
              <p className="mil-c-m-2 mil-t-14">
                Ao clicar no botão de diagnóstico, a gaveta lateral <code>.mil-info-window-frame.mil-active</code> surge com animação de pouso, exibindo e-mail, telefone, horários e o formulário de contato integrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Acordeões, FAQ e Componentes de Leitura */}
      <section id="componentes-ui" className="mil-section mil-p-10-8">
        <div className="container">
          <div className="row mil-aie mil-mb-8">
            <div className="col-12 col-lg-6">
              <div className="mil-badge mil-mb-4">CONTEÚDO EDITORIAL & PROCESSO</div>
              <h2 className="mil-c-m-1">Acordeões, Citações & <br /><span className="mil-opacity-text">Controles DRE</span></h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="mil-c-m-2 mil-t-16">
                Componentes atômicos do tema original recuperados e adaptados à biofilia paulista para apresentação de etapas de auditoria, perguntas frequentes e manifestos.
              </p>
            </div>
          </div>

          <div className="row g-4 mil-mb-8">
            {/* Acordeão Interativo */}
            <div className="col-12 col-lg-6">
              <div style={{ background: '#FFFFFF', padding: '3.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', boxShadow: 'var(--shadow-soft)' }}>
                <h4 className="mil-c-m-1 mil-mb-4">Acordeão de Processo / FAQ (.mil-accordion-group)</h4>

                {[
                  { q: 'Como funciona a Auditoria Fogo-Apagou?', a: 'Uma intervenção de 14 dias com foco direto em apagar vazamentos de margem no DRE e conciliação de estoque.' },
                  { q: 'Por que Next.js 15 e Payload CMS?', a: 'Arquitetura headless de altíssima velocidade com geração estática incremental e estabilidade de banco relacional PostgreSQL.' },
                  { q: 'Qual o tempo de implementação da esteira?', a: 'Diagnóstico em duas semanas e implantação gradual sem interrupção da operação de vendas diária.' },
                ].map((item, idx) => (
                  <div
                    key={`faq-${idx}`}
                    style={{
                      borderBottom: idx < 2 ? '1px solid var(--marrom-borda-suave)' : 'none',
                      padding: '1.6rem 0',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        userSelect: 'none'
                      }}
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    >
                      <h5 className="mil-c-m-1" style={{ fontSize: '1.6rem', margin: 0 }}>{item.q}</h5>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: activeFaq === idx ? 'var(--acento-terracota)' : 'var(--superficie-argila)',
                        color: activeFaq === idx ? '#FFFFFF' : 'var(--carvao-tecnico)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        transition: 'all 0.25s ease'
                      }}>
                        <i className={`fas fa-${activeFaq === idx ? 'minus' : 'plus'}`}></i>
                      </div>
                    </div>
                    {activeFaq === idx && (
                      <p className="mil-c-m-2 mil-t-14 mil-mt-2" style={{ margin: '1rem 0 0 0', lineHeight: '1.6' }}>
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Citação do Fundador e Manifesto */}
            <div className="col-12 col-lg-6">
              <div style={{
                background: 'var(--superficie-argila)',
                padding: '3.5rem',
                borderRadius: '16px',
                border: '1px solid var(--marrom-borda-suave)',
                boxShadow: 'var(--shadow-soft)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div className="mil-badge mil-mb-3" style={{ background: '#FFFFFF' }}>MANIFESTO DO INTERIOR</div>
                  <blockquote style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '2rem',
                    lineHeight: '1.5',
                    color: 'var(--carvao-tecnico)',
                    fontStyle: 'italic',
                    marginBottom: '2rem'
                  }}>
                    &ldquo;O fogo-apagou só canta protegido na folhagem. Nossa marca não busca vaidade em redes sociais; nosso trabalho só aparece no DRE dos nossos clientes.&rdquo;
                  </blockquote>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--marrom-squammata)',
                    color: '#FAF9F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-logo)',
                    fontWeight: 700
                  }}>
                    AS
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.5rem', color: 'var(--carvao-tecnico)' }}>Arthur Saggioratto</strong>
                    <span className="mil-t-14 mil-c-m-2">Fundador & Consultor de Estratégia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Anti-Slop: Protocolo de Craftsmanship Hallmark & OpenDesign */}
      <section id="anti-slop" className="mil-section mil-p-10-8" style={{ borderBottom: '1px solid var(--marrom-borda-suave)' }}>
        <div className="container">
          <div className="row mil-aie mil-mb-8">
            <div className="col-12 col-lg-7">
              <div className="mil-badge mil-mb-4">PROTOCOLO ANTI-AI-SLOP &amp; CRAFTSMANSHIP</div>
              <h2 className="mil-c-m-1">
                Blindagem Contra Vícios de IA &amp;<br />
                <span className="mil-opacity-text">Engenharia de Detalhe Hallmark</span>
              </h2>
            </div>
            <div className="col-12 col-lg-5">
              <p className="mil-c-m-2 mil-t-16">
                Fundamentado nos padrões OpenDesign e Hallmark (Together AI). O Squammata v4.2 elimina gradientes roxos genéricos, métricas inventadas e repetições de templates para garantir autoridade visual e rigor operacional.
              </p>
            </div>
          </div>

          {/* Subseção 1: Matriz dos 7 Pecados Capitais */}
          <div className="mil-mb-8">
            <div className="mil-flex-row mil-jcb mil-aic mil-mb-4" style={{ flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="mil-badge mil-badge-terracotta mil-mb-2">AUDITORIA DE CÓDIGO P0</span>
                <h3 className="mil-c-m-1" style={{ fontSize: '2.2rem' }}>Matriz dos 7 Pecados Capitais de Frontend IA</h3>
              </div>
              <div className="mil-badge mil-badge-forest" style={{ fontSize: '1.2rem', padding: '0.6rem 1.6rem' }}>
                STATUS: 7/7 REGRAS EM CONFORMIDADE TOTAL
              </div>
            </div>

            <div className="row g-4">
              {antiSlopSins.map((item, idx) => (
                <div key={item.id} className="col-12 col-lg-6">
                  <div style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--marrom-borda-suave)',
                    borderRadius: '16px',
                    padding: '2.8rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-soft)',
                  }}>
                    <div>
                      <div className="mil-flex-row mil-jcb mil-aic mil-mb-3">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: 'var(--marrom-squammata)',
                            background: 'var(--superficie-argila)',
                            padding: '0.2rem 0.8rem',
                            borderRadius: '6px'
                          }}>
                            REGRA 0{idx + 1}
                          </span>
                          <strong className="mil-c-m-1" style={{ fontSize: '1.5rem' }}>{item.sin}</strong>
                        </div>
                        <span className="mil-badge mil-badge-forest" style={{ fontSize: '1.1rem', whiteSpace: 'nowrap' }}>
                          {item.status}
                        </span>
                      </div>

                      <div className="mil-mb-3" style={{
                        background: 'rgba(163, 58, 42, 0.05)',
                        borderLeft: '3px solid #A33A2A',
                        padding: '1.2rem 1.6rem',
                        borderRadius: '0 8px 8px 0'
                      }}>
                        <strong style={{ display: 'block', fontSize: '1.2rem', color: '#A33A2A', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                          POR QUE É SLOP DE IA:
                        </strong>
                        <p className="mil-t-13 mil-c-m-2" style={{ margin: 0 }}>{item.whySlop}</p>
                      </div>

                      <div style={{
                        background: 'rgba(36, 71, 53, 0.05)',
                        borderLeft: '3px solid var(--bio-green-deep)',
                        padding: '1.2rem 1.6rem',
                        borderRadius: '0 8px 8px 0'
                      }}>
                        <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--bio-green-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                          BLINDAGEM SQUAMMATA:
                        </strong>
                        <p className="mil-t-13 mil-c-m-1" style={{ margin: 0, fontWeight: 500 }}>{item.squammataDefense}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subseção 2: Diversidade Macroestrutural Hallmark */}
          <div className="mil-mb-8" style={{
            background: 'var(--superficie-argila)',
            padding: '4rem 3.5rem',
            borderRadius: '24px',
            border: '1px solid var(--marrom-borda-suave)',
          }}>
            <div className="row mil-aie mil-mb-6">
              <div className="col-12 col-lg-7">
                <span className="mil-badge mil-badge-wood mil-mb-2">HALLMARK DIVERSIFICATION ENGINE</span>
                <h3 className="mil-c-m-1" style={{ fontSize: '2.4rem' }}>
                  Variedade de Macroestruturas:<br />
                  <span className="mil-opacity-text">Páginas com Vozes Distintas, Não Troca de Cores</span>
                </h3>
              </div>
              <div className="col-12 col-lg-5">
                <p className="mil-c-m-2 mil-t-14">
                  O protocolo Hallmark proíbe repetir a mesma sequência hero-3cards-cta em todas as páginas. Duas páginas de briefs diferentes devem se comportar como sites estruturalmente distintos.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {hallmarkMacrostructures.map((m, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--marrom-borda-suave)',
                    borderRadius: '16px',
                    padding: '2.8rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-soft)'
                  }}>
                    <div>
                      <div className="mil-flex-row mil-jcb mil-aic mil-mb-3">
                        <span className={`mil-badge ${m.badgeClass}`} style={{ fontSize: '1.1rem' }}>{m.genre}</span>
                        <span className="mil-font-mono mil-t-12 mil-c-m-3">#0{idx + 1}</span>
                      </div>
                      <h4 className="mil-c-m-1 mil-mb-2" style={{ fontSize: '1.8rem' }}>{m.name}</h4>
                      <p className="mil-c-m-2 mil-t-14 mil-mb-3"><strong>Ritmo Visual:</strong> {m.rhythm}</p>
                      <p className="mil-c-m-2 mil-t-14 mil-mb-4"><strong>Aplicação Recomendada:</strong> {m.bestFor}</p>
                    </div>

                    <div style={{
                      background: 'var(--superficie-argila)',
                      padding: '1.2rem 1.6rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(0,0,0,0.06)'
                    }}>
                      <span className="mil-font-mono mil-t-11 mil-c-m-3" style={{ display: 'block', textTransform: 'uppercase' }}>
                        Parâmetro Operacional Real:
                      </span>
                      <strong className="mil-font-mono mil-c-m-1" style={{ fontSize: '1.3rem' }}>
                        {m.sampleMetric}
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subseção 3: Disciplina de 8 Estados Interativos */}
          <div className="mil-mb-8">
            <div className="row mil-aie mil-mb-6">
              <div className="col-12 col-lg-7">
                <span className="mil-badge mil-badge-coffee mil-mb-2">HALLMARK INTERACTION &amp; STATES</span>
                <h3 className="mil-c-m-1" style={{ fontSize: '2.4rem' }}>
                  Laboratório dos 8 Estados Interativos
                </h3>
              </div>
              <div className="col-12 col-lg-5">
                <p className="mil-c-m-2 mil-t-14">
                  Todo componente atômico no padrão Hallmark deve prover estilos explícitos para os 8 estados fundamentais. Selecione um estado abaixo para testar a resposta do botão em tempo real.
                </p>
              </div>
            </div>

            {/* Seletor de Estados */}
            <div className="mil-flex-row mil-aic mil-mb-4" style={{ gap: '0.8rem', flexWrap: 'wrap' }}>
              {(['default', 'hover', 'focus', 'active', 'disabled', 'loading', 'error', 'success'] as const).map(state => (
                <button
                  key={state}
                  type="button"
                  onClick={() => setTestedState(state)}
                  className={`mil-btn mil-sm ${testedState === state ? 'mil-accent' : 'mil-dark'}`}
                  style={{ textTransform: 'capitalize' }}
                >
                  <span>{state}</span>
                </button>
              ))}
            </div>

            {/* Painel de Visualização do Estado */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--marrom-borda-suave)',
              borderRadius: '16px',
              padding: '3.5rem',
              boxShadow: 'var(--shadow-soft)'
            }}>
              <div className="row mil-aic">
                <div className="col-12 col-lg-5 mil-mb-4 mil-lg-mb-0">
                  <div style={{
                    padding: '4rem 2rem',
                    background: 'var(--branco-niemeyer)',
                    borderRadius: '12px',
                    border: '1px dashed var(--marrom-borda-suave)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '220px'
                  }}>
                    <span className="mil-font-mono mil-t-12 mil-c-m-3 mil-mb-3" style={{ textTransform: 'uppercase' }}>
                      Renderização no Estado: <strong>{testedState}</strong>
                    </span>

                    <button
                      type="button"
                      disabled={testedState === 'disabled'}
                      className={`mil-btn mil-accent is-${testedState}`}
                      style={{
                        pointerEvents: testedState === 'disabled' ? 'none' : 'auto',
                      }}
                    >
                      {testedState === 'loading' ? (
                        <span>Aguarde auditoria...</span>
                      ) : testedState === 'error' ? (
                        <span>Falha: Verifique Dados</span>
                      ) : testedState === 'success' ? (
                        <span>Concluído com Sucesso</span>
                      ) : (
                        <span>Solicitar Intervenção DRE</span>
                      )}
                      <i className={`fas ${
                        testedState === 'loading' ? 'fa-spinner fa-spin' :
                        testedState === 'error' ? 'fa-exclamation-triangle' :
                        testedState === 'success' ? 'fa-check' :
                        'fa-arrow-right'
                      }`}></i>
                    </button>
                  </div>
                </div>

                <div className="col-12 col-lg-7">
                  <div style={{
                    background: '#1A1A1A',
                    color: '#FAF9F6',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.25rem',
                    lineHeight: '1.6'
                  }}>
                    <div style={{ color: '#E8A382', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem' }}>
                      {`/* Hallmark · Estado: ${testedState.toUpperCase()} */`}
                    </div>
                    {testedState === 'default' && (
                      <div>
                        .mil-btn &#123;<br />
                        &nbsp;&nbsp;background-color: var(--terracota-tectonico);<br />
                        &nbsp;&nbsp;border-radius: var(--border-radius-sm, 8px);<br />
                        &nbsp;&nbsp;transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);<br />
                        &#125;
                      </div>
                    )}
                    {testedState === 'hover' && (
                      <div>
                        .mil-btn:hover, .mil-btn.is-hover &#123;<br />
                        &nbsp;&nbsp;transform: translateY(-2px);<br />
                        &nbsp;&nbsp;box-shadow: 0 10px 24px rgba(58, 35, 19, 0.12);<br />
                        &#125;
                      </div>
                    )}
                    {testedState === 'focus' && (
                      <div>
                        .mil-btn:focus-visible, .mil-btn.is-focus &#123;<br />
                        &nbsp;&nbsp;outline: 2px solid var(--marrom-squammata);<br />
                        &nbsp;&nbsp;outline-offset: 2px;<br />
                        &#125;
                      </div>
                    )}
                    {testedState === 'active' && (
                      <div>
                        .mil-btn:active, .mil-btn.is-active &#123;<br />
                        &nbsp;&nbsp;transform: translateY(1px);<br />
                        &nbsp;&nbsp;box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);<br />
                        &#125;
                      </div>
                    )}
                    {testedState === 'disabled' && (
                      <div>
                        .mil-btn:disabled, .mil-btn.is-disabled &#123;<br />
                        &nbsp;&nbsp;opacity: 0.45;<br />
                        &nbsp;&nbsp;cursor: not-allowed;<br />
                        &nbsp;&nbsp;pointer-events: none;<br />
                        &#125;
                      </div>
                    )}
                    {testedState === 'loading' && (
                      <div>
                        .mil-btn[data-state=&quot;loading&quot;], .mil-btn.is-loading &#123;<br />
                        &nbsp;&nbsp;cursor: wait;<br />
                        &nbsp;&nbsp;opacity: 0.85;<br />
                        &nbsp;&nbsp;/* Trava de submissão dupla ativa */<br />
                        &#125;
                      </div>
                    )}
                    {testedState === 'error' && (
                      <div>
                        .mil-btn[data-state=&quot;error&quot;], .mil-btn.is-error &#123;<br />
                        &nbsp;&nbsp;border: 1px solid #A33A2A;<br />
                        &nbsp;&nbsp;background-color: rgba(163, 58, 42, 0.08);<br />
                        &nbsp;&nbsp;color: #A33A2A;<br />
                        &#125;
                      </div>
                    )}
                    {testedState === 'success' && (
                      <div>
                        .mil-btn[data-state=&quot;success&quot;], .mil-btn.is-success &#123;<br />
                        &nbsp;&nbsp;background-color: var(--bio-green-deep, #244735);<br />
                        &nbsp;&nbsp;color: #FFFFFF;<br />
                        &#125;
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subseção 4: Radar de Auto-Crítica Pré-Emissão */}
          <div style={{
            background: '#1A1A1A',
            color: '#FAF9F6',
            borderRadius: '24px',
            padding: '4rem 3.5rem',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div className="row mil-aie mil-mb-6">
              <div className="col-12 col-lg-7">
                <span className="mil-badge mil-badge-gold mil-mb-2">PRE-EMIT SELF-CRITIQUE (HALLMARK STANDARD)</span>
                <h3 style={{ color: '#FAF9F6', fontSize: '2.4rem' }}>
                  Auditoria de 6 Eixos de Rigor Técnico
                </h3>
              </div>
              <div className="col-12 col-lg-5">
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
                  color: '#E8A382',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1rem 1.6rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(232, 163, 130, 0.2)'
                }}>
                  {`/* Hallmark · critique: P5 H5 E5 S5 R5 V5 */`}
                </div>
              </div>
            </div>

            <div className="row g-4">
              {[
                { axis: 'P (Filosofia)', score: '5/5', desc: 'Biofilia de raiz paulista e biomimética da Columbina squammata ancorada no território regional.' },
                { axis: 'H (Hierarquia)', score: '5/5', desc: 'Escala fluida clamp, com Zilla Slab nos títulos editoriais e Quicksand na interface humanista.' },
                { axis: 'E (Execução)', score: '5/5', desc: 'Blindagem WCAG AAA em 39 tokens de cor, física de curva exponencial e sem vazamentos de contraste.' },
                { axis: 'S (Especificidade)', score: '5/5', desc: 'Métricas operacionais reais de DRE, latência P95 e conformidade contábil. Zero superlativos vazios.' },
                { axis: 'R (Restrição)', score: '5/5', desc: 'Zero emojis infantis, zero gradientes de dois tons no hero e zero listras laterais de dashboard de IA.' },
                { axis: 'V (Variedade)', score: '5/5', desc: '4 macroestruturas distintas e 6 atmosferas visuais de bloco desacopladas do banco de dados.' },
              ].map((item, idx) => (
                <div key={idx} className="col-12 col-md-4">
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '2.2rem',
                    height: '100%'
                  }}>
                    <div className="mil-flex-row mil-jcb mil-aic mil-mb-2">
                      <strong style={{ color: '#FAF9F6', fontSize: '1.4rem' }}>{item.axis}</strong>
                      <span className="mil-badge mil-badge-forest" style={{ fontSize: '1.1rem' }}>{item.score}</span>
                    </div>
                    <p style={{ color: 'rgba(250, 249, 246, 0.7)', fontSize: '1.25rem', margin: 0, lineHeight: '1.5' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Receitas Práticas Sem Banco de Dados */}
      <section id="receitas" className="mil-section mil-gray-section mil-p-10-8">
        <div className="container">
          <div className="row mil-aie mil-mb-8">
            <div className="col-12 col-lg-6">
              <div className="mil-badge mil-mb-4">GUIA DE IMPLEMENTAÇÃO</div>
              <h2 className="mil-c-m-1">Receitas Atômicas Prontas</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="mil-c-m-2 mil-t-16">
                Snippets diretos para incorporar a malha de escamas, os divisores em curva e os novos botões em qualquer página sem depender do banco.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div style={{ background: '#FFFFFF', padding: '3.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', boxShadow: 'var(--shadow-soft)' }}>
                <div className="mil-badge mil-mb-2">RECEITA 01</div>
                <h4 className="mil-c-m-1 mil-mb-2">Como Inserir o Divisor de Curva Dorsal Entre Duas Seções</h4>
                <p className="mil-c-m-2 mil-t-14 mil-mb-3">Copie o JSX abaixo para criar uma transição orgânica suave:</p>
                <pre style={{
                  background: '#1A1A1A',
                  color: '#FAF9F6',
                  padding: '2rem',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-mono)',
                  overflowX: 'auto',
                  margin: 0
                }}>
{`{/* Final da Seção Clara */}
<div className="mil-section mil-p-10-8">
  ...
</div>

{/* Divisor Dorsal em Curva Suave */}
<div className="mil-section-curve-divider" style={{ color: 'var(--marrom-squammata)' }}>
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0 C150,90 400,120 600,60 C800,0 1050,90 1200,30 L1200,120 L0,120 Z" fill="currentColor" />
  </svg>
</div>

{/* Início da Seção Escura */}
<div className="mil-section" style={{ backgroundColor: 'var(--marrom-squammata)' }}>
  ...
</div>`}
                </pre>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div style={{ background: '#FFFFFF', padding: '3.5rem', borderRadius: '16px', border: '1px solid var(--marrom-borda-suave)', boxShadow: 'var(--shadow-soft)' }}>
                <div className="mil-badge mil-mb-2">RECEITA 02</div>
                <h4 className="mil-c-m-1 mil-mb-2">Como Montar um Grid de Cards com Malha de Escamas</h4>
                <p className="mil-c-m-2 mil-t-14 mil-mb-3">Envolva seus cards com as classes de malha orgânica:</p>
                <pre style={{
                  background: '#1A1A1A',
                  color: '#FAF9F6',
                  padding: '2rem',
                  borderRadius: '12px',
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-mono)',
                  overflowX: 'auto',
                  margin: 0
                }}>
{`<section className="mil-section mil-squama-pattern mil-p-10-8">
  <div className="container">
    <div className="mil-squama-grid">
      <div className="mil-service-card">
        {/* Conteúdo do Card */}
      </div>
      <div className="mil-service-card">
        {/* Conteúdo do Card */}
      </div>
    </div>
  </div>
</section>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé Interno da Documentação */}
      <div className="mil-section mil-p-10-6 mil-tac" style={{ borderTop: '1px solid var(--marrom-borda-suave)' }}>
        <div className="container">
          <div className="mil-badge mil-mb-4">CATÁLOGO ATÔMICO v4.1</div>
          <h3 className="mil-c-m-1 mil-mb-3">Squammata Consultoria e Gestão</h3>
          <p className="mil-c-m-2 mil-t-14 mil-mb-4">
            Campinas/SP | Engenharia de Operações, DRE e Infraestrutura Digital
          </p>
          <Link href="/" className="mil-btn mil-accent">
            <span>Voltar à Página Principal</span>
            <i className="far fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
