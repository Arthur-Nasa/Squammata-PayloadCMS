import type { Metadata } from 'next'
import React from 'react'
import { DocsView } from './DocsView'

export const metadata: Metadata = {
  title: 'Documentação do Tema & Guia de Arquitetura | Squammata',
  description: 'Manual oficial da Squammata com tokens de design, curvatura orgânica, tipografia, vitrine de componentes UI e receitas de customização estática.',
}

export default function DocsPage() {
  return <DocsView />
}
