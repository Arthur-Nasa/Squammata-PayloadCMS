import type { Project, PortfolioTwoBlock as PortfolioTwoBlockProps } from '@/payload-types'
import { unstable_cache } from 'next/cache'
import React from 'react'
import { queryProjectsGridBlock } from '@/app/_fetches'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import type { ProjectCardPostData } from '@/components/ProjectCard'
import { Project2Card } from '@/components/Project2Card'
import Link from "next/link"

export const PortfolioTwoBlock: React.FC<
  PortfolioTwoBlockProps & {
    id?: string
  }
> = async (props) => {
  const { 
    badge, 
    title, 
    counter_value,
    counter_suffix,
    counter_title,
    info, 
    more_label, 
    more_link, 
    categories, 
    limit: limitFromProps, 
    populateBy, 
    selectedDocs
  } = props

  const limit = limitFromProps || 3

  let projects: ProjectCardPostData[] = []
  
  if (populateBy === 'collection') {
    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    projects = await getCachedProjectsGridBlock(flattenedCategories, limit);
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Project[]

      projects = filteredSelectedPosts
    }
  }

  return (
    <div className="mil-section mil-gray-section mil-p-10-10">
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
          <div className="col-12 col-md-6 mil-flex-column mil-aie mil-md-ais">
            {counter_value && (
              <>
                <div>
                  <span className="mil-counter mil-counter-1" data-number={counter_value}>
                    {counter_value}
                  </span>
                  {counter_suffix && (
                    <span className="mil-c-a-1 mil-sub-text-2">{counter_suffix}</span>
                  )}
                </div>
                {counter_title && <h6 className="mil-mt-1">{counter_title}</h6>}
              </>
            )}
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-12">
              <Project2Card doc={project} relationTo="projects" />
            </div>
          ))}
        </div>
        <div className="row mil-mt-8 mil-aic">
          <div className="col-lg-7">
            {info && <h4 className="" dangerouslySetInnerHTML={{ __html: sanitizeHTML(info) }} />}
          </div>
          <div className="col-lg-5 mil-flex-row mil-jce mil-md-jcs">
            {more_label && more_link && (
              <Link href={more_link} className="mil-btn mil-md-mt-4">
                <span>{more_label}</span>
                <i className="far fa-arrow-right"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const getCachedProjectsGridBlock = unstable_cache(
  async (flattenedCategories, limit) => {
    return queryProjectsGridBlock(flattenedCategories, limit);
  },
  ['projects-grid-block']
);