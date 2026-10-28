import { getGlobal, getGlobalMeta } from '@/app/_fetches'
import { unstable_cache } from 'next/cache'
import type { Config } from '@/payload-types'

type Global = keyof Config['globals']

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) => {
  if (process.env.NODE_ENV === 'development') {
    return async () => {
      try {
        return await getGlobal(slug, depth)
      } catch {
        return {} as any
      }
    }
  }
  return unstable_cache(async () => {
    try {
      return await getGlobal(slug, depth)
    } catch {
      return {} as any
    }
  }, [slug], {
    tags: [`global_${slug}`],
  })
}

export const getCachedGlobalMeta = (slug: Global, depth = 0) => {
  if (process.env.NODE_ENV === 'development') {
    return async () => {
      try {
        return await getGlobalMeta(slug, depth)
      } catch {
        return {} as any
      }
    }
  }
  return unstable_cache(async () => {
    try {
      return await getGlobalMeta(slug, depth)
    } catch {
      return {} as any
    }
  }, [slug], {
    tags: [`global_meta_${slug}`],
  })
}