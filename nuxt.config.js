export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'clasificados',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700' },
      { rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.7.0/css/all.css' },
      { rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/open-iconic-bootstrap.min.css'},
      { rel: 'stylesheet', href: '/css/animate.css'},
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css'},
      { rel: 'stylesheet', href: '/css/magnific-popup.css'},
      { rel: 'stylesheet', href: '/css/aos.css'},
      { rel: 'stylesheet', href: '/css/ionicons.min.css'},
      { rel: 'stylesheet', href: '/css/bootstrap-datepicker.css'},
      { rel: 'stylesheet', href: '/css/jquery.timepicker.css'},
      { rel: 'stylesheet', href: '/css/flaticon.css'},
      { rel: 'stylesheet', href: '/css/icomoon.css'},
      { rel: 'stylesheet', href: '/css/style.css'},
      { rel: 'stylesheet', href: '/css/lightbox.css'},
      { rel: 'stylesheet', href: '/css/owl.carousel.css'},
      { rel: 'stylesheet', href: '/css/nouislider.min.css'},
      
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ], 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/VueAgile', mode: 'client' },
    { src: '~/plugins/Vuelidate' },
    { src: '~/plugins/VueTelInput' },
    { src: '~/plugins/VueGoogleMaps', ssr: false},
    { src: '~/plugins/VueGeolocationApi'},
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-geolocation-api/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
