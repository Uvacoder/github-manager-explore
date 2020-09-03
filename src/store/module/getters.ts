import { GetterTree } from 'vuex'
import { StoreInterface } from '../index'
import { StateInterface } from './state'

const getters: GetterTree<StateInterface, StoreInterface> = {
  getProfile: (state) => state.profile,
  getUrl: (state) => state.url,
  getConfirm: (state) => state.confirm,
  getGraph: (state) => state.graph,
  getNotify: (state) => state.notify
}

export default getters
