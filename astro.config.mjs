import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://enneaevolution.com',
  server: { port: 4330 },
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
