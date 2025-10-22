import { defineMiddleware } from 'astro:middleware';

const PLAUSIBLE_URL = 'https://plausible.cordero.top';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Proxy para el script de Plausible
  if (pathname === '/js/script.js') {
    try {
      const response = await fetch(`${PLAUSIBLE_URL}/js/script.js`);
      const script = await response.text();

      return new Response(script, {
        status: 200,
        headers: {
          'Content-Type': 'application/javascript',
          'Cache-Control': 'public, max-age=86400',
          'X-Plausible-Proxy': 'true'
        }
      });
    } catch (error) {
      console.error('Error proxying Plausible script:', error);
      return new Response('', { status: 404 });
    }
  }

  // Proxy para los eventos de Plausible
  if (pathname === '/api/event') {
    try {
      const body = await context.request.text();

      const response = await fetch(`${PLAUSIBLE_URL}/api/event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': context.request.headers.get('User-Agent') || '',
          'X-Forwarded-For': context.clientAddress || context.request.headers.get('X-Forwarded-For') || '',
        },
        body: body
      });

      const data = await response.text();

      return new Response(data, {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'X-Plausible-Proxy': 'true'
        }
      });
    } catch (error) {
      console.error('Error proxying Plausible event:', error);
      return new Response('{"ok": false}', {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }

  return next();
});
