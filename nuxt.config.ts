export default defineNuxtConfig({
  plugins: [
    {
      src: '~/plugins/aos',
      css: ['@/assets/css/main.css'],
    },
  ],
  extends: [
    './ui',
    './apps/landing',
    './apps/store',
    './apps/blog',
    './apps/admin',
    './apps/docs',
    './apps/auth',
  ],
  modules: [
    '@hypernym/nuxt-gsap',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          app_name: 'Nuxt Tailwind Kit',
          app_description:
        'Quick Boilerplate built on top of Nuxt 3 and Tailwind CSS',
          menu_home: 'Home',
          menu_store: 'Store',
          menu_blog: 'Blog',
          menu_dashboard: 'Dashboard',
        },
        id: {
          app_name: 'Nuxt Tailwind Kit',
          app_description:
        'Boilerplate cepat yang dibangun dari Nuxt 3 and Tailwind CSS',
          menu_home: 'Beranda',
          menu_store: 'Toko',
          menu_blog: 'Blog',
          menu_dashboard: 'Dasbor',
        },
      },
    },
    // vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  runtimeConfig: {
    public: {
      gaId: '',
    },
  },
  gsap: {
    extraPlugins: {
      observer: true,
      scrollTo: true,
      draggable: true,
      easel: true,
      motionPath: true,
      pixi: true,
      text: true,
    },
    extraEases: {
      expoScale: true,
      rough: true,
      slowMo: true,
    },
    registerEffects: [
      {
        name: 'fade',
        defaults: {
          y: -100,
          opacity: 0,
          duration: 2,
        },
        // eslint-disable-next-line
        // @ts-ignore
        effect: (targets, config) => {
          return gsap.to(targets, {
            y: config.y,
            opacity: config.opacity,
            duration: config.duration,
          })
        },
      },
      {
        name: 'slideIn',
        // ...
      },
    ],
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
      },
    },
    preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
  },
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js',
      body: true,
    },
  ],
})
