
import { SET_COUNTER } from '@/store/types'

export default {
    [SET_COUNTER](state, { counter }) {
        state.counter = counter
    },
}
