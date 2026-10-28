import React from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import type { ReusableBlock as ReusableBlockProps, ReusableContent } from '@/payload-types'
import { queryLayoutBlocks } from '@/app/_fetches'
import { unstable_cache } from 'next/cache'

import { SectionCurveDivider } from '@/components/SectionCurveDivider'
import { BirdWatermark } from '@/components/BirdWatermark'

export const ReusableBlock: React.FC<ReusableBlockProps> = async({ reusableContent, customId, bg_style, padding_top, padding_bottom }) => {
    const layoutContent = await getCachedBlocks(reusableContent);

    if (typeof layoutContent === 'object' && layoutContent !== null) {
        const isGraySection = bg_style === 'gray';

        return (
            <div {...(customId ? { id: customId } : {})} className={`mil-${bg_style}-section mil-p-${padding_top}-${padding_bottom} position-relative overflow-hidden`}>
                {isGraySection && <BirdWatermark position="left" className="mil-watermark-subtle" />}
                <div className="position-relative" style={{ zIndex: 1 }}>
                    <RenderBlocks blocks={layoutContent.layout} />
                </div>
            </div>
        )
    }
}

const getCachedBlocks = async (reusableContent: string | number | ReusableContent) => {
    if (process.env.NODE_ENV === 'development') {
        return queryLayoutBlocks(reusableContent)
    }
    const key = typeof reusableContent === 'object' && reusableContent !== null ? reusableContent.id : reusableContent
    return unstable_cache(queryLayoutBlocks, ['block-reusable', `block-${key}`])(reusableContent)
}