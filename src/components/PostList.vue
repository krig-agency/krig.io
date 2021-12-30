<template>
  <div class="post-list">
    <g-link :to="post.path">
      <h2>{{post.title}}</h2>
    </g-link>
    <p>{{post.excerpt}}</p>
  </div>

</template>

<script>
export default {
  props: ["post"],
}
</script>

<style lang="scss">

.post-list {
}
</style>
