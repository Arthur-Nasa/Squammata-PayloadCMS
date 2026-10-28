import { getDesignTokensPayload } from '@/endpoints/designTokens'

export const dynamic = 'force-static'
export const revalidate = 3600

export async function GET() {
  return Response.json(getDesignTokensPayload(), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
