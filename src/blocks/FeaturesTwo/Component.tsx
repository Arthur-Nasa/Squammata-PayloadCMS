import React from 'react'
import { Media } from '@/components/Media'
import Link from 'next/link'
import type { FeaturesTwoBlock as FeaturesTwoBlockProps } from '@/payload-types'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { getButtonClasses, getCardClasses } from '@/fields/elementCustomization'

export const FeaturesTwoBlock: React.FC<FeaturesTwoBlockProps> = (props) => {
  const {
    badge,
    title,
    description,
    button_text,
    button_url,
    features,
  } = props

  const bColor = (props as any).button_color || 'cafe'
  const bRadius = (props as any).button_radius
  const bTriangle = (props as any).button_has_triangle
  const bShowIcon = (props as any).button_show_icon !== false

  return (
    <div className="mil-section mil-gray-section mil-p-10-8">
      <div className="container">
        <div className="row mil-aie mil-mb-10">
          <div className="col-12 col-md-6 mil-sm-mb-4">
            {badge && <div className="mil-badge mil-mb-4">{badge}</div>}
            {title && (
              <h2
                className="mil-c-m-1"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }}
              />
            )}
          </div>
          <div className="col-12 col-md-6">
            <div className="mil-flex-column mil-jce mil-aie mil-sm-ais">
              {description && (
                <p className="mil-c-m-2 mil-t-14 mil-mb-3" dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />
              )}
              {button_text && button_url && (
                <Link
                  href={button_url}
                  className={getButtonClasses(bColor, bRadius, bTriangle)}
                >
                  <span>{button_text}</span>
                  {bShowIcon && <i className="far fa-arrow-right"></i>}
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          {features?.map((feature: any, index) => {
            const cardStyle = feature.card_style || 'default'
            const cardRadius = feature.card_radius || 'default'
            const cardTriangle = feature.card_triangle !== undefined ? feature.card_triangle : 'triangle'
            const cardClasses = getCardClasses(
              cardStyle,
              cardRadius,
              cardTriangle,
              'mil-flex-column mil-aic mil-md-ais mil-w-100 mil-tac mil-md-tal mil-mb-2',
            )

            return (
              <div key={index} className="col-md-4">
                <div className={cardClasses}>
                  {feature.icon && (
                    <div className="mil-icon mil-mb-2">
                      <Media resource={feature.icon} />
                    </div>
                  )}
                  {feature.title && <h6 className="mil-mb-2 mil-c-m-1">{feature.title}</h6>}
                  {feature.description && (
                    <p
                      className="mil-t-16 mil-c-m-2"
                      dangerouslySetInnerHTML={{ __html: sanitizeHTML(feature.description) }}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}