import React from 'react'
import Link from 'next/link'
import type { PricesBlock as PricesBlockProps } from '@/payload-types'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { getButtonClasses, getCardClasses } from '@/fields/elementCustomization'

export const PricesBlock: React.FC<PricesBlockProps> = (props) => {
  const {
    badge,
    title,
    description,
    button_text,
    button_url,
    plans,
  } = props

  const topBtnColor = (props as any).button_color || 'cafe'
  const topBtnRadius = (props as any).button_radius
  const topBtnTriangle = (props as any).button_has_triangle
  const topBtnShowIcon = (props as any).button_show_icon !== false

  return (
    <div className="mil-section mil-p-10-8">
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
                  className={getButtonClasses(topBtnColor, topBtnRadius, topBtnTriangle)}
                >
                  <span>{button_text}</span>
                  {topBtnShowIcon && <i className="far fa-arrow-right"></i>}
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          {plans?.map((plan: any, index) => {
            const cardStyle = plan.card_color || plan.card_style || 'default'
            const cardRadius = plan.card_radius || 'default'
            const cardTriangle = plan.card_color_has_triangle !== undefined ? plan.card_color_has_triangle : (plan.card_has_triangle !== undefined ? plan.card_has_triangle : 'triangle')
            const cardClasses = getCardClasses(
              cardStyle,
              cardRadius,
              cardTriangle,
              'mil-w-100 mil-md-tal mil-mb-2',
            )

            const planBtnColor = plan.button_color || (plan.button_style === 'mil-accent' ? 'terracota' : plan.button_style === 'mil-dark' ? 'cafe' : plan.button_style === 'mil-light' ? 'niemeyer' : 'terracota')
            const planBtnRadius = plan.button_radius || 'default'
            const planBtnTriangle = plan.button_has_triangle
            const planBtnShowIcon = plan.button_show_icon !== false

            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className={cardClasses}>
                  {plan.name && <h6 className="mil-mb-2 mil-c-m-1">{plan.name}</h6>}
                  {plan.price && (
                    <div className="mil-flex-row mil-aie mil-mb-2">
                      <div className="mil-counter-1">
                        {plan.price.includes('R$') || plan.price.includes('€') ? (
                          <span>{plan.price}</span>
                        ) : (
                          <>
                            <span className="mil-sub-text-1">R$</span> {plan.price}
                          </>
                        )}
                      </div>
                      {plan.price_suffix && (
                        <p className="mil-mb-1 mil-ml-1 mil-c-m-2">{plan.price_suffix}</p>
                      )}
                    </div>
                  )}
                  {plan.description && (
                    <p
                      className="mil-t-16 mil-c-m-2 mil-mb-3"
                      dangerouslySetInnerHTML={{ __html: sanitizeHTML(plan.description) }}
                    />
                  )}
                  {plan.features && plan.features.length > 0 && (
                    <>
                      <div className="mil-divider mil-w-100 mil-mb-3"></div>
                      <ul className="mil-check-list mil-mb-4">
                        {plan.features.map((feature: any, featureIndex: number) => (
                          <li key={featureIndex} className={feature.disabled ? 'mil-empty' : ''}>
                            {feature.item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="mil-divider mil-w-100 mil-mb-3"></div>
                  {plan.button_text && plan.button_url && (
                    <Link
                      href={plan.button_url}
                      className={getButtonClasses(planBtnColor, planBtnRadius, planBtnTriangle)}
                    >
                      <span>{plan.button_text}</span>
                      {planBtnShowIcon && <i className="far fa-arrow-right"></i>}
                    </Link>
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