import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

export default {
  install(Vue) {
    window.$moment = moment;
    Object.defineProperties(Vue.prototype, {
      moment: {
        get() {
          return moment;
        },
      },
      $moment: {
        get() {
          return moment;
        },
      },
    });
  },

};

export { moment };
