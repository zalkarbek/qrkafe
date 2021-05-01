import state from "@/store/counter/state"
import mutations from "@/store/counter/mutations"
import getters from "@/store/counter/getters"
import actions from "@/store/counter/actions"

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
