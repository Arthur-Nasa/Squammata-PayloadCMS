import type { Endpoint, PayloadHandler } from 'payload'
import {
  buttonColorOptions,
  buttonRadiusOptions,
  triangleOptions,
  cardColorOptions,
} from '@/fields/elementCustomization'

export const getDesignTokensPayload = () => ({
  system: 'Squammata Biofilia Paulista Design Tokens',
  version: '1.0.0',
  description:
    'Tokens canônicos e vocabulário semântico para manipulação de blocos, botões, cards e elementos visuais via IA e APIs integradas.',
  tokens: {
    buttons: {
      colors: buttonColorOptions,
      radii: buttonRadiusOptions,
      triangles: triangleOptions,
    },
    cards: {
      styles: cardColorOptions,
      radii: buttonRadiusOptions,
      triangles: triangleOptions,
    },
    palette: {
      terracota: '#C15C3D',
      basalto: '#3A2313',
      floresta: '#244735',
      ambar: '#B87514',
      rio: '#244558',
      argila: '#F3EFE6',
      niemeyer: '#FAF9F6',
      carvao: '#1A1A1A',
    },
  },
  instructionsForAI: {
    buttonCustomization:
      'Para configurar botões em qualquer bloco, use {prefix}_color, {prefix}_radius, {prefix}_has_triangle e {prefix}_show_icon.',
    cardCustomization:
      'Para configurar cards ou itens em listas, use {prefix}_style, {prefix}_radius e {prefix}_triangle.',
    triangleDecoration:
      'O valor "triangle" ativa o chanfro diagonal canônico .mil-angle no canto superior direito do elemento. "none" remove o chanfro.',
  },
})

export const designTokensHandler: PayloadHandler = async () => {
  return Response.json(getDesignTokensPayload(), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

export const designTokensEndpoint: Endpoint = {
  path: '/design-tokens',
  method: 'get',
  handler: designTokensHandler,
}
