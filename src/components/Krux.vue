<template>
  <div class="krux">
    <div class="krux__menu">
      <span class="fab-action-button" @click="showToolbar = !showToolbar" :data-tooltip="MenuText" :aria-label="MenuText">
        <i class="fab-action-button-icon settings-icon">
          <icon-base width="36" height="36" icon-name="IconKrux"><icon-krux /></icon-base>
        </i>
      </span>
      <transition name="fade">
        <div class='accessibility-toolbar' v-if="isMobile || showToolbar">
          <ul class="accessibility-items">
            <li class="accessibility-item">
              <a class="accessibility-menu-item" :data-tooltip="accessibileFontSizeText" v-bind:class="{ active: accessibilityStates.accessibileFontSize }" @click="toggleState('accessibileFontSize')" :aria-label="accessibileFontSizeText">
                <i class="accessibility-menu-item-icon">
                  <icon-base v-if='accessibilityStates.accessibileFontSize' width="28" height="30" icon-color="white" icon-name="IconSmalltext"><icon-smalltext /></icon-base>
                  <icon-base v-else width="30" height="30" icon-color="blue" icon-name="IconLargetext"><icon-largetext /></icon-base>
                </i>
              </a>
            </li>
            <li class="accessibility-item">
              <a class="accessibility-menu-item" :data-tooltip="highlightLinksText" v-bind:class="{ active: accessibilityStates.highlighted }" @click="toggleState('highlighted')" :aria-label="highlightLinksText">
                <i class="accessibility-menu-item-icon">
                  <icon-base v-if='accessibilityStates.highlighted' width="54" height="54" icon-color="white" icon-name="IconHidelink"><icon-hidelink /></icon-base>
                  <icon-base v-else width="54" height="54" icon-color="blue" icon-name="IconShowlink"><icon-showlink /></icon-base>
                </i>
              </a>
            </li>
            <li class="accessibility-item">
              <a class="accessibility-menu-item" :data-tooltip="accessibileCleanText" v-bind:class="{ active: accessibilityStates.accessibileClean }" @click="toggleState('accessibileClean')" :aria-label="accessibileCleanText">
                <i class="accessibility-menu-item-icon">
                  <icon-base v-if='accessibilityStates.accessibileClean' width="32" height="32" icon-color="white" icon-name="IconUnclean"><icon-unclean /></icon-base>
                  <icon-base v-else width="43" height="43" icon-color="blue" icon-name="IconClean"><icon-clean /></icon-base>
                </i>
              </a>
            </li>
            <li class="accessibility-item">
              <a class="accessibility-menu-item" :data-tooltip="invertColorsText" v-bind:class="{ active: accessibilityStates.inverted }" @click="toggleState('inverted')" :aria-label="invertColorsText">
                <i class="accessibility-menu-item-icon">
                  <icon-base v-if='accessibilityStates.inverted' width="67" height="67" icon-color="white" icon-name="IconLight"><icon-light /></icon-base>
                  <icon-base v-else width="67" height="67" icon-name="IconNight" icon-color="blue"><icon-night /></icon-base>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

import IconBase from './IconBase.vue'
import IconKrux from './icons/KruxLogo.vue'
import IconTest from './icons/IconTest.vue'
import IconLargetext from './icons/IconLargetext.vue'
import IconSmalltext from './icons/IconSmalltext.vue'
import IconNight from './icons/IconNight.vue'
import IconLight from './icons/IconLight.vue'
import IconHidelink from './icons/IconHidelink.vue'
import IconShowlink from './icons/IconShowlink.vue'
import IconUnclean from './icons/IconUnclean.vue'
import IconClean from './icons/IconClean.vue'

export default {
  name: 'App',
  components: {
   IconBase,
   IconKrux,
   IconTest,
   IconLargetext,
   IconSmalltext,
   IconNight,
   IconLight,
   IconHidelink,
   IconShowlink,
   IconUnclean,
   IconClean
 },
  props: {
    MenuText: {
      type: String,
      default: "Your Experience"
    },
    invertColorsText: {
      type: String,
      default: "Invert Colors"
    },
    highlightLinksText: {
      type: String,
      default: "highlight Links"
    },
    accessibileFontSizeText: {
      type: String,
      default: "Text Size"
    },
    accessibileCleanText: {
      type: String,
      default: "Clean"
    },
  },
  data() {
    return {
      accessibilityStates: {
        inverted: false,
        highlighted: false,
        accessibileFontSize: false,
        accessibileClean: false,
      },
      showToolbar: true,
      windowWidth: window.innerWidth
    }
  },
  methods: {
    toggleState(state) {
      this.accessibilityStates[state] = !this.accessibilityStates[state]
      this.applyState(state)
    },
    applyState(state) {
      if (state === "inverted") {
        this.accessibilityStates[state] ?
        document.documentElement.classList.add("accessibility-contrast") :
        document.documentElement.classList.remove("accessibility-contrast")
      } else if (state === "accessibileClean") {
          this.accessibilityStates[state] ?
          document.documentElement.classList.add("accessibility-clean") :
          document.documentElement.classList.remove("accessibility-clean")
      } else if (state === "highlighted") {
        this.hightlightLinks()
      } else if (state === "accessibileFontSize") {
        this.accessibilityStates[state] ?
        document.documentElement.classList.add("accessibility-font") :
        document.documentElement.classList.remove("accessibility-font")
      }
    },
    resetInvertContrast() {
      this.accessibilityStates.inverted = false
      document.documentElement.classList.remove("accessibility-contrast")
    },
    resetClean() {
      this.accessibilityStates.accessibileClean = false
      document.documentElement.classList.remove("accessibility-clean")
    },
    resetHighlightLinks() {
      this.accessibilityStates.highlighted = false
      this.hightlightLinks()
    },
    hightlightLinks() {
      for (let link of this.links) {
        if (!link.classList.contains("accessibility-menu-item")) {
          this.accessibilityStates.highlighted ? link.classList.add("accessibility-highlight-link") : link.classList.remove("accessibility-highlight-link")
        }
      }
    },
    invertContrast(percent) {
      document.documentElement.style.setProperty('filter', `invert(${percent})`)
    }
  },
  computed: {
    links() {
      return [...document.querySelectorAll('a')]
    },
    isMobile() {
      return this.windowWidth <= 768
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })

    if (localStorage.getItem('accessibility-settings')) {
      this.accessibilityStates = JSON.parse(localStorage.getItem('accessibility-settings'))
      for (var state in this.accessibilityStates) {
        if (this.accessibilityStates[state]) this.applyState(state)
      }
    }
  },
  watch: {
    accessibilityStates: {
      handler() {
        localStorage.setItem('accessibility-settings', JSON.stringify(this.accessibilityStates));
      },
      deep: true,
    },
  }
}
</script>

