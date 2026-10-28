export function extractTextFromLexical(node: any): string {
  if (!node) return ''
  if (typeof node === 'string') return node
  if (node.text && typeof node.text === 'string') return node.text
  if (Array.isArray(node.children)) {
    return node.children.map(extractTextFromLexical).join(' ')
  }
  if (node.root) {
    return extractTextFromLexical(node.root)
  }
  return ''
}

export function calculateReadingTime(content: any): number {
  const text = extractTextFromLexical(content)
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const wordsPerMinute = 200
  const minutes = Math.ceil(words / wordsPerMinute)
  return Math.max(1, minutes)
}
