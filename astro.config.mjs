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