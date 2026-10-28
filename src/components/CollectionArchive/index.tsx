import React from 'react'

import { BlogCard, BlogCardPostData } from '@/components/BlogCard'

export type Props = {
  posts: BlogCardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  if (!posts || posts.length === 0) {
    return (
      <div className="mil-card mil-p-10-8 mil-mb-4" style={{ borderRadius: '16px', border: '1px solid #4E3220' }}>
        <div className="mil-badge mil-mb-3" style={{ borderRadius: '100px' }}>Publicações Técnicas</div>
        <h4 className="mil-c-m-1 mil-mb-2">Nenhum artigo indexado no momento</h4>
        <p className="mil-c-m-2 mil-t-16 mil-mb-4">
          Nossas análises operacionais sobre cálculo de margem no DRE, engenharia headless e malha logística da RMC estão em processo de revisão editorial. Cadastre-se no rodapé para receber novos relatórios.
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
            <div className="col-12 col-md-6 col-lg-4" key={index}>
                <BlogCard doc={result} relationTo="posts" showCategories layout="default" />
            </div>
          )
        }
        
        return null
      })}
    </div>
  )
}
