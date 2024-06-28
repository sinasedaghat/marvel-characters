// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      link: [
        {        
          rel: "stylesheet",        
          href: "https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap",      
        }
      ]
    }
  },

  css: [
    "~/styles/main.css"
  ],

  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss", 
    "@nuxt/image", 
    "@nuxt/icon",
    "@nuxtjs/device"
  ],

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },

  devtools: { 
    enabled: true 
  },
})