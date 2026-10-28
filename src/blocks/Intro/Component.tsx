import React from 'react'
import Link from "next/link"
import { Media } from '@/components/Media'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'

import type { IntroBlock as IntroBlockProps } from '@/payload-types'

export const IntroBlock: React.FC<IntroBlockProps> = ({ bgImage, short_title, title }) => {
  const sanitizedTitle = title ? title.replace(/\s*V6\b/gi, '') : ''

  return (
    <div className="mil-hero-inner" id="top">
        {bgImage && (
            <Media
                imgClassName="mil-hero-bg mil-scale-img-top"
                resource={bgImage}
                fill
            />
        )}
        <div className="mil-overlay" style={{"opacity": ".8"}}></div>
        <div className="mil-hero-content">
            <div className="mil-container">
                <div className="row mil-aie">
                    <div className="col-lg-12 mil-tac">
                        {sanitizedTitle && <h1 className="mil-c-m-4 mil-mb-5" dangerouslySetInnerHTML={{ __html: sanitizeHTML(sanitizedTitle) }} />}
                        <ul className="mil-breadcrumbs mil-jcc mil-w-100">
                            <li><Link href="/">Home</Link></li>
                            <li className="mil-current"><a href="#.">{short_title}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
