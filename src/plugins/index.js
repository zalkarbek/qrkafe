import Vue from 'vue';

// FontAwesome иконный шрифт
import './fontawesome';
import './bootstrap-vue';
import './bootstrap';
import AxiosPlugin from './axios';
import jQueryPlugin from './jquery';
import LodashPlugin from './lodash';
import EventBusPlugin from './event-bus';
import TimerPlugin from './time-out';
import MomentPlugin from './moment';

Vue.use(AxiosPlugin);
Vue.use(jQueryPlugin);
Vue.use(LodashPlugin);
Vue.use(EventBusPlugin);
Vue.use(TimerPlugin);
Vue.use(MomentPlugin);
