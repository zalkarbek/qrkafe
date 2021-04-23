import Vue from 'vue';

// FontAwesome иконный шрифт
import './fontawesome';
import './bootstrap-custom';
import './bootstrap';
import './styles'

import ApiPlugin from './api';
import jQueryPlugin from './jquery';
import LodashPlugin from './lodash';
import EventBusPlugin from './event-bus';
import TimerPlugin from './time-out';
import MomentPlugin from './moment';

Vue.use(ApiPlugin);
Vue.use(jQueryPlugin);
Vue.use(LodashPlugin);
Vue.use(EventBusPlugin);
Vue.use(TimerPlugin);
Vue.use(MomentPlugin);
