<template>
  <section class="welcome-home item">
    <div class="content-wrap">
      <h1 class="headline-mega">
        <span class="headline-mega__we">
          <v-scrollin :speed="60" :misses="2">We are</v-scrollin>
          <ul class="we-are-krig">
            <li><g-image src="~/assets/images/krig-crew.png" /></li>
            <li><g-image src="~/assets/images/krig-agency-loop-1.jpeg" /></li>
            <li><g-image src="~/assets/images/krig-agency-loop-2.jpeg" /></li>
            <li><g-image src="~/assets/images/krig-agency-loop-3.jpeg" /></li>
          </ul>
        </span>
        <span class="headline-mega__krig">
          <v-scrollin :speed="100" :misses="3">KRIG</v-scrollin>
        </span>
      </h1>
    </div>
  </section>
</teplate>

<script>

export default {
  name: 'Site'
}
</script>

<style lang="scss">

.post-list {
}
</style>
