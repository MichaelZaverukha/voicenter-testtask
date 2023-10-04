// https://nuxt.com/docs/api/configuration/nuxt-config
import nuxtSwiper from 'nuxt-swiper'
export default {
  modules: [nuxtSwiper],
  devtools: { enabled: true },
  css: [
    'reset-css',
    '@/assets/css/styles.css'
  ],
  swiper: {
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination'], 
  }
}