<style>

body,
html {
  font-size: 18px;
  backgorund-color: white;
}

ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

svg {
  margin-bottom: 0;
}

[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
  word-break: keep-all;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
}

[data-tooltip]:before {
  display: block;
  position: absolute;
  bottom: 105%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 5px;
  padding: 7px;
  width: auto;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 0.85rem;
  line-height: 1.2;
  font-style: normal;
  font-weight: normal;
  word-break: keep-all;
  white-space: nowrap;
}

@media only screen and (min-width: 768px) {
  [data-tooltip]:before {
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    left: auto;
    right: calc(100% + 10px);
    margin-bottom: 5px;
    padding: 7px 10px;
    width: auto;
    background-color: #141414;
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14;
    line-height: 1.2;
    white-space: nowrap;
  }
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before {
  visibility: visible;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

.accessibility-items {
  list-style-type: none;
  display: flex;
}

@media only screen and (min-width: 768px) {
  .accessibility-items {
    flex-direction: column;
    width: auto;
  }
}

.accessibility-item {
  display: inline-block;
  width: 25%;
}

@media only screen and (min-width: 768px) {
  .accessibility-item {
    display: block;
  }
}

.accessibility-toolbar {
  width: auto;
}

.accessibility-menu-item-icon {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease;
}

.accessibility-menu-item:hover .accessibility-menu-item-icon {
  font-size: 30px;
}

.accessibility-menu-item {
  display: block;
  text-align: center;
  width: 100%;
  height: 66px;
  transition: all 0.3s ease;
  color: #BF344B;
  background: #F4F4F4;
  font-size: 30px;
  cursor: pointer;
  box-sizing: border-box;
}

@media only screen and (min-width: 768px) {
  .accessibility-menu-item {
    width: 66px;
  }
}

.active {
  color: white;
  background-color: blue;
}

.accessibility-font {
  font-size: 1.25em;
  font-size: 1.25rem;
}

.accessibility-contrast {
  -webkit-filter: invert(100%);
  -moz-filter: invert(100%);
  filter: invert(100%);
  min-height: 100vh;
}

.accessibility-greyscale.accessibility-contrast {
  -webkit-filter: grayscale(100%) invert(100%);
  -moz-filter: grayscale(100%) invert(100%);
  filter: grayscale(100%) invert(100%);
}

.accessibility-highlight-link {
  background-color: black !important;
  color: yellow !important;
  text-decoration: underline !important;
}

.accessibility-clean .content-wrap img:not(.krux-keep) {
  display: none;
  visibility: hidden;
  opacity: 0;
}

.accessibility-clean .app-footer,
.accessibility-clean main,
.accessibility-clean .site-header__navigation,
.accessibility-clean .blood-drop-burger {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    filter: grayscale(100%);
}

.accessibility-clean .app-footer img {
    display: inline-block;

    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    filter: grayscale(100%);
}

.accessibility-clean > body {
  background-color: white;
  color: black;
}

.accessibility-clean img {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  filter: grayscale(100%);
}

.krux {
  display: block;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
}
@media only screen and (min-width: 768px) {
  .krux {
    top: 20px;
    left: auto;
    right: 20px;
    bottom: auto;
    width: auto;
  }
}

.krux__menu {
  position: static;
}

.fab-action-button {
  cursor: pointer;
  position: relative;
  display: none;
  width: 66px;
  height: 66px;
  background-color: blue;
  -webkit-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 2px 7px 0px rgba(0,0,0,0.08);
}

@media only screen and (min-width: 768px) {
  .fab-action-button {
    display: block;
  }
}

.fab-action-button-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* .settings-icon {
  animation-name: spin;
  animation-duration: 10000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  top: 28%;
  left: 28%;
} */
/* @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
} */

.accessibility-menu-item-icon {
  transition: all 0.2s ease;
}

.material-icons::selection {
  background: transparent;
}
</style>
