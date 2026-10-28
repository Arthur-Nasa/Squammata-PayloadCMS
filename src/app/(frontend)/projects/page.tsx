import type { Metadata } from 'next/types'

import { CollectionProjects } from '@/components/CollectionProjects'
import { Pagination } from '@/components/Pagination'
import PageClient from './page.client'
import { unstable_cache } from 'next/cache'
import { getCachedGlobal, getCachedGlobalMeta } from '@/utilities/getGlobals'
import type { ProjectsPage, Page } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { generateMeta } from '@/utilities/generateMeta'
import { queryProjects } from '@/app/_fetches'

import { IntroBlock } from '@/blocks/Intro/Component'

export default async function Page() {
  const projectsData: ProjectsPage = await getCachedGlobal('projects_page', 0)()
  const limit = 6;
  const projects = await queryProjects(1, limit);

  return (
    <>
      <PageClient />

      {projectsData?.layout_before ? (
        <RenderBlocks blocks={projectsData.layout_before} />
      ) : (
        <IntroBlock blockType="intro" short_title="Estudos de Caso" title="Operações Auditadas e Resultados no DRE" />
      )}

      <div className="mil-section mil-gray-section mil-p-10-10">
        <div className="container">
          <div className="row mil-aie mil-mb-10">
              <div className="col-12 col-md-6 mil-sm-mb-4">
                  <div className="mil-badge mil-mb-4">{projectsData.badge || 'Estudos de Caso & DRE'}</div>
                  <h2 className="mil-c-m-1" dangerouslySetInnerHTML={{ __html: sanitizeHTML(projectsData.title || 'Operações Auditadas e <br><span class="mil-opacity-text">Resultados no DRE</span>') }} />
              </div>
              <div className="col-12 col-md-6">
                  <div className="mil-flex-column mil-jce">
                      <p className="mil-c-m-2 mil-t-16" dangerouslySetInnerHTML={{ __html: sanitizeHTML(projectsData.description || 'Análise aprofundada de gargalos operacionais solucionados na Região Metropolitana de Campinas com mensuração direta de margem de contribuição e eficiência técnica.') }} />
                  </div>
              </div>
          </div>
          
          <CollectionProjects projects={projects.docs} columns={"3"} container="fluid" />

          {projects.totalPages > 1 && projects.page && (
            <Pagination pageType={"projects"} page={projects.page} totalPages={projects.totalPages} />
          )}
        </div>
      </div>

      {projectsData.layout_after &&
      <RenderBlocks blocks={projectsData.layout_after} />
      }
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const projectsData: ProjectsPage = await getCachedGlobalMeta('projects_page', 1)()
  const pageProjectsData: Page = {
    id: 0,
    title: '',
    updatedAt: '',
    createdAt: '',
    layout: [],
    meta: projectsData.meta,
    slug: "projects"
  }

  return generateMeta({doc: pageProjectsData})
}

const getCachedProjects = unstable_cache(
  async (limit) => {
    return queryProjects(1, limit);
  },
  ['projects-grid']
);