import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { Pagination } from '@/components/Pagination'
import PageClient from './page.client'
import { unstable_cache } from 'next/cache'

import { getCachedGlobal, getCachedGlobalMeta } from '@/utilities/getGlobals'
import type { Blog, Page } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { sanitizeHTML } from '@/utilities/sanitizeHtml'
import { generateMeta } from '@/utilities/generateMeta'

import { queryPosts } from '@/app/_fetches'

export default async function Page() {
  const blogData: Blog = await getCachedGlobal('blog', 0)()
  const limit = 6;
  const posts = await getCachedPosts(limit);

  return (
    <>
      <PageClient />
      
      {blogData.layout_before &&
      <RenderBlocks blocks={blogData.layout_before} />
      }
      
      <div className="mil-section mil-gray-section mil-p-10-10">
        <div className="container">
          <div className="row mil-aie mil-mb-10">
              <div className="col-12 col-md-6 mil-sm-mb-4">
                  {blogData.badge && <div className="mil-badge mil-mb-4">{blogData.badge}</div>}
                  {blogData.title && <h2 className="mil-c-m-1" dangerouslySetInnerHTML={{ __html: sanitizeHTML(blogData.title) }} />}
              </div>
              <div className="col-12 col-md-6">
                  <div className="mil-flex-column mil-jce">
                      {blogData.description && <p className="mil-c-m-2 mil-t-16" dangerouslySetInnerHTML={{ __html: sanitizeHTML(blogData.description) }} />}
                  </div>
              </div>
          </div>

          <CollectionArchive posts={posts.docs} />

          {posts.totalPages > 1 && posts.page && (
            <Pagination pageType={"posts"} page={posts.page} totalPages={posts.totalPages} />
          )}
        </div>
      </div>
      
      {blogData.layout_after &&
      <RenderBlocks blocks={blogData.layout_after} />
      }
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const blogData: Blog = await getCachedGlobalMeta('blog', 1)()
  const pageBlogData: Page = {
    id: 0,
    title: '',
    updatedAt: '',
    createdAt: '',
    layout: [],
    meta: blogData.meta,
    slug: "posts"
  }

  return generateMeta({doc: pageBlogData})
}

const getCachedPosts = unstable_cache(
  async (limit) => {
    return queryPosts(1, limit);
  },
  ['blog-latest-posts']
);