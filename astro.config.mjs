// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.URL ?? "https://ajnir-portfolio.netlify.app/",
  trailingSlash: "always",

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: "always",
  },

  image: {
    domains: ["images.unsplash.com"],
  },

  integrations: [sitemap()],
});