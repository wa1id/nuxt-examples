// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/main.scss'],
  devtools: {
    enabled: true,
  },
  routeRules: {
    '/preload': { prerender: true },
    '/swr': { swr: 10 },
    '/isr': { isr: true },
  },
})
