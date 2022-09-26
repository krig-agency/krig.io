
import DefaultLayout from '~/layouts/Default.vue'
import VueParallaxJs from 'vue-parallax-js'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Use vue-parallax-js to the project
  Vue.use(VueParallaxJs)

  head.script.push({
    src: 'https://www.instagram.com/embed.js',
    async: true
  })
};
