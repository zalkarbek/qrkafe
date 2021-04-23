import lodash from 'lodash';

export default {
  install(Vue) {
    window.$lodash = lodash;
    Object.defineProperties(Vue.prototype, {
      lodash: {
        get() {
          return lodash;
        },
      },
      $lodash: {
        get() {
          return lodash;
        },
      },
    });
  },

};
