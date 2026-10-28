import React from 'react'
import { Media } from '@/components/Media'
import Link from 'next/link'
import type { CallToActionBlock as CallToActionBlockProps } from '@/payload-types'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { BirdWatermark } from '@/components/BirdWatermark'
import { getButtonClasses } from '@/fields/elementCustomization'

export type ExtendedCallToActionProps = CallToActionBlockProps & {
  button1_has_triangle?: string | null
  button1_show_icon?: boolean | null
  button2_has_triangle?: string | null
  button2_show_icon?: boolean | null
}

export const CallToActionBlock: React.FC<ExtendedCallToActionProps> = ({
  bgImage,
  icon,
  badge,
  title,
  description,
  button1_text,
  button1_url,
  button1_color,
  button1_radius,
  button2_text,
  button2_url,
  button2_color,
  button2_radius,
}) => {
  return (
    <div className="mil-section mil-p-10-10 position-relative overflow-hidden">
      {bgImage && (
        <Media
          resource={bgImage}
          imgClassName="mil-bg-img mil-scale-img"
        />
      )}
      <div className="mil-overlay mil-side-gradient"></div>
      <BirdWatermark position="right" className="mil-watermark-subtle" />
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row mil-aie">
          <div className="col-lg-8">
            {icon && (
              <div className="mil-icon mil-c-m-4 mil-mb-2">
                <Media resource={icon} />
              </div>
            )}
            {badge && (
              <p className="mil-c-m-3 mil-mb-4 mil-t-16">{badge}</p>
            )}
            {title && (
              <h2
                className="mil-h1 mil-c-m-4 mil-mb-4"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }}
              />
            )}
            {description && (
              <p
                className="mil-c-m-3 mil-mb-4 mil-t-16"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
              />
            )}
            <div className="mil-divider mil-mb-4"></div>
            {button1_text && button1_url && (
              <Link
                href={button1_url}
                className={getButtonClasses(button1_color || 'terracota', button1_radius, 'mil-mr-4')}
              >
                <span>{button1_text}</span>
                <i className="far fa-arrow-right"></i>
              </Link>
            )}
            {button2_text && button2_url && (
              <Link
                href={button2_url}
                className={getButtonClasses(button2_color || 'outline', button2_radius)}
              >
                <span>{button2_text}</span>
                <i className="far fa-arrow-right"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}