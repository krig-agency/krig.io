<template>
  <div class="post-insta">
    <iframe width="100%" height="100%" src="https://www.instagram.com/p/CWYi0ruFJRq/embed" frameborder="0"></iframe>
  </div>

</template>

<script>

// import VueFriendlyIframe from 'vue-friendly-iframe';
//
// Vue.use(VueFriendlyIframe);

export default {
  name: "InstaPost",
}
</script>

<style lang="scss">

.post-insta {
  iframe {
    width: 100%;
    margin-right: -10px;
    overflow: hidden;
  }
  #react-root, article, div, footer, header, main, nav, section {
    background: black !important;
  }
  body {
    width: 100%;
    margin: -2rem -2px !important;
    background: black !important;

    .Header {
      background: black !important;
      display: none;
      visibility: hidden;
    }

    body {
      background: black !important;
    }
  }
}
</style>
