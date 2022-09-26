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
    </div>

    <div class="hi-krux">
      <section class="content-wrap vanno-puff" v-parallax.absY="0.5">
        <h2 class="hi-krux__headline">Vanno's up?</h2>
        <div class="content-wrap__img"><g-image src="~/assets/images/vanno.jpg" /></div>
        <div class="hi-krux__text">
          <h4>What the krUX is going on?!</h4>
          <p>Get the latest news from KRIG and the krUX product.</p>
          <a href="/" class="button button--cta">Sign me up!</a>
        </div>
      </section>

      <div class="hi-buddies" v-parallax.absY="-0.5">
        <section class="buddies-section">
          <div class="side-quote">Selected Clients</div>
          <a href="https://www.njorda.se/" class="buddy" target="_blank"><g-image src="~/assets/images/njorda-logo.svg" /></a>
          <a href="https://www.minnapalmqvist.com/" class="buddy" target="_blank"><g-image src="~/assets/images/Minna_Palmqvist-logo.png" /></a>
          <a href="https://hejalivet.com/" class="buddy" target="_blank"><g-image src="~/assets/images/hejalivet-red.png" /></a>
          <a href="https://fatta.nu/" class="buddy" target="_blank"><g-image src="~/assets/images/fatta-logo.svg" /></a>
          <a href="https://mensen.se/" class="buddy" target="_blank"><g-image src="~/assets/images/mensen-logo.svg" /></a>
          <a href="https://www.djurensratt.se/" class="buddy" target="_blank"><g-image src="~/assets/images/djurensratt.png" /></a>
          <a href="https://ellinor.se/" class="buddy" target="_blank"><g-image src="~/assets/images/logo_ellinor.png" /></a>
          <a href="https://operation1325.se/" class="buddy" target="_blank"><g-image src="~/assets/images/operation1325-2020-logo.png" /></a>
          <a href="https://psykologifabriken.se/" class="buddy" target="_blank"><g-image src="~/assets/images/psykologifabriken-logo.svg" /></a>
          <a href="https://www.smslivraddare.se/" class="buddy" target="_blank"><g-image src="~/assets/images/sms-logo.svg" /></a>
          <a href="https://studieforbunden.se/" class="buddy" target="_blank"><g-image src="~/assets/images/red-bull-logo.png" /></a>
          <a href="https://www.redbull.com/se-sv/energydrink/" class="buddy" target="_blank"><g-image src="~/assets/images/studieforbunden.png" /></a>
        </section>
      </div>
    </div>
    <div class="more-krig">
      <section class="insta-post content-wrap">
        <blockquote style = 'max-width:100%; background:-color:black;' class='instagram-media' data-instgrm-version='14'>
        <!-- replace this href with the link to the post -->
        <a href='https://www.instagram.com/p/CWA2UbCs6x_/' ></a>
      </blockquote>
    </section>
    </div>
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
// import InstagramEmbed from 'vue-instagram-embed';

// import VueScrollSnap from "vue-scroll-snap";
// import InstaPost from '../components/InstaPost'

export default {
  components: {
    PostList,
    "v-scrollin": VScrollin,
    // InstagramEmbed,
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

.insta-post {
  max-width: 100%;

  @include sm {
    max-width: 30%;
  }
  .instagram-media {
    background-color: black !important;

    body {
      background-color: black !important;
    }
  }
}

.content-wrap {
  position: static;
  margin: 5rem;
  align-self: start;
  box-sizing: border-box;

  @include sm {
    position: absolute;
  }
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
  height: auto;

  @include sm {
    height: 100vh;
  }

  .intro-puff {
    position: static;
    max-width: 100%;
    color: white;
    background-color: black;
    box-shadow: 0 10px 50px 2px rgba(0,0,0,0.05);
    padding: 1.25rem 4rem 3.25rem 4rem;

    @include md {
      position: absolute;
      max-width: 45%;
    }

    h3 {
      color: yellow;
    }
  }
}

.vanno-puff {
  position: relative;
  max-width: 80%;
  align-self: flex-start;
  left: 0;
  padding: 0;
  color: white;
  box-shadow: 0 10px 50px 2px rgba(0,0,0,0.05);

  @include md {
    max-width: 30%;
  }
}

.hi-krux {
  display: flex;
  flex-direction: column;

  @include md {
    flex-direction: row;
  }

  &__headline {
    position: absolute;
    top: 2rem;
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

.hi-buddies {
  max-width: 100%;
  background-color: #fff !important;
  align-self: flex-end;
  margin: 5rem;
  box-shadow: 0 10px 50px 2px rgba(0,0,0,0.05);

  @include md {
    max-width: 45%;
  }

  .buddies-section {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    padding: 4rem;
    justify-items: center;
    align-items: center;

    img {
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);

      &:hover {
        filter: none;
      }
    }
  }
}

.more-krig {
  display: flex;

  iframe {
    max-width: 100% !important;
    min-width: 100% !important;
  }
}

.side-quote {
  position: absolute;
  left: 2rem;
  top: 7rem;
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  font-size: 9rem;
  opacity: 0.05;
  z-index: -1;
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

/* INstagram embed hacking */

.Embed {
  .Header {
    background-color: green;
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
$animationTime: calc(0s + $totalTime / ($items * $animationSpeed * 2));
// Calculate show time in seconds (how long the element is displayed)
$showTime: 0s + $totalTime - calc(($animationTime * $items) / $items);;

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
$animationPercentage: 0% + 100 * calc($animationTime / $totalTime);
$showPercentage: 0% + 100 * calc($showTime / $totalTime);

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
