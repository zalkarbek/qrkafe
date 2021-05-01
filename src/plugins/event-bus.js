import Vue from 'vue';

const EventBus = new Vue();

export default {
  install(Vue) {
    window.$eventBus = EventBus;
    Object.defineProperties(Vue.prototype, {
      $eventBus: {
        get() {
          return EventBus;
        },
      },
    });
  }
}

