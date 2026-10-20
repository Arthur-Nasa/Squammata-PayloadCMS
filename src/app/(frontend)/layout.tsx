import type { Metadata } from 'next'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/globals/Footer/Component'
import { Header } from '@/globals/Header/Component'
import { Preloader } from '@/components/Preloader'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { getServerSideURL } from '@/utilities/getURL'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LocalBusinessJsonLd } from '@/components/LocalBusinessJsonLd'

// Google Fonts (Squammata Design System v3.8)
import { Quicksand, Zilla_Slab, Space_Mono } from 'next/font/google'

const quicksand = Quicksand({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
  adjustFontFallback: false,
})

const zillaSlab = Zilla_Slab({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-zilla-slab',
  display: 'swap',
  adjustFontFallback: false,
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  adjustFontFallback: false,
})

// CSS Plugins
import '@styles/css/plugins/fontawesome.css'
import '@styles/css/plugins/line-awesome.css'
import '@styles/css/plugins/bootstrap-grid.css'
import '@styles/css/plugins/swiper.css'

// Global CSS & SCSS
import '@styles/scss/style.scss'
import './globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={`${quicksand.variable} ${zillaSlab.variable} ${spaceMono.variable}`}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <LocalBusinessJsonLd />
      </head>
      <body>
        <ErrorBoundary>
          <Providers>
            <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            />
            <Preloader />
            {/* wrapper */}
            <div id="smooth-wrapper" className="mil-page-wrapper">
              <div className="mil-cursor-follower"></div>

              <div className="mil-progress-track">
                <div className="mil-progress"></div>
              </div>

              <Header />

              {/* page transition */}
              <div className="mil-transition-fade" id="swup">
                <div className="mil-transition-frame">
                  {/* content */}
                  <div id="smooth-content" className="mil-content">
                    {children}

                    <Footer />
                  </div>
                  {/* content */}
                </div>
              </div>
              {/* page transition */}
            </div>
            {/* wrapper end */}
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Squammata | Consultoria de E-commerce & Transformação Digital',
    template: '%s | Squammata',
  },
  description:
    'Consultoria de gestão de projetos focada em e-commerce e transformação digital para pequenas e médias empresas na Região Metropolitana de Campinas.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@squammata',
  },
}
