/* eslint-disable no-underscore-dangle,func-names */
import axios from 'axios';
import config from '../config/axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const _axios = axios.create(config);

_axios.interceptors.request.use(
    conf => conf,
    error => Promise.reject(error),
);

// Add a response interceptor
_axios.interceptors.response.use(
    response => response,
    error => Promise.reject(error),
);

export default {
    install(Vue) {
        window.$axios = _axios;
        Object.defineProperties(Vue.prototype, {
            axios: {
                get() {
                    return _axios;
                },
            },
            $axios: {
                get() {
                    return _axios;
                },
            },
        });
    },
};

export { _axios };
