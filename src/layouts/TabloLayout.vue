<template>
  <div class="nk-wrap">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  async mounted() {
    document.body.classList.add(
        'nk-body',
        'ui-rounder',
        'npc-default',
        'has-sidebar',
        'no-touch',
        'nk-nio-theme',
    )
  },
  destroyed () {
    document.body.classList.remove(
        'nk-body',
        'ui-rounder',
        'npc-default',
        'has-sidebar',
        'no-touch',
        'nk-nio-theme',
    )
  },
}
</script>
