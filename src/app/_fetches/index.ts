import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Config, ReusableContent } from '@/payload-types'

let cachedPayload: any

const getCachedPayload = async () => {
  if (!cachedPayload) {
    try {
      cachedPayload = await getPayload({ config: configPromise })
    } catch (error) {
      console.warn('[Payload Fetch] Database connection unavailable:', (error as Error)?.message || error)
      return null
    }
  }
  return cachedPayload
}

const logQueryExecution = async <T>(
  queryName: string,
  queryFn: (payload: any) => Promise<T>,
  fallback: T,
): Promise<T> => {
  const start = Date.now();
  try {
    const payload = await getCachedPayload();
    if (!payload) {
      return fallback;
    }
    const result = await queryFn(payload);
    const duration = Date.now() - start;
    console.log(`[Query Log] ${queryName} executed in ${duration}ms`);
    return result;
  } catch (error) {
    const duration = Date.now() - start;
    console.warn(`[Query Log] ${queryName} failed after ${duration}ms (fallback applied):`, (error as Error)?.message || error);
    return fallback;
  }
};

/* globals */

type Global = keyof Config['globals']

export const getGlobal = async (slug: Global, depth = 0) => {
  return logQueryExecution('-payload load global: ' + '[' + slug + ']', async (payload) => {
    return await payload.findGlobal({
      slug,
      depth,
    })
  }, {} as any)
}

export const getGlobalMeta = async (slug: Global, depth = 0) => {
  return logQueryExecution('-payload load global meta: ' + '[' + slug + ']', async (payload) => {
    return await payload.findGlobal({
      slug,
      depth,
      select: {
        meta: true
      }
    })
  }, {} as any)
}

/* pages */

export const queryAllPages = async () => {
  return logQueryExecution('-payload load all pages slugs', async (payload) => {
    const result = await payload.find({
      collection: 'pages',
      depth: 0,
      limit: 50,
      select: {
        slug: true,
      },
    })
    return result.docs
  }, [])
}

export const queryPageBySlug = async (slug: string) => {
  return logQueryExecution('-payload load page layout: ' + '[' + slug + ']', async (payload) => {
    const result = await payload.find({
      collection: 'pages',
      draft: false,
      limit: 1,
      pagination: false,
      overrideAccess: false,
      depth: 0,
      where: {
        slug: {
          equals: slug,
        },
      },
      select: {
        id: true,
        title: true,
        layout: true,
        meta: {
          image: true,
          description: true,
          title: true,
        },
        publishedAt: true,
        headerStyle: true,
        footerLayout: true,
        slug: true,
        updatedAt: true,
        createdAt: true,
        _status: true,
      },
      populate: {
        meta: {
          image: true,
        },
      },
    })
    return result.docs?.[0] || null
  }, null)
}

export const queryLayoutBlocks = async (id: string | number | ReusableContent) => {
  const docId = typeof id === 'object' && id !== null ? id.id : id;
  return logQueryExecution('-payload load reusable content: ' + '[id: ' + docId + ']', async (payload) => {
    const result = await payload.find({
      collection: 'reusable-content',
      draft: false,
      limit: 1,
      pagination: false,
      overrideAccess: false,
      depth: 1,
      where: {
        id: {
          equals: docId,
        },
      },
    })
    return result.docs?.[0]
  }, undefined)
}

/* posts */

export const queryPosts = async (page: number, limit: number) => {
  return logQueryExecution('-payload load posts collection: ' + '[page: ' + page + ', limit: '+ limit +']', async (payload) => {
    return await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      page,
      select: {
        meta: {
          image: true,
          description: true,
        },
        title: true,
        slug: true,
        categories: true,
        authors: true,
        publishedAt: true,
      },
      populate: {
        authors: {
          name: true,
          avatar: true,
        },
        categories: {
          title: true,
        },
      },
      sort: '-publishedAt',
    })
  }, { docs: [], totalDocs: 0, totalPages: 0, page, pagingCounter: 1, hasPrevPage: false, hasNextPage: false, prevPage: null, nextPage: null, limit } as any)
}

