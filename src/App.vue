<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
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
