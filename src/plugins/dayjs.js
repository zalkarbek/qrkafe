import dayjs from 'dayjs';

export default {
  install(Vue) {
    window.$dayjs = dayjs
    Object.defineProperties(Vue.prototype, {
      dayjs: {
        get() {
          return dayjs;
        },
      },
      $dayjs: {
        get() {
          return dayjs;
        },
      },
    });
  },

}
