import React from 'react'
import { Media } from '@/components/Media'
import Link from 'next/link'
import type { CallToAction2Block as CallToAction2BlockProps } from '@/payload-types'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { getButtonClasses } from '@/fields/elementCustomization'

export const CallToAction2Block: React.FC<CallToAction2BlockProps> = (props) => {
  const {
    bgImage,
    title,
    button1_text,
    button1_url,
    button2_text,
    button2_url,
  } = props

  const b1Color = (props as any).button1_color || 'outline'
  const b1Radius = (props as any).button1_radius
  const b1Triangle = (props as any).button1_has_triangle
  const b1ShowIcon = (props as any).button1_show_icon !== false

  const b2Color = (props as any).button2_color || 'terracota'
  const b2Radius = (props as any).button2_radius
  const b2Triangle = (props as any).button2_has_triangle
  const b2ShowIcon = (props as any).button2_show_icon !== false

  return (
    <div className="mil-section mil-p-10-10">
      {bgImage && (
        <Media
          resource={bgImage}
          imgClassName="mil-bg-img mil-scale-img"
        />
      )}
      <div className="mil-overlay mil-blur"></div>
      <div className="container">
        <div className="row mil-aic">
          <div className="col-md-8">
            {title && (
              <h2
                className="mil-c-m-5 mil-sm-tac"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }}
              />
            )}
          </div>
          <div className="col-md-4 mil-flex-row mil-jce mil-sm-jcc mil-sm-mt-5">
            {button1_text && button1_url && (
              <Link
                href={button1_url}
                className={getButtonClasses(b1Color, b1Radius, b1Triangle, 'mil-mr-4')}
              >
                <span>{button1_text}</span>
                {b1ShowIcon && <i className="far fa-arrow-right"></i>}
              </Link>
            )}
            {button2_text && button2_url && (
              <Link
                href={button2_url}
                className={getButtonClasses(b2Color, b2Radius, b2Triangle)}
              >
                <span>{button2_text}</span>
                {b2ShowIcon && <i className="far fa-arrow-right"></i>}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
