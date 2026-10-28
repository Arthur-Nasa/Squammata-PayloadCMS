'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { Media } from '@/components/Media'
import type { Team } from '@/payload-types'

export type CardTeamData = Pick<Team, 'slug' | 'meta' | 'title' | 'short'> & {
  colorVariant?: 'terracotta' | 'forest' | 'river' | 'coffee' | 'amber' | 'clay'
  disciplineBadge?: string
  initials?: string
}

export interface AtmosphereConfig {
  gradient: string
  badgeBg: string
  badgeText: string
  topAccent: string
  defaultDiscipline: string
}

export const colorAtmospheres: Record<string, AtmosphereConfig> = {
  terracotta: {
    gradient: 'linear-gradient(145deg, #2A170E 0%, #C15C3D 100%)',
    badgeBg: '#C15C3D',
    badgeText: '#FAF9F6',
    topAccent: '#C15C3D',
    defaultDiscipline: 'Estratégia & DRE',
  },
  forest: {
    gradient: 'linear-gradient(145deg, #13241C 0%, #2D4A3E 100%)',
    badgeBg: '#2D4A3E',
    badgeText: '#FAF9F6',
    topAccent: '#2D4A3E',
    defaultDiscipline: 'Voz Institucional',
  },
  amber: {
    gradient: 'linear-gradient(145deg, #2C1A0E 0%, #D9822B 100%)',
    badgeBg: '#D9822B',
    badgeText: '#FAF9F6',
    topAccent: '#D9822B',
    defaultDiscipline: 'Performance & Mídia',
  },
  river: {
    gradient: 'linear-gradient(145deg, #162631 0%, #4A6B82 100%)',
    badgeBg: '#4A6B82',
    badgeText: '#FAF9F6',
    topAccent: '#4A6B82',
    defaultDiscipline: 'Engenharia Headless',
  },
  coffee: {
    gradient: 'linear-gradient(145deg, #1D1009 0%, #4E3220 100%)',
    badgeBg: '#3A2313',
    badgeText: '#FAF9F6',
    topAccent: '#3A2313',
    defaultDiscipline: 'Controladoria & IFRS',
  },
  clay: {
    gradient: 'linear-gradient(145deg, #22140F 0%, #8C4B33 100%)',
    badgeBg: '#8C4B33',
    badgeText: '#FAF9F6',
    topAccent: '#8C4B33',
    defaultDiscipline: 'Logística & Margem',
  },
}

