<template>
  <Layout>
    <section class="welcome-home">
        <h1 class="headline-mega" v-parallax.absY="0.2">
          <span class="headline-mega__we">
            <v-scrollin :speed="60" :misses="2">We are</v-scrollin>
          </span>
          <span class="headline-mega__krig">
            <v-scrollin :speed="100" :misses="3">KRIG</v-scrollin>
          </span>
        </h1>
    </section>

    <div class="hi-there">
      <section class="content-wrap intro-puff" v-parallax.absY="-0.1">
        <h2>All female Swedish digital agency.</h2>
        <h3>A combination of programming for the web and designing for the eye and mind.</h3>
        <p>Vår passion ligger i att designa och utveckla för webben med fokus på tillgänglighet, UX, UI och programmering. Sen 2017 har vi byggt användarupplevelser och tekniska lösningar, med och för, vettiga organisationer, företag och samarbetspartners som jobbar med våra hjärtefrågor.</p>
      </section>
      <!-- <InstaPost /> -->
    </div>

    <div class="hi-krux">
      <section class="content-wrap vanno-puff" v-parallax.absY="0.5">
        <h2 class="hi-krux__headline">Vanno's up?</h2>
        <div class="content-wrap__img"><g-image src="~/assets/images/vanno.jpg" /></div>
        <div class="hi-krux__text">
          <h4>What the krUX is going on?</h4>
          <p>Get the latest news from KRIG and the krUX product.</p>
          <a href="/" class="button button--cta">Sign me up!</a>
        </div>
      </section>
      <!-- <InstaPost /> -->
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
import VueScrollSnap from "vue-scroll-snap";
// import InstaPost from '../components/InstaPost'

export default {
  components: {
    PostList,
    "v-scrollin": VScrollin,
    // InstaPost,
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

  el: '#app',
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

svg {
  fill: #eeff00;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
}

.content-wrap {
  position: absolute;
  margin: 5rem;
  padding: 1.25rem 4rem 3.25rem 4rem;
  color: white;
  background-color: black;
  align-self: start;
  box-shadow: 0 10px 50px 2px rgba(0,0,0,0.05);
  box-sizing: border-box;
}

.welcome-home {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  height: 100vh;

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
        animation: 2s blink ease infinite;
        animation-delay: 1s;
      }
    }
  }
}

.hi-there {
  display: flex;
  justify-content: flex-end;
  height: 100vh;
}

.intro-puff {
  position: absolute;
  max-width: 45%;

  h3 {
    color: yellow;
  }
}

.vanno-puff {
  position: relative;
  max-width: 30%;
  align-self: flex-start;
  left: 0;
  padding: 0;
  background-color: transparent;

  .hi-krux {
    &__headline {
      position: absolute;
      top: -1rem;
      right: -4rem;
      font-style: italic;
      text-shadow: 4px 4px 0px black;
    }

    &__text {
      position: relative;
      background-color: black;
      padding: 0.2rem 1.5rem 1rem;
      margin: -10px 0 0 0;

      p {
        font-size: 0.875rem;
        width: 70%;
      }
    }
  }

  .button--cta {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1rem 1rem 0.8rem 1rem;
    background-color: yellow;
    color: black;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
  }

  .content-wrap__img {

  }
}

@keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

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
