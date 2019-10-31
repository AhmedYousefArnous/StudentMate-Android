import *  as actions from './actions'
import *  as mutations from './mutations'
import *  as getters from './getters'
import *  as state from './state'

export default {
    state,
    getters: Object.assign({}, getters),
    mutations,
    actions
}