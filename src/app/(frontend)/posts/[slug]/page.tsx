import type { Metadata } from 'next'
import React from 'react'
import { RelatedPosts } from '@/components/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { draftMode } from 'next/headers'
import RichText from '@/components/RichText'
import { unstable_cache } from 'next/cache'

import type { Post, Blog, Category } from '@/payload-types'

import { PostHero } from '@/components/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { queryAllPosts, queryPostBySlug } from '@/app/_fetches'
import { formatAuthors } from '@/utilities/formatAuthors'
import { formatDateTime } from '@/utilities/formatDateTime'
import { calculateReadingTime } from '@/utilities/calculateReadingTime'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await getCachedPage(decodedSlug, draft)
  const blogData: Blog = await getCachedGlobal('blog', 0)()

  if (!post) return <PayloadRedirects url={url} />

  const hasAuthors =
      post.populatedAuthors && post.populatedAuthors.length > 0 && formatAuthors(post.populatedAuthors) !== ''

  return (
    <>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <div className="mil-sticky-section mil-bg-out-left-gray mil-md-white">
          <div className="mil-sticky-part mil-p-10-10 mil-angle mil-angle-lg">
              <div className="mil-fake-container-left">
                  <div className="mil-badge mil-mb-4">Artigo Técnico</div>
                  <h2 className="mil-mb-5">{post.title}</h2>
                  <ul className="mil-half-list">
                      {post.publishedAt &&
                      <li className="mil-mb-3">
                          <p className="mil-c-m-2">Data:</p>
                          <div className="mil-dots"></div>
                          <p><time dateTime={post.publishedAt}>{formatDateTime(post.publishedAt)}</time></p>
                      </li>
                      }
                      <li className="mil-mb-3">
                          <p className="mil-c-m-2">Tempo de Leitura:</p>
                          <div className="mil-dots"></div>
                          <p>{calculateReadingTime(post.content)} min</p>
                      </li>
                      {hasAuthors &&
                      <li className="mil-mb-3">
                          <p className="mil-c-m-2">Autor:</p>
                          <div className="mil-dots"></div>
                          <p>{formatAuthors(post.populatedAuthors)}</p>
                      </li>
                      }
                      {post.categories && post.categories.length > 0 &&
                      <li>
                          <p className="mil-c-m-2">Categoria:</p>
                          <div className="mil-dots"></div>
                          <span className="mil-dark">
                            {post.categories?.map((category : Category, index : number) => {
                              if (typeof category === 'object' && category !== null) {
                                const { title: categoryTitle } = category

                                const titleToUse = categoryTitle || 'Geral'

                                const isLast = index === post.categories.length - 1

                                return (
                                  <React.Fragment key={index}>
                                    {titleToUse}
                                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                                  </React.Fragment>
                                )
                              }
                              return null
                            })}
                          </span>
                      </li>
                      }
                  </ul>
              </div>
          </div>
          <div className="mil-scroll-part mil-p-0-10">
              <div className="mil-fake-container-right mil-pad-10 mil-mt-10 mil-mb-0">
                  <RichText className="mil-t-16 mil-c-m-2" data={post.content} enableGutter={false} />
              </div>
          </div>
      </div>
      
      {blogData.post_layout_after &&
      <RenderBlocks blocks={blogData.post_layout_after} />
      }

      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <RelatedPosts
          limit={3}
          docs={post.relatedPosts.filter((post: Post) => typeof post === 'object')}
          postId={post.slug}
        />
      )}
    </>
  )
}

const getCachedPage = async (slug: string, draft?: boolean) =>
  draft ? queryPostBySlug(slug) : unstable_cache(queryPostBySlug, [`post-${slug}`])(slug)

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const { isEnabled: draft } = await draftMode()
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await getCachedPage(decodedSlug, draft)

  return generateMeta({ doc: post })
}

export async function generateStaticParams() {
  try {
    const getCachedPages = unstable_cache(queryAllPosts, ['allPosts'])
    const pages = await getCachedPages()
    
    if (!Array.isArray(pages)) {
      return []
    }

    return pages
      .filter((page) => page?.slug)
      .map(({ slug }) => {
        return {
          slug
        }
      })
  } catch (_e) {
    return []
  }
}