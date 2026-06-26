import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://enneaevolution.com',
  server: { port: 4330 },
  devToolbar: { enabled: false },
});
