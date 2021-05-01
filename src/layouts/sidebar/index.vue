<template>
 <div class="nk-sidebar" data-content="sidebarMenu">
    <div class="nk-sidebar-bar">
      <sidebar-brand></sidebar-brand>
      <!--<< SIDEBAR ELEMENTS -->
      <div class="nk-sidebar-element">
        <div class="nk-sidebar-body">
          <div class="nk-sidebar-content" data-simplebar>
            <sidebar-menu></sidebar-menu>
          </div>
        </div>
      </div>
      <!--SIDEBAR ELEMENTS >>-->
    </div>
   <div class="nk-sidebar-main is-light">
     <sidebar-main></sidebar-main>
   </div>
 </div>
</template>
<script>
import sidebarBrand from '@/layouts/sidebar/sidebar-brand'
import sidebarMenu from '@/layouts/sidebar/sidebar-menu'
import sidebarMain from '@/layouts/sidebar/sidebar-main'
export default {
  components: {
    sidebarBrand,
    sidebarMenu,
    sidebarMain
  }
}
</script>