export const queryAllPosts = async () => {
  return logQueryExecution('-payload load all posts slugs', async (payload) => {
    const result = await payload.find({
      collection: 'posts',
      depth: 0,
      limit: 100,
      select: {
        slug: true,
      },
      sort: '-publishedAt',
    })
    return result.docs
  }, [])
}

export const queryPostBySlug = async (slug: string) => {
  return logQueryExecution('-payload load post: ' + '[' + slug + ']', async (payload) => {
    const result = await payload.find({
      collection: 'posts',
      draft: false,
      limit: 1,
      overrideAccess: false,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    return result.docs?.[0] || null
  }, null)
}

export const queryBlogArchivePosts = async (flattenedCategories: (string | undefined)[], limit: number) => {
  return logQueryExecution('-payload load block[archive] posts', async (payload) => {
    const result = await payload.find({
      collection: 'posts',
      sort: '-publishedAt',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
      select: {
        meta: {
          image: true,
          description: true,
        },
        title: true,
        slug: true,
        categories: true,
        authors: true,
        publishedAt: true,
      },
      populate: {
        authors: {
          name: true,
          avatar: true,
        },
        categories: {
          title: true,
        },
      },
    })
    const cleanedDocs = result.docs.map((doc: typeof result.docs[number]) => {
      const { authors: _authors, ...cleanDoc } = doc;
      return cleanDoc;
    });
    return cleanedDocs;
  }, [])
}

export const queryBlogRelatedPosts = async (selectedPostsIds: (string | number | undefined)[], limit: number) => {
  return logQueryExecution('-payload load block[related] posts', async (payload) => {
    const result = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      where: {
        id: {
          in: selectedPostsIds,
        },
      },
      sort: '-publishedAt',
      select: {
        meta: {
          image: true,
          description: true,
        },
        title: true,
        slug: true,
        categories: true,
        authors: true,
        publishedAt: true,
      },
      populate: {
        authors: {
          name: true,
          avatar: true,
        },
        categories: {
          title: true,
        },
      },
    })
    return result.docs
  }, [])
}

export const queryPostsTotalCount = async () => {
  return logQueryExecution('-payload load posts count', async (payload) => {
    return await payload.count({
      collection: 'posts',
      overrideAccess: false,
    })
  }, { totalDocs: 0 } as any)
}

/* projects */

export const queryProjects = async (page: number, limit: number) => {
  return logQueryExecution('-payload load projects collection: ' + '[page: ' + page + ', limit: '+ limit +']', async (payload) => {
    return await payload.find({
      collection: 'projects',
      depth: 1,
      limit,
      page,
      select: {
        meta: {
          image: true,
        },
        title: true,
        short_description: true,
        price: true,
        publishedAt: true,
        slug: true,
      },
      sort: 'order',
    })
  }, { docs: [], totalDocs: 0, totalPages: 0, page, pagingCounter: 1, hasPrevPage: false, hasNextPage: false, prevPage: null, nextPage: null, limit } as any)
}

export const queryAllProjects = async () => {
  return logQueryExecution('-payload load all projects slugs', async (payload) => {
    const result = await payload.find({
      collection: 'projects',
      limit: 50,
      depth: 0,
      select: {
        slug: true,
      },
    })
    return result.docs
  }, [])
}

export const queryProjectBySlug = async (slug: string) => {
  return logQueryExecution('-payload load project: ' + '[' + slug + ']', async (payload) => {
    const result = await payload.find({
      collection: 'projects',
      draft: false,
      limit: 1,
      depth: 0,
      overrideAccess: false,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
      select: {
        title: true,
        layout: true,
        meta: true,
        relatedProjects: true,
      },
    })
    const doc = result.docs?.[0];
    if (!doc?.relatedProjects?.length) return doc ?? null;

    const related = await payload.find({
      collection: 'projects',
      where: {
        id: { in: doc.relatedProjects },
      },
      depth: 1,
      select: {
        title: true,
        short: true,
        slug: true,
        meta: { image: true },
      },
    });

    doc.relatedProjects = related.docs;
    return doc;
  }, null)
}

