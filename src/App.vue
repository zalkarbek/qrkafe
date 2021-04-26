<template>
  <div id="app" class="nk-app-root">
    <div class="nk-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$timer.pause(500)
    await this.$loadScript('/js/bundle.js')
    await this.$timer.pause(1000)
    await this.$loadScript('/js/scripts.js')
  },
  destroyed () {},
}
</script>

<style lang="scss"></style>
