import apiFactory from "@/api";

export default {
    install(Vue) {
        const api = apiFactory({
            $axios: Vue.$axios,
            $store: Vue.$store
        })
        Object.defineProperties(Vue.prototype, {
            api: {
                get() {
                    return api;
                },
            },
            $api: {
                get() {
                    return api;
                },
            },
        });
    },
};