export const queryProjectsGridBlock = async (flattenedCategories: (string | undefined)[], limit: number) => {
  return logQueryExecution('-payload load block[portfolio grid] projects', async (payload) => {
    const result = await payload.find({
      collection: 'projects',
      depth: 1,
      limit,
      sort: 'order',
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
      select: {
        meta: {
          image: true,
        },
        title: true,
        short_description: true,
        price: true,
        publishedAt: true,
        slug: true,
      },
    })
    return result.docs
  }, [])
}

export const queryProjectsRelatedPosts = async (selectedPostsIds: (string | number | undefined)[], limit: number) => {
  return logQueryExecution('-payload load block[related] projects', async (payload) => {
    const result = await payload.find({
      collection: 'projects',
      depth: 1,
      limit,
      where: {
        id: {
          in: selectedPostsIds,
        },
      },
      select: {
        meta: {
          image: true,
        },
        title: true,
        short_description: true,
        price: true,
        publishedAt: true,
        slug: true,
      },
      sort: 'order',
    })
    return result.docs
  }, [])
}

export const queryProjectsTotalCount = async () => {
  return logQueryExecution('-payload load projects count', async (payload) => {
    return await payload.count({
      collection: 'projects',
      overrideAccess: false,
    })
  }, { totalDocs: 0 } as any)
}

/* services */

export const queryServices = async (page: number, limit: number) => {
  return logQueryExecution('-payload load services collection: ' + '[page: ' + page + ', limit: '+ limit +']', async (payload) => {
    return await payload.find({
      collection: 'services',
      depth: 0,
      limit,
      overrideAccess: false,
      page,
      select: {
        title: true,
        list: true,
        short: true,
        slug: true,
        meta: {
          image: true,
        },
      },
      sort: 'order',
    })
  }, { docs: [], totalDocs: 0, totalPages: 0, page, pagingCounter: 1, hasPrevPage: false, hasNextPage: false, prevPage: null, nextPage: null, limit } as any)
}

export const queryServiceBySlug = async (slug: string) => {
  return logQueryExecution('-payload load service: ' + '[' + slug + ']', async (payload) => {
    const result = await payload.find({
      collection: 'services',
      draft: false,
      limit: 1,
      depth: 0,
      overrideAccess: false,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
      select: {
        title: true,
        layout: true,
        meta: true,
        relatedServices: true,
      }
    })
    const doc = result.docs?.[0];
    if (!doc?.relatedServices?.length) return doc ?? null;

    const related = await payload.find({
      collection: 'services',
      where: {
        id: { in: doc.relatedServices },
      },
      depth: 1,
      select: {
        title: true,
        short: true,
        slug: true,
        meta: { image: true },
      },
    });

    doc.relatedServices = related.docs;
    return doc;
  }, null)
}

export const queryAllServices = async () => {
  return logQueryExecution('-payload load all services slugs', async (payload) => {
    const result = await payload.find({
      collection: 'services',
      limit: 50,
      depth: 0,
      select: {
        slug: true,
      },
    })
    return result.docs
  }, [])
}

export const queryServicesRelatedPosts = async (selectedPostsIds: (string | number | undefined)[], limit: number) => {
  return logQueryExecution('-payload load block[related] services', async (payload) => {
    const result = await payload.find({
      collection: 'services',
      depth: 1,
      limit,
      where: {
        id: {
          in: selectedPostsIds,
        },
      },
      select: {
        title: true,
        list: true,
        short: true,
        slug: true,
        meta: {
          image: true,
        },
      },
      sort: 'order',
    })
    return result.docs
  }, [])
}

export const queryServicesTotalCount = async () => {
  return logQueryExecution('-payload load services count', async (payload) => {
    return await payload.count({
      collection: 'services',
      overrideAccess: false,
    })
  }, { totalDocs: 0 } as any)
}

