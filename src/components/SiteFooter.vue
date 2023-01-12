<template>
    <footer class="footer">
      <div class="footer--click" @click="showToolbar = !showToolbar">
        <g-image class="footer--click-icon" src="~/assets/images/bye.svg" />
      </div>
      <transition name="fade">
      <div class="footer--content" v-if="isMobile || showToolbar">
        <p>KRIG Agency I <span><a href="tel:0739825395">073-9825395</a></span> I <span><a class="mail-link"href="mailto:hello@krig.io">hello@krig.io</a></span></p>
        <div class="some">
          <a href="https://www.facebook.com/krigio.agency"><g-image class="some-icon" src="~/assets/images/icon-fb.svg" /></a>
          <a href="https://www.instagram.com/krig_agency/"><g-image class="some-icon" src="~/assets/images/icon-instagram.svg" /></a>
          <a href="https://github.com/krig-agency"><g-image class="some-icon" src="~/assets/images/icon-github.svg" /></a>
        </div>
      </div>
</transition>
    </footer>
</template>

<script>

export default {
  name: 'SiteFooter',
  data() {
    return {
      showToolbar: false,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    toggleFooterContent() {
      this.showFooterContent = !this.showFooterContent
    }
  }
}
</script>

<style lang="scss">

.footer {
  display: flex;
  position: relative;
  right: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;

  @include sm {
    padding: 20px;
  }
}

.footer--click {
  position: static;
  z-index: 1;
  flex: 0 0 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-left: 0;
  width: 100vw;
  height: 66px;
  background-color: blue;
  color: white;

  &:hover {
    cursor: help;
  }

  @include mini {
    width: 66px;
  }

  @include sm {
    width: 66px;
  }
}

.footer--click-icon {
  position: absolute;
  width: 46px;
  height: 46px;
  animation: wave 2.1s 0.6s infinite;
}

.footer--content {
  // position: absolute;¨
  flex: 1;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 5px 20px 5px 20px;
  background-color: white;
  height: 66px;
  color: blue;
  text-align: center;
  box-sizing: border-box;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  .mail-link {
    font-weight: 600;
  }

  .some {
    display: flex;

    a {
      display: block;
      height: 24px;
    }
  }

  .some-icon {
    margin: 0 0 0 20px;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
      opacity: 0.9;
    }
  }

  @include mini {
    padding-left: 86px;
    padding-right: 10px;
    padding-top: 0;
  }

  @include sm {
    position: relative;
    padding: 5px 20px 5px 20px;
    transform: translateY(0);
  }

  p {
    font-size: 14px;
    text-align: left;

    @include mini {
      font-size: 1rem;
    }
  }
}
</style>
