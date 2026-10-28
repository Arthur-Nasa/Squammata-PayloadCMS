import React from 'react'

import { ProjectCardPostData } from '@/components/ProjectCard'
import { ProjectsMasonry } from '@/components/ProjectsMasonry'

export type Props = {
    projects: ProjectCardPostData[]
    columns: string,
    container: string,
}

export const CollectionProjects: React.FC<Props> = (props) => {
  const { projects, container, columns } = props

  if (!projects || projects.length === 0) {
    return (
      <div className="mil-card mil-p-10-8 mil-mb-4" style={{ borderRadius: '16px', border: '1px solid #4E3220' }}>
        <div className="mil-badge mil-mb-3" style={{ borderRadius: '100px' }}>Controladoria & DRE</div>
        <h4 className="mil-c-m-1 mil-mb-2">Nenhum estudo de caso indexado no momento</h4>
        <p className="mil-c-m-2 mil-t-16 mil-mb-4">
          Nossas auditorias de DRE e reestruturações operacionais em Paulínia, Campinas e Indaiatuba estão em processo de consolidação de métricas. Solicite uma apresentação técnica confidencial.
        </p>
        <a href="#popup" className="mil-btn mil-accent" style={{ borderRadius: '8px' }}>
          <span>Solicitar Diagnóstico</span>
          <i className="far fa-arrow-right"></i>
        </a>
      </div>
    )
  }

  return (
    <section className="portfolio-section">
        <div className={container === "boxed" ? "portfolio-grid-container" : "portfolio-grid-fluid"}>
            <ProjectsMasonry projects={projects} columns={columns} layout={"grid"} />
        </div>
    </section>
  )
}