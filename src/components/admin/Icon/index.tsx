import React from 'react'
import { defaultSiteConfig } from '@/site.config'

export const Icon: React.FC = () => {
  const brandName = defaultSiteConfig?.branding?.name || 'A'
  const primaryColor = defaultSiteConfig?.theme?.primaryColor || '#7A4207'
  const initial = brandName.charAt(0).toUpperCase()

  return (
    <div
      className="boilerplate-admin-icon"
      style={{
        width: '28px',
        height: '28px',
        borderRadius: '6px',
        backgroundColor: primaryColor,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '15px',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        userSelect: 'none',
      }}
      title={brandName}
    >
      {initial}
    </div>
  )
}

export default Icon
