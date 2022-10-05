
import DefaultLayout from '~/layouts/Default.vue'
import VueScrollReveal from 'vue-scroll-reveal'
import VueRellax from 'vue-rellax'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueRellax)

  // OR specifying custom default options for all uses of the directive
  Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 1000,
    scale: 1,
    distance: '2rem',
    mobile: false
  });

  head.script.push({
    src: 'https://www.instagram.com/embed.js',
    async: true
  })
};
