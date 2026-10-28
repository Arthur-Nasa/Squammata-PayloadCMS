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
import { getCachedGlobal } from '@/utilities/getGlobals'
import { getThemePreset, generateThemeCssVariables, DEFAULT_THEME_KEY } from '@/theme/presets'
import { generateThemeCss } from '@/utilities/generateThemeCss'

// Google Fonts (Squammata Core Fonts)
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

  // Recupera configurações visuais do tema com fallback defensivo
  const themeSettings = await getCachedGlobal('theme-settings', 1)()
  const overrides = {
    primary: themeSettings?.overridePrimary,
    secondary: themeSettings?.overrideSecondary,
    darkBg: themeSettings?.overrideDarkBg,
    lightBg: themeSettings?.overrideLightBg,
    radius: themeSettings?.radiusPreset,
  }
  const activeTheme = getThemePreset(themeSettings?.preset || DEFAULT_THEME_KEY, overrides)
  const dynamicCss = generateThemeCssVariables(activeTheme)

  const engineCss = generateThemeCss({
    primaryColor: themeSettings?.overridePrimary || defaultSiteConfig.theme.primaryColor,
    secondaryColor: themeSettings?.overrideSecondary || defaultSiteConfig.theme.secondaryColor,
    darkBg: themeSettings?.overrideDarkBg || defaultSiteConfig.theme.darkBg,
    lightBg: themeSettings?.overrideLightBg || defaultSiteConfig.theme.lightBg,
    radius: (themeSettings?.radiusPreset as 'organic' | 'modern' | 'sharp') || defaultSiteConfig.theme.radius,
    fontPreset: defaultSiteConfig.theme.fontPreset,
  })

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <style id="squammata-theme-dynamic" dangerouslySetInnerHTML={{ __html: dynamicCss }} />
        <style id="boilerplate-theme-engine" dangerouslySetInnerHTML={{ __html: engineCss }} />
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

import { defaultSiteConfig } from '@/site.config'

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: `${defaultSiteConfig.branding.name} | ${defaultSiteConfig.branding.tagline}`,
    template: `%s | ${defaultSiteConfig.branding.name}`,
  },
  description: defaultSiteConfig.branding.description,
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: `@${defaultSiteConfig.branding.name.toLowerCase()}`,
  },
}

