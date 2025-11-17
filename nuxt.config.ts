// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  ssr: true,
  
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Jost: [400, 600, 700, 800],
      Inter: {
        wght: [900],
        ital: [900]
      }
    },
    display: 'swap',
    preload: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'de'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Grüne Hecke - Cannabis Café & Lounge',
      meta: [
        { name: 'description', content: 'Die Grüne Hecke ist ein Cannabis Café ohne Verkauf und Handel mit Cannabis. Genieße unsere Atmosphäre in unseren Standorten.' },
        { name: 'keywords', content: 'Cannabis Café, Grüne Hecke, Cannabis Lounge, Social Club' },
        { property: 'og:title', content: 'Grüne Hecke - Cannabis Café & Lounge' },
        { property: 'og:description', content: 'Die Grüne Hecke ist ein Cannabis Café ohne Verkauf und Handel mit Cannabis.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    '~/assets/styles/main.scss'
  ],

  runtimeConfig: {
    // Server-side only
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: process.env.SMTP_PORT || '587',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    emailFrom: process.env.EMAIL_FROM || 'noreply@gruenehecke.de',
    emailTo: process.env.EMAIL_TO || 'info@gruenehecke.de',
    
    // Public keys that are exposed to the client
    public: {
      siteUrl: process.env.SITE_URL || 'https://gruenehecke.de'
    }
  },

  nitro: {
    preset: 'node-server'
  }
})
