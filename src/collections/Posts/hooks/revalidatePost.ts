import { revalidatePath, revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

// Hook executado após mutação de documento para revalidação On-Demand de páginas estáticas e tags de cache.
export const revalidatePostAfterChange: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (context?.skipRevalidation) {
    return doc
  }

  try {
    if (doc._status === 'published' && doc.slug) {
      payload.logger.info(`[ISR] Revalidando rota /posts/${doc.slug}`)
      revalidatePath(`/posts/${doc.slug}`)
      revalidateTag(`post_${doc.slug}`)
    }

    if (previousDoc?._status === 'published' && previousDoc.slug && previousDoc.slug !== doc.slug) {
      payload.logger.info(`[ISR] Revalidando slug antigo /posts/${previousDoc.slug}`)
      revalidatePath(`/posts/${previousDoc.slug}`)
    }

    revalidatePath('/posts')
    revalidateTag('posts-list')
  } catch (err) {
    payload.logger.warn(`[ISR] Revalidação ignorada em contexto não interativo: ${err}`)
  }

  return doc
}

// Hook executado após exclusão para remoção de páginas estáticas indexadas no cache do Next.js.
export const revalidatePostAfterDelete: CollectionAfterDeleteHook = ({ doc, req: { payload } }) => {
  try {
    if (doc?.slug) {
      payload.logger.info(`[ISR] Purgando rota excluída /posts/${doc.slug}`)
      revalidatePath(`/posts/${doc.slug}`)
      revalidatePath('/posts')
      revalidateTag('posts-list')
    }
  } catch (err) {
    payload.logger.warn(`[ISR] Revalidação na exclusão ignorada em contexto não interativo: ${err}`)
  }
  return doc
}
