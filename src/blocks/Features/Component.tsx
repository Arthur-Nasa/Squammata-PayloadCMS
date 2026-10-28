import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import Link from 'next/link'
import type { FeaturesBlock as FeaturesBlockProps } from '@/payload-types'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { getButtonClasses, getCardClasses } from '@/fields/elementCustomization'

export const FeaturesBlock: React.FC<FeaturesBlockProps> = (props) => {
  const {
    badge,
    title,
    description,
    button1_text,
    button1_url,
    button2_text,
    button2_url,
    features,
  } = props

  const b1Color = (props as any).button1_color || 'terracota'
  const b1Radius = (props as any).button1_radius
  const b1Triangle = (props as any).button1_has_triangle
  const b1ShowIcon = (props as any).button1_show_icon !== false

  const b2Color = (props as any).button2_color || 'cafe'
  const b2Radius = (props as any).button2_radius
  const b2Triangle = (props as any).button2_has_triangle
  const b2ShowIcon = (props as any).button2_show_icon !== false

  return (
    <div className="mil-sticky-section mil-bg-out-left-gray" id="scroll">
      <div className="mil-sticky-part mil-p-10-10">
        <div className="mil-fake-container-left">
          {badge && <div className="mil-badge mil-mb-4">{badge}</div>}
          {title && <h2 className="mil-mb-5" dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }} />}
          {description && (
            <div className="mil-t-16 mil-c-m-2 mil-mb-5">
              <RichText data={description} enableGutter={false} />
            </div>
          )}
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
      <div className="mil-scroll-part mil-p-0-5">
        <div className="mil-fake-container-right mil-mt-10 mil-mb-0">
          <div className="mil-flex-column mil-aic mil-md-ais mil-w-100 mil-tac mil-md-tal mil-mb-5">
            {features?.map((feature: any, index) => {
              const hasCardStyle = feature.item_style && feature.item_style !== 'default'
              const hasTriangle = feature.item_triangle && feature.item_triangle !== 'none'
              const itemClass = hasCardStyle || hasTriangle
                ? getCardClasses(feature.item_style, feature.item_radius, feature.item_triangle, 'mil-flex-column mil-aic mil-md-ais mil-w-100 mil-tac mil-md-tal mil-mb-5 mil-p-4')
                : 'mil-flex-column mil-aic mil-md-ais mil-w-100 mil-tac mil-md-tal mil-mb-5'

              return (
                <div key={index} className={itemClass}>
                  {feature.icon && (
                    <div className="mil-icon mil-mb-2">
                      <Media resource={feature.icon} />
                    </div>
                  )}
                  {feature.title && <h6 className="mil-mb-2 mil-c-m-1">{feature.title}</h6>}
                  {feature.description && (
                    <p className="mil-t-16 mil-c-m-2 mil-mb-4 mil-w-80" dangerouslySetInnerHTML={{ __html: sanitizeHTML(feature.description) }} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}