<template>
  <Layout>
    <section class="welcome-home">
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
    mouseOver: function(){
      this.active = !this.active;
    },
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
  },

  el: '#demo',
  data: {
    active: false
  },
  methods: {
    mouseOver: function(){
      this.active = !this.active;
    }
  }
}

</script>

<style lang="scss">

body {
  height: 100%;
  background-image: url("~@/assets/images/krig-crew.png");
  background-size: cover;
  background-position: bottom -50px right;
}

svg {
  fill: #eeff00;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
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
    left: 20px;
    z-index: 100;
    margin: 0;
    color: white;
    text-align: left;
    line-height: 1;
    // mix-blend-mode: difference;

    .v-scrollin {
      display: inline-block;
    }

    &__we {
      display: block;
      position: relative;

      .v-scrollin {
        position: relative;
      }

      &:hover {
        cursor: help;
        .we-are-krig {
          // display: block;
        }
      }
    }

    &__krig {
      display: inline-block;
      position: relative;

      &::after {
        position: absolute;
        top: 0;
        right: -2.5rem;
        display: inline-block;
        content: ".";
        color: blue;
      }
    }
  }
}

.we-are-krig {
  display: none;
  position: absolute;
  bottom: 0;
  left: 10vw;
  width: 30%;
  margin: 0;
  list-style-type: none;
  z-index: -1;

  img {
    width: 100%;
  }
}

// test swap images styles

.we-are-krig > li {
  opacity: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200px;
  text-align: center;
}

// .we-are-krig > *:nth-child(1) { background: lightsalmon; }
// .we-are-krig > *:nth-child(2) { background: lightsteelblue; }
// .we-are-krig > *:nth-child(3) { background: lightseagreen; }
// .we-are-krig > *:nth-child(4) { background: lightskyblue; }

// Animation settings
$totalTime: 2s;
$items: 4;
$animationSpeed: 13;

// Calculate animation time in seconds (how long the fade lasts)
$animationTime: 0s + $totalTime / ($items * $animationSpeed * 2);
// Calculate show time in seconds (how long the element is displayed)
$showTime: (0s + $totalTime - ($animationTime * $items)) / $items;

// Set animation for each element
@for $i from 1 through $items {
  .we-are-krig > *:nth-child(#{$i}) {
    // Delay is increased for each item
    // Starting with an offset of -$animationTime so the first element is displayed on load
    $delay: -$animationTime + ($animationTime + $showTime) * ($i - 1);
    animation: fadeinout $totalTime linear $delay infinite;
  }
}

// Calculate percentages of the display time for keyframes
$animationPercentage: 0% + 100 * (($animationTime / $totalTime));
$showPercentage: 0% + 100 * ($showTime / $totalTime);

@keyframes fadeinout {
  0% {
    opacity: 0;
  }
  #{$animationPercentage},
  #{$animationPercentage + $showPercentage} {
    opacity: 1;
  }
  #{$showPercentage + $animationPercentage * 2},
  100% {
    opacity: 0;
  }
}

</style>
