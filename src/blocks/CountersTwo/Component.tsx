import React from 'react'
import { Media } from '@/components/Media'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import type { CountersTwoBlock as CountersTwoBlockProps } from '@/payload-types'
import { getCardClasses } from '@/fields/elementCustomization'

export const CountersTwoBlock: React.FC<CountersTwoBlockProps> = ({
  counters,
}) => {
  return (
    <div className="mil-section mil-p-0-8">
      <div className="container">
        <div className="row">
          {counters?.map((counter: any, index) => {
            const cardStyle = counter.card_style || 'mil-gray-card'
            const cardRadius = counter.card_radius || 'default'
            const cardTriangle = counter.card_triangle !== undefined ? counter.card_triangle : 'triangle'

            return (
              <div key={index} className="col-md-4">
                {counter.bgImage ? (
                  // Special middle card with background
                  <div className={getCardClasses('transparent', cardRadius, cardTriangle, 'mil-gray-card mil-mb-2')}>
                    <Media
                      resource={counter.bgImage}
                      imgClassName="mil-card-bg mil-scale-img"
                    />
                    <div className="mil-overlay" style={{ opacity: 0.8 }}></div>
                    <div className="mil-card-content">
                      {counter.value && (
                        <div className="mil-c-m-4 mil-mb-2">
                          <span className="mil-counter mil-counter-1" data-number={counter.value}>
                            {counter.value}
                          </span>
                          {counter.suffix && (
                            <span className={"mil-c-a-1 " + (counter.suffix_class || "mil-sub-text-1")}>
                              {counter.suffix}
                            </span>
                          )}
                        </div>
                      )}
                      {counter.title && <h6 className="mil-mb-2 mil-c-m-4">{counter.title}</h6>}
                      {counter.description && (
                        <p className="mil-t-16 mil-c-m-3" dangerouslySetInnerHTML={{ __html: sanitizeHTML(counter.description) }} />
                      )}
                    </div>
                  </div>
                ) : (
                  // Standard card (first and third)
                  <div className={getCardClasses(cardStyle, cardRadius, cardTriangle, 'mil-mb-2')}>
                    <div className="mil-card-content">
                      {counter.value && (
                        <div className="mil-c-m-1 mil-mb-2">
                          <span className="mil-counter mil-counter-1" data-number={counter.value}>
                            {counter.value}
                          </span>
                          {counter.suffix && (
                            <span className={"mil-c-a-1 " + (counter.suffix_class || "mil-sub-text-2")}>
                              {counter.suffix}
                            </span>
                          )}
                        </div>
                      )}
                      {counter.title && <h6 className="mil-mb-2 mil-c-m-1">{counter.title}</h6>}
                      {counter.description && (
                        <p className="mil-t-16 mil-c-m-2" dangerouslySetInnerHTML={{ __html: sanitizeHTML(counter.description) }} />
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}