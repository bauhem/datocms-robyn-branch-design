// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
      "@app": "/@app"
  },
  plugins: [
    '~/plugins/initWebflow.client.js',
  ],
  nitro: {
    compressPublicAssets: true,
  },
  modules: [
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Disallow: '/'
    }],
    '@nuxt/image-edge',
    '@nuxtjs/critters'
  ],
  app: {
    layoutTransition: {
      name: 'layout',
      mode: 'out-in' // default
    },
    head: {
      title: 'robin-branch-designs',
      htmlAttrs: {
        lang: 'en',
        'data-wf-site': '63befb04b81ae07395cfa80b',
      },
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
      ],
      script: [

        {
          src: 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6388d1f4ab22f1a8fc67233a',
          type: 'module',
          integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
          crossorigin: 'anonymous',
        },
        {
          src: '/js/webflow.js',
          type: 'module',
          body: true,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.png',
        },
        {
          rel: 'stylesheet',
          href: '/style/normalize.css',
        },
        {
          rel: 'stylesheet',
          href: '/style/webflow.css',
        },
        {
          rel: 'stylesheet',
          href: '/style/robyn-branch-design.webflow.css',
        },
      ],
    },
  },
  runtimeConfig: {
    previewModeEncryptionSecret:
      // !> Before releasing to production, see the README
      process.env.NUXT_ENV_PREVIEW_MODE_ENCRYPTION_SECRET ||
      'Use NUXT_ENV_PREVIEW_MODE_ENCRYPTION_SECRET environment variable to set a random string and encrypt the preview mode cookie',

    previewModePassword:
      // !> Before releasing to production, see the README:
      // !> be sure to set a proper password to limit the access to preview mode
      process.env.NUXT_ENV_PREVIEW_MODE_PASSWORD || '42',

    draftEnabledToken:
      // !> Before releasing to production, see the README for information concerning security
      // !> and be sure to use tokens with the minimum amount of permission
      process.env.NUXT_ENV_DATOCMS_API_DRAFT_ENABLED_TOKEN ||
      process.env.NUXT_ENV_DATOCMS_API_TOKEN,

    public: {
      datocms: {
        bundleSafeToken:
          // !> Before releasing to production, see the README for information concerning security
          // !> and be sure to use tokens with the minimum amount of permission
          process.env.NUXT_ENV_DATOCMS_API_BUNDLE_SAFE_TOKEN ||
          process.env.NUXT_ENV_DATOCMS_API_TOKEN,

        environment: process.env.NUXT_ENV_DATOCMS_ENVIRONMENT,
        endpoint: 'https://graphql.datocms.com',
      },
    },
  },
})
