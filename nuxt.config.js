export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  layout: 'default',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zharikov.design',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone: no' },
      { content: '#333333', name: 'msapplication-TileColor'},
      { content: 'img/favicon/mstile-144x144.png', name: 'msapplication-TileImage'},
      { content: '#333333', name: 'theme-color'}
    ],
    link: [
      { href: 'images/favicon/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
      { href: 'images/favicon/favicon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
      { href: 'images/favicon/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
      { href: 'images/favicon/site.webmanifest', rel: 'manifest' },
      { color: '#5bbad5', href: 'images/favicon/safari-pinned-tab.svg', rel: 'mask-icon' },
      { href: 'https://zharikov.design/tableau.json', rel: 'yandex-tableau-widget' },
      { rel: 'icon', type: 'image/x-icon', href: 'images/favicon/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  nuxt: 'is the best',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
