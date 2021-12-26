// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import AnimeJS from 'vue-plugin-animejs'
import ToggleSwitch from 'vuejs-toggle-switch'
import VueResizeText from 'vue-resize-text';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(AnimeJS)
  Vue.use(ToggleSwitch)
  Vue.use(VueResizeText)
}

// new Vue({
//     render: h => h(App)
// }).$mount('#app');
