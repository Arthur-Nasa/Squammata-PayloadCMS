import type { FieldHook } from 'payload'

// Função auxiliar que percorre os nós da árvore do Lexical RichText
// extraindo o conteúdo textual puro para estimativa de leitura.
function extractLexicalText(node: unknown): string {
  if (!node || typeof node !== 'object') {
    return ''
  }

  const typedNode = node as { text?: string; children?: unknown[] }
  let collected = ''

  if (typeof typedNode.text === 'string') {
    collected += typedNode.text + ' '
  }

  if (Array.isArray(typedNode.children)) {
    for (const child of typedNode.children) {
      collected += extractLexicalText(child)
    }
  }

  return collected
}

// Hook de campo responsável pelo cálculo determinístico do tempo estimado de leitura,
// adotando a cadência padrão de 200 palavras por minuto e piso mínimo de 1 minuto.
export const calculateReadingTime: FieldHook = ({ data }) => {
  const content = data?.content

  if (!content) {
    return 1
  }

  const extractedText = extractLexicalText(content)
  const wordCount = extractedText.trim().split(/\s+/).filter(Boolean).length

  if (wordCount === 0) {
    return 1
  }

  return Math.max(1, Math.ceil(wordCount / 200))
}
