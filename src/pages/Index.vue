<template>
  <Layout>

    <!-- <g-image src="~/assets/images/krig-logomark.svg" width="500"/> -->
    <h1>
      <v-scrollin :speed="50" :misses="4">Vi är KRIG</v-scrollin>
    </h1>

    <toggle-switch
      :options="myOptions"
      :disabled="false"
      @change="updateMap($event.value)"
      @selected="selectedMethod()"
      v-model="selectedMapOption"
      :value="selectedMapOption"
      :name="name"
      :group="switchGroup"
    />

    <!-- <div id="lineDrawing">
      <svg viewBox="0 0 111.18 74.7">
        <polygon class="cls-1" points="0.38 49.94 0.44 25.48 69.57 0.38 69.57 24.81 0.38 49.94" />
        <polygon class="cls-1" points="69.57 0.38 83.29 8.19 83.29 32.63 69.57 24.81 69.57 0.38" />
        <polygon class="cls-1" points="63.05 15.49 83.29 8.19 83.29 32.63 63.05 39.93 63.05 15.49" />
        <polygon class="cls-1" points="0.44 25.48 13.98 33.3 13.91 57.75 0.38 49.94 0.44 25.48" />
        <polygon class="cls-1" points="38.19 24.55 38.19 48.98 13.91 57.75 13.98 33.3 38.19 24.55" />
        <polygon class="cls-1" points="51.75 24.46 28.33 41.91 28.33 66.04 51.61 49 51.75 24.46" />
        <polygon class="cls-1" points="51.75 24.46 38.19 24.55 38.19 48.98 51.61 49 51.75 24.46" />
        <polygon class="cls-1" points="51.75 24.46 51.61 49 28.33 66.04 28.33 41.91 51.75 24.46" />
        <polygon class="cls-1" points="63.05 15.49 63.05 39.93 95.64 39.76 95.64 15.32 63.05 15.49" />
        <polyline class="cls-1" points="110.81 48.57 95.64 39.76 95.64 15.32 110.81 24.38" />
        <polygon class="cls-1" points="28.33 41.91 42.68 49.87 42.61 74.32 28.33 66.04 28.33 41.91" />
        <polygon class="cls-1" points="42.68 49.87 42.68 74.32 77.12 48.79 77.12 24.38 42.68 49.87" />
        <rect class="cls-1" x="77.12" y="24.38" width="33.69" height="24.19" />
      </svg>
    </div> -->

    <PostList
    v-for="edge in $page.allPost.edges"
    :key="edge.node.id"
    :post="edge.node"
    />
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

<style>
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
</style>