export const TeamCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardTeamData
  relationTo?: 'team'
  title?: string
  angleGray?: boolean
  colorVariant?: 'terracotta' | 'forest' | 'river' | 'coffee' | 'amber' | 'clay'
  disciplineBadge?: string
}> = (props) => {
  const { doc, relationTo = 'team', title: titleFromProps, colorVariant: propVariant, disciplineBadge: propDiscipline } = props
  
  const { slug, meta, title, short } = doc || {}
  const { image: metaImage } = meta || {}
  
  const titleToUse = titleFromProps || title || 'Especialista Técnico'
  const sanitizedDescription = short?.replace(/\s/g, ' ') || 'Consultoria e Engenharia de Operações'
  const href = `/${relationTo}/${slug || '#'}`

  // Mapeamento determinístico de atmosfera biofílica
  const getAtmosphere = (): AtmosphereConfig => {
    if (propVariant && colorAtmospheres[propVariant]) return colorAtmospheres[propVariant]
    if (doc?.colorVariant && colorAtmospheres[doc.colorVariant]) return colorAtmospheres[doc.colorVariant]
    
    const s = (slug || titleToUse || '').toLowerCase()
    if (s.includes('arthur') || s.includes('estrategia') || s.includes('fundador')) return colorAtmospheres.terracotta
    if (s.includes('carolina') || s.includes('redacao') || s.includes('voz')) return colorAtmospheres.forest
    if (s.includes('fabricio') || s.includes('midia') || s.includes('performance')) return colorAtmospheres.amber
    if (s.includes('matheus') || s.includes('software') || s.includes('headless')) return colorAtmospheres.river
    if (s.includes('renata') || s.includes('contabil') || s.includes('dre')) return colorAtmospheres.coffee
    if (s.includes('lucas') || s.includes('tracking') || s.includes('dados')) return colorAtmospheres.river
    if (s.includes('mariana') || s.includes('logistica')) return colorAtmospheres.clay
    if (s.includes('gustavo') || s.includes('infra')) return colorAtmospheres.forest

    return colorAtmospheres.terracotta
  }

  const atmosphere = getAtmosphere()
  const discipline = propDiscipline || doc?.disciplineBadge || atmosphere.defaultDiscipline

  // Extração das iniciais para o monograma
  const getInitials = (name: string): string => {
    if (doc?.initials) return doc.initials
    const parts = name.trim().split(/\s+/)
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    if (parts.length === 1 && parts[0].length >= 2) return parts[0].substring(0, 2).toUpperCase()
    return 'SQ'
  }

  // Determinação de nível e localidade
  const getSeniority = (): string => {
    const s = (slug || titleToUse || '').toLowerCase()
    if (s.includes('arthur')) return 'Sócio-Fundador'
    if (s.includes('carolina')) return 'Liderança · Conteúdo'
    if (s.includes('fabricio')) return 'Lead · Performance'
    if (s.includes('matheus')) return 'Staff Engineer'
    if (s.includes('renata')) return 'Sênior · Controladoria'
    if (s.includes('lucas')) return 'Especialista · Tracking'
    if (s.includes('mariana')) return 'Lead · Fulfillment'
    if (s.includes('gustavo')) return 'Sênior · Cloud AWS'
    return 'Consultoria Sênior'
  }

  const seniorityLabel = getSeniority()
  const initials = getInitials(titleToUse)

  return (
    <Link 
      href={href} 
      className="mil-team-card"
      style={{
        borderTop: `4px solid ${atmosphere.topAccent}`,
      }}
    >
      <div className="mil-portrait" style={{ background: atmosphere.gradient }}>
        {!metaImage && (
          <div 
            className="mil-avatar-artistic"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.6rem',
              overflow: 'hidden',
            }}
          >
            {/* Tag de Especialidade */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '100px',
                  backgroundColor: atmosphere.badgeBg,
                  color: atmosphere.badgeText,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                }}
              >
                {discipline}
              </span>
            </div>

            {/* Marca d'água da Ave e Monograma Central */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
              <div 
                style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  opacity: 0.12,
                  pointerEvents: 'none',
                }}
              >
                <Image
                  src="/logo/squammata/squammata-simbolo-favicon.svg"
                  alt="Squammata Simbolo"
                  width={120}
                  height={120}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <span 
                style={{
                  fontFamily: 'var(--font-heading, "Zilla Slab", serif)',
                  fontSize: '3.6rem',
                  fontWeight: 700,
                  color: '#FAF9F6',
                  letterSpacing: '0.08em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  zIndex: 2,
                }}
              >
                {initials}
              </span>
            </div>

            {/* Rótulo inferior */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 2 }}>
              <span 
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '1.05rem',
                  color: 'rgba(250, 249, 246, 0.65)',
                  letterSpacing: '0.03em',
                }}
              >
                CORPO TÉCNICO
              </span>
            </div>
          </div>
        )}

        {metaImage && (
          <Media 
            resource={metaImage} 
            size="33vw"  
          />
        )}

        <div className="mil-plus" style={{ backgroundColor: atmosphere.topAccent }}>
          <i className="fal fa-arrow-right"></i>
        </div>
      </div>

      <div className="mil-description">
        <h6 className="mil-mb-1">{titleToUse}</h6>
        <p className="mil-c-m-2">{sanitizedDescription}</p>

        <div 
          className="mil-team-card-footer"
          style={{
            marginTop: 'auto',
            paddingTop: '1.4rem',
            borderTop: '1px solid var(--marrom-borda-suave, #E5DED2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '1.1rem',
              color: 'var(--concreto-medio, #5E5852)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontWeight: 600,
            }}
          >
            <span 
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: atmosphere.topAccent,
                boxShadow: `0 0 6px ${atmosphere.topAccent}88`,
              }} 
            />
            {seniorityLabel}
          </span>
          <span
            className="mil-card-arrow-label"
            style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: atmosphere.topAccent,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'transform 0.2s ease',
            }}
          >
            Consultoria <i className="far fa-arrow-right" style={{ fontSize: '1.05rem' }}></i>
          </span>
        </div>
      </div>    
    </Link>
  )
}
