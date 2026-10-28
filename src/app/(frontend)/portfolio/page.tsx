import type { Metadata } from 'next'
import React from 'react'
import { ArthurPortfolioView } from '../arthur/ArthurPortfolioView'
import { metadata as arthurMetadata } from '../arthur/page'

export const metadata: Metadata = arthurMetadata

export default function PortfolioPage() {
  return <ArthurPortfolioView />
}
