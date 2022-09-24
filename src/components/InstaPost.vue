<template>
  <div class="post-insta">

  </div>

</template>

<page-query>
  query {
    allInstagramPhoto {
      edges {
        node {
          display_url
          edge_media_to_caption {
            edges {
              node {
                text
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>

export default {
  name: "PostInsta",
}
</script>

<style lang="scss">

.post-insta {
}
</style>
