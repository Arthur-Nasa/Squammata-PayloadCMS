'use client'

import React, { useState, useMemo } from 'react'

import { TeamCard, CardTeamData } from '@/components/TeamCard'

export type Props = {
  posts?: CardTeamData[]
  angleGray?: boolean
  showFilter?: boolean
  showAtmosphereBar?: boolean
}

// 8 Especialistas Canônicos da Squammata (grade 4x2 cobrindo as 6 variações biofílicas)
export const canonicalDemonstrationTeam: CardTeamData[] = [
  {
    title: 'Arthur Saggioratto',
    short: 'Fundador & Consultoria em Estratégia de Operações, Governança de CMV e DRE.',
    slug: 'arthur',
    colorVariant: 'terracotta',
    disciplineBadge: 'Estratégia & DRE',
    initials: 'AS',
  },
  {
    title: 'Carolina',
    short: 'Redação Técnica, Tom de Voz Institucional e Narrativa de Marca Biofílica.',
    slug: 'carolina',
    colorVariant: 'forest',
    disciplineBadge: 'Voz Institucional',
    initials: 'CA',
  },
  {
    title: 'Fabricio',
    short: 'Mídia de Performance, Alocação de Capital e Otimização de ROAS Real.',
    slug: 'fabricio',
    colorVariant: 'amber',
    disciplineBadge: 'Performance & Mídia',
    initials: 'FA',
  },
  {
    title: 'Matheus',
    short: 'Engenharia Headless, Arquitetura Next.js App Router e APIs de Alto Volume.',
    slug: 'matheus',
    colorVariant: 'river',
    disciplineBadge: 'Engenharia Headless',
    initials: 'MA',
  },
  {
    title: 'Renata Dias',
    short: 'Controladoria Financeira, Auditoria de Margem IFRS e Análise de CMV.',
    slug: 'renata-dias',
    colorVariant: 'coffee',
    disciplineBadge: 'Controladoria & IFRS',
    initials: 'RD',
  },
  {
    title: 'Lucas Mendes',
    short: 'Tracking Server-Side, Blindagem de Tags e Governança GA4 / Meta CAPI.',
    slug: 'lucas-mendes',
    colorVariant: 'river',
    disciplineBadge: 'Tracking Server-Side',
    initials: 'LM',
  },
  {
    title: 'Mariana Prado',
    short: 'Logística Reversa, Fulfillment Dedicado e Nível de Serviço para RMC.',
    slug: 'mariana-prado',
    colorVariant: 'clay',
    disciplineBadge: 'Fulfillment & RMC',
    initials: 'MP',
  },
  {
    title: 'Gustavo Silveira',
    short: 'Infraestrutura Cloud, Resiliência AWS, Observabilidade e CI/CD Contínuo.',
    slug: 'gustavo-silveira',
    colorVariant: 'forest',
    disciplineBadge: 'Cloud & Resiliência',
    initials: 'GS',
  },
]

// Variações cromáticas canônicas para demonstração
const atmosphereChips = [
  { key: 'all', label: 'Todas as Disciplinas', color: '#3A2313' },
  { key: 'terracotta', label: 'Estratégia & DRE', color: '#C15C3D' },
  { key: 'forest', label: 'Voz & Resiliência', color: '#2D4A3E' },
  { key: 'amber', label: 'Mídia & Performance', color: '#D9822B' },
  { key: 'river', label: 'Headless & Dados', color: '#4A6B82' },
  { key: 'coffee', label: 'Controladoria & IFRS', color: '#3A2313' },
  { key: 'clay', label: 'Fulfillment & Margem', color: '#8C4B33' },
]

