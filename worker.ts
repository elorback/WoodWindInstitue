import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import type { ExecutionContext } from '@cloudflare/workers-types'

export default {
  async fetch(
    request: Request,
    env: unknown,
    ctx: ExecutionContext
  ): Promise<Response> {
    try {
      return await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil },
        {
          mapRequestToAsset: (req) => {
            const url = new URL(req.url)

            // SPA fallback: serve index.html for client-side routes
            if (!url.pathname.match(/\.[a-zA-Z0-9]+$/)) {
              return new Request(`${url.origin}/index.html`, req)
            }

            return req
          },
        }
      )
    } catch {
      return new Response('Not Found', { status: 404 })
    }
  },
}
