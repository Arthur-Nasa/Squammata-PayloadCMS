import type { Metadata } from 'next'
import type React from 'react'
import { Quicksand, Zilla_Slab, Space_Mono } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-logo',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Squammata | Consultoria de E-commerce & Transformação Digital',
    template: '%s | Squammata',
  },
  description:
    'Consultoria de gestão de projetos focada em e-commerce e transformação digital para pequenas e médias empresas na Região Metropolitana de Campinas.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Squammata',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${quicksand.variable} ${zillaSlab.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
      </body>
    </html>
  )
}
