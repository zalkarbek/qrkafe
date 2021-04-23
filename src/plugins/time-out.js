/* eslint-disable func-names */

import { TimeOut } from '../class/TimeOut';

const timer = new TimeOut();

Plugin.install = function (vue) {
  Object.defineProperties(vue.prototype, {
    $timer: {
      get() {
        return timer;
      },
    },
  });
};
export default Plugin;
