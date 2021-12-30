<template>
  <Layout>
    <section class="welcome-home">
      <div class="content-wrap">
        <h1 class="headline-mega">
          <v-scrollin :speed="50" :misses="4">We are KRIG</v-scrollin>
        </h1>
      </div>

      <div class="krig-crew">
        <g-image src="~/assets/images/krig-crew.png" />
      </div>
    </section>

    <div class="content-wrap">
      <PostList
      v-for="edge in $page.allPost.edges"
      :key="edge.node.id"
      :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
  query {
    allPost {
      edges {
        node {
          path
          title
          excerpt
        }
      }
    }
  }
</page-query>

<script>
import PostList from '../components/PostList';
import VScrollin from 'vue-scrollin';

export default {
  myOptions: {
    layout: {
      color: 'black',
      backgroundColor: 'lightgray',
      selectedColor: 'white',
      selectedBackgroundColor: 'green',
      borderColor: 'black',
      fontFamily: 'Arial',
      fontWeight: 'normal',
      fontWeightSelected: 'bold',
      squareCorners: false,
      noBorder: false
    },
    size: {
      fontSize: 14,
      height: 34,
      padding: 7,
      width: 100
    },
    items: {
      delay: .4,
      preSelected: 'unknown',
      disabled: false,
      labels: [
        {name: 'Off', color: 'white', backgroundColor: 'red'},
        {name: 'On', color: 'white', backgroundColor: 'green'}
      ]
    }
  },

  components: {
    PostList,
    "v-scrollin": VScrollin
  },
  metaInfo: {
    title: 'KRIG digital agency'
  },
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
  mounted() {
    this.toggleBodyClass('addClass', 'mb-0');
  },
  destroyed() {
    this.toggleBodyClass('removeClass', 'mb-0');
  }
  // name: 'v-polygon',
  // mounted: function () {
  //
  //   // Once the component is mounted, begin animating
  //   this.$anime({
  //     targets: '#lineDrawing .cls-1',
  //     strokeDashoffset: [this.setDashoffset, 0],
  //     fill:['rgba(255,255,255,0)', 'rgba(255,255,255,0.4)'],
  //     easing: 'easeInOutCubic',
  //     duration: 400,
  //     delay: function(el, i) { return i * 200 },
  //     direction: 'alternate',
  //     loop: true
  //   });
  // }
}
</script>

<style lang="scss">

svg {
  fill: #eeff00;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
}

.cls-1 {
  stroke:#eeff00;
  stroke-width:0.5px;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:0.75px;
}

.welcome-home {
  position: relative;
  height: 100vh;

  .content-wrap {
    height: 100vh;
  }

  .headline-mega {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    margin: 0;
    text-align: right;
    line-height: 1;

    .v-scrollin {
      color: rgba(0, 0, 0, 0.2);
      mix-blend-mode: multiply;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}

.krig-crew {
  position: absolute;
  top: 0;
  width: 43%;

  img {
    width: 100%;
  }
}
</style>
