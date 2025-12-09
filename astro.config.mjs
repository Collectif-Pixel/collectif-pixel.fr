// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://collectif-pixel.fr',
  integrations: [
    sitemap(),
    expressiveCode({
      themes: ['github-dark'],
      styleOverrides: {
        borderRadius: '0.75rem',
        borderColor: '#27272a',
        codeBg: '#050506',
        codeSelectionBg: '#0044CC40',
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});