import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import type { Page } from '@/payload-types'
import { unstable_cache } from 'next/cache'
import React, { Fragment } from 'react'
import { queryPageBySlug, queryAllPages } from '@/app/_fetches'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

import { HeroOneBlock } from '@/blocks/HeroOne/Component'
import { AboutUsBlock } from '@/blocks/AboutUs/Component'
import { SectionCurveDivider } from '@/components/SectionCurveDivider'
import Link from 'next/link'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args): Promise<React.ReactElement | null> {
  const { slug = 'home' } = await paramsPromise
  const { isEnabled: draft } = await draftMode()
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/' + decodedSlug

  let page: Page | null

  page = await getCachedPage(decodedSlug)

  if (!page && slug === 'home') {
    return (
      <Fragment>
        <PageClient page={{ headerStyle: 'invert' } as unknown as Page} />
        <PayloadRedirects disableNotFound url={url} />
        {draft && <LivePreviewListener />}

        {/* 1. Hero Mineral Niemeyer com DRE factual */}
        <HeroOneBlock
          blockType="hero_one"
          subtitle="Consultoria em Gestão de Projetos e Engenharia de E-commerce"
          title_line1="Estrutura Operacional Firme."
          title_line2="Margem Real no DRE."
          title_line3="Tecnologia Sem Ilusão."
          description="Ajudamos pequenas e médias empresas do interior paulista a estruturar operações lucrativas, eliminando gargalos em sistemas, estoque e controladoria."
          button1_text="Conhecer Soluções"
          button1_url="/services"
          button2_text="Ver Estudos de Caso"
          button2_url="/projects"
          counter1_upper="Volume Transacionado Auditado"
          counter1_lower="Em transações validadas por conciliação bancária"
          counter1_value="R$ 54M+"
          counter2_upper="Ganho Médio em Margem Operacional"
          counter2_lower="Recuperação de vazamentos em checkout e frete"
          counter2_value="+26.4%"
        />

        {/* 2. Bento Grid de Diagnóstico Operacional em 3 Atmosferas Biofílicas */}
        <section className="mil-section mil-gray-section mil-p-10-8" style={{ position: 'relative' }}>
          <div className="container">
            <div className="row mil-aie mil-mb-8">
              <div className="col-12 col-lg-7">
                <div className="mil-badge mil-badge-amber mil-mb-4">DIAGNÓSTICO OPERACIONAL & DRE</div>
                <h2 className="mil-c-m-1">
                  Vazamentos Invisíveis no E-commerce: <br />
                  <span className="mil-opacity-text">Recuperação Direta no Caixa</span>
                </h2>
              </div>
              <div className="col-12 col-lg-5">
                <p className="mil-c-m-3 mil-t-16" style={{ margin: 0 }}>
                  A maioria das operações perde margem sem perceber: taxas de gateway não auditadas, falsos positivos de antifraude e descompassos de estoque entre o ERP e a loja virtual.
                </p>
              </div>
            </div>

            <div className="row g-4 mil-mb-8">
              {/* Card 1: Botânica / Margem Positiva */}
              <div className="col-12 col-lg-4">
                <div className="mil-card-bio-forest" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="mil-flex-row mil-jcb mil-aic mil-mb-4">
                      <span className="mil-badge mil-badge-forest">CONTROLADORIA & DRE</span>
                      <span className="mil-t-12" style={{ fontFamily: 'var(--font-mono)', color: 'var(--bio-forest)' }}>CPC / IFRS</span>
                    </div>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2.0rem' }}>
                      Auditoria de Margem Líquida & Checkout
                    </h4>
                    <p className="mil-c-m-3 mil-t-14 mil-mb-4" style={{ lineHeight: 1.6 }}>
                      Identificação cirúrgica de perdas em adquirentes, recusas injustificadas de antifraude e descompasso entre o frete cobrado e o faturado pela transportadora.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(36, 71, 53, 0.2)', paddingTop: '1.6rem' }}>
                    <div className="mil-t-12 mil-c-m-3 mil-mb-1" style={{ fontFamily: 'var(--font-mono)' }}>MÉTRICA AUDITADA</div>
                    <div className="mil-counter-1" style={{ color: 'var(--bio-forest)', fontSize: '2.6rem' }}>+18.4% Margem Bruta</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Hidrografia / Engenharia & APIs */}
              <div className="col-12 col-lg-4">
                <div className="mil-card-bio-river" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="mil-flex-row mil-jcb mil-aic mil-mb-4">
                      <span className="mil-badge mil-badge-river">ENGENHARIA HEADLESS</span>
                      <span className="mil-t-12" style={{ fontFamily: 'var(--font-mono)', color: 'var(--bio-river)' }}>NEXT.JS 15</span>
                    </div>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2.0rem' }}>
                      Integração Firme com ERPs Industriais
                    </h4>
                    <p className="mil-c-m-3 mil-t-14 mil-mb-4" style={{ lineHeight: 1.6 }}>
                      Frontend desacoplado com Payload CMS e sincronização bidirecional em tempo real com Totvs, Tiny e Bling sem gargalos de concorrência ou quedas de catálogo.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(36, 69, 88, 0.2)', paddingTop: '1.6rem' }}>
                    <div className="mil-t-12 mil-c-m-3 mil-mb-1" style={{ fontFamily: 'var(--font-mono)' }}>LATÊNCIA OPERACIONAL</div>
                    <div className="mil-counter-1" style={{ color: 'var(--bio-river)', fontSize: '2.6rem' }}>P95 &lt; 120ms</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Geologia / Urgência & Logística */}
              <div className="col-12 col-lg-4">
                <div className="mil-card-bio-terracotta" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="mil-flex-row mil-jcb mil-aic mil-mb-4">
                      <span className="mil-badge mil-badge-amber">GOVERNANÇA DE ESTOQUE</span>
                      <span className="mil-t-12" style={{ fontFamily: 'var(--font-mono)', color: 'var(--acento-terracota)' }}>RMC PAULISTA</span>
                    </div>
                    <h4 className="mil-c-m-1 mil-mb-3" style={{ fontSize: '2.0rem' }}>
                      Estancamento de Rupturas & Logística
                    </h4>
                    <p className="mil-c-m-3 mil-t-14 mil-mb-4" style={{ lineHeight: 1.6 }}>
                      Eliminação de venda fantasma, acuracidade física de múltiplos armazéns e malha de distribuição expressa no interior de São Paulo.
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(122, 66, 7, 0.2)', paddingTop: '1.6rem' }}>
                    <div className="mil-t-12 mil-c-m-3 mil-mb-1" style={{ fontFamily: 'var(--font-mono)' }}>PRAZO DE RESPOSTA</div>
                    <div className="mil-counter-1" style={{ color: 'var(--acento-terracota)', fontSize: '2.6rem' }}>Ciclo de 14 Dias</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mil-tac">
              <Link href="/services" className="mil-btn mil-accent">
                <span>Ver Todas as Soluções de Engenharia</span>
                <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <SectionCurveDivider fillColor="niemeyer" position="bottom" />
        </section>

        {/* 3. Manifesto Squammata & Origem Paulista */}
        <AboutUsBlock
          blockType="about_us"
          badge="MANIFESTO SQUAMMATA"
          title="Origem na Roça Paulista. <br><span class=&quot;mil-c-m-2&quot;>Governança Firme de Caixa.</span>"
          description="A ave Columbina squammata, conhecida no interior como fogo-apagou, guia nossa conduta. Apagamos incêndios operacionais e fiscais de pequenas e médias empresas com método e discrição. Rejeitamos promessas fáceis de enriquecimento rápido para focar na margem real do DRE."
          founder_name="Arthur Saggioratto"
          founder_role="Fundador & Consultor de Estratégia"
          founder_quote="O fogo-apagou só canta protegido na folhagem. Não buscamos holofotes nem vaidade em redes sociais; nossa marca só aparece através do resultado financeiro de nossos clientes."
        />

        {/* 4. Chamada para Diagnóstico Preliminar */}
        <section className="mil-section mil-p-10-8" style={{ backgroundColor: 'var(--branco-niemeyer)', borderTop: '1px solid var(--marrom-borda-suave)' }}>
          <div className="container">
            <div className="mil-card-bio-wood mil-tac" style={{ padding: '5rem 3rem', borderRadius: '24px' }}>
              <div className="mil-badge mil-badge-coffee mil-mb-4">AUDITORIA PRELIMINAR DE OPERAÇÕES</div>
              <h2 className="mil-c-m-1 mil-mb-4" style={{ fontSize: 'clamp(2.4rem, 2.4vw + 0.6rem, 3.6rem)' }}>
                Identifique onde sua margem líquida está vazando.
              </h2>
              <p className="mil-c-m-3 mil-t-16 mil-mb-6" style={{ maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                Atendimento presencial nos principais polos do interior paulista ou remoto para todo o território nacional. Diagnóstico estruturado com entrega de relatório executivo em 14 dias.
              </p>
              <div className="mil-flex-row mil-aic mil-jcc" style={{ gap: '1.6rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="mil-btn mil-accent">
                  <span>Solicitar Diagnóstico Operacional</span>
                  <i className="far fa-arrow-right"></i>
                </Link>
                <Link href="/projects" className="mil-btn mil-dark">
                  <span>Conferir Estudos de Caso</span>
                  <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { layout } = page

  return (
    <Fragment>
      <PageClient page={page} />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderBlocks blocks={layout} />
    </Fragment>
  )
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const getCachedPages = unstable_cache(queryAllPages, ['allPages'])
    const pages = await getCachedPages()

    if (!Array.isArray(pages)) {
      return []
    }

    return pages
      .filter((page) => page?.slug)
      .map(({ slug }) => {
        return {
          slug
        }
      })
  } catch (_e) {
    return []
  }
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const page = await getCachedPage(decodedSlug)

  if (!page && slug === 'home') {
    return generateMeta({
      doc: {
        title: 'Squammata | Consultoria em Gestão de Projetos e Engenharia de E-commerce',
        description: 'Consultoria e engenharia de e-commerce no interior paulista. Operações enxutas, arquitetura headless e margem real auditada no DRE.',
      } as unknown as Partial<Page>,
    })
  }

  const pageData = {
    ...page,
  }

  return generateMeta({ doc: pageData })
}

const getCachedPage = (slug: string): Promise<Page | null> => {
  if (process.env.NODE_ENV === 'development') {
    return queryPageBySlug(slug)
  }
  return unstable_cache(queryPageBySlug, [`page-${slug}`])(slug)
}