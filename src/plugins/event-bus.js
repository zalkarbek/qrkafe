/* eslint-disable func-names */

import Vue from 'vue';

const EventBus = new Vue();

Plugin.install = function (vue) {
  window.$eventBus = EventBus;
  Object.defineProperties(vue.prototype, {
    $eventBus: {
      get() {
        return EventBus;
      },
    },
  });
};
export default Plugin;
