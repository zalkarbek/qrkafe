export default {
    host: process.env.NODE_ENV === 'development' ? process.env.VUE_APP_DEV_API_URL : process.env.VUE_APP_PROD_API_URL
}