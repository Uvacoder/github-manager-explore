import { MutationTree } from 'vuex'
import { StateInterface } from './state'

const mutation: MutationTree<StateInterface> = {
  // setUser(state, user) {
  //   state.user = user
  // },
  createCleanClient(state) {
    // state.graph = Chain(state.url, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // Vue.prototype.$api = axios.create({
    //   baseURL: state.url
    // })
  },
  setClientCreate(state) {
    // state.graph = Chain(state.url, {
    //   headers: {
    //     ...state.user.headers?.headers,
    //     'Content-Type': 'application/json'
    //   }
    // })
  },
  setNotify(state, payload) {
    state.notify = payload
  },
  setConfirmDialog(state, payload) {
    state.confirm = payload
  }
}

export default mutation
