export default {
    baseURL: process.env.NODE_ENV === 'development' ? process.env.VUE_APP_DEV_API_URL : process.env.VUE_APP_PROD_API_URL,
    responseType: 'json',
    responseEncoding: 'utf8',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
};
