// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    }
  },
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto' // Let Astro inline small CSS automatically
  },
  compressHTML: true
});