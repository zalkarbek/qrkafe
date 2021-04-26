<template>
  <div class="nk-wrap nk-wrap-nosidebar">
    <div class="nk-content ">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  async mounted() {
    document.body.classList.add(
        'nk-body',
        'ui-rounder',
        'npc-default',
        'pg-auth',
        'no-touch',
        'nk-nio-theme',
        'bg-lighter'
    )
  },
  destroyed () {
    document.body.classList.remove(
        'nk-body',
        'ui-rounder',
        'npc-default',
        'pg-auth',
        'no-touch',
        'nk-nio-theme',
        'bg-lighter'
    )
  },
}
</script>
