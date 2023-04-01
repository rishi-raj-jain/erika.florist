import mdx from "@astrojs/mdx"; // https://astro.build/config
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  publicDir: "./static",
  site: "https://erika.florist/",
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "material-darker",
      langs: [],
      wrap: false,
    },
  },
  experimental: {
    assets: true,
  },
  image: {
    service: "astro/assets/services/sharp",
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        {
          // Explicitly alias a default export
          // generates:
          // import { default as B } from './src/components/B.astro';
          "./src/components/MarkdownImage.astro": [["default", "Image"]],
          "./src/components/MarkdownNoteBlock.astro": [["default", "Blocknote"]],
        },
      ],
    }),
    mdx(),
  ],
});
