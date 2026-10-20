import sanitize from 'sanitize-html'

const SANITIZE_CONFIG: sanitize.IOptions = {
  allowedTags: [
    'span', 'br', 'ul', 'ol', 'li', 'strong', 'em', 'u', 'i', 'a',
    'cite', 'p', 'b', 'small', 'mark'
  ],
  allowedAttributes: {
    '*': ['class'],
    a: ['href', 'target', 'rel'],
  },
}

export const sanitizeHTML = (input: string | undefined | null): string => {
  if (!input) return ''
  return sanitize(String(input), SANITIZE_CONFIG)
}

export default sanitizeHTML
