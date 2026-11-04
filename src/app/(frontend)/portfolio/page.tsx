import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioView } from '../arthur/ArthurPortfolioView'
import { metadata as arthurMetadata, portfolioSchema } from '../arthur/page'
import { getCachedPortfolioSettings } from '@/utilities/getGlobals'

export const metadata: Metadata = arthurMetadata

export default async function PortfolioPage() {
  let portfolioData: any = null
  try {
    portfolioData = await getCachedPortfolioSettings()()
  } catch {
    portfolioData = null
  }

  let schemaToRender: any = portfolioSchema
  if (portfolioData?.schemaMarkup?.rawJson) {
    try {
      schemaToRender = JSON.parse(portfolioData.schemaMarkup.rawJson)
    } catch {
      schemaToRender = portfolioSchema
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaToRender) }}
      />
      <ArthurPortfolioView initialData={portfolioData} />
    </>
  )
}
