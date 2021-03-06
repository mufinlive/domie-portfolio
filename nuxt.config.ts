import { defineNuxtConfig } from "nuxt";

import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
  buildModules: [
    [
      "@nuxtjs/google-fonts",
      {
        googleFonts: {
          families: {
            Inter: true,
          },
        },
      },
    ],
  ],
  modules: ["@nuxtjs/tailwindcss"],
});
