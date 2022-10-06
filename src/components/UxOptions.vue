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
  name: 'UxOptions',
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
      default: "Text Size"
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
      showToolbar: true    }
    },
    methods: {
      toggleState(state) {
        this.accessibilityStates[state] = !this.accessibilityStates[state]
        this.applyState(state)
      },
      applyState(state) {
        if (state === "inverted") {
          this.resetHighlightLinks()
          this.resetGrayscale()
          this.accessibilityStates[state] ?
          document.documentElement.classList.add("accessibility-contrast") :
          document.documentElement.classList.remove("accessibility-contrast")
        } else if (state === "greyscaled") {
          this.resetHighlightLinks()
          this.resetInvertContrast()
          this.accessibilityStates[state] ?
          document.documentElement.classList.add("accessibility-greyscale") :
          document.documentElement.classList.remove("accessibility-greyscale")
        } else if (state === "highlighted") {
          this.resetGrayscale()
          this.resetInvertContrast()
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

  <style>

  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  [data-tooltip] {
    position: relative;
    z-index: 2;
    cursor: pointer;
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

  @media only screen and (max-width: 768px) {
    [data-tooltip]:before,
    [data-tooltip]:after {
      visibility: hidden !important;
      display: none !important;
    }
  }

  /* Position tooltip above the element */
  [data-tooltip]:before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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

  /* Triangle hack to make tooltip look like a speech bubble */
  [data-tooltip]:after {
    position: absolute;
    top: calc(50% - 5px);
    right: calc(100% + 5px);
    margin-left: -5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #141414;
    content: " ";
    z-index: 999;
    font-size: 0;
    line-height: 0;
  }

  /* Show tooltip content on hover */
  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
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
  }

  .accessibility-menu-item.active:hover {
    color: white;
  }

  .active {
    background-color: #2196F3;
    color: blue;
  }
  </style>

  <style>
  .accessibility-font {
    /* font-size: 1.25em; */
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
  .accessibility-highlight-link:not(.buddy) {
    padding: 3px;
    color: black !important;
    background: yellow;
    font-weight: bold;
    text-decoration: underline !important;
  }
  </style>


  <style style="scss">

  .ux-options {
    display: block;
    position: fixed;
    z-index: 9999;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 999;
  }
  @media only screen and (min-width: 768px) {
    .ux-options {
      top: 20px;
      right: 20px;
      left: auto;
      width: auto;
    }
  }

  .ux-options__menu {
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

  /*new old */
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
    color: blue;
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
  color: blue;
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
