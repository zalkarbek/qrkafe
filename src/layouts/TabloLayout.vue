<template>
  <div class="nk-app-root">
    <qr-sidebar></qr-sidebar>
    <div class="nk-main">
      <div class="nk-wrap">
        <qr-header></qr-header>
        <div class="nk-content">
          <div class="container-fluid">
            <div class="nk-content-inner">
              <div class="nk-content-body">

                <div class="nk-block-head nk-block-head-custom">
                  <div class="nk-block-between">
                    <div class="nk-block-head-content">
                      <h4 class="nk-block-title">Все блюда</h4>
                    </div>
                    <div class="nk-block-head-content">
                      <div class="toggle-wrap nk-block-tools-toggle">
                        <div class="toggle-expand-content" data-content="pageMenu">
                          <ul class="nk-block-tools">
                            <li class="nk-block-tools-opt mr-2">
                              <div class="form-control-wrap">
                                <div class="form-icon form-icon-left">
                                  <em class="icon ni ni-search"></em>
                                </div>
                                <b-input type="text" placeholder="Поиск" />
                              </div>
                            </li>
                            <li class="nk-block-tools-opt">
                              <button class="btn btn-white">
                                <em class="icon ni ni-search"></em>
                                <span>Поиск</span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="nk-block-between">
                    <div class="nk-block-head-content mt-3">
                      <div class="btn-group btn-breadcrumb">
                        <button class="btn btn-danger"><i class="fas fa-home"></i></button>
                        <button class="btn btn-danger">Первые блюда</button>
                        <button class="btn btn-danger">Десерт</button>
                        <button class="btn btn-danger">Наша кухня</button>
                        <button class="btn btn-danger">Вторые блюда</button>
                        <button class="btn btn-danger">Напитки</button>
                        <button class="btn btn-danger">Газированные</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="nk-block nk-block-custom">
                  <router-view></router-view>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QrSidebar from '@/layouts/sidebar'
import QrHeader from '@/layouts/header'

export default {
  components: {
    QrSidebar,
    QrHeader
  },
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
