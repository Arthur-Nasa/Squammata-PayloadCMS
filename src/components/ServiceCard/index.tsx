'use client'

import Link from 'next/link'
import React from 'react'

import { Media } from '@/components/Media'
import type { Service } from '@/payload-types'

export type CardServiceData = Pick<Service, 'slug' | 'meta' | 'title' | 'short' | 'list'>

import Image from 'next/image'

export const ServiceCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardServiceData
  relationTo?: 'services'
  title?: string
}> = (props) => {
  const { doc, relationTo, title: titleFromProps } = props

  const { slug, meta, title, short, list } = doc || {}
  const { image: metaImage } = meta || {}
  
  const titleToUse = titleFromProps || title
  const sanitizedDescription = short?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  // Mapeamento de cor e disciplina por serviço
  const getServiceAtmosphere = () => {
    const s = (slug || titleToUse || '').toLowerCase()
    if (s.includes('fogo-apagou') || s.includes('auditoria') || s.includes('dre')) {
      return {
        accent: '#C15C3D',
        badge: '#C15C3D',
        gradient: 'linear-gradient(145deg, #2A170E 0%, #C15C3D 100%)',
        discipline: 'Diagnóstico & DRE',
      }
    }
    if (s.includes('engenharia') || s.includes('rastreamento') || s.includes('headless')) {
      return {
        accent: '#4A6B82',
        badge: '#4A6B82',
        gradient: 'linear-gradient(145deg, #162631 0%, #4A6B82 100%)',
        discipline: 'Engenharia & Tracking',
      }
    }
    if (s.includes('performance') || s.includes('midia')) {
      return {
        accent: '#D9822B',
        badge: '#D9822B',
        gradient: 'linear-gradient(145deg, #2C1A0E 0%, #D9822B 100%)',
        discipline: 'Mídia & ROAS',
      }
    }
    return {
      accent: '#2D4A3E',
      badge: '#2D4A3E',
      gradient: 'linear-gradient(145deg, #13241C 0%, #2D4A3E 100%)',
      discipline: 'Operação & Governança',
    }
  }

  const atmosphere = getServiceAtmosphere()

  return (
    <Link href={href} className="mil-large-card">
        <div className="mil-card-head">
            {!metaImage && (
              <div 
                className="mil-image-placeholder" 
                style={{ 
                  position: 'absolute',
                  inset: 0,
                  width: '100%', 
                  height: '100%', 
                  background: atmosphere.gradient, 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: '2.0rem',
                }}
              >
                <div style={{ position: 'absolute', width: '80px', height: '80px', opacity: 0.12, pointerEvents: 'none' }}>
                  <Image
                    src="/logo/squammata/squammata-simbolo-favicon.svg"
                    alt="Squammata"
                    width={80}
                    height={80}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    backgroundColor: atmosphere.badge, 
                    color: '#FAF9F6', 
                    padding: '0.4rem 1.0rem',
                    borderRadius: '100px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    zIndex: 2,
                  }}
                >
                  {atmosphere.discipline}
                </span>
              </div>
            )}
            {metaImage && 
            <Media 
                resource={metaImage} 
                size="33vw"  
            />
            }
            <div className="mil-plus" style={{ backgroundColor: atmosphere.accent }}>
                <i className="fal fa-arrow-right"></i>
            </div>
        </div>
        <div 
          className="mil-card"
          style={{
            borderTop: `4px solid ${atmosphere.accent}`,
          }}
        >
            {titleToUse && <h4>{titleToUse}</h4>}
            {short && <p>{sanitizedDescription}</p>}
            <div className="mil-divider mil-w-100 mil-mb-3"></div>
            {list &&
            <ul className="mil-check-list">
                {list?.map((item, index) => (
                <li key={`service-list-item-${index}`}>{item.text}</li>
                ))}
            </ul>
            }
        </div>    
    </Link>
  )
}
