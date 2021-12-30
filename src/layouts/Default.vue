<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <UxOptions />
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<script>
import PostList from '../components/PostList';
import VScrollin from 'vue-scrollin';
import UxOptions from '../components/UxOptions';

export default {
  components: {
    UxOptions,
    PostList,
    "v-scrollin": VScrollin,
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
body {
  height: 100%;
  background-color: #fff;
}

body {
  font-family: din,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  overflow-x: hidden;
  font-size: 18px;
  line-height: 1.5;
  color: #141414;
}

h1 {
  position: relative;
  display: inline-block;
  font-size: 9rem;
  white-space: nowrap;
  /* text-transform: uppercase; */
  transition: all 0.2s ease;
  font-weight: 800;
}

.v-scrollin::after {
  position: absolute;
  top: 0;
  right: -2.5rem;
  display: inline-block;
  content: ".";
  color: blue;
}

.content-wrap {
  position: relative;
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
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
