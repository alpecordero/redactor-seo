/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './tina/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'azul-profundo': '#1a365d',
        'naranja-vibrante': '#e55a2e',
        'gris-carbon': '#2d3748',
        'gris-suave': '#718096',
        'gris-claro': '#f7fafc',
        'negro-profundo': '#1a202c',
      },
    },
  },
  plugins: [],
  // Aggressive purging for smaller CSS bundles
  safelist: [
    // Keep critical animation classes
    'animate-on-scroll',
    'opacity-0',
    'translate-y-8',
    'transition-all',
    // Keep Google color classes
    /^google-/,
    // Keep hero critical classes
    'hero-critical',
    'hero-title',
    'hero-button',
  ],
  // Optimize for production
  corePlugins: {
    preflight: true,
  },
}