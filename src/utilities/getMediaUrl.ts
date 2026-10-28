import { getClientSideURL } from '@/utilities/getURL'

/**
 * Processes media resource URL to ensure proper formatting
 * @param url The original URL from the resource
 * @param cacheTag Optional cache tag to append to the URL
 * @returns Properly formatted URL with cache tag if provided
 */
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''

  if (cacheTag && cacheTag !== '') {
    cacheTag = encodeURIComponent(cacheTag)
  }

  // Check if URL already has http/https protocol
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return cacheTag ? `${url}?${cacheTag}` : url
  }

  // If URL is a relative path (e.g. /api/media/file/...), keep it relative.
  // This allows same-origin image requests to resolve naturally across localhost, LAN IPs, or domain names
  // without triggering Next.js Image invalid src / remotePatterns errors.
  if (url.startsWith('/')) {
    return cacheTag ? `${url}?${cacheTag}` : url
  }

  return cacheTag ? `/${url}?${cacheTag}` : `/${url}`
}