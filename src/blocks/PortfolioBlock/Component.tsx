import type { Project, PortfolioBlock as PortfolioBlockProps } from '@/payload-types'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { unstable_cache } from 'next/cache'
import React from 'react'
import Link from "next/link";
import { queryProjectsGridBlock } from '@/app/_fetches'
import type { ProjectCardPostData } from '@/components/ProjectCard'
import { ProjectCard } from '@/components/ProjectCard'

export const PortfolioBlock: React.FC<
  PortfolioBlockProps & {
    id?: string
  }
> = async (props) => {
  const { 
    badge, 
    title, 
    description, 
    button_label, 
    button_link, 
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
          <div className="col-12 col-md-6">
            <div className="mil-flex-column mil-jce mil-aie mil-sm-ais">
              {description && (
                <p className="mil-c-m-2 mil-t-14 mil-mb-3" dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />
              )}
              {button_label && button_link && (
                <Link href={button_link} className="mil-btn mil-link-type mil-dark">
                  <span>{button_label}</span>
                  <i className="far fa-arrow-right"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <ProjectCard doc={project} relationTo="projects" />
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