export const CollectionTeam: React.FC<Props> = (props) => {
  const { posts, angleGray = false, showFilter = true, showAtmosphereBar = true } = props
  const [activeFilter, setActiveFilter] = useState<string>('all')

  // Combina os posts do Payload com os especialistas canônicos para garantir grade 4x2 completa e equilibrada
  const normalizedTeam = useMemo(() => {
    const validPassed = (posts || []).filter((p) => p && typeof p === 'object')

    // Atribuição de atributos e chave de desduplicação
    const getCleanKey = (p: CardTeamData): string => {
      const s = (p.slug || p.title || '').toLowerCase()
      if (s.includes('arthur')) return 'arthur'
      if (s.includes('carolina')) return 'carolina'
      if (s.includes('fabricio')) return 'fabricio'
      if (s.includes('matheus')) return 'matheus'
      if (s.includes('renata')) return 'renata'
      if (s.includes('lucas')) return 'lucas'
      if (s.includes('mariana')) return 'mariana'
      if (s.includes('gustavo')) return 'gustavo'
      if (s.includes('john')) return 'john'
      return s
    }

    const seenKeys = new Set<string>()
    const merged: CardTeamData[] = []

    // 1. Processa os itens passados do banco de dados
    for (const p of validPassed) {
      const key = getCleanKey(p)
      if (seenKeys.has(key)) continue
      seenKeys.add(key)

      const s = (p.slug || p.title || '').toLowerCase()
      let colorVariant = p.colorVariant
      let disciplineBadge = p.disciplineBadge
      let initials = p.initials

      if (s.includes('arthur')) {
        colorVariant = 'terracotta'
        disciplineBadge = 'Estratégia & DRE'
        initials = 'AS'
      } else if (s.includes('carolina')) {
        colorVariant = 'forest'
        disciplineBadge = 'Voz Institucional'
        initials = 'CA'
      } else if (s.includes('fabricio')) {
        colorVariant = 'amber'
        disciplineBadge = 'Performance & Mídia'
        initials = 'FA'
      } else if (s.includes('matheus')) {
        colorVariant = 'river'
        disciplineBadge = 'Engenharia Headless'
        initials = 'MA'
      } else if (s.includes('john')) {
        colorVariant = 'clay'
        disciplineBadge = 'Produção de Ativos'
        initials = 'JO'
      }

      merged.push({
        ...p,
        colorVariant: colorVariant || p.colorVariant,
        disciplineBadge: disciplineBadge || p.disciplineBadge,
        initials: initials || p.initials,
      })
    }

    // 2. Complementa com os especialistas canônicos até totalizar 8
    for (const canonical of canonicalDemonstrationTeam) {
      const key = getCleanKey(canonical)
      if (!seenKeys.has(key)) {
        merged.push(canonical)
        seenKeys.add(key)
      }
      if (merged.length >= 8) break
    }

    // 3. Ordenação canônica: Fundador & Liderança primeiro, seguida por Engenharia e Controladoria
    const orderPriority: Record<string, number> = {
      arthur: 1,
      carolina: 2,
      fabricio: 3,
      matheus: 4,
      renata: 5,
      lucas: 6,
      mariana: 7,
      gustavo: 8,
      john: 9,
    }

    return merged.sort((a, b) => {
      const priorityA = orderPriority[getCleanKey(a)] || 99
      const priorityB = orderPriority[getCleanKey(b)] || 99
      return priorityA - priorityB
    }).slice(0, 8)
  }, [posts])

  // Filtragem interativa
  const filteredTeam = useMemo(() => {
    if (activeFilter === 'all') return normalizedTeam

    return normalizedTeam.filter((member) => {
      const s = (member.slug || member.title || '').toLowerCase()
      const d = (member.disciplineBadge || '').toLowerCase()

      if (activeFilter === 'terracotta') {
        return member.colorVariant === 'terracotta' || s.includes('arthur') || d.includes('estratégia')
      }
      if (activeFilter === 'forest') {
        return member.colorVariant === 'forest' || s.includes('carolina') || s.includes('gustavo') || d.includes('voz') || d.includes('cloud')
      }
      if (activeFilter === 'amber') {
        return member.colorVariant === 'amber' || s.includes('fabricio') || d.includes('mídia') || d.includes('performance')
      }
      if (activeFilter === 'river') {
        return member.colorVariant === 'river' || s.includes('matheus') || s.includes('lucas') || d.includes('headless') || d.includes('tracking')
      }
      if (activeFilter === 'coffee') {
        return member.colorVariant === 'coffee' || s.includes('renata') || d.includes('controladoria') || d.includes('dre')
      }
      if (activeFilter === 'clay') {
        return member.colorVariant === 'clay' || s.includes('mariana') || d.includes('fulfillment') || d.includes('logística')
      }
      return true
    })
  }, [normalizedTeam, activeFilter])

  return (
    <div className="mil-team-collection-wrapper">
      {/* 1. Barra de Demonstração Cromática & Filtro por Atmosfera Biofílica */}
      {showFilter && (
        <div 
          className="mil-atmosphere-filter-bar mil-mb-6"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--marrom-borda-suave, #E5DED2)',
            borderRadius: '16px',
            padding: '2.0rem 2.4rem',
            boxShadow: '0 4px 20px rgba(58, 35, 19, 0.04)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.6rem', marginBottom: '1.6rem' }}>
            <div>
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--acento-terracota, #C15C3D)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Variações Cromáticas Canônicas · Biofilia Paulista
              </span>
              <h5 style={{ fontFamily: 'var(--font-heading, "Zilla Slab", serif)', fontSize: '1.8rem', margin: 0, color: 'var(--carvao-tecnico, #3A2313)' }}>
                Corpo Técnico Alocado por Disciplina
              </h5>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '1.15rem',
                  color: 'var(--concreto-medio, #5E5852)',
                  backgroundColor: 'var(--marrom-borda-suave, #F3EFE6)',
                  padding: '0.4rem 1.0rem',
                  borderRadius: '100px',
                }}
              >
                {filteredTeam.length} de {normalizedTeam.length} Especialistas
              </span>
            </div>
          </div>

          {/* Filtros em Pílula */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              alignItems: 'center',
            }}
          >
            {atmosphereChips.map((chip) => {
              const isActive = activeFilter === chip.key
              return (
                <button
                  key={chip.key}
                  type="button"
                  onClick={() => setActiveFilter(chip.key)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '0.65rem 1.4rem',
                    borderRadius: '100px',
                    border: isActive ? `2px solid ${chip.color}` : '1px solid var(--marrom-borda-suave, #E5DED2)',
                    backgroundColor: isActive ? chip.color : '#FAF9F6',
                    color: isActive ? '#FFFFFF' : 'var(--carvao-tecnico, #3A2313)',
                    fontFamily: 'var(--font-body, "Quicksand", sans-serif)',
                    fontSize: '1.3rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 4px 12px rgba(58, 35, 19, 0.15)' : 'none',
                  }}
                >
                  <span 
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#FFFFFF' : chip.color,
                      flexShrink: 0,
                    }} 
                  />
                  <span>{chip.label}</span>
                </button>
              )
            })}
          </div>

          {/* Faixa de Demonstração de Paleta de Cores e Tokens WCAG */}
          {showAtmosphereBar && (
            <div 
              style={{
                marginTop: '1.8rem',
                paddingTop: '1.4rem',
                borderTop: '1px solid var(--marrom-borda-suave, #F0EBE1)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.2rem',
              }}
            >
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '1.05rem',
                  color: 'var(--concreto-medio, #7A7269)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Tokens Ativos:
              </span>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', flexGrow: 1 }}>
                <span style={{ backgroundColor: '#FAF9F6', border: '1px solid rgba(193, 92, 61, 0.3)', padding: '0.25rem 0.8rem', borderRadius: '6px', fontSize: '1.1rem', fontFamily: 'var(--font-mono, monospace)', color: '#3A2313', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#C15C3D' }}></span>
                  #C15C3D (Terracota) · AAA
                </span>
                <span style={{ backgroundColor: '#FAF9F6', border: '1px solid rgba(45, 74, 62, 0.3)', padding: '0.25rem 0.8rem', borderRadius: '6px', fontSize: '1.1rem', fontFamily: 'var(--font-mono, monospace)', color: '#3A2313', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#2D4A3E' }}></span>
                  #2D4A3E (Mata Atlântica) · AAA
                </span>
                <span style={{ backgroundColor: '#FAF9F6', border: '1px solid rgba(217, 130, 43, 0.3)', padding: '0.25rem 0.8rem', borderRadius: '6px', fontSize: '1.1rem', fontFamily: 'var(--font-mono, monospace)', color: '#3A2313', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#D9822B' }}></span>
                  #D9822B (Âmbar Ocre) · AAA
                </span>
                <span style={{ backgroundColor: '#FAF9F6', border: '1px solid rgba(74, 107, 130, 0.3)', padding: '0.25rem 0.8rem', borderRadius: '6px', fontSize: '1.1rem', fontFamily: 'var(--font-mono, monospace)', color: '#3A2313', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#4A6B82' }}></span>
                  #4A6B82 (Leito de Rio) · AAA
                </span>
                <span style={{ backgroundColor: '#FAF9F6', border: '1px solid rgba(58, 35, 19, 0.3)', padding: '0.25rem 0.8rem', borderRadius: '6px', fontSize: '1.1rem', fontFamily: 'var(--font-mono, monospace)', color: '#3A2313', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#3A2313' }}></span>
                  #3A2313 (Café Torrado) · AAA
                </span>
                <span style={{ backgroundColor: '#FAF9F6', border: '1px solid rgba(140, 75, 51, 0.3)', padding: '0.25rem 0.8rem', borderRadius: '6px', fontSize: '1.1rem', fontFamily: 'var(--font-mono, monospace)', color: '#3A2313', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: '#8C4B33' }}></span>
                  #8C4B33 (Argila Seca) · AAA
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. Grid de Cards Balanceado (4x2 com g-4 uniforme) */}
      <div className="row g-4 mil-mb-8">
        {filteredTeam.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <div 
                className="col-12 col-sm-6 col-lg-3 mil-flex-column" 
                key={`${result.slug || index}`}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <TeamCard doc={result} relationTo="team" angleGray={angleGray} />
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}