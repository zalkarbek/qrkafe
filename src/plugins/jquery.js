import jQuery from 'jquery';

export default {
  install(Vue) {
    window.$ = jQuery;
    window.jQuery = jQuery;
    Object.defineProperties(Vue.prototype, {
      jquery: {
        get() {
          return jQuery;
        },
      },
      $jquery: {
        get() {
          return jQuery;
        },
      },
    });
  },
}
