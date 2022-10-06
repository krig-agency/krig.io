<template>
  <div class="layout">
    <header class="header">
      <Krux />
      <!-- <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong> -->
  </header>
  <slot/>
  <footer class="footer">
    <div class="footer--click">
      <g-image class="footer--click-icon" src="~/assets/images/bye.svg" />
    </div>
    <div class="footer--content">
      <p>KRIG Agency I <span><a href="tel:0739825395">073-9825395</a></span> I <span><a class="mail-link"href="mailto:hello@krig.io">hello@krig.io</a></span></p>
      <div class="some">
        <a href="https://www.facebook.com/krigio.agency"><g-image class="some-icon" src="~/assets/images/icon-fb.svg" /></a>
        <a href="https://www.instagram.com/krig_agency/"><g-image class="some-icon" src="~/assets/images/icon-instagram.svg" /></a>
        <a href="https://github.com/krig-agency"><g-image class="some-icon" src="~/assets/images/icon-github.svg" /></a>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
// import IconBye from './components/icons/IconBye.vue'
// import IconHi from './icons/IconHi.vue'
import PostList from '../components/PostList';
// import Krux from '../components/Krux';
import Krux from '../components/UxOptions';

export default {
  components: {
    Krux,
    PostList,
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
  background-color: #fff;
  box-sizing: border-box;

  @include sm {
  }
}

.layout {
  height: 100vh;
  background-color: #fff;
  background-image: url("~@/assets/images/krig-crew.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-x: hidden;
  box-sizing: border-box;

  @include sm {
    background-size: cover;
    background-attachment: fixed;
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
  font-size: 7.5rem;
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
#mobile-toggle {
  display: block;
  background: green;
}

.footer {
  position: relative;
  right: 0;
  left: 0;
  width: 100vw;
}

.footer--click {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-left: 0;
  width: 100vw;
  height: 66px;
  background-color: blue;
  color: white;

  @include mini {
    width: 66px;
  }

  @include sm {
    margin-left: 20px;
  }
}

.footer--click-icon {
  position: absolute;
  width: 46px;
  height: 46px;
  animation: wave 2.1s 0.6s infinite;
}

.footer--content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 66px;
  background-color: white;
  height: 66px;
  color: blue;
  width: auto;
  text-align: center;

  @include mini {
    padding-left: 86px;
    padding-right: 10px;
    padding-top: 0;
  }

  @include sm {
    margin: 20px;
    padding-left: 106px;
    padding-right: 40px;
  }

  p {
    font-size: 14px;
    text-align: left;

    @include mini {
      font-size: 1rem;
    }
  }
}

.mail-link {
  font-weight: 600;
}

.some {
  display: inherit;
}

.some-icon {
  margin: 0 10px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }
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
