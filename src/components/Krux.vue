<template>
  <div class="krux">
    <div class="krux__menu">
      <span class="fab-action-button" @click="showToolbar = !showToolbar">
        <i class="material-icons fab-action-button-icon">
          settings
        </i>
      </span>
      <transition name="fade">
        <div class='accessibility-toolbar' v-if="isMobile || showToolbar">
          <ul class="accessibility-items">
            <li class="accessibility-item">
              <a class="accessibility-menu-item" :data-tooltip="invertColorsText" v-bind:class="{ active: accessibilityStates.inverted }" @click="toggleState('inverted')" :aria-label="invertColorsText">
                <i class="material-icons accessibility-menu-item-icon">
                  invert_colors
                </i>
              </a>
            </li>
            <li class="accessibility-item">
              <a class="accessibility-menu-item" :data-tooltip="highlightLinksText" v-bind:class="{ active: accessibilityStates.highlighted }" @click="toggleState('highlighted')" :aria-label="highlightLinksText">
                <i class="material-icons accessibility-menu-item-icon">
                  highlight
                </i>
              </a>
            </li>
            <li class="accessibility-item">
              <a class="accessibility-menu-item" :data-tooltip="grayscaleText" v-bind:class="{ active: accessibilityStates.greyscaled }" @click="toggleState('greyscaled')" :aria-label="grayscaleText">
                <i class="material-icons accessibility-menu-item-icon">
                  format_color_reset
                </i>
              </a>
            </li>
            <li class="accessibility-item">
              <a class="accessibility-menu-item" :data-tooltip="accessibileFontSizeText" v-bind:class="{ active: accessibilityStates.accessibileFontSize }" @click="toggleState('accessibileFontSize')" :aria-label="accessibileFontSizeText">
                <i class="material-icons accessibility-menu-item-icon">
                  format_size
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

export default {
  name: 'Krux',
  props: {
    invertColorsText: {
      type: String,
      default: "Invert Colors"
    },
    highlightLinksText: {
      type: String,
      default: "Highlight Links"
    },
    grayscaleText: {
      type: String,
      default: "Desaturate"
    },
    accessibileFontSizeText: {
      type: String,
      default: "Increase Text Size"
    }
  },
  data() {
    return {
      accessibilityStates: {
        inverted: false,
        highlighted: false,
        accessibileFontSize: false,
        greyscaled: false
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
      } else if (state === "greyscaled") {
        this.accessibilityStates[state] ?
        document.documentElement.classList.add("accessibility-greyscale") :
        document.documentElement.classList.remove("accessibility-greyscale")
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
    resetGrayscale() {
      this.accessibilityStates.greyscaled = false
      document.documentElement.classList.remove("accessibility-greyscale")
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
      console.log(this.isMobile)
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

<style scoped>

ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
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
  font-size: 12px;
  line-height: 1.2;
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
    font-size: 14px;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.accessibility-menu-item {
  display: block;
  text-align: center;
  width: 100%;
  height: 54px;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.2);
  color: black;
  font-size: 30px;
  cursor: pointer;
  box-sizing: border-box;
}

@media only screen and (min-width: 768px) {
  .accessibility-menu-item {
    width: 54px;
  }
}

.accessibility-menu-item:hover {
  color: blue;
  background: rgba(0, 0, 0, 0.05);
}

.active {
  background-color: #2196F3;
  color: blue;
  background: rgba(0, 0, 0, 0.05);
}
</style>

<style>
.accessibility-font {
  font-size: 1.25em;
  font-size: 1.25rem;
}
.accessibility-greyscale {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  filter: grayscale(100%);
  min-height: 100vh;
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
  padding: 3px;
  background-color: black !important;
  color: yellow !important;
  text-decoration: underline !important;
}
</style>


<style scoped style="scss">

.krux {
  display: block;
  position: fixed;
  z-index: 100;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 999;
}
@media only screen and (min-width: 768px) {
  .krux {
    top: 20px;
    right: 20px;
    left: auto;
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
  width: 54px;
  height: 54px;
  background-color: blue;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.1);
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
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

<style scoped>
/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: local("Material Icons"), local("MaterialIcons-Regular"),
  url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
  format("woff2");
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
