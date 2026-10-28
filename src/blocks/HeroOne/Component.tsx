import React from 'react'
import Image from 'next/image'
import { Media } from '@/components/Media'
import Link from 'next/link'
import type { HeroOneBlock as HeroOneBlockProps } from '@/payload-types'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { SectionCurveDivider } from '@/components/SectionCurveDivider'
import { BirdWatermark } from '@/components/BirdWatermark'
import { getButtonClasses } from '@/fields/elementCustomization'

export type ExtendedHeroOneProps = HeroOneBlockProps & {
  variant?: 'niemeyer' | 'dark'
  button1_has_triangle?: string | null
  button1_show_icon?: boolean | null
  button2_has_triangle?: string | null
  button2_show_icon?: boolean | null
}

export const HeroOneBlock: React.FC<ExtendedHeroOneProps> = ({
  bgImage,
  icon,
  subtitle,
  title_line1,
  title_line2,
  title_line3,
  description,
  button1_text,
  button1_url,
  button1_color,
  button1_radius,
  button2_text,
  button2_url,
  button2_color,
  button2_radius,
  counter1_upper,
  counter1_lower,
  counter1_value,
  counter2_upper,
  counter2_lower,
  counter2_value,
  variant,
}) => {
  const isDark = variant === 'dark'

  if (isDark) {
    return (
      <div className="mil-hero-1" id="top">
        {bgImage && (
          <Media
            imgClassName="mil-hero-bg mil-scale-img-top"
            resource={bgImage}
          />
        )}
        <div className="mil-overlay"></div>
        <div className="mil-hero-content">
          <div className="mil-container">
            <div className="row mil-aie">
              <div className="col-lg-8 mil-md-mb-10">
                {icon && (
                  <div className="mil-icon mil-c-m-5 mil-mb-2">
                    <Media resource={icon} />
                  </div>
                )}
                <p
                  className="mil-c-m-5 mil-mb-4 mil-t-16"
                  style={{ opacity: 0.92 }}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(
                      subtitle || 'Consultoria em Gestão de Projetos e Engenharia de E-commerce'
                    ),
                  }}
                />
                <h1 className="mil-c-m-5 mil-mb-4">
                  <>{title_line1 || 'Estrutura Operacional Firme.'}<br /></>
                  <>{title_line2 || 'Margem Real no DRE.'}<br /></>
                  <span className="mil-opacity-text">{title_line3 || 'Tecnologia Sem Ilusão.'}</span>
                </h1>
                <p
                  className="mil-c-m-5 mil-mb-4 mil-t-16"
                  style={{ opacity: 0.9, maxWidth: '68ch', lineHeight: 1.6 }}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(
                      description ||
                        'Ajudamos pequenas e médias empresas do interior paulista a estruturar operações lucrativas, eliminando gargalos em sistemas, estoque e controladoria.'
                    ),
                  }}
                />
                <div className="mil-divider mil-mb-4"></div>
                <Link
                  href={button1_url || '/services'}
                  className={getButtonClasses(button1_color || 'terracota', button1_radius, 'mil-mr-4')}
                >
                  <span>{button1_text || 'Conhecer Soluções'}</span>
                  <i className="far fa-arrow-right"></i>
                </Link>
                <Link
                  href={button2_url || '/projects'}
                  className={getButtonClasses(button2_color || 'cafe', button2_radius)}
                >
                  <span>{button2_text || 'Estudos de Caso'}</span>
                  <i className="far fa-arrow-right"></i>
                </Link>
              </div>
              <div className="col-lg-4">
                <div className="mil-counter-box mil-mb-3" style={{ background: 'rgba(26,26,26,0.85)', border: '1px solid #442B21' }}>
                  <div className="mil-flex-row mil-jcb mil-aic mil-mb-2">
                    <span className="mil-badge mil-badge-amber">INDICADOR DRE</span>
                    <span className="mil-c-m-4 mil-t-12" style={{ fontFamily: 'var(--font-mono)' }}>P95 &lt; 120ms</span>
                  </div>
                  <h6 className="mil-c-m-5 mil-mb-2">
                    {counter1_upper || 'Volume Transacionado Auditado'}
                  </h6>
                  <div className="mil-counter-1" style={{ color: '#EBDCBF' }}>
                    {counter1_value || 'R$ 54M'}{!(counter1_value || 'R$ 54M').includes('+') && '+'}
                  </div>
                  <p className="mil-c-m-4 mil-t-12 mil-mt-2" style={{ margin: 0 }}>
                    {counter1_lower || 'Validação de conciliação bancária'}
                  </p>
                </div>
                <div className="mil-counter-box" style={{ background: 'rgba(26,26,26,0.85)', border: '1px solid #442B21' }}>
                  <div className="mil-flex-row mil-jcb mil-aic mil-mb-2">
                    <span className="mil-badge mil-badge-forest">MARGEM LÍQUIDA</span>
                    <span className="mil-c-m-4 mil-t-12" style={{ fontFamily: 'var(--font-mono)' }}>CPC / IFRS</span>
                  </div>
                  <h6 className="mil-c-m-5 mil-mb-2">
                    {counter2_upper || 'Ganho Médio em Margem Operacional'}
                  </h6>
                  <div className="mil-counter-1" style={{ color: '#8FAFC0' }}>
                    {counter2_value || '+26.4'}{!(counter2_value || '+26.4').includes('%') && '%'}
                  </div>
                  <p className="mil-c-m-4 mil-t-12 mil-mt-2" style={{ margin: 0 }}>
                    {counter2_lower || 'Recuperação de vazamentos no checkout'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionCurveDivider fillColor="niemeyer" position="bottom" />
      </div>
    )
  }

  // Canonical Light Mineral Hero (Niemeyer #FAF9F6)
  return (
    <div className="mil-hero-niemeyer mil-squama-pattern" id="top" style={{ paddingTop: '14rem', paddingBottom: '0' }}>
      <BirdWatermark position="right" subtle />
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '7rem' }}>
        <div className="row mil-aie">
          <div className="col-12 col-lg-8 mil-md-mb-6">
            <div className="mil-mb-3" style={{ width: '42px', height: '42px' }}>
              <Image
                src="/logo/squammata/squammata-simbolo-favicon.svg"
                alt="Squammata"
                width={42}
                height={42}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="mil-badge mil-badge-amber mil-mb-4">
              {subtitle || 'CONSULTORIA EM GESTÃO DE PROJETOS & ENGENHARIA DE E-COMMERCE'}
            </div>
            <h1 className="mil-c-m-1 mil-mb-4" style={{ fontSize: 'clamp(3.0rem, 3.2vw + 0.8rem, 4.6rem)', lineHeight: 1.1 }}>
              <>{title_line1 || 'Estrutura Operacional Firme.'}<br /></>
              <>{title_line2 || 'Margem Real no DRE.'}<br /></>
              <span className="mil-opacity-text">{title_line3 || 'Tecnologia Sem Ilusão.'}</span>
            </h1>
            <p
              className="mil-c-m-3 mil-mb-5 mil-t-16"
              style={{ maxWidth: '68ch', lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{
                __html: sanitizeHTML(
                  description ||
                    'Ajudamos pequenas e médias empresas do interior paulista a estruturar operações lucrativas, eliminando gargalos em sistemas, estoque e controladoria.'
                ),
              }}
            />
            <div className="mil-flex-row mil-aic" style={{ gap: '1.6rem', flexWrap: 'wrap' }}>
              <Link
                href={button1_url || '/services'}
                className={getButtonClasses(button1_color || 'terracota', button1_radius)}
              >
                <span>{button1_text || 'Conhecer Soluções'}</span>
                <i className="far fa-arrow-right"></i>
              </Link>
              <Link
                href={button2_url || '/projects'}
                className={getButtonClasses(button2_color || 'cafe', button2_radius)}
              >
                <span>{button2_text || 'Estudos de Caso'}</span>
                <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="mil-counter-box mil-mb-4">
              <div className="mil-flex-row mil-jcb mil-aic mil-mb-2">
                <span className="mil-badge mil-badge-amber">INDICADOR DRE</span>
                <span className="mil-c-m-3 mil-t-12" style={{ fontFamily: 'var(--font-mono)' }}>P95 &lt; 120ms</span>
              </div>
              <h6 className="mil-c-m-1 mil-mb-2">
                {counter1_upper || 'Volume Transacionado Auditado'}
              </h6>
              <div className="mil-counter-1" style={{ color: 'var(--acento-terracota)' }}>
                {counter1_value || 'R$ 54M'}{!(counter1_value || 'R$ 54M').includes('+') && '+'}
              </div>
              <p className="mil-c-m-3 mil-t-12 mil-mt-2" style={{ margin: 0 }}>
                {counter1_lower || 'Volume operacional auditado com conciliação contábil'}
              </p>
            </div>
            <div className="mil-counter-box">
              <div className="mil-flex-row mil-jcb mil-aic mil-mb-2">
                <span className="mil-badge mil-badge-forest">MARGEM LÍQUIDA</span>
                <span className="mil-c-m-3 mil-t-12" style={{ fontFamily: 'var(--font-mono)' }}>CPC / IFRS</span>
              </div>
              <h6 className="mil-c-m-1 mil-mb-2">
                {counter2_upper || 'Ganho Médio em Margem'}
              </h6>
              <div className="mil-counter-1" style={{ color: 'var(--bio-forest)' }}>
                {counter2_value || '+26.4'}{!(counter2_value || '+26.4').includes('%') && '%'}
              </div>
              <p className="mil-c-m-3 mil-t-12 mil-mt-2" style={{ margin: 0 }}>
                {counter2_lower || 'Recuperação de margem por eliminação de perdas em checkout'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionCurveDivider fillColor="argila" position="bottom" />
    </div>
  )
}