// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Twee builds uit dezelfde bron:
// - voorstel (PUBLIC_VOORSTEL=1, `npm run build:voorstel`): submap van de Sitefront-verzamelrepo, noindex, geen JSON-LD.
// - definitief (`npm run build`): eigen domein, volledig vindbaar voor zoekmachines en AI.
const voorstel = process.env.PUBLIC_VOORSTEL === '1';

export default defineConfig({
  site: voorstel ? 'https://michaelbeset-ops.github.io' : 'https://brillenbijuthuis.nl',
  base: voorstel ? '/sitefront/brillen-bij-u-thuis' : '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  markdown: { syntaxHighlight: false },
  build: { inlineStylesheets: 'always' },
  // GitHub Pages kan geen eigen headers sturen, dus de CSP komt als meta-tag mee, met hashes voor elk inline script en elke stylesheet.
  // Daarom staan er nergens style-attributen in de markup: die zou deze CSP blokkeren.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});
