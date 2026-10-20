import type { Post, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'
import type { BlogCardPostData } from '@/components/BlogCard'
import { unstable_cache } from 'next/cache'
import { queryBlogArchivePosts } from '@/app/_fetches'
import React from 'react'
import Link from "next/link";

import { LatestPosts } from '@/components/LatestPosts'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const { badge, title, description, button_text, button_url, categories, limit: limitFromProps, populateBy, selectedDocs } = props

  const limit = limitFromProps || 3

  let posts: BlogCardPostData[] = []

  if (populateBy === 'collection') {
    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    posts = await getCachedBlogArchivePosts(flattenedCategories, limit)
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Post[]

      posts = filteredSelectedPosts
    }
  }

  return (
    <div className="mil-section mil-gray-section mil-p-10-8">
        <div className="container">
            <div className="row mil-aie mil-mb-10">
              <div className="col-12 col-lg-6 mil-md-mb-4">
                {badge && <div className="mil-badge mil-mb-4">{badge}</div>}
                {title && (
                  <h2
                    className="mil-c-m-1"
                    dangerouslySetInnerHTML={{ __html: sanitizeHTML(title) }}
                  />
                )}
              </div>
              <div className="col-12 col-md-6">
                <div className="mil-flex-column mil-jce mil-aie mil-md-ais">
                  {description && (
                    <p className="mil-c-m-2 mil-t-14 mil-mb-3" dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }} />
                  )}
                  {button_text && button_url && (
                    <Link href={button_url} className="mil-btn mil-link-type mil-dark">
                      <span>{button_text}</span>
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <LatestPosts posts={posts} />
        </div>
    </div>
  )
}

const getCachedBlogArchivePosts = unstable_cache(
  async (flattenedCategories, limit) => {
    return queryBlogArchivePosts(flattenedCategories, limit);
  },
  ['blog-archive-posts']
);