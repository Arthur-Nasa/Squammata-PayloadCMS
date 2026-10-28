import React from 'react'

import { ServiceCard, CardServiceData } from '@/components/ServiceCard'

export type Props = {
  posts: CardServiceData[]
}

export const CollectionServices: React.FC<Props> = (props) => {
  const { posts } = props

  if (!posts || posts.length === 0) {
    return (
      <div className="mil-card mil-p-10-8 mil-mb-4" style={{ borderRadius: '16px', border: '1px solid #4E3220' }}>
        <div className="mil-badge mil-mb-3" style={{ borderRadius: '100px' }}>Esteira Operacional</div>
        <h4 className="mil-c-m-1 mil-mb-2">Nenhum serviço indexado no momento</h4>
        <p className="mil-c-m-2 mil-t-16 mil-mb-4">
          Nosso catálogo de serviços canônicos da tabela V6 está passando por calibração de esteira técnica. Entre em contato diretamente para solicitar um diagnóstico de operação.
        </p>
        <a href="#popup" className="mil-btn mil-accent" style={{ borderRadius: '8px' }}>
          <span>Solicitar Diagnóstico</span>
          <i className="far fa-arrow-right"></i>
        </a>
      </div>
    )
  }

  return (
    <div className="row">
      {posts?.map((result, index) => {
        if (typeof result === 'object' && result !== null) {
          return (
            <div className="col-md-6 col-xl-4" key={index}>
                <ServiceCard doc={result} relationTo="services" />
            </div>
          )
        }
        
        return null
      })}
    </div>
  )
}