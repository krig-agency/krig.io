
import DefaultLayout from '~/layouts/Default.vue'
import VueParallaxJs from 'vue-parallax-js'

const options = {
  minWidth: '768',   /* minumum window width for parallax to take effect */
  className: 'hej',  /* this class gets added to all elements
  // that are being animated, by default none */
  container: 'prutt',  /* element that actually scrolls, by default it's window */
}

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
