import Vue from 'vue';

import AxiosPlugin from './axios'
import jQueryPlugin from './jquery'
import LodashPlugin from './lodash'
import EventBusPlugin from './event-bus'
import TimerPlugin from './time-out'
import DayjsPlugin from './dayjs'
import ApiPlugin from './api'
import SocketPlugin from './socket'
import LoadScriptPlugin from '@/plugins/load-scripts'

import './styles'
import './bootstrap'
// FontAwesome иконный шрифт
import './fontawesome'
import './external-scripts'

Vue.use(AxiosPlugin)
Vue.use(jQueryPlugin)
Vue.use(LodashPlugin)
Vue.use(EventBusPlugin)
Vue.use(TimerPlugin)
Vue.use(DayjsPlugin)
Vue.use(ApiPlugin)
Vue.use(SocketPlugin)
Vue.use(LoadScriptPlugin)
