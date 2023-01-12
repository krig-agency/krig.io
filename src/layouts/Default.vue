<template>
  <div class="layout">
    <header class="header">
      <Krux />
      <!-- <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong> -->
  </header>
  <slot/>
  <SiteFooter />
</div>
</template>

<script>
// import IconBye from './components/icons/IconBye.vue'
// import IconHi from './icons/IconHi.vue'
// import PostList from '../components/PostList';
import SiteFooter from '../components/SiteFooter';
// import Krux from '../components/Krux';
import Krux from '../components/UxOptions';

export default {
  components: {
    Krux,
    SiteFooter,
    // PostList,
  },
  data: {
    active: false,
  },
  plugins: [
    {
      use: 'gridsome-plugin-modal'
    }
  ]
}
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style lang="scss">

html,
body,

.layout {
  height: 100vh;
  max-height: -webkit-fill-available;
  background-color: #fff;
  background-image: url("~@/assets/images/krig-crew.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-x: hidden;
  box-sizing: border-box;

  @include sm {
    height: 100%;
    background-size: cover;
    background-position: center bottom;
  }
}

.big {
  font-size: 30px;
}

p{
  transition:all 0.5s ease-out;
}

html {
  font-size: 18px;
}

body {
  font-family: din,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #141414;
}

img {
  max-width: 100%;
}

h1 {
  position: relative;
  display: block;
  font-size: 6rem;
  text-transform: uppercase;
  transition: all 0.2s ease;
  font-weight: 800;

  @include mini {
    font-size: 9rem;
  }
}

h2 {
  font-size: 3.25rem;
  line-height: 1;
}

h3 {
  font-size: 1.5rem;
}

.yellow {
  color: yellow;
}

.content-wrap {
  position: relative;
  // width: 50%;
}

.header {
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

@font-face {
  font-family: din;
  src: url('../assets/fonts/din-regular.woff');
  font-weight: normal;
}

@font-face {
  font-family: din;
  src: url('../assets/fonts/din-bold.woff');
  font-weight: bold;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(16deg);
  }
  20% {
    transform: rotate(-6deg);
  }
  30% {
    transform: rotate(16deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(16deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

</style>
