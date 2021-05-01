import TimeOut from '@/class/TimeOut';

const timer = new TimeOut();

export default {
    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            $timer: {
                get() {
                    return timer;
                },
            },
        });
    }
}
