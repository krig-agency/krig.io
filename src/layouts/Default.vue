<template>
  <div class="layout">
    <header class="header">
      <Krux />
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <slot/>
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
  background-position: bottom -50px right;
}

.layoutc {
  // height: 100%;
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
</style>
