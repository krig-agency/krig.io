<template>
  <section class="section">
    <v-embed :options="options">
      Cur rumor nocere ? :smile: :smile: :smile: :smile: :smile: :smile:
      Emeritis adelphis satis perderes domina est.Gloss cadunt in bi-color
      brema!
    </v-embed>
  </section>
</template>

<script>
import VEmbed from 'vue-embed';

export default {
  name: 'InstagramPost',

  components: {
    VEmbed,
  },

  data: () => ({
    options: {
      plugins: [
        {
          name: 'instagram',
          options: {
            regex: /instagramPostRegex/gi, // in case you want to define a custom regex
            template(args) {
              // optional template
            }
          }
        }],
    },
  }),
};
</script>
