'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

type NavItemLink = NonNullable<NonNullable<HeaderType['navItems']>[number]['link']>

const defaultNavItems: { link: NavItemLink }[] = [
  { link: { type: 'custom', url: '/services', label: 'Serviços' } },
  { link: { type: 'custom', url: '/projects', label: 'Estudos de Caso' } },
  { link: { type: 'custom', url: '/#metodologia', label: 'Metodologia' } },
  { link: { type: 'custom', url: '/posts', label: 'Publicações Técnicas' } },
  { link: { type: 'custom', url: '/contato', label: 'Contato' } },
]

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems && data.navItems.length > 0 ? data.navItems : defaultNavItems
  
  return (
    <ul className="mil-main-menu">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...(link as NavItemLink)} index={i} appearance="link" />
      })}
    </ul>
  )
}
