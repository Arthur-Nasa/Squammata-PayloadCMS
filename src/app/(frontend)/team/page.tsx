import type { Metadata } from 'next/types'

import { CollectionTeam } from '@/components/CollectionTeam'
import { Pagination } from '@/components/Pagination'
import PageClient from './page.client'
import { unstable_cache } from 'next/cache'
import { getCachedGlobal, getCachedGlobalMeta } from '@/utilities/getGlobals'
import type { TeamPage, Page } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { generateMeta } from '@/utilities/generateMeta'
import { queryTeam } from '@/app/_fetches'

import { IntroBlock } from '@/blocks/Intro/Component'

export default async function Page() {
  const teamData: TeamPage = await getCachedGlobal('team_page', 0)()
  const limit = 8;
  const team = await queryTeam(1, limit);

  return (
    <>
      <PageClient />

      {teamData?.layout_before ? (
        <RenderBlocks blocks={teamData.layout_before} />
      ) : (
        <IntroBlock blockType="intro" short_title="Equipe" title="Corpo Técnico & Especialistas" />
      )}

      <div className="mil-section mil-p-10-6">
        <div className="container">
            <div className="row mil-aie mil-mb-10">
                <div className="col-12 col-md-6 mil-sm-mb-4">
                    <div className="mil-badge mil-mb-4">{teamData.badge || 'Equipe Técnica'}</div>
                    <h2 className="mil-c-m-1" dangerouslySetInnerHTML={{ __html: sanitizeHTML(teamData.title || 'Especialistas em <br><span class="mil-opacity-text">Engenharia & Operações</span>') }} />
                </div>
                <div className="col-12 col-md-6">
                    <div className="mil-flex-column mil-jce">
                        <p className="mil-c-m-2 mil-t-16" dangerouslySetInnerHTML={{ __html: sanitizeHTML(teamData.description || 'Profissionais dedicados à governança de dados, desenvolvimento headless, controladoria de DRE e gestão técnica de mídia.') }} />
                    </div>
                </div>
            </div>
            
            <CollectionTeam posts={team.docs} />

            {team.totalPages > 1 && team.page && (
              <Pagination pageType={"team"} page={team.page} totalPages={team.totalPages} />
            )}

            {/* Seção de Demonstração Cromática & Pilares Técnicos */}
            <div className="mil-chromatic-pillars-section mil-mt-10">
              <div className="row mil-aie mil-mb-6">
                <div className="col-12 col-md-7">
                  <div className="mil-badge mil-badge-coffee mil-mb-3" style={{ borderRadius: '100px' }}>
                    MATRIZ CROMÁTICA & PILARES OPERACIONAIS
                  </div>
                  <h3 className="mil-c-m-1" style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '2.8rem' }}>
                    Demonstração de Impacto por <span className="mil-opacity-text">Atmosfera de Cor</span>
                  </h3>
                </div>
                <div className="col-12 col-md-5">
                  <p className="mil-c-m-2 mil-t-14">
                    Cada matiz do Design System v4.2 governa uma disciplina técnica da esteira, com métricas atreladas diretamente ao DRE e à performance do e-commerce.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {/* 01. Terracota Tectônico */}
                <div className="col-12 col-md-6 col-lg-3">
                  <div 
                    className="mil-card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--marrom-borda-suave, #E5DED2)',
                      borderTop: '4px solid #C15C3D',
                      padding: '2.4rem 2.0rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 18px rgba(58, 35, 19, 0.04)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.6rem' }}>
                      <span 
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          backgroundColor: 'rgba(193, 92, 61, 0.12)',
                          color: '#C15C3D',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '100px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Terracota #C15C3D
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '1.0rem', color: '#7A7269' }}>01 / DRE</span>
                    </div>

                    <div style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '3.6rem', fontWeight: 700, color: '#C15C3D', lineHeight: 1.1, marginBottom: '0.8rem' }}>
                      +34.8%
                    </div>

                    <h5 style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '1.75rem', fontWeight: 600, color: '#3A2313', marginBottom: '0.8rem' }}>
                      Margem de Contribuição
                    </h5>

                    <p style={{ fontFamily: 'var(--font-body, "Quicksand", sans-serif)', fontSize: '1.35rem', color: '#5E5852', lineHeight: 1.5, margin: 0 }}>
                      Auditoria de taxas de adquirentes, renegociação de prazos e blindagem de CMV contra desvios de estoque.
                    </p>
                  </div>
                </div>

                {/* 02. Leito de Rio */}
                <div className="col-12 col-md-6 col-lg-3">
                  <div 
                    className="mil-card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--marrom-borda-suave, #E5DED2)',
                      borderTop: '4px solid #4A6B82',
                      padding: '2.4rem 2.0rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 18px rgba(58, 35, 19, 0.04)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.6rem' }}>
                      <span 
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          backgroundColor: 'rgba(74, 107, 130, 0.12)',
                          color: '#4A6B82',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '100px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Leito de Rio #4A6B82
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '1.0rem', color: '#7A7269' }}>02 / SPEED</span>
                    </div>

                    <div style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '3.6rem', fontWeight: 700, color: '#4A6B82', lineHeight: 1.1, marginBottom: '0.8rem' }}>
                      99/100
                    </div>

                    <h5 style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '1.75rem', fontWeight: 600, color: '#3A2313', marginBottom: '0.8rem' }}>
                      Lighthouse Headless
                    </h5>

                    <p style={{ fontFamily: 'var(--font-body, "Quicksand", sans-serif)', fontSize: '1.35rem', color: '#5E5852', lineHeight: 1.5, margin: 0 }}>
                      Next.js App Router ultra-otimizado com TTFB inferior a 90ms e carregamento assíncrono não-bloqueante.
                    </p>
                  </div>
                </div>

                {/* 03. Âmbar Ocre */}
                <div className="col-12 col-md-6 col-lg-3">
                  <div 
                    className="mil-card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--marrom-borda-suave, #E5DED2)',
                      borderTop: '4px solid #D9822B',
                      padding: '2.4rem 2.0rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 18px rgba(58, 35, 19, 0.04)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.6rem' }}>
                      <span 
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          backgroundColor: 'rgba(217, 130, 43, 0.12)',
                          color: '#D9822B',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '100px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Âmbar #D9822B
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '1.0rem', color: '#7A7269' }}>03 / ROAS</span>
                    </div>

                    <div style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '3.6rem', fontWeight: 700, color: '#D9822B', lineHeight: 1.1, marginBottom: '0.8rem' }}>
                      0%
                    </div>

                    <h5 style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '1.75rem', fontWeight: 600, color: '#3A2313', marginBottom: '0.8rem' }}>
                      Dispersão de Atribuição
                    </h5>

                    <p style={{ fontFamily: 'var(--font-body, "Quicksand", sans-serif)', fontSize: '1.35rem', color: '#5E5852', lineHeight: 1.5, margin: 0 }}>
                      Mensuração Server-Side de primeira parte com CAPI e GA4 protegidos contra bloqueadores de navegador.
                    </p>
                  </div>
                </div>

                {/* 04. Mata Atlântica */}
                <div className="col-12 col-md-6 col-lg-3">
                  <div 
                    className="mil-card"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      border: '1px solid var(--marrom-borda-suave, #E5DED2)',
                      borderTop: '4px solid #2D4A3E',
                      padding: '2.4rem 2.0rem',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 18px rgba(58, 35, 19, 0.04)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.6rem' }}>
                      <span 
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          backgroundColor: 'rgba(45, 74, 62, 0.12)',
                          color: '#2D4A3E',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '100px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Mata Atlântica #2D4A3E
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '1.0rem', color: '#7A7269' }}>04 / LTV</span>
                    </div>

                    <div style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '3.6rem', fontWeight: 700, color: '#2D4A3E', lineHeight: 1.1, marginBottom: '0.8rem' }}>
                      4.2x
                    </div>

                    <h5 style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '1.75rem', fontWeight: 600, color: '#3A2313', marginBottom: '0.8rem' }}>
                      LTV / CAC em Recompras
                    </h5>

                    <p style={{ fontFamily: 'var(--font-body, "Quicksand", sans-serif)', fontSize: '1.35rem', color: '#5E5852', lineHeight: 1.5, margin: 0 }}>
                      Tom de voz proprietário e régua de retenção que fideliza compradores qualificados sem descontos corrosivos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {teamData.layout_after &&
      <RenderBlocks blocks={teamData.layout_after} />
      }
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const teamData: TeamPage = await getCachedGlobalMeta('team_page', 1)()
  const pageTeamData: Page = {
    id: 0,
    title: '',
    updatedAt: '',
    createdAt: '',
    layout: [],
    meta: teamData.meta,
    slug: "team"
  }

  return generateMeta({doc: pageTeamData})
}

const getCachedTeam = unstable_cache(
  async (limit) => {
    return queryTeam(1, limit);
  },
  ['team-grid']
);