export default {
  //target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true, // Importante poner en true
  head: {
    title: 'clasificados',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-signin-client_id', content: '855212464867-dbmnlv1mtfm7ratcr00h7lk706027u30.apps.googleusercontent.com' },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,600,700' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800' },
      { rel: 'stylesheet', href:'https://use.fontawesome.com/releases/v5.7.0/css/all.css' },
      { rel: 'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css' },
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
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'}
      
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js' },
      { src: 'https://apis.google.com/js/platform.js' },

      // { src: 'https://www.googletagmanager.com/gtag/js?id=AW-653666729', async: true },
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-162799894-1', async: true },
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
    { src: '~/plugins/VueGeolocation'},    
    { src: '~/plugins/VueLightbox',  ssr: false},    
    { src: '~/plugins/VueRangeSlider.js', ssr: false },
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/searchs/',
      '~/components/bienesraices/',
      '~/components/template/',
      '~/components/vehiculos/',
      '~/components/general/',
      '~/components/shared/',
    ]
  },

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
    vendor: [
      'vue-range-component'
    ],
  },
  server: {
    // host: '192.168.1.66', // default: localhost
    port: 8080
  }
}
