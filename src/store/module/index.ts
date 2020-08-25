import { Module } from 'vuex'
import { StoreInterface } from '../index'
import state, { StateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const mainModule: Module<StateInterface, StoreInterface> = {
  namespaced: false,
  actions,
  getters,
  mutations,
  state
}

export default mainModule
