import type { Metadata } from 'next/types'

import { CollectionServices } from '@/components/CollectionServices'
import { Pagination } from '@/components/Pagination'
import PageClient from './page.client'
import { unstable_cache } from 'next/cache'
import { getCachedGlobal, getCachedGlobalMeta } from '@/utilities/getGlobals'
import type { ServicesPage, Page } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { generateMeta } from '@/utilities/generateMeta'
import { queryServices } from '@/app/_fetches'

import { IntroBlock } from '@/blocks/Intro/Component'

export default async function Page() {
  const servicesData: ServicesPage = await getCachedGlobal('services_page', 0)()
  const limit = 9;
  const services = await queryServices(1, limit);

  return (
    <>
      <PageClient />

      {servicesData?.layout_before ? (
        <RenderBlocks blocks={servicesData.layout_before} />
      ) : (
        <IntroBlock blockType="intro" short_title="Serviços" title="Soluções Técnicas & Gestão" />
      )}

      <div className="mil-section mil-gray-section mil-p-10-8">
        <div className="container">
            <div className="row mil-aie mil-mb-10">
                <div className="col-12 col-md-6 mil-sm-mb-4">
                    <div className="mil-badge mil-badge-forest mil-mb-4">{(servicesData?.badge || 'Catálogo de Soluções').replace(/\s*V6\b/gi, '')}</div>
                    <h2 className="mil-c-m-1" dangerouslySetInnerHTML={{ __html: sanitizeHTML(servicesData?.title || 'Engenharia de Operações & Gestão Técnica') }} />
                </div>
                <div className="col-12 col-md-6">
                    <div className="mil-flex-column mil-jce">
                        <p className="mil-c-m-2 mil-t-16" dangerouslySetInnerHTML={{ __html: sanitizeHTML(servicesData?.description || 'Intervenções cirúrgicas de auditoria e esteiras contínuas de gestão para pequenas e médias empresas. Foco estrito em processos, margem de contribuição e sustentabilidade no DRE.') }} />
                    </div>
                </div>
            </div>
            <CollectionServices posts={services.docs} />

            {services.totalPages > 1 && services.page && (
              <Pagination pageType={"services"} page={services.page} totalPages={services.totalPages} />
            )}
        </div>
      </div>

      {servicesData.layout_after &&
      <RenderBlocks blocks={servicesData.layout_after} />
      }
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const servicesData: ServicesPage = await getCachedGlobalMeta('services_page', 1)()
  const pageServicesData: Page = {
    id: 0,
    title: '',
    updatedAt: '',
    createdAt: '',
    layout: [],
    meta: servicesData.meta,
    slug: "services"
  }

  return generateMeta({doc: pageServicesData})
}

const getCachedServices = unstable_cache(
  async (limit) => {
    return queryServices(1, limit);
  },
  ['services-grid']
);