// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { rename, rmdir } from "node:fs/promises";

// Cloudflare serves the nearest 404.html, but Astro writes en/404/index.html.
/** @returns {import("astro").AstroIntegration} */
function localizedNotFoundPage() {
  return {
    name: "localized-not-found-page",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const builtFolder = new URL("en/404/", dir);
        await rename(new URL("index.html", builtFolder), new URL("en/404.html", dir));
        await rmdir(builtFolder);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://ajnir.com",
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

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
      i18n: { defaultLocale: "fr", locales: { fr: "fr", en: "en" } },
    }),
    localizedNotFoundPage(),
  ],
});