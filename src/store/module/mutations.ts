import { MutationTree } from 'vuex'
import { StateInterface } from './state'

const mutation: MutationTree<StateInterface> = {
  setProfile(state, payload) {
    state.profile = payload
  },
  setNotify(state, payload) {
    state.notify = payload
  },
  setConfirmDialog(state, payload) {
    state.confirm = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  }
}

export default mutation
