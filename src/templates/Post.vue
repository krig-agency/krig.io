<template>
  <Layout>
    <div>
      <h1>{{$page.post.title}}</h1>
      <div v-html="$page.post.content"></div>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    post (path: $path) {
      title
      content
    }
  }
</page-query>
