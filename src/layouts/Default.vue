<template>
  <div class="layout">
    <header class="header">
      <Krux />
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <slot/>
    <footer class="footer">
      <div class="footer--click">
        <g-image class="footer--click-icon" src="~/assets/images/bye.svg" />
      </div>
      <div class="footer--content">
        <p>KRIG Agency I <span><a href="tel:0739825395">073-9825395</a></span> I <span><a href="mailto:hello@krig.io">hello@krig.io</a></span></p>
      </div>
    </footer>
  </div>
</template>

<script>
import PostList from '../components/PostList';
import Krux from '../components/Krux';

export default {
  components: {
    Krux,
    PostList,
  }
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
  // height: 100vh;
  background-color: #fff;
  background-image: url("~@/assets/images/krig-crew.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
  overflow-x: hidden;
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
  font-size: 9rem;
  text-transform: uppercase;
  transition: all 0.2s ease;
  font-weight: 800;
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

.footer--content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: white;
  height: 66px;
  color: blue;
  width: auto;
  text-align: center;

  @include sm {
    margin: 20px;
  }
}

.footer--click {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-left: 0;
  width: 66px;
  height: 66px;
  background-color: blue;
  color: white;

  @include sm {
    margin-left: 20px;
  }
}

.footer--click-icon {
  position: absolute;
  width: 46px;
  height: 46px;
}
</style>
