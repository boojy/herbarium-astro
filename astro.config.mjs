import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import wikiLinkPlugin from 'remark-wiki-link-plus';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-cip.netlify.app',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp',
    markdown: {
      remarkPlugins: [wikiLinkPlugin],
      smartypants: false,
    }
  }), sitemap(),],
  markdown: {
      remarkPlugins: [wikiLinkPlugin],
    }
});