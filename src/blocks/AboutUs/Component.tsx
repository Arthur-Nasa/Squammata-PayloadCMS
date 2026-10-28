import React from 'react'
import { Media } from '@/components/Media'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { BirdWatermark } from '@/components/BirdWatermark'

import type { AboutUsBlock as AboutUsBlockProps } from '@/payload-types'

export const AboutUsBlock: React.FC<AboutUsBlockProps> = ({
  badge,
  title,
  description,
  portrait,
  founder_name,
  founder_role,
  founder_quote,
  image,
}) => {
  return (
    <div className="mil-section mil-p-10-8" style={{ backgroundColor: 'var(--branco-niemeyer)' }}>
      <div className="container">
        <div className="row g-4 mil-aic">
          <div className="col-12 col-lg-6">
            <div className="mil-badge mil-badge-amber mil-mb-4">{badge || 'MANIFESTO SQUAMMATA'}</div>
            <h2
              className="mil-mb-4"
              dangerouslySetInnerHTML={{
                __html: sanitizeHTML(
                  title || 'Origem na Roça Paulista. <br><span class="mil-c-m-2">Governança Firme de Caixa.</span>'
                ),
              }}
            />
            <p
              className="mil-t-16 mil-c-m-3 mil-mb-5"
              style={{ lineHeight: 1.6 }}
              dangerouslySetInnerHTML={{
                __html: sanitizeHTML(
                  description ||
                    'A ave Columbina squammata, conhecida no interior como fogo-apagou, guia nossa conduta. Apagamos incêndios operacionais e fiscais de pequenas e médias empresas com método e discrição. Rejeitamos promessas fáceis de enriquecimento rápido para focar na margem real do DRE.'
                ),
              }}
            />
            <div className="mil-founder-quote" style={{ marginTop: '2.5rem' }}>
              <div
                className="mil-portrait"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--marrom-borda-suave)',
                  width: '7.2rem',
                  height: '7.2rem',
                  flexShrink: 0,
                }}
              >
                {portrait ? (
                  <Media resource={portrait} />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'var(--superficie-argila)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold',
                        color: 'var(--marrom-squammata)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      AS
                    </span>
                  </div>
                )}
              </div>
              <div className="mil-text">
                <div className="mil-quote-icon mil-handwrite mil-mb-1" style={{ color: 'var(--acento-terracota)' }}>&quot;</div>
                <div className="mil-flex-row mil-aic mil-mb-2">
                  <h6 className="mil-mr-2" style={{ margin: 0, color: 'var(--carvao-tecnico)' }}>
                    {founder_name || 'Arthur Saggioratto'}
                  </h6>
                  <span className="mil-t-13 mil-c-m-3" style={{ fontFamily: 'var(--font-mono)' }}>
                    / &nbsp;{founder_role || 'Fundador & Consultor de Estratégia'}
                  </span>
                </div>
                <p
                  className="mil-handwrite"
                  style={{ fontSize: '1.6rem', lineHeight: 1.5, color: 'var(--concreto-medio)' }}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHTML(
                      founder_quote ||
                        'O fogo-apagou só canta protegido na folhagem. Não buscamos holofotes nem vaidade em redes sociais; nossa marca só aparece através do resultado financeiro de nossos clientes.'
                    ),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="mil-squama-pattern"
              style={{
                background: 'var(--superficie-argila)',
                borderRadius: '16px',
                border: '1px solid var(--marrom-borda-suave)',
                boxShadow: 'var(--shadow-soft)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BirdWatermark position="right" subtle />
              {image ? (
                <Media resource={image} imgClassName="mil-scale-img" />
              ) : (
                <div style={{ padding: '3.5rem', textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: '440px' }}>
                  <div className="mil-badge mil-badge-coffee mil-mb-3">ESPÉCIE BIOMIMÉTICA</div>
                  <h3 className="mil-mb-3" style={{ color: 'var(--carvao-tecnico)', fontSize: '2.4rem' }}>
                    Columbina squammata
                  </h3>
                  <p className="mil-c-m-3 mil-t-14" style={{ lineHeight: 1.6, margin: 0 }}>
                    A ave fogo-apagou: plumagem escamada para resiliência modular, discrição operacional e compromisso inegociável com a margem líquida do empresário paulista.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}