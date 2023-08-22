import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import sanity from "astro-sanity";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), sanity({
    projectId: "eshtatwf",
    dataset: "production",
    apiVersion: "2023-02-08"
    //  useCdn: false,
  }), tailwind()]
});