import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://redactorseo.es';
  const now = new Date().toISOString();

  // Páginas principales (indexables)
  // Nota: política-privacidad NO incluida (noindex)
  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' }, // Homepage
    { url: '/servicios', priority: '0.9', changefreq: 'weekly' },
    { url: '/redaccion-web', priority: '0.9', changefreq: 'monthly' },
    { url: '/redaccion-blog', priority: '0.9', changefreq: 'monthly' },
    { url: '/pack-inevitable', priority: '0.9', changefreq: 'monthly' },
    { url: '/colaboraciones-agencias', priority: '0.8', changefreq: 'monthly' },
    { url: '/sobre-mi', priority: '0.7', changefreq: 'monthly' },
    { url: '/contacto', priority: '0.8', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
