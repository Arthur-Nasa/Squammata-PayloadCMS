'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Footer as FooterType } from '@/payload-types'
import { usePageContext } from '@/providers/PageProvider'
import { Media } from '@/components/Media'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { defaultSiteConfig } from '@/site.config'

interface FooterProps {
  data: FooterType | null | undefined
}

const defaultMainMenu = [
  { label: 'Serviços', link: '/services' },
  { label: 'Estudos de Caso', link: '/projects' },
  { label: 'Metodologia', link: '/#metodologia' },
  { label: 'Publicações Técnicas', link: '/posts' },
  { label: 'Contato', link: '/contato' },
]

const defaultPolicyLinks = [
  { label: 'Termos de Uso', link: '/termos-de-uso' },
  { label: 'Política de Privacidade', link: '/politica-de-privacidade' },
  { label: 'Governança de Dados', link: '/governanca' },
  { label: 'Documentação do Tema', link: '/docs' },
]

const defaultSocial = [
  ...(defaultSiteConfig.contact.whatsapp
    ? [{ icon: 'fab fa-whatsapp', link: `https://wa.me/${defaultSiteConfig.contact.whatsapp.replace(/\D/g, '')}` }]
    : []),
  ...(defaultSiteConfig.contact.social.linkedin
    ? [{ icon: 'fab fa-linkedin-in', link: defaultSiteConfig.contact.social.linkedin }]
    : []),
  ...(defaultSiteConfig.contact.social.github
    ? [{ icon: 'fab fa-github', link: defaultSiteConfig.contact.social.github }]
    : []),
  ...(defaultSiteConfig.contact.social.instagram
    ? [{ icon: 'fab fa-instagram', link: defaultSiteConfig.contact.social.instagram }]
    : []),
]

const defaultFooterLinks = [
  { label: 'Consultoria Estratégica', link: '/services' },
  { label: 'Diagnóstico Operacional', link: '/services' },
  { label: 'Soluções Integradas', link: '/projects' },
]

const defaultLocations = [
  {
    title: 'Sede Operacional',
    address: `${defaultSiteConfig.contact.address.street}${defaultSiteConfig.contact.address.number ? `, ${defaultSiteConfig.contact.address.number}` : ''} - ${defaultSiteConfig.contact.address.neighborhood}, ${defaultSiteConfig.contact.address.city}/${defaultSiteConfig.contact.address.state}, CEP ${defaultSiteConfig.contact.address.zipCode}`,
    phone: defaultSiteConfig.contact.phone || defaultSiteConfig.contact.whatsapp,
  },
  {
    title: 'Atendimento Regional',
    address: defaultSiteConfig.contact.citiesServed?.slice(0, 4).join(', ') || defaultSiteConfig.contact.address.city,
    phone: defaultSiteConfig.contact.phone || defaultSiteConfig.contact.whatsapp,
  },
]

const defaultCopyright = `© ${new Date().getFullYear()} ${defaultSiteConfig.branding.legalName || defaultSiteConfig.branding.name}. Todos os direitos reservados. ${defaultSiteConfig.branding.document || ''}`
const defaultCreatedBy = `${defaultSiteConfig.branding.name} | ${defaultSiteConfig.branding.tagline}`
const defaultNewsletterPlaceholder = `Cadastre seu e-mail corporativo para novidades e análises de ${defaultSiteConfig.branding.name}`

