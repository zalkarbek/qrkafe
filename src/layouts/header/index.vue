<template>
  <div class="nk-header nk-header-fluid is-light">
    <div class="container-fluid">
      <div class="nk-header-wrap">

        <div class="nk-header-search ml-3 ml-xl-0 text-center align-center">
          <div>
            <span class="fw-medium h4 mr-4">ЧЕК №16</span>
            <span class="h4 text-danger">Стол 7</span>
          </div>
        </div>

        <header-tools></header-tools>
      </div>
    </div>
  </div>
</template>
<script>
import headerTools from './header-tools'

export default {
  components: {
    headerTools
  }
}
</script>
