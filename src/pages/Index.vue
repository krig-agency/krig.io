<template>
  <Layout>
    <!-- <div class="container" v-rellax data-rellax-speed="-2" data-rellax-percentage="0.8"> -->
    <div class="container" v-rellax data-rellax-speed="-3" data-rellax-mobile-speed="0">
      <!-- <section class="welcome-home" v-scroll-reveal.reset> -->
      <section class="welcome-home">
        <h1 class="headline-mega">
          <span class="headline-mega__we">
            <v-scrollin :speed="60" :misses="2">We are</v-scrollin>
          </span>
          <span class="headline-mega__krig">
            <v-scrollin :speed="100" :misses="3">KRIG</v-scrollin>
          </span>
        </h1>
      </section>
    </div>

    <!-- <div class="container" v-rellax data-rellax-speed="2" data-rellax-percentage="0.8"> -->
    <div class="hi-there">
      <!-- <div class="hi-there" v-scroll-reveal.reset> -->
      <section class="content-wrap intro-puff">
        <h2>All female Swedish digital agency.</h2>
        <h3 class="yellow">A combination of programming for the web and designing for the eye and mind.</h3>
        <p>KRIG's passion is to design and develop the web with focus on accessibility, UX and UI. KRIG has built user experiences and technical solutions since 2017, with and for sensible organisations, companies and collaborators who has similar matters of the heart.</p>
      </section>
    </div>

    <!-- <div class="container" v-rellax data-rellax-speed="-2" data-rellax-percentage="0.2"> -->
    <div class="hi-krig">
      <div class="hi-krux" v-rellax data-rellax-speed="1.5" data-rellax-mobile-speed="0">
        <section class="content-wrap vanno-puff">
          <h2 class="hi-krux__headline">Vanno's up?</h2>
          <div class="content-wrap__img"><g-image src="~/assets/images/vanno.jpg" /></div>
          <div class="hi-krux__text">
            <h4>What the krUX is going on?!</h4>
            <p>Get the latest news from KRIG and the krUX product.</p>
            <a href="mailto:hello@krig.io"class="button button--cta">Sign me up!</a>
          </div>
        </section>
      </div>

      <div class="hi-buddies" v-rellax data-rellax-speed="-0.6" data-rellax-mobile-speed="0">
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
          <!-- <a href="https://ikff.se/" class="buddy" target="_blank"><g-image src="~/assets/images/ikff_logo.svg" /></a> -->
        </section>
      </div>
    </div>
    <!-- <div class="container" v-rellax data-rellax-speed="2" data-rellax-percentage="0.6"> -->
    <div class="more-things">
      <div class="insta-widget" v-rellax data-rellax-speed="1.5" data-rellax-mobile-speed="0">
        <InstaPost />
      </div>
      <!-- <div class="hi-there" v-scroll-reveal.reset> -->
      <div class="whats-up" v-rellax data-rellax-speed="-0.5" data-rellax-mobile-speed="0">
        <section class="content-wrap up-puff intro-puff">
          <h2>What's up?</h2>
          <h3>What we do</h3>
          <p>UX design and front end development for <span><a class="up--link" href="https://www.njorda.se/">Njorda app</a></span></p>
          <p>Design and development for <span><a class="up--link" href="https://menskompetens.se/">Menskompetens</a></span></p>
          <p>Development for <span><a class="up--link" href="https://www.smslivraddare.se/">SMS-Livräddare</a></span></p>
          <h3 class="say-headline">What they say</h3>
          <p>BREAKIT <span><a class="up--link" href="https://www.breakit.se/artikel/19279/krigio-flyttade-fran-stan-till-landet-man-har-en-annan-frihet">Moving the HQ</a></span> and
            <span><a class="up--link" href="https://www.breakit.se/artikel/22244/skaffar-getter-till-foretaget-tar-det-har-ganget-impact-challenge-pa-storst-allvar-av-alla/%20target="> Impact Challenge</a></span></p>
            <p>Tycker om Ovanåker <span><a class="up--link" href="https://www.ovanaker.se/omkommunen/informationochkommunikation/tyckeromovanakerfdfordeledsbynalfta/artiklarurtyckeromovanaker/enannanlivskvalitet.5618.html">A different life quality</a></span></p>
          </section>
        </div>
      </div>

    </Layout>
  </template>

  <script>
  // import PostList from '../components/PostList';
  import VScrollin from 'vue-scrollin';
  import VueScrollSnap from "vue-scroll-snap";
  import InstaPost from '../components/InstaPost'

  export default {
    components: {
      "v-scrollin": VScrollin,
      InstaPost,
    },
    metaInfo: {
      title: 'Hello there!'
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

  .hi-krig,
  .more-things {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @include sm {
      flex-direction: row;
    }
  }

  .more-things {
    margin-bottom: 5rem;

    @include sm {
      margin-bottom: 10rem;
    }
  }

  .content-wrap {
    position: static;
    margin: 1rem;
    align-self: flex-start;
    box-sizing: border-box;

    @include mini {
      margin: 2rem;
    }

    @include sm {
      margin: 3rem;
    }

    @include md {
      margin: 5rem;
    }
  }

  .container {
    postion: static;

    @include sm-max {
      transform: none !important;
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
      bottom: 20px;
      left: 2rem;
      z-index: 1;
      margin: 0;
      color: white;
      text-align: left;
      line-height: 1;
      // mix-blend-mode: difference;

      @include sm {
        bottom: 1rem;
        left: 2.5rem;
      }

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

  .whats-up {
    width: 100%;
    height: auto;
    align-self: flex-end;

    @include sm {
      max-width: 50%;
    }

    @include sm-max {
      transform: none !important;
    }

    .up-puff {
      max-width: 100%;

      @include sm {
        max-width: 100%;
        margin: 3rem;
      }

      @include md {
        margin: 5rem;
      }
    }
  }

  .say-headline {
    margin-top: 3rem;
  }

  .intro-puff {
    max-width: 100%;
    color: white;
    background-color: black;
    box-shadow: 0 10px 50px 2px rgba(0,0,0,0.05);
    padding: 2rem;
    margin: 1rem;

    @include mini {
      margin: 2rem;
    }

    @include sm {
      max-width: 40%;
      margin: 3rem;
    }

    @include md {
      margin: 5rem 15rem 5rem;
    }

    @include xl {
      padding: 1.25rem 3rem 3.25rem 3rem;
    }
  }

  .vanno-puff {
    position: relative;
    max-width: 100%;
    align-self: flex-start;
    left: 0;
    padding: 0;
    color: white;
    box-shadow: 0 10px 50px 2px rgba(0,0,0,0.05);
  }

  .hi-krux {
    display: flex;
    flex-direction: column;
    min-width: 100%;

    @include sm {
      flex-direction: row;
      min-width: 40%;
      // margin-top: -5rem;
    }

    @include sm-max {
      transform: none !important;
    }

    &__headline {
      position: absolute;
      top: 2rem;
      right: 0;
      font-style: italic;
      text-align: right;
      text-shadow: 4px 4px 0px black;

      @include sm {
        right: -4rem;
      }
    }

    &__text {
      position: relative;
      background-color: black;
      padding: 0.2rem 1.5rem 1rem;
      margin: -10px 0 0 0;

      p {
        font-size: 0.875rem;
        width: 60%;
      }
    }
  }

  .insta-widget {
    // margin: 2rem;
    padding: 1rem;
    width: 100%;
    // margin: -10px;
    overflow: hidden;
    box-sizing: border-box;

    @include mini {
      padding: 2rem;
    }

    @include sm {
      width: 40%;
      padding: 3rem;
    }

    @include md {
      padding: 5rem;
    }

    @include sm-max {
      transform: none !important;
    }

    .post-insta {
      min-width: 100%;
    }
  }


  .hi-buddies {
    max-width: 100%;
    background-color: white;
    align-self: flex-end;
    margin: 1rem;
    box-shadow: 0 10px 50px 2px rgba(0,0,0,0.05);

    @include mini {
      margin: 2rem;
    }

    @include sm {
      max-width: 45%;
    }

    @include md {
      margin: 5rem;
    }

    @include sm-max {
      transform: none !important;
    }

    .buddies-section {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 50px;
      padding: 3rem;
      justify-items: center;
      align-items: center;

      @include sm {
        padding: 4rem;
      }

      img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);

        &:hover {
          filter: none;
        }
      }
    }
  }

  .hi-there {
    display: flex;
    justify-content: flex-end;
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

  .up--link {
    color: yellow;
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
  $animationTime: 0s + calc($totalTime / ($items * $animationSpeed * 2));
  // Calculate show time in seconds (how long the element is displayed)
  $showTime: calc((0s + $totalTime - calc($animationTime * $items)) / $items);

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