export const FooterClient: React.FC<FooterProps> = ({ data }) => {
  const { footerLayout } = usePageContext()

  const {
    logo,
    newsletter,
    mainMenu = [],
    policyLinks = [],
    social = [],
    footerLinks = [],
    locations = [],
    copyright,
    createdBy,
  } = data || {}

  const backgroundImage = (data as FooterType)?.backgroundImage
  const logoLight = (data as FooterType)?.logoLight

  const layoutType = footerLayout || (data as FooterType)?.layoutType || 'default'

  const activeMainMenu = mainMenu && mainMenu.length > 0 ? mainMenu : defaultMainMenu
  const activePolicyLinks = policyLinks && policyLinks.length > 0 ? policyLinks : defaultPolicyLinks
  const activeSocial = social && social.length > 0 ? social : defaultSocial
  const activeFooterLinks = footerLinks && footerLinks.length > 0 ? footerLinks : defaultFooterLinks
  const activeLocations = locations && locations.length > 0 ? locations : defaultLocations
  const activeCopyright = copyright || defaultCopyright
  const activeCreatedBy = createdBy || defaultCreatedBy
  const newsletterPlaceholder = newsletter?.placeholder || defaultNewsletterPlaceholder

  if (layoutType === 'minimal') {
    return (
      <footer className="mil-footer-1">
        {backgroundImage && (
          <Media
            imgClassName="mil-bg-img mil-scale-img"
            resource={backgroundImage}
          />
        )}
        <div className="mil-overlay"></div>
        <div className="container">
          <div className="mil-footer-content mil-p-10-10">
            <div className="row">
              <div className="col-md-6 mil-flex-column mil-sm-aic">
                {typeof logoLight === 'object' && logoLight ? (
                  <Link href="/" className="mil-logo mil-mb-4 mil-sm-mb-5">
                    <Media
                      resource={logoLight}
                    />
                  </Link>
                ) : typeof logo === 'object' && logo ? (
                  <Link href="/" className="mil-logo mil-mb-4 mil-sm-mb-5">
                    <Media
                      resource={logo}
                    />
                  </Link>
                ) : (
                  <Link href="/" className="mil-logo mil-mb-4 mil-sm-mb-5" data-no-swup>
                    {defaultSiteConfig.branding.logos.light || defaultSiteConfig.branding.logos.dark ? (
                      <Image
                        src={defaultSiteConfig.branding.logos.light || defaultSiteConfig.branding.logos.dark}
                        alt={defaultSiteConfig.branding.name}
                        width={180}
                        height={38}
                        priority
                      />
                    ) : (
                      <span style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}>
                        {defaultSiteConfig.branding.name}
                      </span>
                    )}
                  </Link>
                )}
                {activeMainMenu && activeMainMenu.length > 0 && (
                  <ul className="mil-footer-menu-1 mil-sm-mb-4">
                    {activeMainMenu.map((item, idx) => (
                      <li key={idx} className={idx === 0 ? 'mil-current' : ''}>
                        <Link href={item.link}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="col-md-6 mil-flex-column mil-aie mil-sm-aic">
                {activeSocial && activeSocial.length > 0 && (
                  <ul className="mil-social mil-c-m-4 mil-mb-4">
                    {activeSocial.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"><i className={item.icon}></i></a>
                      </li>
                    ))}
                  </ul>
                )}
                {activePolicyLinks && activePolicyLinks.length > 0 && (
                  <ul className="mil-footer-links mil-c-m-4 mil-aie mil-sm-aic">
                    {activePolicyLinks.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.link}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="container mil-flex-row mil-sm-flex-column mil-jcb mil-sm-aic">
            <p className="mil-c-m-3 mil-sm-mb-2">{activeCopyright}</p>
            <p className="mil-c-m-3">{activeCreatedBy && <span dangerouslySetInnerHTML={{ __html: sanitizeHTML(activeCreatedBy) }} />}</p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="mil-footer-2">
      <div className="container">
        <div className="mil-footer-content mil-p-10-10">
          <div className="row mil-jcb">
            <div className="col-md-5 col-lg-7 mil-flex-column mil-sm-mb-5">
              <div className="row">
                <div className="col-lg-7 mil-flex-column mil-sm-aic">
                  {typeof logo === 'object' && logo?.url ? (
                    <Link href="/" className="mil-logo mil-mb-4">
                      <Media
                        resource={logo}
                      />
                    </Link>
                  ) : (
                    <Link href="/" className="mil-logo mil-mb-4" data-no-swup>
                      {defaultSiteConfig.branding.logos.dark || defaultSiteConfig.branding.logos.light ? (
                        <Image
                          src={defaultSiteConfig.branding.logos.dark || defaultSiteConfig.branding.logos.light}
                          alt={defaultSiteConfig.branding.name}
                          width={180}
                          height={38}
                          priority
                        />
                      ) : (
                        <span style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                          {defaultSiteConfig.branding.name}
                        </span>
                      )}
                    </Link>
                  )}
                  <form action={ process.env.NEXT_PUBLIC_MAILCHIMP_ACTION_URL } className="mil-subscribe">
                    <input type="hidden" name={ process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_KEY } />
                    <input
                      type="email"
                      name="EMAIL"
                      placeholder={newsletterPlaceholder}
                      required
                    />
                    <button type="submit" aria-label="Cadastrar e-mail">
                      <i className={newsletter?.buttonIcon || 'fal fa-envelope'}></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-2 mil-sm-mb-5">
              {activeMainMenu && activeMainMenu.length > 0 && (
                <ul className="mil-footer-menu-2 mil-flex-column mil-sm-aic">
                  {activeMainMenu.map((item, idx) => (
                    <li key={idx} className={idx === 0 ? 'mil-current' : ''}>
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-md-2">
              {activePolicyLinks && activePolicyLinks.length > 0 && (
                <ul className="mil-footer-links mil-hover-dark mil-flex-column mil-c-m-2 mil-ais mil-sm-aic">
                  {activePolicyLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mil-footer-adress mil-gray-section mil-p-10-5 mil-angle mil-angle-lg">
        <div className="container">
          <div className="row mil-jcb">
            <div className="col-md-5 col-lg-7 mil-flex-column mil-jcb mil-sm-aic">
              {activeSocial && activeSocial.length > 0 && (
                <ul className="mil-social mil-c-m-1 mil-mb-5">
                  {activeSocial.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <i className={item.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {activeFooterLinks && activeFooterLinks.length > 0 && (
                <ul className="mil-footer-links mil-hover-dark mil-c-m-2 mil-mb-5 mil-ais mil-sm-aic">
                  {activeFooterLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {activeLocations && activeLocations.map((location, idx) => (
              <div key={idx} className="col-md-2">
                <div className="mil-w-80 mil-mb-5 mil-sm-tac">
                  <h6 className="mil-mb-2">{location.title}</h6>
                  <p className="mil-t-14 mil-c-m-2 mil-mb-2">{location.address}</p>
                  <p className="mil-h6">
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container mil-flex-row mil-sm-flex-column mil-jcb mil-sm-aic">
          <p className="mil-c-m-2 mil-sm-mb-2">{activeCopyright}</p>
          <p className="mil-c-m-2">{activeCreatedBy && <span dangerouslySetInnerHTML={{ __html: sanitizeHTML(activeCreatedBy) }} />}</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterClient
