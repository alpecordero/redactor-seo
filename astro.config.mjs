// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  redirects: {
    '/redaccion-estrategica-blogs': {
      status: 301,
      destination: '/redaccion-blog'
    },
    '/privacidad': {
      status: 301,
      destination: '/politica-privacidad'
    },
    '/servicio-redaccion-seo': {
      status: 301,
      destination: '/servicios'
    },
    '/textos-tiendas-online': {
      status: 301,
      destination: '/servicios'
    },
    '/auditoria-seo': {
      status: 301,
      destination: '/servicios'
    },
    '/servicio-de-keyword-research': {
      status: 301,
      destination: '/servicios'
    },
    '/precios': {
      status: 301,
      destination: '/servicios'
    }
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