import React from 'react'
import { defaultSiteConfig } from '@/site.config'

export const Logo: React.FC = () => {
  const brandName = defaultSiteConfig?.branding?.name || 'Admin Panel'
  const logoSrc = defaultSiteConfig?.branding?.logos?.dark
  const primaryColor = defaultSiteConfig?.theme?.primaryColor || '#7A4207'

  return (
    <div
      className="boilerplate-admin-logo"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        height: '38px',
        maxWidth: '240px',
        textDecoration: 'none',
      }}
    >
      {logoSrc && logoSrc.endsWith('.png') === false && logoSrc.endsWith('.jpg') === false ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={logoSrc}
          alt={brandName}
          style={{
            maxHeight: '34px',
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
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
            }}
          >
            {brandName.charAt(0).toUpperCase()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--theme-elevation-1000, #1A1A1A)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              {brandName}
            </span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--theme-elevation-500, #737373)',
              }}
            >
              Control Panel
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Logo
