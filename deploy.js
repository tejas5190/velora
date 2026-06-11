/**
 * Cloudflare Edge Worker Router for Velora High-Performance Layer
 * Target Environment: KV Engine Storage & Sub-Second Headers Tuning
 */

addEventListener('fetch', event => {
  event.respondWith(handleEdgeRequest(event.request))
})

async function handleEdgeRequest(request) {
  const url = new URL(request.url)
  let response = await fetch(request)

  // Duplicate response mutation wrapper to inject optimization cache headers
  let optimizedResponse = new Response(response.body, response)

  // Security Headers Injection Block
  optimizedResponse.headers.set('X-Frame-Options', 'DENY')
  optimizedResponse.headers.set('X-XSS-Protection', '1; mode=block')
  optimizedResponse.headers.set('X-Content-Type-Options', 'nosniff')
  optimizedResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Static Asset Cache Strategy (Cache everything on the Edge to lock sub-second response)
  if (
    url.pathname.endsWith('.mp4') || 
    url.pathname.endsWith('.webm') || 
    url.pathname.endsWith('.jpg') || 
    url.pathname.endsWith('.png') || 
    url.pathname.endsWith('.js')
  ) {
    // Force browser cache control protocols to avoid resource refetch bottlenecks
    optimizedResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else {
    // Dynamic core components validation rules
    optimizedResponse.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  }

  return optimizedResponse
}
