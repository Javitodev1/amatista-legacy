import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';
import compressor from "astro-compressor";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://amatistacomunidad.com/',
  // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'ignore',
  integrations: [react(), tailwind({}), sitemap(), robotsTxt(), astroImageTools, compressor({
    gzip: false,
    brotli: true
  }), svelte()],
  output: "static"
});