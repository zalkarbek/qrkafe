import * as types from '@/store/types'

export default {
    setCounter({ commit }, { counter }) {
        commit(types.SET_COUNTER, { counter })
    },
}