/* team */

export const queryTeam = async (page: number, limit: number) => {
  return logQueryExecution('-payload load team collection: ' + '[page: ' + page + ', limit: '+ limit +']', async (payload) => {
    return await payload.find({
      collection: 'team',
      depth: 0,
      limit,
      overrideAccess: false,
      page,
      select: {
        title: true,
        short: true,
        slug: true,
        meta: {
          image: true,
        },
      },
      sort: 'order',
    })
  }, { docs: [], totalDocs: 0, totalPages: 0, page, pagingCounter: 1, hasPrevPage: false, hasNextPage: false, prevPage: null, nextPage: null, limit } as any)
}

export const queryTeamBySlug = async (slug: string) => {
  return logQueryExecution('-payload load team: ' + '[' + slug + ']', async (payload) => {
    const result = await payload.find({
      collection: 'team',
      draft: false,
      limit: 1,
      depth: 0,
      overrideAccess: false,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
      select: {
        title: true,
        layout: true,
        meta: true,
        relatedTeam: true,
      }
    })
    const doc = result.docs?.[0];
    if (!doc?.relatedTeam?.length) return doc ?? null;

    const related = await payload.find({
      collection: 'team',
      where: {
        id: { in: doc.relatedTeam },
      },
      depth: 1,
      select: {
        title: true,
        short: true,
        slug: true,
        meta: { image: true },
      },
    });

    doc.relatedTeam = related.docs;
    return doc;
  }, null)
}

export const queryAllTeam = async () => {
  return logQueryExecution('-payload load all team slugs', async (payload) => {
    const result = await payload.find({
      collection: 'team',
      limit: 50,
      depth: 0,
      select: {
        slug: true,
      },
    })
    return result.docs
  }, [])
}

export const queryTeamBlock = async (flattenedCategories: (string | undefined)[], limit: number) => {
  return logQueryExecution('-payload load block[team block] team', async (payload) => {
    const result = await payload.find({
      collection: 'team',
      depth: 1,
      limit,
      sort: 'order',
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
      select: {
        meta: {
          image: true,
        },
        title: true,
        short: true,
        slug: true,
      },
    })
    return result.docs
  }, [])
}

export const queryTeamRelatedPosts = async (selectedPostsIds: (string | number | undefined)[], limit: number) => {
  return logQueryExecution('-payload load block[related] team', async (payload) => {
    const result = await payload.find({
      collection: 'team',
      depth: 1,
      limit,
      where: {
        id: {
          in: selectedPostsIds,
        },
      },
      select: {
        meta: {
          image: true,
        },
        title: true,
        short: true,
        slug: true,
      },
      sort: 'order',
    })
    return result.docs
  }, [])
}

export const queryTeamTotalCount = async () => {
  return logQueryExecution('-payload load team count', async (payload) => {
    return await payload.count({
      collection: 'team',
      overrideAccess: false,
    })
  }, { totalDocs: 0 } as any)
}

/* document */

type Collection = keyof Config['collections']

export const getDocument = async (collection: Collection, slug: string, depth = 0) => {
  return logQueryExecution('-payload load document: ' + '[' + slug + ']', async (payload) => {
    const page = await payload.find({
      collection,
      depth,
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    return page.docs[0]
  }, null as any)
}

/* redirects */

export const getRedirects = async (depth = 1) => {
  return logQueryExecution('-payload load redirects', async (payload) => {
    const { docs: redirects } = await payload.find({
      collection: 'redirects',
      depth,
      limit: 0,
      pagination: false,
    })
    return redirects
  }, [])
}

/* sitemap */

export const queryPagesSitemap = async () => {
  return logQueryExecution('-payload load pages sitemap', async (payload) => {
    return await payload.find({
      collection: 'pages',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })
  }, { docs: [] } as any)
}

export const queryPostsSitemap = async () => {
  return logQueryExecution('-payload load posts sitemap', async (payload) => {
    return await payload.find({
      collection: 'pages',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })
  }, { docs: [] } as any)
}