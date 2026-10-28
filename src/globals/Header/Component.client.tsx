"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'
import { usePageContext } from '@/providers/PageProvider'

import { HeaderNav } from './Nav'
import { FormBuilder } from '@/components/FormBuilder'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { Media } from '@/components/Media'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'

interface HeaderClientProps {
  data: Header
}

const defaultPopupItems = [
  { label: 'Sede Operacional', value: 'Rua Coronel Quirino, 1200 - Cambuí, Campinas/SP' },
  { label: 'Telefone / WhatsApp', value: '+55 19 99349-7819' },
  { label: 'E-mail Institucional', value: 'contato@squammata.com.br' },
  { label: 'Atendimento Regional', value: 'Campinas e Região Metropolitana (RMC)' },
  { label: 'Horário de Atendimento', value: 'Segunda a Sexta, 08h às 18h' },
]

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const asPath = usePathname()
  const [open, setOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const { headerStyle: pageHeaderStyle } = usePageContext()

  // Determine which header style to use: page override (if set) > global setting > default
  const headerStyle = pageHeaderStyle ? pageHeaderStyle : (data?.headerStyle || 'default')
  const isInvert = headerStyle === 'invert'

  useEffect(() => {
    // close mobile menu on route change
    setOpen(false)
  }, [asPath])

  const logo = data?.logo
  const contact = data?.contact
  const ordercall = data?.ordercall
  const popupItems = contact?.popupItems && contact.popupItems.length > 0 ? contact.popupItems : defaultPopupItems

  const renderLogo = () => {
    const href = logo?.link || '/'
    const altText = logo?.alt || 'Squammata Consultoria e Gestão'

    if (logo?.type === 'text' && (logo.text || logo.fontawesome_icon)) {
      return (
        <Link href={href} className="mil-logo" data-no-swup>
          {logo.fontawesome_icon && <i className={logo.fontawesome_icon}></i>}
          {logo.text && <span>{logo.text}</span>}
        </Link>
      )
    }

    // Se houver uma imagem explicitamente customizada que não seja resíduo legado (logo-l/logo-d/lumex)
    const customLogoUrl = typeof logo?.logo === 'object' && logo.logo && 'url' in logo.logo ? (logo.logo.url as string) : ''
    const isLegacyLogo = !customLogoUrl || customLogoUrl.includes('logo-l') || customLogoUrl.includes('logo-d') || customLogoUrl.includes('lumex')

    if (logo?.type === 'image' && typeof logo.logo === 'object' && logo.logo && !isLegacyLogo) {
      return (
        <Link href={href} className="mil-logo" data-no-swup>
          <Media resource={logo.logo} />
        </Link>
      )
    }

    // Logo Canônico Squammata em SVG (Café Torrado #3A2313 + Terracota Tectônico #C15C3D)
    // Sobre o menu com tint branco e blur, o lockup escuro garante contraste WCAG AAA
    return (
      <Link href={href} className="mil-logo" data-no-swup>
        <Image
          src="/logo/squammata/squammata-lockup-horizontal.svg"
          alt={altText}
          width={220}
          height={72}
          style={{ width: 'auto', height: '4.4rem', objectFit: 'contain' }}
          priority
        />
      </Link>
    )
  }

  return (
    <>
    <div className={`mil-top-panel ${isInvert ? 'mil-invert mil-static' : ''} ${infoOpen ? 'mil-active' : ''}`}>
      <div className="mil-container mil-flex-row mil-aic mil-jcb">
        {renderLogo()}

        <div className={`mil-mobile-menu ${open ? 'mil-active' : ''}`}>
          <nav>
            <HeaderNav data={data} />
          </nav>

          <a
            href={contact?.link || '#'}
            className={`mil-btn mil-open-info ${infoOpen ? 'mil-active' : ''}`}
            data-no-swup
            onClick={(e) => {
              if (contact?.actionType === 'popup' || (!contact?.actionType && !contact?.link)) {
                e.preventDefault()
                setInfoOpen((s) => !s)
              }
            }}
          >
            <span>{contact?.label || 'Solicitar Diagnóstico'}</span>
            <i className={contact?.fontawesome_icon || 'fal fa-envelope'}></i>
            <i className="fal fa-times"></i>
          </a>
        </div>

        <div className={`mil-open-mobile-menu`}>
          <div className={`mil-menu-btn ${open ? 'mil-active' : ''}`} onClick={() => setOpen(!open)}><span /></div>
        </div>
      </div>
    </div>

    <div className={`mil-info-window-frame mil-invert ${infoOpen ? 'mil-active' : ''}`}>
      <div className="mil-info-window">
        <h6 className="mil-mb-5">{contact?.popupTitle || 'Atendimento & Diagnóstico'}</h6>
        <ul className="mil-half-list mil-mb-5">
          {popupItems.map((item, i) => (
            <li className="mil-mb-3" key={`popup-item-${i}`}>
              <p className="mil-c-m-2">{item.label}</p>
              <div className="mil-dots"></div>
              <p>{item.value}</p>
            </li>
          ))}
        </ul>
        {contact?.formTitle && <h6 className="mil-mb-5">{contact.formTitle}</h6>}
        {contact?.form &&
        <FormBuilder form={contact.form as unknown as FormType} />
        }
      </div>
    </div>

    {ordercall &&
    <>
    <div className="mil-right-buttons-frame">
        <div className="mil-right-buttons">
            <a href="#top" className="mil-side-btn mil-back-to-top">
                <i className="far fa-arrow-up"></i>
            </a>
            <button className="mil-side-btn mil-open-window"></button>
        </div>
    </div>
    <div className="mil-order-call-frame">
        <div className="mil-order-call-window">
            <div className="mil-ocw-content">
                <div className="row g-0 mil-aic">
                    <div className="col-lg-7">
                      <div className="mil-form">
                          <h4 className="mil-mb-4" dangerouslySetInnerHTML={{ __html: sanitizeHTML(ordercall.formTitle ? ordercall.formTitle : '') }} />
                          {ordercall.form &&
                          <FormBuilder form={ordercall.form as unknown as FormType} submitButtonAlign={'left'} />
                          }
                      </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="mil-popup-banner">
                            {ordercall.bgImage && (
                              <Media
                                imgClassName="mil-ocw-img"
                                resource={ordercall.bgImage}
                              />
                            )}
                            <button className="mil-close-popup"><i className="fal fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    }
    </>
  )
}
