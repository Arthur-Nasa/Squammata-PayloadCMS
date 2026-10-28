import React from 'react'

import type { Post } from '@/payload-types'
import type { BlogCardPostData } from '@/components/BlogCard';
import { LatestPosts } from '@/components/LatestPosts'
import { unstable_cache } from 'next/cache'
import { queryBlogRelatedPosts } from '@/app/_fetches'

export type RelatedPostsProps = {
  className?: string,
  docs?: Post[],
  limit?: number, 
  postId?: string
}

export const RelatedPosts: React.FC<RelatedPostsProps> = async (props) => {
  const { docs, limit, postId } = props

  let posts: BlogCardPostData[] = []

  if (docs?.length) {
      const selectedPostsIds = docs?.map((post) => {
        if (typeof post === 'object') return post.id
      })

      posts = await getCachedBlogRelatedPosts(postId, selectedPostsIds, limit ? limit : 3);
  }

  return (
    <div className="mil-section mil-gray-section mil-p-10-10">
      <div className="container">
          <div className="row mil-aie mil-mb-10">
              <div className="col-12 col-md-6 mil-sm-mb-4">
                  <div className="mil-badge mil-mb-4">Publicações Relacionadas</div>
                  <h2 className="mil-c-m-1">Engenharia, DRE <br className="mil-sm-hidden" />e Controladoria</h2>
              </div>
              <div className="col-12 col-md-6">
                  <div className="mil-flex-column mil-jce">
                      <p className="mil-c-m-2 mil-t-16">Artigos técnicos com metodologias aplicadas, auditoria de processos e governança de dados para empresas do interior paulista.</p>
                  </div>
              </div>
          </div>
          
          <LatestPosts posts={posts} />
      </div>
    </div>
  )
}

const getCachedBlogRelatedPosts = async (slug: string | undefined, selectedPostsIds: (string | number | undefined)[], limit: number) => 
  unstable_cache(queryBlogRelatedPosts, [`blog-related-posts-${slug}`])(selectedPostsIds, limit)
