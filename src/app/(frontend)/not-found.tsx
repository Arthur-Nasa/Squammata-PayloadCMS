import Link from 'next/link'
import React from 'react'
import { Media } from '@/components/Media'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { General } from '@/payload-types'

export default async function NotFound() {
  const generalData: General = await getCachedGlobal('general', 1)()

  const subtitle = generalData?.not_found?.subtitle || 'Erro 404 | Recurso Não Indexado'
  const title = generalData?.not_found?.title || 'Página Não Localizada'
  const description =
    generalData?.not_found?.description ||
    'O endereço solicitado foi descontinuado, transferido ou não consta em nossa esteira técnica. Retorne à página inicial ou consulte nossos estudos de caso e publicações.'

  return (
    <div className="mil-hero-5 mil-hero-404" id="top">
      {generalData?.not_found?.bgImage && (
        <Media
          imgClassName="mil-hero-bg mil-scale-img-top"
          resource={generalData.not_found.bgImage}
        />
      )}
      <div className="mil-overlay"></div>

      <div className="mil-hero-content">
        <div className="mil-container mil-tac">
          <p className="mil-c-m-4 mil-mb-4 mil-t-16">{subtitle}</p>
          <h1
            className="mil-fs-xxl mil-c-m-5 mil-tac mil-mb-4"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }}
          />
          <p
            className="mil-c-m-4 mil-mb-4 mil-tac mil-t-16"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
          />
          <Link href="/" className="mil-btn mil-accent">
            <span>Retornar ao Início</span>
            <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
