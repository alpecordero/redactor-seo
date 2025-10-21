// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://redactorseo.es',
  output: 'server',
  adapter: cloudflare({
    mode: 'directory'
  }),
  redirects: {
    '/servicio-redaccion-seo': '/servicios',
    '/textos-tiendas-online': '/servicios',
    '/auditoria-seo': '/servicios',
    '/servicio-de-keyword-research': '/servicios',
    '/precios': '/servicios',
    '/redaccion-estrategica-blogs': '/redaccion-blog',
    '/privacidad': '/politica-privacidad'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: 'esbuild'
    }
  },
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto' // Let Astro inline small CSS automatically
  },
  compressHTML: true,
  // Prefetch links for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});